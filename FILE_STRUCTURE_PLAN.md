# West Levy Creative - Clean File Structure Plan

## Recommended Next.js 14 App Router Structure

```
app/
├── .env.local                          # Environment variables
├── .eslintrc.json                      # ESLint config
├── .gitignore                          # Git ignore
├── next.config.js                      # Next.js config
├── package.json                        # Dependencies
├── postcss.config.js                   # PostCSS config
├── tailwind.config.ts                  # Tailwind config
├── tsconfig.json                       # TypeScript config
│
├── public/                             # Static assets
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero/
│   │   └── portfolio/
│   ├── fonts/
│   └── favicon.ico
│
└── src/
    ├── app/                            # App Router pages
    │   ├── layout.tsx                  # Root layout
    │   ├── page.tsx                    # Homepage
    │   ├── globals.css                 # Global styles
    │   │
    │   ├── (auth)/                     # Auth route group
    │   │   ├── login/
    │   │   │   └── page.tsx
    │   │   ├── register/
    │   │   │   └── page.tsx
    │   │   └── forgot-password/
    │   │       └── page.tsx
    │   │
    │   ├── (public)/                   # Public pages route group
    │   │   ├── about/
    │   │   │   └── page.tsx
    │   │   ├── services/
    │   │   │   └── page.tsx
    │   │   ├── portfolio/
    │   │   │   ├── page.tsx
    │   │   │   └── [slug]/
    │   │   │       └── page.tsx
    │   │   └── contact/
    │   │       └── page.tsx
    │   │
    │   ├── (dashboard)/                # Protected dashboard routes
    │   │   ├── layout.tsx              # Dashboard layout with sidebar
    │   │   ├── dashboard/
    │   │   │   └── page.tsx
    │   │   ├── clients/
    │   │   │   ├── page.tsx
    │   │   │   └── [id]/
    │   │   │       └── page.tsx
    │   │   ├── employees/
    │   │   │   ├── page.tsx
    │   │   │   └── [id]/
    │   │   │       └── page.tsx
    │   │   ├── projects/
    │   │   │   ├── page.tsx
    │   │   │   └── [id]/
    │   │   │       └── page.tsx
    │   │   ├── chat/
    │   │   │   └── page.tsx
    │   │   ├── tools/
    │   │   │   └── page.tsx
    │   │   └── reports/
    │   │       └── page.tsx
    │   │
    │   └── api/                        # API routes
    │       ├── auth/
    │       │   └── callback/
    │       │       └── route.ts
    │       ├── clients/
    │       │   └── route.ts
    │       ├── employees/
    │       │   └── route.ts
    │       └── projects/
    │           └── route.ts
    │
    ├── components/                     # React components
    │   ├── ui/                         # Reusable UI components
    │   │   ├── button.tsx
    │   │   ├── card.tsx
    │   │   ├── input.tsx
    │   │   ├── modal.tsx
    │   │   ├── table.tsx
    │   │   └── toast.tsx
    │   │
    │   ├── layout/                     # Layout components
    │   │   ├── header.tsx
    │   │   ├── footer.tsx
    │   │   ├── sidebar.tsx
    │   │   └── navigation.tsx
    │   │
    │   ├── dashboard/                  # Dashboard-specific components
    │   │   ├── client-card.tsx
    │   │   ├── project-card.tsx
    │   │   ├── employee-card.tsx
    │   │   ├── stats-widget.tsx
    │   │   └── recent-activity.tsx
    │   │
    │   ├── public/                     # Public site components
    │   │   ├── hero-section.tsx
    │   │   ├── service-card.tsx
    │   │   ├── portfolio-grid.tsx
    │   │   ├── testimonials.tsx
    │   │   └── contact-form.tsx
    │   │
    │   └── forms/                      # Form components
    │       ├── client-form.tsx
    │       ├── employee-form.tsx
    │       ├── project-form.tsx
    │       └── login-form.tsx
    │
    ├── lib/                            # Library code & utilities
    │   ├── supabase/
    │   │   ├── client.ts               # Browser client
    │   │   ├── server.ts               # Server client
    │   │   └── middleware.ts           # Auth middleware
    │   ├── utils.ts                    # Utility functions (cn, formatDate, etc.)
    │   ├── constants.ts                # App constants
    │   └── validations.ts              # Zod validation schemas
    │
    ├── types/                          # TypeScript types
    │   ├── database.ts                 # Database types
    │   ├── supabase.ts                 # Supabase types
    │   └── index.ts                    # General types
    │
    ├── hooks/                          # Custom React hooks
    │   ├── use-auth.ts                 # Authentication hook
    │   ├── use-supabase.ts             # Supabase hook
    │   ├── use-toast.ts                # Toast notifications hook
    │   └── use-realtime.ts             # Realtime subscriptions hook
    │
    └── styles/                         # Additional styles (if needed)
        └── custom.css
```

