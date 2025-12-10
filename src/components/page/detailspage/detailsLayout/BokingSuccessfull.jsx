import React from 'react'
import { FiCalendar } from "react-icons/fi";
import { MdOutlineShare } from "react-icons/md";
import { CiStar } from "react-icons/ci";

const BokingSuccessfull = () => {
    const servicesData = [
        {
            title: "Women's Haircut",
            date:"Mon, Oct 10",
            time:"10:00 AM",
            price:"₹499",
        },
        {
            title: "Balayage",
            date:"Mon, Oct 10",
            time:"11:00 AM",
            price:"₹499",
        },
        {
            title: "Blowout",
            date:"Mon, Oct 10",
            time:"12:00 PM",
            price:"₹499",
        }
    ]
  return (
    <div className='p-3 mt-4'>
      <div style={{background:"var(--primary-gradient)"}} className='flex justify-between items-center p-2  text-white rounded-t-3xl'>
      <div>
          <p>Booking ID</p>
        <p>GLO-123456</p>
      </div>
      <div className='flex gap-4 items-center'>
        <button className='bg-white rounded-lg px-3 p-2 text-black flex items-center gap-2'><FiCalendar /> Add to Calendar</button>
        <button className='bg-white rounded-lg px-3 p-2 text-black flex items-center gap-2'><MdOutlineShare /> Share</button>
      </div>
      </div>

      <div className='flex justify-between p-2'>
        <div className='flex gap-2 items-center'>
            <img className='w-13 h-13' src="https://img.icons8.com/nolan/1200/user-default.jpg" alt="" />
            <div>
                <p>Elegance Beauty Lounge</p>
                <p>123 Beauty Street, Beverly Hills, CA 90210</p>
            </div>
        </div>
        <div>
            <p>(555) 123-4567</p>
        </div>
      </div>

<div>
                <p className='font-medium text-2xl p-2 mt-4'>Booked Services</p>

    {servicesData.map((service, index) => 
      <div key={index} className='shadow p-3 flex justify-between items-center mt-3'>
                            <div>
                                <p className='font-medium'>{service.title}</p>
                                <p className='text-gray-700 text-sm'>{service.date}</p>
                                <p className='text-gray-700 text-sm'>{service.time}</p>
                            </div>
                            <p>{service.price}</p>
                        </div>  
                    )}
</div>
<div className='flex justify-between items-center p-2 mt-5'>
    <div>
        <p className='font-medium'>Total Amount</p>
        <p className='text-gray-700 text-sm'>₹1497</p>
    </div>
    <div>
        <p className='font-medium'>Payment Method</p>
        <p className='text-gray-700 text-sm'>Credit Card</p>
    </div>
</div>

<p className='font-medium text-xl p-3 mt-2'>Location</p>
  <div className='bg-gray-300 w-full h-80 flex justify-center items-center mt-3'>
        <p>Interactive Map View</p>
      </div>

      <div style={{background:"var(--primary-gradient)"}} className='flex justify-between items-center p-2  text-white rounded-b-3xl'>
      <div>
          <p>Book Another Service</p>
      </div>
      <div className='flex gap-4 items-center'>
        <button className='bg-white rounded-lg px-3 p-2 text-black flex items-center gap-2'><CiStar /> Rate This Salon</button>
       
      </div>
      </div>
    </div>
  )
}

export default BokingSuccessfull
