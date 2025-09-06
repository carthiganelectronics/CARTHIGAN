'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface ShowcaseItem {
  id: number
  title: string
  description: string
  category: string
  image: string
  onClick?: () => void
}

interface AnimatedShowcaseProps {
  onEmbeddedClick?: () => void
  onUiUxClick?: () => void
  onSemiconductorClick?: () => void
}

export default function AnimatedShowcase({ onEmbeddedClick, onUiUxClick, onSemiconductorClick }: AnimatedShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const showcaseItems: ShowcaseItem[] = [
    {
      id: 1,
      title: 'Embedded Systems Projects',
      description: 'IoT devices, robotics, and automation solutions',
      category: 'electronics',
      image: '/images/IMAGE 2025-09-06 16:47:00.jpg',
      onClick: onEmbeddedClick
    },
    {
      id: 2,
      title: 'UI/UX Designs',
      description: 'Modern interfaces for web and mobile applications',
      category: 'creative',
      image: '/images/IMAGE 2025-09-06 15:48:34.jpg',
      onClick: onUiUxClick
    },
    {
      id: 3,
      title: 'Music Production',
      description: 'Audio editing tools and sound engineering resources',
      category: 'creative',
      image: '/images/omid-armin-0cbLoqUyz28-unsplash.jpg'
    },
    {
      id: 4,
      title: 'Novel Writing Tools',
      description: 'Software and resources for authors and writers',
      category: 'creative',
      image: '/images/fabien-maurin-BY9DgxMeYo0-unsplash.jpg'
    },
    {
      id: 5,
      title: 'Videography and Photography',
      description: 'Professional video production, photography, and visual storytelling',
      category: 'creative',
      image: '/images/the-ian-4ZSnI_4xJe4-unsplash.jpg'
    },
    {
      id: 6,
      title: 'Semiconductor Research',
      description: 'Chip design and fabrication research projects',
      category: 'electronics',
      image: '/IMAGE 2025-09-05 17:49:00.jpg',
      onClick: onSemiconductorClick
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'creative', name: 'Creative' }
  ]

  const filteredItems = activeCategory === 'all' 
    ? showcaseItems 
    : showcaseItems.filter(item => item.category === activeCategory)

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
              activeCategory === category.id
                ? 'bg-uganda-red text-white'
                : 'bg-gray-200 text-dark-slate hover:bg-gray-300 dark:bg-gray-700 dark:text-off-white dark:hover:bg-gray-600'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            onClick={item.onClick}
            className={`bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg ${item.onClick ? 'cursor-pointer' : ''}`}
          >
            <div className="h-48 bg-gray-300 dark:bg-gray-600 relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-uganda-red bg-uganda-red/10 rounded-full mb-3">
                {item.category}
              </span>
              <h3 className="text-xl font-bold mb-2 text-dark-slate dark:text-off-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}