'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card'

interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
}

interface ProductListProps {
  onEdenPasteClick?: () => void
  onPcbDesignClick?: () => void
}

export default function ProductList({ onEdenPasteClick, onPcbDesignClick }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Featured products and services
    const featuredProducts: Product[] = [
      {
        id: 1,
        name: 'Microcontrollers',
        description: 'Arduino, Raspberry Pi, and other microcontrollers for embedded systems',
        price: 15000,
        category: 'Electrical Components',
        image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500'
      },
      {
        id: 2,
        name: 'EdenPaste',
        description: 'Invisible typing assistant that lives in the corner of your screen. Write once, let Eden type everywhere.',
        price: 0,
        category: 'Software',
        image: '/images/IMAGE 2025-09-06 15:48:34.jpg'
      },
      {
        id: 3,
        name: 'PCB Design',
        description: 'Professional PCB design services for your electronic projects',
        price: 25000,
        category: 'Engineering Services',
        image: '/IMAGE 2025-09-05 17:49:00.jpg'
      },
      {
        id: 4,
        name: 'Electronics Mentorship',
        description: 'One-on-one mentorship for electronics enthusiasts and students',
        price: 30000,
        category: 'Mentorship',
        image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500'
      }
    ]
    
    setTimeout(() => {
      setProducts(featuredProducts)
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-80 animate-pulse"></div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <CardContainer
          className="inter-var"
          key={product.id}
          onClick={
            product.id === 2 && onEdenPasteClick ? onEdenPasteClick :
            product.id === 3 && onPcbDesignClick ? onPcbDesignClick :
            undefined
          }
        >
          <CardBody className={`bg-white dark:bg-gray-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ${
            product.id === 2 ? 'cursor-pointer border-uganda-red/20' :
            product.id === 1 ? 'border-blue-500/20' :
            product.id === 3 ? 'cursor-pointer border-green-500/20' :
            product.id === 4 ? 'border-amber-600/20' :
            'border-black/[0.1]'
          }`}>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {product.name}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {product.description}
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <img
                src={product.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={product.name}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <span className="bg-uganda-red text-white text-xs font-bold px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </CardItem>
               <CardItem
                 translateZ={20}
                 translateX={40}
                 as="button"
                 className="px-4 py-2 rounded-xl bg-dark-slate dark:bg-white dark:text-black text-white text-xs font-bold"
               >
                 {product.id === 2 ? 'Coming Soon' : product.price === 0 ? 'Free Download' : `UGX ${product.price.toLocaleString()}`}
               </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  )
}