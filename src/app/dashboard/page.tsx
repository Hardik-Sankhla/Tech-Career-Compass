"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { Header } from '@/components/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  BookOpen,
  TrendingUp,
  Clock,
  Star,
  Bookmark,
  Target,
  Award,
  Calendar,
  Settings,
  LogOut
} from 'lucide-react';
import Link from 'next/link';

interface UserProgress {
  guideId: string;
  guideTitle: string;
  progress: number;
  lastRead: string;
  timeSpent: number;
}

interface UserStats {
  totalGuidesRead: number;
  totalTimeSpent: number;
  averageProgress: number;
  bookmarksCount: number;
  completedSections: number;
}

export default function DashboardPage() {
  const { user, profile, loading, signOut } = useAuth();
  const router = useRouter();
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [userStats, setUserStats] = useState<UserStats>({
    totalGuidesRead: 0,
    totalTimeSpent: 0,
    averageProgress: 0,
    bookmarksCount: 0,
    completedSections: 0
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  // Mock data - in real app, this would come from Supabase
  useEffect(() => {
    if (user) {
      // Simulate loading user data
      setUserProgress([
        {
          guideId: 'software-engineering',
          guideTitle: 'Software Engineering',
          progress: 75,
          lastRead: '2 days ago',
          timeSpent: 45
        },
        {
          guideId: 'data-ai-ml',
          guideTitle: 'Data & AI/ML',
          progress: 30,
          lastRead: '1 week ago',
          timeSpent: 25
        }
      ]);

      setUserStats({
        totalGuidesRead: 3,
        totalTimeSpent: 120,
        averageProgress: 52,
        bookmarksCount: 8,
        completedSections: 24
      });
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, {profile?.full_name || user.email?.split('@')[0]}! 👋
              </h1>
              <p className="text-muted-foreground">
                Continue your tech career journey. Here's your progress overview.
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">{userStats.totalGuidesRead}</p>
                  <p className="text-xs text-muted-foreground">Guides Read</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-8 w-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">{userStats.totalTimeSpent}m</p>
                  <p className="text-xs text-muted-foreground">Time Spent</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">{userStats.averageProgress}%</p>
                  <p className="text-xs text-muted-foreground">Avg Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Bookmark className="h-8 w-8 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold">{userStats.bookmarksCount}</p>
                  <p className="text-xs text-muted-foreground">Bookmarks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Continue Reading */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Continue Reading</CardTitle>
                <CardDescription>
                  Pick up where you left off in your career guides
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {userProgress.map((progress) => (
                  <div key={progress.guideId} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold">{progress.guideTitle}</h3>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex-1">
                          <Progress value={progress.progress} className="h-2" />
                          <p className="text-sm text-muted-foreground mt-1">
                            {progress.progress}% complete
                          </p>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <p>{progress.lastRead}</p>
                          <p>{progress.timeSpent}m read</p>
                        </div>
                      </div>
                    </div>
                    <Link href={`/guides/${progress.guideId}`}>
                      <Button>Continue</Button>
                    </Link>
                  </div>
                ))}

                {userProgress.length === 0 && (
                  <div className="text-center py-8">
                    <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Start Your Journey</h3>
                    <p className="text-muted-foreground mb-4">
                      You haven't started reading any guides yet. Choose a career path to begin.
                    </p>
                    <Link href="/guides">
                      <Button>Browse Guides</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={profile?.avatar_url || user.user_metadata?.avatar_url} />
                    <AvatarFallback>
                      {profile?.full_name?.split(' ').map(n => n[0]).join('') ||
                       user.email?.split('@')[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{profile?.full_name || 'Anonymous User'}</h3>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    {profile?.experience_level && (
                      <Badge variant="secondary" className="mt-1">
                        {profile.experience_level}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/salary-calculator">
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Salary Calculator
                  </Button>
                </Link>
                <Link href="/career-visualizer">
                  <Button variant="outline" className="w-full justify-start">
                    <Target className="h-4 w-4 mr-2" />
                    Career Visualizer
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Learning Resources
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">First Steps</p>
                    <p className="text-xs text-muted-foreground">Read your first guide</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Dedicated Reader</p>
                    <p className="text-xs text-muted-foreground">Spent 2+ hours reading</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}