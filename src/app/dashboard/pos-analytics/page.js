"use client";

import React from "react";
import {
  SalesLineChart,
  OrdersBarChart,
  InventoryDoughnutChart,
} from "./Chart";

export default function POSAnalyticsPage() {
  const salesData = {
    today: { sales: 15450, transactions: 25, avgTransaction: 618 },
    week: { sales: 89250, transactions: 156, avgTransaction: 572 },
    month: { sales: 345600, transactions: 678, avgTransaction: 510 },
  };

  const topProducts = [
    { name: "iPhone 15 Pro", sold: 12, revenue: 15599.88 },
    { name: "MacBook Air M3", sold: 8, revenue: 11999.92 },
    { name: "Samsung Galaxy S24", sold: 15, revenue: 14999.85 },
    { name: "iPad Pro", sold: 10, revenue: 8999.9 },
    { name: "AirPods Pro", sold: 25, revenue: 6249.75 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Sales Analytics</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-[#f0a709] text-[#100A1D] rounded-lg font-medium">
            Today
          </button>
          <button className="px-4 py-2 bg-[#1A1335] text-gray-300 rounded-lg font-medium border border-gray-700">
            Week
          </button>
          <button className="px-4 py-2 bg-[#1A1335] text-gray-300 rounded-lg font-medium border border-gray-700">
            Month
          </button>
        </div>
      </div>

      {/* Sales Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1A1335] rounded-xl p-6 border border-[#f0a709]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Sales</p>
              <p className="text-2xl font-bold text-white">
                ${salesData.today.sales.toLocaleString()}
              </p>
              <p className="text-green-400 text-sm">+12.5% from yesterday</p>
            </div>
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1335] rounded-xl p-6 border border-[#f0a709]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Transactions</p>
              <p className="text-2xl font-bold text-white">
                {salesData.today.transactions}
              </p>
              <p className="text-blue-400 text-sm">+8.3% from yesterday</p>
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1335] rounded-xl p-6 border border-[#f0a709]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Avg Transaction</p>
              <p className="text-2xl font-bold text-white">
                ${salesData.today.avgTransaction}
              </p>
              <p className="text-[#f0a709] text-sm">+3.7% from yesterday</p>
            </div>
            <div className="w-12 h-12 bg-[#f0a709]/20 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[#f0a709]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className="bg-[#1A1335] rounded-xl p-6 border border-[#f0a709]/20">
          <h2 className="text-xl font-semibold text-white mb-4">
            Top Products
          </h2>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-[#100A1D] rounded-lg"
              >
                <div>
                  <p className="text-white font-medium">{product.name}</p>
                  <p className="text-gray-400 text-sm">
                    {product.sold} units sold
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[#f0a709] font-bold">
                    ${product.revenue.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sales Chart Placeholder */}
        <div className="bg-[#1A1335] rounded-xl p-6 border border-[#f0a709]/20">
          <h2 className="text-xl font-bold text-white mb-4">Sales Trend</h2>
          <SalesLineChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h2 className="text-xl font-bold text-white mb-4">
            Orders This Week
          </h2>
          <OrdersBarChart />
        </div>
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h2 className="text-xl font-bold text-white mb-4">
            Inventory Status
          </h2>
          <InventoryDoughnutChart />
        </div>
      </div>
    </div>
  );
}
