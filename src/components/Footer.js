import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=' flex flex-col bg-slate-100 w-100 Footer place-items-center fixed bottom-0 inset-x-0'>
      <div className='footer-contents w-7/12 pt-10'>
        <div className='logo-footer ms-4'>
            <img className='w-36' src={require('../assets/app-logo.png')} alt="" />
        </div>
        <div className='flex justify-evenly footer-content -ms-10 pt-4 pb-16'>
            <div className='flex flex-col gap-2'>
                <p className='font-medium text-lg'>ABOUT FOODIEBABA</p>
                <ul className='flex flex-col gap-1 text-lg'>
                    <li><Link >Who We Are</Link></li>
                    <li><Link >Work With Us</Link></li>
                    <li><Link >Blog</Link></li>
                    <li><Link >Report Fraud</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-medium text-lg'>CONTACT US</p>
                <ul className='flex text-lg flex-col gap-1 ms-1'>
                    <li><Link>Email Helpline</Link></li>
                    <li><Link>Phone Helpline</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-medium text-lg'>FOR RESTAURANTS</p>
                <ul className='flex text-lg flex-col gap-1 ms-1'>
                    <li><Link>Partner With Us</Link></li>
                    <li><Link>Ohter Services</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-medium text-lg'>LEARN MORE</p>
                <ul className='flex text-lg flex-col gap-1 ms-1'>
                    <li><Link>Privacy</Link></li>
                    <li><Link>Security</Link></li>
                    <li><Link>Terms</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-medium text-lg'>SOCIAL LINKS</p>
                <ul className='flex text-lg gap-1'>
                    <li><Link><img className='w-7' src={require('../assets/social-png/linkedin-icon.png')} alt="" /></Link></li>
                    <li><Link><img className='w-7' src={require('../assets/social-png/insta-icon.png')} alt="" /></Link></li>
                    <li><Link><img className='w-7' src={require('../assets/social-png/youtube-icon.png')} alt="" /></Link></li>
                    <li><Link><img className='w-7' src={require('../assets/social-png/facebook-icon.png')} alt="" /></Link></li>
                    <li><Link><img className='w-7' src={require('../assets/social-png/twitter-icon.png')} alt="" /></Link></li>
                </ul>
            </div>
        </div>
        <hr/>
        <div className='copyright py-8 ms-6'>
            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © foodiebaba Ltd. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
