"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Copy, Share2, Users, Gift, Coins } from "lucide-react"
import Link from "next/link"
import { BottomMenu } from "@/components/BottomMenu"

export default function ReferralPage() {
  const [referralCode] = useState("PAYLINK123")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const referralStats = [
    { label: "Total Referrals", value: "0", icon: Users },
    { label: "Total Earnings", value: "₦0.00", icon: Coins },
    { label: "Pending Rewards", value: "₦0.00", icon: Gift },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-600">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-semibold">Refer & Earn</h1>
          </div>
          <Link href="/dashboard/profile" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#0A2357] text-white flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
          </Link>
        </div>
      </header>

      <div className="p-4 lg:p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Main Referral Card */}
          <Card className="p-6 rounded-2xl shadow-sm bg-gradient-to-r from-[#0A2357] to-[#1A3B7C] text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Invite Friends & Earn</h2>
              <p className="text-gray-200">
                Share your referral code with friends and earn ₦500 when they sign up and make their first transaction
              </p>
            </div>

            {/* Referral Code */}
            <div className="mb-8">
              <label className="text-sm font-medium text-gray-200 mb-2 block">
                Your Referral Code
              </label>
              <div className="flex gap-2">
                <div className="flex-1 bg-white/10 backdrop-blur-sm h-12 rounded-xl flex items-center justify-center font-mono text-lg">
                  {referralCode}
                </div>
                <Button
                  variant="outline"
                  className="h-12 px-6 border-white/20 bg-white/10 text-white hover:bg-white/20"
                  onClick={copyToClipboard}
                >
                  {copied ? "Copied!" : <Copy className="h-5 w-5" />}
                </Button>
              </div>
            </div>

            {/* Share Button */}
            <Button 
              className="w-full h-12 text-lg rounded-xl bg-white text-[#0A2357] hover:bg-white/90"
            >
              <Share2 className="h-5 w-5 mr-2" />
              Share with Friends
            </Button>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {referralStats.map((stat) => (
              <Card key={stat.label} className="p-4 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[#0A2357]/10">
                    <stat.icon className="w-6 h-6 text-[#0A2357]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-xl font-bold text-[#0A2357]">{stat.value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* How it Works */}
          <Card className="p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">How it Works</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Share your Code",
                  description: "Share your unique referral code with friends and family"
                },
                {
                  title: "Friends Sign Up",
                  description: "They create an account using your referral code"
                },
                {
                  title: "They Transact",
                  description: "When they complete their first transaction"
                },
                {
                  title: "You Earn",
                  description: "You earn ₦500 for each successful referral"
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0A2357] text-white flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
      
      <BottomMenu />
    </div>
  )
} 