"use client";

import React from "react";
import { useAuth } from "../contexts/AuthContext";
import AdminDashboard from "../components/AdminDashboard";
import UserDashboard from "../components/UserDashboard";
import POSDashboard from "../components/POSDashboard";

export default function Dashboard() {
  const { user } = useAuth();

  if (user?.role === "admin") {
    return <AdminDashboard />;
  }
  if (user?.role === "pos") {
    return <POSDashboard />;
  }
  return <UserDashboard />;
}
