"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Home, 
  Wallet, 
  User, 
  Settings, 
  Phone,
  Globe,
  BookOpen,
  Tv,
  Zap,
  Users,
  LogOut,
  Bell, 
  ArrowRight,
  Plus, 
  History,
  Eye,
  EyeOff,
} from "lucide-react"
import { BottomMenu } from "@/components/BottomMenu"

interface Transaction {
  id: string
  type: string
  name: string
  date: string
  amount: string
  status: 'completed' | 'pending' | 'failed'
  icon: string
}

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(true)

  const quickServices = [
    { 
      icon: Phone, 
      name: "Airtime", 
      href: "/dashboard/airtime",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    { 
      icon: Globe, 
      name: "Data Bundle", 
      href: "/dashboard/data-bundle",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    { 
      icon: BookOpen, 
      name: "Exam Pin", 
      href: "/dashboard/exam",
      iconBg: "bg-green-50",
      iconColor: "text-green-500"
    },
    { 
      icon: Zap, 
      name: "Electricity", 
      href: "/dashboard/electricity",
      iconBg: "bg-yellow-50",
      iconColor: "text-yellow-500"
    },
    { 
      icon: Tv, 
      name: "Cable TV", 
      href: "/dashboard/cable-tv",
      iconBg: "bg-red-50",
      iconColor: "text-red-500"
    },
    { 
      icon: Users, 
      name: "Refer&Earn", 
      href: "/dashboard/referral",
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-500"
    },
  ]

  const recentTransactions: Transaction[] = [
    {
      id: "1",
      type: "airtime",
      name: "MTN Airtime",
      date: "Today, 3:45pm",
      amount: "₦500",
      status: "completed",
      icon: "/providers/mtn.jpg"
    },
    {
      id: "2", 
      type: "data",
      name: "GLO Data Bundle",
      date: "Yesterday, 2:30pm",
      amount: "₦1,500",
      status: "completed",
      icon: "/providers/glo.png"
    },
    {
      id: "3",
      type: "electricity",
      name: "IKEDC Prepaid",
      date: "23 Oct, 11:20am", 
      amount: "₦10,000",
      status: "pending",
      icon: "/providers/ikedc.png"
    },
    {
      id: "4",
      type: "tv",
      name: "DSTV Premium",
      date: "21 Oct, 9:15am",
      amount: "₦24,500",
      status: "failed",
      icon: "/providers/dstv.png"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg hidden lg:block">
        <div className="p-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="PayLink" width={32} height={32} />
            <span className="text-xl font-bold text-[#0A2357]">PayLink</span>
          </Link>
          </div>
        
        <nav className="mt-6">
          {[
            { icon: Home, name: "Dashboard", href: "/dashboard" },
            { icon: Wallet, name: "Wallet", href: "/dashboard/wallet" },
            { icon: User, name: "Profile", href: "/dashboard/profile" },
            { icon: Settings, name: "Settings", href: "/dashboard/settings" },
          ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
              className={`flex items-center space-x-3 px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-[#0A2357] transition-colors ${
                item.name === "Dashboard" ? "bg-gray-50 text-[#0A2357] border-r-4 border-[#0A2357]" : ""
              }`}
              >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
              </Link>
            ))}
          </nav>

        <div className="absolute bottom-8 w-full px-6">
          <Button
            variant="outline"
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
          >
            <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b">
          <div className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
            <Link href="/dashboard/profile" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#0A2357] text-white flex items-center justify-center">
                <span className="text-sm font-medium">JD</span>
              </div>
            </Link>
            <button className="relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </header>

        {/* Main Content Container - Using the same max-width as header */}
        <div className="p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-gradient-to-r from-[#0A2357] to-[#1A3B7C] text-white p-6 rounded-2xl shadow-lg">
              <div className="flex flex-col space-y-4">
                {/* Balance Section */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                  <Link href="/dashboard/fund-account">
                    <Button
                      variant="outline" 
                      size="icon"
                      className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20 h-10 w-10"
                    >
                      <Plus className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/dashboard/transactions">
                    <Button
                      variant="outline"
                      size="icon" 
                      className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20 h-10 w-10"
                    >
                      <History className="h-5 w-5" />
                    </Button>
                  </Link>
                  </div>
                  <button 
                    onClick={() => setShowBalance(!showBalance)}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {showBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                  </button>
                </div>

                {/* Balance Amount */}
                <div className="text-3xl font-bold mb-2">
                  {showBalance ? "₦15,000.00" : "****"}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-sm opacity-80">This Month</p>
                    <p className="text-lg font-semibold">₦45,000.00</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-sm opacity-80">Total Spent</p>
                    <p className="text-lg font-semibold">₦120,000.00</p>
                  </div>
                </div>
            </div>
          </Card>

            {/* Quick Services Section */}
            <section className="mt-8">
              <h2 className="text-lg font-medium mb-4">Quick Services</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {quickServices.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="bg-white rounded-xl p-4 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`${service.iconBg} ${service.iconColor} p-3 rounded-lg`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {service.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Link href="/dashboard/fund-account">
                  <Button 
                    variant="outline" 
                    className="w-full h-12 rounded-xl flex items-center justify-center gap-2"
                  >
                    <Plus className="w-5 h-5" />
                    Fund Account
                  </Button>
                </Link>
                <Link href="/dashboard/transactions">
                  <Button 
                    variant="outline" 
                    className="w-full h-12 rounded-xl flex items-center justify-center gap-2"
                  >
                    <History className="w-5 h-5" />
                    Transaction History
                  </Button>
                </Link>
              </div>
            </section>

            {/* Recent Transactions - Enhanced */}
            <section className="mt-8 mb-20 lg:mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Recent Transactions</h2>
                <Link href="/dashboard/transactions">
                  <Button variant="link" className="text-[#0A2357]">
                    View All <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
            </div>
              <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-100">
                {recentTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-50 p-2 flex items-center justify-center">
                        <Image
                          src={transaction.icon}
                          alt={transaction.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{transaction.name}</h3>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                    <div className="text-right">
                      <span className="font-medium text-gray-900">{transaction.amount}</span>
                      <span className={`block text-sm ${
                        transaction.status === 'completed' ? 'text-green-500' :
                        transaction.status === 'pending' ? 'text-yellow-500' :
                        'text-red-500'
                      }`}>
                        {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <BottomMenu />
    </div>
  )
}

