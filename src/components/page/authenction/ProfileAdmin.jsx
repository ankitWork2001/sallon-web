import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiGift } from "react-icons/fi";
import { LiaCoinsSolid } from "react-icons/lia";
import { FaBookReader } from "react-icons/fa";
import { LuShare } from "react-icons/lu";


const Icon = ({ className = 'w-8 h-8 text-indigo-500' }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
)



const ProfileAdmin = () => {

    const [tokenState, setTokenState] = useState(localStorage.getItem("authtoken"));
    const [userState, setUserState] = useState(JSON.parse(localStorage.getItem('userdata')) || {});

    const handleLogout = () => {
        localStorage.removeItem('userdata')
        localStorage.removeItem('authtoken')
        localStorage.removeItem("userrole")
        setTokenState(null);
        setUserState({});
    }
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                    <aside style={{ background: "var(--primary-gradient)" }} className="md:w-1/3 p-6 text-white flex flex-col gap-4">
                        <Link to="/profile/edit">
                            <img
                                className="w-20 h-20 rounded-full border-4 border-white mx-auto"
                                src="https://i.pinimg.com/originals/cb/45/72/cb4572f19ab7505d552206ed5dfb3739.jpg"
                                alt="Profile"
                            />
                        </Link>
                        {tokenState ? <div className="text-center">
                            <h2 className="text-xl font-semibold">Welcome</h2>
                            <p className="text-lg font-medium  mt-1">{userState.name}</p>
                            <p className="text-sm opacity-90 mt-1">{userState.email}</p>
                            <p className="text-sm opacity-90 mt-1">{userState.phone}</p>
                            <p className="text-sm opacity-90 mt-1">{userState.role}</p>
                        </div> : <div>
                            <div className="text-center">
                                <h2 className="text-xl font-semibold">Welcome</h2>
                                <p className="text-sm opacity-90 mt-1">Sign in to view your complete profile</p>
                            </div>

                            <div className="mt-2 flex justify-center gap-3">
                                <Link to="/login">
                                    <button className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-md shadow-sm hover:opacity-95">
                                        Login
                                    </button>
                                </Link>
                                <Link to="/sign-up">
                                    <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md font-medium hover:bg-white hover:text-indigo-700 transition">
                                        Sign Up
                                    </button>
                                </Link>
                            </div></div>}

                        <p className="text-xs opacity-85 text-center mt-4">Join our community — coins, offers and partner programs await.</p>
                        {tokenState && <div className='flex justify-center items-center p-2  md:mt-6'>
                            <button onClick={handleLogout} className='rounded-2xl border px-6 p-1.5 font-medium cursor-pointer'>Logout</button>
                        </div>}
                    </aside>

                    {/* Right column: options list */}
                    <main className="md:w-2/3 p-6">
                        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <article className="flex gap-3 items-start p-4 bg-gray-50 rounded-lg hover:shadow transition">
                                <div className="flex-shrink-0 bg-green-100 rounded-full p-3">
                                    <FiGift className="w-8 h-8 text-green-400" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Refer & Earn</h4>
                                    <p className="text-sm text-gray-600">Coins & free services for referrals</p>
                                </div>
                            </article>

                            <Link to="/register">

                                <article className="flex gap-3 items-start p-4 bg-gray-50 rounded-lg hover:shadow transition">
                                    <div className="flex-shrink-0 rounded-full p-3 bg-amber-100">
                                        <LiaCoinsSolid className="w-8 h-8 text-amber-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Earn with Us</h4>
                                        <p className="text-sm text-gray-600">Partner registration & opportunities</p>
                                    </div>
                                </article>
                            </Link>
                            <article className="flex gap-3 items-start p-4 bg-gray-50 rounded-lg hover:shadow transition">
                                <div className="flex-shrink-0 rounded-full p-3 bg-indigo-100">
                                    <FaBookReader className="w-8 h-8 text-[var(--primary)]" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Blog</h4>
                                    <p className="text-sm text-gray-600">Read articles, tips and trends</p>
                                </div>
                            </article>

                            <article className="flex gap-3 items-start p-4 bg-gray-50 rounded-lg hover:shadow transition">
                                <div className="flex-shrink-0 rounded-full p-3 bg-indigo-100">
                                    <LuShare className="w-8 h-8 text-[var(--primary)]" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Share the App</h4>
                                    <p className="text-sm text-gray-600">Invite friends and earn rewards</p>
                                </div>
                            </article>
                        </div>

                        <section className="mt-6">
                            <h3 className="text-lg font-semibold mb-3">Other Information</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-1 rounded-lg hover:bg-gray-50 transition">
                                    <div className="flex-shrink-0 rounded-full p-3 bg-indigo-100">

                                        <Icon className="w-6 h-6 text-[var(--primary)]" />
                                    </div>
                                    <span className="text-sm">About Us</span>
                                </div>

                                <div className="flex items-center gap-3 p-1 rounded-lg hover:bg-gray-50 transition">
                                    <div className="flex-shrink-0 rounded-full p-3 bg-indigo-100">

                                        <Icon className="w-6 h-6 text-[var(--primary)]" />
                                    </div>
                                    <span className="text-sm">Privacy Policy</span>
                                </div>

                                <div className="flex items-center gap-3 p-1 rounded-lg hover:bg-gray-50 transition">
                                    <div className="flex-shrink-0 rounded-full p-3 bg-indigo-100">

                                        <Icon className="w-6 h-6 text-[var(--primary)]" />
                                    </div>
                                    <span className="text-sm">Notification Preferences</span>
                                </div>

                                <div className="flex items-center gap-3 p-1 rounded-lg hover:bg-gray-50 transition">
                                    <div className="flex-shrink-0 rounded-full p-3 bg-indigo-100">

                                        <Icon className="w-6 h-6 text-[var(--primary)]" />
                                    </div>
                                    <span className="text-sm">Contact Us</span>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default ProfileAdmin
