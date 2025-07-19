import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection/index'

function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
    </div>
  )
}

export default HomePage
