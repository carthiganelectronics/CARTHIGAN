'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    paymentMethod: 'paystack',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (e) {
        console.error('Error parsing cart', e)
      }
    }
  }, [])

  const subtotal = cartItems.reduce((sum: number, item: Product) => sum + (item.price * (item.quantity || 0)), 0)
  const shipping = 5000
  const total = subtotal + shipping

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const orderData = {
        customer_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        products: JSON.stringify(cartItems),
        total: total,
        status: 'pending'
      }
      const { error } = await supabase.from('orders').insert(orderData)
      if (error) {
        alert('Failed to place order: ' + error.message)
      } else {
        alert('Order placed successfully!')
        localStorage.removeItem('cart')
        window.location.href = '/'
      }
    } catch (err) {
      alert('Error placing order')
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center mb-8">
        <Link href="/products" className="text-uganda-red hover:text-uganda-red/80 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Continue Shopping
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-dark-slate dark:text-off-white">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-dark-slate dark:text-off-white">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item: Product, index: number) => (
                <div key={item.id} className="flex items-center">
                  <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-lg mr-4">
                     <img
                       src={item.image_url || 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500'}
                       alt={item.name}
                       className="w-full h-full object-cover rounded-lg"
                     />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-dark-slate dark:text-off-white">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">Qty: {item.quantity}</p>
                  </div>
                   <div className="font-bold text-dark-slate dark:text-off-white">
                     UGX {(item.price * (item.quantity || 0)).toLocaleString()}
                   </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                <span className="text-dark-slate dark:text-off-white">UGX {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Shipping</span>
                <span className="text-dark-slate dark:text-off-white">UGX {shipping.toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                <span className="text-lg font-bold text-dark-slate dark:text-off-white">Total</span>
                <span className="text-lg font-bold text-uganda-red">UGX {total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-dark-slate dark:text-off-white">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-dark-slate dark:text-off-white">Shipping Address</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-dark-slate dark:text-off-white">Payment Method</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="paystack"
                      name="paymentMethod"
                      value="paystack"
                      checked={formData.paymentMethod === 'paystack'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-uganda-red focus:ring-uganda-yellow"
                    />
                    <label htmlFor="paystack" className="ml-3 block text-gray-700 dark:text-gray-300">
                      Paystack (Credit/Debit Card)
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="mobile-money"
                      name="paymentMethod"
                      value="mobile-money"
                      checked={formData.paymentMethod === 'mobile-money'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-uganda-red focus:ring-uganda-yellow"
                    />
                    <label htmlFor="mobile-money" className="ml-3 block text-gray-700 dark:text-gray-300">
                      Mobile Money
                    </label>
                  </div>
                </div>
                
                {formData.paymentMethod === 'paystack' && (
                  <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          value={formData.cvv}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Place Order Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-3 px-8 rounded-full transition duration-300 w-full md:w-auto"
                >
                  Place Order - UGX {total.toLocaleString()}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}