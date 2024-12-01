import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProjectsGrid from '../components/ProjectsGrid'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
        <Navbar />
      <ProjectsGrid />
      <Footer />
    </main>
  )
}

