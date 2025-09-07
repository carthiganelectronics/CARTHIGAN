'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Cart from '@/components/Cart'
import { supabase } from '@/lib/supabaseClient'

interface Product {
  id: string
  name: string
  description: string | null
  category: string
  image_url: string | null
  price: number
  in_stock: boolean
  created_at: string
  quantity?: number
}

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setCartItems(parsedCart)
      } catch (e) {
        console.error('Error parsing cart data', e)
      }
    }
  }, [])

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  // Fetch products from Supabase
  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('in_stock', true)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching products:', error)
        setError('Failed to load products')
        return
      }

      setProducts(data || [])
    } catch (err) {
      console.error('Error:', err)
      setError('Failed to load products')
    } finally {
      setLoading(false)
    }
  }

  // Fallback products for when database is empty
  const fallbackProducts: Product[] = [
    {
      id: 'fallback-1',
      name: 'Sample Product',
      description: 'This is a sample product. Add your own products through the admin app.',
      category: 'General',
      image_url: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 10000,
      in_stock: true,
      created_at: new Date().toISOString()
    }
  ]

  // Use products from database or fallback
  const allProducts = products.length > 0 ? products : fallbackProducts

  // Get unique categories
  const categories = ['all'].concat(Array.from(new Set(allProducts.map(product => product.category))))

  // Filter products
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const addToCart = (product: Product) => {
    // Check if item is already in cart
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id)

    if (existingItemIndex !== -1) {
      // If item exists, update quantity
      const updatedCart = [...cartItems]
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: (updatedCart[existingItemIndex].quantity || 0) + 1
      }
      setCartItems(updatedCart)
    } else {
      // If new item, add to cart with quantity 1
      setCartItems(prev => [...prev, { ...product, quantity: 1 }])
    }
    
    // Show cart after adding item
    setShowCart(true)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-dark-slate dark:text-off-white">Our Products</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover our range of products and services for students, engineers, and creative professionals
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-12 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Search */}
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search Services
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by name or description..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <select
              id="category"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          <span className="ml-4 text-lg text-gray-600 dark:text-gray-400">Loading products...</span>
        </div>
      ) : error ? (
        <div className="text-center py-20">
          <p className="text-lg text-red-600 dark:text-red-400 mb-4">{error}</p>
          <button
            onClick={fetchProducts}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="h-56 bg-gray-300 dark:bg-gray-700 relative">
                <img
                  src={product.image_url || 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500'}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-uganda-red text-white text-xs font-bold px-2 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark-slate dark:text-off-white">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description || 'No description available'}</p>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-uganda-red">
                    UGX {product.price.toLocaleString()}
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-uganda-yellow hover:bg-uganda-yellow/90 text-dark-slate font-bold py-2 px-4 rounded-full transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-dark-slate dark:text-off-white">Need Something Specific?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Can't find exactly what you're looking for? Contact us and we'll help you find or create the perfect solution.
        </p>
        <Link 
          href="/contact" 
          className="bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Contact Us
        </Link>
      </div>

      {/* Floating Cart Button */}
      <button 
        onClick={() => setShowCart(true)}
        className="fixed bottom-6 right-6 bg-uganda-red text-white p-4 rounded-full shadow-lg z-40"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4 M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
        {cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0) > 0 && (
          <span className="absolute -top-2 -right-2 bg-uganda-yellow text-dark-slate text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0)}
          </span>
        )}
      </button>

      {/* Cart Component */}
      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </div>
  )
}