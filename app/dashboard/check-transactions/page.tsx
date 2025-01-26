"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, ArrowDown, ArrowUp } from "lucide-react"
import Link from "next/link"
import { BottomMenu } from "@/components/BottomMenu"

const transactions = [
  { id: 1, type: "credit", description: "Wallet Funded", amount: 10000, date: "2023-05-01" },
  { id: 2, type: "debit", description: "Airtime Purchase", amount: 1000, date: "2023-05-02" },
  { id: 3, type: "debit", description: "Data Bundle", amount: 2000, date: "2023-05-03" },
  { id: 4, type: "credit", description: "Cashback Reward", amount: 500, date: "2023-05-04" },
]

export default function CheckTransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("all")

  const filteredTransactions = transactions.filter(
    (transaction) =>
      (filter === "all" || transaction.type === filter) &&
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:ml-64 lg:pb-0">
      {/* Header */}
      <div className="bg-white p-4 lg:hidden">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-gray-600">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg font-semibold">Transaction History</h1>
        </div>
      </div>

      <div className="p-4 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 hidden items-center justify-between lg:flex">
            <h2 className="text-2xl font-semibold">Transaction History</h2>
            <Link href="/dashboard" className="text-sm text-blue-600 hover:underline">
              Back to Dashboard
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Search and Filter */}
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative flex-grow lg:max-w-md">
                <Input
                  type="text"
                  placeholder="Search transactions"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-12 rounded-xl pl-10"
                />
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="h-12 w-full lg:w-48 rounded-xl">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="credit">Credit</SelectItem>
                  <SelectItem value="debit">Debit</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Transactions List */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4 text-left">Date</th>
                    <th className="py-2 px-4 text-left">Description</th>
                    <th className="py-2 px-4 text-left">Type</th>
                    <th className="py-2 px-4 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b last:border-b-0">
                      <td className="py-4 px-4">{transaction.date}</td>
                      <td className="py-4 px-4">{transaction.description}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                            transaction.type === "credit" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {transaction.type === "credit" ? (
                            <ArrowDown className="mr-1 h-3 w-3" />
                          ) : (
                            <ArrowUp className="mr-1 h-3 w-3" />
                          )}
                          {transaction.type}
                        </span>
                      </td>
                      <td
                        className={`py-4 px-4 text-right font-medium ${
                          transaction.type === "credit" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {transaction.type === "credit" ? "+" : "-"}₦{transaction.amount.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="mt-6 flex justify-between items-center">
              <Button variant="outline">Previous</Button>
              <span>Page 1 of 5</span>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
      <BottomMenu />
    </div>
  )
}

