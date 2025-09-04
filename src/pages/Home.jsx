import React from 'react'
import HeroSection from '../components/HeroSection'
import GrowWithHelix from '../components/GrowWithHelix'

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-white md:px-20'>
      <HeroSection/>
      <GrowWithHelix/>
    </div>
  )
}

export default Home