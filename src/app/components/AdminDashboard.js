"use client";

import React, { useState } from "react";
import { 
  FiFileText, FiLinkedin, FiUsers, FiDollarSign, 
  FiTrendingUp, FiPlus, FiEdit, FiTrash2 
} from "react-icons/fi";
import { useAuth } from "../contexts/AuthContext";
import { ALL_USERS, USER_DATA } from "../data/users";

export default function AdminDashboard() {
  const { user } = useAuth();


  const stats = [
    { title: "Total Users", value: ALL_USERS.length.toString(), icon: FiUsers, color: "text-blue-500" },
    { title: "Active Services", value: "12", icon: FiFileText, color: "text-green-500" },
    { title: "Monthly Revenue", value: "$8,450", icon: FiDollarSign, color: "text-[#f0a709]" },
    { title: "Growth Rate", value: "+15%", icon: FiTrendingUp, color: "text-purple-500" }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Admin Dashboard - <span className="text-[#f0a709]">{USER_DATA[user?.username]?.name || user?.username}</span>
        </h1>
        <p className="text-gray-400">Manage services and user subscriptions</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#f0a709]/10 rounded-lg flex items-center justify-center">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400 text-sm">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Overview Section */}
      <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
        <h3 className="text-xl font-bold text-white mb-4">Recent Activities</h3>
        <div className="space-y-3">
          {[
            { action: "Angela Boyce subscribed to Office 365 L1 IT Support", time: "Joined 2025-10-22", icon: FiUsers },
            { action: "Orlando Cooper accessed LinkedIn Optimization", time: "Joined 2025-10-22", icon: FiLinkedin },
            { action: "Danny Smith updated Resume Creation", time: "Joined 2025-10-20", icon: FiFileText },
            { action: "Stepenosh Iro viewed Recruitment Services", time: "Joined 2025-10-17", icon: FiUsers }
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f0a709]/5 transition-colors">
              <div className="w-8 h-8 bg-[#f0a709]/20 rounded-full flex items-center justify-center">
                <activity.icon className="w-4 h-4 text-[#f0a709]" />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm">{activity.action}</p>
                <p className="text-gray-400 text-xs">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}