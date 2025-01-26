"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  LayoutDashboard,
  Users,
  CreditCard,
  BarChart3,
  Settings,
  Shield,
  LogOut,
  Wallet,
} from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const navigation = [
    { 
      icon: LayoutDashboard, 
      name: "Overview", 
      href: "/admin",
      description: "Dashboard analytics" 
    },
    { 
      icon: Users, 
      name: "Users", 
      href: "/admin/users",
      description: "Manage user accounts" 
    },
    { 
      icon: CreditCard, 
      name: "Transactions", 
      href: "/admin/transactions",
      description: "View all transactions" 
    },
    { 
      icon: Wallet, 
      name: "Wallets", 
      href: "/admin/wallets",
      description: "Monitor user wallets" 
    },
    { 
      icon: BarChart3, 
      name: "Analytics", 
      href: "/admin/analytics",
      description: "Business insights" 
    },
    { 
      icon: Shield, 
      name: "Security", 
      href: "/admin/security",
      description: "Security settings" 
    },
    { 
      icon: Settings, 
      name: "Settings", 
      href: "/admin/settings",
      description: "Admin preferences" 
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-80 bg-white border-r border-gray-100 hidden lg:flex lg:flex-col">
        {/* Logo Section */}
        <div className="p-8 border-b border-gray-100">
          <Link href="/admin" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-[#0A2357]/20 backdrop-blur-sm flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#0A2357]" />
            </div>
            <div>
              <span className="text-2xl font-bold text-[#0A2357]">PayLink</span>
              <span className="text-xs font-medium text-[#0A2357]/60 block -mt-1">Admin Portal</span>
            </div>
          </Link>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 py-8 px-6">
          <div className="space-y-1.5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-start gap-4 px-4 py-3.5 rounded-2xl hover:bg-gray-50 transition-all group ${
                  item.name === "Overview" 
                    ? "bg-[#0A2357]/5 text-[#0A2357]" 
                    : "text-gray-600"
                }`}
              >
                <div className={`p-2 rounded-xl ${
                  item.name === "Overview"
                    ? "bg-[#0A2357] text-white"
                    : "bg-gray-100 group-hover:bg-[#0A2357]/10 group-hover:text-[#0A2357]"
                }`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className={`font-medium ${
                    item.name === "Overview"
                      ? "text-[#0A2357]"
                      : "text-gray-700 group-hover:text-[#0A2357]"
                  }`}>
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="p-6 border-t border-gray-100">
          <div className="bg-gray-50 rounded-2xl p-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-[#0A2357] text-white flex items-center justify-center">
                <span className="text-sm font-medium">AD</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Admin User</p>
                <p className="text-sm text-gray-500">admin@paylink.com</p>
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl py-3 border-red-100"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-80">
        {children}
      </main>
    </div>
  )
} 