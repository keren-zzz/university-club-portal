"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for clubs
const clubs = [
  {
    id: 1,
    name: "Photography Club",
    logo: "/placeholder.svg?height=80&width=80",
    category: "Arts",
    members: 42,
    description: "For photography enthusiasts to share their work and learn new techniques.",
  },
  {
    id: 2,
    name: "Debate Society",
    logo: "/placeholder.svg?height=80&width=80",
    category: "Academic",
    members: 35,
    description: "Develop critical thinking and public speaking skills through competitive debate.",
  },
  {
    id: 3,
    name: "Coding Club",
    logo: "/placeholder.svg?height=80&width=80",
    category: "Technology",
    members: 50,
    description: "Learn programming languages and collaborate on exciting tech projects.",
  },
  {
    id: 4,
    name: "Chess Club",
    logo: "/placeholder.svg?height=80&width=80",
    category: "Games",
    members: 28,
    description: "Improve your chess skills through regular practice, tournaments, and strategy sessions.",
  },
  {
    id: 5,
    name: "Film Society",
    logo: "/placeholder.svg?height=80&width=80",
    category: "Arts",
    members: 38,
    description: "Watch, analyze, and create films with fellow cinema enthusiasts.",
  },
  {
    id: 6,
    name: "Robotics Club",
    logo: "/placeholder.svg?height=80&width=80",
    category: "Technology",
    members: 45,
    description: "Design, build, and program robots for competitions and exhibitions.",
  },
  {
    id: 7,
    name: "Environmental Club",
    logo: "/placeholder.svg?height=80&width=80",
    category: "Social",
    members: 32,
    description: "Promote sustainability and environmental awareness through campus initiatives.",
  },
  {
    id: 8,
    name: "Music Club",
    logo: "/placeholder.svg?height=80&width=80",
    category: "Arts",
    members: 55,
    description: "Practice, perform, and collaborate on musical projects across various genres.",
  },
]

const categories = ["All", "Arts", "Academic", "Technology", "Games", "Social", "Sports"]

export default function ClubsListPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredClubs = clubs.filter((club) => {
    const matchesSearch =
      club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || club.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Explore Clubs</h1>
          <p className="text-muted-foreground mt-1">Discover and join clubs that match your interests</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search clubs..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Clubs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.map((club) => (
          <Card key={club.id} className="h-full flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-20 w-20 rounded-md overflow-hidden bg-muted flex items-center justify-center">
                <Image src={club.logo || "/placeholder.svg"} alt={club.name} width={80} height={80} />
              </div>
              <div>
                <CardTitle>{club.name}</CardTitle>
                <CardDescription>
                  <Badge variant="outline" className="mt-1">
                    {club.category}
                  </Badge>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{club.members} members</span>
              </div>
              <p className="text-sm text-muted-foreground">{club.description}</p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" className="flex-1">
                <Link href={`/clubs/${club.id}`} className="flex items-center justify-center w-full">
                  View Details
                </Link>
              </Button>
              <Button className="flex-1 bg-purple-600 hover:bg-purple-700">Join Club</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
