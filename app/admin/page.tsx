'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface StatCardProps {
  title: string
  value: string | number
  change: string
  icon: React.ReactNode
  color: string
}

const StatCard = ({ title, value, change, icon, color }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
  >
    <div className="flex justify-between items-start">
      <div>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</p>
        <h3 className="text-3xl font-bold my-2 text-dark-slate dark:text-off-white">{value}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{change}</p>
      </div>
      <div className={`p-3 rounded-full ${color}`}>
        {icon}
      </div>
    </div>
  </motion.div>
)

export default function AdminDashboard() {
  const [recentOrders, setRecentOrders] = useState<any[]>([])
  const [pendingApprovals, setPendingApprovals] = useState<any[]>([])

  useEffect(() => {
    // Mock data - in a real app this would come from Supabase
    setRecentOrders([
      { id: '#1001', customer: 'John Doe', amount: 45000, status: 'Completed', date: '2025-08-20' },
      { id: '#1002', customer: 'Sarah Nakato', amount: 25000, status: 'Processing', date: '2025-08-19' },
      { id: '#1003', customer: 'Michael Omondi', amount: 78000, status: 'Shipped', date: '2025-08-18' },
      { id: '#1004', customer: 'Grace Mubarak', amount: 32000, status: 'Pending', date: '2025-08-17' },
      { id: '#1005', customer: 'David Namubiru', amount: 19000, status: 'Completed', date: '2025-08-16' }
    ])

    setPendingApprovals([
      { id: 1, type: 'Blog Comment', content: 'New comment on "Future of Semiconductors"', date: '2025-08-20' },
      { id: 2, type: 'Community Post', content: 'Discussion about Arduino projects', date: '2025-08-19' },
      { id: 3, type: 'Mentorship Inquiry', content: 'Request for embedded systems mentorship', date: '2025-08-18' }
    ])
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-dark-slate dark:text-off-white">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Revenue" 
          value="UGX 1.2M" 
          change="+12% from last month" 
          color="bg-uganda-red/10 text-uganda-red"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          }
        />
        <StatCard 
          title="Orders" 
          value="142" 
          change="+8% from last month" 
          color="bg-uganda-yellow/10 text-uganda-yellow"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
          }
        />
        <StatCard 
          title="Products" 
          value="86" 
          change="3 new added" 
          color="bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
            </svg>
          }
        />
        <StatCard 
          title="Members" 
          value="1,248" 
          change="+24 from last week" 
          color="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-dark-slate dark:text-off-white">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Order</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-dark-slate dark:text-off-white">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{order.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-slate dark:text-off-white">UGX {order.amount.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-dark-slate dark:text-off-white">Pending Approvals</h2>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {pendingApprovals.map((item) => (
              <div key={item.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition duration-150">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-dark-slate dark:text-off-white">{item.type}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.content}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                    <div className="mt-2 flex space-x-2">
                      <button className="text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50">
                        Approve
                      </button>
                      <button className="text-xs px-3 py-1 bg-red-100 text-red-800 rounded-full hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50">
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}