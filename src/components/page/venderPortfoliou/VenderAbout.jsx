import React from "react";
import { FaEdit, FaUserFriends, FaCalendarAlt, FaVenusMars } from "react-icons/fa";

const VenderAbout = () => {
  return (
    <div className="p-8 bg-white  font-sans border-t-2 border-b-2 border-blue-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900">About Us</h2>

        <button className="flex items-center gap-2 border border-fuchsia-500 text-fuchsia-600 px-4 py-2 rounded-md font-medium hover:bg-fuchsia-50 transition">
          <FaEdit size={14} /> Edit
        </button>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Content */}
        <div className="text-gray-700 leading-relaxed text-base">
          <p>
            Welcome to <span className="font-semibold">Glamour Studio</span>,
            where beauty meets expertise. We are dedicated to providing
            exceptional salon services in a relaxing and luxurious environment.
            Our team of skilled professionals is committed to helping you look
            and feel your absolute best. With years of experience and a passion
            for the latest trends, we offer personalized services tailored to
            your unique style and preferences.
          </p>
        </div>

        {/* Right Content (Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-gradient-to-b from-purple-50 to-pink-50 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2 text-fuchsia-600">
              <FaCalendarAlt size={18} />
              <h3 className="text-lg font-semibold text-gray-800">Since 2018</h3>
            </div>
            <p className="text-sm text-gray-500">Years of Experience</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-b from-pink-50 to-purple-50 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2 text-fuchsia-600">
              <FaUserFriends size={18} />
              <h3 className="text-lg font-semibold text-gray-800">15+ Team</h3>
            </div>
            <p className="text-sm text-gray-500">Expert Professionals</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-pink-50 to-orange-50 rounded-2xl p-5 shadow-sm sm:col-span-2 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2 text-fuchsia-600">
                <FaVenusMars size={18} />
                <h3 className="text-lg font-semibold text-gray-800">
                  Unisex Salon
                </h3>
              </div>
              <p className="text-sm text-gray-500">Services for Everyone</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1601042879364-f3947d3f9e59?auto=format&fit=crop&w=400&q=60"
              alt="Salon"
              className="w-40 h-24 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenderAbout;
