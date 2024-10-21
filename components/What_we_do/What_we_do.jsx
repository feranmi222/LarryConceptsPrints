import React from 'react'
import Img1 from '../../src/assets/images/printing.png'
import Img2 from '../../src/assets/images/brand.png'
import Img3 from '../../src/assets/images/signages.png'
import Globe_button from '../Globe_button/Globe_button'
const What_we_do = () => {
  return (
    <div className='bg-defRose  p-contentSpace flex flex-col justify-center items-center mx-auto'>
      <div className='text-center text-headerFont font-bold text-defGrey'>
        What We Do
      </div>
      <div className="container flex p-contentSpace mx-auto items-center text-center justify-evenly overflow-hidden flex-wrap">
        <div className="flex flex-col items-center mx-auto">
          <img src={Img1} alt="Image of an Printing icon" className="w-28" />
          <p className='font-bold text-defGrey'>Printing Services</p>
        </div>
        <div className="flex flex-col items-center sm:mx-0 lg:mx-36">
          <img src={Img2} alt="Image of a Designing icon" className="w-32" />
          <p className='font-bold text-defGrey'> Design And Branding</p>
        </div>
        <div className="flex flex-col items-center mx-auto">
          <img src={Img3} alt="Image of a Signages icon" className="w-28" />
          <p className='font-bold text-defGrey'>Signages</p>
        </div>
      </div>
      <Globe_button link={'/services'} title={'Learn More Services'} />
    </div>
  )
}

export default What_we_do