import { useState, useEffect } from 'react'

interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
  inStock: boolean
}

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      // Static data for services and products
      const staticProducts: Product[] = [
        {
          id: 1,
          name: 'Resistors',
          description: 'Wide range of resistors for all your circuit needs',
          price: 1000,
          category: 'Electrical Components',
          image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
          inStock: true
        },
        {
          id: 2,
          name: 'Capacitors',
          description: 'Various types and sizes of capacitors for electronics projects',
          price: 1500,
          category: 'Electrical Components',
          image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
          inStock: true
        },
        {
          id: 3,
          name: 'Microcontrollers',
          description: 'Arduino, Raspberry Pi, and other microcontrollers for embedded systems',
          price: 15000,
          category: 'Electrical Components',
          image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
          inStock: true
        },
        {
          id: 4,
          name: 'Sensors',
          description: 'Motion, temperature, humidity, and other sensors for IoT projects',
          price: 5000,
          category: 'Electrical Components',
          image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
          inStock: true
        },
        {
          id: 5,
          name: 'LEDs & Displays',
          description: 'LEDs, OLED displays, LCD screens for visual interfaces',
          price: 3000,
          category: 'Electrical Components',
          image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
          inStock: true
        },
        {
          id: 6,
          name: 'PCB Design',
          description: 'Professional PCB design services for your electronic projects',
          price: 25000,
          category: 'Engineering Services',
          image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
          inStock: true
        },
        {
          id: 7,
          name: 'Embedded Systems',
          description: 'Custom embedded systems development for IoT and automation',
          price: 50000,
          category: 'Engineering Services',
          image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
          inStock: true
        },
        {
          id: 8,
          name: 'EdenPaste',
          description: 'Our typing engine made in Python with Go for performance',
          price: 0,
          category: 'Software',
          image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
          inStock: true
        },
        {
          id: 9,
          name: 'Flex UI Framework',
          description: 'Python-based UI framework built with Material Design 3',
          price: 0,
          category: 'Software',
          image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
          inStock: true
        },
        {
          id: 10,
          name: 'Technical Writing',
          description: 'Professional technical documentation and manuals',
          price: 15000,
          category: 'Creative Writing',
          image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
          inStock: true
        },
        {
          id: 11,
          name: 'Audio Editing',
          description: 'Professional audio editing and mastering services',
          price: 20000,
          category: 'Music Production',
          image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
          inStock: true
        },
        {
          id: 12,
          name: 'Electronics Mentorship',
          description: 'One-on-one mentorship for electronics enthusiasts and students',
          price: 30000,
          category: 'Mentorship',
          image: 'https://images.unsplash.com/photo-1505228395891-9a51e7814e02?auto=format&fit=crop&w=500',
          inStock: true
        }
      ]
      
      setProducts(staticProducts)
      setLoading(false)
    } catch (err) {
      setError('Failed to load services')
      setLoading(false)
    }
  }, [])

  return { products, loading, error }
}