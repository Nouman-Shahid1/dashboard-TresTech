"use client";

import { useState } from "react";

export default function ServicesPage() {
  const [services] = useState([
    {
      id: 1,
      name: "Office 365 L1 IT Support",
      description:
        "Reliable Level 1 IT Support for Microsoft 365 — quick resolutions, user management, and seamless email support to keep your business running smoothly.",
      price: "$15 - $250",
      duration: "Monthly",
      features: [
        "Email setup and configuration",
        "Basic troubleshooting",
        "User account management",
        "Application support",
        "Password resets",
      ],
      status: "Active",
      clients: 41,
    },
    {
      id: 2,
      name: "LinkedIn Optimization",
      description:
        "Professional LinkedIn profile optimization with keyword targeting and industry-specific content",
      price: "$59",
      duration: "3-5 business days",
      features: [
        "Profile headline optimization",
        "Summary rewrite",
        "Experience section enhancement",
        "Skills optimization",
        "Keyword integration",
      ],
      status: "Active",
      clients: 1213,
    },
    {
      id: 3,
      name: "Resume Creation",
      description:
        "ATS-optimized resume creation tailored for your target industry and role",
      price: "$20",
      duration: "2-3 business days",
      features: [
        "ATS optimization",
        "Industry-specific formatting",
        "Keyword optimization",
        "Cover letter included",
        "Multiple format delivery",
      ],
      status: "Active",
      clients: 997,
    },
    {
      id: 4,
      name: "Recruitment Services",
      description:
        "End-to-end recruitment support including job search strategy and interview preparation",
      price: "$105",
      duration: "30-45 days",
      features: [
        "Job search strategy",
        "Application tracking",
        "Interview preparation",
        "Salary negotiation",
        "Follow-up support",
      ],
      status: "Active",
      clients: 58,
    },
    {
      id: 5,
      name: "Career Coaching",
      description:
        "One-on-one career coaching sessions to accelerate your professional growth",
      price: "$15 - $180/hour",
      priceDetail: "$15/hour - $180/hour",
      priceNote: "(Based on Career Domain)",
      duration: "1 hour sessions",
      features: [
        "Career assessment",
        "Goal setting",
        "Action planning",
        "Progress tracking",
        "Ongoing support",
      ],
      status: "Active",
      clients: 43,
    },
    {
      id: 6,
      name: "Interview Preparation",
      description:
        "Comprehensive interview preparation with mock interviews and feedback",
      price: "$210",
      duration: "1-2 weeks",
      features: [
        "Mock interviews",
        "Question bank",
        "Behavioral coaching",
        "Technical prep",
        "Confidence building",
      ],
      status: "Active",
      clients: 56,
    },
    {
      id: 7,
      name: "Portfolio Development",
      description:
        "Professional portfolio creation to showcase your skills and achievements",
      price: "$165",
      duration: "5-7 business days",
      features: [
        "Custom design",
        "Project showcases",
        "Skills demonstration",
        "Mobile responsive",
        "SEO optimized",
      ],
      status: "Active",
      clients: 48,
    },
    {
      id: 8,
      name: "Personal Branding (SEO)",
      description:
        "SEO-optimized personal branding to boost your online visibility and professional reputation across search engines and platforms",
      price: "$110",
      duration: "Monthly",
      features: [
        "SEO keyword research",
        "Search engine optimization",
        "Google ranking improvement",
        "Online reputation management",
        "Content SEO strategy",
      ],
      status: "Active",
      clients: 19,
    },
    // {
    //   id: 9,
    //   name: "Executive Search",
    //   description:
    //     "Premium executive-level recruitment and headhunting services",
    //   price: "$2,500",
    //   duration: "60-90 days",
    //   features: [
    //     "Executive search",
    //     "C-level placements",
    //     "Confidential process",
    //     "Market mapping",
    //     "Reference checks",
    //   ],
    //   status: "Active",
    //   clients: 8,
    // },
    // {
    //   id: 10,
    //   name: "Skills Assessment",
    //   description: "Comprehensive skills evaluation and development roadmap",
    //   price: "$179",
    //   duration: "3-5 days",
    //   features: [
    //     "Technical assessment",
    //     "Soft skills evaluation",
    //     "Gap analysis",
    //     "Learning roadmap",
    //     "Certification guidance",
    //   ],
    //   status: "Active",
    //   clients: 62,
    // },
    // {
    //   id: 11,
    //   name: "Job Search Strategy",
    //   description:
    //     "Personalized job search strategy and application optimization",
    //   price: "$349",
    //   duration: "1-2 weeks",
    //   features: [
    //     "Target company research",
    //     "Application tracking",
    //     "Networking strategy",
    //     "Follow-up templates",
    //     "Success metrics",
    //   ],
    //   status: "Active",
    //   clients: 37,
    // },
    // {
    //   id: 12,
    //   name: "Remote Work Transition",
    //   description: "Support for transitioning to remote work opportunities",
    //   price: "$299",
    //   duration: "2-3 weeks",
    //   features: [
    //     "Remote job search",
    //     "Home office setup",
    //     "Virtual interview prep",
    //     "Remote work skills",
    //     "Digital collaboration",
    //   ],
    //   status: "Active",
    //   clients: 29,
    // },
  ]);

  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Services</h1>
        <p className="text-gray-400">
          Manage and view all recruitment services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20 hover:border-[#f0a709]/40 transition-colors flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{service.name}</h3>
              <span
                className={`px-2 py-1 rounded text-xs ${
                  service.status === "Active"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {service.status}
              </span>
            </div>

            <p className="text-gray-400 text-sm mb-4 flex-grow">
              {service.description}
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Price:</span>
                <span className="text-[#f0a709] font-bold">
                  {service.price}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Duration:</span>
                <span className="text-white">{service.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Clients:</span>
                <span className="text-white">{service.clients}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedService(service)}
              className="w-full bg-[#f0a709] text-black py-2 px-4 rounded-lg hover:bg-[#ffbf4d] transition-colors font-medium cursor-pointer mt-auto"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-b from-[#1A1335] to-[#100A1D] rounded-xl p-6 border border-[#f0a709]/20 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                {selectedService.name}
              </h2>
              <button
                onClick={() => setSelectedService(null)}
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

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Description
                </h3>
                <p className="text-gray-400">{selectedService.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-medium mb-1">Price</h4>
                  <p className="text-[#f0a709] font-bold text-xl">
                    {selectedService.priceDetail || selectedService.price}
                  </p>
                  {selectedService.priceNote && (
                    <p className="text-gray-400 text-sm mt-1">
                      {selectedService.priceNote}
                    </p>
                  )}
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Duration</h4>
                  <p className="text-gray-400">{selectedService.duration}</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Active Clients
                  </h4>
                  <p className="text-white">{selectedService.clients}</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Status</h4>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      selectedService.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {selectedService.status}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-3">
                  Features Included
                </h3>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-400">
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
