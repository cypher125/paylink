"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BottomMenu } from "@/components/BottomMenu"

export default function TransactionConfirmPage() {
  const router = useRouter()
  const transaction = {
    type: 'Airtime Purchase',
    amount: 1000,
    recipient: '08012345678',
    fee: 0,
    network: 'MTN',
  }

  const handleConfirm = () => {
    router.push('/dashboard/transactions/success')
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      <header className="bg-white border-b">
        <div className="flex items-center p-4 lg:px-8 max-w-7xl mx-auto">
          <Link href="/dashboard" className="text-gray-600">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold ml-4">Confirm Transaction</h1>
        </div>
      </header>

      <div className="p-4 lg:p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Transaction Summary */}
          <Card className="p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4">Transaction Summary</h3>
            <div className="space-y-4">
              {[
                { label: "Transaction Type", value: transaction.type },
                { label: "Amount", value: `₦${transaction.amount.toLocaleString()}` },
                { label: "Recipient", value: transaction.recipient },
                { label: "Network", value: transaction.network },
                { label: "Fee", value: `₦${transaction.fee}` },
                { label: "Total", value: `₦${(transaction.amount + transaction.fee).toLocaleString()}` },
              ].map((item, index) => (
                <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Warning */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800">
              Please verify all details carefully. Transactions cannot be reversed once confirmed.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid gap-4">
            <Button 
              onClick={handleConfirm}
              className="w-full h-12 text-lg rounded-xl bg-[#0A2357] hover:bg-[#0A2357]/90"
            >
              Confirm Payment
            </Button>
            <Button 
              variant="outline"
              className="w-full h-12 text-lg rounded-xl"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
      
      <BottomMenu />
    </div>
  )
}

