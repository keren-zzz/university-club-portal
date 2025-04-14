"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Search, Users, ArrowRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data
const myClubs = [
  { id: 1, name: "Photography Club", logo: "/placeholder.svg?height=40&width=40", role: "Member", unread: 3 },
  { id: 2, name: "Debate Society", logo: "/placeholder.svg?height=40&width=40", role: "Member", unread: 0 },
  { id: 3, name: "Coding Club", logo: "/placeholder.svg?height=40&width=40", role: "Admin", unread: 5 },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Photography Exhibition",
    club: "Photography Club",
    date: "Apr 15, 2025",
    time: "3:00 PM",
    location: "Art Gallery",
  },
  {
    id: 2,
    title: "Debate Competition",
    club: "Debate Society",
    date: "Apr 20, 2025",
    time: "5:00 PM",
    location: "Main Auditorium",
  },
  { id: 3, title: "Hackathon", club: "Coding Club", date: "Apr 25, 2025", time: "9:00 AM", location: "Computer Lab" },
]

const announcements = [
  {
    id: 1,
    club: "Photography Club",
    title: "New Equipment Available",
    date: "Apr 5, 2025",
    content: "We've received new cameras and lenses for club members to use.",
  },
  {
    id: 2,
    club: "Coding Club",
    title: "Workshop Registration Open",
    date: "Apr 7, 2025",
    content: "Register for our upcoming React workshop by April 10th.",
  },
  {
    id: 3,
    club: "Debate Society",
    title: "Team Selection",
    date: "Apr 8, 2025",
    content: "Team selection for the inter-university debate will be held next week.",
  },
]

const recommendedClubs = [
  {
    id: 4,
    name: "Chess Club",
    members: 45,
    category: "Games",
  },
  {
    id: 5,
    name: "Film Society",
    members: 78,
    category: "Arts",
  },
  {
    id: 6,
    name: "Robotics Club",
    members: 62,
    category: "Technology",
  },
]

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your clubs, events, and announcements</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/clubs">
            <Button className="bg-purple-600 hover:bg-purple-700">Explore Clubs</Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          {/* My Clubs Section */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">My Clubs</h2>
              <Link href="/clubs" className="text-sm text-purple-600 hover:underline flex items-center">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {myClubs.map((club) => (
                <Link href={`/clubs/${club.id}`} key={club.id}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={club.logo || "/placeholder.svg"} alt={club.name} />
                        <AvatarFallback>{club.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{club.name}</CardTitle>
                        <CardDescription>{club.role}</CardDescription>
                      </div>
                      {club.unread > 0 && <Badge className="ml-auto bg-purple-600">{club.unread}</Badge>}
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Upcoming Events Section */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
              <Button variant="ghost" size="sm" className="text-purple-600" onClick={() => setActiveTab("events")}>
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingEvents.slice(0, 3).map((event) => (
                <Card key={event.id} className="h-full">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.club}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        {event.date} at {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Add to Calendar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Recommended Clubs Section */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recommended for You</h2>
              <Link href="/clubs" className="text-sm text-purple-600 hover:underline flex items-center">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedClubs.map((club) => (
                <Card key={club.id} className="h-full">
                  <CardHeader>
                    <CardTitle>{club.name}</CardTitle>
                    <CardDescription>{club.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{club.members} members</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Join Club</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search events..." className="w-full pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="h-full">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.club}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {event.date} at {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Add to Calendar
                  </Button>
                  <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                    RSVP
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="announcements" className="space-y-6">
          <div className="relative w-full md:w-96 mb-6">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search announcements..." className="w-full pl-8" />
          </div>

          <div className="space-y-4">
            {announcements.map((announcement) => (
              <Card key={announcement.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{announcement.title}</CardTitle>
                      <CardDescription>
                        {announcement.club} • {announcement.date}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{announcement.club}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{announcement.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
