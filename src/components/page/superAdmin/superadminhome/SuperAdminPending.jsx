import React from 'react'

const SuperAdminPending = () => {
    return (
      <div className="bg-[#FFF7D6] p-4 rounded-xl mt-4 shadow-sm w-full mx-auto">
  <p className="text-yellow-800 font-semibold  text-xl">Pending Commission</p>
  <p className="text-gray-600 text-lg">Awaiting approval</p>

  <div className="mt-4 space-y-5">

    <div className="flex justify-between items-start">
      <p className="text-gray-800 font-medium leading-tight">
        Rahul Sharma <br />
        <span className="text-xs text-gray-600">SP-2025-001</span>
      </p>
      <p className="font-semibold text-gray-900">₹ 45,000</p>
    </div>

    <div className="flex justify-between items-start">
      <p className="text-gray-800 font-medium leading-tight">
        Priya Verma <br />
        <span className="text-xs text-gray-600">SP-2025-002</span>
      </p>
      <p className="font-semibold text-gray-900">₹ 82,500</p>
    </div>

    <div className="flex justify-between items-start">
      <p className="text-gray-800 font-medium leading-tight">
        Amit Patel <br />
        <span className="text-xs text-gray-600">SP-2025-003</span>
      </p>
      <p className="font-semibold text-gray-900">₹ 38,500</p>
    </div>

  </div>
</div>

    )
}

export default SuperAdminPending
