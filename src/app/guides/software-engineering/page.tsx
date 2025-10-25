"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/header";
import {
  BookOpen,
  Clock,
  TrendingUp,
  CheckCircle,
  Star,
  Bookmark,
  Share2,
  Printer,
  ChevronRight,
  Code,
  Database,
  Smartphone,
  Globe,
  Server,
  Cpu
} from "lucide-react";

const tableOfContents = [
  { id: "overview", title: "Career Overview", level: 1 },
  { id: "roles", title: "Key Roles & Specializations", level: 1 },
  { id: "frontend", title: "Frontend Development", level: 2 },
  { id: "backend", title: "Backend Development", level: 2 },
  { id: "fullstack", title: "Full-Stack Development", level: 2 },
  { id: "mobile", title: "Mobile Development", level: 2 },
  { id: "skills", title: "Essential Skills & Technologies", level: 1 },
  { id: "learning-path", title: "Learning Roadmap", level: 1 },
  { id: "salary", title: "Salary Data & Market Insights", level: 1 },
  { id: "career-progression", title: "Career Progression", level: 1 },
];

const skills = [
  { category: "Programming Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "Go", "Rust"] },
  { category: "Frontend Technologies", items: ["React", "Vue.js", "Angular", "Next.js", "HTML5", "CSS3", "SASS"] },
  { category: "Backend Technologies", items: ["Node.js", "Express", "Django", "Spring Boot", "PostgreSQL", "MongoDB"] },
  { category: "DevOps & Tools", items: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD", "Linux"] },
  { category: "Mobile Development", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
];

export default function SoftwareEngineeringGuide() {
  const [activeSection, setActiveSection] = useState("overview");
  const [readingProgress, setReadingProgress] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-muted">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="flex">
        {/* Sticky Table of Contents - Left Sidebar */}
        <aside className="hidden lg:block fixed left-0 top-20 h-[calc(100vh-5rem)] w-80 overflow-y-auto border-r bg-background/95 backdrop-blur p-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Table of Contents</h3>
            <nav className="space-y-1">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors hover:bg-accent ${
                    activeSection === item.id
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  } ${item.level === 2 ? "ml-4" : ""}`}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-80">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="secondary">Software Engineering</Badge>
                <Badge variant="outline">Updated 2025</Badge>
              </div>

              <h1 className="text-4xl font-bold mb-4">
                Software Engineering Career Guide
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                Master frontend, backend, full-stack, and mobile development. Complete roadmap with salary data,
                skills to learn, and market insights for 2025-2030.
              </p>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>25 min read</span>
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="h-4 w-4" />
                  <span>$85k - $180k avg salary</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4" />
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Overview */}
              <section id="overview" className="scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6">Career Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">
                    Software engineering is one of the most in-demand and rewarding careers in technology.
                    As a software engineer, you'll design, develop, and maintain software applications that
                    power our digital world.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>High Demand</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Over 1.5 million software engineering jobs available worldwide
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-blue-500" />
                          <span>Excellent Compensation</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Average salary ranges from $85k-$180k depending on experience and location
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Key Roles */}
              <section id="roles" className="scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6">Key Roles & Specializations</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Frontend Developer",
                      icon: Globe,
                      description: "Build user interfaces and experiences using modern web technologies",
                      skills: ["React", "TypeScript", "CSS", "JavaScript"]
                    },
                    {
                      title: "Backend Developer",
                      icon: Server,
                      description: "Design and implement server-side logic and database architectures",
                      skills: ["Node.js", "Python", "PostgreSQL", "API Design"]
                    },
                    {
                      title: "Full-Stack Developer",
                      icon: Code,
                      description: "Handle both frontend and backend development across the entire stack",
                      skills: ["React", "Node.js", "Database", "DevOps"]
                    },
                    {
                      title: "Mobile Developer",
                      icon: Smartphone,
                      description: "Create native and cross-platform mobile applications",
                      skills: ["React Native", "Swift", "Kotlin", "Flutter"]
                    }
                  ].map((role, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <role.icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{role.title}</CardTitle>
                        </div>
                        <CardDescription>{role.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Skills Section */}
              <section id="skills" className="scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6">Essential Skills & Technologies</h2>
                <div className="space-y-6">
                  {skills.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold mb-3">{category.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-sm py-1 px-3">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Learning Path */}
              <section id="learning-path" className="scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6">Learning Roadmap</h2>
                <div className="space-y-4">
                  {[
                    { phase: "Phase 1: Foundations", duration: "3-6 months", items: ["Programming basics", "HTML/CSS", "JavaScript fundamentals", "Version control (Git)"] },
                    { phase: "Phase 2: Core Development", duration: "4-8 months", items: ["Frontend framework (React)", "Backend development", "Database design", "API development"] },
                    { phase: "Phase 3: Advanced Topics", duration: "6-12 months", items: ["System design", "DevOps practices", "Testing strategies", "Performance optimization"] },
                    { phase: "Phase 4: Specialization", duration: "Ongoing", items: ["Choose specialty area", "Advanced frameworks", "Industry best practices", "Leadership skills"] }
                  ].map((phase, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{phase.phase}</CardTitle>
                          <Badge variant="secondary">{phase.duration}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Actions Sidebar - Right */}
        <aside className="hidden xl:block fixed right-0 top-20 h-[calc(100vh-5rem)] w-80 overflow-y-auto border-l bg-background/95 backdrop-blur p-6">
          <div className="space-y-6">
            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Reading Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={readingProgress} className="mb-2" />
                <p className="text-sm text-muted-foreground">
                  {Math.round(readingProgress)}% complete
                </p>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="space-y-3">
              <Button
                variant={isBookmarked ? "default" : "outline"}
                className="w-full"
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <Bookmark className="h-4 w-4 mr-2" />
                {isBookmarked ? "Bookmarked" : "Bookmark Guide"}
              </Button>

              <Button variant="outline" className="w-full">
                <Share2 className="h-4 w-4 mr-2" />
                Share Guide
              </Button>

              <Button variant="outline" className="w-full">
                <Printer className="h-4 w-4 mr-2" />
                Print Guide
              </Button>
            </div>

            <Separator />

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/salary-calculator">
                  <Button variant="ghost" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Salary Calculator
                  </Button>
                </Link>
                <Link href="/career-visualizer">
                  <Button variant="ghost" className="w-full justify-start">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Career Visualizer
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button variant="ghost" className="w-full justify-start">
                    <Star className="h-4 w-4 mr-2" />
                    Learning Resources
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}