/**
 * Example Next.js API Route with Supabase Integration
 * 
 * For Next.js 13+ App Router:
 * Place this in: app/api/posts/route.ts
 * 
 * For Pages Router (older Next.js):
 * Place this in: pages/api/posts.ts and use the commented Pages Router version
 * 
 * SETUP INSTRUCTIONS:
 * 1. Install Supabase client: npm install @supabase/supabase-js
 * 2. Add these env vars to .env.local:
 *    NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
 *    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
 *    SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
 * 3. Create a 'posts' table in Supabase with these columns:
 *    - id (uuid, primary key)
 *    - title (text)
 *    - slug (text, unique)
 *    - content (text)
 *    - user_id (uuid, foreign key to auth.users)
 *    - published (boolean, default: false)
 *    - created_at (timestamp, default: now())
 *    - updated_at (timestamp, default: now())
 */

// ============================================
// APP ROUTER VERSION (Next.js 13+) ✅ RECOMMENDED
// Place in: app/api/posts/route.ts
// ============================================

import { createClient } from '@supabase/supabase-js';
import type { NextRequest } from 'next';
import { NextResponse } from 'next/server';

// Initialize Supabase Admin Client (server-side only)
// Uses SERVICE_ROLE_KEY for unrestricted database access
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  {
    auth: {
      persistSession: false, // Server-side only, no need for sessions
    },
  }
);

// Type definitions for Posts table
interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  user_id: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

/**
 * GET /api/posts
 * Fetch all published posts ordered by newest first
 * Public endpoint - no authentication required
 */
async function handleGet(req: NextRequest): Promise<NextResponse> {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select('id, title, slug, content, user_id, published, created_at, updated_at')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/posts
 * Create a new post
 * Requires: x-user-id header with authenticated user ID
 * 
 * Body:
 * {
 *   "title": "Post Title",
 *   "slug": "post-title",
 *   "content": "Post content...",
 *   "published": false
 * }
 */
async function handlePost(req: NextRequest): Promise<NextResponse> {
  try {
    // Get user ID from header (in real app, extract from JWT/auth session)
    const userId = req.headers.get('x-user-id');

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized - missing x-user-id header' },
        { status: 401 }
      );
    }

    // Parse request body
    const body = await req.json();
    const { title, slug, content, published = false } = body;

    // Validate required fields
    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: 'Missing required fields: title, slug, content' },
        { status: 400 }
      );
    }

    // Insert new post
    const { data, error } = await supabase
      .from('posts')
      .insert([
        {
          title,
          slug,
          content,
          user_id: userId,
          published,
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data[0], { status: 201 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// Main exports for App Router
export async function GET(req: NextRequest): Promise<NextResponse> {
  return handleGet(req);
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  return handlePost(req);
}

// ============================================
// PAGES ROUTER VERSION (Older Next.js)
// Place in: pages/api/posts.ts
// Uncomment and use this version for Pages Router
// ============================================

/*
import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  user_id: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

type ResponseData = Post[] | Post | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  } else if (req.method === 'POST') {
    try {
      const { title, slug, content } = req.body;
      const userId = req.headers['x-user-id'];

      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const { data, error } = await supabase
        .from('posts')
        .insert([{ title, slug, content, user_id: userId }])
        .select();

      if (error) throw error;

      res.status(201).json(data[0]);
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
*/

// ============================================
// USAGE EXAMPLES
// ============================================

/*
// GET all published posts
const response = await fetch('/api/posts');
const posts = await response.json();
console.log(posts);

// Output:
// [
//   {
//     id: 'uuid-1',
//     title: 'First Post',
//     slug: 'first-post',
//     content: 'Content here...',
//     user_id: 'user-uuid',
//     published: true,
//     created_at: '2024-01-15T10:00:00Z',
//     updated_at: '2024-01-15T10:00:00Z'
//   }
// ]

// CREATE a new post
const newPost = await fetch('/api/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-user-id': 'user-uuid-here'
  },
  body: JSON.stringify({
    title: 'My First Post',
    slug: 'my-first-post',
    content: 'This is the content of my post...',
    published: false
  })
});

const created = await newPost.json();
console.log(created);

// Output:
// {
//   id: 'uuid-new',
//   title: 'My First Post',
//   slug: 'my-first-post',
//   content: 'This is the content of my post...',
//   user_id: 'user-uuid-here',
//   published: false,
//   created_at: '2024-01-20T15:30:00Z',
//   updated_at: '2024-01-20T15:30:00Z'
// }
*/

// ============================================
// KEY POINTS
// ============================================

/*
1. AUTHENTICATION:
   - GET requests are public (anyone can fetch published posts)
   - POST requests require x-user-id header (in production, extract from JWT)
   - Use Supabase Auth middleware for better security

2. DATABASE SCHEMA:
   - Create a 'posts' table in Supabase
   - Enable Row Level Security (RLS) for production
   - Add policies: public can read published, authenticated users can create

3. ENVIRONMENT VARIABLES:
   - NEXT_PUBLIC_SUPABASE_URL: Your Supabase project URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY: Public key (safe for client)
   - SUPABASE_SERVICE_ROLE_KEY: Admin key (server-side only, keep secret!)

4. BEST PRACTICES:
   - Always validate input on the server
   - Use SERVICE_ROLE_KEY only on the server
   - Implement proper error handling
   - Use TypeScript for type safety
   - Add proper logging and monitoring
   - Implement rate limiting for production

5. SECURITY:
   - Never expose SERVICE_ROLE_KEY to frontend
   - Use Row Level Security (RLS) policies in Supabase
   - Validate all user input
   - Implement proper authentication
   - Use HTTPS in production
   - Add CORS headers if accessing from different domain
*/
