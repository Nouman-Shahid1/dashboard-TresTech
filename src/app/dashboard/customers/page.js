"use client";

import React from "react";

export default function POSCustomers() {
  // Static sample data for customers
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      totalSpent: "$500.00",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      totalSpent: "$350.00",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "555-123-4567",
      totalSpent: "$275.00",
      status: "Active",
    },
  ];

  const getStatusColor = (status) => {
    return status === "Active"
      ? "bg-green-500/20 text-green-400"
      : "bg-red-500/20 text-red-400";
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Customers Management
        </h1>
        <p className="text-gray-400">
          Manage POS customer accounts and details
        </p>
      </div>

      <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl border border-[#f0a709]/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#f0a709]/10">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#f0a709]">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#f0a709]">
                  Phone
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#f0a709]">
                  Total Spent
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
              {customers.map((cust) => (
                <tr key={cust.id} className="hover:bg-[#f0a709]/5">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-white font-medium">{cust.name}</div>
                      <div className="text-gray-400 text-sm">{cust.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white">{cust.phone}</td>
                  <td className="px-6 py-4 text-white">{cust.totalSpent}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded text-xs ${getStatusColor(
                        cust.status
                      )}`}
                    >
                      {cust.status}
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
