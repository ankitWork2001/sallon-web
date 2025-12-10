import React from 'react'
import { LuCalendar, LuChartNoAxesColumnIncreasing, LuHouse, LuPalette, LuScan, LuSettings, LuUser } from 'react-icons/lu'
import { NavLink } from 'react-router-dom'

const SuperAdminSideBar = () => {
  return (
    <div>
      <aside className="hidden lg:block md:block lg:col-span-3 bg-white rounded-xl p-3 shadow-sm w-50">
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
      </aside>
    </div>
  )
}

export default SuperAdminSideBar
