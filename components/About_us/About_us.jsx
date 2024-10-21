import React from 'react'
import vision from '../../src/assets/images/vision.webp'
import history from '../../src/assets/images/history.webp'
import values from '../../src/assets/images/values.webp'
import Ceo from '../../src/assets/images/ceo.jpg'
import './about_us.css'
import CounterUp from '../CounterUp/CounterUp'
const About_us = () => {
    return (
        <div className='aboutmain bg-defRose'>
            <div className='text-center text-defOrange font-bold mb-5'>
                <p className='text-contactFont'>About Us</p>
            </div>
            <div className='aboutContainer flex justify-center text-justify space-x-10'>
                <div className='containerSub W-1/2'>
                    <img src={Ceo} alt="Picture Of the Ceo" className='ceo w-56'/>
                    <div className='text-center text-defOrange font-semibold'>
                        <p>MD/CEO</p>
                        <p className='uppercase'>Olorunfemi Michael Olarewaju</p>
                    </div>
                </div>
                <div className='containerSub w-1/2'>
                    <h1 className='aboutHeader text-defOrange text-contactFont'>Letter From Our CEO</h1>
                    <p className='text-defOrange pt-10'>
                        At Larry Concepts Prints Limited, our work is guided by a commitment to quality, innovation, and customer-centricity.
                        We believe in delivering exceptional results by utilizing the latest print technologies and creative solutions to meet the unique needs of every client.
                        Integrity and transparency are central to how we operate, ensuring that trust and accountability are present in all our relationships.
                        We also pride ourselves on being reliable, meeting deadlines and consistently providing dependable service.
                        Above all, creativity drives us, helping us craft designs and prints that make a lasting impact and elevate our clients' brands.
                    </p>
                </div>
            </div>
            <CounterUp />
            <div className='aboutBody flex justify-center items-center  space-x-16 w-full pt-20'>
                <div className='aboutsub w-1/3 p-4'>
                    <div>
                        <p className='aboutHeader text-contactFont text-defOrange'>Our History</p>
                        <p className='text-defOrange leading-6 text-justify pt-10 text-contentFont'>
                            Larry Concepts Prints was conceived as a think-tank entrepreneurial vehicle to add value to the
                            world of printing beginning with the Nigerian print industry. We were established and incorporated
                            as a full-fledged printing company on 5th May 2009 to carry out all printing related businesses using
                            the very best of printing technology.
                        </p>
                    </div>
                    <img src={history} alt="Picture representing history" className='mt-10' />
                </div>
                <div className='aboutsub w-1/3 p-4 '>
                    <img src={values} alt="Pictures representing values" />
                    <div>
                        <p className='aboutHeader mt-10 text-contactFont text-defOrange'>Our Core Value </p>
                        <p className='text-defOrange leading-6 text-justify pt-10 text-contentFont'>
                            At Larry Concepts Prints Limited, we are committed to quality, innovation, and customer-focused solutions. Using the latest print technologies, we meet each client’s needs. Integrity, transparency, and accountability define our relationships. We pride ourselves on reliability, consistently delivering on time.
                            Above all, creativity fuels us, helping craft prints that elevate our clients' brands.
                        </p>
                    </div>
                </div>
                <div className='aboutsub w-1/3 p-4'>
                    <div>
                        <p className='aboutHeader text-contactFont text-defOrange'>Our Mission</p>
                        <p className='text-defOrange leading-6 text-justify pt-10 text-contentFont'>
                            Delivering world-class prints and comprehensive print-management services through advanced technology, we focus on quality, innovation, and personalized solutions.
                            Our aim is to exceed client expectations by providing exceptional, customized prints that elevate brands and drive success in every project we handle.
                        </p>
                    </div>
                    <img src={vision} alt="Picture represting our vision" className='mt-10' />
                </div>
            </div>
        </div>
    )
}

export default About_us