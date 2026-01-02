# West Levy Creative - Next.js 14 Rebuild Plan

## 🎯 Objective
Rebuild the existing Vite + React West Levy Creative site as a fresh Next.js 14 App Router application that:
- **Looks identical** to the current site
- Uses modern Next.js 14 App Router architecture
- Connects cleanly to Supabase and Vercel
- Has no corrupted or buggy code from the old site

## 📊 Current Site Analysis

### Pages (22 total)
Located in: `/Volumes/NHB_Workspace/west-levy-creative/ISSOLATION/src/pages/`

**Public Pages:**
1. `Index.tsx` - Homepage
2. `Services.tsx` - Services page
3. `CaseStudies.tsx` - Case studies listing
4. `CaseStudyDetail.tsx` - Individual case study page
5. `WhoWeAre.tsx` - About/Team page
6. `TeamMemberPage.tsx` - Individual team member page
7. `Contact.tsx` - Contact page
8. `Careers.tsx` - Careers page
9. `Support.tsx` - Support page
10. `Rewards.tsx` - Rewards/referral page

**Auth Pages:**
11. `Auth.tsx` - Authentication page
12. `AgentLogin.tsx` - Agent-specific login

**Portal Pages (Dashboard - Protected):**
13. `Portal.tsx` - Main portal/dashboard
14. `PortalProfile.tsx` - User profile
15. `PortalSettings.tsx` - Settings
16. `PortalCalendar.tsx` - Calendar
17. `PortalInquiries.tsx` - Inquiries/messages
18. `PortalOnboarding.tsx` - Onboarding flow
19. `client/` - Client-specific portal pages

**E-commerce:**
20. `CheckoutSuccess.tsx` - Checkout success page
21. `CheckoutCancel.tsx` - Checkout canceled page

**Utility:**
22. `NotFound.tsx` - 404 page

### Components Structure

**UI Components (shadcn/ui based):**
Located in: `src/components/ui/`
- accordion, alert-dialog, alert, aspect-ratio
- avatar, badge, breadcrumb, button
- calendar, card, carousel, chart
- checkbox, collapsible, command, context-menu
- dialog, drawer, dropdown-menu
- (20+ more shadcn/ui components)

**Layout Components:**
Located in: `src/components/layout/`
- `Header.tsx` - Site header/navigation
- `Footer.tsx` - Site footer
- `Layout.tsx` - Main layout wrapper

**Feature Components:**
- `agents/` - Agent-related components
- `client/` - Client-facing components
- `content/` - Content components
- `home/` - Homepage-specific components
- `navigation/` - Navigation components
- `packages/` - Package/pricing components
- `portal/` - Portal/dashboard components
- `shared/` - Shared utility components

**Custom Components:**
- `NavLink.tsx` - Custom navigation link
- `ProtectedRoute.tsx` - Route protection wrapper

### Data Structure

**Data Files:**
Located in: `src/data/`
1. `home.ts` - Homepage content data
2. `services.ts` - Services data
3. `caseStudies.ts` - Case studies data
4. `team.ts` - Team member data
5. `Prices.md` - Pricing information

### Hooks

**Custom Hooks:**
Located in: `src/hooks/`
1. `useAuth.ts` - Authentication hook
2. `useAgents.ts` - Agent management
3. `useAgentProfile.ts` - Agent profile
4. `useContentPage.ts` - Content page management
5. `use-mobile.tsx` - Mobile detection
6. `use-toast.ts` - Toast notifications

### Supabase Integration

**Supabase Files:**
Located in: `src/integrations/supabase/`
- Supabase client configuration
- Database types
- API helpers

### Utilities

**Library Files:**
Located in: `src/lib/`
- `utils.ts` - Utility functions (likely includes `cn()` for Tailwind)

### Types

**TypeScript Types:**
Located in: `src/types/`
- `agent.ts` - Agent type definitions

### Styling

**Style Files:**
Located in: `src/styles/`
- `agent.css` - Agent-specific styles
- `tokens.css` - Design tokens/CSS variables

**Global Styles:**
- `index.css` - Global styles
- `App.css` - App-level styles

## 🏗️ Next.js 14 Architecture Plan

### Directory Structure

