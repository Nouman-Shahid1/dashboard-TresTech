"use client";

import React, { useState } from "react";
import {
  FiDollarSign,
  FiShoppingCart,
  FiBarChart2,
  FiPackage,
  FiUsers,
  FiClock,
} from "react-icons/fi";
import { useAuth } from "../contexts/AuthContext";
import { USER_DATA } from "../data/users";

export default function POSDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const userData = USER_DATA[user?.username];
  const posData = userData?.posData || {
    dailySales: "$2,450",
    totalOrders: "120",
    inventoryItems: "350",
    activeTerminals: "5",
    subscription: {
      plan: "Pro Plan",
      terminals: 5,
      status: "Active",
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      features: [
        "Advanced Analytics",
        "Inventory Management",
        "Multi-Terminal Support",
        "Customer Insights",
        "Priority Support",
      ],
    },
  };

  const stats = [
    {
      title: "Daily Sales",
      value: posData.dailySales,
      icon: FiDollarSign,
      color: "text-[#f0a709]",
    },
    {
      title: "Total Orders",
      value: posData.totalOrders,
      icon: FiShoppingCart,
      color: "text-blue-500",
    },
    {
      title: "Inventory Items",
      value: posData.inventoryItems,
      icon: FiPackage,
      color: "text-green-500",
    },
    {
      title: "Active Terminals",
      value: posData.activeTerminals,
      icon: FiClock,
      color: "text-purple-500",
    },
  ];

  const subscription = posData.subscription;

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          POS Dashboard -{" "}
          <span className="text-[#f0a709]">
            {USER_DATA[user?.username]?.name || user?.username}
          </span>
        </h1>
        <p className="text-gray-400">
          Manage your POS system and view analytics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20"
          >
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

      {/* Subscription Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-xl font-bold text-white mb-4">
            POS Subscription Details
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Current Plan:</span>
              <span className="text-[#f0a709] font-semibold">
                {subscription.plan}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Active Terminals:</span>
              <span className="text-white">{subscription.terminals}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Status:</span>
              <span className="text-green-400">{subscription.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Valid Until:</span>
              <span className="text-white">{subscription.endDate}</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-xl font-bold text-white mb-4">Active Features</h3>
          <div className="space-y-3">
            {subscription.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
