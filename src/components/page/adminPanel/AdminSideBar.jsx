import React, { useState } from 'react'
import {
  LuCalendar,
  LuUser,
  LuSettings,
  LuScissors,
  LuChartNoAxesColumnIncreasing,
  LuPalette,
  LuScan,
  LuHouse
} from "react-icons/lu";
import { GrUserExpert } from "react-icons/gr";
import { FaBarsProgress } from "react-icons/fa6";



import { Link, NavLink } from 'react-router-dom';
const AdminSideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='relative'>
      <aside className="hidden lg:block md:block lg:col-span-3 bg-white rounded-xl p-6 shadow-sm">
        <nav className="space-y-2">
          <NavLink to="/admin/dashboard" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2"
          } >
            <LuHouse className="w-4 h-4" /> <span>Overview</span>
          </NavLink>
          <NavLink to="/admin/profile" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2"
          }><LuUser className="w-4 h-4" /> Profile</NavLink>
          <NavLink to="/admin/service" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2"
          }><LuScissors className="w-4 h-4" /> Services</NavLink>
          <NavLink to="/admin/specialists" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2"
          }><GrUserExpert className="w-4 h-4" /> Specialists </NavLink>
          <NavLink to="/admin/booking" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2"
          }><LuCalendar className="w-4 h-4" /> Bookings</NavLink>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50"><LuChartNoAxesColumnIncreasing className="w-4 h-4" /> Analytics</a>

          <div className="mt-6 text-xs text-gray-400 uppercase">AI Tools</div>
          <NavLink to="/admin/ai-poster" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2"
          }><LuPalette className="w-4 h-4" /> AI Poster Creator</NavLink>
          <NavLink to="/admin/ai-hairstyle" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2"
          }><LuScan className="w-4 h-4" /> AI Hairstyle Scanner</NavLink>

          <div className="mt-15">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50"><LuSettings className="w-4 h-4" /> Settings</a>
          </div>
        </nav>
      </aside>

      <div
        className="absolute top-1  z-30 text-white rounded p-1.5 md:hidden cursor-pointer"
        style={{ background: "var(--primary-gradient)" }}
        onClick={() => setOpen(true)}
      >
        <FaBarsProgress size={26} />
      </div>
      <aside
        className={`md:hidden fixed top-0 left-0 h-full w-64 overflow-scroll bg-white z-40 p-6 shadow-xl rounded-r-xl
  transform transition-transform duration-300 
  ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          ❌
        </div>

        <nav className="mt-10 space-y-2">
          <NavLink to="/admin/dashboard" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg flex items-center gap-2 font-medium"
              : "px-4 py-2 rounded-lg flex items-center gap-2 font-medium"
          }>
            <LuHouse className="w-4 h-4" />
            Overview
          </NavLink>

          <NavLink to="/admin/profile" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg flex items-center gap-2 font-medium"
              : "px-4 py-2 rounded-lg flex items-center gap-2 font-medium"
          }>
            <LuUser className="w-4 h-4" />
            Profile
          </NavLink>

          <NavLink to="/admin/service" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2"
          }><LuScissors className="w-4 h-4" /> Services</NavLink>
          <NavLink to="/admin/specialists" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2"
          }><GrUserExpert className="w-4 h-4" /> Specialists </NavLink>
          <NavLink to="/admin/booking" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2"
          }><LuCalendar className="w-4 h-4" /> Bookings</NavLink>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50"><LuChartNoAxesColumnIncreasing className="w-4 h-4" /> Analytics</a>

          <div className="mt-6 text-xs text-gray-400 uppercase">AI Tools</div>
          <NavLink to="/admin/ai-poster" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2"
          }><LuPalette className="w-4 h-4" /> AI Poster Creator</NavLink>
          <NavLink to="/admin/ai-hairstyle" className={({ isActive }) =>
            isActive
              ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              : "font-medium flex items-center gap-2 px-4 py-2"
          }><LuScan className="w-4 h-4" /> AI Hairstyle Scanner</NavLink>

          <div className="mt-15">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50"><LuSettings className="w-4 h-4" /> Settings</a>
          </div>
        </nav>
      </aside>


    </div>
  )
}

export default AdminSideBar
