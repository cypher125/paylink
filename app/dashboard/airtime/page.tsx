"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Phone} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BottomMenu } from "@/components/BottomMenu"

const networks = [
  { id: "mtn", name: "MTN", image: "/providers/mtn.jpg" },
  { id: "airtel", name: "AIRTEL", image: "/providers/airtel.png" },
  { id: "9mobile", name: "9MOBILE", image: "/providers/9mobile.png" },
  { id: "glo", name: "GLO", image: "/providers/glo.png" },
]

const quickAmounts = ["100", "200", "500", "1000", "2000", "5000"]

export default function AirtimePage() {
  const [selectedNetwork, setSelectedNetwork] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [amount, setAmount] = useState("")
  
  const [recentNumbers] = useState([
    { number: "08012345678", network: "mtn", image: "/providers/mtn.jpg" },
    { number: "09087654321", network: "airtel", image: "/providers/airtel.png" },
  ])

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-600">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-semibold">Buy Airtime</h1>
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
          {/* Network Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Select Network</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {networks.map((network) => (
              <button
                key={network.id}
                onClick={() => setSelectedNetwork(network.id)}
                className={`flex flex-col items-center rounded-xl p-4 transition-all duration-300 ${
                  selectedNetwork === network.id
                    ? "bg-[#0A2357] text-white shadow-md scale-105"
                    : "bg-white hover:bg-gray-50 hover:shadow-sm border border-gray-100"
                }`}
              >
                <div className={`mb-2 rounded-xl p-2 bg-white ${
                  selectedNetwork === network.id ? "bg-opacity-10" : ""
                }`}>
                  <Image
                    src={network.image}
                    alt={network.name}
                    width={40}
                    height={40}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <span className="text-xs font-medium">{network.name}</span>
              </button>
            ))}
          </div>
            </div>

            {/* Recent Numbers */}
            {recentNumbers.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Recent Numbers</h3>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {recentNumbers.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setPhoneNumber(item.number)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100"
                    >
                      <Image
                        src={item.image}
                        alt={item.network}
                        width={16}
                        height={16}
                      />
                      <span className="text-sm whitespace-nowrap">{item.number}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

          {/* Phone Number Input */}
          <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
              Phone Number
            </label>
            <div className="relative">
              <Input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter phone number"
                  className="h-12 pl-12 rounded-xl"
              />
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>

            {/* Quick Amount Selection */}
          <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Amount</h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {quickAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setAmount(amt)}
                    className={`py-2 rounded-lg text-sm font-medium transition-all ${
                      amount === amt
                        ? "bg-[#0A2357] text-white"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    ₦{amt}
                  </button>
                ))}
              </div>
          </div>

            {/* Custom Amount Input */}
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
              <div className="mt-2 text-sm text-gray-500">
                Amount to pay: ₦{amount || "0"}
              </div>
            {amount && (
                <div className="mt-2 p-3 rounded-lg bg-blue-50 text-blue-700 text-sm">
                  Get 3% discount on this purchase
              </div>
            )}
          </div>

            {/* Submit Button */}
            <Button 
              className="w-full h-12 text-lg rounded-xl bg-[#0A2357] hover:bg-[#0A2357]/90"
              disabled={!selectedNetwork || !phoneNumber || !amount}
            >
              Buy Airtime
          </Button>
        </Card>
        </div>
      </div>
      
      <BottomMenu />
    </div>
  )
}

