import { ShieldCheck, Award, Star } from "lucide-react"

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-primary/10 p-3 rounded-full mb-3">
          <ShieldCheck className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-semibold mb-1">Secure Site</h3>
        <p className="text-sm text-gray-600">Your data is encrypted and secure</p>
      </div>

      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-primary/10 p-3 rounded-full mb-3">
          <Award className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-semibold mb-1">Licensed Agents</h3>
        <p className="text-sm text-gray-600">All agents are fully licensed</p>
      </div>

      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-primary/10 p-3 rounded-full mb-3">
          <Star className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-semibold mb-1">5-Star Reviews</h3>
        <p className="text-sm text-gray-600">Trusted by thousands of customers</p>
      </div>
    </div>
  )
}

