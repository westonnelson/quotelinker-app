import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AgentBenefitsGrid from "@/components/agent-benefits-grid"
import LeadPreviewCard from "@/components/lead-preview-card"

export default function ForAgentsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-accent">
                Tired of Fighting for Low-Intent, Overpriced Leads?
              </h1>
              <p className="text-xl mb-8 text-gray-600">
                Welcome to QuoteLinker — where every lead is yours alone. Local consumers, real-time delivery, and full
                transparency.
              </p>
              <Link href="/contact">
                <Button className="btn-secondary text-lg px-8 py-4">Request Pricing</Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                alt="Insurance agent at desk talking to customer"
                width={800}
                height={600}
                className="rounded-lg shadow-xl object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">High-Intent Leads Delivered Exclusively to You</h2>
            <p className="section-subtitle mx-auto">No more shared leads. Own every lead, from source to sale.</p>
          </div>
          <AgentBenefitsGrid />
        </div>
      </section>

      {/* Lead Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">See Exactly What You're Getting</h2>
              <p className="text-lg mb-6 text-gray-600">
                Every lead comes with detailed information and our proprietary Lead Quality Score, powered by AI. Know
                which leads are most likely to convert before you even make the first call.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete contact information</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Detailed insurance needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Lead source transparency</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI-powered quality score</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="btn-secondary">See How It Works & Request Pricing</Button>
              </Link>
            </div>
            <div>
              <LeadPreviewCard />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What Agents Are Saying</h2>
            <p className="section-subtitle mx-auto">
              Hear from agents who have transformed their business with QuoteLinker.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                  alt="Agent testimonial"
                  width={60}
                  height={60}
                  className="rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold">Michael Johnson</h3>
                  <p className="text-sm text-gray-500">State Farm Agent</p>
                </div>
              </div>
              <p className="text-gray-600">
                "QuoteLinker leads convert at nearly double the rate of my other lead sources. The quality and
                exclusivity make all the difference."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                  alt="Agent testimonial"
                  width={60}
                  height={60}
                  className="rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold">Jennifer Williams</h3>
                  <p className="text-sm text-gray-500">Independent Agent</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As an independent agent, I need quality leads that don't break the bank. QuoteLinker delivers exactly
                that, with no surprises."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                  alt="Agent testimonial"
                  width={60}
                  height={60}
                  className="rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold">David Rodriguez</h3>
                  <p className="text-sm text-gray-500">Farmers Insurance</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The lead quality score is a game-changer. I can prioritize my follow-ups and close more business in
                less time."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Lead Generation?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join agents across the country who are growing their business with QuoteLinker's exclusive leads.
          </p>
          <Link href="/contact" className="inline-block">
            <Button className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4">
              Request Pricing & Information
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

