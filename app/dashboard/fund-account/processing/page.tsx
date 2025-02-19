"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  ArrowLeft, 
  Loader2, 
  CheckCircle2, 
  XCircle,
  AlertCircle,
  Home
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BottomMenu } from "@/components/BottomMenu"

type PaymentStatus = 'processing' | 'success' | 'failed'

export default function PaymentProcessingPage() {
  const router = useRouter()
  const [status, setStatus] = useState<PaymentStatus>('processing')
  const [progress, setProgress] = useState(0)

  // Simulated payment verification - Replace with actual API calls
  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        // Simulate API call to check payment status
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Random success/failure for demo
        const isSuccess = Math.random() > 0.3
        setStatus(isSuccess ? 'success' : 'failed')

        if (isSuccess) {
          // Redirect to success page after a brief delay
          setTimeout(() => {
            router.push('/dashboard/transactions/success')
          }, 1500)
        }
      } catch  {
        setStatus('failed')
      }
    }

    // Start progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev
        return prev + 10
      })
    }, 1000)

    // Check payment status
    checkPaymentStatus()

    return () => clearInterval(progressInterval)
  }, [router])

  const statusConfig = {
    processing: {
      title: "Processing Payment",
      description: "Please wait while we verify your payment...",
      icon: <Loader2 className="w-8 h-8 animate-spin" />,
      color: "text-blue-600 bg-blue-100"
    },
    success: {
      title: "Payment Successful",
      description: "Your payment has been confirmed!",
      icon: <CheckCircle2 className="w-8 h-8" />,
      color: "text-green-600 bg-green-100"
    },
    failed: {
      title: "Payment Failed",
      description: "We couldn't verify your payment. Please try again.",
      icon: <XCircle className="w-8 h-8" />,
      color: "text-red-600 bg-red-100"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      <header className="bg-white border-b">
        <div className="flex items-center p-4 lg:px-8 max-w-7xl mx-auto">
          <Link href="/dashboard/fund-account" className="text-gray-600">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold ml-4">Payment Status</h1>
        </div>
      </header>

      <div className="p-4 lg:p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Status Card */}
          <Card className="p-6 rounded-2xl">
            <div className="text-center">
              <div className={`inline-flex p-3 rounded-full ${statusConfig[status].color} mb-4`}>
                {statusConfig[status].icon}
              </div>
              <h2 className="text-2xl font-bold mb-2">{statusConfig[status].title}</h2>
              <p className="text-gray-600 mb-6">{statusConfig[status].description}</p>

              {/* Progress Bar */}
              {status === 'processing' && (
                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}

              {/* Amount */}
              <div className={`rounded-xl p-4 mb-6 ${
                status === 'processing' ? 'bg-blue-50' :
                status === 'success' ? 'bg-green-50' :
                'bg-red-50'
              }`}>
                <p className={`text-2xl font-bold ${
                  status === 'processing' ? 'text-blue-600' :
                  status === 'success' ? 'text-green-600' :
                  'text-red-600'
                }`}>
                  ₦5,000.00
                </p>
              </div>
            </div>

            {/* Warning for Processing */}
            {status === 'processing' && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  Please don&apos;t close this page while we verify your payment.
                </p>
              </div>
            )}

            {/* Action Buttons */}
            {status === 'failed' && (
              <div className="grid gap-4 mt-6">
                <Button 
                  onClick={() => router.push('/dashboard/fund-account')}
                  className="w-full h-12 text-lg rounded-xl bg-[#0A2357] hover:bg-[#0A2357]/90"
                >
                  Try Again
                </Button>
                <Link href="/dashboard">
                  <Button 
                    variant="outline"
                    className="w-full h-12 text-lg rounded-xl"
                  >
                    <Home className="w-5 h-5 mr-2" />
                    Back to Home
                  </Button>
                </Link>
              </div>
            )}
          </Card>
        </div>
      </div>
      
      <BottomMenu />
    </div>
  )
} 