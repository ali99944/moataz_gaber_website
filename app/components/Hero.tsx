'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80'
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    console.log(isVisible);
    
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`معتز جابر - تصميمات داخلية راقية ${index + 1}`}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={index === 0}
          className={`transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-[#004851] bg-opacity-50 flex flex-col items-center justify-center text-[#D3D3D3] text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">معتز جابر</h1>
          <p className="text-xl md:text-2xl mb-8 mx-auto">
            نبدع في تصميم وتنفيذ المطابخ والديكورات الداخلية لنحول مساحتك إلى تحفة فنية تعكس أسلوب حياتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF0000] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition duration-300 shadow-md"
            >
              احجز استشارة مجانية
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-[#D3D3D3] text-[#D3D3D3] font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#D3D3D3] hover:text-[#004851] transition duration-300 shadow-md"
            >
              تصفح أعمالنا
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

