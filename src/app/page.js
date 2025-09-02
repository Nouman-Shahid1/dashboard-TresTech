"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff, FiLock, FiMail, FiLogIn } from "react-icons/fi";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (username && password) {
        router.push("/dashboard");
      } else {
        setError("Please enter both username and password");
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen pt-[120px] bg-gradient-to-br from-[#0F0828] to-[#100A1D] flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Company Info Section */}
          <div className="hidden lg:flex flex-col justify-center p-8">
            <div className="mb-8">
              <h1 className="text-5xl font-bold text-white mb-6">
                Welcome to{" "}
                <span className="text-[#f0a709]">Trestech Global</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Your trusted partner in digital transformation and innovative
                technology solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#f0a709] rounded-full flex items-center justify-center">
                  <FiLogIn className="w-6 h-6 text-[#100A1D]" />
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
                  <FiLogIn className="w-8 h-8 text-[#100A1D]" />
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
              <form className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg text-sm">
                    {error}
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
                      <FiMail className="h-5 w-5 text-[#f0a709]" />
                    </div>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      className="bg-[#1A1335] border border-gray-700 text-white placeholder-gray-500 rounded-lg block w-full pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#f0a709] focus:border-transparent transition-all duration-300"
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
                      <FiLock className="h-5 w-5 text-[#f0a709]" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="bg-[#1A1335] border border-gray-700 text-white placeholder-gray-500 rounded-lg block w-full pl-10 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-[#f0a709] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FiEyeOff className="h-5 w-5 text-gray-500 hover:text-[#f0a709] transition-colors" />
                      ) : (
                        <FiEye className="h-5 w-5 text-gray-500 hover:text-[#f0a709] transition-colors" />
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
                  type="button"
                  className="w-full cursor-pointer bg-[#f0a709] hover:bg-[#ffbf4d] text-[#100A1D] font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f0a709] focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <FiLogIn className="mr-2" />
                  Sign In
                </button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-[#100A1D] text-gray-400">
                      New to Trestech Global?
                    </span>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <a
                    href="#"
                    className="text-[#f0a709] hover:text-[#ffbf4d] transition-colors font-medium"
                  >
                    Create an account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

