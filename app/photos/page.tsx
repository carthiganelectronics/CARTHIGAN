'use client'

import { FocusCards } from '@/components/ui/focus-cards'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'

interface Photo {
  id: string
  title: string | null
  description: string | null
  image_url: string
  category: string | null
  uploaded_by: string | null
  created_at: string
}

export default function PhotosPage() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchPhotos()
  }, [])

  const fetchPhotos = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('photos')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching photos:', error)
        setError('Failed to load photos')
        return
      }

      setPhotos(data || [])
    } catch (err) {
      console.error('Error:', err)
      setError('Failed to load photos')
    } finally {
      setLoading(false)
    }
  }

  // Fallback photos for when database is empty or loading
  const fallbackPhotos = [
    {
      title: "Team Photos",
      src: "/images/IMAGE 2025-09-06 14:33:20.jpg",
    },
    {
      title: "Project Showcase",
      src: "/images/IMAGE 2025-09-06 14:33:23.jpg",
    },
    {
      title: "Workshop Sessions",
      src: "/images/IMAGE 2025-09-06 14:33:26.jpg",
    },
    {
      title: "Science Week Highlights",
      src: "/images/IMAGE 2025-09-06 14:33:31.jpg",
    },
    {
      title: "Innovation Demos",
      src: "/images/IMAGE 2025-09-06 14:33:36.jpg",
    },
    {
      title: "Community Events",
      src: "/images/IMAGE 2025-09-06 14:33:38.jpg",
    },
  ]

  // Convert database photos to FocusCards format
  const photosData = photos.length > 0
    ? photos.map(photo => ({
        title: photo.title || photo.category || 'Carthigan Photo',
        src: photo.image_url,
      }))
    : fallbackPhotos

  return (
    <main className="min-h-screen bg-off-white dark:bg-dark-slate">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <AuroraBackground className="h-full w-full">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-dark-slate dark:text-off-white mb-6 animate-float">
                Carthigan Photos
              </h1>
              <p className="text-xl md:text-2xl text-dark-slate dark:text-off-white mb-8 max-w-3xl mx-auto">
                Explore our journey through captivating moments, project milestones, and community highlights
              </p>
            </motion.div>
          </div>
        </AuroraBackground>
      </section>

      {/* Photos Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate dark:text-off-white mb-4">
              Our Visual Journey
            </h2>
            <p className="text-xl text-dark-slate dark:text-off-white">
              From team collaborations to groundbreaking innovations, discover the moments that define Carthigan
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
              <span className="ml-4 text-lg text-gray-600 dark:text-gray-400">Loading photos...</span>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-lg text-red-600 dark:text-red-400 mb-4">{error}</p>
              <button
                onClick={fetchPhotos}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : photos.length > 0 ? (
            <FocusCards
              cards={photosData}
              onCardClick={(index) => {
                const photo = photos[index]
                if (photo) {
                  console.log('Photo clicked:', photo.title || photo.category, 'Uploaded by:', photo.uploaded_by)
                }
              }}
            />
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                📸 No photos uploaded yet
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Photos uploaded through the admin app will appear here
              </p>
            </div>
          )}

          {photos.length > 0 && (
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                📸 {photos.length} photo{photos.length !== 1 ? 's' : ''} uploaded
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Photos are uploaded through the Carthigan Admin app and displayed here in real-time
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}