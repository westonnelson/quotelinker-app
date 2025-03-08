"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface Step {
  number: number
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: 1,
    title: "Tell us what insurance you need",
    description: "Fill out our simple form with your insurance needs and basic information.",
  },
  {
    number: 2,
    title: "Get matched with top local agents",
    description: "We'll connect you with licensed agents in your area who specialize in your needs.",
  },
  {
    number: 3,
    title: "Review quotes and choose your best fit",
    description: "Compare personalized quotes and select the coverage that works best for you.",
  },
]

export default function HowItWorks() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="py-8" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {steps.map((step, index) => (
          <motion.div key={index} variants={itemVariants} className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-6 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>

            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-full w-8 transform -translate-x-4">
                <ArrowRight className="text-gray-300 h-6 w-6" />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

