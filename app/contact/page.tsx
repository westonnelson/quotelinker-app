import Image from "next/image"
import { Mail, Phone, Linkedin } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">Got Questions? We're Here to Help.</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team is ready to answer your questions and help you get the most out of QuoteLinker.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span>support@quotelinker.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <span>(888) 555-QUOTES</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 text-primary mr-3" />
                    <a
                      href="https://www.linkedin.com/company/quotelinker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Follow us on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                  alt="Customer service representative"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">Find quick answers to common questions about QuoteLinker.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How does QuoteLinker work for consumers?</h3>
              <p className="text-gray-600">
                Consumers fill out a simple form with their insurance needs and contact information. We then match them
                with a licensed agent in their area who specializes in their specific insurance needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How does QuoteLinker work for agents?</h3>
              <p className="text-gray-600">
                Agents receive exclusive leads from consumers actively seeking insurance quotes in their service area.
                Each lead is delivered in real-time and includes detailed information to help you close more business.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                What makes QuoteLinker different from other lead providers?
              </h3>
              <p className="text-gray-600">
                Unlike most lead providers, we never share or resell leads. Each lead goes to only one agent, ensuring
                higher conversion rates and a better experience for both agents and consumers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How much does it cost for agents to use QuoteLinker?</h3>
              <p className="text-gray-600">
                Pricing varies based on insurance type, location, and volume. Contact us for a custom quote tailored to
                your specific needs and budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