```
app/
├── .env.local
├── .eslintrc.json
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
│
├── public/
│   ├── images/
│   ├── fonts/
│   └── favicon.ico
│
└── src/
    ├── app/                                # App Router
    │   ├── layout.tsx                      # Root layout (Header + Footer)
    │   ├── page.tsx                        # Homepage (from Index.tsx)
    │   ├── globals.css                     # Global styles
    │   │
    │   ├── (public)/                       # Public pages group
    │   │   ├── services/
    │   │   │   └── page.tsx               # Services page
    │   │   ├── case-studies/
    │   │   │   ├── page.tsx               # Case studies list
    │   │   │   └── [slug]/
    │   │   │       └── page.tsx           # Individual case study
    │   │   ├── who-we-are/
    │   │   │   ├── page.tsx               # Team page
    │   │   │   └── [member]/
    │   │   │       └── page.tsx           # Individual team member
    │   │   ├── contact/
    │   │   │   └── page.tsx               # Contact page
    │   │   ├── careers/
    │   │   │   └── page.tsx               # Careers page
    │   │   ├── support/
    │   │   │   └── page.tsx               # Support page
    │   │   └── rewards/
    │   │       └── page.tsx               # Rewards page
    │   │
    │   ├── (auth)/                         # Auth pages group
    │   │   ├── login/
    │   │   │   └── page.tsx               # General login
    │   │   └── agent-login/
    │   │       └── page.tsx               # Agent login
    │   │
    │   ├── (portal)/                       # Protected portal group
    │   │   ├── layout.tsx                  # Portal layout (sidebar/nav)
    │   │   ├── portal/
    │   │   │   └── page.tsx               # Main dashboard
    │   │   ├── profile/
    │   │   │   └── page.tsx               # User profile
    │   │   ├── settings/
    │   │   │   └── page.tsx               # Settings
    │   │   ├── calendar/
    │   │   │   └── page.tsx               # Calendar
    │   │   ├── inquiries/
    │   │   │   └── page.tsx               # Inquiries
    │   │   ├── onboarding/
    │   │   │   └── page.tsx               # Onboarding
    │   │   └── client/
    │   │       └── [...slug]/
    │   │           └── page.tsx           # Client pages
    │   │
    │   ├── (checkout)/                     # Checkout flow group
    │   │   ├── success/
    │   │   │   └── page.tsx               # Checkout success
    │   │   └── cancel/
    │   │       └── page.tsx               # Checkout cancel
    │   │
    │   ├── not-found.tsx                   # 404 page
    │   │
    │   └── api/                            # API routes
    │       └── auth/
    │           └── callback/
    │               └── route.ts           # Supabase auth callback
    │
    ├── components/                         # All components
    │   ├── ui/                             # shadcn/ui components (copy as-is)
    │   ├── layout/                         # Layout components
    │   │   ├── header.tsx
    │   │   ├── footer.tsx
    │   │   └── portal-sidebar.tsx
    │   ├── agents/                         # Agent components (copy structure)
    │   ├── client/                         # Client components (copy structure)
    │   ├── content/                        # Content components (copy structure)
    │   ├── home/                           # Home components (copy structure)
    │   ├── navigation/                     # Navigation components
    │   ├── packages/                       # Package components
    │   ├── portal/                         # Portal components
    │   └── shared/                         # Shared components
    │
    ├── lib/                                # Library code
    │   ├── supabase/
    │   │   ├── client.ts                  # Browser Supabase client
    │   │   ├── server.ts                  # Server Supabase client
    │   │   └── middleware.ts              # Auth middleware
    │   ├── utils.ts                        # Utility functions (copy from old site)
    │   └── constants.ts                    # Constants
    │
    ├── hooks/                              # Custom hooks (copy from old site)
    │   ├── use-auth.ts
    │   ├── use-agents.ts
    │   ├── use-agent-profile.ts
    │   ├── use-content-page.ts
    │   ├── use-mobile.tsx
    │   └── use-toast.ts
    │
    ├── types/                              # TypeScript types
    │   ├── agent.ts                        # Copy from old site
    │   ├── database.ts                     # Supabase database types
    │   └── index.ts                        # General types
    │
    ├── data/                               # Static data (copy from old site)
    │   ├── home.ts
    │   ├── services.ts
    │   ├── case-studies.ts
    │   ├── team.ts
    │   └── prices.md
    │
    └── styles/                             # Additional styles
        ├── agent.css                       # Copy from old site
        └── tokens.css                      # Copy from old site
```

