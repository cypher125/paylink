"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  ArrowLeft, 
  Search, 
  ArrowUpRight,
  ArrowDownLeft,
  ChevronRight,
  Download,
  Calendar
} from "lucide-react"
import Link from "next/link"
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

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [transactions] = useState<Transaction[]>([
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
    },
    {
      id: '4',
      type: 'credit',
      title: 'Referral Bonus',
      description: 'From John Doe',
      amount: 500,
      date: 'Yesterday',
      status: 'completed',
      category: 'referral'
    }
  ])

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="lg:hidden">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-xl font-semibold">Transactions</h1>
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
          
          {/* Search and Filter */}
          <div className="p-4 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-10 w-full"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
      </header>

      <div className="p-4">
        <div className="max-w-7xl mx-auto">
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

