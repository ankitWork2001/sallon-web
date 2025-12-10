import React from 'react'
import { FiGlobe } from 'react-icons/fi'
import { BsFillCameraFill } from "react-icons/bs";

const SuperAdminProfile = () => {
    const superadminData = JSON.parse(localStorage.getItem('superadmindata'))
  return (
    <div>
       <div className="flex items-center gap-4">
            <div className='relative'>
              <div style={{ background: "var(--primary-gradient)" }} className="h-20 w-20 rounded-full  flex items-center justify-center text-white text-2xl font-semibold">
                ES
              </div>
              <label htmlFor="camera"><BsFillCameraFill className="absolute text-2xl bottom-0 right-0 text-white bg-[var(--primary)] rounded-full p-1 cursor-pointer" /></label>
              <input className='hidden' type="file" id='camera' />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{superadminData?.name || "Elegant Salon & Spa"}</h2>
             
              <button className="flex items-center gap-1 text-blue-600 text-sm mt-1">
                <FiGlobe size={14} /> View Public Profile
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-8 text-sm">
            <div>
              <p className="text-gray-500">Owner Name</p>
              <p className="font-medium">{superadminData?.name || "Elegant Salon & Spa"}</p>
            </div>
            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium">{superadminData?.email || "contact@elegantsalon.com"}</p>
            </div>

            <div>
              <p className="text-gray-500">Phone</p>
              <p className="font-medium">{superadminData?.phone || "+1 (555) 123-4567"}</p>
            </div>
            <div>
              <p className="text-gray-500">Role</p>
              <p className="font-medium">{superadminData?.role || "role"}</p>
            </div>

          </div>
    </div>
  )
}

export default SuperAdminProfile
