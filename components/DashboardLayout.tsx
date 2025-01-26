import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Layout from "./Layout"
import { Button } from "./Button"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: "🏠" },
  { name: "Wallet", href: "/dashboard/wallet", icon: "💰" },
  { name: "Services", href: "/dashboard/services", icon: "⚙️" },
  { name: "Transactions", href: "/dashboard/transactions", icon: "💸" },
  { name: "Profile", href: "/dashboard/profile", icon: "👤" },
]

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()

  return (
    <Layout title="Dashboard - VTU Website">
      <div className="flex h-screen bg-gray-100">
        <aside className="w-64 bg-white shadow-md">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-primary">VTU Website</h1>
          </div>
          <nav className="mt-8">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link href={item.href} passHref>
                      <Button
                        intent={isActive ? "secondary" : "primary"}
                        size="small"
                        className={`w-full justify-start ${isActive ? "bg-primary-light text-primary" : ""}`}
                      >
                        {item.icon} {item.name}
                      </Button>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </Layout>
  )
}

