"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const networks = [
  { id: "mtn", name: "MTN", color: "bg-yellow-400", image: "/placeholder.svg" },
  { id: "airtel", name: "AIRTEL", color: "bg-red-500", image: "/placeholder.svg" },
  { id: "9mobile", name: "9MOBILE", color: "bg-green-500", image: "/placeholder.svg" },
  { id: "glo", name: "GLO", color: "bg-green-600", image: "/placeholder.svg" },
]

const banks = ["Access Bank", "First Bank", "GT Bank", "UBA", "Zenith Bank"]

export default function Airtime2CashPage() {
  const [selectedNetwork, setSelectedNetwork] = useState("")
  const [amount, setAmount] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [selectedBank, setSelectedBank] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white p-4">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-gray-600">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg font-semibold">Airtime2Cash</h1>
        </div>
      </div>

      <div className="p-4">
        {/* Network Selection */}
        <div className="mb-6 grid grid-cols-4 gap-4">
          {networks.map((network) => (
            <button
              key={network.id}
              onClick={() => setSelectedNetwork(network.id)}
              className={`flex flex-col items-center rounded-xl p-3 ${
                selectedNetwork === network.id ? "bg-white shadow-md" : ""
              }`}
            >
              <div className={`mb-2 rounded-xl p-2`}>
                <Image
                  src={network.image || "/placeholder.svg"}
                  alt={network.name}
                  width={40}
                  height={40}
                  className="h-8 w-8"
                />
              </div>
              <span className="text-xs font-medium">{network.name}</span>
            </button>
          ))}
        </div>

        {/* Amount Input */}
        <div className="mb-6">
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="2000"
            className="h-12 rounded-xl"
          />
          {amount && (
            <div className="mt-2 rounded-lg bg-gray-100 p-3 text-sm text-gray-600">
              This airtime will be purchased at ₦1800
            </div>
          )}
        </div>

        {/* Bank Details */}
        <div className="space-y-4">
          <Select value={selectedBank} onValueChange={setSelectedBank}>
            <SelectTrigger className="h-12 rounded-xl">
              <SelectValue placeholder="Select bank" />
            </SelectTrigger>
            <SelectContent>
              {banks.map((bank) => (
                <SelectItem key={bank} value={bank.toLowerCase()}>
                  {bank}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Account Number"
            className="h-12 rounded-xl"
          />
        </div>

        {/* Proceed Button */}
        <div className="mt-6">
          <Button className="w-full rounded-xl bg-[#0A2357] py-6">Proceed</Button>
        </div>
      </div>
    </div>
  )
}

