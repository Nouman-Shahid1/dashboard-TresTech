"use client";

import POSDashboard from "../../components/POSDashboard";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

export default function POSPage() {
  const { user } = useAuth();
  const userRole = user?.role || "user";
  // Hooks must be called unconditionally and in the same order on every render
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  if (userRole === "pos") {
    return <POSDashboard />;
  }

  const plans = [
    {
      id: 1,
      name: "Basic POS",
      price: "$29",
      period: "/month",
      features: [
        "Up to 100 products",
        "Basic inventory management",
        "Sales reporting",
        "1 user account",
        "Email support",
      ],
      popular: false,
    },
    {
      id: 2,
      name: "Professional POS",
      price: "$79",
      period: "/month",
      features: [
        "Unlimited products",
        "Advanced inventory management",
        "Detailed analytics",
        "5 user accounts",
        "Multi-location support",
        "Priority support",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Enterprise POS",
      price: "$149",
      period: "/month",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "Advanced reporting",
        "Unlimited users",
        "24/7 phone support",
        "Dedicated account manager",
      ],
      popular: false,
    },
  ];

  const features = [
    {
      title: "Inventory Management",
      description:
        "Track stock levels, set reorder points, and manage suppliers efficiently",
      icon: "📦",
    },
    {
      title: "Sales Analytics",
      description:
        "Comprehensive reporting and analytics to understand your business performance",
      icon: "📊",
    },
    {
      title: "Multi-Payment Support",
      description: "Accept cash, cards, mobile payments, and digital wallets",
      icon: "💳",
    },
    {
      title: "Customer Management",
      description:
        "Build customer profiles, track purchase history, and manage loyalty programs",
      icon: "👥",
    },
    {
      title: "Cloud-Based",
      description:
        "Access your data anywhere, anytime with automatic backups and sync",
      icon: "☁️",
    },
    {
      title: "Integration Ready",
      description:
        "Connect with accounting software, e-commerce platforms, and more",
      icon: "🔗",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">POS System</h1>
        <p className="text-gray-400">
          Complete Point of Sale solution for your business
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Choose Our POS?
          </h2>
          <p className="text-gray-400 mb-6">
            Our comprehensive POS system is designed to streamline your business
            operations, increase efficiency, and provide valuable insights into
            your sales performance.
          </p>
          <button
            onClick={() => setShowSubscriptionModal(true)}
            className="bg-[#f0a709] text-black px-6 py-3 rounded-lg hover:bg-[#ffbf4d] transition-colors font-bold cursor-pointer"
          >
            View Subscription Plans
          </button>
        </div>

        <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Stats</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Active Businesses</span>
              <span className="text-white font-bold">2,500+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Transactions Processed</span>
              <span className="text-white font-bold">1M+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Uptime</span>
              <span className="text-green-400 font-bold">99.9%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Customer Satisfaction</span>
              <span className="text-[#f0a709] font-bold">4.8/5</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {showSubscriptionModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20 w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                Choose Your POS Plan
              </h2>
              <button
                onClick={() => setShowSubscriptionModal(false)}
                className="text-gray-400 hover:text-white cursor-pointer"
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-[#100A1D] rounded-xl p-6 border ${
                    plan.popular ? "border-[#f0a709]" : "border-gray-700"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#f0a709] text-black px-3 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-[#f0a709]">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-400"
                      >
                        <svg
                          className="w-4 h-4 text-[#f0a709] mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full py-3 px-4 rounded-lg font-bold transition-colors cursor-pointer ${
                      plan.popular
                        ? "bg-[#f0a709] text-black hover:bg-[#ffbf4d]"
                        : "bg-gray-700 text-white hover:bg-gray-600"
                    }`}
                  >
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>

            {selectedPlan && (
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-400 text-center">
                  You selected the <strong>{selectedPlan.name}</strong> plan.
                  Contact our sales team to get started!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
