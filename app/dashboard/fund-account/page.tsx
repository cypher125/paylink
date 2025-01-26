"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ArrowLeft, History, CreditCard, Building, Smartphone, Plus } from "lucide-react"
import Link from "next/link"
import { BottomMenu } from "@/components/BottomMenu"

const fundingMethods = [
  { 
    id: "card", 
    name: "Debit Card", 
    icon: CreditCard,
    description: "Fund instantly using your debit card"
  },
  { 
    id: "bank", 
    name: "Bank Transfer", 
    icon: Building,
    description: "Fund via bank transfer"
  },
  { 
    id: "ussd", 
    name: "USSD", 
    icon: Smartphone,
    description: "Fund using USSD code"
  },
]

export default function FundAccountPage() {
  const [amount, setAmount] = useState("")
  const [selectedMethod, setSelectedMethod] = useState("")

  const quickAmounts = [1000, 2000, 5000, 10000, 20000, 50000]

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-600 lg:hidden">
            <ArrowLeft className="h-6 w-6" />
          </Link>
            <h1 className="text-xl font-semibold">Fund Wallet</h1>
          </div>
          <Button variant="outline" size="sm" className="hidden lg:flex items-center gap-2">
            <History className="w-4 h-4" />
            Transaction History
          </Button>
        </div>
      </header>

        <div className="p-4 lg:p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Amount Card */}
          <Card className="p-6 rounded-2xl shadow-sm">
            <h2 className="text-lg font-medium mb-4">Enter Amount</h2>

              {/* Amount Input */}
              <div className="mb-6">
              <div className="relative">
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="h-12 text-2xl font-bold pl-8 rounded-xl"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl font-bold">₦</span>
              </div>
              </div>

            {/* Quick Amounts */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {quickAmounts.map((amt) => (
                  <Button
                  key={amt}
                    variant="outline"
                  onClick={() => setAmount(amt.toString())}
                  className="rounded-xl h-12"
                  >
                  ₦{amt.toLocaleString()}
                  </Button>
                ))}
              </div>
          </Card>

          {/* Payment Methods */}
          <Card className="p-6 rounded-2xl shadow-sm">
            <h2 className="text-lg font-medium mb-4">Select Payment Method</h2>
            <div className="space-y-3">
              {fundingMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${
                    selectedMethod === method.id
                      ? "border-[#0A2357] bg-[#0A2357]/5"
                      : "hover:border-gray-300"
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    selectedMethod === method.id ? "bg-[#0A2357] text-white" : "bg-gray-100"
                  }`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">{method.name}</h3>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </Card>

              {/* Proceed Button */}
          <Button 
            className="w-full h-12 text-lg rounded-xl bg-[#0A2357] hover:bg-[#0A2357]/90"
            disabled={!amount || !selectedMethod}
          >
            Proceed to Payment
              </Button>
        </div>
      </div>
      
      <BottomMenu />
    </div>
  )
}

