import './App.css'
import React from 'react'
import Navbar from '../src/components/navbar/Navbar.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import Features from './components/Features/Feature.jsx'
function App() {

  return (
    <>
      <div className="min-h-screen bg-white"> 
      <Navbar />
      <HeroSection />
      <Features />
      </div>
    </>
  )
}

export default App
