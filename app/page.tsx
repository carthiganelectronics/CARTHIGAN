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
      image: "https://images.unsplash.com/photo-1522199670076-285b3c7d158f?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-10 left-[15%] rotate-[-5deg]",
    },
    {
      title: "Team Presentation",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Interactive Demo",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Networking",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Science Week Crowd",
      image: "https://images.unsplash.com/photo-1540325898262-0fc2f8653a5f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Innovation Showcase",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Carthigan Team",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

      {/* Introducing Aceternity UI Pro */}
      <section className="py-16 md:py-24 bg-off-white dark:bg-dark-slate">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate dark:text-off-white">
              Introducing Aceternity UI Pro
            </h2>
            <p className="text-xl mt-4 text-dark-slate dark:text-off-white">
              70+ premium component packs and templates to build amazing websites.
            </p>
          </div>

          <FocusCards cards={focusCardsData} />
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