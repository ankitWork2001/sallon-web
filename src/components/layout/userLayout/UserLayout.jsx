import React from 'react'
import Navbar from '../../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Foter from '../../foter/Foter'

const UserLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Foter/>
    </div>
  )
}

export default UserLayout
