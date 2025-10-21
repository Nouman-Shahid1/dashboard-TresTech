"use client";

import { useState } from "react";

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d");

  const stats = [
    { title: "Total Users", value: "156", change: "+12%", trend: "up" },
    { title: "Active Subscriptions", value: "89", change: "+8%", trend: "up" },
    { title: "Revenue", value: "$12,450", change: "+23%", trend: "up" },
    { title: "Document Downloads", value: "1,234", change: "+15%", trend: "up" }
  ];

  const chartData = [
    { month: "Jan", users: 45, revenue: 8500 },
    { month: "Feb", users: 52, revenue: 9200 },
    { month: "Mar", users: 61, revenue: 10100 },
    { month: "Apr", users: 78, revenue: 11800 },
    { month: "May", users: 89, revenue: 12450 }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
        <p className="text-gray-400">Track performance and user engagement</p>
      </div>

      <div className="mb-6">
        <select 
          value={timeRange} 
          onChange={(e) => setTimeRange(e.target.value)}
          className="bg-[#1A1335] border border-gray-700 text-white rounded-lg px-4 py-2 cursor-pointer"
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
            <h3 className="text-gray-400 text-sm mb-2">{stat.title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span className={`text-sm ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-xl font-bold text-white mb-4">User Growth</h3>
          <div className="space-y-4">
            {chartData.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-400">{data.month}</span>
                <div className="flex items-center gap-4">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-[#f0a709] h-2 rounded-full" 
                      style={{ width: `${(data.users / 100) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-medium">{data.users}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-xl font-bold text-white mb-4">Revenue Trend</h3>
          <div className="space-y-4">
            {chartData.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-400">{data.month}</span>
                <div className="flex items-center gap-4">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${(data.revenue / 15000) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-medium">${data.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}