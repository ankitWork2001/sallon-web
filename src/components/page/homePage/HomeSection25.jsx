import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const HomeSection25 = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFF7F1] to-[#FFEDE2] mt-4   md:p-6">
      <div className="grid md:grid-cols-2 gap-5 items-center ">

        {/* Left Section */}
        <div data-aos="fade-left" className="bg-white px-4 p-2 md:h-30 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ">
          <div className='flex flex-wrap items-center justify-between p-1'>
            <h3 className="text-2xl font-bold text-[#5A2C1E]">Are You a Salon Owner?</h3>
           <Link to='/register'> <button className="bg-[#FFBC86] text-white font-medium p-1.5 cursor-pointer px-5  rounded-full shadow hover:bg-[#ffad6a] transition-all">
              Partner With Register
            </button></Link>
          </div>

          <p className="text-gray-600 mb-6">
            Join our platform and grow your salon business. Reach more customers effortlessly!
          </p>

        </div>

        {/* Right Section */}
        <div data-aos="fade-right" className="bg-white px-4 p-2  md:h-30  rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ">
          <div className='flex flex-wrap items-center justify-between p-1'>
            <h3 className="text-2xl font-bold text-[#5A2C1E]">Ready to Glow?</h3>
            <button className="bg-[#FFBC86] text-white px-5 font-medium p-1.5 cursor-pointer rounded-full shadow hover:bg-[#ffad6a] transition-all">
              Download App
            </button>
          </div>

          <p className="text-gray-600 mb-6">
            Book your beauty service today and experience the glow you deserve!      </p>

        </div>


      </div>
    </div>

  )
}

export default  memo(HomeSection25);
