'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ProductList from '@/components/ProductList'
import RoadmapSection from '@/components/RoadmapSection'
import AnimatedShowcase from '@/components/AnimatedShowcase'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { AuroraBackground } from '@/components/ui/aurora-background'

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Testimonial data
  const testimonials = [
    {
      quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=500",
    },
    {
      quote: "Working with Carthigan has been a game-changer for our startup. Their mentorship program helped us scale faster than we ever imagined.",
      name: "Michael Rodriguez",
      designation: "CEO at InnovateX",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500",
    },
    {
      quote: "The quality of components and technical support is unmatched. As a hardware engineer, I rely on Carthigan for all my prototyping needs.",
      name: "Emily Watson",
      designation: "Hardware Engineer at CircuitWorks",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500",
    },
    {
      quote: "I'd highly recommend working with Carthigan on a site redesign. They took our rough concept and transformed it into a polished, user-friendly website.",
      name: "James Kim",
      designation: "Head of Product at Fireworks",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500",
    },
    {
      quote: "The creative resources and support have helped me launch my career as a digital artist. Carthigan truly invests in its members.",
      name: "Lisa Thompson",
      designation: "Digital Artist & Designer",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500",
    },
  ];

  return (
    <main className="min-h-screen bg-off-white dark:bg-dark-slate">
      {/* Hero Section with Aurora Background */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <AuroraBackground className="h-full w-full">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-dark-slate dark:text-off-white mb-6 animate-float">
                CARTHIGAN
              </h1>
              <p className="text-xl md:text-2xl text-dark-slate dark:text-off-white mb-8 max-w-3xl mx-auto">
                Uganda's Leading Tech Hub for Electronics, Embedded Systems, Software Technology, and Creative Resources
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/products" 
                  className="bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-3 px-8 rounded-full transition duration-300"
                >
                  Explore Products
                </Link>
                <Link 
                  href="/mentorship" 
                  className="bg-uganda-yellow hover:bg-uganda-yellow/90 text-dark-slate font-bold py-3 px-8 rounded-full transition duration-300"
                >
                  Join Mentorship
                </Link>
              </div>
            </motion.div>
          </div>
        </AuroraBackground>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark-slate dark:text-off-white">
            Featured Products
          </h2>
          <ProductList />
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark-slate dark:text-off-white">
            What We Do
          </h2>
          <AnimatedShowcase />
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark-slate dark:text-off-white">
            Our Roadmap
          </h2>
          <RoadmapSection />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark-slate dark:text-off-white">
            Meet Our Team
          </h2>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-slate dark:text-off-white">
            Ready to Innovate?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-dark-slate dark:text-off-white">
            Join our network of tech enthusiasts, creators, and innovators in Uganda
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-dark-slate hover:bg-dark-slate/90 text-off-white font-bold py-3 px-8 rounded-full transition duration-300 dark:bg-off-white dark:text-dark-slate dark:hover:bg-off-white/90"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}