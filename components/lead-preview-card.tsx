import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LeadPreviewCard() {
  return (
    <Card className="border-none shadow-lg">
      <CardHeader className="bg-primary text-white rounded-t-lg">
        <CardTitle className="text-center">Sample Lead Preview</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          <div className="grid grid-cols-2 p-4">
            <div className="font-medium">Name</div>
            <div>Jane Smith</div>
          </div>
          <div className="grid grid-cols-2 p-4">
            <div className="font-medium">ZIP Code</div>
            <div>55345</div>
          </div>
          <div className="grid grid-cols-2 p-4">
            <div className="font-medium">Insurance Needed</div>
            <div>Auto + Home</div>
          </div>
          <div className="grid grid-cols-2 p-4">
            <div className="font-medium">Lead Source</div>
            <div>Google Ads</div>
          </div>
          <div className="grid grid-cols-2 p-4 bg-green-50">
            <div className="font-medium">Lead Score</div>
            <div className="font-bold text-green-600">92 (Hot)</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

