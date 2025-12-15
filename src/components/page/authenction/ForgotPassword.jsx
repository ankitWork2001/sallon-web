import React from 'react'

const ForgotPassword = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

    {/* Heading */}
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">Verify your Email</h2>
      <p className="text-sm text-gray-500 mt-1">
        We will send an OTP to your email address
      </p>
    </div>

    <form className="space-y-5">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
          className="w-full rounded-lg border border-gray-300 bg-[var(--secondary)]
          px-4 py-3 text-sm shadow-sm transition
          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-lg text-white font-semibold
        bg-gradient-to-r from-indigo-500 to-purple-600
        hover:from-indigo-600 hover:to-purple-700
        transition duration-300 shadow-md cursor-pointer"
      >
        Send OTP
      </button>
    </form>
  </div>
  
</div>

    )
}

export default ForgotPassword
