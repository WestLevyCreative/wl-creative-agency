// Supabase Database Types
// This file contains type definitions for Supabase database types

// Json type for Supabase JSONB columns
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

// Database type definitions
export interface Database {
  public: {
    Tables: {
      // Add your table definitions here
    }
  }
}
