import React from 'react'
import './contactBody.css'
import Img1 from '../../src/assets/images/contactus.svg'
import Logo from '../../src/assets/images/logo.jpg'
import Linkedin from '../../src/assets/images/linkedin.png'
import Instagram from '../../src/assets/images/instagram.png'
import Facebook from '../../src/assets/images/facebook.png'
const ContactBody = () => {
    return (
        <div>
            <div className='contactHeader bg-defRose'>
                <h1 className='text-center font-bold text-contactFont text-defOrange'>Contact Us</h1>
            </div>
            <div className='contactBody flex justify-center items-center bg-defRose text-defOrange pt-14'>
                <div className='body1 w-1/2'>
                    <img src={Img1} alt="Contact Us picture" />
                </div>
                <div className='body2 w-1/2  ml-10 p-10'>
                    <img src={Logo} alt="Our Logo" className='w-24' />
                    <p className='mt-10 text-contactFont2'>
                        We turn your ideas into reality. Reach out today, and let’s create something amazing together!
                    </p>
                    <p className='mt-10'>
                        No 14, Brono Street <br />
                        Area 10, Garki, <br />
                        Abuja, Nigeria. 
                        
                    </p>
                    <p className='mt-10'>
                        Block 39, Plot 5, Parliament Estate <br />
                        Olokunwolu Layout, Igbatoro Rd, <br />
                        Akure, Ondo State.
                    </p>
                    <p className='mt-10'>
                        +234-703-307-8445
                    </p>
                    <p className='mt-10 font-bold'>
                        hello@reallygreatsite.com
                    </p>
                    <div className='flex w-28 mt-10'>
                        <a href="">
                            <img src={Instagram} alt="instagram Logo" />
                        </a>
                        <a href="">
                            <img src={Linkedin} alt="Linkedin Logo" />
                        </a>
                        <a href="">
                            <img src={Facebook} alt="Facebook Logo" />
                        </a>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ContactBody