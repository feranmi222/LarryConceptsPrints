import React from 'react'
import './Hero.css'
import Carousel from '../Carousel/Carousel'
const HeroArea = () => {
  return (
    <div className='herosection'>
      <Carousel />
      <div className='hero-content leading-contentSpacing'>
        <h1 className='content1 text-headerFont font-bold text-white'>Larry Concepts Prints Limited</h1>
        <p className='content2 text-subFont text-white font-bold'>Elevating Your Brand with Quality Printing, Creative Designs, and Signages.</p>
      </div>
    </div>
  )
}

export default HeroArea