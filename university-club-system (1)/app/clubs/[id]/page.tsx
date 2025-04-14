"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, MessageSquare, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Club data with different descriptions for each club
const clubsData = {
  "1": {
    id: 1,
    name: "Photography Club",
    logo: "/placeholder.svg?height=120&width=120",
    coverImage: "/placeholder.svg?height=300&width=1200",
    category: "Arts",
    members: 42,
    description:
      "The Photography Club is a community of photography enthusiasts who share their work, learn new techniques, and explore the art of photography together. We welcome photographers of all skill levels, from beginners to professionals.",
    longDescription:
      "Our club organizes regular photo walks, workshops, and exhibitions throughout the academic year. Members have access to the university's photography equipment and darkroom facilities. We also collaborate with other arts clubs for interdisciplinary projects and participate in national photography competitions.",
    founded: "2015",
    meetingSchedule: "Every Tuesday, 5:00 PM",
    location: "Arts Building, Room 302",
    contactEmail: "photo@university.edu",
    socialMedia: {
      instagram: "@uni_photo_club",
      facebook: "UniversityPhotoClub",
    },
  },
  "2": {
    id: 2,
    name: "Debate Society",
    logo: "/placeholder.svg?height=120&width=120",
    coverImage: "/placeholder.svg?height=300&width=1200",
    category: "Academic",
    members: 35,
    description:
      "The Debate Society is dedicated to developing critical thinking and public speaking skills through competitive debate. We participate in regional and national tournaments representing our university.",
    longDescription:
      "Our society hosts weekly practice sessions where members can refine their argumentation skills and receive feedback from peers and coaches. We organize internal competitions and invite guest speakers from various fields to discuss current affairs and debate techniques. The society has a strong track record in intercollegiate competitions and provides excellent networking opportunities.",
    founded: "2010",
    meetingSchedule: "Every Wednesday, 6:00 PM",
    location: "Humanities Building, Room 105",
    contactEmail: "debate@university.edu",
    socialMedia: {
      instagram: "@uni_debate_society",
      facebook: "UniversityDebateSociety",
    },
  },
  "3": {
    id: 3,
    name: "Coding Club",
    logo: "/placeholder.svg?height=120&width=120",
    coverImage: "/placeholder.svg?height=300&width=1200",
    category: "Technology",
    members: 50,
    description:
      "The Coding Club brings together programming enthusiasts to learn new languages, collaborate on projects, and prepare for hackathons and coding competitions.",
    longDescription:
      "Our club offers workshops on various programming languages and frameworks, from beginner to advanced levels. We work on real-world projects that benefit the university community and beyond. Members participate in hackathons, coding competitions, and have opportunities to connect with industry professionals through our tech talks and networking events.",
    founded: "2017",
    meetingSchedule: "Every Thursday, 7:00 PM",
    location: "Computer Science Building, Lab 201",
    contactEmail: "coding@university.edu",
    socialMedia: {
      instagram: "@uni_coding_club",
      facebook: "UniversityCodingClub",
    },
  },
  "4": {
    id: 4,
    name: "Chess Club",
    logo: "/placeholder.svg?height=120&width=120",
    coverImage: "/placeholder.svg?height=300&width=1200",
    category: "Games",
    members: 28,
    description:
      "The Chess Club is for players of all levels to improve their skills through regular practice, tournaments, and strategy discussions.",
    longDescription:
      "Our club meets weekly for casual play and structured training sessions led by experienced players. We organize internal tournaments and participate in intercollegiate competitions. The club provides chess sets and digital resources for members to study and improve their game. We welcome beginners and experienced players alike.",
    founded: "2012",
    meetingSchedule: "Every Monday, 5:30 PM",
    location: "Student Center, Room 120",
    contactEmail: "chess@university.edu",
    socialMedia: {
      instagram: "@uni_chess_club",
      facebook: "UniversityChessClub",
    },
  },
  "5": {
    id: 5,
    name: "Film Society",
    logo: "/placeholder.svg?height=120&width=120",
    coverImage: "/placeholder.svg?height=300&width=1200",
    category: "Arts",
    members: 38,
    description:
      "The Film Society is dedicated to watching, analyzing, and creating films. We explore cinema from around the world and all eras.",
    longDescription:
      "Our society hosts weekly screenings of classic, independent, and international films followed by thoughtful discussions. We organize filmmaking workshops covering scriptwriting, directing, cinematography, and editing. Members collaborate on short film projects and have the opportunity to showcase their work at our annual film festival. We also arrange trips to film festivals and special screenings.",
    founded: "2014",
    meetingSchedule: "Every Friday, 6:00 PM",
    location: "Media Arts Center, Screening Room",
    contactEmail: "film@university.edu",
    socialMedia: {
      instagram: "@uni_film_society",
      facebook: "UniversityFilmSociety",
    },
  },
  "6": {
    id: 6,
    name: "Robotics Club",
    logo: "/placeholder.svg?height=120&width=120",
    coverImage: "/placeholder.svg?height=300&width=1200",
    category: "Technology",
    members: 45,
    description:
      "The Robotics Club focuses on designing, building, and programming robots for competitions, exhibitions, and research projects.",
    longDescription:
      "Our club provides hands-on experience with robotics technology through workshops and collaborative projects. We participate in regional and national robotics competitions, and work on innovative solutions to real-world problems. The club has access to the university's engineering labs and equipment. Members develop skills in mechanical design, electronics, programming, and teamwork.",
    founded: "2016",
    meetingSchedule: "Every Saturday, 2:00 PM",
    location: "Engineering Building, Workshop 3",
    contactEmail: "robotics@university.edu",
    socialMedia: {
      instagram: "@uni_robotics_club",
      facebook: "UniversityRoboticsClub",
    },
  },
  "7": {
    id: 7,
    name: "Environmental Club",
    logo: "/placeholder.svg?height=120&width=120",
    coverImage: "/placeholder.svg?height=300&width=1200",
    category: "Social",
    members: 32,
    description:
      "The Environmental Club works to promote sustainability and environmental awareness through campus initiatives and community outreach.",
    longDescription:
      "Our club organizes campus clean-ups, recycling programs, and awareness campaigns about environmental issues. We collaborate with local organizations on conservation projects and sustainable practices. Members participate in workshops on topics like zero-waste living, renewable energy, and climate action. We advocate for environmentally friendly policies within the university and broader community.",
    founded: "2013",
    meetingSchedule: "Every Tuesday, 4:00 PM",
    location: "Science Building, Room 210",
    contactEmail: "environment@university.edu",
    socialMedia: {
      instagram: "@uni_environmental_club",
      facebook: "UniversityEnvironmentalClub",
    },
  },
  "8": {
    id: 8,
    name: "Music Club",
    logo: "/placeholder.svg?height=120&width=120",
    coverImage: "/placeholder.svg?height=300&width=1200",
    category: "Arts",
    members: 55,
    description:
      "The Music Club brings together musicians of all genres to practice, perform, and collaborate on musical projects.",
    longDescription:
      "Our club provides a space for musicians to connect, jam, and form bands across various genres. We organize regular performances on campus and at local venues. The club has practice rooms equipped with instruments and recording equipment. Members can participate in workshops on music theory, composition, and production. We host an annual music festival showcasing student talent.",
    founded: "2011",
    meetingSchedule: "Every Wednesday, 7:00 PM",
    location: "Music Building, Room 101",
    contactEmail: "music@university.edu",
    socialMedia: {
      instagram: "@uni_music_club",
      facebook: "UniversityMusicClub",
    },
  },
}

