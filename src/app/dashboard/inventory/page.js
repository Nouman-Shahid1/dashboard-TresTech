"use client";

import { useState } from "react";

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const inventory = [
    { id: 1, name: "iPhone 15 Pro", category: "Smartphones", stock: 15, price: 1299.99, status: "In Stock" },
    { id: 2, name: "Samsung Galaxy S24", category: "Smartphones", stock: 8, price: 999.99, status: "In Stock" },
    { id: 3, name: "MacBook Air M3", category: "Laptops", stock: 5, price: 1499.99, status: "Low Stock" },
    { id: 4, name: "iPad Pro", category: "Tablets", stock: 12, price: 899.99, status: "In Stock" },
    { id: 5, name: "AirPods Pro", category: "Accessories", stock: 25, price: 249.99, status: "In Stock" },
    { id: 6, name: "Apple Watch", category: "Wearables", stock: 18, price: 399.99, status: "In Stock" },
    { id: 7, name: "Dell XPS 13", category: "Laptops", stock: 3, price: 1199.99, status: "Low Stock" },
    { id: 8, name: "Sony WH-1000XM5", category: "Accessories", stock: 0, price: 349.99, status: "Out of Stock" },
  ];

  const categories = ["all", "Smartphones", "Laptops", "Tablets", "Accessories", "Wearables"];

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "In Stock": return "text-green-400 bg-green-400/20";
      case "Low Stock": return "text-yellow-400 bg-yellow-400/20";
      case "Out of Stock": return "text-red-400 bg-red-400/20";
      default: return "text-gray-400 bg-gray-400/20";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Inventory Management</h1>
        <button className="bg-[#f0a709] hover:bg-[#ffbf4d] text-[#100A1D] font-bold py-2 px-4 rounded-lg transition-colors">
          Add Product
        </button>
      </div>

      {/* Filters */}
      <div className="bg-[#1A1335] rounded-xl p-6 border border-[#f0a709]/20">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#100A1D] border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f0a709] focus:border-transparent"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-[#100A1D] border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f0a709] focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === "all" ? "All Categories" : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Inventory Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#1A1335] rounded-xl p-6 border border-[#f0a709]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Products</p>
              <p className="text-2xl font-bold text-white">{inventory.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1335] rounded-xl p-6 border border-[#f0a709]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">In Stock</p>
              <p className="text-2xl font-bold text-green-400">{inventory.filter(item => item.status === "In Stock").length}</p>
            </div>
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1335] rounded-xl p-6 border border-[#f0a709]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Low Stock</p>
              <p className="text-2xl font-bold text-yellow-400">{inventory.filter(item => item.status === "Low Stock").length}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1335] rounded-xl p-6 border border-[#f0a709]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Out of Stock</p>
              <p className="text-2xl font-bold text-red-400">{inventory.filter(item => item.status === "Out of Stock").length}</p>
            </div>
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-[#1A1335] rounded-xl border border-[#f0a709]/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#100A1D]">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredInventory.map((item) => (
                <tr key={item.id} className="hover:bg-[#100A1D]/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-white font-medium">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-300">{item.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-white">{item.stock}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-[#f0a709] font-medium">${item.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-400 hover:text-blue-300">Edit</button>
                      <button className="text-red-400 hover:text-red-300">Delete</button>
                    </div>
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