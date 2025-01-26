"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { 
  Home, 
  Wallet, 
  User, 
  Settings, 
  LogOut,
} from "lucide-react"

const sidebarLinks = [
  { icon: Home, name: "Dashboard", href: "/dashboard" },
  { icon: Wallet, name: "Wallet", href: "/dashboard/wallet" },
  { icon: User, name: "Profile", href: "/dashboard/profile" },
  { icon: Settings, name: "Settings", href: "/dashboard/settings" },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg hidden lg:block">
        <div className="p-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="PayLink" width={32} height={32} />
            <span className="text-xl font-bold text-[#0A2357]">PayLink</span>
          </Link>
        </div>
        
        <nav className="mt-6">
          {sidebarLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-[#0A2357] transition-colors ${
                pathname === item.href 
                  ? "bg-gray-50 text-[#0A2357] border-r-4 border-[#0A2357]" 
                  : ""
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
      <main className="lg:ml-64">
        {children}
      </main>
    </div>
  )
} 