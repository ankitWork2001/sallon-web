import React from 'react'

const SuperAdminPerformance = () => {
  return (
    <div>
      <div className="bg-green-100 p-4 rounded-xl shadow-md   mt-5">
        <p className="text-green-800 font-semibold text-xl">Top Performer</p>

        <div className="flex gap-3 items-center mt-3">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
            alt="profile"
          />
          <div>
            <p className="font-semibold text-gray-800 text-base">Priya Verma</p>
            <p className="text-gray-600 text-sm">SP -2025-002</p>
          </div>
        </div>

        <div className="mt-4 space-y-5">
          <div className="flex justify-between text-sm md:text-base">
            <p className="text-gray-700">Salons Registered</p>
            <p className="font-semibold text-gray-900">18</p>
          </div>

          <div className="flex justify-between text-sm md:text-base">
            <p className="text-gray-700">Subscriptions Sold</p>
            <p className="font-semibold text-gray-900">15</p>
          </div>

          <div className="flex justify-between text-sm md:text-base">
            <p className="text-gray-700">Commission Earned</p>
            <p className="font-semibold text-gray-900">₹ 82,500</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SuperAdminPerformance
