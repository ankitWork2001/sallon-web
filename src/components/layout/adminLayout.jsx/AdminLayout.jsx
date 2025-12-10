import React from 'react'
import { Outlet } from 'react-router-dom'
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import AdminSideBar from '../../page/adminPanel/AdminSideBar';
import { useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate()
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  const role = localStorage.getItem("userrole");
  const handleLogout = () => {
    localStorage.removeItem("authtoken");
    localStorage.removeItem("userrole");
    localStorage.removeItem("userdata");
    navigate('/login')
  }
  return (
    <div>
      <div>
        <header className="bg-gradient-to-r from-pink-600 to-pink-400 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-md bg-white/10 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-lg sm:text-2xl font-semibold">SalonPro</h1>
            </div>

            <div className="flex items-center gap-3">
              <button className="relative bg-white/20 p-2 rounded-full">
                <FaBell className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <div className="text-sm font-medium">{userdata?.name || "Elegant Salon"}</div>
                  <div className="text-xs opacity-80">Premium Plan</div>
                </div>
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  <FaUser className="w-5 h-5 text-pink-600" />
                </div>
              </div>
              {role && <button onClick={handleLogout} className='bg-white/20 p-2 px-5 rounded-lg font-medium cursor-pointer'>Logout</button>}

            </div>
          </div>
        </header>

        <div className='flex gap-3 w-full'>
          <AdminSideBar />
          <div className='w-full h-135 overflow-y-scroll mt-5 md:mt-2'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
