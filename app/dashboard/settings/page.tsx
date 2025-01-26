"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      {/* Header */}
      <header className="bg-white border-b">
        <div className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-600">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-semibold">Settings</h1>
          </div>
          <Link href="/dashboard/profile" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#0A2357] text-white flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
          </Link>
        </div>
      </header>

      <div className="px-6 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-6">Account Settings</h2>
            <div className="space-y-4">
              <Link href="/dashboard/settings/profile" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-gray-700">Edit Profile</span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </Link>
              <Link href="/dashboard/settings/security" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-gray-700">Security</span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </Link>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-6">Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 px-2">
                <span className="text-gray-700">Notifications</span>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
              </div>
              <div className="flex items-center justify-between py-3 px-2">
                <span className="text-gray-700">Dark Mode</span>
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-6">Support</h2>
            <div className="space-y-4">
              <Link href="/dashboard/settings/help" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-gray-700">Help Center</span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </Link>
              <Link href="/dashboard/settings/contact" className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-gray-700">Contact Us</span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </Link>
            </div>
          </div>

          <Button variant="outline" className="w-full rounded-xl py-6 text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors">
            Log Out
          </Button>
        </div>
      </div>
    </div>
  )
}

