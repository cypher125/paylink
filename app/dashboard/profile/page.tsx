"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Camera, Mail, Phone, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BottomMenu } from "@/components/BottomMenu"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "08012345678",
    avatar: "/placeholder-avatar.jpg"
  })

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      <header className="bg-white border-b">
        <div className="flex items-center justify-between p-4 lg:px-8">
        <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-600 lg:hidden">
            <ArrowLeft className="h-6 w-6" />
          </Link>
            <h1 className="text-xl font-semibold">Profile</h1>
          </div>
          <Button
            variant={isEditing ? "outline" : "default"}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </Button>
        </div>
      </header>

      <div className="p-4 lg:p-8 max-w-2xl mx-auto">
        <Card className="p-6 rounded-2xl shadow-sm">
                {/* Profile Picture */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
                    <Image
                src={profileData.avatar}
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full"
              />
              {isEditing && (
                <button className="absolute bottom-0 right-0 p-2 bg-[#0A2357] rounded-full text-white">
                  <Camera className="w-5 h-5" />
                    </button>
              )}
                  </div>
                </div>

          {/* Profile Form */}
                  <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Full Name
              </label>
              <div className="relative">
                        <Input
                  value={profileData.fullName}
                  onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                          disabled={!isEditing}
                  className="pl-10 h-12"
                        />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      </div>
                    </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Email Address
              </label>
              <div className="relative">
                        <Input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                          disabled={!isEditing}
                  className="pl-10 h-12"
                        />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      </div>
                    </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Phone Number
              </label>
              <div className="relative">
                        <Input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                          disabled={!isEditing}
                  className="pl-10 h-12"
                        />
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>

            {isEditing && (
              <Button className="w-full h-12 text-lg bg-[#0A2357] hover:bg-[#0A2357]/90">
                        Save Changes
                      </Button>
            )}
          </div>
        </Card>
      </div>
      
      <BottomMenu />
    </div>
  )
}

