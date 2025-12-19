import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const Default = () => {
  return (
    <div>
      <div className='flex justify-center items-center'>
        <img className='w-auto' src="https://img.freepik.com/premium-vector/404-errorpage-found-landing-page-businessman-use-megaphone-running-programmer-with-wrench_985641-5768.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
      </div>
      
      <div className='flex justify-center items-center'>
        <Link to='/'>
        <button className='bg-[#fa5fce] p-3 text-white cursor-pointer rounded-lg px-6 font-medium text-lg'>Go to Home</button>  </Link>

      </div>
  </div>
  )
}

export default memo(Default)
