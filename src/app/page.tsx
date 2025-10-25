"use client";import Image from "next/image";



import Link from "next/link";export default function Home() {

import { useEffect, useState } from "react";  return (

import { motion } from "framer-motion";    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

import { Button } from "@/components/ui/button";      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";        <Image

import { Badge } from "@/components/ui/badge";          className="dark:invert"

import { Header } from "@/components/header";          src="/next.svg"

import {          alt="Next.js logo"

  TrendingUp,          width={100}

  Users,          height={20}

  BookOpen,          priority

  Award,        />

  ArrowRight,        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">

  CheckCircle,          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">

  Code,            To get started, edit the page.tsx file.

  Database,          </h1>

  Cloud,          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">

  Shield,            Looking for a starting point or more instructions? Head over to{" "}

  Zap            <a

} from "lucide-react";              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

import { OWNER_INFO } from "@/lib/owner-info";              className="font-medium text-zinc-950 dark:text-zinc-50"

            >

const stats = [              Templates

  { label: "Career Guides", value: 6, suffix: "+", icon: BookOpen },            </a>{" "}

  { label: "Tech Professionals Helped", value: 1000, suffix: "+", icon: Users },            or the{" "}

  { label: "Salary Data Points", value: 5000, suffix: "+", icon: TrendingUp },            <a

  { label: "Success Rate", value: 95, suffix: "%", icon: Award },              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

];              className="font-medium text-zinc-950 dark:text-zinc-50"

            >

const careerPaths = [              Learning

  {            </a>{" "}

    title: "Software Engineering",            center.

    description: "Master frontend, backend, and full-stack development",          </p>

    icon: Code,        </div>

    color: "bg-blue-500",        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">

    href: "/guides/software-engineering"          <a

  },            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"

  {            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

    title: "Data & AI/ML",            target="_blank"

    description: "Navigate data science and machine learning careers",            rel="noopener noreferrer"

    icon: Database,          >

    color: "bg-green-500",            <Image

    href: "/guides/data-ai-ml"              className="dark:invert"

  },              src="/vercel.svg"

  {              alt="Vercel logomark"

    title: "Cloud & Infrastructure",              width={16}

    description: "Master cloud platforms and DevOps practices",              height={16}

    icon: Cloud,            />

    color: "bg-purple-500",            Deploy Now

    href: "/guides/cloud-infrastructure"          </a>

  },          <a

  {            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"

    title: "Cybersecurity",            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

    description: "Protect systems and advance your security career",            target="_blank"

    icon: Shield,            rel="noopener noreferrer"

    color: "bg-red-500",          >

    href: "/guides/cybersecurity"            Documentation

  },          </a>

  {        </div>

    title: "DevOps & SRE",      </main>

    description: "Automate deployments and ensure reliability",    </div>

    icon: Zap,  );

    color: "bg-orange-500",}

    href: "/guides/devops-sre"
  },
];

const features = [
  "Complete career roadmaps with salary data",
  "Interactive progress tracking",
  "Personalized learning paths",
  "Real-time salary calculators",
  "Community discussions",
  "AI-powered career assistant"
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < value) {
        setCount(count + Math.ceil(value / 50));
      }
    }, 30);
    return () => clearTimeout(timer);
  }, [count, value]);

  return <span>{Math.min(count, value).toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]" />

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4">
                🚀 Complete Tech Career Guidance
              </Badge>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Navigate Your
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}Tech Career
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Comprehensive career guides for software engineering, data science, cloud computing,
                cybersecurity, and DevOps. Complete roadmaps, salary data, and market insights for 2025-2030.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button size="lg" className="text-lg px-8 py-6">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Career Guides
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <TrendingUp className="mr-2 h-5 w-5" />
                View Salary Data
              </Button>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              {stats.map((stat, index) => (
                <Card key={stat.label} className="text-center">
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-3xl font-bold">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Career Paths</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your path and get a complete roadmap with salary data, skills to learn, and market insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPaths.map((path, index) => (
              <motion.div
                key={path.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${path.color} flex items-center justify-center mb-4`}>
                    <path.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {path.title}
                  </CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={path.href}>
                    <Button className="w-full group-hover:bg-primary/90">
                      View Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Tech Career Compass?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built by developers, for developers. Get the most comprehensive and up-to-date career guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">✨ What You Get</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">👨‍💻 Meet the Founder</h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {OWNER_INFO.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{OWNER_INFO.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{OWNER_INFO.title}</p>
                      <p className="text-sm mb-4">{OWNER_INFO.bio.substring(0, 150)}...</p>
                      <div className="flex flex-wrap gap-2">
                        {OWNER_INFO.expertise.slice(0, 3).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Tech Career?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of developers who have transformed their careers with our comprehensive guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}