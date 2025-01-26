"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"

export default function SetPinPage() {
  const [showPin, setShowPin] = useState(false)
  const [formData, setFormData] = useState({
    pin: "",
    confirmPin: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle pin setup logic
    console.log("Pin Setup:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen flex-col">
        {/* Logo Section */}
        <div className="flex justify-center p-8">
          <Image src="/placeholder.svg" alt="Digixcel Logo" width={120} height={40} priority />
        </div>

        {/* Pin Setup Form */}
        <div className="flex-1 rounded-t-[32px] bg-white px-6 pb-8 pt-8">
          <div className="mx-auto max-w-md">
            <h1 className="mb-2 text-2xl font-bold text-[#0A2357]">Set Your Pin</h1>
            <p className="mb-8 text-gray-600">
              A Four-Numerical Code that will be used authenticate your transactions.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    type={showPin ? "text" : "password"}
                    placeholder="Transaction Pin"
                    value={formData.pin}
                    onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
                    className="h-12 rounded-xl border-gray-200 pr-12"
                    maxLength={4}
                    pattern="[0-9]*"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPin(!showPin)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPin ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <div className="relative">
                  <Input
                    type={showPin ? "text" : "password"}
                    placeholder="Confirm Transaction Pin"
                    value={formData.confirmPin}
                    onChange={(e) => setFormData({ ...formData, confirmPin: e.target.value })}
                    className="h-12 rounded-xl border-gray-200 pr-12"
                    maxLength={4}
                    pattern="[0-9]*"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPin(!showPin)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPin ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="h-12 w-full rounded-xl bg-[#0A2357] text-white">
                Sign-Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

