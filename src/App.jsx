import { useState } from 'react'
import Hero from './components/HeroSection/Hero'
import Navbar from './components/NavbarSection/Navbar'
import PostHero from './components/PostHeroSection/PostHero'
import WhyVerd from './components/WhyVerdSection/WhyVerd'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Faq from './components/FAQ/faq'

function App() {
  return (
    <>
      <Navbar />
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
