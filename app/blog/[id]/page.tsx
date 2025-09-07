'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabaseClient'

interface BlogPost {
  id: string
  title: string
  excerpt: string | null
  content: string
  author: string
  category: string
  image_urls: string[]
  image_descriptions: string[]
  published: boolean
  created_at: string
}

export default function BlogPostPage({ params }: any) {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchBlogPost()
  }, [params.id])

  const fetchBlogPost = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', params.id)
        .eq('published', true)
        .single()

      if (error) {
        console.error('Error fetching blog post:', error)
        setError('Blog post not found')
        return
      }

      setBlogPost(data)
    } catch (err) {
      console.error('Error:', err)
      setError('Failed to load blog post')
    } finally {
      setLoading(false)
    }
  }

  const [comment, setComment] = useState('')

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to Supabase
    console.log('Comment submitted:', comment)
    alert('Thank you for your comment!')
    setComment('')
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  if (error || !blogPost) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">{error}</p>
          <Link
            href="/blog"
            className="bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    )
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
        {blogPost.image_urls.length > 0 && (
          <div className="h-96 bg-gray-300 dark:bg-gray-700 relative">
            <img
              src={blogPost.image_urls[0]}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-8">
          <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span className="bg-uganda-red text-white text-xs font-bold px-2 py-1 rounded-full mr-3">
              {blogPost.category}
            </span>
            <span className="mr-4">{new Date(blogPost.created_at).toLocaleDateString()}</span>
            <span>By {blogPost.author}</span>
          </div>

          <h1 className="text-4xl font-bold mb-6 text-dark-slate dark:text-off-white">{blogPost.title}</h1>

          {/* Header Image */}
          {blogPost.image_urls.length > 0 && (
            <div className="mb-6">
              <img
                src={blogPost.image_urls[0]}
                alt={blogPost.image_descriptions[0] || 'Header image'}
                className="w-full h-96 object-cover rounded-2xl"
              />
              {blogPost.image_descriptions[0] && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
                  {blogPost.image_descriptions[0]}
                </p>
              )}
            </div>
          )}

          <div
            className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 dark:prose-invert mb-6"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Middle Image */}
          {blogPost.image_urls.length > 1 && (
            <div className="mb-6">
              <img
                src={blogPost.image_urls[1]}
                alt={blogPost.image_descriptions[1] || 'Middle image'}
                className="w-full h-96 object-cover rounded-2xl"
              />
              {blogPost.image_descriptions[1] && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
                  {blogPost.image_descriptions[1]}
                </p>
              )}
            </div>
          )}

          {/* Final Image */}
          {blogPost.image_urls.length > 2 && (
            <div className="mb-6">
              <img
                src={blogPost.image_urls[2]}
                alt={blogPost.image_descriptions[2] || 'Final image'}
                className="w-full h-96 object-cover rounded-2xl"
              />
              {blogPost.image_descriptions[2] && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
                  {blogPost.image_descriptions[2]}
                </p>
              )}
            </div>
          )}
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