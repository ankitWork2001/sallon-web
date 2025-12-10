import React from 'react'
import { FaUserTie, FaUser } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';

const RoleRegister = () => {
    const navigate = useNavigate()

    const handaleNaviagetOwner = ()=>{
        navigate('/earn-with-us')
    }

    const handaleNaviagetindependentAdmin = ()=>{
        navigate('/independentAdmin')
    }
  return (
<div className="w-full min-h-screen flex justify-center bg-gray-50 py-10">
      <div className="w-[750px] bg-white p-10 rounded-xl shadow-md">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800">Choose Your Role</h1>
        <p className="text-gray-500 mt-2">
          Select how you'd like to join our platform
        </p>

        {/* Role Options */}
        <div className="space-y-5 mt-8">

          {/* Salon Owner */}
          <div onClick={handaleNaviagetOwner} className="flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 rounded-xl border cursor-pointer transition">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-700 text-2xl rounded-full">
                <FaUserTie />
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-800">Salon Owner</p>
                <p className="text-gray-500 text-sm">
                  Register your salon and manage bookings, staff, and services
                </p>
              </div>
            </div>
            <span className="text-xl font-bold text-blue-600">{">"}</span>
          </div>

          {/* Independent Professional */}
          <div onClick={handaleNaviagetindependentAdmin} className="flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 rounded-xl border cursor-pointer transition">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center bg-pink-100 text-pink-700 text-2xl rounded-full">
                <FaUser />
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-800">Independent Professional</p>
                <p className="text-gray-500 text-sm">
                  Freelance beautician/barber. Work independently and manage your schedule
                </p>
              </div>
            </div>
            <span className="text-xl font-bold text-pink-600">{">"}</span>
          </div>
        </div>

        {/* Why Register Section */}
        <div className="mt-10 bg-gray-50 p-6 rounded-xl border">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Register With Us?</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BiCheckCircle className="text-green-600 text-2xl" />
              <div>
                <p className="font-semibold">Easy Setup</p>
                <p className="text-gray-500 text-sm">Complete registration in just 3 steps</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <BiCheckCircle className="text-green-600 text-2xl" />
              <div>
                <p className="font-semibold">Instant Bookings</p>
                <p className="text-gray-500 text-sm">Start receiving customer bookings immediately</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <BiCheckCircle className="text-green-600 text-2xl" />
              <div>
                <p className="font-semibold">Secure & Verified</p>
                <p className="text-gray-500 text-sm">
                  All professionals are verified for quality assurance
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <BiCheckCircle className="text-green-600 text-2xl" />
              <div>
                <p className="font-semibold">Dedicated Support</p>
                <p className="text-gray-500 text-sm">24/7 customer support for all your needs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sign In Link */}
        <p className="text-center mt-8 text-gray-500">
          Already registered?
          <Link to='/login'>
          <button className="text-blue-600 font-semibold hover:underline"> Login</button></Link>
        </p>
      </div>
    </div>
  )
}

export default RoleRegister