// Update the members array with the new names
const members = [
  { id: 1, name: "Keren Mary", role: "President", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "S Rishi", role: "Vice President", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Yuvaraj", role: "Treasurer", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 4, name: "Jordan Lee", role: "Member", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "Casey Wilson", role: "Member", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 6, name: "Riley Garcia", role: "Member", avatar: "/placeholder.svg?height=40&width=40" },
]

const events = [
  {
    id: 1,
    title: "Photo Walk: Urban Landscapes",
    date: "Apr 15, 2025",
    time: "3:00 PM",
    location: "Main Campus Entrance",
  },
  {
    id: 2,
    title: "Portrait Photography Workshop",
    date: "Apr 22, 2025",
    time: "5:00 PM",
    location: "Arts Building, Room 302",
  },
  { id: 3, title: "Spring Exhibition Opening", date: "May 5, 2025", time: "6:00 PM", location: "Student Gallery" },
]

const announcements = [
  {
    id: 1,
    title: "New Equipment Available",
    date: "Apr 5, 2025",
    content: "We've received new cameras and lenses for club members to use. Check them out during our next meeting!",
  },
  {
    id: 2,
    title: "Photography Competition",
    date: "Apr 3, 2025",
    content: "The annual university photography competition is now accepting submissions. Deadline is April 30th.",
  },
]

// Update the discussions to reflect the new names
const discussions = [
  {
    id: 1,
    author: "Keren Mary",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "Apr 6, 2025",
    content:
      "Has anyone tried the new Sony mirrorless cameras? I'm thinking of upgrading and would love some feedback.",
    replies: [
      {
        id: 1,
        author: "S Rishi",
        authorAvatar: "/placeholder.svg?height=40&width=40",
        date: "Apr 6, 2025",
        content: "I've been using the Sony A7IV for a few months now and it's fantastic. The autofocus is incredible.",
      },
      {
        id: 2,
        author: "Casey Wilson",
        authorAvatar: "/placeholder.svg?height=40&width=40",
        date: "Apr 7, 2025",
        content:
          "I'd recommend renting one first to see if you like it. The camera store downtown has reasonable rental rates.",
      },
    ],
  },
  {
    id: 2,
    author: "Yuvaraj",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "Apr 4, 2025",
    content: "I'm organizing a sunrise photo shoot at the lake this Saturday. Anyone interested in joining?",
    replies: [
      {
        id: 3,
        author: "Riley Garcia",
        authorAvatar: "/placeholder.svg?height=40&width=40",
        date: "Apr 4, 2025",
        content: "I'd love to join! What time are you planning to meet?",
      },
    ],
  },
]

export default function ClubDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("about")
  const [messageText, setMessageText] = useState("")

  // Get the club data based on the ID from the URL
  const club = clubsData[params.id as keyof typeof clubsData] || clubsData["1"]

  return (
    <div className="flex flex-col">
      {/* Club Header */}
      <div className="relative h-48 md:h-64 w-full bg-purple-100">
        <Image src={club.coverImage || "/placeholder.svg"} alt={`${club.name} cover`} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-6 -mt-16 md:-mt-20 relative z-10">
          <div className="h-24 w-24 md:h-40 md:w-40 rounded-xl overflow-hidden border-4 border-background bg-background">
            <Image
              src={club.logo || "/placeholder.svg"}
              alt={club.name}
              width={160}
              height={160}
              className="object-cover h-full w-full"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between w-full gap-4 md:items-end">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold">{club.name}</h1>
                <Badge variant="outline">{club.category}</Badge>
              </div>
              <p className="text-muted-foreground mt-1 max-w-2xl">{club.description}</p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{club.members} members</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{club.meetingSchedule}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4 md:mt-0">
              {club.id === 1 ? (
                <>
                  <Button variant="outline">Leave Club</Button>
                  <Button className="bg-purple-600 hover:bg-purple-700">Club Chat</Button>
                </>
              ) : (
                <Button className="bg-purple-600 hover:bg-purple-700">Join Club</Button>
              )}
            </div>
          </div>
        </div>

        {/* Club Content */}
        <Tabs defaultValue="about" className="mt-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 md:w-auto md:inline-flex">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="discussion">Discussion</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-8 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About {club.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{club.longDescription}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Club Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-medium">Founded</h3>
                        <p className="text-muted-foreground">{club.founded}</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Meeting Schedule</h3>
                        <p className="text-muted-foreground">{club.meetingSchedule}</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-muted-foreground">{club.location}</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Contact</h3>
                        <p className="text-muted-foreground">{club.contactEmail}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium">Social Media</h3>
                      <div className="flex gap-4 mt-1">
                        <p className="text-muted-foreground">{club.socialMedia.instagram}</p>
                        <p className="text-muted-foreground">{club.socialMedia.facebook}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Club Leadership</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {members.slice(0, 3).map((member) => (
                        <div key={member.id} className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Members</CardTitle>
                    <CardDescription>{club.members} total members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {members.map((member) => (
                        <Avatar key={member.id} title={member.name}>
                          <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                      ))}
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Users className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="events" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="h-full">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{club.name}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        {event.date} at {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </CardContent>
                  <CardContent className="pt-0 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Add to Calendar
                    </Button>
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                      RSVP
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="announcements" className="mt-6">
            <div className="space-y-6">
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
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="discussion" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Message Board</CardTitle>
                <CardDescription>Discuss topics with other club members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* New message form */}
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Start a new discussion..."
                      className="min-h-24"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                    />
                    <div className="flex justify-end">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        Post Message
                        <MessageSquare className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Discussions */}
                  {discussions.map((discussion) => (
                    <div key={discussion.id} className="pt-6 border-t">
                      <div className="flex gap-4">
                        <Avatar>
                          <AvatarImage src={discussion.authorAvatar || "/placeholder.svg"} alt={discussion.author} />
                          <AvatarFallback>{discussion.author.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <p className="font-medium">{discussion.author}</p>
                            <span className="text-sm text-muted-foreground">{discussion.date}</span>
                          </div>
                          <p className="mt-2 text-muted-foreground">{discussion.content}</p>

                          {/* Replies */}
                          <div className="mt-4 space-y-4">
                            {discussion.replies.map((reply) => (
                              <div key={reply.id} className="flex gap-3 pl-6 border-l-2 border-muted">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={reply.authorAvatar || "/placeholder.svg"} alt={reply.author} />
                                  <AvatarFallback>{reply.author.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex justify-between">
                                    <p className="font-medium text-sm">{reply.author}</p>
                                    <span className="text-xs text-muted-foreground">{reply.date}</span>
                                  </div>
                                  <p className="mt-1 text-sm text-muted-foreground">{reply.content}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Reply form */}
                          <div className="mt-4 flex gap-2">
                            <Input placeholder="Write a reply..." className="flex-1" />
                            <Button size="icon" variant="ghost">
                              <Send className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
