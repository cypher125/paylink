"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  Shield, 
  Copy, 
  CheckCheck,
  Calendar,
  MapPin,
  CreditCard,
  Building
} from "lucide-react"
import Link from "next/link"
import { BottomMenu } from "@/components/BottomMenu"

interface UserProfile {
  fullName: string
  email: string
  phone: string
  bvn: string
  dob: string
  address: string
  state: string
  bankName: string
  accountNumber: string
  accountType: string
  dateJoined: string
  kycLevel: number
  occupation: string
}

export default function ProfilePage() {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  
  // This would come from your API
  const userProfile: UserProfile = {
    fullName: "John Doe",
    email: "john@example.com",
    phone: "08012345678",
    bvn: "123****890", // Masked BVN
    dob: "01/01/1990",
    address: "123 Main Street",
    state: "Lagos",
    bankName: "Wema Bank",
    accountNumber: "1234567890",
    accountType: "Savings",
    dateJoined: "April 2024",
    kycLevel: 2,
    occupation: "Software Engineer"
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      <header className="bg-white border-b">
        <div className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-600">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-semibold">Profile</h1>
          </div>
          <Link href="/dashboard/profile/edit">
            <Button variant="outline">Edit Profile</Button>
          </Link>
        </div>
      </header>

      <div className="p-4 lg:p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Profile Overview Card */}
          <Card className="p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#0A2357] text-white flex items-center justify-center text-2xl font-semibold">
                {userProfile.fullName.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{userProfile.fullName}</h2>
                <p className="text-gray-500">Joined {userProfile.dateJoined}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-sm text-gray-600">KYC Level</p>
                <p className="text-lg font-semibold text-[#0A2357]">Level {userProfile.kycLevel}</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-sm text-gray-600">Account Status</p>
                <p className="text-lg font-semibold text-green-600">Active</p>
              </div>
            </div>
          </Card>

          {/* Personal Information */}
          <Card className="p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email Address", value: userProfile.email },
                { icon: Phone, label: "Phone Number", value: userProfile.phone },
                { icon: Shield, label: "BVN", value: userProfile.bvn },
                { icon: Calendar, label: "Date of Birth", value: userProfile.dob },
                { icon: MapPin, label: "Address", value: userProfile.address },
                { icon: MapPin, label: "State", value: userProfile.state },
                { icon: User, label: "Occupation", value: userProfile.occupation },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <item.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                  {['Email Address', 'Phone Number'].includes(item.label) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(item.value, item.label)}
                      className="flex items-center gap-2"
                    >
                      {copiedField === item.label ? (
                        <CheckCheck className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Bank Account Information */}
          <Card className="p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4">Bank Account Information</h3>
            <div className="space-y-4">
              {[
                { icon: Building, label: "Bank Name", value: userProfile.bankName },
                { icon: CreditCard, label: "Account Number", value: userProfile.accountNumber },
                { icon: CreditCard, label: "Account Type", value: userProfile.accountType },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <item.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                  {item.label === 'Account Number' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(item.value, item.label)}
                      className="flex items-center gap-2"
                    >
                      {copiedField === item.label ? (
                        <CheckCheck className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  )}
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

