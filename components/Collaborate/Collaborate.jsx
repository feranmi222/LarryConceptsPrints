import React from 'react'
import Globe_button from '../Globe_button/Globe_button'
import './collaborate.css'
const Collaborate = () => {
    return (
        <div className='textBody bg-defRose p-5 pt-10 text-white'>
            <div className='subBody flex flex-col justify-center items-center text-center'>
                <div className='textContainer container w-[75%] p-10 bg-defGrey rounded-lg'>
                    <h1 className='textHeader text-testiFont font-bold'>Collaborate With Us Now</h1>
                    <p className='textContent py-10 px-5'>We believe in the power of collaboration to drive success.
                        Whether you're a business looking to enhance your brand with top-tier printing solutions or a creative professional seeking a
                        trusted partner for your projects, we're here to work alongside you.
                        Our expertise in delivering customized, high-quality print services makes us the ideal choice for your next venture.
                        Let’s create something extraordinary together. Contact us today to explore how we can collaborate!
                    </p>
                    <Globe_button title={'Request A Quote'} link={'/quotes'}/>
                </div>
            </div>
        </div>
    )
}

export default Collaborate