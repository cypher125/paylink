"use client"

import { useState } from "react"
import { 
  Settings,
  Bell,
  Globe,
  Moon,
  Sun,
  Database,
  Mail,
  Languages,
  Clock,
  Smartphone,
  Save,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Select } from "@/components/ui/select"

export default function SettingsPage() {
  // Sample data - replace with real data
  const [settings, setSettings] = useState({
    theme: "light",
    language: "en",
    timezone: "WAT",
    emailNotifications: true,
    pushNotifications: true,
    autoBackup: true,
    maintenanceMode: false,
  })

  const notificationSettings = [
    {
      name: "Email Notifications",
      description: "Receive important updates via email",
      enabled: settings.emailNotifications,
      icon: Mail,
    },
    {
      name: "Push Notifications",
      description: "Get instant notifications on your device",
      enabled: settings.pushNotifications,
      icon: Smartphone,
    },
  ]

  const systemSettings = [
    {
      name: "Automatic Backup",
      description: "Backup system data every 24 hours",
      enabled: settings.autoBackup,
      icon: Database,
    },
    {
      name: "Maintenance Mode",
      description: "Put system in maintenance mode",
      enabled: settings.maintenanceMode,
      icon: Settings,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
          <p className="text-sm text-gray-500 mt-1">Manage system preferences and configurations</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-8 py-8">
        <div className="space-y-6">
          {/* Appearance Settings */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Appearance</h2>
                <p className="text-sm text-gray-500">Customize your admin interface</p>
              </div>
              <div className="p-2 rounded-xl bg-[#0A2357]/5">
                <Moon className="w-5 h-5 text-[#0A2357]" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Theme Mode</p>
                  <p className="text-sm text-gray-500">Choose your preferred theme</p>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-lg">
                  <Button 
                    variant={settings.theme === "light" ? "default" : "ghost"}
                    size="sm"
                    className={settings.theme === "light" ? "bg-[#0A2357] text-white" : ""}
                    onClick={() => setSettings({ ...settings, theme: "light" })}
                  >
                    <Sun className="w-4 h-4 mr-2" />
                    Light
                  </Button>
                  <Button
                    variant={settings.theme === "dark" ? "default" : "ghost"}
                    size="sm"
                    className={settings.theme === "dark" ? "bg-[#0A2357] text-white" : ""}
                    onClick={() => setSettings({ ...settings, theme: "dark" })}
                  >
                    <Moon className="w-4 h-4 mr-2" />
                    Dark
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Localization Settings */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Localization</h2>
                <p className="text-sm text-gray-500">Configure regional settings</p>
              </div>
              <div className="p-2 rounded-xl bg-[#0A2357]/5">
                <Globe className="w-5 h-5 text-[#0A2357]" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Language</label>
                <select 
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-200 rounded-xl focus:outline-none focus:ring-[#0A2357] focus:border-[#0A2357] sm:text-sm"
                  value={settings.language}
                  onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                >
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Timezone</label>
                <select 
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-200 rounded-xl focus:outline-none focus:ring-[#0A2357] focus:border-[#0A2357] sm:text-sm"
                  value={settings.timezone}
                  onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                >
                  <option value="WAT">West Africa Time (WAT)</option>
                  <option value="GMT">Greenwich Mean Time (GMT)</option>
                  <option value="EST">Eastern Standard Time (EST)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
                <p className="text-sm text-gray-500">Manage notification preferences</p>
              </div>
              <div className="p-2 rounded-xl bg-[#0A2357]/5">
                <Bell className="w-5 h-5 text-[#0A2357]" />
              </div>
            </div>
            <div className="space-y-6">
              {notificationSettings.map((setting) => (
                <div key={setting.name} className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-[#0A2357]/5 mt-1">
                      <setting.icon className="w-4 h-4 text-[#0A2357]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{setting.name}</p>
                      <p className="text-sm text-gray-500">{setting.description}</p>
                    </div>
                  </div>
                  <Switch 
                    checked={setting.enabled}
                    onCheckedChange={(checked) => 
                      setSettings({ 
                        ...settings, 
                        [setting.name === "Email Notifications" ? "emailNotifications" : "pushNotifications"]: checked 
                      })
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          {/* System Settings */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">System</h2>
                <p className="text-sm text-gray-500">Configure system settings</p>
              </div>
              <div className="p-2 rounded-xl bg-[#0A2357]/5">
                <Settings className="w-5 h-5 text-[#0A2357]" />
              </div>
            </div>
            <div className="space-y-6">
              {systemSettings.map((setting) => (
                <div key={setting.name} className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-[#0A2357]/5 mt-1">
                      <setting.icon className="w-4 h-4 text-[#0A2357]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{setting.name}</p>
                      <p className="text-sm text-gray-500">{setting.description}</p>
                    </div>
                  </div>
                  <Switch 
                    checked={setting.enabled}
                    onCheckedChange={(checked) => 
                      setSettings({ 
                        ...settings, 
                        [setting.name === "Automatic Backup" ? "autoBackup" : "maintenanceMode"]: checked 
                      })
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Save Changes */}
          <div className="flex justify-end">
            <Button className="bg-[#0A2357] hover:bg-[#0A2357]/90 text-white rounded-xl gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 