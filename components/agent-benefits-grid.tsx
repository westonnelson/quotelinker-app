import type React from "react"
import { CheckCircle, Target, MapPin, Clock, Brain, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Exclusive Leads",
    description: "Every lead goes to you — no sharing with other agents.",
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "High Intent",
    description: "Consumers actively requesting quotes, not passive browsers.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Full Transparency",
    description: "See exactly where each lead came from and their journey.",
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Local Targeting",
    description: "Get leads only in your service area for higher close rates.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Real-Time Delivery",
    description: "Reach prospects while they're still shopping for insurance.",
  },
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: "Lead Quality Score (AI)",
    description: "Know which leads are the hottest with our proprietary scoring.",
  },
]

export default function AgentBenefitsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {benefits.map((benefit, index) => (
        <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col h-full">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 flex-grow">{benefit.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

