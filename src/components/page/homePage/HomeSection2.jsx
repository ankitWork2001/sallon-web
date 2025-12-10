import React, { memo, use, useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaStar, FaRupeeSign, FaClock } from "react-icons/fa";
import popularNearMe from '../../data';
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
const HomeSection2 = () => {

  useEffect(() => {
  AOS.init({ duration: 2000, once: true });
}, []);
  // const navigate = useNavigate()
  // const handledetails = (id) => {
  //   navigate(`/home/product/${id}`)
  // }

  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position => { 
  //       setLatitude(position.coords.latitude);
  //       setLongitude(position.coords.longitude);
  //     }));
  //   } else{
  //     console.log("geolocation not supported")
  //   }

  // },[])
  // console.log(latitude,longitude)

  //  useEffect(()=>{
  //     fetch('https://saloonbackend-mumt.onrender.com/api/user/get-nearby-salons?latitude=26.9054048&longitude=70.7462154')
  //     .then(res=>res.json())
  //     .then(data=>{
  //       setData(data)
  //     }).catch(err=>console.log(err))
  //   },[])
  return (
    <div data-aos="fade-down" className='p-6'>
      <div className='flex justify-between p-2'>
        <div><p>Popular Near Me</p></div>
        <div><p>View All </p></div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {popularNearMe.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all  border border-gray-100"
          >
            {/* Image */}
            <div className="h-40 rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={item.imgage}
                alt={item.name}
              />
            </div>

            <div className='p-2'>


            {/* Title + Rating */}
            <div className="flex justify-between items-center mt-1">
              <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
              <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
                <FaStar /> {item.rating}
              </div>
            </div>

            {/* Distance */}
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <FaMapMarkerAlt className="mr-1" /> {item.distance}
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

          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(HomeSection2)
