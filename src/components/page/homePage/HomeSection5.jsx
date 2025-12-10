import React, { useEffect, memo, useState } from 'react'
import popularNearMe from '../../data'
import { FaClock, FaMapMarkerAlt, FaRupeeSign, FaStar } from 'react-icons/fa'

const HomeSection5 = () => {
  
  return (


 <div className='p-6'>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {popularNearMe.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-4 border border-gray-100"
          >
            {/* Image */}
            <div className="h-40 rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={item.imgage}
                alt={item.name}
              />
            </div>

            {/* Title + Rating */}
            <div className="flex justify-between items-center mt-3">
              <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
              <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
                <FaStar /> {item.rating}
              </div>
            </div>

            {/* Distance */}
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <FaMapMarkerAlt className="mr-1" /> {item.distance} away
            </div>

            {/* Services */}
            <div className="mt-3 text-sm text-gray-700 space-y-1">
              <div className="flex justify-between">
                <span>{item.category1.service}</span>
                <span className="flex items-center font-medium">
                  <FaRupeeSign className="text-xs mr-1" /> {item.category1.price}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{item.category2.service}</span>
                <span className="flex items-center font-medium">
                  <FaRupeeSign className="text-xs mr-1" /> {item.category2.price}

                </span>
              </div>
              <div className="flex justify-between">
                <span>{item.category3.service}</span>
                <span className="flex items-center font-medium">
                  <FaRupeeSign className="text-xs mr-1" /> {item.category3.price}
                </span>
              </div>
            </div>

            {/* Duration + See More */}
            <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <FaClock /> {item.duration}
              </span>
              <button className="text-indigo-600 font-medium hover:underline">
                See More
              </button>
            </div>
          </div>
        ))}

      </div>
 </div>


   
  )
}

export default memo(HomeSection5)
