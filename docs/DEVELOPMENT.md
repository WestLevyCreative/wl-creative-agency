# Development Guide

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js 18+ (for local development)
- Git

### Initial Setup

1. **Clone or extract this template**
   ```bash
   git clone <template-url> my-project
   cd my-project
   rm -rf .git
   ```

2. **Run the setup script**
   ```bash
   chmod +x setup-new-project.sh
   ./setup-new-project.sh
   ```

3. **Create your application**
   
   For Next.js:
   ```bash
   cd app
   npx create-next-app@latest . --typescript --tailwind --app
   cd ..
   ```

4. **Start development**
   ```bash
   docker compose up -d
   ```

## Project Structure

```
.
├── app/                    # Your application
├── functions/             # Vercel Edge Functions
├── supabase/
│   ├── config/           # Kong API Gateway config
│   ├── migrations/       # Database migration files
│   └── functions/        # Supabase Edge Functions
├── docker-compose.yml    # Local dev orchestration
├── Dockerfile           # Production build
├── Dockerfile.dev      # Dev with hot reload
├── .env.example       # Environment template
├── setup-new-project.sh  # Setup wizard
└── README.md         # Main documentation
```

## Local Development

### Starting Services

```bash
# Start all services
docker compose up -d

# Follow logs
docker compose logs -f

# Stop services
docker compose down
```

### Accessing Services

| Service | URL | Purpose |
|---------|-----|---------|
| App | http://localhost:3000 | Your application |
| Supabase Studio | http://localhost:54323 | Database admin |
| Supabase API | http://localhost:8000 | REST API |
| PostgreSQL | localhost:5432 | Direct DB access |

### Database Operations

```bash
# Connect to PostgreSQL
docker compose exec postgres psql -U postgres

# Run a migration
docker compose exec postgres psql -U postgres < schema.sql

# Backup database
docker compose exec postgres pg_dump -U postgres > backup.sql

# Restore from backup
docker compose exec -T postgres psql -U postgres < backup.sql
```

### Container Management

```bash
# View running containers
docker compose ps

# View logs for specific service
docker compose logs -f app
docker compose logs -f postgres

# Execute command in container
docker compose exec app npm install new-package

# Restart a service
docker compose restart app

# Rebuild and restart
docker compose up -d --build app

# Remove all data (full cleanup)
docker compose down -v
```

## Connecting to Supabase

### Default Local Credentials

The template includes default development credentials:
- **URL**: http://localhost:8000
- **Anon Key**: See `.env.local`
- **Service Role Key**: See `.env.local`

### Setting Up Authentication

Create a Supabase client in your app:

**Next.js (src/lib/supabase.ts)**
```typescript
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

**Using in a component**
```typescript
import { supabase } from '@/lib/supabase';

export default function LoginComponent() {
  const handleLogin = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) console.error('Login failed:', error);
    return data;
  };
  
  return (
    <button onClick={() => handleLogin('user@example.com', 'password')}>
      Sign In
    </button>
  );
}
```

## Database Migrations

### Creating a Migration

1. **Update the schema in Supabase Studio** (GUI approach)
   - Navigate to http://localhost:54323
   - Make your changes directly

2. **Or create SQL migration files**
   ```bash
   # Create a new migration
   cat > supabase/migrations/002_add_comments_table.sql << 'SQL'
   create table public.comments (
     id uuid primary key default uuid_generate_v4(),
     created_at timestamp with time zone default timezone('utc'::text, now()) not null,
     content text not null,
     post_id uuid references public.posts on delete cascade,
     user_id uuid references public.profiles on delete cascade
   );
   SQL
   ```

3. **Run the migration**
   ```bash
   docker compose exec postgres psql -U postgres < supabase/migrations/002_add_comments_table.sql
   ```

## Edge Functions

### Vercel Edge Functions

Place TypeScript files in the `functions/` directory:

```typescript
// functions/my-api.ts
export const config = { runtime: 'edge' };

export default async (request: Request) => {
  const { name } = await request.json();
  return new Response(JSON.stringify({ message: `Hello, ${name}!` }));
};
```

**Deploy**: Automatically on push to main

### Supabase Edge Functions

Place TypeScript files in `supabase/functions/`:

```bash
# Create a function
mkdir -p supabase/functions/my-function
cat > supabase/functions/my-function/index.ts << 'TS'
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const { name = "World" } = await req.json()
  
  return new Response(
    JSON.stringify({ message: `Hello, ${name}!` }),
    { headers: { "Content-Type": "application/json" } }
  )
})
TS

# Deploy
supabase functions deploy my-function
```

## Environment Variables

### Local Development (.env.local)

```env
NODE_ENV=development
DB_PASSWORD=your_secure_password
NEXT_PUBLIC_SUPABASE_URL=http://localhost:8000
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Production (Vercel Dashboard)

Set these in Vercel → Settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_prod_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_prod_service_role_key
NODE_ENV=production
```

## Deployment

### Prerequisites

1. **GitHub Repository**
   - Push code to GitHub
   - Enable GitHub Actions

2. **Vercel Account**
   - Create account at vercel.com
   - Note your `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

3. **Supabase Project**
   - Create production project
   - Note your project credentials

### Setup Steps

1. **Link to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   vercel link
   ```

2. **Add GitHub Secrets**
   - Repository → Settings → Secrets and variables → Actions
   - Add all required secrets (see README.md)

3. **Configure Vercel Environment**
   - Vercel Dashboard → Project → Settings → Environment Variables
   - Add all production credentials

4. **Deploy**
   ```bash
   # Push to main triggers automatic deployment
   git push origin main
   
   # Or deploy manually
   vercel --prod
   ```

## Troubleshooting

### Port Already in Use

```bash
# Find process using the port
lsof -i :3000

# Kill the process
kill -9 <PID>
```

### Container Issues

```bash
# Check logs
docker compose logs app

# Rebuild
docker compose down
docker compose up -d --build

# Full reset
docker compose down -v
docker compose up -d --build
```

### Hot Reload Not Working

```bash
# Restart the app container
docker compose restart app

# For Next.js, add to next.config.js
module.exports = {
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}
```

### Database Connection Errors

```bash
# Check PostgreSQL
docker compose exec postgres pg_isready -U postgres

# Restart PostgreSQL
docker compose restart postgres

# Check connection string
echo $DATABASE_URL
```

## Best Practices

1. **Version Control**
   - Commit only source code
   - Use `.gitignore` for sensitive files
   - Use GitHub Secrets for credentials

2. **Database**
   - Use migrations for schema changes
   - Enable Row Level Security in production
   - Backup regularly
   - Test migrations locally first

3. **Secrets**
   - Never commit `.env` files
   - Use different keys for local/prod
   - Rotate secrets regularly
   - Store sensitive data in GitHub Secrets

4. **Development**
   - Keep feature branches clean
   - Test locally before pushing
   - Use meaningful commit messages
   - Review logs before deployment

5. **Monitoring**
   - Check Vercel deployment logs
   - Monitor Supabase performance
   - Watch for database quota usage
   - Set up error alerting

## Resources

- [Docker Docs](https://docs.docker.com)
- [Supabase Docs](https://supabase.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [GitHub Actions](https://docs.github.com/en/actions)

## Getting Help

Check the troubleshooting section in README.md for common issues.
