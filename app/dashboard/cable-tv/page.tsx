"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ArrowLeft} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BottomMenu } from "@/components/BottomMenu"

const providers = [
  { 
    id: "dstv", 
    name: "DSTV", 
    image: "/providers/dstv.svg",
    packages: [
      { id: "padi", name: "DStv Padi", price: 2500, description: "40+ Channels" },
      { id: "yanga", name: "DStv Yanga", price: 3500, description: "60+ Channels" },
      { id: "confam", name: "DStv Confam", price: 6200, description: "100+ Channels" },
      { id: "compact", name: "DStv Compact", price: 10500, description: "140+ Channels" },
      { id: "premium", name: "DStv Premium", price: 24500, description: "200+ Channels" },
    ]
  },
  { 
    id: "gotv", 
    name: "GOtv", 
    image: "/providers/gotv.svg",
    packages: [
      { id: "supa", name: "GOtv Supa", price: 6400, description: "80+ Channels" },
      { id: "max", name: "GOtv Max", price: 4850, description: "65+ Channels" },
      { id: "jolli", name: "GOtv Jolli", price: 3300, description: "50+ Channels" },
      { id: "jinja", name: "GOtv Jinja", price: 2250, description: "40+ Channels" },
    ]
  },
  { 
    id: "startimes", 
    name: "StarTimes", 
    image: "/providers/startimes.svg",
    packages: [
      { id: "nova", name: "Nova", price: 1200, description: "Basic Entertainment" },
      { id: "basic", name: "Basic", price: 2100, description: "Family Entertainment" },
      { id: "smart", name: "Smart", price: 2800, description: "Complete Entertainment" },
      { id: "classic", name: "Classic", price: 3100, description: "Premium Entertainment" },
    ]
  }
]

export default function CableTVPage() {
  const [selectedProvider, setSelectedProvider] = useState("")
  const [selectedPackage, setSelectedPackage] = useState("")
  const [smartCardNumber, setSmartCardNumber] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const currentProvider = providers.find(p => p.id === selectedProvider)

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-600">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-semibold">Cable TV</h1>
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
              <div className="grid grid-cols-3 gap-4">
                {providers.map((provider) => (
                  <button
                    key={provider.id}
                    onClick={() => {
                      setSelectedProvider(provider.id)
                      setSelectedPackage("")
                    }}
                    className={`flex flex-col items-center rounded-xl p-4 transition-all duration-300 ${
                      selectedProvider === provider.id
                        ? "bg-[#0A2357] text-white shadow-md scale-105"
                        : "bg-white hover:bg-gray-50 hover:shadow-sm border"
                    }`}
                  >
                    <div className={`mb-2 rounded-xl p-2 ${
                      selectedProvider === provider.id ? "bg-white/10" : "bg-gray-50"
                    }`}>
                      <Image
                        src={provider.image}
                        alt={provider.name}
                        width={48}
                        height={48}
                        className="h-12 w-12"
                      />
                    </div>
                    <span className="text-sm font-medium">{provider.name}</span>
                  </button>
                ))}
              </div>
              </div>

            {/* Smart Card Number */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Smart Card Number
                  </label>
                  <Input
                    value={smartCardNumber}
                    onChange={(e) => setSmartCardNumber(e.target.value)}
                    placeholder="Enter smart card number"
                    className="h-12 rounded-xl"
                  />
                </div>

                {/* Package Selection */}
            {selectedProvider && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Select Package</h3>
                <div className="grid grid-cols-1 gap-3">
                  {currentProvider?.packages.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                        selectedPackage === pkg.id
                          ? "border-[#0A2357] bg-[#0A2357]/5"
                          : "hover:border-gray-300"
                      }`}
                    >
                <div>
                        <h4 className="font-medium">{pkg.name}</h4>
                        <p className="text-sm text-gray-500">{pkg.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-medium text-[#0A2357]">₦{pkg.price.toLocaleString()}</span>
                        <span className="block text-xs text-gray-500">per month</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Phone Number */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Phone Number
              </label>
              <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter phone number"
                className="h-12 rounded-xl"
              />
              <p className="mt-2 text-sm text-gray-500">
                You&apos;ll receive a confirmation SMS on this number
              </p>
            </div>

            {/* Submit Button */}
            <Button 
              className="w-full h-12 text-lg rounded-xl bg-[#0A2357] hover:bg-[#0A2357]/90"
              disabled={!selectedProvider || !selectedPackage || !smartCardNumber || !phoneNumber}
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

