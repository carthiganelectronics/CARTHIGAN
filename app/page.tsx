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
  const [showMakanikaModal, setShowMakanikaModal] = useState(false)
  const [showEmbeddedModal, setShowEmbeddedModal] = useState(false)
  const [showArduinoModal, setShowArduinoModal] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Testimonial data
  const testimonials = [
    {
      quote: "As the founder and CEO of Carthigan, I'm dedicated to building Uganda's premier tech hub for electronics, embedded systems, and software technology. Our mission is to empower local innovators with world-class resources and mentorship.",
      name: "Eden Gilbert Kiseka",
      designation: "CEO & Founder, Electrical & Software Engineer",
      src: "/2025-09-05 16.40.35.jpg",
    },
    {
      quote: "As Carthigan's co-founder, I'm passionate about bridging telecommunications expertise with innovative design solutions. Together with our team, we're creating tools that make technology accessible and intuitive for everyone in Uganda.",
      name: "Okurut Joe",
      designation: "Co-Founder, Telecommunications Engineer & UI/UX Designer",
      src: "/2025-09-05 17.04.54.jpg",
    },
    {
      quote: "Leading development at Carthigan has been incredibly rewarding. Our full-stack approach ensures that every digital solution we create is robust, scalable, and user-centric, empowering Uganda's tech ecosystem.",
      name: "Nakisanze Daisy",
      designation: "Lead Developer, Full Stack Software Engineer",
      src: "/107997017.jpg",
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
      title: "MAKANIKA",
      src: "/images/IMAGE 2025-09-06 17:44:03.jpg",
    },
    {
      title: "Arduino-Based Infant Incubator & Environmental Monitor",
      src: "/images/IMAGE 2025-09-06 18:09:18.jpg",
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
                if (index === 1) setShowMakanikaModal(true)
                if (index === 2) setShowArduinoModal(true)
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
           <AnimatedShowcase onEmbeddedClick={() => setShowEmbeddedModal(true)} />
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

      {/* MAKANIKA Modal */}
      {showMakanikaModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-dark-slate dark:text-off-white">MAKANIKA</h3>
                <button
                  onClick={() => setShowMakanikaModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <img
                  src="/images/IMAGE 2025-09-06 17:44:03.jpg"
                  alt="MAKANIKA screenshot 1"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="/images/IMAGE 2025-09-06 17:44:41.jpg"
                  alt="MAKANIKA screenshot 2"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                MAKANIKA – Buganda's Own Road-Side Rescue
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Built for the roads of Lolo, spoken in Luganda, priced in shillings, and staffed by mechanics who know every pothole from Namirembe to Nabweru.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                One tap, and a verified makanika races to you—live on your screen, no haggling, no guesswork.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Diagnosis happens in your language, prices appear before spanners turn, and you only pay after you're back on the road.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Offline mode, mobile-money ready, daylight-dark theme—everything tuned for Buganda drivers.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Keep MAKANIKA on your phone; the next breakdown in Lolo just became a 5-minute pause, not a day-long problem.
              </p>
              <div className="text-center">
                <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for joining the MAKANIKA waitlist! We\'ll notify you when the app is ready.'); setShowMakanikaModal(false); }} className="flex flex-col gap-4">
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
                    Join MAKANIKA Waitlist
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Embedded Systems Projects Modal */}
      {showEmbeddedModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-dark-slate dark:text-off-white">Embedded Systems Projects</h3>
                <button
                  onClick={() => setShowEmbeddedModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  Our comprehensive embedded systems solutions combine cutting-edge hardware, expert mentorship, and professional PCB design services to bring your IoT, robotics, and automation projects to life.
                </p>
              </div>

              {/* Microcontrollers Section */}
              <div className="mb-8">
                <h4 className="text-2xl font-semibold mb-4 text-dark-slate dark:text-off-white">Microcontrollers & Development Boards</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <img src="/images/IMAGE 2025-09-06 16:47:00.jpg" alt="Arduino boards" className="w-full h-32 object-cover rounded-lg" />
                  <img src="/images/IMAGE 2025-09-06 16:47:02.jpg" alt="ESP32 modules" className="w-full h-32 object-cover rounded-lg" />
                  <img src="/images/IMAGE 2025-09-06 16:47:06.jpg" alt="Raspberry Pi" className="w-full h-32 object-cover rounded-lg" />
                  <img src="/images/IMAGE 2025-09-06 16:47:09.jpg" alt="STM32 boards" className="w-full h-32 object-cover rounded-lg" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  From beginner-friendly Arduino boards to advanced STM32 and ESP32 modules, we provide the perfect microcontroller for your embedded systems and IoT projects.
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Arduino, ESP32, Raspberry Pi, and STM32 boards</li>
                  <li>Complete development kits with sensors and modules</li>
                  <li>IoT projects, robotics, and home automation</li>
                </ul>
              </div>

              {/* Mentorship Section */}
              <div className="mb-8">
                <h4 className="text-2xl font-semibold mb-4 text-dark-slate dark:text-off-white">Expert Mentorship Program</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <img src="/images/IMAGE 2025-09-06 16:33:57.jpg" alt="Mentorship session 1" className="w-full h-32 object-cover rounded-lg" />
                  <img src="/images/IMAGE 2025-09-06 16:34:00.jpg" alt="Mentorship session 2" className="w-full h-32 object-cover rounded-lg" />
                  <img src="/images/IMAGE 2025-09-06 16:34:02.jpg" alt="Mentorship session 3" className="w-full h-32 object-cover rounded-lg" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our mentorship program provides personalized guidance from industry experts across electronics, software development, and engineering services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">Available Areas:</h5>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                      <li>Circuit design and microcontrollers</li>
                      <li>IoT and embedded systems</li>
                      <li>Software development</li>
                      <li>Engineering services</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">Benefits:</h5>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                      <li>Personalized learning sessions</li>
                      <li>Industry insights and networking</li>
                      <li>Practical project work</li>
                      <li>Career guidance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PCB Design Section */}
              <div className="mb-8">
                <h4 className="text-2xl font-semibold mb-4 text-dark-slate dark:text-off-white">Professional PCB Design Services</h4>
                <div className="mb-4">
                  <img src="/IMAGE 2025-09-05 17:49:00.jpg" alt="PCB Design Services" className="w-full h-64 object-cover rounded-lg" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Professional PCB design services for your electronic projects with industry-standard practices and quality assurance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">Our Services:</h5>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                      <li>Single-sided, double-sided, and multi-layer PCB design</li>
                      <li>Schematic capture and PCB layout</li>
                      <li>Design rule checking (DRC)</li>
                      <li>Gerber file generation</li>
                      <li>Bill of Materials (BOM) creation</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">Our Process:</h5>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                      <li>Consultation and requirements gathering</li>
                      <li>Schematic design and PCB layout</li>
                      <li>Review, testing, and final delivery</li>
                      <li>Design optimization for cost and performance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  Ready to start your embedded systems project? Let's combine our expertise to bring your ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setShowEmbeddedModal(false)}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                  >
                    Close
                  </button>
                  <Link
                    href="/contact"
                    onClick={() => setShowEmbeddedModal(false)}
                    className="bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Arduino-Based Infant Incubator & Environmental Monitor Modal */}
      {showArduinoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-dark-slate dark:text-off-white">Arduino-Based Infant Incubator & Environmental Monitor</h3>
                <button
                  onClick={() => setShowArduinoModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  <strong>Dual-Purpose Health Monitor</strong> - Technical Documentation by Eden Gilbert Kiseka & Okurut Joe
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  This dual-purpose system addresses critical health monitoring needs in resource-limited settings by providing: Mode 1: Infant incubator environmental monitoring (temperature, humidity) and Mode 2: Indoor air quality monitoring with basic Air Quality Index (AQI).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <img
                  src="/images/IMAGE 2025-09-06 18:09:18.jpg"
                  alt="Arduino-Based Infant Incubator"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="/images/IMAGE 2025-09-06 18:09:48.jpg"
                  alt="Environmental Monitor"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-2xl font-semibold mb-4 text-dark-slate dark:text-off-white">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Real-time temperature and humidity monitoring</li>
                    <li>Air quality assessment using MQ-135 sensor</li>
                    <li>Multiple display options (OLED, LCD, 7-segment)</li>
                    <li>Visual alert system with colored LEDs</li>
                    <li>User-adjustable threshold settings</li>
                    <li>Low-cost, replicable design</li>
                  </ul>
                  <div>
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">Target Applications:</h5>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                      <li>Neonatal care units</li>
                      <li>Health center waiting areas</li>
                      <li>Community health programs</li>
                      <li>Home environmental monitoring</li>
                      <li>Educational demonstrations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hardware Components */}
              <div className="mb-8">
                <h4 className="text-2xl font-semibold mb-4 text-dark-slate dark:text-off-white">Hardware Components</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">Core Components:</h5>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                      <li>Arduino Uno R3 microcontroller</li>
                      <li>DHT22 Temperature/Humidity Sensor</li>
                      <li>LM35 Temperature Sensor (redundancy)</li>
                      <li>MQ-135 Air Quality Sensor</li>
                      <li>SSD1306 OLED Display</li>
                      <li>16x2 LCD Display with I2C</li>
                      <li>7-Segment Display</li>
                      <li>74HC595 Shift Register</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">Estimated Cost: ~$92</h5>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        <div className="flex justify-between mb-1"><span>Arduino Uno R3:</span><span>$25</span></div>
                        <div className="flex justify-between mb-1"><span>Sensors (DHT22, LM35, MQ-135):</span><span>$20</span></div>
                        <div className="flex justify-between mb-1"><span>Displays (OLED, LCD, 7-seg):</span><span>$17</span></div>
                        <div className="flex justify-between mb-1"><span>Support Components:</span><span>$15</span></div>
                        <div className="flex justify-between mb-1"><span>Enclosure & Assembly:</span><span>$15</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Modes */}
              <div className="mb-8">
                <h4 className="text-2xl font-semibold mb-4 text-dark-slate dark:text-off-white">Operating Modes</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold text-dark-slate dark:text-off-white">Mode 1: Infant Incubator</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Environmental monitoring for neonatal care</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                      <li>Temperature range: 32-38°C optimal</li>
                      <li>Humidity monitoring</li>
                      <li>Visual alerts for out-of-range conditions</li>
                      <li>Redundancy with dual temperature sensors</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-dark-slate dark:text-off-white">Mode 2: Air Quality Monitor</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Indoor environmental assessment</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                      <li>AQI scale: 0-9 (0-2 excellent, 7-9 poor)</li>
                      <li>Detects NH3, NOx, CO2, benzene</li>
                      <li>Real-time air quality alerts</li>
                      <li>Environmental trend monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mb-8">
                <h4 className="text-2xl font-semibold mb-4 text-dark-slate dark:text-off-white">Technical Specifications</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">Temperature Sensors</h5>
                    <ul className="text-sm text-gray-700 dark:text-gray-300">
                      <li>DHT22: ±0.5°C accuracy</li>
                      <li>LM35: ±0.5°C accuracy</li>
                      <li>Range: 0-50°C</li>
                      <li>Response time: 2 seconds</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">Air Quality Sensor</h5>
                    <ul className="text-sm text-gray-700 dark:text-gray-300">
                      <li>MQ-135: NH3, NOx, CO2 detection</li>
                      <li>Range: 10-300ppm</li>
                      <li>Warm-up time: 60 seconds</li>
                      <li>Service life: 2-3 years</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">System Specs</h5>
                    <ul className="text-sm text-gray-700 dark:text-gray-300">
                      <li>Power: 5V DC, 300-500mA</li>
                      <li>Operating temp: 0-50°C</li>
                      <li>Humidity: 10-90% RH</li>
                      <li>Update rate: 2 seconds</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Educational Value */}
              <div className="mb-8">
                <h4 className="text-2xl font-semibold mb-4 text-dark-slate dark:text-off-white">Educational & Practical Applications</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">Learning Outcomes:</h5>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                      <li>Embedded systems programming</li>
                      <li>Sensor integration and calibration</li>
                      <li>Healthcare technology applications</li>
                      <li>Environmental monitoring principles</li>
                      <li>Human-centered design for health</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-dark-slate dark:text-off-white mb-2">Impact:</h5>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                      <li>Affordable healthcare solutions</li>
                      <li>Community health program support</li>
                      <li>Educational tool for students</li>
                      <li>Research platform for innovations</li>
                      <li>Local manufacturing opportunity</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  This project demonstrates how affordable, open-source technology can create meaningful healthcare solutions for resource-limited settings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setShowArduinoModal(false)}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                  >
                    Close
                  </button>
                  <Link
                    href="/contact"
                    onClick={() => setShowArduinoModal(false)}
                    className="bg-uganda-red hover:bg-uganda-red/90 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                  >
                    Learn More
                  </Link>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <strong>Authors:</strong> Eden Gilbert Kiseka & Okurut Joe | <strong>Date:</strong> May 26, 2025 | <strong>Version:</strong> 1.0
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}