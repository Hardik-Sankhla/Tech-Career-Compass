"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  Search,
  User,
  BookOpen,
  TrendingUp,
  Shield,
  Cloud,
  Code,
  Database,
  LogOut,
  Settings
} from "lucide-react";
import { OWNER_INFO } from "@/lib/owner-info";
import { useAuth } from "@/contexts/auth-context";

const navigation = [
  { name: "Home", href: "/", icon: null },
  { name: "Guides", href: "/guides", icon: BookOpen },
  { name: "Software Engineering", href: "/guides/software-engineering", icon: Code },
  { name: "Data & AI/ML", href: "/guides/data-ai-ml", icon: Database },
  { name: "Cloud & Infrastructure", href: "/guides/cloud-infrastructure", icon: Cloud },
  { name: "Cybersecurity", href: "/guides/cybersecurity", icon: Shield },
  { name: "DevOps & SRE", href: "/guides/devops-sre", icon: TrendingUp },
  { name: "About", href: "/about", icon: null },
  { name: "Resources", href: "/resources", icon: null },
  { name: "Contact", href: "/contact", icon: null },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, profile, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="hidden font-bold sm:inline-block">
              Tech Career Compass
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.slice(0, 6).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Auth Buttons */}
          {user ? (
            <div className="flex items-center space-x-2">
              <Link href="/dashboard">
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage src={profile?.avatar_url || user.user_metadata?.avatar_url} />
                  <AvatarFallback>
                    {profile?.full_name?.split(' ').map(n => n[0]).join('') ||
                     user.email?.split('@')[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Link>
              <div className="hidden lg:block">
                <p className="text-sm font-medium">{profile?.full_name || 'User'}</p>
                <p className="text-xs text-muted-foreground">Dashboard</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link href="/auth">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth">
                <Button size="sm">
                  Get Started
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-4">
                {/* User Info or Auth */}
                {user ? (
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={profile?.avatar_url || user.user_metadata?.avatar_url} />
                      <AvatarFallback>
                        {profile?.full_name?.split(' ').map(n => n[0]).join('') ||
                         user.email?.split('@')[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">{profile?.full_name || 'User'}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link href="/auth" onClick={() => setIsOpen(false)}>
                      <Button className="w-full">Sign In</Button>
                    </Link>
                    <Link href="/auth" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">Get Started</Button>
                    </Link>
                  </div>
                )}

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {item.icon && <item.icon className="h-4 w-4" />}
                      <span>{item.name}</span>
                    </Link>
                  ))}

                  {/* User-specific links */}
                  {user && (
                    <>
                      <Link
                        href="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <User className="h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                      <button
                        onClick={() => {
                          signOut();
                          setIsOpen(false);
                        }}
                        className="flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors w-full text-left"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Sign Out</span>
                      </button>
                    </>
                  )}
                </nav>

                {/* Quick Actions */}
                <div className="pt-4 border-t">
                  <Button className="w-full" size="sm">
                    <Search className="h-4 w-4 mr-2" />
                    Search Guides
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}