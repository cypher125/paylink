"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  Eye, 
  EyeOff,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  ChevronRight,
  Copy,
  CheckCheck,
  History,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"
import { BottomMenu } from "@/components/BottomMenu"

export default function WalletPage() {
  const [showBalance, setShowBalance] = useState(true)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  // This would come from your API
  const accountDetails = {
    accountNumber: "1234567890",
    accountName: "PAYLINK/JOHN DOE",
    bankName: "Wema Bank",
  }

  const transactions = [
    {
      id: '1',
      type: 'credit',
      title: 'Wallet Funding',
      description: 'Bank Transfer',
      amount: 10000,
      date: 'Today, 2:30 PM',
      status: 'completed',
    },
    {
      id: '2',
      type: 'debit',
      title: 'MTN Airtime',
      description: '08012345678',
      amount: 1000,
      date: 'Today, 10:15 AM',
      status: 'completed',
    },
  ]

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-600">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-semibold">Wallet</h1>
          </div>
          <Link href="/dashboard/profile" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#0A2357] text-white flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
          </Link>
        </div>
      </header>

      <div className="p-4 lg:p-8 max-w-4xl mx-auto space-y-6">
        {/* Balance Card */}
        <Card className="bg-gradient-to-r from-[#0A2357] to-[#1A3B7C] text-white p-6 rounded-2xl shadow-lg">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium opacity-90">Available Balance</h2>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                {showBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
              </button>
            </div>
            <div className="text-3xl font-bold">
              {showBalance ? "₦15,000.00" : "****"}
            </div>
            <Link href="/dashboard/fund-account">
              <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 mt-4">
                <Plus className="w-5 h-5 mr-2" />
                Fund Wallet
              </Button>
            </Link>
          </div>
        </Card>

        {/* Account Details Card */}
        <Card className="p-6 rounded-2xl">
          <h2 className="text-lg font-medium mb-4">Account Details</h2>
          <div className="space-y-4">
            {[
              { label: "Account Number", value: accountDetails.accountNumber },
              { label: "Account Name", value: accountDetails.accountName },
              { label: "Bank Name", value: accountDetails.bankName },
            ].map((detail) => (
              <div key={detail.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">{detail.label}</p>
                  <p className="font-medium">{detail.value}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(detail.value, detail.label)}
                  className="flex items-center gap-2"
                >
                  {copiedField === detail.label ? (
                    <CheckCheck className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Transfer any amount to this account to fund your wallet instantly
          </p>
        </Card>

        {/* Recent Transactions */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">Recent Transactions</h2>
            <Link href="/dashboard/transactions">
              <Button variant="ghost" className="text-[#0A2357]">
                <History className="w-4 h-4 mr-2" />
                View All
              </Button>
            </Link>
          </div>
          <Card className="divide-y rounded-2xl">
            {transactions.map((transaction) => (
              <Link 
                key={transaction.id}
                href={`/dashboard/transactions/${transaction.id}`}
                className="flex items-center justify-between p-4 hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${
                    transaction.type === 'credit' 
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {transaction.type === 'credit' 
                      ? <ArrowDownLeft className="w-5 h-5" />
                      : <ArrowUpRight className="w-5 h-5" />
                    }
                  </div>
                  <div>
                    <h4 className="font-medium">{transaction.title}</h4>
                    <p className="text-sm text-gray-500">{transaction.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className={`font-medium ${
                      transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'credit' ? '+' : '-'}₦{transaction.amount.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Link>
            ))}
          </Card>
        </div>
      </div>
      
      <BottomMenu />
    </div>
  )
}


