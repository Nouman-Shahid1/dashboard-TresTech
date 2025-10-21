"use client";

import React, { useState } from "react";
import { FiCalendar, FiClock, FiMapPin, FiPhone, FiVideo, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export default function InterviewsPage() {
  const [interviews] = useState([
    {
      id: 1,
      company: "Microsoft",
      position: "Senior Software Engineer",
      date: "2024-02-15",
      time: "10:00 AM",
      type: "Video Call",
      status: "upcoming",
      interviewer: "Sarah Johnson",
      round: "Technical Round 1"
    },
    {
      id: 2,
      company: "Google",
      position: "Full Stack Developer",
      date: "2024-02-18",
      time: "2:30 PM",
      type: "Phone Call",
      status: "waiting-feedback",
      interviewer: "Mike Chen",
      round: "HR Screening"
    },
    {
      id: 3,
      company: "Amazon",
      position: "Cloud Solutions Architect",
      date: "2024-02-20",
      time: "11:15 AM",
      type: "On-site",
      status: "upcoming",
      interviewer: "David Wilson",
      round: "Final Round"
    },
    {
      id: 4,
      company: "Apple",
      position: "iOS Developer",
      date: "2024-02-12",
      time: "3:00 PM",
      type: "Video Call",
      status: "rejected",
      interviewer: "Lisa Park",
      round: "Technical Assessment"
    },
    {
      id: 5,
      company: "Tesla",
      position: "Software Engineer",
      date: "2024-02-10",
      time: "1:00 PM",
      type: "Video Call",
      status: "waiting-feedback",
      interviewer: "John Smith",
      round: "System Design"
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'text-[#f0a709] bg-[#f0a709]/20';
      case 'waiting-feedback': return 'text-blue-400 bg-blue-500/20';
      case 'rejected': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'upcoming': return <FiAlertCircle className="w-4 h-4" />;
      case 'waiting-feedback': return <FiClock className="w-4 h-4" />;
      case 'rejected': return <FiCheckCircle className="w-4 h-4" />;
      default: return <FiClock className="w-4 h-4" />;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Video Call': return <FiVideo className="w-5 h-5 text-[#f0a709]" />;
      case 'Phone Call': return <FiPhone className="w-5 h-5 text-blue-400" />;
      case 'On-site': return <FiMapPin className="w-5 h-5 text-green-400" />;
      default: return <FiCalendar className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Interviews</h1>
        <p className="text-gray-400">Track your interview schedule and progress</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-lg font-bold text-white mb-2">Total Interviews</h3>
          <p className="text-3xl font-bold text-[#f0a709]">{interviews.length}</p>
        </div>
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-lg font-bold text-white mb-2">Upcoming</h3>
          <p className="text-3xl font-bold text-[#f0a709]">{interviews.filter(i => i.status === 'upcoming').length}</p>
        </div>
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-lg font-bold text-white mb-2">Waiting Feedback</h3>
          <p className="text-3xl font-bold text-blue-400">{interviews.filter(i => i.status === 'waiting-feedback').length}</p>
        </div>
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-lg font-bold text-white mb-2">This Week</h3>
          <p className="text-3xl font-bold text-blue-400">2</p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
        <h3 className="text-xl font-bold text-white mb-6">Interview Schedule</h3>
        <div className="space-y-4">
          {interviews.map((interview) => (
            <div key={interview.id} className="bg-[#100A1D] p-4 rounded-lg border border-gray-700 hover:border-[#f0a709]/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-[#f0a709]/20 rounded-lg flex items-center justify-center">
                      {getTypeIcon(interview.type)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{interview.company}</h4>
                      <p className="text-gray-300">{interview.position}</p>
                      <p className="text-gray-400 text-sm">{interview.round}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="w-4 h-4 text-[#f0a709]" />
                      <span className="text-gray-300">{interview.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock className="w-4 h-4 text-[#f0a709]" />
                      <span className="text-gray-300">{interview.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Interviewer:</span>
                      <span className="text-white">{interview.interviewer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Type:</span>
                      <span className="text-white">{interview.type}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${getStatusColor(interview.status)}`}>
                    {getStatusIcon(interview.status)}
                    {interview.status}
                  </span>
                  {interview.status === 'upcoming' && (
                    <button className="bg-[#f0a709] text-black px-4 py-2 rounded-lg hover:bg-[#ffbf4d] transition-colors">
                      Prepare
                    </button>
                  )}
                  {interview.status === 'waiting-feedback' && (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                      Follow Up
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
        <h3 className="text-xl font-bold text-white mb-4">Interview Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-[#f0a709] font-bold mb-2">Before the Interview:</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Research the company and role thoroughly</li>
              <li>• Prepare answers for common questions</li>
              <li>• Test your technology for video calls</li>
              <li>• Prepare questions to ask the interviewer</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#f0a709] font-bold mb-2">During the Interview:</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Arrive 5-10 minutes early</li>
              <li>• Maintain good eye contact and posture</li>
              <li>• Use specific examples in your answers</li>
              <li>• Ask thoughtful questions about the role</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}