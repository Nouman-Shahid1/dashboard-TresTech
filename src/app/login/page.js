"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setError("");
      setSuccess("");

      try {
        await new Promise((resolve) => setTimeout(resolve, 800));

        const credentials = {
          // Admin
          "trestech.admin": { password: "TresTech@2025", role: "admin" },

          // Users
          "john.smith": { password: "John@2025", role: "user" },
          "sarah.johnson": { password: "Sarah@2025", role: "user" },
          "michael.brown": { password: "Michael@2025", role: "user" },
          "emily.davis": { password: "Emily@2025", role: "user" },

          // POS User
          "alex.martinez": { password: "POS@2025", role: "pos" },
        };

        const userCred = credentials[username];
        const isValid = userCred && userCred.password === password;

        if (isValid) {
          setSuccess("Login successful! Redirecting to dashboard...");
          login(username, userCred.role);
          setTimeout(() => {
            router.push("/dashboard");
          }, 1500);
        } else {
          setError("Invalid credentials. Please try again.");
        }
      } catch {
        setError("Invalid credentials. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
    [username, password, login, router]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0828] to-[#100A1D] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Company Info Section */}
        <div className="hidden lg:flex flex-col justify-center p-8">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-6">
              Welcome to <span className="text-[#f0a709]">Trestech Global</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your trusted partner in digital transformation and innovative
              technology solutions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#f0a709] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#100A1D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Secure Access
                </h3>
                <p className="text-gray-400">
                  Protected login with enterprise-grade security
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#f0a709] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#100A1D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Fast Performance
                </h3>
                <p className="text-gray-400">
                  Lightning-fast access to your dashboard
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#f0a709] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#100A1D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  24/7 Support
                </h3>
                <p className="text-gray-400">
                  Round-the-clock assistance when you need it
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Login Form Section */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-2xl shadow-2xl p-8 border border-[#f0a709]/20">
            {/* Mobile Header */}
            <div className="text-center mb-8 lg:hidden">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f0a709] rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-[#100A1D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-400">
                Sign in to your Trestech Global account
              </p>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:block text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Sign In</h2>
              <p className="text-gray-400">Access your account</p>
            </div>

            {/* Login Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-lg text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {success}
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Username or Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-[#f0a709]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-[#1A1335] border border-gray-700 text-white placeholder-gray-500 rounded-xl block w-full pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#f0a709] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your username or email"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-[#f0a709]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-[#1A1335] border border-gray-700 text-white placeholder-gray-500 rounded-xl block w-full pl-10 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-[#f0a709] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg
                        className="h-5 w-5 text-gray-500 hover:text-[#f0a709] transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 text-gray-500 hover:text-[#f0a709] transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <div className="text-sm">
                  <div className="text-[#f0a709] cursor-pointer hover:text-[#ffbf4d] transition-colors">
                    Forgot password?
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full cursor-pointer bg-[#f0a709] hover:bg-[#ffbf4d] text-[#100A1D] font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f0a709] focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#100A1D] mr-2"></div>
                    Signing In...
                  </>
                ) : (
                  <>
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    Sign In
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
