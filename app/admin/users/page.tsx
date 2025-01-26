"use client"

import { useState } from "react"
import { 
  User,
  Search,
  Filter,
  MoreVertical,
  Mail,
  Phone,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data - replace with real data
  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phone: "+234 123 4567",
      status: "Active",
      joinedDate: "Jan 12, 2024",
      transactions: 45,
      balance: "₦125,000",
    },
    {
      id: "2",
      name: "Sarah Wilson",
      email: "sarah@example.com",
      phone: "+234 123 4567",
      status: "Active",
      joinedDate: "Jan 15, 2024",
      transactions: 28,
      balance: "₦85,000",
    },
    // Add more sample users...
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
          <p className="text-sm text-gray-500 mt-1">Manage and monitor user accounts</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Actions Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Search users..."
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
          <Button className="bg-[#0A2357] hover:bg-[#0A2357]/90 text-white rounded-xl gap-2">
            <User className="w-4 h-4" />
            Add User
          </Button>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">User</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Contact</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Joined</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Transactions</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Balance</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-[#0A2357]/5 flex items-center justify-center">
                          <User className="w-5 h-5 text-[#0A2357]" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-500">ID: #{user.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Mail className="w-4 h-4" />
                          {user.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Phone className="w-4 h-4" />
                          {user.phone}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {user.joinedDate}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm font-medium text-gray-900">{user.transactions}</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm font-medium text-gray-900">{user.balance}</p>
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