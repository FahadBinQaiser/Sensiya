import './App.css'
import React from 'react'
import Navbar from '../src/components/navbar/Navbar.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import Features from './components/Features/Feature.jsx'
import Tesitmonials from './components/Testimonials/Testimonials.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import NewsLetter from './components/NewsLetter/NewsLetter.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {

  return (
    <>
      <div className="min-h-screen bg-white"> 
      <Navbar />
      <HeroSection />
      <Features />
      <Tesitmonials />
      <Pricing />
      <NewsLetter />
      <Footer />
      </div>
    </>
  )
}

export default App