## 🔄 Migration Strategy

### Phase 1: Foundation Setup
1. ✅ Clean workspace created
2. ✅ Template deployed
3. Create Next.js app in `app/` directory
4. Install dependencies
5. Set up Tailwind CSS (copy config from old site if possible, or use defaults)
6. Set up TypeScript (strict mode)

### Phase 2: Core Infrastructure
1. Set up Supabase client configuration
   - Browser client (`lib/supabase/client.ts`)
   - Server client (`lib/supabase/server.ts`)
   - Middleware (`lib/supabase/middleware.ts`)
2. Copy utility functions (`lib/utils.ts`)
3. Copy type definitions (`types/`)
4. Copy custom hooks (`hooks/`)
5. Set up authentication flow

### Phase 3: UI Foundation
1. Copy all shadcn/ui components from `components/ui/`
2. Set up global styles (merge `index.css`, `App.css`, `globals.css`)
3. Copy CSS tokens and variables (`styles/tokens.css`, `styles/agent.css`)
4. Create root layout with Header and Footer
5. Test styling system

### Phase 4: Layout Components
1. Migrate `Header.tsx` to `components/layout/header.tsx`
   - Update for Next.js (use next/link instead of react-router)
   - Ensure responsive navigation works
2. Migrate `Footer.tsx` to `components/layout/footer.tsx`
3. Create `components/layout/portal-sidebar.tsx` for dashboard
4. Test layout on a simple page

### Phase 5: Public Pages (in order)
1. **Homepage** (`app/page.tsx` from `Index.tsx`)
   - Copy home components from `components/home/`
   - Copy home data from `data/home.ts`
   - Ensure all sections render correctly

2. **Services** (`app/(public)/services/page.tsx`)
   - Copy services data from `data/services.ts`
   - Copy package components if needed

3. **Case Studies**
   - List page: `app/(public)/case-studies/page.tsx`
   - Detail page: `app/(public)/case-studies/[slug]/page.tsx`
   - Copy case study data from `data/caseStudies.ts`

4. **Who We Are**
   - Team page: `app/(public)/who-we-are/page.tsx`
   - Team member page: `app/(public)/who-we-are/[member]/page.tsx`
   - Copy team data from `data/team.ts`

5. **Contact** (`app/(public)/contact/page.tsx`)
   - Copy contact form components
   - Set up form submission (Supabase or API route)

6. **Careers** (`app/(public)/careers/page.tsx`)
7. **Support** (`app/(public)/support/page.tsx`)
8. **Rewards** (`app/(public)/rewards/page.tsx`)

### Phase 6: Authentication
1. Create auth pages
   - Login: `app/(auth)/login/page.tsx`
   - Agent login: `app/(auth)/agent-login/page.tsx`
2. Set up Supabase auth callback: `app/api/auth/callback/route.ts`
3. Implement protected route logic in middleware
4. Test authentication flow

### Phase 7: Portal/Dashboard (Protected Pages)
1. Create portal layout: `app/(portal)/layout.tsx`
2. Main dashboard: `app/(portal)/portal/page.tsx`
3. Copy portal components from `components/portal/`
4. Individual portal pages:
   - Profile: `app/(portal)/profile/page.tsx`
   - Settings: `app/(portal)/settings/page.tsx`
   - Calendar: `app/(portal)/calendar/page.tsx`
   - Inquiries: `app/(portal)/inquiries/page.tsx`
   - Onboarding: `app/(portal)/onboarding/page.tsx`
5. Client pages: `app/(portal)/client/[...slug]/page.tsx`

### Phase 8: E-commerce/Checkout
1. Checkout success: `app/(checkout)/success/page.tsx`
2. Checkout cancel: `app/(checkout)/cancel/page.tsx`
3. Copy pricing data from `data/Prices.md`

### Phase 9: Remaining Components
1. Copy agent components: `components/agents/`
2. Copy client components: `components/client/`
3. Copy content components: `components/content/`
4. Copy navigation components: `components/navigation/`
5. Copy shared components: `components/shared/`

### Phase 10: Testing & Refinement
1. Test all public pages
2. Test authentication flow
3. Test protected routes
4. Test responsive design on mobile
5. Check for console errors
6. Verify Supabase connections
7. Test forms and interactions

