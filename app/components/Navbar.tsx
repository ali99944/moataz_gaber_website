'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#004851] text-[#D3D3D3] fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-row-reverse">
          <span className="text-xl font-bold hidden sm:block">معتز جابر</span>
            <Image
              src="/assets/images/logo.png"
              alt="Moataz Gabr Kitchens"
              width={50}
              height={50}
              className="rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-row-reverse">
            <Link 
              href="#contact" 
              className="bg-[#FF0000] text-white px-4 py-2 rounded-lg shadow-md hover:bg-opacity-90 transition-colors"
            >
              اتصل بنا
            </Link>
            <Link href="/projects" className="hover:text-[#FF0000] transition-colors">مشاريعنا</Link>
            <Link href="/gallery" className="hover:text-[#FF0000] transition-colors">معرض الأعمال</Link>
            <Link href="/services" className="hover:text-[#FF0000] transition-colors">خدماتنا</Link>
            <Link href="/" className="hover:text-[#FF0000] transition-colors">الرئيسية</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#D3D3D3]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link 
              href="/" 
              className="block py-2 px-4 hover:bg-[#003840] rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link 
              href="#services" 
              className="block py-2 px-4 hover:bg-[#003840] rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              خدماتنا
            </Link>
            <Link 
              href="#gallery" 
              className="block py-2 px-4 hover:bg-[#003840] rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              معرض الأعمال
            </Link>
            <Link 
              href="#projects" 
              className="block py-2 px-4 hover:bg-[#003840] rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              مشاريعنا
            </Link>
            <Link 
              href="#contact" 
              className="block py-2 px-4 bg-[#FF0000] text-white rounded-lg shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              اتصل بنا
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
