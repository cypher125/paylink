import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const services = [
  { name: "Airtime", icon: "📱", description: "Buy airtime for any network" },
  { name: "Data Bundle", icon: "🌐", description: "Purchase internet data plans" },
  { name: "Electricity", icon: "⚡", description: "Pay electricity bills" },
  { name: "Cable TV", icon: "📺", description: "Subscribe to TV packages" },
  { name: "Education", icon: "🎓", description: "Pay school fees" },
  { name: "Internet", icon: "💻", description: "Buy internet subscriptions" },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-primary p-4 text-white">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="p-1">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-xl font-semibold">Services</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search services..."
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <div key={service.name} className="rounded-xl bg-white p-4 shadow-card">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                {service.icon}
              </div>
              <h4 className="mb-1 font-medium">{service.name}</h4>
              <p className="mb-3 text-sm text-gray-600">{service.description}</p>
              <button className="w-full rounded-lg bg-primary px-4 py-2 text-sm text-white">SELECT</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

