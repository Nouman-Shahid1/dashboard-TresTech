"use client";

import React, { useState } from "react";
import { FiPlay, FiBookOpen, FiCheckCircle, FiClock, FiDownload } from "react-icons/fi";

export default function LessonsPage() {
  const [lessons] = useState([
    {
      id: 1,
      title: "LinkedIn Profile Optimization Masterclass",
      description: "Learn how to create a compelling LinkedIn profile that attracts recruiters",
      duration: "45 min",
      status: "completed",
      type: "video",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: 2,
      title: "ATS-Friendly Resume Writing",
      description: "Master the art of writing resumes that pass applicant tracking systems",
      duration: "30 min",
      status: "in-progress",
      type: "video",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      id: 3,
      title: "Interview Preparation Guide",
      description: "Comprehensive guide to ace technical and behavioral interviews",
      duration: "60 min",
      status: "not-started",
      type: "document",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
      id: 4,
      title: "Job Search Strategy",
      description: "Effective strategies for finding and applying to the right opportunities",
      duration: "25 min",
      status: "completed",
      type: "video",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      id: 5,
      title: "Salary Negotiation Tactics",
      description: "Learn how to negotiate your salary and benefits package",
      duration: "35 min",
      status: "not-started",
      type: "document",
      url: "https://www.africau.edu/images/default/sample.pdf"
    }
  ]);

  const handleDownload = (lesson) => {
    if (lesson.type === 'document') {
      const link = document.createElement('a');
      link.href = lesson.url;
      link.download = `${lesson.title}.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(lesson.url, '_blank');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/20';
      case 'in-progress': return 'text-[#f0a709] bg-[#f0a709]/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <FiCheckCircle className="w-4 h-4" />;
      case 'in-progress': return <FiPlay className="w-4 h-4" />;
      default: return <FiClock className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Lessons & Training</h1>
        <p className="text-gray-400">Access your learning materials and track progress</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-lg font-bold text-white mb-2">Total Lessons</h3>
          <p className="text-3xl font-bold text-[#f0a709]">{lessons.length}</p>
        </div>
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-lg font-bold text-white mb-2">Completed</h3>
          <p className="text-3xl font-bold text-green-400">{lessons.filter(l => l.status === 'completed').length}</p>
        </div>
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-lg font-bold text-white mb-2">In Progress</h3>
          <p className="text-3xl font-bold text-[#f0a709]">{lessons.filter(l => l.status === 'in-progress').length}</p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
        <h3 className="text-xl font-bold text-white mb-6">Your Learning Path</h3>
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="bg-[#100A1D] p-4 rounded-lg border border-gray-700 hover:border-[#f0a709]/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#f0a709]/20 rounded-lg flex items-center justify-center">
                      {lesson.type === 'video' ? <FiPlay className="w-5 h-5 text-[#f0a709]" /> : <FiBookOpen className="w-5 h-5 text-[#f0a709]" />}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{lesson.title}</h4>
                      <p className="text-gray-400 text-sm">{lesson.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-400">{lesson.duration}</span>
                    <span className={`px-2 py-1 rounded text-xs flex items-center gap-1 ${getStatusColor(lesson.status)}`}>
                      {getStatusIcon(lesson.status)}
                      {lesson.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {lesson.type === 'document' && (
                    <button 
                      onClick={() => handleDownload(lesson)}
                      className="text-gray-400 hover:text-[#f0a709] transition-colors cursor-pointer"
                    >
                      <FiDownload className="w-5 h-5" />
                    </button>
                  )}
                  <button 
                    onClick={() => handleDownload(lesson)}
                    className="bg-[#f0a709] text-black px-4 py-2 rounded-lg hover:bg-[#ffbf4d] transition-colors cursor-pointer"
                  >
                    {lesson.status === 'completed' ? 'Review' : lesson.status === 'in-progress' ? 'Continue' : 'Start'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}