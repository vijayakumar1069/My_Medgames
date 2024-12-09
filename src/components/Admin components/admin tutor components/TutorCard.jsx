"use client"
import Image from 'next/image'
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MoreVertical, 
  Edit2, 
  Trash2, 
  Eye, 
  Star, 
  MapPin 
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { deleteTutor } from '@/app/actions/(Admin)/tutorActions'


export default function TutorCard({ tutor, onEdit, onView }) {
  const handleDelete = async () => {
    if (confirm(`Are you sure you want to delete ${tutor.name}?`)) {
      await deleteTutor(tutor._id)
    }
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-blue-500">
      <CardHeader className="relative p-0">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={tutor.image || '/default-avatar.png'}
            alt={tutor.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="secondary" 
                  size="icon" 
                  className="bg-white/70 hover:bg-white"
                >
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  onClick={() => onView(tutor)}
                  className="cursor-pointer"
                >
                  <Eye className="mr-2 w-4 h-4" /> View Details
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => onEdit(tutor)}
                  className="cursor-pointer"
                >
                  <Edit2 className="mr-2 w-4 h-4" /> Edit Tutor
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleDelete}
                  className="text-red-600 cursor-pointer focus:bg-red-50"
                >
                  <Trash2 className="mr-2 w-4 h-4" /> Delete Tutor
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">
            {tutor.name}
          </h2>
          <div className="flex items-center text-yellow-500">
            <Star className="w-5 h-5 fill-current" />
            <span className="ml-1 font-semibold">
              {tutor.rating.toFixed(1)}
            </span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 space-x-2">
          <MapPin className="w-4 h-4" />
          <span>{tutor.location}</span>
        </div>
        
        <p className="text-sm text-gray-500 line-clamp-2">
          {tutor.specialist}
        </p>
      </CardContent>
      
      {/* <CardFooter className="p-4 pt-0">
        <div className="flex justify-between items-center w-full">
          <Badge variant="secondary">
            {tutor.reviews} Reviews
          </Badge>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onView(tutor)}
          >
            View Profile
          </Button>
        </div>
      </CardFooter> */}
    </Card>
  )
}
