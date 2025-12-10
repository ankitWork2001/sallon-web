import React, { useEffect, useState } from "react";
import { FaStar, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { BsClock } from "react-icons/bs";

const VenderService = () => {
  const [dataArray, setDataArray] = useState([{
    title: "Premium Haircut",
    start: true,
    discription: "Expert styling with consultation",
    time: 45,
    price: 450
  }])


  return (
    <div className="p-8 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-extrabold text-gray-900">
          Services & Pricing
        </h2>
        <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:opacity-90 transition">
          <FaPlus size={14} /> Add Service
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-6 mb-8 text-sm font-medium">
        <button className="bg-black text-white px-5 py-2 rounded-full">Haircut</button>
        <button className="text-gray-700 hover:text-black">Hair Spa</button>
        <button className="text-gray-700 hover:text-black">Makeup</button>
        <button className="text-gray-700 hover:text-black">Skincare</button>
        <button className="text-gray-700 hover:text-black">Bridal</button>
      </div>

      {/* Service Cards */}
      <div className="flex gap-6 flex-wrap">
        {/* Card 1 */}
        {
          dataArray.length > 0 && dataArray.map(p => <div key={p.title} className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 w-72 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              {p.start && <span className="flex items-center gap-1 bg-orange-100 text-orange-600 text-xs font-medium px-2 py-1 rounded-full">
                <FaStar size={10} /> Featured
              </span>}
            </div>
            <p className="text-sm text-gray-500 mb-3">
              {p.discription}
            </p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-fuchsia-600 font-bold text-lg">₹{p.price}</span>
              <div className="flex items-center gap-1 text-gray-500 text-sm">
                <BsClock /> {p.time} min
              </div>
            </div>
            <div className="flex gap-4 text-gray-500">
              <FaEdit className="cursor-pointer hover:text-fuchsia-600" />
              <FaTrash className="cursor-pointer hover:text-fuchsia-600" />
            </div>
          </div>)
        }

        {/* Card 2 */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 w-72 hover:shadow-md transition">
          <h3 className="font-semibold text-gray-900 mb-2">Kids Haircut</h3>
          <p className="text-sm text-gray-500 mb-3">
            Fun and friendly haircuts for children
          </p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-fuchsia-600 font-bold text-lg">₹300</span>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <BsClock /> 30 min
            </div>
          </div>
          <div className="flex gap-4 text-gray-500">
            <FaEdit className="cursor-pointer hover:text-fuchsia-600" />
            <FaTrash className="cursor-pointer hover:text-fuchsia-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenderService;
