"use client";

import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    if (typeof window !== 'undefined') {
      const username = localStorage.getItem('username');
      const userRole = localStorage.getItem('userRole');
      
      if (username && userRole) {
        setIsAuthenticated(true);
        setUser({ username, role: userRole });
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    }
    setLoading(false);
  };

  const login = (username, role) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('username', username);
      localStorage.setItem('userRole', role);
    }
    setIsAuthenticated(true);
    setUser({ username, role });
  };

  const logout = async () => {
    setIsLoggingOut(true);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('username');
      localStorage.removeItem('userRole');
    }
    setIsAuthenticated(false);
    setUser(null);
    
    await new Promise(resolve => setTimeout(resolve, 500));
    window.location.href = '/login';
  };

  const contextValue = useMemo(() => ({
    isAuthenticated,
    user,
    loading,
    isLoggingOut,
    login,
    logout,
    checkAuth
  }), [isAuthenticated, user, loading, isLoggingOut]);

  return (
    <AuthContext.Provider value={contextValue}>
      {isLoggingOut ? (
        <div className="min-h-screen bg-gradient-to-br from-[#0F0828] to-[#100A1D] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#f0a709] mx-auto mb-4"></div>
            <p className="text-white text-lg">Signing out...</p>
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};