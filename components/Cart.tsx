'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Service = {
  id: number
  name: string
  description: string
  category: string
  image: string
  price: number
  quantity?: number
}

interface CartItem extends Service {
  quantity: number
}

export default function Cart({ onClose }: { onClose: () => void }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)
  const [showCheckout, setShowCheckout] = useState(false)
  const [checkoutForm, setCheckoutForm] = useState({
    email: '',
    phone: '',
    location: ''
  })

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

  // Calculate total and save to localStorage when cart changes
  useEffect(() => {
    const newTotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 0)), 0)
    setTotal(newTotal)
    
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id)
      return
    }
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const handleCheckout = () => {
    setShowCheckout(true)
  }

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Prepare order data for backend
    const orderData = {
      items: cartItems,
      total: total,
      customer: checkoutForm,
      timestamp: new Date().toISOString()
    }

    // TODO: Send to backend (Supabase)
    console.log('Order submitted:', orderData)

    // For now, show success message
    alert('Thank you for your order! We will contact you soon to complete the transaction.')

    // Clear cart and close
    setCartItems([])
    setShowCheckout(false)
    onClose()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCheckoutForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      {/* Cart Sidebar */}
      <AnimatePresence>
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween' }}
          className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl z-50 overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-dark-slate dark:text-off-white">Your Cart</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4 M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-4">
                      <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-lg mr-4">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-dark-slate dark:text-off-white">{item.name}</h3>
                        <p className="text-uganda-red font-bold">UGX {item.price?.toLocaleString() || '0'}</p>
                        <div className="flex items-center mt-2">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-l"
                          >
                            -
                          </button>
                          <span className="w-10 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-600">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-r"
                          >
                            +
                          </button>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="ml-4 text-red-500 hover:text-red-700"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 0 0 1 -1.995 -1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold mb-4">
                    <span className="text-dark-slate dark:text-off-white">Total:</span>
                    <span className="text-uganda-red">UGX {total.toLocaleString()}</span>
                  </div>
                  <button 
                    onClick={clearCart}
                    className="w-full py-3 text-center text-red-500 hover:text-red-700 mb-4"
                  >
                    Clear Cart
                  </button>
                   <button
                     onClick={handleCheckout}
                     className="w-full bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-3 rounded-full transition duration-300"
                   >
                     Proceed to Checkout
                   </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Checkout Modal */}
      <AnimatePresence>
        {showCheckout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-dark-slate dark:text-off-white">Complete Your Order</h3>
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>

                {/* Order Summary */}
                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-dark-slate dark:text-off-white mb-2">Order Summary</h4>
                  <div className="space-y-1 text-sm">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span>{item.name} (x{item.quantity})</span>
                        <span>UGX {(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                    <div className="border-t border-gray-300 dark:border-gray-600 pt-1 mt-2 flex justify-between font-semibold">
                      <span>Total:</span>
                      <span className="text-uganda-red">UGX {total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Form */}
                <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={checkoutForm.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-uganda-red focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={checkoutForm.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-uganda-red focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="+256 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Location *
                    </label>
                    <textarea
                      id="location"
                      name="location"
                      required
                      value={checkoutForm.location}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-uganda-red focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your full address or location details"
                    />
                  </div>

                  <div className="pt-4 space-y-3">
                    <button
                      type="submit"
                      className="w-full bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-3 rounded-full transition duration-300"
                    >
                      Complete Order
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCheckout(false)}
                      className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2 rounded-full transition duration-300"
                    >
                      Back to Cart
                    </button>
                  </div>
                </form>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                  * Required fields. Your information will be securely stored for order processing.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}