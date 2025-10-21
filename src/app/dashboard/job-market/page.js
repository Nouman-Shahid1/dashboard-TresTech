"use client";

import React, { useState } from "react";
import { FiTrendingUp, FiDollarSign, FiMapPin, FiBriefcase, FiUsers, FiStar } from "react-icons/fi";

export default function JobMarketPage() {
  const [marketData] = useState({
    designation: "Software Engineer",
    experience: "5+ years",
    location: "Remote/Hybrid",
    averageSalary: "$95,000 - $130,000",
    demandLevel: "High",
    growth: "+15%",
    totalJobs: "12,450",
    topSkills: ["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "TypeScript", "MongoDB"]
  });

  const [jobOpportunities] = useState([
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$120,000 - $150,000",
      type: "Full-time",
      posted: "2 days ago",
      match: 95
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$110,000 - $140,000",
      type: "Full-time",
      posted: "1 day ago",
      match: 92
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      company: "Amazon",
      location: "Remote",
      salary: "$130,000 - $160,000",
      type: "Full-time",
      posted: "3 days ago",
      match: 88
    },
    {
      id: 4,
      title: "React Developer",
      company: "Meta",
      location: "Menlo Park, CA",
      salary: "$105,000 - $135,000",
      type: "Contract",
      posted: "1 week ago",
      match: 85
    }
  ]);

  const [salaryTrends] = useState([
    { role: "Software Engineer", min: 85000, max: 130000, avg: 107500 },
    { role: "Senior Software Engineer", min: 120000, max: 180000, avg: 150000 },
    { role: "Full Stack Developer", min: 90000, max: 140000, avg: 115000 },
    { role: "Cloud Architect", min: 130000, max: 200000, avg: 165000 }
  ]);

  const getMatchColor = (match) => {
    if (match >= 90) return "text-green-400 bg-green-500/20";
    if (match >= 80) return "text-[#f0a709] bg-[#f0a709]/20";
    return "text-blue-400 bg-blue-500/20";
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Job Market Insights</h1>
        <p className="text-gray-400">Explore opportunities and market trends for your career</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Market Demand</h3>
            <FiTrendingUp className="w-6 h-6 text-[#f0a709]" />
          </div>
          <p className="text-2xl font-bold text-[#f0a709] mb-2">{marketData.demandLevel}</p>
          <p className="text-green-400 text-sm">{marketData.growth} this year</p>
        </div>

        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Avg Salary</h3>
            <FiDollarSign className="w-6 h-6 text-green-400" />
          </div>
          <p className="text-2xl font-bold text-green-400 mb-2">$112K</p>
          <p className="text-gray-400 text-sm">For your experience</p>
        </div>

        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Open Positions</h3>
            <FiBriefcase className="w-6 h-6 text-blue-400" />
          </div>
          <p className="text-2xl font-bold text-blue-400 mb-2">{marketData.totalJobs}</p>
          <p className="text-gray-400 text-sm">Available nationwide</p>
        </div>

        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Competition</h3>
            <FiUsers className="w-6 h-6 text-purple-400" />
          </div>
          <p className="text-2xl font-bold text-purple-400 mb-2">Medium</p>
          <p className="text-gray-400 text-sm">3-5 candidates per role</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-xl font-bold text-white mb-4">Your Profile Match</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Designation:</span>
              <span className="text-white font-medium">{marketData.designation}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Experience:</span>
              <span className="text-white font-medium">{marketData.experience}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Location Preference:</span>
              <span className="text-white font-medium">{marketData.location}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Expected Salary:</span>
              <span className="text-green-400 font-medium">{marketData.averageSalary}</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-xl font-bold text-white mb-4">Top Skills in Demand</h3>
          <div className="flex flex-wrap gap-2">
            {marketData.topSkills.map((skill, index) => (
              <span key={index} className="bg-[#f0a709]/20 text-[#f0a709] px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-xl font-bold text-white mb-4">Recommended Jobs</h3>
          <div className="space-y-4">
            {jobOpportunities.map((job) => (
              <div key={job.id} className="bg-[#100A1D] p-4 rounded-lg border border-gray-700 hover:border-[#f0a709]/40 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-white font-bold">{job.title}</h4>
                    <p className="text-gray-300">{job.company}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${getMatchColor(job.match)}`}>
                    {job.match}% match
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <FiMapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiDollarSign className="w-4 h-4" />
                    {job.salary}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{job.posted}</span>
                  <button className="bg-[#f0a709] text-black px-4 py-2 rounded-lg hover:bg-[#ffbf4d] transition-colors text-sm">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-xl font-bold text-white mb-4">Salary Trends</h3>
          <div className="space-y-4">
            {salaryTrends.map((trend, index) => (
              <div key={index} className="bg-[#100A1D] p-4 rounded-lg border border-gray-700">
                <h4 className="text-white font-medium mb-2">{trend.role}</h4>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Min: ${trend.min.toLocaleString()}</span>
                  <span className="text-[#f0a709] font-bold">Avg: ${trend.avg.toLocaleString()}</span>
                  <span className="text-gray-400">Max: ${trend.max.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-[#f0a709] h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}