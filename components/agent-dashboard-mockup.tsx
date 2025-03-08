import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AgentDashboardMockup() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">New Leads Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">3</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Leads This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">67</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Avg Lead Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">88%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">31%</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Lead List</CardTitle>
          <div className="flex space-x-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Insurance Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="auto">Auto</SelectItem>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="life">Life</SelectItem>
                <SelectItem value="health">Health</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Lead Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="quoted">Quoted</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">Sort by Lead Score</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Name</th>
                  <th className="text-left py-3 px-4 font-medium">Insurance Type</th>
                  <th className="text-left py-3 px-4 font-medium">Source</th>
                  <th className="text-left py-3 px-4 font-medium">Score</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-left py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">John Doe</td>
                  <td className="py-3 px-4">Auto</td>
                  <td className="py-3 px-4">Google Ads</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      95
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      New
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">Sarah L.</td>
                  <td className="py-3 px-4">Home</td>
                  <td className="py-3 px-4">Facebook</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      88
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Quoted
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">Maria P.</td>
                  <td className="py-3 px-4">Life</td>
                  <td className="py-3 px-4">SEO</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      79
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Contacted
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

