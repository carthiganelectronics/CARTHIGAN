'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Mentor {
  id: number
  name: string
  expertise: string
  description: string
  image: string
}

export default function MentorshipPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const mentors: Mentor[] = [
    {
      id: 1,
      name: 'Samuel Mubarak',
      expertise: 'Embedded Systems',
      description: '10+ years experience in IoT and microcontroller programming',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500'
    },
    {
      id: 2,
      name: 'Grace Nakato',
      expertise: 'UI/UX Design',
      description: 'Product designer with focus on mobile applications',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500'
    },
    {
      id: 3,
      name: 'David Omondi',
      expertise: 'Music Production',
      description: 'Professional sound engineer and producer',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500'
    },
    {
      id: 4,
      name: 'Sarah Namubiru',
      expertise: 'Novel Writing',
      description: 'Published author with experience in creative writing',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    setSubmitSuccess(false)
    
    try {
      // Submit to Google Apps Script Web App
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwP9UU0uR-8OLvUfL9BPs_YeEFEtebUjgXoKXCAxk-TKgH2Tlo-IwrU9Xvg2SfWB9eWCw/exec'
      
      // Log the data being sent for debugging
      console.log('Sending data:', {
        'Name': formData.name,
        'Email': formData.email,
        'Phone': formData.phone,
        'Interest': formData.interest,
        'Message': formData.message,
        'Timestamp': new Date().toISOString()
      })
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // This is needed for Google Apps Script
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'Name': formData.name,
          'Email': formData.email,
          'Phone': formData.phone,
          'Interest': formData.interest,
          'Message': formData.message,
          'Timestamp': new Date().toISOString()
        })
      })
      
      // With no-cors mode, we can't check the response, but we'll assume success
      console.log('Form submission sent to Google Apps Script')
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError('There was an error submitting your interest. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-dark-slate dark:text-off-white">Mentorship Programs</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Connect with industry professionals and accelerate your learning in technology, design, and creative fields
        </p>
      </div>

      {/* Mentorship Programs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-dark-slate dark:text-off-white">Our Mentorship Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Embedded Systems', description: 'Learn IoT, microcontrollers, and hardware programming' },
            { title: 'UI/UX Design', description: 'Master user interface and experience design principles' },
            { title: 'Music Production', description: 'Develop skills in audio engineering and production' },
            { title: 'Novel Writing', description: 'Enhance your creative writing and storytelling abilities' },
            { title: 'Videography', description: 'Learn professional video production and editing' },
            { title: 'Software Development', description: 'Build applications and master programming languages' },
            { title: 'Electrical Engineering', description: 'Understand circuits, systems, and electronics' },
            { title: 'Semiconductor Design', description: 'Explore chip design and fabrication processes' }
          ].map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-uganda-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-dark-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-dark-slate dark:text-off-white">{program.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-dark-slate dark:text-off-white">Featured Mentors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-700 relative">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-dark-slate dark:text-off-white">{mentor.name}</h3>
                <p className="text-uganda-red font-semibold mb-3">{mentor.expertise}</p>
                <p className="text-gray-600 dark:text-gray-300">{mentor.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-dark-slate dark:text-off-white">Express Interest</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
          Fill out the form below to express interest in our mentorship programs. We'll contact you with more details.
        </p>
        
        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            Thank you for your interest! We've received your submission and will contact you soon.
          </div>
        )}
        
        {submitError && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {submitError}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={formData.name}
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
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Area of Interest
              </label>
              <select
                id="interest"
                name="interest"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={formData.interest}
                onChange={handleInputChange}
              >
                <option value="">Select an area</option>
                <option value="embedded">Embedded Systems</option>
                <option value="uiux">UI/UX Design</option>
                <option value="music">Music Production</option>
                <option value="writing">Novel Writing</option>
                <option value="video">Videography</option>
                <option value="software">Software Development</option>
                <option value="electrical">Electrical Engineering</option>
                <option value="semiconductor">Semiconductor Design</option>
              </select>
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Tell us about your goals and what you hope to achieve..."
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`font-bold py-3 px-8 rounded-full transition duration-300 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-uganda-red hover:bg-uganda-red/90 text-white'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Interest'}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}