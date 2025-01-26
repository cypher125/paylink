"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BottomMenu } from "@/components/BottomMenu"

const providers = [
  { id: "eko", name: "Eko Electricity", image: "/providers/eko.png" },
  { id: "ikeja", name: "Ikeja Electricity", image: "/providers/ikeja.png" },
  { id: "abuja", name: "Abuja Electricity", image: "/providers/abuja.png" },
  { id: "portharcourt", name: "Port Harcourt Electricity", image: "/providers/ph.png" },
]

export default function ElectricityPage() {
  const [selectedProvider, setSelectedProvider] = useState("")
  const [meterNumber, setMeterNumber] = useState("")
  const [amount, setAmount] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-600">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-semibold">Pay Electricity Bill</h1>
          </div>
          <Link href="/dashboard/profile" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#0A2357] text-white flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
          </Link>
        </div>
      </header>

      <div className="p-4 lg:p-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-6 rounded-2xl shadow-sm">
            {/* Provider Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Select Provider</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {providers.map((provider) => (
                  <button
                    key={provider.id}
                    onClick={() => setSelectedProvider(provider.id)}
                    className={`flex flex-col items-center rounded-xl p-4 transition-all duration-300 ${
                      selectedProvider === provider.id
                        ? "bg-[#0A2357] text-white shadow-md scale-105"
                        : "bg-white hover:bg-gray-50 hover:shadow-sm border border-gray-100"
                    }`}
                  >
                    <div className={`mb-2 rounded-xl p-2 bg-white ${
                      selectedProvider === provider.id ? "bg-opacity-10" : ""
                    }`}>
                      <Image
                        src={provider.image}
                        alt={provider.name}
                        width={40}
                        height={40}
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium">{provider.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Meter Number Input */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Meter Number
              </label>
              <Input
                value={meterNumber}
                onChange={(e) => setMeterNumber(e.target.value)}
                placeholder="Enter meter number"
                className="h-12 rounded-xl"
              />
            </div>

            {/* Amount Input */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Amount
              </label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="h-12 rounded-xl"
              />
            </div>

            {/* Proceed Button */}
            <Button 
              className="w-full h-12 text-lg rounded-xl bg-[#0A2357] hover:bg-[#0A2357]/90"
              disabled={!selectedProvider || !meterNumber || !amount}
            >
              Proceed to Payment
            </Button>
          </Card>
        </div>
      </div>
      
      <BottomMenu />
    </div>
  )
}

