"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BottomMenu } from "@/components/BottomMenu"

const examTypes = [
  { id: "waec", name: "WAEC", image: "/exams/waec.png", price: "₦3,500" },
  { id: "neco", name: "NECO", image: "/exams/neco.png", price: "₦3,000" },
  { id: "jamb", name: "JAMB", image: "/exams/jamb.png", price: "₦4,700" },
  { id: "nabteb", name: "NABTEB", image: "/exams/nabteb.png", price: "₦3,200" },
]

export default function ExamPinPage() {
  const [selectedExam, setSelectedExam] = useState("")
  const [quantity, setQuantity] = useState("1")
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-600">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-semibold">Buy Exam Pin</h1>
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
            {/* Exam Type Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Select Exam Type</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {examTypes.map((exam) => (
                  <button
                    key={exam.id}
                    onClick={() => setSelectedExam(exam.id)}
                    className={`flex flex-col items-center rounded-xl p-4 transition-all duration-300 ${
                      selectedExam === exam.id
                        ? "bg-[#0A2357] text-white shadow-md scale-105"
                        : "bg-white hover:bg-gray-50 hover:shadow-sm"
                    }`}
                  >
                    <div className={`mb-2 rounded-xl p-2 ${
                      selectedExam === exam.id ? "bg-white/10" : "bg-gray-50"
                    }`}>
                      <Image
                        src={exam.image}
                        alt={exam.name}
                        width={40}
                        height={40}
                        className="h-8 w-8"
                      />
                    </div>
                    <span className="text-xs font-medium mb-1">{exam.name}</span>
                    <span className={`text-xs ${
                      selectedExam === exam.id ? "text-white/80" : "text-gray-500"
                    }`}>
                      {exam.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Number of PINs
              </label>
              <div className="flex items-center gap-4">
                {["1", "2", "5", "10"].map((num) => (
                  <button
                    key={num}
                    onClick={() => setQuantity(num)}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                      quantity === num
                        ? "bg-[#0A2357] text-white"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Email Address
              </label>
              <div className="relative">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="h-12 rounded-xl"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                PIN(s) will be sent to this email address
              </p>
            </div>

            {/* Order Summary */}
            {selectedExam && (
              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <h4 className="font-medium mb-3">Order Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Exam Type:</span>
                    <span className="font-medium">{examTypes.find(e => e.id === selectedExam)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quantity:</span>
                    <span className="font-medium">{quantity}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-gray-600">Total Amount:</span>
                    <span className="font-medium text-[#0A2357]">
                      ₦{(parseInt(quantity) * parseInt(examTypes.find(e => e.id === selectedExam)?.price.replace(/[^\d]/g, '') || "0")).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button 
              className="w-full h-12 text-lg rounded-xl bg-[#0A2357] hover:bg-[#0A2357]/90"
              disabled={!selectedExam || !email}
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