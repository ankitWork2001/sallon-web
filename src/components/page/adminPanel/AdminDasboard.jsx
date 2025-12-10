import React from 'react'
import { SlCalender } from "react-icons/sl";
import { FiDollarSign } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";




const AdminDasboard = () => {
     const stats = [
            { icon: <SlCalender className="w-5 h-5 text-white" />, value: 156, label: "Total Bookings", change: "+12%", bg: "bg-blue-500" },
            { icon: <FiDollarSign className="w-5 h-5 text-white" />, value: "$8,450", label: "Monthly Revenue", change: "+23%", bg: "bg-emerald-500" },
            { icon: <FaUsers className="w-5 h-5 text-white" />, value: 89, label: "Total Customers", change: "+8%", bg: "bg-violet-500" },
            { icon: <IoIosTrendingUp className="w-5 h-5 text-white" />, value: 67, label: "Returning Customers", change: "+15%", bg: "bg-orange-400" },
        ];
    
        const bookings = [
            { name: "Sarah Johnson", service: "Haircut & Style", time: "10:00 AM", status: "Confirmed" },
            { name: "Mike Peters", service: "Beard Trim", time: "11:30 AM", status: "Confirmed" },
            { name: "Emma Wilson", service: "Hair Coloring", time: "2:00 PM", status: "Pending" },
            { name: "James Brown", service: "Haircut", time: "3:30 PM", status: "Confirmed" },
        ];
    
        const services = [
            { name: "Haircut & Style", amount: "$2,250", bookings: 45, pct: 95 },
            { name: "Hair Coloring", amount: "$3,200", bookings: 32, pct: 70 },
            { name: "Beard Trim", amount: "$840", bookings: 28, pct: 55 },
            { name: "Hair Treatment", amount: "$1,575", bookings: 21, pct: 60 },
        ];
    
  return (
    <div>
         <main className="p-6  w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                        {stats.map((items, index) => (
                            <div key={index} className="bg-white rounded-xl p-4 shadow-sm flex justify-between">
                                <div>
                                    <div className={`p-2 rounded-md ${items.bg} w-10 h-10 flex items-center justify-center`}>
                                        {items.icon}
                                    </div>
                                    <div>
                                        <div className="text-lg sm:text-xl font-semibold mt-2">{items.value}</div>
                                        <div className="text-xs sm:text-sm text-gray-500 mt-1">{items.label}</div>
                                    </div>
                                </div>
                                <div className="text-sm text-green-500 font-medium mt-3">
                                    {items.change}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm w-full">
                            <h3 className="font-semibold text-lg mb-4">Recent Bookings</h3>
                            <ul className="space-y-4">
                                {bookings.map((book, ind) => (
                                    <li key={ind} className="flex items-center justify-between">
                                        <div>
                                            <div className="font-medium">{book.name}</div>
                                            <div className="text-sm text-gray-500">{book.service}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-medium">{book.time}</div>
                                            <div className={`mt-1 inline-block px-2 py-1 text-xs rounded-full ${book.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'}`}>{book.status}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm w-full">
                            <h3 className="font-semibold text-lg mb-4">Most Booked Services</h3>
                            <div className="space-y-4">
                                {services.map((serverse, ind) => (
                                    <div key={ind} className="flex items-center justify-between">
                                        <div className="w-2/3">
                                            <div className="flex justify-between items-baseline">
                                                <div className="font-medium">{serverse.name}</div>
                                                <div className="text-sm text-gray-500">{serverse.amount}</div>
                                            </div>
                                            <div className="mt-2 bg-gray-100 rounded-full h-3 overflow-hidden">
                                                <div
                                                    className="h-3 rounded-full"
                                                    style={{ width: `${serverse.pct}%`, background: 'linear-gradient(90deg,#a78bfa,#ec4899)' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-500 text-right">
                                            <div>{serverse.bookings} bookings</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
    </div>
  )
}

export default AdminDasboard
