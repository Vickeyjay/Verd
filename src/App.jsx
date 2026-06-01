import { useState, useEffect } from 'react'
import Hero from './components/HeroSection/Hero'
import Navbar from './components/NavbarSection/Navbar'
import PostHero from './components/PostHeroSection/PostHero'
import WhyVerd from './components/WhyVerdSection/WhyVerd'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Faq from './components/FAQ/faq'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = [
      document.getElementById('home'),
      document.getElementById('why-verd'),
      document.getElementById('features'),
      document.getElementById('faqs'),
    ].filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <PostHero />
      <WhyVerd />
      <Features />
      <Faq />
      <Footer />
    </>
  )
}

export default App