"use client"

import { 
  Users,
  CreditCard,
  TrendingUp,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
} from "lucide-react"

export default function AdminDashboard() {
  // Sample data - replace with real data from your backend
  const stats = [
    {
      name: "Total Users",
      value: "24,321",
      change: "+12.5%",
      trend: "up",
      icon: Users,
    },
    {
      name: "Total Transactions",
      value: "₦14.2M",
      change: "+23.1%",
      trend: "up",
      icon: CreditCard,
    },
    {
      name: "Active Wallets",
      value: "18,432",
      change: "+8.2%",
      trend: "up",
      icon: Wallet,
    },
    {
      name: "Failed Transactions",
      value: "0.8%",
      change: "-2.3%",
      trend: "down",
      icon: AlertCircle,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
          <p className="text-sm text-gray-500 mt-1">Monitor your business metrics and performance</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-xl ${
                  stat.trend === "up" ? "bg-green-50" : "bg-red-50"
                }`}>
                  <stat.icon className={`w-5 h-5 ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`} />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}>
                  {stat.change}
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
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

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <button className="text-sm font-medium text-[#0A2357] hover:text-[#0A2357]/80">
              View all
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Sample activities - replace with real data */}
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#0A2357]/5 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#0A2357]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">New transaction completed</p>
                    <p className="text-sm text-gray-500">User ID: #123456</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">₦25,000.00</p>
                  <p className="text-sm text-gray-500">2 mins ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 