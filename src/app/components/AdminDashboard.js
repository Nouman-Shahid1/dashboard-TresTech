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
  const [activeTab, setActiveTab] = useState('overview');
  const [services, setServices] = useState([
    { id: 1, name: "LinkedIn Optimization", price: "$299", status: "Active" },
    { id: 2, name: "Resume Creation", price: "$199", status: "Active" },
    { id: 3, name: "Recruitment Services", price: "$1050", status: "Active" }
  ]);

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

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex space-x-4 border-b border-gray-700">
          {['overview', 'services'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium capitalize ${
                activeTab === tab 
                  ? 'text-[#f0a709] border-b-2 border-[#f0a709]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Service Management */}
      {activeTab === 'services' && (
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">Service Management</h3>
            <button className="bg-[#f0a709] text-black px-4 py-2 rounded-lg hover:bg-[#ffbf4d] transition-colors flex items-center gap-2">
              <FiPlus className="w-4 h-4" />
              Add Service
            </button>
          </div>
          
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.id} className="flex items-center justify-between p-4 bg-[#100A1D] rounded-lg border border-gray-700">
                <div>
                  <h4 className="text-white font-medium">{service.name}</h4>
                  <p className="text-gray-400 text-sm">{service.price}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-1 rounded text-xs ${
                    service.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {service.status}
                  </span>
                  <button className="text-blue-400 hover:text-blue-300">
                    <FiEdit className="w-4 h-4" />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Overview Section */}
      {activeTab === 'overview' && (
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-xl font-bold text-white mb-4">Recent Activities</h3>
          <div className="space-y-3">
            {[
              { action: "Sarah Johnson subscribed", time: "5 min ago", icon: FiUsers },
              { action: "John Smith accessed documents", time: "15 min ago", icon: FiFileText },
              { action: "Michael Brown updated resume", time: "1 hour ago", icon: FiFileText },
              { action: "Emily Davis viewed LinkedIn guide", time: "2 hours ago", icon: FiLinkedin }
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
      )}
    </div>
  );
}