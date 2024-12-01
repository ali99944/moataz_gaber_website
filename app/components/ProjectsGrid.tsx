'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

// Dummy data for projects
const projectsData = [
  { id: 1, title: "مطبخ عصري", category: "مطابخ", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=80" },
  { id: 2, title: "غرفة معيشة فاخرة", category: "غرف معيشة", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80" },
  { id: 3, title: "حمام سبا", category: "حمامات", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80" },
  { id: 4, title: "غرفة نوم هادئة", category: "غرف نوم", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80" },
  { id: 5, title: "مكتب منزلي", category: "مكاتب", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80" },
  { id: 6, title: "مطبخ تقليدي", category: "مطابخ", image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=80" },
]

const categories = ["الكل", "مطابخ", "غرف معيشة", "حمامات", "غرف نوم", "مكاتب"]

export default function ProjectsGrid() {
  const [projects, setProjects] = useState(projectsData)
  const [filter, setFilter] = useState("الكل")
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  useEffect(() => {
    if (filter === "الكل") {
      setProjects(projectsData)
    } else {
      const filtered = projectsData.filter(project => project.category === filter)
      setProjects(filtered)
    }
    setCurrentPage(1)
  }, [filter])

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#004851]">مشاريعنا</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          اكتشف مجموعة متنوعة من مشاريعنا المميزة في مجال التصميم الداخلي والمطابخ. كل مشروع يعكس التزامنا بالجودة والإبداع.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category
                  ? 'bg-[#004851] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-[#004851]">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.category}</p>
                  <button className="bg-[#004851] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
                    عرض التفاصيل
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {projects.length > projectsPerPage && (
          <div className="flex justify-center mt-12">
            {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-4 py-2 rounded-lg transition-colors ${
                  currentPage === index + 1
                    ? 'bg-[#004851] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

