import React from 'react'

const OtpVerify = () => {
  return (
    <div>
      
<div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

    {/* Heading */}
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">OTP Verification</h2>
      <p className="text-sm text-gray-500 mt-1">
        Enter the 4-digit OTP sent to your email
      </p>
    </div>

    <form className="space-y-6">
      {/* OTP Inputs */}
      <div className="flex justify-center gap-4">
        {[1, 2, 3, 4].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            required
            className="w-14 h-14 text-center text-lg font-semibold
            rounded-lg border border-gray-300
            shadow-sm transition
            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
            outline-none"
          />
        ))}
      </div>

      {/* Resend OTP */}
      <div className="text-center text-sm text-gray-500">
        Didn’t receive OTP?{" "}
        <span className="text-indigo-600 font-medium cursor-pointer hover:underline">
          Resend
        </span>
      </div>

      {/* Verify Button */}
      <button
        type="submit"
        className="w-full py-3 rounded-lg text-white font-semibold
        bg-gradient-to-r from-indigo-500 to-purple-600
        hover:from-indigo-600 hover:to-purple-700
        transition duration-300 shadow-md cursor-pointer"
      >
        Verify OTP
      </button>
    </form>
  </div>
</div>


    </div>
  )
}

export default OtpVerify
