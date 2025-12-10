import React, { useState } from "react";
import { FaUser, FaPhoneAlt, FaCalendarAlt, FaClock } from "react-icons/fa";




const AdminBooking = () => {
const [data,SetData] = useState("all")

  const bookings = [
    {
      id: 1,
      title: "Haircut & Style",
      status: "Upcoming",
      name: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      date: "2024-01-15",
      time: "10:00 AM",
      duration: "45 min",
      price: "$50",
    },
    {
      id: 2,
      title: "Beard Trim",
      status: "Upcoming",
      name: "Mike Peters",
      phone: "+1 (555) 234-5678",
      date: "2024-01-15",
      time: "11:30 AM",
      duration: "30 min",
      price: "$30",
    },
    {
      id: 3,
      title: "Hair Coloring",
      status: "Completed",
      name: "Emma Wilson",
      phone: "+1 (555) 345-6789",
      date: "2024-01-15",
      time: "2:00 PM",
      duration: "120 min",
      price: "$100",
    },
    {
      id: 4,
      title: "Haircut",
      status: "Upcoming",
      name: "James Brown",
      phone: "+1 (555) 456-7890",
      date: "2024-01-16",
      time: "3:30 PM",
      duration: "45 min",
      price: "$50",
    },
  ];

  const filterData = data==="all"?bookings:bookings.filter((item)=>item.status.toLowerCase()===data)
  const [activeTab, setActiveTab] = useState("all");
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Bookings Management</h1>

      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        <button   onClick={(e)=>{SetData(e.target.value); setActiveTab("all")}} value="all" className={`bg-purple-600 text-white px-3 p-2 rounded-lg font-medium`}>
          All
        </button>
        <button onClick={(e)=>{SetData(e.target.value); setActiveTab("upcoming")}} value="upcoming" className="bg-purple-600 text-white px-3 p-2 rounded-lg font-medium">
          Upcoming
        </button>
        <button onClick={(e)=>{SetData(e.target.value); setActiveTab("completed")}} value="completed" className="bg-purple-600 text-white px-3 p-2 rounded-lg font-medium">
          Completed
        </button>
        <button onClick={(e)=>{SetData(e.target.value); setActiveTab("cancelled")}} value="cancelled" className="bg-purple-600 text-white px-3 p-2 rounded-lg font-medium">
          Cancelled
        </button>

      </div>
      {/* Booking Cards */}
      <div className="space-y-4">
        {filterData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <span
                className={`inline-block mt-1 text-sm px-2 py-1 rounded-full ${item.status === "Upcoming"
                    ? "bg-blue-100 text-blue-600"
                    : item.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
              >
                {item.status}
              </span>

              <div className="mt-3 space-y-1 text-gray-600">
                <div className="flex items-center gap-2">
                  <FaUser /> {item.name}
                </div>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt /> {item.phone}
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt /> {item.date}
                </div>
                <div className="flex items-center gap-2">
                  <FaClock /> {item.time} ({item.duration})
                </div>
              </div>
            </div>

            <div className="text-right space-y-3">
              <p className="text-xl font-bold">{item.price}</p>
              <div className="flex gap-2">
                <button className="px-4 py-1 bg-green-600 text-white rounded-lg">
                  Complete
                </button>
                <button className="px-4 py-1 bg-red-600 text-white rounded-lg">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminBooking;