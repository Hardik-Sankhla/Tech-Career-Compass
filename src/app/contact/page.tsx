"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { OWNER_INFO } from "@/lib/owner-info";
import {
  Mail,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Users,
  HelpCircle,
  Lightbulb
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Send us a direct message",
    contact: OWNER_INFO.socialLinks.email,
    action: `mailto:${OWNER_INFO.socialLinks.email}`,
    color: "bg-blue-500"
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Check out our code and contribute",
    contact: "Hardik-Sankhla",
    action: OWNER_INFO.socialLinks.github,
    color: "bg-gray-800"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect professionally",
    contact: "Hardik Sankhla",
    action: OWNER_INFO.socialLinks.linkedin,
    color: "bg-blue-600"
  },
  {
    icon: Twitter,
    title: "Twitter",
    description: "Follow for updates and insights",
    contact: "@hardik_sankhla",
    action: OWNER_INFO.socialLinks.twitter,
    color: "bg-sky-500"
  }
];

const communityGuidelines = [
  "Be respectful and constructive in all interactions",
  "Share knowledge and help others learn",
  "Ask questions when you're stuck - no question is too basic",
  "Give credit where credit is due",
  "Keep discussions on topic and professional",
  "Report any inappropriate behavior"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                Let's Build Your
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}Tech Career Together
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Have questions about our guides? Need career advice? Want to contribute?
                We're here to help you succeed in your tech journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Methods</h2>
            <p className="text-xl text-muted-foreground">
              Choose the best way to reach out to us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm font-medium mb-4">{method.contact}</p>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a href={method.action} target="_blank" rel="noopener noreferrer">
                        Connect
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Have a specific question or need personalized career advice?
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <Card>
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="What's this about?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Guidelines */}
            <div className="space-y-8">
              {/* Response Time */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Response Time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We typically respond to all messages within 24 hours during business days.
                    For urgent career questions, please mention it in your subject line.
                  </p>
                </CardContent>
              </Card>

              {/* Community Guidelines */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Community Guidelines</span>
                  </CardTitle>
                  <CardDescription>
                    How we keep our community supportive and professional
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {communityGuidelines.map((guideline, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <HelpCircle className="h-5 w-5" />
                    <span>Frequently Asked</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Can I contribute to the guides?</h4>
                    <p className="text-sm text-muted-foreground">
                      Absolutely! We welcome contributions from the community. Reach out to discuss how you can help.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Do you offer personalized career coaching?</h4>
                    <p className="text-sm text-muted-foreground">
                      We provide general guidance through our guides, but for personalized coaching, we can recommend trusted professionals.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">How often are the guides updated?</h4>
                    <p className="text-sm text-muted-foreground">
                      We update our content quarterly to reflect the latest industry trends and salary data.
                    </p>
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
          <Lightbulb className="h-16 w-16 mx-auto mb-6 text-primary-foreground/80" />
          <h2 className="text-3xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Your tech career journey starts with the right information and guidance.
            Let's help you make informed decisions about your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <MessageSquare className="mr-2 h-5 w-5" />
              Start a Conversation
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <BookOpen className="mr-2 h-5 w-5" />
              Browse Our Guides
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}