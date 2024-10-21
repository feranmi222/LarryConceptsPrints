import React from 'react'
import ContactBody from '../components/ContactBody/ContactBody'
import Main_heading from '../components/Main_heading/Main_heading'
import Img1 from '../src/assets/images/contact.jpg'
import Collaborate from '../components/Collaborate/Collaborate'
const Contact = () => {
  return (
    <div>
      <Main_heading image={Img1} title={'Get in Touch'} subtitle={"We're Here to Assist You with Quality Printing, Creative Designs, and Signage Solutions Tailored to Your Needs"}/>
      <ContactBody />
      <Collaborate />
    </div>
  )
}

export default Contact