import React from 'react'
import Logo from '../../src/assets/images/logo.jpg'
import './why_choose_us.css'
import CounterUp from '../CounterUp/CounterUp'
const Why_choose_us = () => {
    return (
        <div className="sidecontainer bg-defOrange text-white flex items-center p-10 mx-auto text-left flex-wrap">
            <div className="side1 w-1/2 p-10">
                <p className='content1 font-extrabold text-xl'>Why Choose Us</p>
                <h1 className='content2 font-extrabold text-4xl'>Why People Choose <br />Larry Concepts Prints</h1>
                <p className='content3 leading-wordSpacing text-contentFont'>
                    At Larry Concepts Prints Limited, we are committed to delivering high-quality printing solutions tailored to meet our clients' needs.
                    Our attention to detail, use of cutting-edge technology, and dedication to customer satisfaction set us apart from the competition.
                    With a professional and experienced team, we provide a wide range of services, from graphic design to large-scale print production,
                    ensuring timely delivery and premium results.
                    Clients choose us for our reliability, creativity, and our focus on bringing their vision to life.
                </p>
            </div>
            <div className="side2 w-1/2 p-10">
                <img src={Logo} alt="Logo"/>
            </div>
        </div>
    )
}

export default Why_choose_us