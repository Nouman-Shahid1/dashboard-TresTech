"use client";

import React from "react";

export default function POSTransactions() {
  // Static sample data for transactions
  const transactions = [
    {
      id: 1,
      date: "2025-10-20",
      amount: "$120.00",
      type: "Sale",
      status: "Completed",
    },
    {
      id: 2,
      date: "2025-10-21",
      amount: "$75.50",
      type: "Refund",
      status: "Completed",
    },
    {
      id: 3,
      date: "2025-10-22",
      amount: "$200.00",
      type: "Sale",
      status: "Pending",
    },
  ];

  const getStatusColor = (status) => {
    if (status === "Completed") return "bg-green-500/20 text-green-400";
    if (status === "Pending") return "bg-yellow-500/20 text-yellow-400";
    return "bg-red-500/20 text-red-400";
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Transactions Management
        </h1>
        <p className="text-gray-400">View and manage POS transactions</p>
      </div>

      <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl border border-[#f0a709]/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#f0a709]/10">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#f0a709]">
                  ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#f0a709]">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#f0a709]">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#f0a709]">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#f0a709]">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#f0a709]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-[#f0a709]/5">
                  <td className="px-6 py-4 text-white">{tx.id}</td>
                  <td className="px-6 py-4 text-white">{tx.date}</td>
                  <td className="px-6 py-4 text-white">{tx.amount}</td>
                  <td className="px-6 py-4 text-white">{tx.type}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded text-xs ${getStatusColor(
                        tx.status
                      )}`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="bg-[#f0a709] text-black px-3 py-1 rounded text-sm hover:bg-[#ffbf4d] transition-colors cursor-pointer">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
