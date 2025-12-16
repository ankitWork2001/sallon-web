import React from 'react'
import { useOutletContext } from 'react-router-dom'

const ServiceDetails = () => {
  const {data} = useOutletContext()
  console.log(data)
  return (
    <div>
      <p className='font-medium text-2xl mt-3'>Services & Pricing</p>

      <select name="" id="" className='w-full border p-2 rounded-xl outline-0 shadow mt-2'>
        <option value="">Individual Services</option>
        <option value="">Individual Services</option>
      </select>
      <select name="" id="" className='w-full border p-2 rounded-xl outline-0 shadow mt-2'>
        <option value="">Combo Packages</option>
        <option value="">Combo Packages</option>
      </select>
      <select name="" id="" className='w-full border p-2 rounded-xl outline-0 shadow mt-2'>
        <option value="">Home Services</option>
        <option value="">Home Services</option>
      </select>
    </div>
  )
}

export default ServiceDetails
