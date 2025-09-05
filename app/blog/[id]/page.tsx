'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface BlogPost {
  id: number
  title: string
  content: string
  date: string
  author: string
  category: string
  image: string
}

export default function BlogPostPage({ params }: any) {
  // In a real app, this would fetch from Supabase based on the ID
  const blogPost: BlogPost = {
    id: parseInt(params.id),
    title: 'The Future of Semiconductor Manufacturing in Uganda',
    content: `
      <p>Uganda is on the cusp of a technological revolution. As we look toward the future, the potential for local semiconductor manufacturing presents an unprecedented opportunity for economic growth and technological independence.</p>
      
      <h2 class="text-2xl font-bold my-6 text-dark-slate dark:text-off-white">Current Landscape</h2>
      
      <p>Currently, Uganda imports the vast majority of its electronic components and devices. This dependency not only strains our economy but also limits our ability to innovate and customize solutions for local challenges. However, recent developments in education and infrastructure are creating a fertile ground for change.</p>
      
      <p>Our partnership with local universities has already produced promising results in research and development. Students and faculty are working on projects that could form the foundation for domestic semiconductor production.</p>
      
      <h2 class="text-2xl font-bold my-6 text-dark-slate dark:text-off-white">The Road Ahead</h2>
      
      <p>Our roadmap for semiconductor manufacturing includes several key milestones:</p>
      
      <ul class="list-disc pl-8 my-4 space-y-2">
        <li>Establishment of a semiconductor education program by 2026</li>
        <li>Development of our first prototype chips by 2027</li>
        <li>Partnership with international manufacturers for technology transfer by 2028</li>
        <li>Construction of our first fabrication facility by 2030</li>
      </ul>
      
      <p>This ambitious plan requires significant investment, but the potential benefits are enormous. Local chip production would create thousands of jobs, reduce import costs, and position Uganda as a leader in African technology development.</p>
      
      <h2 class="text-2xl font-bold my-6 text-dark-slate dark:text-off-white">How You Can Help</h2>
      
      <p>We invite you to join us in this journey. Whether you're a student, entrepreneur, or investor, there are opportunities to contribute:</p>
      
      <ul class="list-disc pl-8 my-4 space-y-2">
        <li>Enroll in our semiconductor courses and workshops</li>
        <li>Participate in our mentorship programs</li>
        <li>Support our research initiatives through donations or partnerships</li>
      </ul>
      
      <p>Together, we can build a future where Uganda is not just a consumer of technology, but a creator and innovator.</p>
    `,
    date: '2025-08-15',
    author: 'Dr. Samuel Mubarak',
    category: 'Semiconductors',
    image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500'
  }

  const [comment, setComment] = useState('')

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to Supabase
    console.log('Comment submitted:', comment)
    alert('Thank you for your comment!')
    setComment('')
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link 
        href="/blog" 
        className="inline-flex items-center text-uganda-red hover:text-uganda-red/80 mb-8"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to Blog
      </Link>

      <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg mb-12">
        <div className="h-96 bg-gray-300 dark:bg-gray-700 relative">
          <img 
            src={blogPost.image} 
            alt={blogPost.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-8">
          <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span className="bg-uganda-red text-white text-xs font-bold px-2 py-1 rounded-full mr-3">
              {blogPost.category}
            </span>
            <span className="mr-4">{blogPost.date}</span>
            <span>By {blogPost.author}</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-6 text-dark-slate dark:text-off-white">{blogPost.title}</h1>
          
          <div 
            className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </article>

      {/* Comments Section */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-dark-slate dark:text-off-white">Comments</h2>
        
        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="mb-8">
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Leave a comment
            </label>
            <textarea
              id="comment"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Share your thoughts..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Post Comment
          </button>
        </form>
        
        {/* Comments List */}
        <div className="space-y-6">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-uganda-yellow rounded-full flex items-center justify-center text-dark-slate font-bold mr-3">
                JD
              </div>
              <div>
                <h4 className="font-bold text-dark-slate dark:text-off-white">John Doe</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">2025-08-16</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              This is a fascinating development for Uganda. I'm excited to see how this will impact our local tech ecosystem.
            </p>
          </div>
          
          <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-uganda-red rounded-full flex items-center justify-center text-off-white font-bold mr-3">
                SA
              </div>
              <div>
                <h4 className="font-bold text-dark-slate dark:text-off-white">Sarah Akello</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">2025-08-17</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              As a student, I'm thrilled about the educational opportunities this will create. When do you expect the first courses to launch?
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}