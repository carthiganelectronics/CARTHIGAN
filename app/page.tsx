'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ProductList from '@/components/ProductList'
import RoadmapSection from '@/components/RoadmapSection'
import AnimatedShowcase from '@/components/AnimatedShowcase'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { DraggableCardBody, DraggableCardContainer } from '@/components/ui/draggable-card'
import { WobbleCard } from '@/components/ui/wobble-card'
import { FocusCards } from '@/components/ui/focus-cards'

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
    {
      quote: "As the founder and CEO of Carthigan, I'm dedicated to building Uganda's premier tech hub for electronics, embedded systems, and software technology. Our mission is to empower local innovators with world-class resources and mentorship.",
      name: "Eden Gilbert Kiseka",
      designation: "CEO & Founder, Electrical & Software Engineer",
      src: "/2025-09-05 16.40.35.jpg",
    },
  ];

  // Science Week photos
  const scienceWeekItems = [
    {
      title: "Carthigan Booth",
      image: "/IMAGE 2025-09-06 14:33:20.jpg",
      className: "absolute top-10 left-[15%] rotate-[-5deg]",
    },
    {
      title: "Team Presentation",
      image: "/IMAGE 2025-09-06 14:33:23.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Interactive Demo",
      image: "/IMAGE 2025-09-06 14:33:26.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Networking",
      image: "/IMAGE 2025-09-06 14:33:31.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Science Week Crowd",
      image: "/IMAGE 2025-09-06 14:33:36.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Innovation Showcase",
      image: "/IMAGE 2025-09-06 14:33:38.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Carthigan Team",
      image: "/IMAGE 2025-09-06 14:33:41.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  // Focus Cards data for Aceternity UI Pro showcase
  const focusCardsData = [
    {
      title: "Components",
      src: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Templates",
      src: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Showcase",
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

      {/* Carthigan at Science Week */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate dark:text-off-white">
              Carthigan at Science Week
            </h2>
            <p className="text-xl mt-4 text-dark-slate dark:text-off-white">
              Check out our team in action at the biggest science event in Uganda
            </p>
          </div>
          
          {/* Draggable Cards for Science Week Photos */}
          <DraggableCardContainer className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden">
            <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
              Carthigan at Uganda Science Week 2025
            </p>
            {scienceWeekItems.map((item, index) => (
              <DraggableCardBody key={index} className={item.className}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="pointer-events-none relative z-10 h-80 w-80 object-cover rounded-lg"
                />
                <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                  {item.title}
                </h3>
              </DraggableCardBody>
            ))}
          </DraggableCardContainer>
        </div>
      </section>

      {/* Our Inventions */}
      <section className="py-16 md:py-24 bg-off-white dark:bg-dark-slate">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate dark:text-off-white">
              Our Inventions
            </h2>
            <p className="text-xl mt-4 text-dark-slate dark:text-off-white">
              Real-world solutions developed by our team to address challenges in Uganda and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <img 
                src="/IMAGE 2025-09-06 14:33:20.jpg" 
                alt="Smart Agriculture System" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-dark-slate dark:text-off-white">
                Smart Agriculture System
              </h3>
              <p className="text-dark-slate dark:text-off-white">
                IoT-based farming solution helping Ugandan farmers optimize crop yields and reduce water usage.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <img 
                src="/IMAGE 2025-09-06 14:33:23.jpg" 
                alt="Solar Power Bank" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-dark-slate dark:text-off-white">
                Solar Power Bank
              </h3>
              <p className="text-dark-slate dark:text-off-white">
                Portable renewable energy solution designed for rural communities with limited electricity access.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <img 
                src="/IMAGE 2025-09-06 14:33:26.jpg" 
                alt="Water Quality Monitor" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-dark-slate dark:text-off-white">
                Water Quality Monitor
              </h3>
              <p className="text-dark-slate dark:text-off-white">
                Real-time water testing device ensuring safe drinking water for communities across Uganda.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <img 
                src="/IMAGE 2025-09-06 14:33:31.jpg" 
                alt="Educational Robotics Kit" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-dark-slate dark:text-off-white">
                Educational Robotics Kit
              </h3>
              <p className="text-dark-slate dark:text-off-white">
                Affordable STEM education tools bringing robotics and programming to Ugandan schools.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <img 
                src="/IMAGE 2025-09-06 14:33:36.jpg" 
                alt="Telemedicine Device" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-dark-slate dark:text-off-white">
                Telemedicine Device
              </h3>
              <p className="text-dark-slate dark:text-off-white">
                Remote health monitoring system connecting rural patients with urban healthcare professionals.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <img 
                src="/IMAGE 2025-09-06 14:33:38.jpg" 
                alt="Weather Station" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-dark-slate dark:text-off-white">
                Weather Station
              </h3>
              <p className="text-dark-slate dark:text-off-white">
                Low-cost meteorological equipment providing accurate weather data for farmers and researchers.
              </p>
            </div>
          </div>
        </div>
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