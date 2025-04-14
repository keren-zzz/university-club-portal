import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Calendar, Bell, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-50 to-white py-20 md:py-32">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Your University Club <span className="text-purple-600">Experience</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Discover, join, and manage student clubs all in one place. Connect with like-minded peers and make the most
            of your university experience.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/signup">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/clubs">
              <Button size="lg" variant="outline">
                Explore Clubs
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need to Manage Your Club Life
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform simplifies club discovery, membership, and engagement for students and club administrators.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Club Discovery</h3>
                <p className="mt-2 text-muted-foreground">
                  Browse and join clubs that match your interests and passions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-teal-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold">Event Management</h3>
                <p className="mt-2 text-muted-foreground">
                  Stay updated on upcoming events and never miss an important meeting.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-amber-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold">Announcements</h3>
                <p className="mt-2 text-muted-foreground">
                  Receive important updates and announcements from your clubs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-rose-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold">Message Boards</h3>
                <p className="mt-2 text-muted-foreground">
                  Engage in discussions with club members and build community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-purple-50 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Students Are Saying</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from students who have transformed their university experience with Club Hub.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden h-12 w-12 bg-gray-200">
                      <Image src={`/placeholder.svg?height=48&width=48`} alt="Student" width={48} height={48} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Student Name</h4>
                      <p className="text-sm text-muted-foreground">Computer Science, Year 3</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Club Hub has made it so easy to discover clubs that align with my interests. I've made great
                    friends and developed valuable skills through the clubs I joined."
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 p-8 md:p-12 shadow-lg text-white text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Enhance Your University Experience?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Join Club Hub today and connect with clubs, events, and fellow students that share your passions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" variant="secondary">
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/clubs">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Explore Clubs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
