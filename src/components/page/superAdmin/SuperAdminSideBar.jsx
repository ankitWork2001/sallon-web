import React, { memo } from 'react'
import {
  LuCalendar,
  LuChartNoAxesColumnIncreasing,
  LuHouse,
  LuPalette,
  LuScan,
  LuSettings,
  LuUser,
  LuStore,
  LuUsers,
  LuMapPin
} from 'react-icons/lu'

import { NavLink } from 'react-router-dom'

const SuperAdminSideBar = () => {
  return (
    <div>
      <aside className="hidden lg:block md:block lg:col-span-3 bg-white rounded-xl p-3 shadow-sm w-60">
        <nav className="space-y-3">

          <NavLink
            to="/superadmin/dashboard"
            className={({ isActive }) =>
              isActive
                ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                : "font-medium flex items-center gap-2 px-4 py-2 hover:bg-pink-50"
            }
          >
            <LuHouse className="w-4 h-4" />
            <span>Overview</span>
          </NavLink>

          <NavLink
            to="/superadmin/managesalon"
            className={({ isActive }) =>
              isActive
                ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                : "font-medium flex items-center gap-2 px-4 py-2 hover:bg-pink-50"
            }
          >
            <LuStore className="w-4 h-4" />
            <span>Manage Salon</span>
          </NavLink>

          <NavLink
            to="/superadmin/managecategory"
            className={({ isActive }) =>
              isActive
                ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                : "font-medium flex items-center gap-2 px-4 py-2 hover:bg-pink-50"
            }
          >
            <LuPalette className="w-4 h-4" />
            <span>Manage Category</span>
          </NavLink>

          <NavLink
            to="/superadmin/manageuser"
            className={({ isActive }) =>
              isActive
                ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                : "font-medium flex items-center gap-2 px-4 py-2 hover:bg-pink-50"
            }
          >
            <LuUsers className="w-4 h-4" />
            <span>Manage User</span>
          </NavLink>

          <NavLink
            to="/superadmin/managestate-and-city"
            className={({ isActive }) =>
              isActive
                ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                : "font-medium flex items-center gap-2 px-4 py-2 hover:bg-pink-50"
            }
          >
            <LuMapPin className="w-4 h-4" />
            <span>Manage City & State</span>
          </NavLink>

          <a className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium hover:bg-pink-50">
            <LuChartNoAxesColumnIncreasing className="w-4 h-4" />
            <span>Analytics</span>
          </a>

          <NavLink
            to="/superadmin/profile"
            className={({ isActive }) =>
              isActive
                ? "bg-pink-50 text-[var(--primary)] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                : "font-medium flex items-center gap-2 px-4 py-2 hover:bg-pink-50"
            }
          >
            <LuUser className="w-4 h-4" />
            <span>Profile</span>
          </NavLink>

          <div className="mt-10">
            <a className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium hover:bg-pink-50">
              <LuSettings className="w-4 h-4" />
              <span>Settings</span>
            </a>
          </div>

        </nav>
      </aside>
    </div>
  )
}

export default memo(SuperAdminSideBar)
