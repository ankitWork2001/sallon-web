import React from "react";
import { FaRegClock, FaRegCalendarAlt, FaEdit } from "react-icons/fa";

const VenderBookAppointment = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900">
          Book Appointment
        </h2>

        <button className="flex items-center gap-2 border border-fuchsia-500 text-fuchsia-600 px-4 py-2 rounded-md font-medium hover:bg-fuchsia-50 transition">
          <FaEdit size={14} /> Manage Availability
        </button>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Calendar Section */}
        <div className="bg-gradient-to-b from-pink-50 to-purple-50 rounded-2xl p-6 shadow-sm">
          {/* Month Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">January 2025</h3>
            <FaRegCalendarAlt className="text-fuchsia-600 text-lg" />
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-3 text-center text-gray-600 text-sm font-medium">
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
          </div>

          <div className="grid grid-cols-7 gap-3 text-center mt-3">
            {[...Array(31)].map((_, i) => (
              <div
                key={i}
                className="bg-white py-3 rounded-lg shadow-sm text-gray-800 hover:bg-fuchsia-50 cursor-pointer transition"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Time Slots Section */}
        <div>
          {/* Title */}
          <div className="flex items-center gap-2 mb-4">
            <FaRegClock className="text-fuchsia-600" />
            <h3 className="text-lg font-semibold text-gray-800">
              Available Time Slots
            </h3>
          </div>

          {/* Time Slots Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              "09:00 AM",
              "10:00 AM",
              "11:00 AM",
              "12:00 PM",
              "02:00 PM",
              "03:00 PM",
              "04:00 PM",
              "05:00 PM",
              "06:00 PM",
            ].map((time, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg py-3 text-center text-gray-700 font-medium hover:border-fuchsia-500 hover:text-fuchsia-600 transition cursor-pointer"
              >
                {time}
              </div>
            ))}
          </div>

          {/* Working Hours */}
          <div className="bg-indigo-50 px-4 py-3 rounded-md text-sm text-gray-700">
            <span className="font-semibold text-gray-900">Working Hours: </span>
            Mon–Sat: 9:00 AM – 7:00 PM | Sunday: Closed
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenderBookAppointment;
