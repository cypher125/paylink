"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white flex justify-center items-center"
    >
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-center mb-8">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-[#0A2357]" />
              <span className="text-2xl font-bold text-[#0A2357]">PayLink</span>
            </div>
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-[#0A2357] mb-2">Set Your Pin</h1>
        <p className="text-gray-600 mb-8">
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
    </motion.div>
  )
}

