import Link from "next/link"
import { BookOpen, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <BookOpen className="h-6 w-6 text-purple-600" />
              <span>University Club Hub</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Connect with clubs, discover events, and engage with your university community.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-purple-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-purple-600">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="text-sm text-muted-foreground hover:text-purple-600">
                  Clubs
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-muted-foreground hover:text-purple-600">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-sm text-muted-foreground hover:text-purple-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-purple-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-purple-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-purple-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-purple-600" />
                <span>123 University Ave, Campus</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-purple-600" />
                <span>contact@clubhub.edu</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-purple-600" />
                <span>(123) 456-7890</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} University Club Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
