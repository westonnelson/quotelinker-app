"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function ScrollToHash() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // If the URL has a hash, scroll to the element with that ID
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [pathname, searchParams])

  return null
}

