import React from 'react'
import { Loader2 } from 'lucide-react'
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const EditingComponentLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <Card className="w-[400px] animate-pulse">
        <CardHeader>
          <CardTitle className="flex items-center justify-center space-x-2">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span>Loading</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="h-2 w-full bg-gray-200 rounded-full">
            <Progress value={50} className="w-full" />
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="h-10 w-24 bg-gray-200 rounded-md"></div>
            <div className="h-10 w-24 bg-gray-200 rounded-md"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default EditingComponentLoader
