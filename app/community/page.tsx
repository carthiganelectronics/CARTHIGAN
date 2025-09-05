'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface CommunityPost {
  id: number
  title: string
  content: string
  author: string
  category: string
  date: string
  likes: number
  comments: number
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'general',
    author: ''
  })

  const communityPosts: CommunityPost[] = [
    {
      id: 1,
      title: 'Getting started with Arduino projects',
      content: 'I\'m new to embedded systems and looking for beginner-friendly Arduino projects. Any recommendations for starters?',
      author: 'TechEnthusiast256',
      category: 'electronics',
      date: '2025-08-20',
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      title: 'Best resources for learning UI/UX design',
      content: 'As a computer science student, I want to specialize in UI/UX design. What are the best online courses and resources?',
      author: 'DesignLover',
      category: 'design',
      date: '2025-08-18',
      likes: 17,
      comments: 5
    },
    {
      id: 3,
      title: 'Music production on a budget in Uganda',
      content: 'Looking for affordable options for music production equipment and software available in Uganda. Any local recommendations?',
      author: 'MusicMaker',
      category: 'creative',
      date: '2025-08-15',
      likes: 32,
      comments: 12
    },
    {
      id: 4,
      title: 'Semiconductor education opportunities',
      content: 'Are there any universities in Uganda offering specialized courses in semiconductor design and fabrication?',
      author: 'FutureEngineer',
      category: 'education',
      date: '2025-08-12',
      likes: 41,
      comments: 5
    }
  ]

  const categories = [
    { id: 'all', name: 'All Discussions' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'creative', name: 'Creative Arts' },
    { id: 'education', name: 'Education' },
    { id: 'general', name: 'General' }
  ]

  const filteredPosts = activeTab === 'all' 
    ? communityPosts 
    : communityPosts.filter(post => post.category === activeTab)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to Supabase
    console.log('Post submitted:', formData)
    alert('Your post has been submitted and is awaiting moderation.')
    setFormData({
      title: '',
      content: '',
      category: 'general',
      author: ''
    })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-dark-slate dark:text-off-white">Community Forum</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Connect with fellow tech enthusiasts, share knowledge, and collaborate on projects
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  activeTab === category.id
                    ? 'bg-uganda-red text-white'
                    : 'bg-gray-200 text-dark-slate hover:bg-gray-300 dark:bg-gray-700 dark:text-off-white dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Posts List */}
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark-slate dark:text-off-white mb-2">{post.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="bg-uganda-yellow/10 text-uganda-red text-xs font-bold px-2 py-1 rounded-full mr-3">
                        {post.category}
                      </span>
                      <span className="mr-4">By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-uganda-red dark:text-gray-400 dark:hover:text-uganda-red">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">{post.content}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-uganda-red dark:text-gray-400 dark:hover:text-uganda-red">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                      </svg>
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-uganda-red dark:text-gray-400 dark:hover:text-uganda-red">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                      <span>{post.comments}</span>
                    </button>
                  </div>
                  <button className="text-uganda-red font-semibold hover:text-uganda-red/80">
                    View Discussion
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* New Post Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-dark-slate dark:text-off-white">Start a Discussion</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="general">General</option>
                  <option value="electronics">Electronics</option>
                  <option value="design">UI/UX Design</option>
                  <option value="creative">Creative Arts</option>
                  <option value="education">Education</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="How should we display your name?"
                  value={formData.author}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={formData.content}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-3 rounded-full transition duration-300"
              >
                Post Discussion
              </button>
            </form>
          </div>

          {/* Community Guidelines */}
          <div className="bg-uganda-yellow/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-dark-slate dark:text-off-white">Community Guidelines</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-uganda-red mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Be respectful and inclusive to all community members</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-uganda-red mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Stay on topic and avoid spam or promotional content</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-uganda-red mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Share knowledge and help others when possible</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-uganda-red mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Report inappropriate content to moderators</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}