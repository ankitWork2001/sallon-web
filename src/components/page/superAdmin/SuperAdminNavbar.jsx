import React, { useState } from 'react';
import { TiHome } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import SuperAdminSideBar from './SuperAdminSideBar';
import { LuCalendar, LuChartNoAxesColumnIncreasing, LuSettings, LuUser } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';

const SuperAdminNavbar = () => {

  const [open, setOpen] = useState(false);
  const [sideopen, setSideopen] = useState(false)
  const superadminData = JSON.parse(localStorage.getItem('superadmindata'))

  const handleLogout = () => {
    localStorage.removeItem('authtoken')
    localStorage.removeItem('superadmindata')
    localStorage.removeItem('userrole')
  }
  return (
    <div>
      <div style={{ background: 'var(--primary-gradient)' }} className=" font-medium w-full">
        {/* TOP BAR */}
        <div className="shadow-md p-3">
          <div className="flex justify-between items-center">

            {/* Left */}
            <div className="flex items-center justify-between w-full">
              <div className='flex gap-3 items-center'>

                <p><TiHome onClick={()=>setSideopen(true)} className="text-2xl" /></p>
                <p className="hidden sm:block">Super Admin Dashboard</p>
              </div>

              {/* Mobile menu button */}
              <button className="md:hidden" onClick={() => setOpen(!open)}>
                <GiHamburgerMenu size={24} />
              </button>
            </div>

            {/* Right */}
            <div className="hidden md:flex items-center gap-4">

              <div className="flex items-center gap-1 rounded-2xl p-1 border">
                <IoSearchOutline />
                <input
                  className="outline-0 bg-transparent"
                  type="search"
                  placeholder="Search..."
                />
              </div>

              <IoMdNotifications className="text-2xl cursor-pointer" />

              <img
                className="w-8 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="profile"
              />

              <p>{superadminData?.name || 'superAdmin'}</p>

              <button onClick={handleLogout} className="bg-[#dcb7b8] p-2 px-5 rounded-lg font-medium cursor-pointer">
                Logout
              </button>

            </div>

          </div>
        </div>

       {sideopen&& <div className='md:hidden absolute bg-white w-60 z-40 transition-all'>
        <div className='flex justify-end p-2'><p onClick={()=>setSideopen(false)} className='text-red-500 text-xl'>X</p></div>
           <nav className="space-y-3">
          <NavLink to="/superadmin/dashboard" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2 hover:bg-pink-50"
          }> Overview</NavLink>
          <NavLink to="/superadmin/managesalon" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2 hover:bg-pink-50"
          }> Manage Salon</NavLink>
          <NavLink to="/superadmin/managecategory" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2 hover:bg-pink-50"
          }>Manage Category</NavLink>
          <NavLink to="/superadmin/manageuser" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2 hover:bg-pink-50"
          }> Manage User </NavLink>

          <NavLink to="/superadmin/booking" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2"
          }><LuCalendar className="w-4 h-4" /> Bookings</NavLink>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50"><LuChartNoAxesColumnIncreasing className="w-4 h-4" /> Analytics</a>
          <NavLink to="/superadmin/profile" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2"
          }><LuUser className="w-4 h-4" /> Profile</NavLink>

          <div className="mt-15">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50"><LuSettings className="w-4 h-4" /> Settings</a>
          </div>


        </nav>
        </div>}

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white/10 p-3 space-y-3">

            {/* Search bar mobile */}
            <div className="flex items-center gap-2 border rounded-xl p-2 bg-white/20">
              <IoSearchOutline />
              <input
                className="outline-0 bg-transparent w-full"
                type="search"
                placeholder="Search..."
              />
            </div>

            <div className="flex items-center justify-between">
              <IoMdNotifications className="text-2xl cursor-pointer" />

              <img
                className="w-8 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="profile"
              />

              <p>Admin</p>
              <button className="bg-white/20 py-2 px-4 rounded-lg">
                Logout
              </button>
            </div>
          </div>
        )}

      </div>
      <div>
        {/* <SuperAdminSideBar/> */}
      </div>
    </div>
  );
}

export default SuperAdminNavbar;
