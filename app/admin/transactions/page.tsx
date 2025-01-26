"use client"

import { useState } from "react"
import { 
  Search,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Calendar,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data - replace with real data
  const transactions = [
    {
      id: "TRX123456",
      type: "credit",
      amount: "₦25,000",
      status: "Successful",
      date: "Jan 15, 2024",
      time: "14:30",
      user: {
        name: "John Doe",
        id: "USR123",
      },
      description: "Wallet Funding",
    },
    {
      id: "TRX123457",
      type: "debit",
      amount: "₦12,500",
      status: "Pending",
      date: "Jan 15, 2024",
      time: "15:45",
      user: {
        name: "Sarah Wilson",
        id: "USR124",
      },
      description: "Airtime Purchase",
    },
    // Add more transactions...
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">Transactions</h1>
          <p className="text-sm text-gray-500 mt-1">Monitor all payment transactions</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Actions Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Search transactions..."
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
            <Button className="bg-[#0A2357] hover:bg-[#0A2357]/90 text-white rounded-xl">
              Generate Report
            </Button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Transaction ID</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">User</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Type</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Amount</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Date & Time</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 px-6">
                      <p className="font-medium text-gray-900">{transaction.id}</p>
                      <p className="text-sm text-gray-500">{transaction.description}</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-medium text-gray-900">{transaction.user.name}</p>
                      <p className="text-sm text-gray-500">ID: {transaction.user.id}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <div className={`p-1 rounded-lg ${
                          transaction.type === "credit" 
                            ? "bg-green-50" 
                            : "bg-red-50"
                        }`}>
                          {transaction.type === "credit" ? (
                            <ArrowUpRight className="w-4 h-4 text-green-600" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4 text-red-600" />
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-900 capitalize">
                          {transaction.type}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className={`text-sm font-medium ${
                        transaction.type === "credit" 
                          ? "text-green-600" 
                          : "text-red-600"
                      }`}>
                        {transaction.type === "credit" ? "+" : "-"}{transaction.amount}
                      </p>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        transaction.status === "Successful"
                          ? "bg-green-50 text-green-700"
                          : transaction.status === "Pending"
                          ? "bg-yellow-50 text-yellow-700"
                          : "bg-red-50 text-red-700"
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {transaction.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {transaction.time}
                        </div>
                      </div>
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