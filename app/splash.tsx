"use client"

import Image from "next/image"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SplashScreen() {
  const router = useRouter()

  useEffect(() => {
    // Auto-redirect to home after 2 seconds
    const timer = setTimeout(() => {
      router.push("/dashboard")
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A2357]">
      <div className="text-center">
        <Image
          src="/placeholder.svg" // Replace with actual logo
          alt="Digixcel"
          width={120}
          height={40}
          className="mx-auto"
          priority
        />
      </div>
    </div>
  )
}

