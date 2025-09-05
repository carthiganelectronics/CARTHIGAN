'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content?: string
  date: string
  author: string
  category: string
  image: string
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Mock blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Semiconductor Manufacturing in Uganda',
      excerpt: 'Exploring the potential for local chip production and its impact on our economy',
      content: 'Full content would go here...',
      date: '2025-08-15',
      author: 'Dr. Samuel Mubarak',
      category: 'Semiconductors',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500'
    },
    {
      id: 2,
      title: 'Building Embedded Systems with Local Components',
      excerpt: 'A guide to creating IoT devices using Ugandan-made electronic components',
      content: 'Full content would go here...',
      date: '2025-07-22',
      author: 'Sarah Nakato',
      category: 'Embedded Systems',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500'
    },
    {
      id: 3,
      title: 'Software Development Best Practices for Ugandan Startups',
      excerpt: 'Essential coding standards and development workflows for local tech companies',
      content: 'Full content would go here...',
      date: '2025-06-30',
      author: 'Michael Omondi',
      category: 'Software',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500'
    },
    {
      id: 4,
      title: 'Creative Technology: Bridging Art and Code',
      excerpt: 'How Ugandan artists are using technology to create innovative digital experiences',
      content: 'Full content would go here...',
      date: '2025-06-15',
      author: 'Esther Namutebi',
      category: 'Creative',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500'
    },
    {
      id: 5,
      title: 'The Rise of Ugandan Tech Entrepreneurs',
      excerpt: 'Profiles of successful founders who are building the next generation of African tech companies',
      content: 'Full content would go here...',
      date: '2025-05-10',
      author: 'David Kato',
      category: 'Entrepreneurship',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500'
    },
    {
      id: 6,
      title: 'Sustainable Tech Solutions for Rural Communities',
      excerpt: 'How technology can address challenges in agriculture, healthcare, and education in rural Uganda',
      content: 'Full content would go here...',
      date: '2025-04-18',
      author: 'Grace Nalubowa',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500'
    }
  ]

  // Get unique categories
  const categories = ['all'].concat(Array.from(new Set(blogPosts.map(post => post.category))))

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-dark-slate dark:text-off-white">Tech Blog & Resources</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Insights, tutorials, and stories from Uganda's leading tech hub
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-12 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Search */}
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search Articles
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by title or content..."
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
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="h-48 bg-gray-300 dark:bg-gray-700 relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-uganda-red text-white text-xs font-bold px-2 py-1 rounded-full">
                {post.category}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-dark-slate dark:text-off-white">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <Link 
                href={`/blog/${post.id}`}
                className="text-uganda-red font-semibold hover:text-uganda-red/80 flex items-center"
              >
                Read more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <section className="mt-16 bg-uganda-yellow/10 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-dark-slate dark:text-off-white">Stay Updated</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive the latest articles, resources, and updates from Carthigan
        </p>
        <div className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-l-full border border-gray-300 focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <button className="bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-3 px-6 rounded-r-full transition duration-300">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  )
}