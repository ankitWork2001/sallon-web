import React, { useEffect } from 'react'
import { FiGlobe, FiClock } from "react-icons/fi";
import { BsFillCameraFill } from "react-icons/bs";

const AdminProfile = () => {
  const userdata = JSON.parse(localStorage.getItem("admindata"))||{};
  console.log(userdata)
  return (
    <div>
      <div className="bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">

          {/* Header */}
          <div className="flex items-center gap-4">
            <div className='relative'>
              <div style={{ background: "var(--primary-gradient)" }} className="h-20 w-20 rounded-full  flex items-center justify-center text-white text-2xl font-semibold">
                ES
              </div>
              <label htmlFor="camera"><BsFillCameraFill className="absolute text-2xl bottom-0 right-0 text-white bg-[var(--primary)] rounded-full p-1 cursor-pointer" /></label>
              <input className='hidden' type="file" id='camera' />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{userdata?.name || "Elegant Salon & Spa"}</h2>
              <p className="text-sm text-gray-500">{userdata?.salon?.owner || "Owner: John Smith"}</p>
              <button className="flex items-center gap-1 text-blue-600 text-sm mt-1">
                <FiGlobe size={14} /> View Public Profile
              </button>
            </div>
          </div>

          {/* Info Section */}
          <div className="grid grid-cols-2 gap-6 mt-8 text-sm">
            <div>
              <p className="text-gray-500">Business Name</p>
              <p className="font-medium">{userdata?.name || "Elegant Salon & Spa"}</p>
            </div>

            <div>
              <p className="text-gray-500">Owner Name</p>
              <p className="font-medium">{userdata?.salon?.owner || "Owner: John Smith"}</p>
            </div>

            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium">{userdata?.email || "contact@elegantsalon.com"}</p>
            </div>

            <div>
              <p className="text-gray-500">Phone</p>
              <p className="font-medium">{userdata?.phone || "+1 (555) 123-4567"}</p>
            </div>

            <div className="col-span-2">
              <p className="text-gray-500">Address</p>
              <p className="font-medium">{userdata?.salon?.location?.address || "123 Main Street, New York, NY 10001"}</p>
              <p className="font-medium">{userdata?.salon?.location?.city || "city"}</p>
              <p className="font-medium">{userdata?.salon?.location?.state || "state"}</p>
              <p className="font-medium">{userdata?.salon?.location?.pincode || "123456"}</p>
            </div>

            <div className="col-span-2">
              <p className="text-gray-500">Description</p>
              <p className="font-medium">
                {userdata?.salon?.about || "Premium salon offering haircuts, styling, coloring, and spa services."}
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-10 border-t pt-6">
            <div className="flex items-center gap-2 mb-4">
              <FiClock className="text-gray-700" />
              <h3 className="text-lg font-medium">Business Hours</h3>
            </div>

            <div className="grid grid-cols-2 text-sm gap-y-3">
              <p className="text-gray-600">monday</p>
              <p className="font-medium">{userdata?.salon?.openingHours?.open || "9:00 AM"} - {userdata?.salon?.openingHours?.close || "7:00 PM"}</p>

              <p className="text-gray-600">tuesday</p>
              <p className="font-medium">9:00 AM - 7:00 PM</p>

              <p className="text-gray-600">wednesday</p>
              <p className="font-medium">9:00 AM - 7:00 PM</p>

              <p className="text-gray-600">thursday</p>
              <p className="font-medium">9:00 AM - 7:00 PM</p>

              <p className="text-gray-600">friday</p>
              <p className="font-medium">9:00 AM - 8:00 PM</p>

              <p className="text-gray-600">saturday</p>
              <p className="font-medium">10:00 AM - 6:00 PM</p>

              <p className="text-gray-600">sunday</p>
              <p className="font-medium">Closed</p>
            </div>
            <div className='flex justify-end p-3'>
              <button className="bg-[var(--primary)] cursor-pointer text-white px-4 py-2 rounded">Save Changes</button>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default AdminProfile
