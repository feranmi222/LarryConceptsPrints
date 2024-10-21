import React from 'react'
import Main_heading from '../components/Main_heading/Main_heading'
import Img1 from '../src/assets/images/about.jpg'
import Collaborate from '../components/Collaborate/Collaborate'
import About_us from '../components/About_us/About_us'
import Testimonals from '../components/Testimonals/Testimonals'
const About = () => {
  return (
    <div>
      <Main_heading image={Img1} title={'Learn About Us'} subtitle={' Your Trusted Partner in Quality Printing, Creative Designs, and Customized Signage Solutions That Elevate Your Brand'}/>
      <About_us />
      <Testimonals />
      <Collaborate />
    </div>
  )
}

export default About