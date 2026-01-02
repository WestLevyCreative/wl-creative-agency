# West Levy Creative Agency

Marketing site built with Next.js 15 and React 19, styled with Tailwind CSS and powered by Supabase for auth/data.

## Getting Started
- Install deps: `cd app && npm install`
- Environment: add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local`
- Run dev server: `npm run dev`

## Scripts
- `npm run dev` — start Next.js locally
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — lint the project

## Deployment
- Set the same Supabase env vars in Vercel (Production + Preview)
- Import the GitHub repo into Vercel and deploy from the `app` project root
- In Supabase auth settings, allow your Vercel domain(s) in the Site URL list

## Notes
- Local-only docs, setup scripts, and sample Supabase functions are ignored to keep the repo lean. Keep your `.env.local` out of Git.
