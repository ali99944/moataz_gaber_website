import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import EngagingAboutUs from './components/EngagingAboutUs'

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20"> {/* Add padding-top to account for fixed navbar */}
        <Hero />
        <AboutUs />
        <FeaturedProjects />
        <Services />
        <Gallery />
        <EngagingAboutUs />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

