'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Cart from '@/components/Cart'
import { CarthiganLogo } from '@/components/CarthiganLogo'
import { BackgroundLines } from '@/components/ui/background-lines'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showCart, setShowCart] = useState(false)

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-40">
              <BackgroundLines className="absolute inset-0" />
              <div className="relative z-10 flex items-center">
                <CarthiganLogo 
                  className="h-8 w-auto" 
                  fill="#EF4444" // Using uganda-red color
                />
                <span className="ml-2 text-2xl font-bold text-uganda-red">Carthigan</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/products" className="text-gray-700 dark:text-gray-300 hover:text-uganda-red transition">
            Products
          </Link>
          <Link href="/mentorship" className="text-gray-700 dark:text-gray-300 hover:text-uganda-red transition">
            Mentorship
          </Link>
          <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-uganda-red transition">
            Blog
          </Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-uganda-red transition">
            About
          </Link>
          <Link href="/community" className="text-gray-700 dark:text-gray-300 hover:text-uganda-red transition">
            Community
          </Link>
          <Link href="/contact" className="bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-2 px-4 rounded-full transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-2 space-y-2">
              <Link href="/products" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-uganda-red transition">
                Products
              </Link>
              <Link href="/mentorship" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-uganda-red transition">
                Mentorship
              </Link>
              <Link href="/blog" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-uganda-red transition">
                Blog
              </Link>
              <Link href="/about" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-uganda-red transition">
                About
              </Link>
              <Link href="/community" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-uganda-red transition">
                Community
              </Link>
              <Link href="/contact" className="block py-2 text-center bg-uganda-red hover:bg-uganda-red/90 text-white font-bold rounded-full transition">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Component */}
      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </header>
  )
}