"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Plus, Pencil, Trash2, Search, Bell } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for the admin dashboard
const club = {
  id: 3,
  name: "Coding Club",
  logo: "/placeholder.svg?height=80&width=80",
  category: "Technology",
  members: 50,
  description: "Learn programming languages and work on exciting tech projects together.",
}

const members = [
  {
    id: 1,
    name: "Keren Mary",
    role: "President",
    joinDate: "Sep 2024",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
  },
  {
    id: 2,
    name: "S Rishi",
    role: "Vice President",
    joinDate: "Sep 2024",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
  },
  {
    id: 3,
    name: "Yuvaraj",
    role: "Treasurer",
    joinDate: "Oct 2024",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
  },
  {
    id: 4,
    name: "Jordan Lee",
    role: "Member",
    joinDate: "Nov 2024",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
  },
  {
    id: 5,
    name: "Casey Wilson",
    role: "Member",
    joinDate: "Jan 2025",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
  },
  {
    id: 6,
    name: "Riley Garcia",
    role: "Member",
    joinDate: "Feb 2025",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "pending",
  },
]

const events = [
  {
    id: 1,
    title: "Intro to React Workshop",
    date: "Apr 15, 2025",
    time: "3:00 PM",
    location: "Computer Lab 101",
    attendees: 18,
    status: "upcoming",
  },
  {
    id: 2,
    title: "Hackathon Planning Meeting",
    date: "Apr 22, 2025",
    time: "5:00 PM",
    location: "Student Center",
    attendees: 8,
    status: "upcoming",
  },
  {
    id: 3,
    title: "Web Development Basics",
    date: "Mar 15, 2025",
    time: "4:00 PM",
    location: "Computer Lab 101",
    attendees: 25,
    status: "past",
  },
]

const announcements = [
  {
    id: 1,
    title: "Workshop Registration Open",
    date: "Apr 7, 2025",
    content: "Register for our upcoming React workshop by April 10th.",
  },
  {
    id: 2,
    title: "New Project Opportunities",
    date: "Mar 25, 2025",
    content:
      "We're looking for members interested in joining our new open source project. Contact the club president for details.",
  },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isAddEventOpen, setIsAddEventOpen] = useState(false)
  const [isAddAnnouncementOpen, setIsAddAnnouncementOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [memberFilter, setMemberFilter] = useState("all")

  const filteredMembers = members.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = memberFilter === "all" || member.status === memberFilter

    return matchesSearch && matchesFilter
  })

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your club, events, and members</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href={`/clubs/${club.id}`}>
            <Button variant="outline">View Public Page</Button>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="h-16 w-16 rounded-md overflow-hidden bg-muted flex items-center justify-center">
          <Image src={club.logo || "/placeholder.svg"} alt={club.name} width={64} height={64} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">{club.name}</h2>
            <Badge variant="outline">{club.category}</Badge>
          </div>
          <div className="flex items-center gap-4 mt-1">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{club.members} members</span>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 md:w-auto md:inline-flex">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Members</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{club.members}</div>
                <p className="text-xs text-muted-foreground">+3 this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{events.filter((e) => e.status === "upcoming").length}</div>
                <p className="text-xs text-muted-foreground">Next event on {events[0].date}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Recent Announcements</CardTitle>
                <Bell className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{announcements.length}</div>
                <p className="text-xs text-muted-foreground">Last posted on {announcements[0].date}</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Events</CardTitle>
                <CardDescription>Manage your upcoming and past events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.slice(0, 3).map((event) => (
                    <div key={event.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-2 h-10 rounded-full ${event.status === "upcoming" ? "bg-green-500" : "bg-gray-300"}`}
                        />
                        <div>
                          <p className="font-medium">{event.title}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{event.date}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => setIsAddEventOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Event
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Announcements</CardTitle>
                <CardDescription>Manage your club announcements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {announcements.map((announcement) => (
                    <div key={announcement.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{announcement.title}</p>
                        <p className="text-sm text-muted-foreground">{announcement.date}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => setIsAddAnnouncementOpen(true)}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Announcement
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search events..." className="pl-8" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="past">Past</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setIsAddEventOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className={event.status === "past" ? "opacity-70" : ""}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{event.title}</CardTitle>
                    <Badge variant={event.status === "upcoming" ? "default" : "outline"}>
                      {event.status === "upcoming" ? "Upcoming" : "Past"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{event.attendees} attendees</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 text-red-500 hover:text-red-600">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="announcements" className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search announcements..." className="pl-8" />
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setIsAddAnnouncementOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Announcement
            </Button>
          </div>

          <div className="space-y-4">
            {announcements.map((announcement) => (
              <Card key={announcement.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{announcement.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">{announcement.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{announcement.content}</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 text-red-500 hover:text-red-600">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="members" className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search members..."
                  className="pl-8 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={memberFilter} onValueChange={setMemberFilter}>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Members</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 w-full md:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              Invite Members
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Club Members</CardTitle>
              <CardDescription>Manage your club's membership</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">{member.role}</span>
                          {member.status === "pending" && (
                            <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                              Pending
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Joined {member.joinDate}</span>
                      <Select defaultValue={member.role.toLowerCase()}>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="president">President</SelectItem>
                          <SelectItem value="vice president">Vice President</SelectItem>
                          <SelectItem value="treasurer">Treasurer</SelectItem>
                          <SelectItem value="member">Member</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Add Event Dialog */}
      <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
            <DialogDescription>Create a new event for your club members.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="event-title">Event Title</Label>
              <Input id="event-title" placeholder="Enter event title" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="event-date">Date</Label>
                <Input id="event-date" type="date" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-time">Time</Label>
                <Input id="event-time" type="time" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="event-location">Location</Label>
              <Input id="event-location" placeholder="Enter location" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="event-description">Description</Label>
              <Textarea id="event-description" placeholder="Enter event description" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddEventOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">Create Event</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Announcement Dialog */}
      <Dialog open={isAddAnnouncementOpen} onOpenChange={setIsAddAnnouncementOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New Announcement</DialogTitle>
            <DialogDescription>Create a new announcement for your club members.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="announcement-title">Announcement Title</Label>
              <Input id="announcement-title" placeholder="Enter announcement title" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="announcement-content">Content</Label>
              <Textarea id="announcement-content" placeholder="Enter announcement content" rows={5} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddAnnouncementOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">Post Announcement</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