### Phase 11: Database Setup
1. Analyze Supabase tables needed (agents, clients, inquiries, etc.)
2. Create database migration files
3. Apply to local Supabase (Docker)
4. Test database operations

### Phase 12: Deployment
1. Test locally with Docker Supabase
2. Create production Supabase project
3. Apply migrations to production
4. Push to GitHub
5. Connect to Vercel
6. Set environment variables
7. Deploy to production
8. Test production site

## 📋 Component Migration Checklist

For each component being migrated from Vite to Next.js:

### React Router → Next.js Navigation
- [ ] Replace `import { Link } from 'react-router-dom'` with `import Link from 'next/link'`
- [ ] Replace `import { useNavigate } from 'react-router-dom'` with `import { useRouter } from 'next/navigation'`
- [ ] Replace `navigate('/path')` with `router.push('/path')`
- [ ] Replace `<Link to="/path">` with `<Link href="/path">`
- [ ] Replace `useParams()` with Next.js route params

### Image Optimization
- [ ] Replace `<img src="..."` with `<Image src="..." width={} height={} alt=""` from 'next/image'
- [ ] Move images to `public/images/` directory

### Environment Variables
- [ ] Replace `import.meta.env.VITE_*` with `process.env.NEXT_PUBLIC_*`
- [ ] Ensure all env vars are prefixed with `NEXT_PUBLIC_` for client-side access

### CSS/Styling
- [ ] Ensure Tailwind classes work (should be fine)
- [ ] Check for any Vite-specific CSS imports
- [ ] Merge global styles into `app/globals.css`

### API Calls
- [ ] Update any hardcoded API URLs to use environment variables
- [ ] Consider moving API calls to Next.js API routes for better security

### Authentication
- [ ] Replace `ProtectedRoute` HOC with Next.js middleware
- [ ] Update Supabase client imports to use Next.js versions

## 🎨 Design Matching Requirements

The new Next.js site MUST look identical to the current Vite site:

### Visual Elements to Preserve
1. **Color Scheme** - Extract from `tokens.css` and old Tailwind config
2. **Typography** - Font families, sizes, weights
3. **Spacing** - Margins, paddings, gaps
4. **Animations** - Any transitions or animations
5. **Responsive Breakpoints** - Mobile, tablet, desktop layouts
6. **Component Styling** - Buttons, cards, forms look identical

### How to Ensure Visual Parity
1. Copy `styles/tokens.css` exactly
2. Copy `styles/agent.css` exactly
3. Replicate Tailwind configuration
4. Take screenshots of old site for comparison
5. Side-by-side comparison during development
6. Check each page on multiple screen sizes

## 📦 Dependencies

### Core Dependencies
```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "@supabase/supabase-js": "^2.45.0",
    "@supabase/ssr": "^0.5.0"
  }
}
```

### UI Dependencies (from old site)
```json
{
  "dependencies": {
    "@radix-ui/react-*": "...",  // All Radix UI packages used in old site
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.5.0",
    "lucide-react": "^0.400.0"
  }
}
```

### Dev Dependencies
```json
{
  "devDependencies": {
    "typescript": "^5.5.0",
    "@types/node": "^20.14.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "14.2.0"
  }
}
```

## 🗂️ Data Migration

### Static Data Files
All data files in `ISSOLATION/src/data/` should be copied to the new `src/data/` directory:

1. **home.ts** - Homepage content
   - Hero section text
   - Feature sections
   - CTA buttons

2. **services.ts** - Services data
   - Service categories
   - Service descriptions
   - Pricing tiers

3. **caseStudies.ts** - Case study data
   - Project details
   - Client names
   - Images/screenshots
   - Results/metrics

4. **team.ts** - Team member data
   - Names
   - Roles
   - Bios
   - Photos
   - Social links

5. **Prices.md** - Pricing information
   - Package details
   - Pricing tiers
   - Features included

### Database Tables Needed

Based on the portal/dashboard functionality, likely Supabase tables:

1. **agents** - Agent/employee accounts
2. **clients** - Client accounts
3. **inquiries** - Contact form submissions
4. **projects** - Client projects
5. **calendar_events** - Calendar entries
6. **messages** - Internal messaging
7. **rewards** - Referral/rewards tracking

## 🚦 Implementation Checkpoints

