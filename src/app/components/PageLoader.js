"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#0F0828] to-[#100A1D] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#f0a709] mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  );
}