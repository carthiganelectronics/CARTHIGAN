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
  const [showEdenPasteModal, setShowEdenPasteModal] = useState(false)
  const [showPcbDesignModal, setShowPcbDesignModal] = useState(false)
  const [showMentorshipModal, setShowMentorshipModal] = useState(false)
  const [showMicrocontrollersModal, setShowMicrocontrollersModal] = useState(false)

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

  // Focus Cards data for Our Innovations showcase
  const focusCardsData = [
    {
      title: "Eden Paste",
      src: "/screen.png",
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
               Our Innovations
             </h2>
             <p className="text-xl mt-4 text-dark-slate dark:text-off-white">
               Discover our cutting-edge innovations in electronics, embedded systems, and software technology.
             </p>
           </div>

           <FocusCards
             cards={focusCardsData}
             onCardClick={(index) => {
               if (index === 0) setShowEdenPasteModal(true)
             }}
           />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark-slate dark:text-off-white">
            Featured Products
          </h2>
           <ProductList
             onEdenPasteClick={() => setShowEdenPasteModal(true)}
             onPcbDesignClick={() => setShowPcbDesignModal(true)}
             onMentorshipClick={() => setShowMentorshipModal(true)}
             onMicrocontrollersClick={() => setShowMicrocontrollersModal(true)}
           />
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

      {/* Custom Projects Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-slate dark:text-off-white">
                Custom Projects & Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Have a unique project in mind? We handle custom electronics, software, and creative work
              </p>
            </div>

            <div className="bg-off-white dark:bg-dark-slate rounded-2xl p-8 shadow-lg">
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! We\'ll review your project and get back to you within 24 hours.'); }} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="+256 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Type
                  </label>
                  <select
                    id="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="electronics">Electronics & Embedded Systems</option>
                    <option value="software">Software Development</option>
                    <option value="engineering">Engineering Services</option>
                    <option value="creative">Creative Writing & Arts</option>
                    <option value="music">Music Production</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="education">Education & Workshops</option>
                    <option value="business">Business Consulting</option>
                    <option value="manufacturing">Manufacturing & 3D Printing</option>
                    <option value="other">Other (specify below)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="project"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-uganda-yellow focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Describe your project, requirements, timeline, and any specific details..."
                  ></textarea>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-3 px-8 rounded-full transition duration-300"
                  >
                    Submit Project Request
                  </button>
                </div>
              </form>
            </div>
          </div>
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

      {/* Eden Paste Modal */}
      {showEdenPasteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-dark-slate dark:text-off-white">Eden Paste</h3>
                <button
                  onClick={() => setShowEdenPasteModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <img
                  src="/images/IMAGE 2025-09-06 15:48:34.jpg"
                  alt="Eden Paste screenshot 1"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="/images/IMAGE 2025-09-06 15:48:37.jpg"
                  alt="Eden Paste screenshot 2"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                The invisible typing assistant that lives in the corner of your screen.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Write once—let Eden type it everywhere.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Open the cheerful, round-edged editor, drop in any text (an address, code snippet, emoji storm, whatever). Tap "Start Typing" and the window melts into a tiny, color-shifting bubble that glides to the corner. Eden then types your words—at human speed—into the form, doc, chat or browser field you chose, while you sit back and watch the cursor dance. When it's done the bubble quietly fades away, ready to be summoned again with a shortcut.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                No more ⌘-C / ⌘-V gymnastics, no macros to remember. Just type, start, and Eden handles the rest.
              </p>
              <h4 className="text-xl font-semibold mb-2 text-dark-slate dark:text-off-white">Features</h4>
              <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                <li>Living Material You 3 interface—colors adapt to your wallpaper, shapes breathe while typing</li>
                <li>Zero-distraction workflow: editor collapses to a draggable bubble, stays out of your way</li>
                <li>Works everywhere: Slack, Notion, Google Sheets, Terminal, game chat—any field that accepts text</li>
                <li>Adjustable speed, pause & resume, target-switch on the fly</li>
                <li>Private: nothing leaves your machine; history is stored locally and can be wiped in one click</li>
                <li>Accessible: full keyboard navigation, high-contrast mode, screen-reader labels</li>
              </ul>
              <p className="text-lg font-semibold text-uganda-red mb-4">
                Eden Paste — less copying, more creating.
              </p>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
                The app is coming soon. Users can join the waitlist.
              </p>
              <div className="text-center">
                <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for joining the waitlist! We\'ll notify you when Eden Paste is ready.'); setShowEdenPasteModal(false); }} className="flex flex-col gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-uganda-red dark:bg-gray-700 dark:text-white"
                  />
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-uganda-red dark:bg-gray-700 dark:text-white"
                  />
                  <button type="submit" className="bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                    Join Waitlist
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mentorship Modal */}
      {showMentorshipModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-dark-slate dark:text-off-white">Comprehensive Mentorship Program</h3>
                <button
                  onClick={() => setShowMentorshipModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <img
                  src="/images/IMAGE 2025-09-06 16:33:57.jpg"
                  alt="Mentorship session 1"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/images/IMAGE 2025-09-06 16:34:00.jpg"
                  alt="Mentorship session 2"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/images/IMAGE 2025-09-06 16:34:02.jpg"
                  alt="Mentorship session 3"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/images/IMAGE 2025-09-06 16:34:05.jpg"
                  alt="Mentorship session 4"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/images/IMAGE 2025-09-06 16:34:08.jpg"
                  alt="Mentorship session 5"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/images/IMAGE 2025-09-06 16:34:11.jpg"
                  alt="Mentorship session 6"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>

              <div className="mb-6">
                <h4 className="text-2xl font-semibold mb-4 text-dark-slate dark:text-off-white">Expert Guidance Across All Services</h4>
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  Our mentorship program provides personalized guidance from industry experts across all our service areas. Whether you're a beginner or looking to advance your skills, we connect you with the right mentor for your goals.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-dark-slate dark:text-off-white">Available Mentorship Areas</h4>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span><strong>Electronics & Embedded Systems:</strong> Circuit design, microcontrollers, IoT</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span><strong>Software Development:</strong> Programming, app development, algorithms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span><strong>Creative Arts:</strong> Digital art, music production, content creation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span><strong>Business & Entrepreneurship:</strong> Startup guidance, project management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span><strong>Engineering Services:</strong> PCB design, prototyping, manufacturing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span><strong>Education & Workshops:</strong> Teaching skills, curriculum development</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 text-dark-slate dark:text-off-white">Mentorship Benefits</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-uganda-red pl-4">
                      <h5 className="font-semibold text-dark-slate dark:text-off-white">Personalized Learning</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">One-on-one sessions tailored to your pace and goals</p>
                    </div>
                    <div className="border-l-4 border-uganda-yellow pl-4">
                      <h5 className="font-semibold text-dark-slate dark:text-off-white">Industry Insights</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Learn from experienced professionals in Uganda's tech ecosystem</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-dark-slate dark:text-off-white">Practical Projects</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Work on real-world projects and build your portfolio</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-dark-slate dark:text-off-white">Networking</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Connect with peers and industry professionals</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold mb-3 text-dark-slate dark:text-off-white">How It Works</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-uganda-red rounded-full flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">1</div>
                    <h5 className="font-semibold text-dark-slate dark:text-off-white">Choose Area</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Select your interest area</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-uganda-yellow rounded-full flex items-center justify-center text-dark-slate font-bold text-lg mb-2 mx-auto">2</div>
                    <h5 className="font-semibold text-dark-slate dark:text-off-white">Match</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">We match you with the right mentor</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">3</div>
                    <h5 className="font-semibold text-dark-slate dark:text-off-white">Learn</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Regular sessions and project work</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">4</div>
                    <h5 className="font-semibold text-dark-slate dark:text-off-white">Grow</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Build skills and achieve your goals</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  Ready to accelerate your learning journey? Let's find your perfect mentor.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setShowMentorshipModal(false)}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                  >
                    Close
                  </button>
                  <Link
                    href="/contact"
                    onClick={() => setShowMentorshipModal(false)}
                    className="bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                  >
                    Start Mentorship
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Microcontrollers Modal */}
      {showMicrocontrollersModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-dark-slate dark:text-off-white">Microcontrollers & Development Boards</h3>
                <button
                  onClick={() => setShowMicrocontrollersModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <img
                  src="/images/IMAGE 2025-09-06 16:47:00.jpg"
                  alt="Arduino boards"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/images/IMAGE 2025-09-06 16:47:02.jpg"
                  alt="ESP32 modules"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/images/IMAGE 2025-09-06 16:47:06.jpg"
                  alt="Raspberry Pi"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/images/IMAGE 2025-09-06 16:47:09.jpg"
                  alt="STM32 boards"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/images/IMAGE 2025-09-06 16:47:13.jpg"
                  alt="Development kits"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/images/IMAGE 2025-09-06 16:47:17.jpg"
                  alt="IoT modules"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/images/IMAGE 2025-09-06 16:47:19.jpg"
                  alt="Sensor integration"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/images/IMAGE 2025-09-06 16:47:23.jpg"
                  alt="Prototyping setup"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>

              <div className="mb-6">
                <h4 className="text-2xl font-semibold mb-4 text-dark-slate dark:text-off-white">Powerful Microcontrollers for Every Project</h4>
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  From beginner-friendly Arduino boards to advanced STM32 and ESP32 modules, we provide the perfect microcontroller for your embedded systems and IoT projects.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-dark-slate dark:text-off-white">Popular Boards We Carry</h4>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span><strong>Arduino:</strong> Uno, Mega, Nano, Leonardo - perfect for beginners</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span><strong>ESP32:</strong> WiFi/Bluetooth enabled for IoT applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span><strong>Raspberry Pi:</strong> Pico, Zero, 4 - full Linux computers in miniature</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span><strong>STM32:</strong> High-performance ARM Cortex-M microcontrollers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span><strong>Teensy:</strong> Compact and powerful for advanced projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span><strong>Development Kits:</strong> Complete starter kits with sensors and modules</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 text-dark-slate dark:text-off-white">Perfect For</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-uganda-red pl-4">
                      <h5 className="font-semibold text-dark-slate dark:text-off-white">IoT Projects</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Connected devices with WiFi, Bluetooth, and cloud integration</p>
                    </div>
                    <div className="border-l-4 border-uganda-yellow pl-4">
                      <h5 className="font-semibold text-dark-slate dark:text-off-white">Robotics</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Motor control, sensors, and autonomous systems</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-dark-slate dark:text-off-white">Home Automation</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Smart home devices and environmental monitoring</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-dark-slate dark:text-off-white">Education</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Learning embedded systems and programming</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold mb-3 text-dark-slate dark:text-off-white">Why Choose Our Microcontrollers?</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">Quality Assured</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Genuine boards from trusted manufacturers</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">Documentation</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Complete guides and tutorials included</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">Ready to Use</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Pre-tested and ready for your projects</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  Ready to start your next embedded systems project? Browse our microcontroller collection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setShowMicrocontrollersModal(false)}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                  >
                    Close
                  </button>
                  <Link
                    href="/products"
                    onClick={() => setShowMicrocontrollersModal(false)}
                    className="bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PCB Design Modal */}
      {showPcbDesignModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-dark-slate dark:text-off-white">Professional PCB Design Services</h3>
                <button
                  onClick={() => setShowPcbDesignModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <img
                  src="/IMAGE 2025-09-05 17:49:00.jpg"
                  alt="PCB Design Services"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="text-2xl font-semibold mb-4 text-dark-slate dark:text-off-white">What We Offer</h4>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span>Single-sided, double-sided, and multi-layer PCB design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span>Schematic capture and PCB layout</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span>Design rule checking (DRC) and layout verification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span>Gerber file generation for manufacturing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span>Bill of Materials (BOM) creation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-uganda-red mr-2">•</span>
                      <span>Design optimization for cost and performance</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-4 text-dark-slate dark:text-off-white">Our Process</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-uganda-red pl-4">
                      <h5 className="font-semibold text-dark-slate dark:text-off-white">1. Consultation</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Discuss your requirements and specifications</p>
                    </div>
                    <div className="border-l-4 border-uganda-yellow pl-4">
                      <h5 className="font-semibold text-dark-slate dark:text-off-white">2. Schematic Design</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Create detailed circuit schematics</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-dark-slate dark:text-off-white">3. PCB Layout</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Design the physical board layout</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-dark-slate dark:text-off-white">4. Review & Testing</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Quality assurance and final delivery</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold mb-3 text-dark-slate dark:text-off-white">Why Choose Carthigan for PCB Design?</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">Precision</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Industry-standard design practices</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">Speed</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Fast turnaround times</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">Cost-Effective</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Competitive pricing for quality work</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  Ready to bring your electronic ideas to life? Let's design your perfect PCB together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setShowPcbDesignModal(false)}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                  >
                    Close
                  </button>
                  <Link
                    href="/contact"
                    onClick={() => setShowPcbDesignModal(false)}
                    className="bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}