### Checkpoint 1: Foundation Complete
- [ ] Next.js app created
- [ ] Dependencies installed
- [ ] Tailwind CSS configured
- [ ] TypeScript configured
- [ ] Supabase clients set up
- [ ] Can run `npm run dev` successfully

### Checkpoint 2: Layouts Complete
- [ ] Root layout with Header & Footer works
- [ ] Portal layout with sidebar works
- [ ] Styling looks correct
- [ ] Navigation works

### Checkpoint 3: Public Pages Complete
- [ ] Homepage renders correctly
- [ ] All public pages accessible
- [ ] Visual parity with old site
- [ ] Responsive on mobile

### Checkpoint 4: Auth Complete
- [ ] Login page works
- [ ] Supabase authentication functional
- [ ] Protected routes work
- [ ] Logout works

### Checkpoint 5: Portal Complete
- [ ] Dashboard accessible after login
- [ ] All portal pages render
- [ ] Data displays correctly
- [ ] Forms work

### Checkpoint 6: Production Ready
- [ ] All pages tested
- [ ] No console errors
- [ ] Lighthouse scores good
- [ ] Works on Chrome, Firefox, Safari
- [ ] Mobile responsive
- [ ] Ready for deployment

## 📝 Key Migration Notes

### Critical Differences: Vite → Next.js

1. **Routing**
   - Old: React Router (`<Route>`, `<Link to="">`, `useNavigate()`)
   - New: File-based routing (`page.tsx`, `<Link href="">`, `useRouter()`)

2. **Environment Variables**
   - Old: `import.meta.env.VITE_*`
   - New: `process.env.NEXT_PUBLIC_*` (client) or `process.env.*` (server)

3. **Entry Point**
   - Old: `main.tsx` with `ReactDOM.render()`
   - New: `app/layout.tsx` and `app/page.tsx`

4. **Images**
   - Old: Direct `<img>` tags
   - New: `<Image>` component with optimization

5. **API Calls**
   - Old: Direct fetch to Supabase
   - New: Can use API routes (`app/api/`) or direct Supabase (both work)

6. **CSS**
   - Old: Imported in components
   - New: Imported in layouts or global

### Files to Skip/Replace

**Don't copy these from old site:**
- ❌ `main.tsx` - Not needed in Next.js
- ❌ `App.tsx` - Replaced by layout.tsx
- ❌ `vite-env.d.ts` - Vite-specific
- ❌ `vite.config.ts` - Not needed
- ❌ Any React Router config
- ❌ `ProtectedRoute.tsx` - Use Next.js middleware instead

**Replace with Next.js equivalents:**
- ✅ Routing logic → `app/` directory structure
- ✅ Protected routes → `middleware.ts`
- ✅ Environment config → `.env.local`

## 🎯 Success Criteria

The rebuild is complete when:
1. ✅ All pages from old site exist in new site
2. ✅ Visual appearance is identical
3. ✅ All functionality works (forms, auth, dashboard)
4. ✅ Supabase connection works (local & production)
5. ✅ Vercel deployment successful
6. ✅ Mobile responsive
7. ✅ No console errors
8. ✅ Fast page loads (good Lighthouse scores)
9. ✅ SEO meta tags in place
10. ✅ Production site live and accessible

## 📞 Where to Resume

**If you run out of usage and need to continue with a new model:**

1. **Current Status**: We have analyzed the old Vite site and created this plan
2. **Next Step**: Start Phase 1 - Create Next.js app in the `app/` directory
3. **Reference Files**:
   - This plan: `/Volumes/NHB_Workspace/west-levy-creative/NEXTJS_REBUILD_PLAN.md`
   - File structure guide: `/Volumes/NHB_Workspace/west-levy-creative/FILE_STRUCTURE_PLAN.md`
   - Old site source: `/Volumes/NHB_Workspace/west-levy-creative/ISSOLATION/src/`
   - New workspace: `/Volumes/NHB_Workspace/west-levy-creative/app/`

4. **Tell the new model**:
   > "Continue the West Levy Creative Next.js rebuild. The plan is in NEXTJS_REBUILD_PLAN.md. We're at Phase 1: Foundation Setup. The old Vite React site is in ISSOLATION/src/. Build the new Next.js 14 site in the app/ directory following the plan exactly. The new site must look identical to the old site."

---

**Plan created**: 2026-01-01
**Status**: Ready to begin Phase 1
**Estimated total time**: 6-8 hours of focused development
