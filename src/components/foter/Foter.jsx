import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import {Link} from "react-router-dom"

const Foter = () => {
  return (
    <div className='mt-6 p-6' style={{ background: "var(--primary-gradient)" }}>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-3 text-black '>
        <div className='space-y-1.5'>
          <div>
            <img className="w-15 rounded-full" src="/logo.jpeg" alt="Logo" />
          </div>            <p className='pt-2'>Book your next beauty appointment </p>
          <p>with the best salons in your area.</p>
          <p>service.</p>
        </div>
        <div className='space-y-1.5'>
          <p className='font-semibold text-2xl '>Quick Links</p>
          <Link to='/about'>
          <p className='pt-2'>About Us</p>
          </Link>
          <p>Contact</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
        <div className='space-y-1.5 list-none'>
          <p className='font-semibold text-2xl '>Services</p>
          <li className='pt-2'>Haircut & Styling</li>
          <li>Nail Care</li>
          <li>Skin Care</li>
          <li>Massage</li>
        </div>
        <div className='space-y-1.5 list-none'>
          <p className='font-semibold text-2xl '>Legal</p>
          <p className='pt-2'>Privacy Policy</p>
          <li>Terms of Service</li>
          <li>Cookie Policy</li>
        </div>
      </div>
      <hr className='mt-5' />
      <div className='grid md:grid-cols-2   mt-2 p-4'>
        <p>© 2025 Glamour Studio. All rights reserved.</p>
        <p className='pt-1.5 md:text-end'>Powered by VaishaliTech</p>
      </div>
    </div>
  )
}

export default Foter
