"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  location: string
  quote: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah",
    location: "Minneapolis",
    quote:
      "Finally, an insurance quote site that doesn't sell my info 5 times over. The agent I connected with was knowledgeable and found me great coverage.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    name: "James",
    location: "Eden Prairie",
    quote:
      "Super fast, local agents, and no annoying calls — perfect. I saved over $600 on my home and auto bundle through QuoteLinker's service.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    name: "Maria",
    location: "St. Paul",
    quote:
      "I saved over $400 on my auto insurance through QuoteLinker! The process was simple and I only had to enter my information once.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const nextTestimonial = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative px-4 py-8">
      <div className="absolute inset-0 flex items-center justify-between z-10 pointer-events-none">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-white shadow-lg text-gray-700 hover:text-primary transition-colors pointer-events-auto"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-white shadow-lg text-gray-700 hover:text-primary transition-colors pointer-events-auto"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex justify-center"
          >
            <Card className="border-none shadow-xl bg-white max-w-2xl">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-md"></div>
                    <Image
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={`${testimonials[activeIndex].name} from ${testimonials[activeIndex].location}`}
                      width={80}
                      height={80}
                      className="rounded-full object-cover border-4 border-white relative z-10"
                    />
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-lg mb-6 italic">"{testimonials[activeIndex].quote}"</p>

                  <div className="font-medium">
                    <span className="text-primary">{testimonials[activeIndex].name}</span>
                    <span className="text-gray-500"> • {testimonials[activeIndex].location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false)
              setActiveIndex(index)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

