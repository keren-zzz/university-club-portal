"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, BookOpen, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/clubs", label: "Clubs" },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex flex-col gap-6 py-4">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={() => setIsOpen(false)}>
                  <BookOpen className="h-6 w-6 text-purple-600" />
                  <span>Club Hub</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-purple-600",
                        isActive(route.href) ? "text-purple-600" : "text-foreground",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-2">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Log In
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Sign Up</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <BookOpen className="h-6 w-6 text-purple-600" />
            <span className="hidden md:inline">University Club Hub</span>
            <span className="md:hidden">Club Hub</span>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-purple-600",
                isActive(route.href) ? "text-purple-600" : "text-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <Link href="/login">
            <Button variant="outline">Log In</Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
          </Link>
        </div>
        <Link href="/login" className="lg:hidden">
          <Button size="icon" variant="ghost">
            <LogIn className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </header>
  )
}
