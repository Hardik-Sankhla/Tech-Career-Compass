import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth-context";
import { OWNER_INFO } from "@/lib/owner-info";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tech Career Compass - Complete Career Roadmaps & Salary Data",
    template: "%s | Tech Career Compass"
  },
  description: "Comprehensive career guides for software engineering, data science, cloud computing, cybersecurity, and DevOps. Complete roadmaps, salary data, and market insights for 2025-2030.",
  keywords: ["tech careers", "software engineering", "data science", "cloud computing", "cybersecurity", "devops", "career roadmap", "salary data"],
  authors: [{ name: OWNER_INFO.name, url: OWNER_INFO.socialLinks.website }],
  creator: OWNER_INFO.name,
  publisher: OWNER_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://techcareercompass.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tech Career Compass - Complete Career Roadmaps & Salary Data",
    description: "Comprehensive career guides for software engineering, data science, cloud computing, cybersecurity, and DevOps.",
    url: "https://techcareercompass.vercel.app",
    siteName: "Tech Career Compass",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tech Career Compass - Career Roadmaps & Salary Data",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Career Compass - Complete Career Roadmaps & Salary Data",
    description: "Comprehensive career guides for software engineering, data science, cloud computing, cybersecurity, and DevOps.",
    images: ["/og-image.png"],
    creator: "@hardik_sankhla",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
