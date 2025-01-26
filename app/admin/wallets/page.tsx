"use client"

import { useState } from "react"
import { 
  Search,
  Filter,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  User,
  CreditCard,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function WalletsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data - replace with real data
  const stats = [
    {
      name: "Total Balance",
      value: "₦45.8M",
      change: "+15.3%",
      trend: "up",
    },
    {
      name: "Active Wallets",
      value: "18,432",
      change: "+8.2%",
      trend: "up",
    },
    {
      name: "Frozen Wallets",
      value: "23",
      change: "-5.1%",
      trend: "down",
    },
  ]

  const wallets = [
    {
      id: "WAL123456",
      balance: "₦125,000",
      status: "Active",
      transactions: 45,
      lastTransaction: "2 mins ago",
      user: {
        name: "John Doe",
        id: "USR123",
      },
    },
    {
      id: "WAL123457",
      balance: "₦85,000",
      status: "Active",
      transactions: 28,
      lastTransaction: "5 mins ago",
      user: {
        name: "Sarah Wilson",
        id: "USR124",
      },
    },
    // Add more wallets...
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">Wallets</h1>
          <p className="text-sm text-gray-500 mt-1">Monitor and manage user wallets</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
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
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Actions Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Search wallets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-xl border-gray-200"
              />
            </div>
            <Button variant="outline" className="gap-2 rounded-xl">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-xl">Export</Button>
            <Button className="bg-[#0A2357] hover:bg-[#0A2357]/90 text-white rounded-xl gap-2">
              <Wallet className="w-4 h-4" />
              Add Wallet
            </Button>
          </div>
        </div>

        {/* Wallets Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Wallet ID</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">User</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Balance</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Transactions</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Last Activity</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {wallets.map((wallet) => (
                  <tr key={wallet.id} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-[#0A2357]/5 flex items-center justify-center">
                          <Wallet className="w-5 h-5 text-[#0A2357]" />
                        </div>
                        <p className="font-medium text-gray-900">{wallet.id}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <User className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{wallet.user.name}</p>
                          <p className="text-sm text-gray-500">ID: {wallet.user.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm font-medium text-gray-900">{wallet.balance}</p>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        wallet.status === "Active"
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}>
                        {wallet.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm font-medium text-gray-900">{wallet.transactions}</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-gray-500">{wallet.lastTransaction}</p>
                    </td>
                    <td className="py-4 px-6">
                      <Button variant="ghost" size="icon" className="rounded-lg">
                        <MoreVertical className="w-4 h-4 text-gray-500" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 