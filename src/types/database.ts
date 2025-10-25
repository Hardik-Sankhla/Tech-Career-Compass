export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          updated_at: string | null
          username: string | null
          full_name: string | null
          avatar_url: string | null
          website: string | null
          bio: string | null
          location: string | null
          experience_level: 'beginner' | 'intermediate' | 'advanced' | 'expert' | null
          current_role: string | null
          preferred_stack: string[] | null
          career_goals: string[] | null
          notifications_enabled: boolean | null
          theme_preference: 'light' | 'dark' | 'system' | null
        }
        Insert: {
          id: string
          updated_at?: string | null
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
          bio?: string | null
          location?: string | null
          experience_level?: 'beginner' | 'intermediate' | 'advanced' | 'expert' | null
          current_role?: string | null
          preferred_stack?: string[] | null
          career_goals?: string[] | null
          notifications_enabled?: boolean | null
          theme_preference?: 'light' | 'dark' | 'system' | null
        }
        Update: {
          id?: string
          updated_at?: string | null
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
          bio?: string | null
          location?: string | null
          experience_level?: 'beginner' | 'intermediate' | 'advanced' | 'expert' | null
          current_role?: string | null
          preferred_stack?: string[] | null
          career_goals?: string[] | null
          notifications_enabled?: boolean | null
          theme_preference?: 'light' | 'dark' | 'system' | null
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          guide_id: string
          progress_percentage: number
          completed_sections: string[]
          bookmarked_sections: string[]
          time_spent_minutes: number
          last_read_at: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          guide_id: string
          progress_percentage?: number
          completed_sections?: string[]
          bookmarked_sections?: string[]
          time_spent_minutes?: number
          last_read_at?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          guide_id?: string
          progress_percentage?: number
          completed_sections?: string[]
          bookmarked_sections?: string[]
          time_spent_minutes?: number
          last_read_at?: string
          created_at?: string
          updated_at?: string
        }
      }
      bookmarks: {
        Row: {
          id: string
          user_id: string
          guide_id: string
          section_id: string
          section_title: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          guide_id: string
          section_id: string
          section_title: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          guide_id?: string
          section_id?: string
          section_title?: string
          created_at?: string
        }
      }
      salary_data: {
        Row: {
          id: string
          location: string
          experience_level: 'entry' | 'mid' | 'senior' | 'lead' | 'executive'
          role: string
          salary_min: number
          salary_max: number
          salary_median: number
          currency: string
          benefits: string[]
          sources: string[]
          last_updated: string
          created_at: string
        }
        Insert: {
          id?: string
          location: string
          experience_level: 'entry' | 'mid' | 'senior' | 'lead' | 'executive'
          role: string
          salary_min: number
          salary_max: number
          salary_median: number
          currency: string
          benefits?: string[]
          sources?: string[]
          last_updated?: string
          created_at?: string
        }
        Update: {
          id?: string
          location?: string
          experience_level?: 'entry' | 'mid' | 'senior' | 'lead' | 'executive'
          role?: string
          salary_min?: number
          salary_max?: number
          salary_median?: number
          currency?: string
          benefits?: string[]
          sources?: string[]
          last_updated?: string
          created_at?: string
        }
      }
      comments: {
        Row: {
          id: string
          user_id: string
          guide_id: string
          section_id: string | null
          content: string
          parent_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          guide_id: string
          section_id?: string | null
          content: string
          parent_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          guide_id?: string
          section_id?: string | null
          content?: string
          parent_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      user_preferences: {
        Row: {
          id: string
          user_id: string
          saved_guides: string[]
          favorite_categories: string[]
          reading_speed: 'slow' | 'normal' | 'fast'
          email_notifications: boolean
          push_notifications: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          saved_guides?: string[]
          favorite_categories?: string[]
          reading_speed?: 'slow' | 'normal' | 'fast'
          email_notifications?: boolean
          push_notifications?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          saved_guides?: string[]
          favorite_categories?: string[]
          reading_speed?: 'slow' | 'normal' | 'fast'
          email_notifications?: boolean
          push_notifications?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}