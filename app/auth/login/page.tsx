"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-lg">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center space-y-6 relative"
        >
          {/* Back Arrow */}
          <Link 
            href="/"
            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-[#0A2357]" />
              <span className="text-2xl font-bold text-[#0A2357]">PayLink</span>
            </div>
          </Link>

          {/* Add register link below the logo */}
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link 
              href="/auth/register" 
              className="text-[#0A2357] hover:text-[#0A2357]/80 font-medium"
            >
              Sign up
            </Link>
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="remember" className="h-4 w-4 rounded border-gray-300" />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Keep me logged in
              </label>
            </div>
            <Link 
              href="/auth/forgot-password"
              className="text-sm font-medium text-[#0A2357] hover:text-[#1A3B7C] transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <Button className="w-full bg-[#0A2357] hover:bg-[#1A3B7C] text-white transition-colors">
            Log in
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link 
                href="/auth/register"
                className="font-medium text-[#0A2357] hover:text-[#1A3B7C] transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Security Note */}
        <div className="text-center text-xs text-gray-500 mt-8">
          <p>Protected by reCAPTCHA and subject to the PayLink</p>
          <p>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            {" "}and{" "}
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

