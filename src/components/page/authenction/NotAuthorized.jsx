import React from 'react'
import { Link } from 'react-router-dom'

const NotAuthorized = () => {
  return (
  <div>
      <div className='h-100 w-full flex justify-center items-center'>
     <div className='text-center'>
       <p className='text-red-600 font-bold text-3xl'>You are not authorized to view this page.</p>
     <Link to='/login'><button style={{background:'var(--primary-gradient)'}} className='m-3 font-medium px-5 p-2 rounded-lg text-white cursor-pointer text-lg'>Please Login</button> </Link> 
     </div>
    </div>
  </div>
  )
}

export default NotAuthorized
