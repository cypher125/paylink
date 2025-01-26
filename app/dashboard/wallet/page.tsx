"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ArrowLeft, 
  History, 
  Plus, 
  ArrowUpRight, 
  ArrowDownLeft,
  Eye,
  EyeOff,
  Download,
  CreditCard,
  Building,
  Smartphone,
  Filter,
  Calendar,
  ChevronRight,
  AlertCircle
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BottomMenu } from "@/components/BottomMenu"

interface Transaction {
  id: string
  type: 'credit' | 'debit'
  title: string
  description: string
  amount: number
  date: string
  status: 'completed' | 'pending' | 'failed'
  category: string
}

const transactions: Transaction[] = [
  {
    id: '1',
    type: 'credit',
    title: 'Wallet Funding',
    description: 'Bank Transfer',
    amount: 10000,
    date: 'Today, 2:30 PM',
    status: 'completed',
    category: 'funding'
  },
  {
    id: '2',
    type: 'debit',
    title: 'MTN Airtime',
    description: '08012345678',
    amount: 1000,
    date: 'Today, 10:15 AM',
    status: 'completed',
    category: 'airtime'
  },
  {
    id: '3',
    type: 'debit',
    title: 'DSTV Subscription',
    description: 'Premium Package',
    amount: 24500,
    date: 'Yesterday',
    status: 'pending',
    category: 'tv'
  }
]

const quickAmounts = [1000, 2000, 5000, 10000, 20000, 50000]

const fundingMethods = [
  { 
    id: "card", 
    name: "Debit Card", 
    icon: CreditCard,
    description: "Fund your wallet instantly using your debit card"
  },
  { 
    id: "bank", 
    name: "Bank Transfer", 
    icon: Building,
    description: "Make a transfer to your unique account number"
  },
  { 
    id: "ussd", 
    name: "USSD", 
    icon: Smartphone,
    description: "Fund using USSD code from any bank"
  }
]

export default function WalletPage() {
  const [showBalance, setShowBalance] = useState(true)
  const [selectedMethod, setSelectedMethod] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)

  const totalIncome = transactions
    .filter(t => t.type === 'credit' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalSpending = transactions
    .filter(t => t.type === 'debit' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0)

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      <header className="bg-white border-b">
        <div className="flex items-center justify-between p-4 lg:px-8">
        <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-600 lg:hidden">
            <ArrowLeft className="h-6 w-6" />
          </Link>
            <h1 className="text-xl font-semibold">Wallet</h1>
          </div>
          <Button variant="outline" size="sm" className="hidden lg:flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Statement
          </Button>
        </div>
      </header>

      <div className="p-4 lg:p-8 max-w-4xl mx-auto">
              {/* Balance Card */}
        <Card className="bg-gradient-to-r from-[#0A2357] to-[#1A3B7C] text-white p-6 rounded-2xl shadow-lg mb-8">
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
          </div>
        </Card>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="fund">Fund Wallet</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="space-y-6">
              <Card className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-green-50">
                    <p className="text-sm text-green-600 mb-1">Total Income</p>
                    <p className="text-2xl font-bold text-green-700">₦{totalIncome.toLocaleString()}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-red-50">
                    <p className="text-sm text-red-600 mb-1">Total Spending</p>
                    <p className="text-2xl font-bold text-red-700">₦{totalSpending.toLocaleString()}</p>
                  </div>
                </div>
              </Card>

              {/* Spending Categories */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Spending Categories</h3>
                <div className="space-y-4">
                  {['Airtime', 'Data', 'TV', 'Electricity'].map((category) => (
                    <div key={category} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#0A2357]" />
                        <span>{category}</span>
                  </div>
                      <span className="text-gray-600">₦{(Math.random() * 10000).toFixed(2)}</span>
                  </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="fund">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">Select Amount</h3>
              
              {/* Quick Amounts */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {quickAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount)
                      setCustomAmount(amount.toString())
                    }}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      selectedAmount === amount
                        ? "border-[#0A2357] bg-[#0A2357]/5 text-[#0A2357]"
                        : "hover:border-gray-300"
                    }`}
                  >
                    ₦{amount.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Custom Amount
                </label>
                <Input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                  placeholder="Enter amount"
                  className="h-12"
                />
              </div>

              {/* Payment Methods */}
              <h3 className="text-lg font-semibold mb-4">Select Payment Method</h3>
              <div className="space-y-4">
                {fundingMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`w-full flex items-center p-4 rounded-xl border transition-all ${
                      selectedMethod === method.id
                        ? "border-[#0A2357] bg-[#0A2357]/5"
                        : "hover:border-gray-300"
                    }`}
                  >
                    <div className={`p-3 rounded-lg ${
                      selectedMethod === method.id
                        ? "bg-[#0A2357] text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div className="ml-4 text-left">
                      <h4 className="font-medium">{method.name}</h4>
                      <p className="text-sm text-gray-500">{method.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="transactions">
            <Card>
              {/* Filters */}
              <div className="p-4 border-b">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    {['all', 'credit', 'debit'].map((type) => (
                      <Button
                        key={type}
                        variant="outline"
                        size="sm"
                        className="capitalize"
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Date
                    </Button>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </div>

              {/* Transactions List */}
                <div className="divide-y">
                  {transactions.map((transaction) => (
                  <Link
                      key={transaction.id}
                    href={`/dashboard/transactions/${transaction.id}`}
                    className="p-4 flex items-center justify-between hover:bg-gray-50"
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
              </div>

              {/* Empty State */}
              {transactions.length === 0 && (
                <div className="p-8 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <History className="w-6 h-6 text-gray-400" />
            </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No transactions yet</h3>
                  <p className="text-gray-500">Your transactions will appear here</p>
          </div>
              )}
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomMenu />
    </div>
  )
}


