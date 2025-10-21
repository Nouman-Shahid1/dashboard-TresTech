"use client";

import { useState, useCallback } from "react";
import { useDocuments } from "../../contexts/DocumentContext";
import { useAuth } from "../../contexts/AuthContext";
import { ALL_USERS } from "../../data/users";

export default function UsersPage() {
  const [users] = useState(ALL_USERS);

  const [selectedUser, setSelectedUser] = useState(null);
  const [chipValue, setChipValue] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const { userDocuments, addDocument, getUserDocuments, deleteDocument } = useDocuments();
  const { user } = useAuth();

  const handleFileSelect = useCallback((event) => {
    setSelectedFiles(event.target.files);
  }, []);

  const handleFileUpload = useCallback((userId) => {
    if (!selectedFiles) return;
    
    setIsUploading(true);
    const files = Array.from(selectedFiles);
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileData = {
          id: Date.now() + Math.random(),
          name: file.name,
          size: (file.size / 1024).toFixed(2) + " KB",
          type: file.type,
          uploadDate: new Date().toISOString().split('T')[0],
          fileContent: e.target.result,
          chip: chipValue || 'Document',
          description: description || 'Document uploaded by admin'
        };
        addDocument(userId, fileData);
      };
      reader.readAsDataURL(file);
    });
    
    // Clear form after upload
    setChipValue('');
    setDescription('');
    setSelectedFiles(null);
    setIsUploading(false);
    
    // Clear file input
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = '';
  }, [addDocument, chipValue, description, selectedFiles]);

  const handleDownload = useCallback((fileData) => {
    const link = document.createElement('a');
    link.href = fileData.fileContent;
    link.download = fileData.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleDelete = useCallback((userId, documentId) => {
    if (confirm('Are you sure you want to delete this document?')) {
      deleteDocument(userId, documentId);
    }
  }, [deleteDocument]);

  const getStatusColor = (status) => {
    return status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400';
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Users Management</h1>
        <p className="text-gray-400">Manage user accounts and documents</p>
      </div>

      <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl border border-[#f0a709]/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#f0a709]/10">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#f0a709]">User</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#f0a709]">Designation</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#f0a709]">Subscription</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#f0a709]">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#f0a709]">Documents</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#f0a709]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {users.map((userData) => (
                <tr key={userData.id} className="hover:bg-[#f0a709]/5">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-white font-medium">{userData.name}</div>
                      <div className="text-gray-400 text-sm">{userData.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white">{userData.designation}</td>
                  <td className="px-6 py-4">
                    <div className="text-white">{userData.subscriptionPlan}</div>
                    <div className="text-gray-400 text-sm">Since {userData.joinDate}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(userData.subscriptionStatus)}`}>
                      {userData.subscriptionStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white">{getUserDocuments(userData.id).length}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedUser(userData)}
                      className="bg-[#f0a709] text-black px-3 py-1 rounded text-sm hover:bg-[#ffbf4d] transition-colors cursor-pointer"
                    >
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Manage {selectedUser.name}</h2>
              <button
                onClick={() => setSelectedUser(null)}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#100A1D] p-4 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-3">User Details</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="text-gray-400">Email:</span> <span className="text-white">{selectedUser.email}</span></div>
                  <div><span className="text-gray-400">Designation:</span> <span className="text-white">{selectedUser.designation}</span></div>
                  <div><span className="text-gray-400">Plan:</span> <span className="text-white">{selectedUser.subscriptionPlan}</span></div>
                  <div><span className="text-gray-400">Status:</span> <span className={`px-2 py-1 rounded text-xs ${getStatusColor(selectedUser.subscriptionStatus)}`}>{selectedUser.subscriptionStatus}</span></div>
                </div>
              </div>

              <div className="bg-[#100A1D] p-4 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-3">Upload Document</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Document Type (Chip)</label>
                    <input
                      type="text"
                      value={chipValue}
                      onChange={(e) => setChipValue(e.target.value)}
                      placeholder="e.g., Resume, Guide, Interview Prep"
                      className="w-full text-white bg-[#1A1335] border border-gray-700 rounded-lg p-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Description</label>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Brief description of the document"
                      className="w-full text-white bg-[#1A1335] border border-gray-700 rounded-lg p-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Select Files</label>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileSelect}
                      className="w-full text-white bg-[#1A1335] border border-gray-700 rounded-lg p-2 text-sm"
                    />
                    {selectedFiles && (
                      <button
                        onClick={() => handleFileUpload(selectedUser.username)}
                        disabled={isUploading}
                        className="mt-2 w-full bg-[#f0a709] text-black py-2 px-4 rounded-lg hover:bg-[#ffbf4d] transition-colors disabled:opacity-50 cursor-pointer"
                      >
                        {isUploading ? 'Uploading...' : `Upload ${selectedFiles.length} file(s)`}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#100A1D] p-4 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-4">Documents ({getUserDocuments(selectedUser.id).length})</h3>
              {getUserDocuments(selectedUser.id).length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getUserDocuments(selectedUser.id).map((file) => (
                    <div key={file.id} className="bg-[#1A1335] p-3 rounded-lg border border-gray-700 relative">
                      <button
                        onClick={() => handleDelete(selectedUser.username, file.id)}
                        className="absolute top-2 right-2 text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                      <div className="flex items-center justify-between mb-2">
                        <svg className="w-8 h-8 text-[#f0a709]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-[#f0a709]/20 text-[#f0a709] px-2 py-1 rounded text-xs">
                          {file.chip || 'Document'}
                        </span>
                      </div>
                      <h4 className="text-white font-medium text-sm mb-1 truncate">{file.name}</h4>
                      <p className="text-gray-400 text-xs mb-1">{file.size} • {file.uploadDate}</p>
                      {file.description && <p className="text-gray-500 text-xs mb-3 line-clamp-2">{file.description}</p>}
                      <button
                        onClick={() => handleDownload(file)}
                        className="w-full bg-[#f0a709] text-black py-1 px-2 rounded text-xs hover:bg-[#ffbf4d] transition-colors cursor-pointer"
                      >
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-center py-8">No documents uploaded yet</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}