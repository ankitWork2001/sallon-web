import React from 'react'
import { Link } from 'react-router-dom'

const NotAuthorized = () => {
  return (
  <div>
      <div className='h-[80vh] w-full flex justify-center items-center'>

     <div className='text-center'>
      <img className='h-70 w-full object-contain' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZ2yuDyzulaY8MP7tjc_DaIT3do7KK9ajT8JU6DQ_EBCuIDP5sE5Cgw4_ThJG1xMHyk6GzqH8o" alt="" />
       <p className='text-red-600 font-bold text-3xl'>You are not authorized to view this page.</p>
     <Link to='/login'><button style={{background:'var(--primary-gradient)'}} className='m-3 font-medium px-5 p-2 rounded-lg text-white cursor-pointer text-lg'>Please Login</button> </Link> 
     </div>
    </div>
  </div>
  )
}

export default NotAuthorized
