import React from 'react'
import Main_heading from '../components/Main_heading/Main_heading'
import Img1 from '../src/assets/images/services.jpg'
import Collaborate from '../components/Collaborate/Collaborate'
import Cards from '../components/Services_card/Cards'
import Globe_button from '../components/Globe_button/Globe_button'
const Services = () => {
  return (
    <div>
      <Main_heading image={Img1} title={'Discover Our Services'} subtitle={'Transform Your Vision with Expert Printing, Innovative Designs, and Eye-Catching Signages – Tailored Solutions for Every Need.'}/>
      <Cards />
      <Globe_button title={'View Our Portfolio'} link={'/portfolio'}/>
      <Collaborate />
    </div>
  )
}

export default Services