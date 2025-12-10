import React from 'react'

const MapAndLocation = () => {
  return (
    <div className='p-2'>
      <p className='font-medium text-2xl mt-3'>Location & Contact</p>
      <div className='bg-gray-300 w-full h-80 flex justify-center items-center mt-3'>
        <p>Interactive Map View</p>
      </div>
      <p className='font-medium text-lg pt-2'>Address</p>
      <p className='text-sm'>123 Beauty Street, Beverly Hills, CA 90210</p>
      {/* <p className='font-medium text-lg pt-2'>Phone</p>
      <p className='text-sm'>(555) 123-4567</p> */}
      <div className='p-2 flex gap-4 items-center'>
        <button className='bg-gray-600 text-white px-4 p-2 rounded-lg'>Get Directions</button>
        <button className='border border-gray-600 px-4 p-2 rounded-lg ml-2'>Call Salon</button>
      </div>
    </div>
  )
}

export default MapAndLocation
