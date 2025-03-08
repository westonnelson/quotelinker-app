import Link from "next/link"
import { Link2, Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-accent text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Link2 className="h-6 w-6" />
              <span className="font-outfit text-xl font-bold">QuoteLinker</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              QuoteLinker — Smarter Insurance Leads. Trusted by Agents. Loved by Consumers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/quotelinker"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/QuoteLinker"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/QuoteLinker"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-outfit text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/for-agents" className="text-gray-300 hover:text-primary transition-colors">
                  For Agents
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-outfit text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} QuoteLinker. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

