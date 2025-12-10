import React from "react";
import { FaMapMarkerAlt, FaClock, FaWhatsapp, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";

const VenderVisit = () => {
  return (
    <div className="bg-white py-10 px-6 md:px-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Visit Us</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left - Map */}
        <div className="rounded-xl overflow-hidden shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80"
            alt="Map"
            className="w-full h-[350px] object-cover"
          />
        </div>

        {/* Right - Info Section */}
        <div className="space-y-6">
          {/* Edit Button */}
          <div className="flex justify-end">
            <button className="flex items-center gap-2 text-sm border border-purple-500 text-purple-600 px-3 py-1.5 rounded-lg hover:bg-purple-50 transition">
              ✏️ Edit Location
            </button>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
            <div className="bg-purple-100 p-3 rounded-lg">
              <FaMapMarkerAlt className="text-purple-600 text-xl" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Address</h3>
              <p className="text-gray-600 text-sm">
                123 Fashion Street, MG Road, Bangalore - 560001
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-3 bg-pink-50 p-4 rounded-lg">
            <div className="bg-pink-100 p-3 rounded-lg">
              <FaClock className="text-pink-600 text-xl" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Working Hours</h3>
              <p className="text-gray-600 text-sm">
                Monday - Saturday: 9:00 AM - 7:00 PM <br />
                Sunday: Closed
              </p>
              <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                Open Now
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-r from-green-400 to-green-500 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition">
                <FaWhatsapp /> WhatsApp
              </button>
              <button className="flex-1 bg-gradient-to-r from-pink-400 to-pink-500 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition">
                <FaPhoneAlt /> Call Now
              </button>
            </div>
            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition">
              <FaLocationArrow /> Get Directions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenderVisit;
