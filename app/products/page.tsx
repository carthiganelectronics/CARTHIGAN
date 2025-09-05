'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Cart from '@/components/Cart'

interface Service {
  id: number
  name: string
  description: string
  category: string
  image: string
  price: number
  quantity?: number
}

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState<Service[]>([])

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

  // Mock data for services
  const allServices: Service[] = [
    // Electrical Components
    {
      id: 1,
      name: 'Resistors',
      description: 'Wide range of resistors for all your circuit needs',
      category: 'Electrical Components',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 5000
    },
    {
      id: 2,
      name: 'Capacitors',
      description: 'Various types and sizes of capacitors for electronics projects',
      category: 'Electrical Components',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 8000
    },
    {
      id: 3,
      name: 'Microcontrollers',
      description: 'Arduino, Raspberry Pi, and other microcontrollers for embedded systems',
      category: 'Electrical Components',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 45000
    },
    {
      id: 4,
      name: 'Sensors',
      description: 'Motion, temperature, humidity, and other sensors for IoT projects',
      category: 'Electrical Components',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 12000
    },
    {
      id: 5,
      name: 'LEDs & Displays',
      description: 'LEDs, OLED displays, LCD screens for visual interfaces',
      category: 'Electrical Components',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 30000
    },
    
    // Engineering Services
    {
      id: 6,
      name: 'PCB Design',
      description: 'Professional PCB design services for your electronic projects',
      category: 'Engineering Services',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 150000
    },
    {
      id: 7,
      name: 'Embedded Systems',
      description: 'Custom embedded systems development for IoT and automation',
      category: 'Engineering Services',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 200000
    },
    {
      id: 8,
      name: 'Circuit Analysis',
      description: 'Expert circuit analysis and troubleshooting services',
      category: 'Engineering Services',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 75000
    },
    {
      id: 9,
      name: 'Prototyping',
      description: 'Rapid prototyping services to bring your ideas to life',
      category: 'Engineering Services',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 100000
    },
    
    // Software
    {
      id: 10,
      name: 'EdenPaste',
      description: 'Our typing engine made in Python with Go for performance',
      category: 'Software',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 250000
    },
    {
      id: 11,
      name: 'Flex UI Framework',
      description: 'Python-based UI framework built with Material Design 3',
      category: 'Software',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 180000
    },
    {
      id: 12,
      name: 'Custom Software',
      description: 'Tailored software solutions for your business needs',
      category: 'Software',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 300000
    },
    
    // Creative Writing
    {
      id: 13,
      name: 'Technical Writing',
      description: 'Professional technical documentation and manuals',
      category: 'Creative Writing',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 50000
    },
    {
      id: 14,
      name: 'Content Creation',
      description: 'Engaging content for websites, blogs, and marketing materials',
      category: 'Creative Writing',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 40000
    },
    
    // Music Production
    {
      id: 15,
      name: 'Audio Editing',
      description: 'Professional audio editing and mastering services',
      category: 'Music Production',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 80000
    },
    {
      id: 16,
      name: 'Sound Design',
      description: 'Custom sound design for games, films, and multimedia projects',
      category: 'Music Production',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 90000
    },
    
    // Mentorship
    {
      id: 17,
      name: 'Electronics Mentorship',
      description: 'One-on-one mentorship for electronics enthusiasts and students',
      category: 'Mentorship',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 30000
    },
    {
      id: 18,
      name: 'Software Development',
      description: 'Guidance in software development and programming languages',
      category: 'Mentorship',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 35000
    },
    {
      id: 19,
      name: 'Creative Arts',
      description: 'Mentorship in creative arts, writing, and music production',
      category: 'Mentorship',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 25000
    },
    
    // Other Services
    {
      id: 20,
      name: 'Workshops',
      description: 'Hands-on workshops in electronics, programming, and creative arts',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 20000
    },
    {
      id: 21,
      name: 'Consulting',
      description: 'Expert consulting for tech startups and innovation projects',
      category: 'Business Services',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 50000
    },
    {
      id: 22,
      name: '3D Printing',
      description: '3D printing services for prototypes and custom parts',
      category: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
      price: 40000
    }
  ]

  // Get unique categories
  const categories = ['all'].concat(Array.from(new Set(allServices.map(service => service.category))))

  // Filter services
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const addToCart = (service: Service) => {
    // Check if item is already in cart
    const existingItemIndex = cartItems.findIndex(item => item.id === service.id)
    
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
      setCartItems(prev => [...prev, { ...service, quantity: 1 }])
    }
    
    // Show cart after adding item
    setShowCart(true)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-dark-slate dark:text-off-white">Our Services & Products</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive solutions for students, engineers, and creative professionals
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

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="h-56 bg-gray-300 dark:bg-gray-700 relative">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-uganda-red text-white text-xs font-bold px-2 py-1 rounded-full">
                {service.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-dark-slate dark:text-off-white">{service.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <Link 
                  href="/contact" 
                  className="bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  Learn More
                </Link>
                <button
                  onClick={() => addToCart(service)}
                  className="bg-uganda-yellow hover:bg-uganda-yellow/90 text-dark-slate font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
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