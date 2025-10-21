"use client";

import React, { useState } from "react";
import { FiUser, FiMail, FiPhone, FiBriefcase, FiMapPin, FiEdit2, FiSave } from "react-icons/fi";
import { useAuth } from "../../contexts/AuthContext";
import { USER_DATA } from "../../data/users";

export default function ProfilePage() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const currentUser = USER_DATA[user?.username] || USER_DATA["john.smith"];
  const [profile, setProfile] = useState({
    name: currentUser.name || "",
    email: currentUser.email || "user@example.com",
    phone: "+1 (555) 123-4567",
    designation: currentUser.designation || "Software Engineer",
    experience: currentUser.experience || "5+ years",
    location: currentUser.location || "Remote/Hybrid",
    subscription: currentUser.subscriptionPlan || "Premium Advantage",
    joinDate: currentUser.joinDate || "January 15, 2024"
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save profile logic here
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
        <p className="text-gray-400">Manage your account information</p>
      </div>

      <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Personal Information</h3>
          <button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="bg-[#f0a709] text-black px-4 py-2 rounded-lg hover:bg-[#ffbf4d] transition-colors flex items-center gap-2"
          >
            {isEditing ? <FiSave className="w-4 h-4" /> : <FiEdit2 className="w-4 h-4" />}
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-400 text-sm mb-2">Full Name</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
                className="w-full bg-[#100A1D] border border-gray-700 text-white rounded-lg px-3 py-2"
              />
            ) : (
              <p className="text-white">{profile.name}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                className="w-full bg-[#100A1D] border border-gray-700 text-white rounded-lg px-3 py-2"
              />
            ) : (
              <p className="text-white">{profile.email}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">Phone</label>
            {isEditing ? (
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                className="w-full bg-[#100A1D] border border-gray-700 text-white rounded-lg px-3 py-2"
              />
            ) : (
              <p className="text-white">{profile.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">Designation</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.designation}
                onChange={(e) => setProfile({...profile, designation: e.target.value})}
                className="w-full bg-[#100A1D] border border-gray-700 text-white rounded-lg px-3 py-2"
              />
            ) : (
              <p className="text-white">{profile.designation}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">Experience</label>
            <p className="text-white">{profile.experience}</p>
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">Location</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.location}
                onChange={(e) => setProfile({...profile, location: e.target.value})}
                className="w-full bg-[#100A1D] border border-gray-700 text-white rounded-lg px-3 py-2"
              />
            ) : (
              <p className="text-white">{profile.location}</p>
            )}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <h4 className="text-lg font-bold text-white mb-4">Subscription Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Current Plan</label>
              <p className="text-[#f0a709] font-bold">{profile.subscription}</p>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Member Since</label>
              <p className="text-white">{profile.joinDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}