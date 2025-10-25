"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { OWNER_INFO } from "@/lib/owner-info";
import {
  Award,
  Code,
  Users,
  BookOpen,
  TrendingUp,
  Heart,
  Github,
  Linkedin,
  Mail,
  ExternalLink
} from "lucide-react";

const achievements = [
  {
    icon: Users,
    title: "Community Impact",
    description: "Helped 1,000+ developers navigate their career paths",
    value: "1,000+"
  },
  {
    icon: BookOpen,
    title: "Comprehensive Guides",
    description: "Created detailed career guides covering 6 major tech domains",
    value: "6 Guides"
  },
  {
    icon: TrendingUp,
    title: "Career Success",
    description: "Average salary increase of 35% for guide users",
    value: "35%"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Featured in top tech publications and communities",
    value: "Featured"
  }
];

const values = [
  {
    title: "Accessibility",
    description: "Making high-quality career guidance available to everyone, regardless of background or experience level."
  },
  {
    title: "Practicality",
    description: "Providing actionable advice based on real market data, not just theoretical concepts."
  },
  {
    title: "Community",
    description: "Building a supportive community where developers can learn, share, and grow together."
  },
  {
    title: "Innovation",
    description: "Staying ahead of industry trends and continuously updating our content with the latest insights."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4">About Tech Career Compass</Badge>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                Empowering Developers to
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}Build Amazing Careers
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're on a mission to democratize access to high-quality career guidance in tech,
                helping developers at every stage make informed decisions about their professional journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet the Founder</h2>
              <p className="text-xl text-muted-foreground">
                Learn about the person behind Tech Career Compass
              </p>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                      {OWNER_INFO.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{OWNER_INFO.name}</h3>
                      <p className="text-lg text-muted-foreground mb-4">{OWNER_INFO.title}</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {OWNER_INFO.bio}
                      </p>
                    </div>

                    {/* Expertise */}
                    <div>
                      <h4 className="font-semibold mb-3">Expertise & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {OWNER_INFO.expertise.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {OWNER_INFO.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Award className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                      <h4 className="font-semibold mb-3">Connect</h4>
                      <div className="flex space-x-4">
                        {OWNER_INFO.socialLinks.github && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={OWNER_INFO.socialLinks.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              GitHub
                            </a>
                          </Button>
                        )}
                        {OWNER_INFO.socialLinks.linkedin && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={OWNER_INFO.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-4 w-4 mr-2" />
                              LinkedIn
                            </a>
                          </Button>
                        )}
                        <Button variant="outline" size="sm" asChild>
                          <a href={`mailto:${OWNER_INFO.socialLinks.email}`}>
                            <Mail className="h-4 w-4 mr-2" />
                            Email
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground">
              Real results from helping developers build successful careers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{achievement.value}</div>
                    <h3 className="font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="h-16 w-16 mx-auto mb-6 text-primary-foreground/80" />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed mb-8">
              To empower every developer with the knowledge, tools, and confidence to build a fulfilling
              and successful career in technology. We believe that career guidance should be accessible,
              comprehensive, and based on real market data rather than outdated advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Our Guides
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Users className="mr-2 h-5 w-5" />
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}