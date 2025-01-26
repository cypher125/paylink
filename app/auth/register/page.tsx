"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, ArrowLeft, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Define types for form data
interface RegistrationData {
  // Step 1: Basic Info
  fullName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
  acceptTerms: boolean

  // Step 2: Personal Details
  dateOfBirth: string
  gender: string
  address: string
  state: string

  // Step 3: Account Setup
  bankName: string
  accountNumber: string
  accountName: string
  bvn: string

  // Step 4: Preferences
  preferredNetwork: string
  notificationPreference: string[]
  referralCode?: string
}

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    dateOfBirth: "",
    gender: "",
    address: "",
    state: "",
    bankName: "",
    accountNumber: "",
    accountName: "",
    bvn: "",
    preferredNetwork: "",
    notificationPreference: [],
    referralCode: "",
  })

  const updateFormData = (field: keyof RegistrationData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4))
  }

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    // Handle final submission
    console.log('Final form data:', formData)
  }

  const renderStepIndicator = () => (
    <div className="flex justify-center space-x-2 mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div
          key={step}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            step === currentStep
              ? "bg-[#0A2357] w-8"
              : step < currentStep
              ? "bg-[#0A2357]"
              : "bg-gray-200"
          }`}
        />
      ))}
        </div>
  )

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            className="space-y-4"
          >
            {/* Existing Step 1 fields */}
              <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  className="w-full"
                  value={formData.fullName}
                  onChange={(e) => updateFormData('fullName', e.target.value)}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+234 123 456 7890"
                  className="w-full"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full pr-10"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => updateFormData('password', e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full pr-10"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <Checkbox
                id="terms"
                className="mt-1"
                checked={formData.acceptTerms}
                onCheckedChange={(value) => updateFormData('acceptTerms', value)}
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{" "}
                <Link href="/terms" className="text-[#0A2357] hover:text-[#1A3B7C] font-medium">
                  Terms of Service
                </Link>
                {" "}and{" "}
                <Link href="/privacy" className="text-[#0A2357] hover:text-[#1A3B7C] font-medium">
                  Privacy Policy
                </Link>
              </label>
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <Input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <Select
                value={formData.gender}
                onValueChange={(value) => updateFormData('gender', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <Input
                value={formData.address}
                onChange={(e) => updateFormData('address', e.target.value)}
                placeholder="Your residential address"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <Input
                value={formData.state}
                onChange={(e) => updateFormData('state', e.target.value)}
                placeholder="Your state of residence"
                className="w-full"
              />
            </div>
          </motion.div>
        )

      case 3:
        return (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            className="space-y-4"
          >
            {/* Bank Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bank Name
              </label>
              <Select
                value={formData.bankName}
                onValueChange={(value) => updateFormData('bankName', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your bank" />
                </SelectTrigger>
                <SelectContent>
                  {/* Add Nigerian banks */}
                  <SelectItem value="access">Access Bank</SelectItem>
                  <SelectItem value="gtb">GTBank</SelectItem>
                  <SelectItem value="zenith">Zenith Bank</SelectItem>
                  {/* Add more banks */}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Number
              </label>
              <Input
                value={formData.accountNumber}
                onChange={(e) => updateFormData('accountNumber', e.target.value)}
                placeholder="Your 10-digit account number"
                maxLength={10}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Name
              </label>
              <Input
                value={formData.accountName}
                onChange={(e) => updateFormData('accountName', e.target.value)}
                placeholder="Name on your bank account"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                BVN
              </label>
              <Input
                value={formData.bvn}
                onChange={(e) => updateFormData('bvn', e.target.value)}
                placeholder="Bank Verification Number"
                maxLength={11}
                className="w-full"
              />
            </div>
          </motion.div>
        )

      case 4:
        return (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            className="space-y-4"
          >
            {/* Preferences */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Network
              </label>
              <Select
                value={formData.preferredNetwork}
                onValueChange={(value) => updateFormData('preferredNetwork', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select preferred network" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mtn">MTN</SelectItem>
                  <SelectItem value="airtel">Airtel</SelectItem>
                  <SelectItem value="glo">Glo</SelectItem>
                  <SelectItem value="9mobile">9mobile</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Referral Code (Optional)
              </label>
              <Input
                value={formData.referralCode}
                onChange={(e) => updateFormData('referralCode', e.target.value)}
                placeholder="Enter referral code if any"
                className="w-full"
              />
            </div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-lg">
        {/* Logo and Header */}
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

          {/* Add login link below the logo */}
                <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link 
              href="/auth/login" 
              className="text-[#0A2357] hover:text-[#0A2357]/80 font-medium"
            >
              Log in
                  </Link>
                </p>
        </motion.div>

        {/* Step Indicator */}
        {renderStepIndicator()}

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {renderStepContent()}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          )}
          
          <Button
            type="button"
            onClick={currentStep === 4 ? handleSubmit : handleNext}
            className="ml-auto flex items-center"
          >
            {currentStep === 4 ? 'Complete' : 'Next'}
            {currentStep !== 4 && <ArrowRight className="w-4 h-4 ml-2" />}
          </Button>
          </div>

        {/* Progress text */}
        <div className="text-center text-sm text-gray-500 mt-4">
          Step {currentStep} of 4
        </div>
      </div>
    </div>
  )
}

