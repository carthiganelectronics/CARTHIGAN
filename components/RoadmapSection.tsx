'use client'

import { motion } from 'framer-motion'

interface Milestone {
  id: number
  title: string
  description: string
  date: string
  completed: boolean
}

export default function RoadmapSection() {
  const milestones: Milestone[] = [
    {
      id: 1,
      title: "Website Launch",
      description: "Complete website with homepage, products, mentorship, about, and contact pages",
      date: "Q1 2025",
      completed: true
    },
    {
      id: 2,
      title: "Electronics Store Launch",
      description: "Online store for Arduino, ESP modules, sensors, and components with shopping cart",
      date: "Q1 2025",
      completed: true
    },
    {
      id: 3,
      title: "Mentorship Program Launch",
      description: "Comprehensive mentorship across electronics, software, creative arts, and all services",
      date: "Q2 2025",
      completed: true
    },
    {
      id: 4,
      title: "Science Week Participation",
      description: "Showcase Carthigan at Uganda Science Week 2025 with interactive demos",
      date: "Q2 2025",
      completed: true
    },
    {
      id: 5,
      title: "Eden Paste Development",
      description: "Launch our invisible typing assistant app with comprehensive waitlist system",
      date: "Q3 2025",
      completed: true
    },
    {
      id: 6,
      title: "Custom Projects Platform",
      description: "Online system for requesting custom electronics, software, and creative projects",
      date: "Q3 2025",
      completed: true
    },
    {
      id: 7,
      title: "PCB Design Services",
      description: "Professional PCB design, schematic capture, and manufacturing preparation",
      date: "Q3 2025",
      completed: true
    },
    {
      id: 8,
      title: "Microcontrollers Catalog",
      description: "Comprehensive catalog of Arduino, ESP32, Raspberry Pi, and STM32 boards",
      date: "Q3 2025",
      completed: true
    },
    {
      id: 9,
      title: "Interactive Product Modals",
      description: "Detailed product information modals with images and specifications",
      date: "Q3 2025",
      completed: true
    },
    {
      id: 10,
      title: "MAKANIKA App Development",
      description: "Launch Buganda's road-side rescue app with Luganda interface and mobile money",
      date: "Q3 2025",
      completed: true
    },
    {
      id: 11,
      title: "Arduino Health Monitor",
      description: "Dual-purpose infant incubator & environmental monitor with comprehensive documentation",
      date: "Q3 2025",
      completed: true
    },
    {
      id: 12,
      title: "Advanced Service Modals",
      description: "Interactive modals for UI/UX designs, semiconductor research, and embedded systems",
      date: "Q3 2025",
      completed: true
    },
    {
      id: 13,
      title: "Carthigan Photos Section",
      description: "Interactive photo gallery section for showcasing team moments and project milestones",
      date: "Q3 2025",
      completed: true
    },
    {
      id: 14,
      title: "Blog & Content Platform",
      description: "Launch educational blog with tutorials, project guides, and industry insights",
      date: "Q4 2025",
      completed: false
    },
    {
      id: 15,
      title: "Community Features",
      description: "Forum, project showcase, and collaboration tools for members",
      date: "Q4 2025",
      completed: false
    },
    {
      id: 16,
      title: "Semiconductor Education",
      description: "Courses and resources on chip design and fabrication",
      date: "Q1 2026",
      completed: false
    },
    {
      id: 17,
      title: "Local Manufacturing Hub",
      description: "Establish PCB fabrication and electronics assembly in Uganda",
      date: "Q2 2026",
      completed: false
    },
    {
      id: 18,
      title: "Innovation Lab",
      description: "Physical space for prototyping, testing, and collaborative development",
      date: "Q3 2026",
      completed: false
    },
    {
      id: 19,
      title: "AI & Machine Learning Hub",
      description: "Integrate AI/ML capabilities for smart electronics and data analytics",
      date: "Q4 2026",
      completed: false
    },
    {
      id: 20,
      title: "International Partnerships",
      description: "Establish collaborations with global tech companies and universities",
      date: "2027",
      completed: false
    }
  ]

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-uganda-yellow hidden md:block"></div>
      
      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center`}
          >
            {/* Milestone content */}
            <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'} mb-4 md:mb-0`}>
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-2 ${
                milestone.completed 
                  ? 'bg-uganda-red text-white' 
                  : 'bg-uganda-yellow text-dark-slate'
              }`}>
                {milestone.date}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-dark-slate dark:text-off-white">{milestone.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
            </div>
            
            {/* Milestone dot */}
            <div className="md:w-2/12 flex justify-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                milestone.completed 
                  ? 'bg-uganda-red' 
                  : 'bg-uganda-yellow border-4 border-dark-slate dark:border-off-white'
              }`}>
                {milestone.completed && (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </div>
            </div>
            
            {/* Empty div for spacing */}
            <div className="md:w-5/12"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}