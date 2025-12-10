import React from "react";
import { FaChartLine, FaUserFriends, FaStar, FaRedoAlt } from "react-icons/fa";

const stats = [
  {
    icon: <FaChartLine className="text-blue-500 text-2xl" />,
    value: "1,250+",
    label: "Total Bookings",
  },
  {
    icon: <FaUserFriends className="text-pink-500 text-2xl" />,
    value: "850",
    label: "Monthly Visitors",
  },
  {
    icon: <FaStar className="text-orange-400 text-2xl" />,
    value: "4.9",
    label: "Average Rating",
  },
  {
    icon: <FaRedoAlt className="text-green-500 text-2xl" />,
    value: "78%",
    label: "Returning Clients",
  },
];

const VenderPerformace = () => {
  return (
    <div className="bg-gray-50  flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Our Performance
          </h2>
          <div className="flex items-center space-x-2 text-gray-500 cursor-pointer">
            <span className="text-sm font-medium">👁 Toggle Visibility</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center"
            >
              <div className="mb-3">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VenderPerformace;
