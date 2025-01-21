import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='header flex justify-between items-center shadow-md'>
      <div className='flex items-center logo-container ms-20'>
        <Link to={'/'} ><img className='w-24' src={require('../assets/app-logo.png')} alt="" /></Link>
        <div className='location flex items-center gap-1 ms-8'>
          <img className='w-7 h-7' src={require('../assets/location-icon.png')} alt="Location" />
          <p className='text-blue-700'>Your Location</p>
        </div>
      </div>
      <div className='nav-itmes text-xl flex items-center gap-28'>
        <ul className='flex space-x-12 '>
          <li>Home</li>
          <li>Login</li>
          <li>Signup</li>
        </ul>
        <div className='pe-10'>
          <Link><img className=' ms-14 w-12 h-12' src={require('../assets/cart-icon.png')} alt="" /></Link>
          <p>Your Cart is empty.</p>
        </div>
      </div>
    </div>
  )
}

export default Header
