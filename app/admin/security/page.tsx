"use client"

import { useState } from "react"
import { 
  Shield,
  Key,
  Lock,
  AlertTriangle,
  Eye,
  EyeOff,
  RefreshCw,
  Search,
  Filter,
  Clock,
  CheckCircle2,
  XCircle,
  MoreVertical,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

export default function SecurityPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showApiKey, setShowApiKey] = useState(false)

  // Sample data - replace with real data
  const securitySettings = [
    {
      name: "Two-Factor Authentication",
      description: "Require 2FA for all admin accounts",
      enabled: true,
      icon: Lock,
    },
    {
      name: "IP Whitelisting",
      description: "Restrict access to specific IP addresses",
      enabled: false,
      icon: Shield,
    },
    {
      name: "Session Timeout",
      description: "Automatically logout after inactivity",
      enabled: true,
      icon: Clock,
    },
  ]

  const securityLogs = [
    {
      id: "LOG123",
      event: "Login Attempt",
      status: "success",
      user: "admin@paylink.com",
      ip: "192.168.1.1",
      location: "Lagos, Nigeria",
      timestamp: "2 mins ago",
    },
    {
      id: "LOG124",
      event: "Password Change",
      status: "success",
      user: "john@example.com",
      ip: "192.168.1.2",
      location: "Abuja, Nigeria",
      timestamp: "5 mins ago",
    },
    {
      id: "LOG125",
      event: "Failed Login",
      status: "failed",
      user: "unknown@mail.com",
      ip: "192.168.1.3",
      location: "Unknown",
      timestamp: "10 mins ago",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">Security</h1>
          <p className="text-sm text-gray-500 mt-1">Manage system security and access controls</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Security Settings */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Security Settings</h2>
                  <p className="text-sm text-gray-500">Configure security preferences</p>
                </div>
                <div className="p-2 rounded-xl bg-[#0A2357]/5">
                  <Shield className="w-5 h-5 text-[#0A2357]" />
                </div>
              </div>
              <div className="space-y-6">
                {securitySettings.map((setting) => (
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
                    <Switch checked={setting.enabled} />
                  </div>
                ))}
              </div>
            </div>

            {/* API Keys */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">API Keys</h2>
                  <p className="text-sm text-gray-500">Manage API access tokens</p>
                </div>
                <div className="p-2 rounded-xl bg-[#0A2357]/5">
                  <Key className="w-5 h-5 text-[#0A2357]" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Input 
                    type={showApiKey ? "text" : "password"} 
                    value="pk_test_51NxrT7H..."
                    className="font-mono text-sm"
                    readOnly
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="shrink-0"
                  >
                    {showApiKey ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </Button>
                  <Button variant="outline" size="icon" className="shrink-0">
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </div>
                <Button className="w-full bg-[#0A2357] hover:bg-[#0A2357]/90 text-white rounded-xl">
                  Generate New Key
                </Button>
              </div>
            </div>
          </div>

          {/* Security Logs */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Security Logs</h2>
                <p className="text-sm text-gray-500">Monitor security events and activities</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="gap-2 rounded-xl">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
                <Button className="bg-[#0A2357] hover:bg-[#0A2357]/90 text-white rounded-xl">
                  Export Logs
                </Button>
              </div>
            </div>

            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Search security logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-xl border-gray-200"
              />
            </div>

            <div className="space-y-4">
              {securityLogs.map((log) => (
                <div key={log.id} className="flex items-start justify-between p-4 rounded-xl border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-xl ${
                      log.status === "success" 
                        ? "bg-green-50" 
                        : "bg-red-50"
                    }`}>
                      {log.status === "success" ? (
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-gray-900">{log.event}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          log.status === "success"
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                        }`}>
                          {log.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">User: {log.user}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        <span>IP: {log.ip}</span>
                        <span>{log.location}</span>
                        <span>{log.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4 text-gray-500" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Security Alerts */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-100">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-amber-100">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium text-amber-800">Security Alert</p>
                  <p className="text-sm text-amber-700 mt-1">
                    3 failed login attempts detected from IP 192.168.1.3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 