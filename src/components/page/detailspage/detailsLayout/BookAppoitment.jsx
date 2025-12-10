import React from 'react'
import { FaClock, FaRupeeSign, FaCalendarAlt } from "react-icons/fa";
import {Link} from 'react-router-dom'
const BookAppoitment = () => {
  return (
    <div className='p-3'>
      <div>
        <p className='text-2xl font-medium'>Book Your Appointment</p>
      </div>
       <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto flex gap-6">

        {/* LEFT SIDE - Selected Services */}
        <div className="w-1/3 bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-gray-700">Selected Services</h2>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              Use same date/time for all
              <div className="w-10 h-5 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Service Card */}
          {[
            { name: "Women's Haircut", time: "60 min", price: "₹499" },
            { name: "Balayage", time: "120 min", price: "₹499" },
            { name: "Blowout", time: "45 min", price: "₹499" },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 mb-4"
            >
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="font-medium text-gray-700">{item.name}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                    <FaClock size={12} /> {item.time}
                  </div>
                </div>

                <p className="font-semibold text-gray-700">{item.price}</p>
              </div>

              {/* Select Button */}
              <button className="w-full border border-gray-200 rounded-lg py-3 text-gray-500 flex items-center justify-center gap-2 text-sm">
                <FaCalendarAlt size={14} />
                Select Date & Time
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - Calendar + Time Slots */}
        <div className="w-2/3 bg-white rounded-xl shadow p-6">
          <div className="flex justify-between mb-4">
            <h2 className="font-semibold text-gray-700">Select Date & Time</h2>
            <div className="flex gap-3 text-xl text-gray-400">
              <button>{"<"}</button>
              <button>{">"}</button>
            </div>
          </div>

          <h3 className="text-gray-600 mb-4">November 2025</h3>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-4 text-center text-gray-500 text-sm mb-6">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d, i) => (
              <p key={i} className="font-medium text-gray-600">{d}</p>
            ))}

            {Array(30)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="py-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded"
                >
                  {i + 1}
                </div>
              ))}
          </div>

          {/* Time Slots */}
          <h3 className="text-gray-700 font-medium mb-2">Available Time Slots</h3>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM",
              "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
              "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM",
              "4:30 PM", "5:00 PM", "5:30 PM",
            ].map((slot, i) => (
              <div
                key={i}
                className={`py-3 text-center rounded-lg border ${
                  i % 3 === 0
                    ? "bg-gray-200"
                    : i % 3 === 1
                    ? "bg-gray-100"
                    : "bg-gray-300 text-white"
                }`}
              >
                {slot}
              </div>
            ))}
          </div>

       
          <div className="flex items-center gap-4 text-gray-500 text-sm mt-4">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-200 rounded"></div> Available
            </span>
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-100 rounded"></div> Few Left
            </span>
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-300 rounded"></div> Unavailable
            </span>
          </div>
        </div>
      </div>

      <div className=" bg-white shadow p-4 px-8 flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <img
            src="https://i.ibb.co/3pF6n4y/salon.jpg"
            alt="Salon"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h3 className="font-medium text-gray-700">Elegance Beauty Lounge</h3>
            <p className="text-gray-500 text-sm">3 services selected</p>
          </div>
        </div>

        <div className="flex gap-10 text-sm text-gray-600">
          <p>Subtotal <span className="font-semibold text-gray-700 ml-2">$290</span></p>
          <p>Taxes <span className="font-semibold text-gray-700 ml-2">$29.00</span></p>
          <p>Total <span className="font-semibold text-gray-800 ml-2">$319.00</span></p>
        </div>

          <Link to="/review">
        <button className="bg-gray-800 text-white py-3 px-6 rounded-lg">
          Continue to Review
        </button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default BookAppoitment
