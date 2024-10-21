import React from 'react'
import Img1 from '../../src/assets/images/customer-satisfaction.png'
import './testimonal.css'
import Client_logo from '../Clients_logo/Client_logo'
const Testimonals = () => {
    return (
        <div className='bg-defRose p-4'>
            <div className='testHeader flex flex-col justify-center items-center '>
                <p className='testTitle text-testiFont font-bold text-defGrey'>Our Trusted Clientele</p>
                <img src={Img1} alt="" className='w-28'/>
            </div>
            <Client_logo />
        </div>
    )
}

export default Testimonals