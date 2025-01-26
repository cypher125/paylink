"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Download, Share2, Home } from "lucide-react"
import Link from "next/link"
import { BottomMenu } from "@/components/BottomMenu"

export default function TransactionSuccessPage() {
  const transaction = {
    type: 'Airtime Purchase',
    amount: 1000,
    recipient: '08012345678',
    reference: 'TRX123456789',
    date: 'Monday, 29th April 2024, 10:15 AM',
    network: 'MTN',
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      <div className="p-4 lg:p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Success Card */}
          <Card className="p-6 rounded-2xl text-center">
            <div className="inline-flex p-3 rounded-full bg-green-100 text-green-600 mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Transaction Successful!</h2>
            <p className="text-gray-600 mb-6">
              Your transaction has been completed successfully
            </p>
            <div className="bg-green-50 rounded-xl p-4 mb-6">
              <p className="text-2xl font-bold text-green-600">
                ₦{transaction.amount.toLocaleString()}
              </p>
            </div>
          </Card>

          {/* Transaction Details */}
          <Card className="p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4">Transaction Details</h3>
            <div className="space-y-4">
              {[
                { label: "Transaction Type", value: transaction.type },
                { label: "Recipient", value: transaction.recipient },
                { label: "Network", value: transaction.network },
                { label: "Reference", value: transaction.reference },
                { label: "Date & Time", value: transaction.date },
              ].map((item, index) => (
                <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-12 rounded-xl flex items-center justify-center gap-2">
                <Share2 className="w-5 h-5" />
                Share
              </Button>
              <Button variant="outline" className="h-12 rounded-xl flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download
              </Button>
            </div>
            <Link href="/dashboard">
              <Button className="w-full h-12 text-lg rounded-xl bg-[#0A2357] hover:bg-[#0A2357]/90">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <BottomMenu />
    </div>
  )
}

