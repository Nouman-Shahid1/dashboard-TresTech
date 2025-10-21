"use client";

import { useState, useMemo, useCallback } from "react";
import { useDocuments } from "../../contexts/DocumentContext";
import { useAuth } from "../../contexts/AuthContext";

export default function DocumentsPage() {
  const { getUserDocuments } = useDocuments();
  const { user } = useAuth();
  
  const adminDocuments = getUserDocuments(user?.username || "john.smith");
  const allDocuments = adminDocuments.map(doc => ({
    id: doc.id,
    name: doc.name,
    type: doc.chip || "Document",
    size: doc.size,
    date: doc.uploadDate,
    status: "Ready",
    description: doc.description || "Document uploaded by admin",
    url: doc.fileContent || "#",
    isAdminDoc: true,
    fileData: doc
  })); 

  const handleDownload = useCallback((doc) => {
    const link = document.createElement('a');
    link.href = doc.url;
    link.download = doc.name;
    if (!doc.isAdminDoc) {
      link.target = '_blank';
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleView = useCallback((doc) => {
    window.open(doc.url, '_blank');
  }, []);

  const getTypeIcon = useCallback((type) => {
    const icons = {
      Resume: <svg className="w-5 h-5 text-[#f0a709]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
      Report: <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    };
    return icons[type] || <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
  }, []);

  const getTypeColor = (type) => {
    switch (type) {
      case 'Resume': return 'bg-[#f0a709]/20 text-[#f0a709]';
      case 'Report': return 'bg-blue-500/20 text-blue-400';
      case 'Templates': return 'bg-purple-500/20 text-purple-400';
      case 'Interview Prep': return 'bg-red-500/20 text-red-400';
      case 'Guide': return 'bg-cyan-500/20 text-cyan-400';
      case 'Portfolio': return 'bg-pink-500/20 text-pink-400';
      default: return 'bg-green-500/20 text-green-400';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Documents</h1>
        <p className="text-gray-400">Access and download your service documents</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-lg font-bold text-white mb-2">Total Files</h3>
          <p className="text-3xl font-bold text-[#f0a709]">{allDocuments.length}</p>
        </div>
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-lg font-bold text-white mb-2">Documents</h3>
          <p className="text-3xl font-bold text-[#f0a709]">{allDocuments.filter(d => d.type === 'Document').length}</p>
        </div>
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-lg font-bold text-white mb-2">Resumes</h3>
          <p className="text-3xl font-bold text-purple-400">{allDocuments.filter(d => d.type === 'Resume').length}</p>
        </div>
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h3 className="text-lg font-bold text-white mb-2">Guides</h3>
          <p className="text-3xl font-bold text-red-400">{allDocuments.filter(d => d.type === 'Guide').length}</p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
        <h3 className="text-xl font-bold text-white mb-6">Your Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allDocuments.map((doc) => (
            <div key={doc.id} className="bg-[#100A1D] p-4 rounded-lg border border-gray-700 hover:border-[#f0a709]/40 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 bg-[#f0a709]/20 rounded-lg flex items-center justify-center">
                  {getTypeIcon(doc.type)}
                </div>
                <span className={`px-2 py-1 rounded text-xs ${getTypeColor(doc.type)}`}>
                  {doc.type}
                </span>
              </div>
              
              <h4 className="text-white font-medium mb-2 line-clamp-2">{doc.name}</h4>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">{doc.description}</p>
              
              <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                <span>{doc.size}</span>
                <span>{doc.date}</span>
              </div>
              
              <button 
                onClick={() => handleDownload(doc)}
                className="w-full bg-[#f0a709] text-black py-2 px-3 rounded-lg hover:bg-[#ffbf4d] transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer"
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