"use client"

import { useState } from "react"
import { 
  BarChart3,
  TrendingUp,
  Users,
  CreditCard,
  Calendar,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

export default function AnalyticsPage() {
  const [timeRange] = useState("Last 7 days")

  // Sample data - replace with real data
  const transactionData = [
    { name: "Mon", value: 2400 },
    { name: "Tue", value: 1398 },
    { name: "Wed", value: 9800 },
    { name: "Thu", value: 3908 },
    { name: "Fri", value: 4800 },
    { name: "Sat", value: 3800 },
    { name: "Sun", value: 4300 },
  ]

  const userGrowthData = [
    { name: "Jan", users: 4000 },
    { name: "Feb", users: 5000 },
    { name: "Mar", users: 6800 },
    { name: "Apr", users: 7200 },
    { name: "May", users: 8900 },
    { name: "Jun", users: 9800 },
  ]

  const serviceUsageData = [
    { name: "Airtime", value: 400 },
    { name: "Data Bundle", value: 300 },
    { name: "Cable TV", value: 200 },
    { name: "Electricity", value: 150 },
  ]

  const COLORS = ["#0A2357", "#4C6FFF", "#00C48C", "#FF6B6B"]

  const stats = [
    {
      name: "Total Revenue",
      value: "₦45.8M",
      change: "+15.3%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      name: "Active Users",
      value: "18,432",
      change: "+8.2%",
      trend: "up",
      icon: Users,
    },
    {
      name: "Total Transactions",
      value: "45,221",
      change: "+23.1%",
      trend: "up",
      icon: CreditCard,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
          <p className="text-sm text-gray-500 mt-1">Monitor business performance and growth</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Time Range Selector */}
        <div className="flex justify-end mb-8">
          <Button variant="outline" className="gap-2 rounded-xl">
            {timeRange}
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-[#0A2357]/5">
                  <stat.icon className="w-5 h-5 text-[#0A2357]" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}>
                  {stat.change}
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900 mt-1">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Transaction Volume Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Transaction Volume</h2>
                <p className="text-sm text-gray-500">Daily transaction amounts</p>
              </div>
              <div className="p-2 rounded-xl bg-[#0A2357]/5">
                <BarChart3 className="w-5 h-5 text-[#0A2357]" />
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={transactionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0A2357" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* User Growth Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">User Growth</h2>
                <p className="text-sm text-gray-500">Monthly active users</p>
              </div>
              <div className="p-2 rounded-xl bg-[#0A2357]/5">
                <Users className="w-5 h-5 text-[#0A2357]" />
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="users" 
                    stroke="#0A2357" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Service Usage Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Service Usage</h2>
                <p className="text-sm text-gray-500">Distribution of services</p>
              </div>
              <div className="p-2 rounded-xl bg-[#0A2357]/5">
                <CreditCard className="w-5 h-5 text-[#0A2357]" />
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={serviceUsageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {serviceUsageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {serviceUsageData.map((entry, index) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm text-gray-600">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                <p className="text-sm text-gray-500">Latest system events</p>
              </div>
              <Button variant="outline" className="text-sm">View All</Button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#0A2357]/5 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-[#0A2357]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">New user registered</p>
                      <p className="text-sm text-gray-500">2 mins ago</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 