import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import LeadForm from "@/components/lead-form"
import TrustBadges from "@/components/trust-badges"
import BenefitsSection from "@/components/benefits-section"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent z-0"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent z-0"></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-accent">
                <span className="text-primary">Fast, Accurate</span> Insurance Quotes from Top Local Agents
              </h1>
              <p className="text-xl mb-8 text-gray-600">
                QuoteLinker connects you directly with licensed agents in your area for Auto, Home, Life, and Health
                Insurance. Every quote is exclusive — no robocalls or shared leads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#quote-form" className="w-full sm:w-auto">
                  <Button className="btn-primary text-lg px-8 py-6 w-full rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]">
                    Start Your Quote
                  </Button>
                </a>
                <Link href="/about" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="text-lg px-8 py-6 w-full rounded-full border-gray-300 hover:bg-gray-50 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-30 z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                  alt="Person reviewing insurance documents"
                  width={800}
                  height={600}
                  className="rounded-2xl object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <TrustBadges />
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-16 md:py-24 scroll-mt-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Get Your Free Insurance Quote</h2>
            <p className="section-subtitle mx-auto">
              Fill out the form below to get connected with top-rated local agents who can provide personalized quotes.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose QuoteLinker?</h2>
            <p className="section-subtitle mx-auto">
              We're changing how insurance quotes work by putting you in control.
            </p>
          </div>
          <BenefitsSection />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle mx-auto">Getting insurance quotes has never been easier.</p>
          </div>
          <HowItWorks />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle mx-auto">
              Don't just take our word for it. Here's what people are saying about QuoteLinker.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Insurance Match?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get connected with top local agents who can provide personalized quotes for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#quote-form" className="w-full sm:w-auto">
              <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 w-full rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Get Your Free Quote
              </Button>
            </a>
            <Link href="/about" className="w-full sm:w-auto">
              <Button className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-4 w-full rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

