# PRE-MIGRATION_PLAN — West Levy Creative (Next.js app)

**Purpose**: Safely accelerate the remaining migration while avoiding regressions from the CAUTION bundle. This is the prep plan to execute before/while adding missing pages.

---

## 1) Align Auth & Routing (must do first)
- Decide canonical auth routes: use `/auth` (and `/agent-login`) everywhere; update middleware redirects accordingly.
- Expand middleware protection to cover `/portal/*` and `/client/*` (current matcher only guards top-level).
- Map legacy React Router routes to Next app routes:
  - `/who-we-are` → `app/app/who-we-are/page.tsx`
  - `/who-we-are/[member]` → `[member]/page.tsx` (slug from `team.ts`)
  - `/case-studies` and `/case-studies/[slug]`
  - `/client/*` → Next nested routes
  - `/checkout/success|cancel`, `/careers`, `/support`, `/rewards`, `/not-found`

## 2) Source Code From CAUTION Safely
- Only lift content/layout from `ISSOLATION/CAUTION/src/pages/*`; rewrite for Next (no React Router, no `import.meta.env`, no localStorage auth client on server).
- Do **not** copy `src/integrations/supabase/client.ts` or `src/hooks/useAuth.ts` as-is; use our existing Next/SSR client and adapt role logic only.
- For auth UIs, remove CAUTION auto-redirects to `/client/dashboard` and route based on role via middleware or client hook.

## 3) Page Migration Order (public-first)
1. Update `/about` and `/portfolio` content to match ISSOLATION.
2. Build `/who-we-are` + `/who-we-are/[member]` using `app/data/team.ts` and CAUTION layouts.
3. Build `/case-studies` + `/case-studies/[slug]` using `app/data/caseStudies.ts`.
4. Add `/careers`, `/support`, `/rewards`, `/not-found`.
5. Add auth pages `/auth` and `/agent-login` (reuse components in `app/components/auth/`; adapt CAUTION UI).
6. Add portal shells under `/portal/*` using existing portal components.
7. Add client shells under `/client/*` using existing client components.
8. Add `/checkout/success` and `/checkout/cancel`.

## 4) Assets & Data
- Add placeholder assets for the missing images to `app/public/images` and `app/public/logos` to clear 404s; replace with finals later.
- Confirm data files (`team.ts`, `caseStudies.ts`, `services.ts`) cover all page needs; extend only if a CAUTION page references extra fields.

## 5) Auth/Role Flow
- Implement role-aware guard: partner → `/client`, agent/admin → `/portal`. Use middleware + a lightweight client hook that fetches `user_roles` via our Supabase client (no localStorage on server).
- Ensure protected client-side components don’t run Supabase client in server components; keep role checks in middleware or client hooks.

## 6) Navigation & Linking
- Audit nav/mega menu and footer after adding routes; ensure new pages are linked and CTA targets (e.g., “View Packages,” auth links) point to Next routes.

## 7) Testing & Verification
- Smoke: `npm run dev` renders all routes without 404/500; check console for missing assets.
- Auth flow: login/logout for agent and (if available) partner; verify redirects.
- Forms: contact form submission to Supabase still succeeds.
- Visual: spot check hero/sections on new pages vs CAUTION reference.

## 8) Deployment Prep
- Keep `ignoreBuildErrors` true during migration; plan to re-enable once pages stabilize.
- After pages ship, add placeholder images → run `next build` locally to ensure no broken imports.
- Document env needs for production (Supabase keys, any Stripe envs if checkout pages include links/buttons).

---

**Execution Tip**: Build pages in small PR-sized chunks (e.g., batch public pages, then auth, then portals) to limit blast radius from CAUTION-derived code.
