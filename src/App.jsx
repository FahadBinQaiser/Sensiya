import './App.css'
import React from 'react'
import Navbar from '../src/components/navbar/Navbar.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import Features from './components/Features/Feature.jsx'
import Tesitmonials from './components/Testimonials/Testimonials.jsx'
function App() {

  return (
    <>
      <div className="min-h-screen bg-white"> 
      <Navbar />
      <HeroSection />
      <Pricing />
      <Features />
      <Tesitmonials />
      </div>
    </>
  )
}

export default App
