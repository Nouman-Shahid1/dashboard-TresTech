"use client";
import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export function SalesLineChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales ($)",
        data: [1200, 1900, 1700, 2200, 2100, 2500, 2300],
        borderColor: "#f0a709",
        backgroundColor: "rgba(240,167,9,0.2)",
        tension: 0.4,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };
  return <Line data={data} options={options} />;
}

export function OrdersBarChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Orders",
        data: [30, 45, 28, 50, 40, 60, 55],
        backgroundColor: "#1A1335",
        borderColor: "#f0a709",
        borderWidth: 2,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };
  return <Bar data={data} options={options} />;
}

export function InventoryDoughnutChart() {
  const data = {
    labels: ["In Stock", "Low Stock", "Out of Stock"],
    datasets: [
      {
        label: "Inventory",
        data: [350, 50, 10],
        backgroundColor: ["#f0a709", "#1A1335", "#e53e3e"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
    },
  };
  return <Doughnut data={data} options={options} />;
}
