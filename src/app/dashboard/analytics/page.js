"use client";

import { useState } from "react";
import { ALL_USERS } from "../../data/users";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d");

  // Calculate real stats from user data
  const totalUsers = ALL_USERS.length;
  const activeUsers = ALL_USERS.filter(user => user.subscriptionStatus === "Active").length;
  
  const stats = [
    { title: "Total Users", value: totalUsers.toString(), change: "+12%", trend: "up" },
    { title: "Active Subscriptions", value: activeUsers.toString(), change: "+8%", trend: "up" },
    { title: "Revenue", value: "$12,450", change: "+23%", trend: "up" },
    { title: "Document Downloads", value: "1,234", change: "+15%", trend: "up" }
  ];

  const monthlyData = [
    { month: "Jan", users: Math.floor(totalUsers * 0.1), revenue: 2500 },
    { month: "Feb", users: Math.floor(totalUsers * 0.15), revenue: 3200 },
    { month: "Mar", users: Math.floor(totalUsers * 0.25), revenue: 4100 },
    { month: "Apr", users: Math.floor(totalUsers * 0.35), revenue: 5800 },
    { month: "May", users: Math.floor(totalUsers * 0.45), revenue: 7450 },
    { month: "Jun", users: Math.floor(totalUsers * 0.55), revenue: 9200 },
    { month: "Jul", users: Math.floor(totalUsers * 0.65), revenue: 11100 },
    { month: "Aug", users: Math.floor(totalUsers * 0.75), revenue: 13500 },
    { month: "Sep", users: Math.floor(totalUsers * 0.85), revenue: 16200 },
    { month: "Oct", users: Math.floor(totalUsers * 0.92), revenue: 19800 },
    { month: "Nov", users: Math.floor(totalUsers * 0.97), revenue: 23400 },
    { month: "Dec", users: totalUsers, revenue: 27650 }
  ];

  const userGrowthData = {
    labels: monthlyData.map(d => d.month),
    datasets: [
      {
        label: 'Users',
        data: monthlyData.map(d => d.users),
        borderColor: '#f0a709',
        backgroundColor: 'rgba(240, 167, 9, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const revenueData = {
    labels: monthlyData.map(d => d.month),
    datasets: [
      {
        label: 'Revenue ($)',
        data: monthlyData.map(d => d.revenue),
        backgroundColor: '#10b981',
        borderColor: '#059669',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(75, 85, 99, 0.3)',
        },
        ticks: {
          color: '#9ca3af',
        },
      },
      y: {
        grid: {
          color: 'rgba(75, 85, 99, 0.3)',
        },
        ticks: {
          color: '#9ca3af',
        },
      },
    },
  };

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
          <h3 className="text-xl font-bold text-white mb-4">User Growth (2025)</h3>
          <div className="h-64">
            <Line data={userGrowthData} options={chartOptions} />
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-xl font-bold text-white mb-4">Revenue Trend (2025)</h3>
          <div className="h-64">
            <Bar data={revenueData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}