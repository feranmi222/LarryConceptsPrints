import React from 'react'
import Logo from '../../src/assets/images/logo.jpg'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="bg-defOrange text-white py-12 pt-10">
      <div className="container mx-auto px-4">
        {/* Upper section */}
        <div className="flex flex-col items-center text-center mb-8">
          {/* Logo */}
          <div className="mb-4">
            <img src={Logo} alt="Company Logo" className="h-16 w-16" />
          </div>
          {/* Final statement */}
          <p className="words text-lg font-semibold">
            Transforming your ideas into reality with creative, reliable, <br />
            and high-quality printing solutions delivered on time, always.
          </p>
        </div>

        {/* Lower section */}
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
          {/* Social links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Connect with us</h3>
            <ul>
              <li><a href="#" className="words hover:text-slate-600">Instagram</a></li>
              <li><a href="#" className="words hover:text-slate-600">Facebook</a></li>
              <li><a href="#" className="words hover:text-slate-600">LinkedIn</a></li>
              <li><a href='#' className="words hover:text-slate-600">hello@reallygreatsite.com</a></li>
            </ul>

          </div>

          {/* Locations */}
          <div className="md:flex md:space-x-8">
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Our locations</h3>
              <p className='words '>
                No 14, Brono Street <br />
                Area 10, Garki, <br />
                Abuja, Nigeria.
              </p>
            </div>
            <div>
              <h3 className="hidden md:block text-lg font-bold mb-2">&nbsp;</h3> {/* Empty space for alignment */}
              <p className='words '>
                Block 39, Plot 5, Parliament Estate <br />
                Olokunwolu Layout, Igbatoro Rd, <br />
                Akure, Ondo State.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer