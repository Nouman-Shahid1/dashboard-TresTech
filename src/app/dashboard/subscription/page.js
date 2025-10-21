"use client";

import React from "react";
import { FiCheckCircle, FiClock, FiDollarSign, FiCalendar, FiStar } from "react-icons/fi";

export default function SubscriptionPage() {
  const subscription = {
    plan: "Premium Advantage",
    status: "Active",
    startDate: "January 15, 2024",
    endDate: "April 15, 2024",
    daysRemaining: 65,
    totalAmount: "$850",
    services: [
      "ATS-Friendly Resume Creation",
      "LinkedIn Profile Optimization", 
      "Job Portal Profile Creation",
      "Active Profile Marketing",
      "Technical & Screening Calls",
      "Interview Scheduling & Training",
      "Job Onboarding Support",
      "Weekly Progress Reports"
    ]
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Subscription Details</h1>
        <p className="text-gray-400">Manage your recruitment service subscription</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Current Plan</h3>
            <FiStar className="w-6 h-6 text-[#f0a709]" />
          </div>
          <p className="text-2xl font-bold text-[#f0a709] mb-2">{subscription.plan}</p>
          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
            {subscription.status}
          </span>
        </div>

        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Days Remaining</h3>
            <FiClock className="w-6 h-6 text-[#f0a709]" />
          </div>
          <p className="text-2xl font-bold text-white mb-2">{subscription.daysRemaining}</p>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-[#f0a709] h-2 rounded-full" style={{width: '65%'}}></div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Total Investment</h3>
            <FiDollarSign className="w-6 h-6 text-[#f0a709]" />
          </div>
          <p className="text-2xl font-bold text-white mb-2">{subscription.totalAmount}</p>
          <p className="text-gray-400 text-sm">One-time payment</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FiCalendar className="text-[#f0a709]" />
            Subscription Timeline
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Start Date:</span>
              <span className="text-white">{subscription.startDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">End Date:</span>
              <span className="text-white">{subscription.endDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Duration:</span>
              <span className="text-white">3 Months</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Auto Renewal:</span>
              <span className="text-red-400">Disabled</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-xl font-bold text-white mb-4">Included Services</h3>
          <div className="space-y-3">
            {subscription.services.map((service, index) => (
              <div key={index} className="flex items-center gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
        <h3 className="text-xl font-bold text-white mb-4">Subscription Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-[#f0a709] font-bold mb-2">What You Get:</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Job Guarantee with interview assurance</li>
              <li>• Priority support and dedicated assistance</li>
              <li>• Access to 53+ job portals</li>
              <li>• Direct client and prime vendor outreach</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#f0a709] font-bold mb-2">Support Included:</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Weekly progress reports</li>
              <li>• Interview training and preparation</li>
              <li>• Documentation and clearance support</li>
              <li>• Full onboarding assistance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}