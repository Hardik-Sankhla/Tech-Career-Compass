export interface CareerGuide {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: CareerCategory;
  tags: string[];
  keywords: string[];
  readingTime: number;
  lastUpdated: Date;
  author: string;
  featured: boolean;
  order: number;
}

export interface CareerCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
  language: string;
}

export interface UserProgress {
  userId: string;
  guideId: string;
  progress: number; // 0-100
  bookmarks: string[]; // section IDs
  completedSections: string[];
  lastReadAt: Date;
  timeSpent: number; // in minutes
}

export interface Bookmark {
  id: string;
  userId: string;
  guideId: string;
  sectionId: string;
  sectionTitle: string;
  createdAt: Date;
}

export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  type: 'guide' | 'section' | 'blog';
  category?: string;
  tags?: string[];
}

export interface SalaryData {
  location: string;
  experience: 'entry' | 'mid' | 'senior' | 'lead' | 'executive';
  role: string;
  salary: {
    min: number;
    max: number;
    median: number;
    currency: string;
  };
  benefits: string[];
  sources: string[];
}

export interface OwnerInfo {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email: string;
    website?: string;
  };
  location: string;
  experience: string;
  expertise: string[];
  achievements: string[];
}