## File Organization Principles

### 1. Configuration Files (Root of /app)
- `package.json` - Dependencies
- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `.env.local` - Environment variables (NOT committed)
- `.eslintrc.json` - Linting rules

### 2. Static Assets (/public)
- Images organized by section (hero, portfolio, team, etc.)
- Fonts
- Favicon and app icons
- SVG files

### 3. Source Code (/src)

#### App Router Pages (/src/app)
- **Route Groups** using `(groupName)` for organization without affecting URLs
- **Dynamic Routes** using `[param]` for individual items
- **Layouts** at each level for consistent UI

#### Components (/src/components)
- **ui/** - Generic, reusable UI components (buttons, inputs, cards)
- **layout/** - Layout components (header, footer, sidebar)
- **dashboard/** - Dashboard-specific complex components
- **public/** - Public site-specific components
- **forms/** - Form components with validation

#### Library Code (/src/lib)
- **supabase/** - All Supabase client code
- **utils.ts** - Helper functions
- **validations.ts** - Zod schemas for form validation

#### Types (/src/types)
- **database.ts** - Database table types
- **supabase.ts** - Supabase-specific types
- **index.ts** - General application types

#### Hooks (/src/hooks)
- Custom React hooks for reusable logic
- Auth, data fetching, realtime subscriptions

## Import Organization Rules

**Good:**
```typescript
// External dependencies first
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Internal imports
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase/client'
import { Client } from '@/types/database'
```

**Bad:**
```typescript
import { Client } from '@/types/database'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'
```

## Naming Conventions

### Files
- **Components:** `kebab-case.tsx` (e.g., `client-card.tsx`)
- **Pages:** `page.tsx`
- **Layouts:** `layout.tsx`
- **API Routes:** `route.ts`
- **Utilities:** `kebab-case.ts` (e.g., `format-date.ts`)

### Components
- **PascalCase** (e.g., `ClientCard`, `HeroSection`)

### Functions
- **camelCase** (e.g., `formatDate`, `fetchClients`)

### Constants
- **UPPER_SNAKE_CASE** (e.g., `API_URL`, `MAX_UPLOAD_SIZE`)

## What NOT to Include

❌ **Don't copy:**
- `node_modules/` - Will be reinstalled
- `.next/` - Build output (regenerated)
- `dist/` or `build/` - Build output
- `.env.local` - Create fresh with new keys
- `.DS_Store` - macOS system files
- Old migration files with bugs
- Duplicate or unused components
- Commented-out code blocks
- Debug console.logs
- Hardcoded credentials or API keys

✅ **Do copy (after review):**
- Source code (`src/`)
- Public assets (`public/`)
- Configuration files (`.eslintrc.json`, `tailwind.config.ts`, etc.)
- Documentation
- Database migration files (after review)

## Migration Checklist

Before copying each file:
- [ ] Remove all `console.log` debug statements
- [ ] Remove commented-out code
- [ ] Check for hardcoded values (move to env variables)
- [ ] Verify imports are correct
- [ ] Check for unused imports
- [ ] Ensure proper TypeScript types
- [ ] Verify Tailwind classes are valid
- [ ] Check for any TODOs or FIXMEs
- [ ] Ensure components follow naming conventions
- [ ] Validate file is in correct directory

## Step-by-Step Migration Process

1. **Configuration Files First**
   - package.json (review dependencies)
   - next.config.js
   - tailwind.config.ts
   - tsconfig.json

2. **Core Library Code**
   - Supabase clients
   - Utilities
   - Types
   - Validation schemas

3. **UI Components (bottom-up)**
   - Basic UI components (buttons, inputs)
   - Layout components
   - Composite components

4. **Pages (outside-in)**
   - Root layout
   - Public pages
   - Auth pages
   - Dashboard pages

5. **API Routes**
   - Auth endpoints
   - Data endpoints

6. **Static Assets**
   - Images
   - Fonts
   - Icons

7. **Final Touches**
   - Environment variables
   - Documentation
   - README updates
