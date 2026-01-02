# West Levy Creative — Context Overview

- Project Root: [/Volumes/NHB_Workspace/west-levy-creative](file:///Volumes/NHB_Workspace/west-levy-creative)
- Primary Logs: [context-claude-code-latest.md](file:///Volumes/NHB_Workspace/west-levy-creative/context-claude-code-latest.md), [context.md](file:///Volumes/NHB_Workspace/west-levy-creative/context.md)

**Current Project Architecture**
- Frontend: Next.js 14 (App Router), TypeScript, Tailwind CSS in [app](file:///Volumes/NHB_Workspace/west-levy-creative/app)
- Backend: Supabase (PostgreSQL, Auth, Storage, Realtime) in [supabase](file:///Volumes/NHB_Workspace/west-levy-creative/supabase)
- Local Dev: Docker compose for app + Supabase ([docker-compose.yml](file:///Volumes/NHB_Workspace/west-levy-creative/docker-compose.yml))
- CI/CD: GitHub Actions → Vercel ([.github/workflows/deploy.yml](file:///Volumes/NHB_Workspace/west-levy-creative/.github/workflows/deploy.yml))
- Legacy UI sources: Vite/React components under [ISSOLATION/src](file:///Volumes/NHB_Workspace/west-levy-creative/ISSOLATION/src) to be migrated

**Completed Features**
- Header and Footer migrated to Next.js ([Header.tsx](file:///Volumes/NHB_Workspace/west-levy-creative/app/components/layout/Header.tsx), [Footer.tsx](file:///Volumes/NHB_Workspace/west-levy-creative/app/components/layout/Footer.tsx))
- Root layout wired with fonts and fixed header ([layout.tsx](file:///Volumes/NHB_Workspace/west-levy-creative/app/app/layout.tsx))
- Auth hook implemented ([useAuth.ts](file:///Volumes/NHB_Workspace/west-levy-creative/app/hooks/useAuth.ts))
- Tailwind utility classes added to globals ([globals.css](file:///Volumes/NHB_Workspace/west-levy-creative/app/app/globals.css))
- Radix UI, lucide, clsx installed and used in UI

**Pending Tasks**
- Migrate homepage content to [page.tsx](file:///Volumes/NHB_Workspace/west-levy-creative/app/app/page.tsx)
- Migrate public pages: /about, /services, /portfolio, /contact into [app/app](file:///Volumes/NHB_Workspace/west-levy-creative/app/app)
- Build Admin dashboard: /dashboard, /clients, /employees, /projects, /chat, /tools, /reports
- Apply database schema and RLS in Supabase migrations ([supabase/migrations](file:///Volumes/NHB_Workspace/west-levy-creative/supabase/migrations))
- Wire Supabase auth/session in Next middleware ([middleware.ts](file:///Volumes/NHB_Workspace/west-levy-creative/app/middleware.ts))
- Confirm Docker ports and local services alignment

**Technical Dependencies**
- Next.js, Tailwind, Radix UI, lucide-react, class-variance-authority, clsx
- Supabase JS client in [lib/supabase](file:///Volumes/NHB_Workspace/west-levy-creative/app/lib/supabase)
- Docker, Supabase CLI (local dev), Vercel (hosting), GitHub (CI/CD)

**Integration Points**
- Supabase: client/server utilities ([client.ts](file:///Volumes/NHB_Workspace/west-levy-creative/app/lib/supabase/client.ts), [server.ts](file:///Volumes/NHB_Workspace/west-levy-creative/app/lib/supabase/server.ts))
- Vercel: Next.js deployment through GitHub push ([package.json](file:///Volumes/NHB_Workspace/west-levy-creative/app/package.json), workflow in [.github/workflows](file:///Volumes/NHB_Workspace/west-levy-creative/.github/workflows))
- GitHub: repo triggers Vercel builds; Supabase migrations applied via CLI and tracked in repo

**Gaps & Inconsistencies**
- Legacy CSS tokens referenced as `tokens.css` caused errors; import removed in globals
- Logo assets not yet copied to [public/logos](file:///Volumes/NHB_Workspace/west-levy-creative/app/public/logos)
- Legacy Vite components under ISSOLATION require systematic migration to Next.js
- Port usage conflicts documented in logs; standardize dev port to 3001 and reflect in docker and .env
- Multiple documentation files exist; this index consolidates the authoritative state

**Source References**
- Implementation log: [context-claude-code-latest.md](file:///Volumes/NHB_Workspace/west-levy-creative/context-claude-code-latest.md)
- Template/design context: [context.md](file:///Volumes/NHB_Workspace/west-levy-creative/context.md)

