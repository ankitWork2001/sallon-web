import React, { memo } from "react";
import {
    FaDollarSign,
    FaSignOutAlt,
    FaBuilding,
    FaDownload,
    FaPlusCircle,
    FaShareAlt
} from "react-icons/fa";
const SalesDesboard = ()=>{
   const stats = [
  {
    icon: <FaBuilding className="w-6 h-6 text-white" />,
    value: 15,
    label: "Total Salons Registered",
    bg: "bg-gradient-to-r from-[#9b25ec] to-[#b500eb]"
  },
  {
    icon: <FaDownload className="w-6 h-6 text-white" />,
    value: 42,
    label: "App Downloads from Referral",
    bg: "bg-gradient-to-r from-[#ff4d9a] to-[#f10083]"
  },
  {
    icon: <FaDollarSign className="w-6 h-6 text-white" />,
    value: "₹12,450",
    label: "Total Commission Earned",
    bg: "bg-gradient-to-r from-[#00d07a] to-[#00b85b]"
  }
];


    const bookings = [
        { name: "Glamour Studio", date: "2025-01-15", status: "Premium", commission: "₹2,500", payment: "Paid" },
        { name: "Beauty Lounge", date: "2025-01-20", status: "Basic", commission: "₹1,500", payment: "Paid" },
        { name: "Style Hub", date: "2025-02-05", status: "Premium", commission: "₹2,500", payment: "Pending" },
        { name: "Elite Salon", date: "2025-02-12", status: "Enterprise", commission: "₹5,000", payment: "Paid" },
    ];

    const services = [
        { name: "Monthly Target", progress: "75%", bookings: '15 / 20', pct: 75, bg: 'linear-gradient(90deg,#a78bfa,#ec4899)' },
        { name: "Commission Goal", progress: "83%", bookings: '₹12,450 / ₹15,000', pct: 83, bg: 'linear-gradient(90deg,#00c668,#00ac6c)' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img
                            className="w-12 h-12 rounded-full object-cover"
                            src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ujyGdu8jKI2UB5515XZA33Tt4DBhDU19dKSTUTMZvrg="
                            alt="avatar"
                        />
                        <div>
                            <div className="font-semibold text-gray-900">Rajesh Kumar</div>
                            <div className="text-sm text-gray-500">Referral ID: <span className="text-[#e193ee]">SP-2025-001</span></div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 bg-black/10 hover:bg-black/15 text-gray-900 px-4 py-2 rounded">
                            <FaSignOutAlt  className="w-4 h-4" />
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
                {/* Top stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {stats.map((s, i) => (
                        <div key={i} className={`${s.bg} rounded-2xl p-4 shadow-md flex items-center justify-between`}>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/10">
                                    {s.icon}
                                </div>
                                <div>
                                    <div className="text-white text-xl font-semibold">{s.value}</div>
                                    <div className="text-white text-sm opacity-90 mt-1">{s.label}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Middle: table + quick actions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Registered salons card */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <h3 className="font-semibold text-lg mb-4">My Registered Salons</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="text-left text-gray-500">
                                        <th className="py-2 pr-6">Salon Name</th>
                                        <th className="py-2 pr-6">Registration Date</th>
                                        <th className="py-2 pr-6">Subscription Plan</th>
                                        <th className="py-2 pr-6">Commission</th>
                                        <th className="py-2 pr-6">Payment Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map((b, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="py-3 pr-6">{b.name}</td>
                                            <td className="py-3 pr-6">{b.date}</td>
                                            <td className="py-3 pr-6">
                                                <span className={`inline-block text-xs px-3 py-1 rounded-full ${b.status === 'Premium' || b.status === 'Enterprise' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-700'}`}>
                                                    {b.status}
                                                </span>
                                            </td>
                                            <td className="py-3 pr-6">{b.commission}</td>
                                            <td className="py-3 pr-6">
                                                <span className={`text-sm font-medium ${b.payment.toLowerCase() === 'paid' ? 'text-green-600' : 'text-yellow-600'}`}>{b.payment}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
                        <div className="space-y-4">
                            <button className="w-full flex items-center justify-center gap-2 bg-[#ab33f7] hover:opacity-95 text-white px-4 py-3 rounded-lg">
                                <FaPlusCircle  className="w-4 h-4" /> Register New Salon
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 border px-4 py-3 rounded-lg hover:bg-gray-50">
                                <FaShareAlt  className="w-4 h-4" /> Share Referral Link
                            </button>
                            <button className="w-full border px-4 py-3 rounded-lg hover:bg-gray-50">Withdraw Commission</button>
                            <button className="w-full border px-4 py-3 rounded-lg hover:bg-gray-50">Admin Dashboard</button>
                        </div>
                    </div>
                </div>

                {/* Bottom area: chart placeholder + target vs achieved */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Monthly Sales Growth (placeholder) */}
                    <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
                        <h3 className="font-semibold text-lg mb-4">Monthly Sales Growth</h3>
                        <div className="h-56 flex items-center justify-center text-gray-400">[Chart Placeholder]</div>
                    </div>

                    {/* Target vs Achieved */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <h3 className="font-semibold text-lg mb-4">Target vs Achieved</h3>

                        <div className="space-y-4">
                            {services.map((s, idx) => (
                                <div key={idx}>
                                    <div className="flex items-center justify-between">
                                        <div className="font-medium">{s.name}</div>
                                        <div className="text-sm text-gray-500 text-right">{s.bookings}</div>
                                    </div>

                                    <div className="mt-2 bg-gray-100 rounded-full h-3 overflow-hidden">
                                        <div
                                            className="h-3 rounded-full"
                                            style={{
                                                width: `${s.pct}%`,
                                                background: s.bg
                                            }}
                                        />
                                    </div>
                                    <div className="text-sm text-gray-700 mt-1">{s.progress} Complete</div>
                                </div>
                            ))}

                            <div className="mt-4 p-3 rounded-lg bg-pink-50 text-pink-700 text-sm">Great work! You are on track to exceed your monthly target.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(SalesDesboard);