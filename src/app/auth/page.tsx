"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClient } from '@/lib/supabase-client';
import { useAuth } from '@/contexts/auth-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Github, Mail } from 'lucide-react';
import Link from 'next/link';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  if (user) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Back to Home */}
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">Welcome Back</Badge>
          <h1 className="text-3xl font-bold mb-2">
            {isSignUp ? 'Join Tech Career Compass' : 'Welcome to Tech Career Compass'}
          </h1>
          <p className="text-muted-foreground">
            {isSignUp
              ? 'Create your account to unlock personalized career guidance'
              : 'Sign in to access your personalized dashboard and progress tracking'
            }
          </p>
        </div>

        {/* Auth Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </CardTitle>
            <CardDescription className="text-center">
              Choose your preferred sign-in method
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Auth
              supabaseClient={supabase}
              view={isSignUp ? 'sign_up' : 'sign_in'}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: 'hsl(var(--primary))',
                      brandAccent: 'hsl(var(--primary))',
                    },
                    borderWidths: {
                      buttonBorderWidth: '1px',
                      inputBorderWidth: '1px',
                    },
                    radii: {
                      borderRadiusButton: '6px',
                      buttonBorderRadius: '6px',
                      inputBorderRadius: '6px',
                    },
                  },
                },
                className: {
                  container: 'space-y-4',
                  button: 'w-full',
                  input: 'w-full',
                  label: 'text-sm font-medium',
                  message: 'text-sm',
                },
              }}
              providers={['github', 'google']}
              redirectTo={`${window.location.origin}/auth/callback`}
              onlyThirdPartyProviders={false}
              magicLink={true}
              showLinks={false}
            />

            {/* Toggle Sign Up/Sign In */}
            <div className="mt-6 text-center">
              <Button
                variant="link"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm"
              >
                {isSignUp
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Sign up"
                }
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">What you'll get:</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Personalized career dashboard</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Progress tracking across guides</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm">Bookmark favorite sections</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm">Customized learning paths</span>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          By signing in, you agree to our{' '}
          <Link href="/terms" className="underline hover:text-foreground">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="underline hover:text-foreground">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}