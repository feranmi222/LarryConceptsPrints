import React from 'react'
import { Link } from 'react-router-dom'
const Globe_button = ({title, link}) => {
  return (
    <div className='btn mt-1 flex items-center justify-center'>
        <button className='px-3 py-2 bg-defOrange hover:bg-black rounded-md font-bold text-contentFont text-white'><Link to={link}>{title}</Link></button>
    </div>
  )
}

export default Globe_button