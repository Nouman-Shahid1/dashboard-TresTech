"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";
import PageLoader from "../components/PageLoader";
import { USER_DATA } from "../data/users";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [readNotifications, setReadNotifications] = useState(new Set());
  const { user, logout } = useAuth();
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const sidebarItems = useMemo(() => {
    const adminItems = [
      { icon: "home", label: "Dashboard", href: "/dashboard" },
      { icon: "users", label: "Users", href: "/dashboard/users" },
      { icon: "chart", label: "Analytics", href: "/dashboard/analytics" },
      { icon: "services", label: "Services", href: "/dashboard/services" },
      { icon: "pos", label: "POS System", href: "/dashboard/pos" },
    ];

    const userItems = [
      { icon: "home", label: "Dashboard", href: "/dashboard" },
      { icon: "file", label: "My Documents", href: "/dashboard/documents" },
      { icon: "book", label: "Lessons", href: "/dashboard/lessons" },
      {
        icon: "settings",
        label: "Subscription",
        href: "/dashboard/subscription",
      },
      { icon: "briefcase", label: "Job Market", href: "/dashboard/job-market" },
      { icon: "calendar", label: "Interviews", href: "/dashboard/interviews" },
    ];

    const posItems = [
      { icon: "home", label: "Dashboard", href: "/dashboard" },
      { icon: "pos", label: "POS Terminal", href: "/dashboard/pos-terminal" },
      {
        icon: "chart",
        label: "Sales Analytics",
        href: "/dashboard/pos-analytics",
      },
      { icon: "inventory", label: "Inventory", href: "/dashboard/inventory" },
      { icon: "users", label: "Customers", href: "/dashboard/customers" },
      {
        icon: "settings",
        label: "Subscription",
        href: "/dashboard/pos-subscription",
      },
      {
        icon: "receipt",
        label: "Transactions",
        href: "/dashboard/transactions",
      },
    ];

    if (user?.role === "admin") return adminItems;
    if (user?.role === "pos") return posItems;
    return userItems;
  }, [user?.role]);

  const notifications = useMemo(() => {
    const adminNotifications = [
      {
        id: 1,
        title: "New User Registration",
        message: "Sarah Johnson joined Premium Plan",
        time: "5 min ago",
        type: "user",
      },
      {
        id: 2,
        title: "Payment Received",
        message: "$299 payment from John Smith",
        time: "15 min ago",
        type: "payment",
      },
      {
        id: 3,
        title: "Service Request",
        message: "Michael Brown requested resume review",
        time: "1 hour ago",
        type: "service",
      },
      {
        id: 4,
        title: "System Alert",
        message: "Server maintenance scheduled for tonight",
        time: "2 hours ago",
        type: "system",
      },
    ];

    const userNotifications = [
      {
        id: 1,
        title: "Document Ready",
        message: "Your optimized resume is ready for download",
        time: "10 min ago",
        type: "document",
      },
      {
        id: 2,
        title: "Interview Scheduled",
        message: "Interview with TechCorp on Jan 30, 2025",
        time: "1 hour ago",
        type: "interview",
      },
      {
        id: 3,
        title: "Profile Update",
        message: "LinkedIn profile optimization completed",
        time: "3 hours ago",
        type: "profile",
      },
      {
        id: 4,
        title: "New Job Match",
        message: "5 new job matches found for your profile",
        time: "1 day ago",
        type: "job",
      },
    ];

    const posNotifications = [
      {
        id: 1,
        title: "Low Stock Alert",
        message: "iPhone 15 Pro has only 3 units left",
        time: "5 min ago",
        type: "inventory",
      },
      {
        id: 2,
        title: "Sale Completed",
        message: "Transaction #1234 - $1,299.99",
        time: "15 min ago",
        type: "sale",
      },
      {
        id: 3,
        title: "Daily Report",
        message: "Today's sales: $15,450 (25 transactions)",
        time: "1 hour ago",
        type: "report",
      },
      {
        id: 4,
        title: "System Update",
        message: "POS system updated to v2.1.5",
        time: "2 hours ago",
        type: "system",
      },
    ];

    if (user?.role === "admin") return adminNotifications;
    if (user?.role === "pos") return posNotifications;
    return userNotifications;
  }, [user?.role]);

  const unreadCount = notifications.filter(
    (n) => !readNotifications.has(n.id)
  ).length;

  const markAllAsRead = useCallback(() => {
    const allIds = new Set(notifications.map((n) => n.id));
    setReadNotifications(allIds);
    setNotificationOpen(false);
  }, [notifications]);

  const getIcon = (iconName) => {
    const icons = {
      home: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      ),
      chart: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
      users: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        />
      ),
      mail: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
      calendar: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      ),
      settings: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
      ),
      file: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
      book: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      ),
      briefcase: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6"
        />
      ),
      pos: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      ),
      services: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      ),
      inventory: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      ),
      receipt: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
    };
    return icons[iconName] || icons.home;
  };

  return (
    <ProtectedRoute>
      <PageLoader />
      <div
        className="h-screen bg-gradient-to-br from-[#0F0828] to-[#100A1D] flex overflow-hidden"
        suppressHydrationWarning
      >
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-[#1A1335] to-[#100A1D] border-r border-[#f0a709]/20 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex lg:flex-col`}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-[#f0a709]/20">
            <h1 className="text-xl font-bold text-white">
              <span className="text-[#f0a709]">Trestech</span> Global
            </h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 mt-8 px-4">
            <div className="space-y-2">
              {sidebarItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#f0a709] text-[#100A1D]"
                        : "text-gray-300 hover:bg-[#f0a709]/10 hover:text-[#f0a709]"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {getIcon(item.icon)}
                    </svg>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:ml-0">
          {/* Header */}
          <header className="bg-[#1A1335]/50 backdrop-blur-sm border-b border-[#f0a709]/20 sticky top-0 z-40">
            <div className="flex items-center justify-between h-16 px-6">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden text-gray-400 hover:text-white mr-4 cursor-pointer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <h2 className="text-xl font-semibold text-white">
                  {sidebarItems.find((item) => item.href === pathname)?.label ||
                    "Dashboard"}
                </h2>
              </div>

              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <div className="relative" ref={notificationRef}>
                  <button
                    onClick={() => setNotificationOpen(!notificationOpen)}
                    className="relative text-gray-400 hover:text-[#f0a709] transition-colors cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a2 2 0 01-3.46 0"
                      />
                    </svg>
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                        {unreadCount}
                      </span>
                    )}
                  </button>

                  {notificationOpen && (
                    <div className="absolute right-0 mt-2 w-80 bg-[#1A1335] border border-[#f0a709]/20 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
                      <div className="p-3 border-b border-gray-700">
                        <h3 className="text-white font-medium">
                          Notifications
                        </h3>
                      </div>
                      <div className="py-2">
                        {notifications.map((notification) => {
                          const isRead = readNotifications.has(notification.id);
                          return (
                            <div
                              key={notification.id}
                              className={`px-4 py-3 hover:bg-[#f0a709]/10 transition-colors border-b border-gray-700/50 last:border-b-0 cursor-pointer ${
                                isRead ? "opacity-60" : ""
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <div
                                  className={`w-2 h-2 rounded-full mt-2 ${
                                    notification.type === "user"
                                      ? "bg-blue-400"
                                      : notification.type === "payment"
                                      ? "bg-green-400"
                                      : notification.type === "service"
                                      ? "bg-purple-400"
                                      : notification.type === "system"
                                      ? "bg-red-400"
                                      : notification.type === "document"
                                      ? "bg-[#f0a709]"
                                      : notification.type === "interview"
                                      ? "bg-cyan-400"
                                      : notification.type === "profile"
                                      ? "bg-pink-400"
                                      : notification.type === "inventory"
                                      ? "bg-orange-400"
                                      : notification.type === "sale"
                                      ? "bg-green-500"
                                      : notification.type === "report"
                                      ? "bg-blue-500"
                                      : "bg-green-400"
                                  } ${isRead ? "opacity-50" : ""}`}
                                ></div>
                                <div className="flex-1">
                                  <h4
                                    className={`text-sm font-medium ${
                                      isRead ? "text-gray-400" : "text-white"
                                    }`}
                                  >
                                    {notification.title}
                                  </h4>
                                  <p className="text-gray-400 text-xs mt-1">
                                    {notification.message}
                                  </p>
                                  <p className="text-gray-500 text-xs mt-1">
                                    {notification.time}
                                  </p>
                                </div>
                                {!isRead && (
                                  <div className="w-2 h-2 bg-[#f0a709] rounded-full mt-2"></div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="p-3 border-t border-gray-700">
                        <button
                          onClick={markAllAsRead}
                          className="w-full text-[#f0a709] text-sm hover:text-[#ffc107] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={unreadCount === 0}
                        >
                          {unreadCount > 0
                            ? `Mark all as read (${unreadCount})`
                            : "All notifications read"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Admin Logout Button */}
                {user?.role === "admin" && (
                  <button
                    onClick={handleLogout}
                    className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </button>
                )}
                {user?.role !== "admin" && (
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() =>
                        setProfileDropdownOpen(!profileDropdownOpen)
                      }
                      className="flex items-center space-x-2 hover:bg-[#f0a709]/10 rounded-lg p-1 transition-colors cursor-pointer"
                    >
                      <div className="w-8 h-8 bg-[#f0a709] rounded-full flex items-center justify-center">
                        <span className="text-[#100A1D] font-bold text-sm">
                          {user?.username?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <svg
                        className={`w-4 h-4 text-gray-400 transition-transform ${
                          profileDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {profileDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-[#1A1335] border border-[#f0a709]/20 rounded-lg shadow-xl z-50">
                        <div className="p-3 border-b border-gray-700">
                          <p className="text-white font-medium">
                            {USER_DATA[user?.username]?.name || user?.username}
                          </p>
                        </div>
                        <div className="py-2">
                          <Link
                            href="/dashboard/profile"
                            className="w-full flex items-center px-4 py-2 text-gray-300 hover:bg-[#f0a709]/10 hover:text-[#f0a709] transition-colors cursor-pointer"
                          >
                            <svg
                              className="w-4 h-4 mr-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            Profile
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center px-4 py-2 text-gray-300 hover:bg-red-500/10 hover:text-red-500 transition-colors cursor-pointer"
                          >
                            <svg
                              className="w-4 h-4 mr-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                              />
                            </svg>
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto scrollbar-thin">
            {children}
          </main>
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
      </div>
    </ProtectedRoute>
  );
}
