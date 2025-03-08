import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">About QuoteLinker</h1>
              <p className="text-xl mb-6 text-gray-600">
                I founded QuoteLinker after seeing how broken insurance lead generation was — both for consumers and
                agents. Consumers are bombarded with spam calls, and agents waste money on low-intent, resold leads.
              </p>
              <p className="text-xl mb-6 text-gray-600">QuoteLinker is different.</p>
              <ul className="space-y-4 mb-8 text-lg">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Consumers get quotes from real local agents, not call centers.</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Agents get exclusive leads — no more competing with 5 others for the same customer.</span>
                </li>
              </ul>
              <p className="text-xl font-medium text-accent">
                Our mission is simple: Make shopping for insurance faster, easier, and more transparent for everyone.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                alt="Insurance professional"
                width={800}
                height={600}
                className="rounded-lg shadow-xl object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">How We're Different</h2>
            <p className="section-subtitle mx-auto">
              QuoteLinker stands apart from competitors like QuoteWizard and EverQuote in several key ways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Exclusive Leads</h3>
              <p className="text-gray-600">
                Unlike QuoteWizard and EverQuote who sell the same lead to multiple agents, QuoteLinker provides
                exclusive leads to just one agent, resulting in higher conversion rates.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Focus</h3>
              <p className="text-gray-600">
                We connect consumers with local agents who understand their community and specific needs, not distant
                call centers or online-only providers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-gray-600">
                We're upfront about how we use consumer data and provide agents with complete information about lead
                sources and quality, unlike competitors who often hide these details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                alt="Insurance agents working together"
                width={800}
                height={600}
                className="rounded-lg shadow-xl object-cover w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">Our Story</h2>
              <p className="text-lg mb-6 text-gray-600">
                After spending years in the insurance industry, I saw firsthand how the lead generation model was
                failing both consumers and agents. Consumers would request a single quote but receive dozens of calls
                from different agents, while agents paid premium prices for leads that were simultaneously sold to their
                competitors.
              </p>
              <p className="text-lg mb-6 text-gray-600">
                I knew there had to be a better way. In 2023, I launched QuoteLinker with a simple premise: connect
                consumers with one qualified local agent who can provide personalized service, while giving agents
                exclusive access to high-intent leads.
              </p>
              <p className="text-lg text-gray-600">
                Today, QuoteLinker is transforming how insurance leads work, creating better experiences and outcomes
                for everyone involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the QuoteLinker Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're looking for insurance or you're an agent seeking quality leads, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/#quote-form" className="w-full sm:w-auto">
              <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 w-full">
                Get Insurance Quotes
              </Button>
            </a>
            <Link href="/for-agents" className="w-full sm:w-auto">
              <Button className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-4 w-full">
                Learn About Agent Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

