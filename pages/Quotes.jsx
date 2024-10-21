import React from 'react'
import Main_heading from '../components/Main_heading/Main_heading'
import Testimonals from '../components/Testimonals/Testimonals'
import Img1 from '../src/assets/images/quote.jpg'
import Form from '../components/Quote/Form'
const Quotes = () => {
  return (
    <div>
      <Main_heading image={Img1} title={'Request A Quotation'} subtitle={'Discover Tailored Printing, Design, and Signage Solutions that Fit Your Vision and Budget."'}/>
      <Form />
      <Testimonals />
    </div>
  )
}

export default Quotes