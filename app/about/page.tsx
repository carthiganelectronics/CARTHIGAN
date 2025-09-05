'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark-slate dark:text-off-white">About Carthigan</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Uganda's leading tech hub for electronics, embedded systems, software technology, and creative resources
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-dark-slate dark:text-off-white">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
              At Carthigan, we're committed to empowering tech-savvy individuals in Uganda with the tools, resources, and knowledge they need to innovate and succeed.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
              We bridge the gap between global technology trends and local needs, providing access to cutting-edge electronics, embedded systems, software tools, and creative resources.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Our vision extends beyond just reselling components - we're building a network of innovators, creators, and learners who will drive Uganda's technological future.
            </p>
          </div>
          <div className="bg-gray-300 dark:bg-gray-700 rounded-2xl h-96 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Mission Image</span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-gray-300 dark:bg-gray-700 rounded-2xl h-96 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Our Story Image</span>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6 text-dark-slate dark:text-off-white">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
              Founded in 2025 by Eden Gilbert Kiseka and Okurut Joe, Carthigan emerged from a recognition of the challenges faced by students, hobbyists, and professionals in accessing quality technology resources in Uganda.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
              What started as a small initiative to import Arduino boards and electronic components has grown into a comprehensive platform serving diverse technological and creative needs.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Today, we're not just a reseller but a hub for innovation, education, and collaboration in Uganda's tech ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-dark-slate dark:text-off-white">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Innovation',
              description: 'We foster creativity and encourage experimentation with new technologies and ideas.',
              icon: (
                <svg className="w-8 h-8 text-uganda-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              )
            },
            {
              title: 'Accessibility',
              description: 'We make technology resources accessible to everyone, regardless of their background or experience level.',
              icon: (
                <svg className="w-8 h-8 text-uganda-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              )
            },
            {
              title: 'Education',
              description: 'We prioritize learning and knowledge sharing to empower the next generation of Ugandan technologists.',
              icon: (
                <svg className="w-8 h-8 text-uganda-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                </svg>
              )
            },
            {
              title: 'Sustainability',
              description: 'We are committed to environmentally responsible practices and supporting local development.',
              icon: (
                <svg className="w-8 h-8 text-uganda-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              )
            },
            {
              title: 'Excellence',
              description: 'We strive for the highest quality in everything we do, from products to services to engagement.',
              icon: (
                <svg className="w-8 h-8 text-uganda-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              )
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <div className="w-16 h-16 bg-uganda-yellow/10 rounded-full flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-dark-slate dark:text-off-white">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-dark-slate dark:text-off-white">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg text-center"
          >
            <div className="h-64 flex items-center justify-center">
              <img 
                src="/2025-09-05 16.40.35.jpg" 
                alt="Eden Gilbert Kiseka" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-dark-slate dark:text-off-white">Eden Gilbert Kiseka</h3>
              <p className="text-uganda-red font-semibold mb-3">Founder & CEO</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Electrical & Software Engineer specializing in semiconductors, embedded systems, Android development, and UI/UX design. Implementing Material You 3 design language.
              </p>
            </div>
          </motion.div>
          {[
            {
              name: 'Samuel Mubarak',
              role: 'CTO',
              bio: 'Electrical engineer with 10+ years in embedded systems and IoT development'
            },
            {
              name: 'Grace Nakato',
              role: 'Head of Design',
              bio: 'UI/UX designer with expertise in creating intuitive user experiences'
            },
            {
              name: 'David Omondi',
              role: 'Creative Director',
              bio: 'Music producer and videographer with a passion for digital arts'
            }
          ].map((member, index) => (
            <motion.div
              key={index+1}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index+1) * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg text-center"
            >
              <div className="h-64 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Team Member Photo</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-dark-slate dark:text-off-white">{member.name}</h3>
                <p className="text-uganda-red font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}