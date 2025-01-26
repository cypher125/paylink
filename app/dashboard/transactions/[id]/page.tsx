"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  ArrowLeft,
  Download,
  CheckCircle2,
  Clock,
  XCircle,
  Share2
} from "lucide-react"
import Link from "next/link"
import { BottomMenu } from "@/components/BottomMenu"
import { use } from "react"

export default function TransactionDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  
  // This would normally come from an API call using the ID
  const transaction = {
    id: resolvedParams.id,
    type: 'debit',
    title: 'MTN Airtime',
    description: '08012345678',
    amount: 1000,
    date: 'Monday, 29th April 2024, 10:15 AM',
    status: 'completed',
    category: 'airtime',
    reference: 'TRX123456789',
    paymentMethod: 'Wallet Balance',
    fee: 0,
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-600'
      case 'pending':
        return 'bg-yellow-100 text-yellow-600'
      case 'failed':
        return 'bg-red-100 text-red-600'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-6 h-6" />
      case 'pending':
        return <Clock className="w-6 h-6" />
      case 'failed':
        return <XCircle className="w-6 h-6" />
      default:
        return <Clock className="w-6 h-6" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/dashboard/transactions" className="text-gray-600">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-semibold">Transaction Details</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="items-center gap-2">
              <Download className="w-4 h-4" />
              Download
            </Button>
          </div>
        </div>
      </header>

      <div className="p-4 lg:p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Status Card */}
          <Card className="p-6 rounded-2xl text-center">
            <div className={`inline-flex p-3 rounded-full ${getStatusColor(transaction.status)} mb-4`}>
              {getStatusIcon(transaction.status)}
            </div>
            <h2 className="text-2xl font-bold mb-2">₦{transaction.amount.toLocaleString()}</h2>
            <p className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(transaction.status)}`}>
              {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
            </p>
          </Card>

          {/* Transaction Details */}
          <Card className="p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4">Transaction Details</h3>
            <div className="space-y-4">
              {[
                { label: "Transaction Type", value: transaction.title },
                { label: "Date & Time", value: transaction.date },
                { label: "Status", value: transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1) },
                { label: "Reference", value: transaction.reference },
                { label: "Payment Method", value: transaction.paymentMethod },
                { label: "Transaction Fee", value: `₦${transaction.fee}` },
                { label: "Description", value: transaction.description },
              ].map((item, index) => (
                <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Support Button */}
          <Button 
            variant="outline"
            className="w-full h-12 text-lg rounded-xl"
          >
            Need Help?
          </Button>
        </div>
      </div>
      
      <BottomMenu />
    </div>
  )
}

