'use client'

import type { Metadata } from 'next'
import '../globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-dark-slate text-off-white p-6">
        <h1 className="text-2xl font-bold mb-8">Carthigan Admin</h1>
        <nav>
          <ul className="space-y-4">
            {[
              { name: 'Dashboard', href: '/admin' },
              { name: 'Products', href: '/admin/products' },
              { name: 'Orders', href: '/admin/orders' },
              { name: 'Mentorship', href: '/admin/mentorship' },
              { name: 'Blog Posts', href: '/admin/blog' },
              { name: 'Settings', href: '/admin/settings' },
            ].map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className="block py-2 px-4 rounded-lg hover:bg-uganda-red hover:text-white transition duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 dark:bg-gray-900">
        {children}
      </main>
    </div>
  )
}