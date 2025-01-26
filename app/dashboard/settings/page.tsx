"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white p-4">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-gray-600">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg font-semibold">Settings</h1>
        </div>
      </div>

      <div className="p-4">
        <div className="space-y-6">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
            <Link href="/dashboard/settings/profile" className="flex items-center justify-between py-2">
              <span>Edit Profile</span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
            <Link href="/dashboard/settings/security" className="flex items-center justify-between py-2">
              <span>Security</span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Preferences</h2>
            <div className="flex items-center justify-between py-2">
              <span>Notifications</span>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Dark Mode</span>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <Link href="/dashboard/settings/help" className="flex items-center justify-between py-2">
              <span>Help Center</span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
            <Link href="/dashboard/settings/contact" className="flex items-center justify-between py-2">
              <span>Contact Us</span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
          </div>

          <Button variant="outline" className="w-full rounded-xl py-6 text-red-500">
            Log Out
          </Button>
        </div>
      </div>
    </div>
  )
}

