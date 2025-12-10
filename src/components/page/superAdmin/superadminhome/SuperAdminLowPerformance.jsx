import React from 'react'

const SuperAdminLowPerformance = () => {
    return (
      <div className="p-3 bg-[#FFE7E7] mt-5 rounded-xl">
  <p className="font-semibold text-red-700">Low Performance Alert</p>

  {/* Card 1 */}
  <div className="bg-white p-3 rounded-xl mt-3 shadow-sm flex justify-between items-center border border-red-100">
    <div>
      <p className="font-medium">Amit Patel</p>
      <p className="text-xs text-gray-500">9 salons</p>
    </div>

    <button className="border border-red-500 text-red-500 rounded-lg px-3 py-1 text-sm hover:bg-red-50 transition">
      Alert
    </button>
  </div>

  {/* Card 2 */}
  <div className="bg-white p-3 rounded-xl mt-3 shadow-sm flex justify-between items-center border border-red-100">
    <div>
      <p className="font-medium">Amit Patel</p>
      <p className="text-xs text-gray-500">9 salons</p>
    </div>

    <button className="border border-red-500 text-red-500 rounded-lg px-3 py-1 text-sm hover:bg-red-50 transition">
      Alert
    </button>
  </div>
</div>

    )
}

export default SuperAdminLowPerformance
