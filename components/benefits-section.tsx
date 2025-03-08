"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { CheckCircle, ShieldCheck, Clock } from "lucide-react"

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Exclusive Quotes Only",
    description: "Your information stays private and is only shared with your matched agent.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Real Local Agents",
    description: "Connect with licensed agents in your area, not overseas call centers.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Fast Quotes",
    description: "Receive personalized insurance quotes in minutes, not days.",
  },
]

export default function BenefitsSection() {
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
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="mb-6 bg-primary/10 p-4 rounded-full">{benefit.icon}</div>
          <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
          <p className="text-gray-600">{benefit.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

