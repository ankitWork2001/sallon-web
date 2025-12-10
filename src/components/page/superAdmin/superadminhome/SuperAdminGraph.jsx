import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// Sample data (match the screenshot)
const barData = [
  { month: "Jan", subs: 45 },
  { month: "Feb", subs: 50 },
  { month: "Mar", subs: 60 },
  { month: "Apr", subs: 55 },
  { month: "May", subs: 72 },
  { month: "Jun", subs: 90 },
];

const pieData = [
  { name: "Rajesh Kumar", value: 27 },
  { name: "Priya Sharma", value: 23 },
  { name: "Amit Patel", value: 19 },
  { name: "Sneha Reddy", value: 17 },
  { name: "Others", value: 14 },
];

const PIE_COLORS = ["#8b5cf6", "#ff2d7a", "#2b82ff", "#00d084", "#ffa500"];

const SuperAdminGraph = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {/* Card - Subscriptions Sold per Month */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Subscriptions Sold per Month</h3>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a21caf" stopOpacity={1} />
                    <stop offset="100%" stopColor="#ff2d7a" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar dataKey="subs" fill="url(#grad)" barSize={36} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card - Revenue Distribution by Sales Person */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Revenue Distribution by Sales Person</h3>
          <div className="flex items-center justify-center" style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="45%"
                  cy="50%"
                  outerRadius={90}
                  innerRadius={45}
                  paddingAngle={4}
                  label={({ name, percent }) => `${name.split(" ")[0]}: ${Math.round(percent * 100)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuperAdminGraph;
