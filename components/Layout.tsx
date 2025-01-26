import type React from "react"
import Head from "next/head"
import Link from "next/link"
import { Button } from "./Button"

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title = "VTU Website" }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Head>
        <title>{title}</title>
        <meta name="description" content="VTU Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="bg-primary text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            VTU Website
          </Link>
          <div className="space-x-4">
            <Link href="/auth/login" className="hover:underline">
              Login
            </Link>
            <Button intent="secondary" size="small">
              <Link href="/auth/register" className="text-white no-underline">
                Register
              </Link>
            </Button>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}

