# West Levy Creative — Pending Tasks

- High-level tasks derived from [context-claude-code-latest.md](file:///Volumes/NHB_Workspace/west-levy-creative/context-claude-code-latest.md) and [context.md](file:///Volumes/NHB_Workspace/west-levy-creative/context.md)

**Frontend**
- Migrate homepage content into [app/app/page.tsx](file:///Volumes/NHB_Workspace/west-levy-creative/app/app/page.tsx)
- Create public pages: /about, /services, /portfolio, /contact under [app/app](file:///Volumes/NHB_Workspace/west-levy-creative/app/app)
- Build Admin pages: /dashboard, /clients, /employees, /projects, /chat, /tools, /reports
- Move legacy components from [ISSOLATION/src](file:///Volumes/NHB_Workspace/west-levy-creative/ISSOLATION/src) to Next.js equivalents
- Add assets to [app/public/logos](file:///Volumes/NHB_Workspace/west-levy-creative/app/public/logos) and update references

**Backend & Data**
- Implement Supabase schema migrations in [supabase/migrations](file:///Volumes/NHB_Workspace/west-levy-creative/supabase/migrations)
- Configure RLS policies for roles: admin, manager, employee, client
- Add realtime channels for chat and notifications

**Auth & Middleware**
- Connect Next.js middleware to Supabase session ([middleware.ts](file:///Volumes/NHB_Workspace/west-levy-creative/app/middleware.ts))
- Guard admin routes using role-based access

**DevOps**
- Standardize dev port to 3001 across Docker and app configs ([docker-compose.yml](file:///Volumes/NHB_Workspace/west-levy-creative/docker-compose.yml))
- Verify GitHub → Vercel integration in [.github/workflows](file:///Volumes/NHB_Workspace/west-levy-creative/.github/workflows)
- Add Supabase CLI workflows for applying migrations locally and in CI

**Documentation**
- Keep [context/README.md](file:///Volumes/NHB_Workspace/west-levy-creative/context/README.md) up to date as the single source of truth
- De-duplicate overlapping docs in [/docs](file:///Volumes/NHB_Workspace/west-levy-creative/docs)

