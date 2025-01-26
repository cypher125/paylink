"use client"

import Link from "next/link"
import { Home, Wallet, Plus, User, Settings } from "lucide-react"
import { usePathname } from "next/navigation"

export function BottomMenu() {
  const pathname = usePathname()

  const menuItems = [
    { icon: Home, name: "Home", href: "/dashboard" },
    { icon: Wallet, name: "Wallet", href: "/dashboard/wallet" },
    { icon: Plus, name: "Fund", href: "/dashboard/fund-account", primary: true },
    { icon: User, name: "Profile", href: "/dashboard/profile" },
    { icon: Settings, name: "Settings", href: "/dashboard/settings" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t lg:hidden">
      <div className="grid grid-cols-5 gap-1 p-2">
        <Link href="/dashboard" className="flex flex-col items-center p-2">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="/dashboard/wallet" className="flex flex-col items-center p-2">
          <Wallet className="w-6 h-6" />
          <span className="text-xs mt-1">Wallet</span>
        </Link>
        <Link href="/dashboard/fund-account" className="flex flex-col items-center p-2">
          <div className="bg-[#0A2357] p-3 rounded-full -mt-6">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs mt-1">Fund</span>
        </Link>
        <Link href="/dashboard/profile" className="flex flex-col items-center p-2">
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
        <Link href="/dashboard/settings" className="flex flex-col items-center p-2">
          <Settings className="w-6 h-6" />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </div>
    </div>
  )
}

