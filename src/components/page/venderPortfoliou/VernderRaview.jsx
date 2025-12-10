import React from 'react'
import { FaStar, FaRegStar, FaCommentDots } from "react-icons/fa";

const VernderRaview = () => {
  return (
    <div>
  <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Customer Reviews</h2>

        {/* Rating */}
        <div className="flex justify-center items-center gap-2 mb-2">
          <div className="flex text-yellow-400 text-xl">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
          </div>
          <p className="text-gray-800 font-semibold">4.9</p>
        </div>
        <p className="text-gray-500 text-sm mb-8">Based on 150+ reviews</p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Review 1 */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 shadow-sm text-left">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800">Priya Sharma</h3>
              <span className="text-xs text-gray-500">2 days ago</span>
            </div>
            <div className="flex text-yellow-400 mb-2 text-sm">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Amazing service! The staff is very professional and friendly. Highly recommend!
            </p>
            <button className="text-purple-600 font-medium text-sm hover:underline">
              Reply to review
            </button>
          </div>

          {/* Review 2 */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 shadow-sm text-left">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800">Rahul Verma</h3>
              <span className="text-xs text-gray-500">1 week ago</span>
            </div>
            <div className="flex text-yellow-400 mb-2 text-sm">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Best salon in town. Great ambiance and excellent haircut.
            </p>
            <button className="text-purple-600 font-medium text-sm hover:underline">
              Reply to review
            </button>
          </div>

          {/* Review 3 */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 shadow-sm text-left">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800">Sneha Patel</h3>
              <span className="text-xs text-gray-500">2 weeks ago</span>
            </div>
            <div className="flex text-yellow-400 mb-2 text-sm">
              <FaStar /> <FaStar /> <FaStar /> <FaRegStar /> <FaRegStar />
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Good experience overall. The bridal makeup was stunning.
            </p>
            <button className="text-purple-600 font-medium text-sm hover:underline">
              Reply to review
            </button>
          </div>
        </div>

        {/* Write a Review Box */}
        <div className="border border-purple-400 rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-purple-600 mb-3 text-3xl">
              <FaCommentDots />
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-1">
              Share Your Experience
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              We would love to hear from you!
            </p>
            <button className="border border-purple-500 text-purple-600 px-5 py-2 rounded-lg text-sm hover:bg-purple-50">
              Write a Review
            </button>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default VernderRaview
