import './App.css'
import React from 'react'
import Navbar from '../src/components/navbar/Navbar.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
function App() {

  return (
    <>
      <div className="min-h-screen bg-white"> 
      <Navbar />
      <HeroSection />
      <Pricing />
      </div>
    </>
  )
}

export default App
