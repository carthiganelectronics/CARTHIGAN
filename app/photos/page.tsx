'use client'

import { FocusCards } from '@/components/ui/focus-cards'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { motion } from 'framer-motion'

export default function PhotosPage() {
  // Photos section data
  const photosData = [
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

          <FocusCards
            cards={photosData}
            onCardClick={(index) => {
              // Photos can be expanded or lead to galleries in the future
              console.log('Photo clicked:', index);
            }}
          />

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              📸 More photos coming soon with Supabase backend integration
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Stay tuned for our expanding photo gallery featuring workshops, events, and project showcases
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}