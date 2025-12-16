import React, { useRef, useState } from "react";

const OtpVerify = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;

    // Only numbers allowed
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const email = localStorage.getItem("useremail")


  // Verify OTP API
  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalOtp = otp.join("");
    if (finalOtp.length !== 6) {
      alert("Please enter complete OTP");
      return;
    }
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({
        "email": email,
        "otp": finalOtp
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      const data = await fetch(`${import.meta.env.VITE_API_URL}auth/verify-otp`, requestOptions)
      const result = await data.json();
      alert(result.message);
      if (result.message == "OTP verified successfully") {
        navigate('/reset-password')
      }
      // navigate("/home") // success ke baad
    } catch (error) {
      alert(error.message || "Invalid OTP");
    }
  };

  // Resend OTP
  const handleResend = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({
        "email": email
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      const data = await fetch(`${import.meta.env.VITE_API_URL}auth/forgot-password`, requestOptions)
      const result = await data.json();
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">OTP Verification</h2>
          <p className="text-sm text-gray-500 mt-1">
            Enter the 6-digit OTP sent to your email
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* OTP Inputs */}
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-14 h-14 text-center text-lg font-semibold
                  rounded-lg border border-gray-300
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                  outline-none"
              />
            ))}
          </div>

          {/* Resend OTP */}
          <div className="text-center text-sm text-gray-500">
            Didn’t receive OTP?{" "}
            <span
              onClick={handleResend}
              className="text-indigo-600 font-medium cursor-pointer hover:underline"
            >
              Resend
            </span>
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold
              bg-gradient-to-r from-indigo-500 to-purple-600
              hover:from-indigo-600 hover:to-purple-700
              transition duration-300 shadow-md"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerify;
