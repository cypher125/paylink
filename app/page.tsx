"use client"  // Add this since we're using useState and client-side features

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star, Shield, Zap, Users, Phone, Globe, GraduationCap, Tv, BookOpen, HeadphonesIcon } from "lucide-react"
import Link from "next/link"
import { useState, useCallback} from "react"
import { motion } from "framer-motion"

// Define types for stats array
interface Stat {
  label: string
  value: string
  icon: React.ElementType
}

const stats: Stat[] = [
  { label: "Active Users", value: "10K+", icon: Users },
  { label: "Daily Transactions", value: "50K+", icon: Zap },
  { label: "Success Rate", value: "99.9%", icon: CheckCircle },
  { label: "Customer Rating", value: "4.9/5", icon: Star },
]

// Add services data
const services = [
  { 
    title: "Airtime Recharge", 
    description: "Instant recharge for all networks with up to 3% discount",
    icon: Phone,
    features: ["Instant delivery", "All networks supported", "Bulk recharge available"]
  },
  { 
    title: "Data Bundle", 
    description: "Get the best data plans for all networks at discounted rates",
    icon: Globe,
    features: ["Competitive prices", "Instant activation", "Multiple plans"]
  },
  { 
    title: "Exam Payments", 
    description: "Easy payment for WAEC, NECO, JAMB and other examinations",
    icon: GraduationCap,
    features: ["Instant PIN delivery", "Multiple exam boards", "Secure payment"]
  },
  { 
    title: "Cable TV", 
    description: "Renew your DSTV, GOTV, and Startimes subscriptions",
    icon: Tv,
    features: ["All packages available", "Instant activation", "Best rates"]
  },
  { 
    title: "Electricity Bills", 
    description: "Pay electricity bills for any distribution company",
    icon: Zap,
    features: ["All DisCos supported", "Instant token", "Transaction history"]
  },
  { 
    title: "Education", 
    description: "School fees payment and result checker pins",
    icon: BookOpen,
    features: ["Multiple institutions", "Instant verification", "Secure payment"]
  },
]

// Add this new component for the phone frame
const PhoneFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative mx-auto">
      {/* Phone Frame */}
      <div className="relative z-10 rounded-[3rem] overflow-hidden bg-[#0A2357] p-2 phone-frame">
        {/* Screen Glare */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/20 to-transparent z-20 pointer-events-none" />
        
        {/* Side Reflections */}
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-r from-white/40 to-transparent z-20" />
        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-l from-white/40 to-transparent z-20" />
        
        {/* Content */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    // Get the relative position within the hero section
    const heroSection = e.currentTarget as HTMLElement
    const rect = heroSection.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Now with onMouseMove */}
      <section 
        className="relative overflow-hidden bg-gradient-to-br from-[#0A2357] to-[#1A3B7C] text-white min-h-[500px] lg:min-h-[700px]"
        onMouseMove={handleMouseMove}
      >
        {/* Enhanced Grid Background */}
        <div className="absolute inset-0 grid-lines">
          <motion.div
            className="grid-opening-effect"
            animate={{
              x: mousePosition.x - 250, // Center the effect
              y: mousePosition.y - 250,
              opacity: 1
            }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 150,
              mass: 0.1
            }}
          />
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden">
              <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl"
          />
        </div>
        
        <div className="container relative mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16 min-h-[500px] lg:min-h-[700px] flex flex-col">
          {/* Navbar - Slightly reduced padding */}
          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm" />
              <span className="text-3xl font-bold">PayLink</span>
            </div>
            <div className="flex gap-4">
              <Link href="/auth/login">
                <Button
                  variant="ghost"
                  className="rounded-full border-2 border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-[#0A2357] transition-all duration-300"
                >
                  Log In
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button 
                  className="rounded-full bg-white text-[#0A2357] hover:bg-white/90 transition-all duration-300"
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Content */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center my-auto">
            {/* Left Content - Enhanced */}
            <div className="max-w-xl relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
                Your One-Stop{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text">
                  VTU Solution
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Experience seamless and convenient mobile top-ups with Paylink-VTU. 
                Elevate your connectivity effortlessly.
              </p>
                <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="rounded-full bg-white text-[#0A2357] hover:bg-white/90 hover:scale-105 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  Learn More
                </Button>
                </div>

                {/* Added Trust Indicators */}
                <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center"
                    >
                      <stat.icon className="h-6 w-6 mx-auto mb-2 text-blue-300" />
                      <div className="font-bold text-lg">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Content - Enhanced */}
            <div className="relative lg:ml-auto">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Phone Frame */}
                <div className="relative z-[1]">
                  <PhoneFrame>
                <Image
                  src="/app screenshot.jpeg"
                  alt="App Screenshot"
                  width={400}
                  height={800}
                      className="w-full h-auto"
                  priority
                />
                  </PhoneFrame>
              </div>
              
                {/* Floating Features */}
              <motion.div 
                  animate={{
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -right-4 top-1/4 bg-white rounded-xl p-3 shadow-lg z-[20]"
              >
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-800">Instant Recharge</span>
                </div>
              </motion.div>

                <motion.div
                  animate={{
                    y: [10, -10, 10],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -left-4 top-2/4 bg-white rounded-xl p-3 shadow-lg z-[20]"
                >
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-gray-800">Secure Payments</span>
                </div>
              </motion.div>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="text-center"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2357]/10">
                    <Icon className="h-6 w-6 text-[#0A2357]" />
                  </div>
                  <h4 className="text-3xl font-bold text-[#0A2357] mb-2">{stat.value}</h4>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-[#0A2357] mb-12">Why Choose Us?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                title: "Reliability", 
                description: "Trust us with any service you want to access anywhere, anytime.",
                icon: CheckCircle,
                features: ["99.9% Uptime", "Instant Processing", "24/7 System Monitoring"]
              },
              { 
                title: "Security", 
                description: "Your details are well-secured and out of reach for public eyes.",
                icon: Shield,
                features: ["Bank-grade Security", "Encrypted Transactions", "Secure Authentication"]
              },
              { 
                title: "Customer Service", 
                description: "Always available to attend to you when you need us.",
                icon: HeadphonesIcon,
                features: ["24/7 Support", "Multiple Channels", "Quick Resolution"]
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="rounded-full bg-[#0A2357] text-white p-3 inline-block mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-[#0A2357] mb-12">Our Services</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-4 h-12 w-12 rounded-full bg-[#0A2357]/10 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-[#0A2357]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="rounded-full w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#0A2357] to-[#1A3B7C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust PayLink for their daily transactions.
          </p>
          <Button 
            size="lg" 
            className="rounded-full bg-white text-[#0A2357] hover:bg-white/90 hover:scale-105 transition-all duration-300"
          >
            Create Free Account
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A2357] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-300">PayLink is your reliable partner for all digital transactions</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                {["Home", "Services", "About", "Contact"].map((item) => (
                  <li key={item} className="hover:text-white transition-colors">
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>support@digixcel.com</li>
                <li>+234 123 456 7890</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {["Twitter", "Facebook", "Instagram"].map((social) => (
                  <a key={social} href="#" className="text-gray-300 hover:text-white transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>© 2024 Digixcel VTU. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

