import React, { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")
    const email = localStorage.getItem("useremail")

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!password || !password1) {
            alert("password and conform password required")
            return
        }
        if (password !== password1) {
            alert("do not match password and conform password")
            return
        }
        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "email": email,
                "newpassword": password
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            const data = await fetch(`${import.meta.env.VITE_API_URL}auth/reset-password`, requestOptions)
            const result = await data.json();
            console.log(result)
            setPassword("")
            setPassword1("")
        } catch (error) {
            console.log(error)
            setPassword("")
            setPassword1("")
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                {/* Heading */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Set New Password
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Create a strong password for your account
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleResetPassword}>
                    {/* New Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter new password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-lg border border-gray-300
                px-4 py-3 pr-11 text-sm shadow-sm transition
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                outline-none"
                            />

                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2
                text-gray-500 cursor-pointer"
                            >
                                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </span>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>

                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                value={password1}
                                onChange={(e) => setPassword1(e.target.value)}
                                placeholder="Re-enter new password"
                                className="w-full rounded-lg border border-gray-300
                px-4 py-3 pr-11 text-sm shadow-sm transition
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                outline-none"
                            />

                            <span
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                                className="absolute right-3 top-1/2 -translate-y-1/2
                text-gray-500 cursor-pointer"
                            >
                                {showConfirmPassword ? (
                                    <FaEyeSlash size={18} />
                                ) : (
                                    <FaEye size={18} />
                                )}
                            </span>
                        </div>
                    </div>

                    {/* Hint */}
                    <div className="text-xs text-gray-500">
                        Password must be at least 8 characters long.
                    </div>

                    {/* Submit */}
                    <button
                        onClick={handleResetPassword}
                        type="submit"
                        className="w-full py-3 rounded-lg text-white font-semibold
            bg-gradient-to-r from-indigo-500 to-purple-600
            hover:from-indigo-600 hover:to-purple-700
            transition duration-300 shadow-md"
                    >
                        Update Password
                    </button>
                </form>

            </div>
        </div>
    );
};

export default ResetPassword;
