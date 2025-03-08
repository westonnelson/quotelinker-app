import AgentDashboardMockup from "@/components/agent-dashboard-mockup"

export default function AgentPortalPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-8 md:py-12 border-b">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent">Your Exclusive Lead Dashboard</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Welcome back! Here's an overview of your leads and performance metrics.
          </p>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-8 md:py-12">
        <div className="container-custom">
          <AgentDashboardMockup />
        </div>
      </section>
    </div>
  )
}

