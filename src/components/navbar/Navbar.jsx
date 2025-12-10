import React, { useEffect, useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { TbXboxX } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState('location')

  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
      );

      const data = await res.json();
      setLocation(data.city || data.locality || data.principalSubdivision);

    });
  }, [])

  const navigate = useNavigate();

  const goToServices = () => {
    navigate("/#services"); // navigate to home with hash

    setTimeout(() => {
      const section = document.getElementById("services");
      section?.scrollIntoView({ behavior: "smooth" });
    }, 100); // little delay for page load
  };

  return (
    <div style={{ background: 'var(--primary-gradient)' }} className='sticky top-0 z-50  text-gray-900  font-medium'>

      {/* Main Navbar */}
      <nav className="shadow-md md:px-6 px-3 py-2 flex justify-between items-center">
        {/* Logo */}
        <div >
          <img className="w-15 rounded-full" src="/logo.jpeg" alt="Logo" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden-mobile md:flex lg:space-x-8 md:space-x-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer hover:text-[var(--primary)] transition ${isActive ? " font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>

          <li onClick={goToServices}
            className=' cursor-pointer hover:text-[var(--primary)] transition'
          >
            Services
          </li>


          <NavLink
            to="/register"
            className={({ isActive }) =>
              `cursor-pointer hover:text-[var(--primary)] transition ${isActive ? "text-[#B58152] font-semibold" : ""
              }`
            }
          >
            <button className='px-3 rounded-2xl p-1  cursor-pointer bg-white'>Partner With Register</button>
          </NavLink>

          {/* <div className='border rounded-2xl px-2 p-0.5 flex gap-2 items-center '>
            <IoSearch />
            <input className='outline-0 w-full' type="text" name="" id="search" placeholder='Search salons, services, or areas...' />
          </div> */}
        </ul>

        <div className='flex gap-2 items-center '>
          <div className='border border-gray-600 rounded-2xl px-2 md:p-0.5 flex gap-2  md:w-50 items-center ms-1  me-2'>
            <IoSearch className='text-gray-600 md:text-xl' />
            <input className='outline-0 w-full' type="search" name="" id="" placeholder={location} />
          </div>

          <div className='border border-gray-600 rounded-2xl px-2 md:p-0.5 flex gap-2  md:w-50 items-center  me-2'>
            <IoSearch className='text-gray-600 md:text-xl' />
            <input className='outline-0 w-full' type="search" name="" id="" placeholder='Search salons, services' />
          </div>
        </div>
        {/* Desktop button */}
        <div className="hidden-mobile md:flex items-center ">

          <NavLink to="/profile">
            <button className=" px-5 rounded-xl font-medium cursor-pointer ">
              <FaUserCircle className="text-3xl" />
            </button>
          </NavLink>
          <button style={{ background: 'linear-gradient(90deg, #ffe1e8, #f5d0d8, #eed9f7)' }} className=' rounded-lg shadow-md  px-5 cursor-pointer p-1.5 '>Get App</button>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="desltop-hidden text-3xl font-medium"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </div>

        {/* Mobile Menu (Sliding from Right) */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-[#F7F7F7] shadow-lg transform transition-transform duration-300 ease-in-out desltop-hidden z-50 ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col items-center mt-2 space-y-5 text-[#1F3C5F] font-medium text-lg p-2">
            <p onClick={() => setOpen(false)} className="text-4xl flex justify-end w-full p-3 text-red-600"><TbXboxX /></p>
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `w-full text-center py-2 hover:text-[#B58152] transition ${isActive ? "bg-[#B58152] text-white rounded-md" : ""
                }`
              }
            >
              Home
            </NavLink>
            <li onClick={() => { goToServices(), setOpen(false) }}
              className="cursor-pointer list-none hover:text-[var(--primary)] transition"
            >
              Services
            </li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `cursor-pointer hover:text-[var(--primary)] transition ${isActive ? "text-[#B58152] font-semibold" : ""
                }`
              }
            >
              <button className='px-3 rounded  cursor-pointer'>Partner With Register</button>
            </NavLink>

            <div className="flex justify-evenly">
              <NavLink to="/profile">
                <button className=" px-5 py-2 rounded-xl font-medium cursor-pointer ">
                  <FaUserCircle className="text-2xl" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
