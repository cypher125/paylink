"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Phone, History } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BottomMenu } from "@/components/BottomMenu"

const networks = [
  { id: "mtn", name: "MTN", image: "/providers/mtn.jpg" },
  { id: "airtel", name: "AIRTEL", image: "/providers/airtel.png" },
  { id: "9mobile", name: "9MOBILE", image: "/providers/9mobile.png" },
  { id: "glo", name: "GLO", image: "/providers/glo.png" },
]

const dataBundles = [
  { size: "0.5GB", price: 150.0, validity: "1 Day" },
  { size: "1.0GB", price: 250.0, validity: "7 Days" },
  { size: "2.0GB", price: 520.0, validity: "30 Days" },
  { size: "3.0GB", price: 770.5, validity: "30 Days" },
  { size: "5.0GB", price: 1270.5, validity: "30 Days" },
  { size: "10GB", price: 2750.5, validity: "30 Days" },
]

export default function DataBundlePage() {
  const [selectedNetwork, setSelectedNetwork] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [selectedBundle, setSelectedBundle] = useState<string | null>(null)
  const [bundleType, setBundleType] = useState("SME")

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="flex items-center justify-between p-4 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-600 lg:hidden">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-semibold">Buy Data Bundle</h1>
          </div>
          <Button variant="outline" size="sm" className="hidden lg:flex items-center gap-2">
            <History className="w-4 h-4" />
            Purchase History
          </Button>
        </div>
      </header>

      <div className="p-4 lg:p-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-6 rounded-2xl shadow-sm">
            {/* Network Selection */}
            <div className="mb-6">
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

            {/* Phone Number Input */}
            <div className="mb-6">
              <label htmlFor="phoneNumber" className="mb-2 block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="relative">
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="08099545453"
                  className="h-12 pl-12 rounded-xl"
                />
                <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Bundle Type Selection */}
            <div className="mb-6 flex gap-4">
              <Button
                variant={bundleType === "SME" ? "default" : "outline"}
                onClick={() => setBundleType("SME")}
                className="flex-1 rounded-xl"
              >
                SME
              </Button>
              <Button
                variant={bundleType === "CORPORATE" ? "default" : "outline"}
                onClick={() => setBundleType("CORPORATE")}
                className="flex-1 rounded-xl"
              >
                CORPORATE GIFTING
              </Button>
            </div>

            {/* Data Bundles */}
            <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {dataBundles.map((bundle) => (
                <button
                  key={bundle.size}
                  onClick={() => setSelectedBundle(bundle.size)}
                  className={`w-full rounded-xl border p-4 text-left transition-all duration-300 ${
                    selectedBundle === bundle.size ? "border-[#0A2357] bg-[#0A2357]/5" : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{bundle.size}</span>
                    <span className="font-semibold">₦{bundle.price.toFixed(2)}</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">{bundle.validity}</div>
                </button>
              ))}
            </div>

            {/* Proceed Button */}
            <Button className="w-full rounded-xl bg-[#0A2357] py-6">Proceed</Button>
          </Card>
        </div>
      </div>
      <BottomMenu />
    </div>
  )
}

