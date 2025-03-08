"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Link2, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white",
      )}
    >
      <div className="container-custom flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary rounded-full p-2">
              <Link2 className="h-5 w-5 text-white" />
            </div>
            <span className="font-outfit text-xl font-bold">QuoteLinker</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={cn(
              "text-gray-700 hover:text-primary transition-colors relative py-2",
              isActive("/") && "text-primary font-medium",
            )}
          >
            Home
            {isActive("/") && (
              <motion.div layoutId="navIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </Link>
          <Link
            href="/for-agents"
            className={cn(
              "text-gray-700 hover:text-primary transition-colors relative py-2",
              isActive("/for-agents") && "text-primary font-medium",
            )}
          >
            For Agents
            {isActive("/for-agents") && (
              <motion.div layoutId="navIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-gray-700 hover:text-primary transition-colors relative py-2",
              isActive("/about") && "text-primary font-medium",
            )}
          >
            About Us
            {isActive("/about") && (
              <motion.div layoutId="navIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-gray-700 hover:text-primary transition-colors relative py-2",
              isActive("/contact") && "text-primary font-medium",
            )}
          >
            Contact
            {isActive("/contact") && (
              <motion.div layoutId="navIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </Link>
          <Link href="/agent-portal">
            <Button
              variant="outline"
              className="ml-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Agent Login
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-gray-200"
          >
            <nav className="container-custom flex flex-col space-y-4 py-6">
              <Link
                href="/"
                className={cn(
                  "text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-md",
                  isActive("/") && "text-primary font-medium bg-primary/5",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/for-agents"
                className={cn(
                  "text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-md",
                  isActive("/for-agents") && "text-primary font-medium bg-primary/5",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                For Agents
              </Link>
              <Link
                href="/about"
                className={cn(
                  "text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-md",
                  isActive("/about") && "text-primary font-medium bg-primary/5",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-md",
                  isActive("/contact") && "text-primary font-medium bg-primary/5",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/agent-portal"
                className="bg-primary/10 text-primary font-medium px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Agent Login
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

