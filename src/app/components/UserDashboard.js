"use client";

import { useState, useMemo, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useDocuments } from "../contexts/DocumentContext";
import { USER_DATA } from "../data/users";

export default function UserDashboard() {
  const { user } = useAuth();
  const { getUserDocuments } = useDocuments();
  const currentUser = USER_DATA[user?.username] || USER_DATA["john.smith"];
  
  const [userSubscription] = useState({
    plan: currentUser.subscriptionPlan,
    status: currentUser.subscriptionStatus,
    startDate: currentUser.joinDate,
    endDate: "2025-04-15",
    services: ["LinkedIn Optimization", "Resume Creation", "Recruitment Services"]
  });

  const [jobMarketData] = useState({
    designation: currentUser.designation,
    experience: currentUser.experience || "5+ years",
    location: currentUser.location || "Remote/Hybrid",
    averageSalary: currentUser.averageSalary || "$95,000 - $130,000",
    demandLevel: currentUser.demandLevel || "High",
    topSkills: currentUser.topSkills || ["React", "Node.js", "Python", "AWS", "Docker"]
  });

  const adminDocuments = getUserDocuments(user?.username || "user");
  const serviceFiles = adminDocuments.map(doc => ({
    name: doc.name,
    type: doc.chip || "Document",
    date: doc.uploadDate,
    status: "Ready",
    url: doc.fileContent,
    isAdminDoc: true
  }));

  const handleDownload = useCallback((file) => {
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.name;
    if (!file.isAdminDoc) {
      link.target = '_blank';
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, <span className="text-[#f0a709]">{currentUser.name}</span>!
        </h1>
        <p className="text-gray-400">Track your career journey and access your services</p>
      </div>

      {/* Subscription Status */}
      <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">Your Subscription</h3>
          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
            {userSubscription.status}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-gray-400 text-sm mb-1">Plan</p>
            <p className="text-[#f0a709] font-bold text-lg">{userSubscription.plan}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Duration</p>
            <p className="text-white">{userSubscription.startDate} to {userSubscription.endDate}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Services Included</p>
            <p className="text-white">{userSubscription.services.length} Services</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Job Market Insights */}
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <svg className="text-[#f0a709] w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
            </svg>
            Job Market Insights
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Your Designation:</span>
              <span className="text-white font-medium">{jobMarketData.designation}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Experience Level:</span>
              <span className="text-white font-medium">{jobMarketData.experience}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Preferred Location:</span>
              <span className="text-white font-medium">{jobMarketData.location}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Salary Range:</span>
              <span className="text-green-400 font-medium">{jobMarketData.averageSalary}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Market Demand:</span>
              <span className="text-[#f0a709] font-medium flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {jobMarketData.demandLevel}
              </span>
            </div>
          </div>
          
          <div className="mt-6">
            <p className="text-gray-400 text-sm mb-2">Top Skills in Demand:</p>
            <div className="flex flex-wrap gap-2">
              {jobMarketData.topSkills.map((skill, index) => (
                <span key={index} className="bg-[#f0a709]/20 text-[#f0a709] px-2 py-1 rounded text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Service Progress */}
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-xl font-bold text-white mb-4">Service Progress</h3>
          <div className="space-y-4">
            {userSubscription.services.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-[#100A1D] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white">{service}</span>
                </div>
                <span className="text-green-400 text-sm">Completed</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Files */}
      <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <svg className="text-[#f0a709] w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Your Service Files
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceFiles.map((file, index) => (
            <div key={index} className="bg-[#100A1D] p-4 rounded-lg border border-gray-700 hover:border-[#f0a709]/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-[#f0a709]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#f0a709]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                  {file.status}
                </span>
              </div>
              <h4 className="text-white font-medium mb-1">{file.name}</h4>
              <p className="text-gray-400 text-sm mb-3">{file.type} • {file.date}</p>
              <button 
                onClick={() => handleDownload(file)}
                className="w-full bg-[#f0a709] text-black py-2 px-4 rounded-lg hover:bg-[#ffbf4d] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}