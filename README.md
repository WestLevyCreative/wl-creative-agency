# 🚀 Local-First Development Template

A complete, production-ready template for building full-stack applications with local Docker development and one-click deployment to Vercel.

## 🎯 What's Included

- **Full Supabase Stack** (PostgreSQL, Auth, Storage, Realtime)
- **Hot-Reload Development** (Docker with live code mounting)
- **One-Click Deployment** (GitHub Actions → Vercel)
- **Framework Agnostic** (Next.js, React, Vue, Svelte, or any Node.js app)
- **Production Ready** (Multi-stage Docker builds, security best practices)
- **Environment Management** (Separate configs for local/production)
- **Edge Functions** (Vercel Edge Functions ready)

## 📦 Quick Start

### 1. Use This Template

```bash
# Option A: Clone this template
git clone <this-repo-url> my-new-project
cd my-new-project
rm -rf .git

# Option B: Download as ZIP and extract
```

### 2. Run Setup Script

```bash
chmod +x setup-new-project.sh
./setup-new-project.sh
```

This interactive script will:
- Initialize a new Git repository
- Prompt for your project name
- Let you choose your framework
- Generate secure secrets automatically
- Create `.env`, `.gitignore`, and `.dockerignore`

### 3. Create Your Application

```bash
# For Next.js (recommended)
mkdir app && cd app
npx create-next-app@latest . --typescript --tailwind --app
cd ..

# For React + Vite
mkdir app && cd app
npm create vite@latest . -- --template react-ts
cd ..

# For Vue
mkdir app && cd app
npm create vue@latest
cd ..

# Or copy your existing application into ./app directory
```

### 4. Start Development

```bash
# Start all services (Supabase + Your App)
docker compose up -d

# View logs
docker compose logs -f

# Stop services
docker compose down
```

### 5. Access Your Environment

| Service | URL | Description |
|---------|-----|-------------|
| Your App | http://localhost:3000 | Your application with hot reload |
| Supabase Studio | http://localhost:54323 | Database admin dashboard |
| Supabase API | http://localhost:54321 | REST API endpoint |
| PostgreSQL | localhost:5432 | Direct database access |

## 📁 Template Structure

```
template/
├── .github/
│   ├── workflows/
│   │   └── deploy.yml              # GitHub Actions CI/CD
│   └── copilot-instructions.md     # Copilot workspace instructions
├── supabase/
│   ├── config/
│   │   └── kong.yml                # Supabase API Gateway config
│   ├── migrations/
│   │   └── .gitkeep                # Schema migration files
│   └── functions/
│       └── .gitkeep                # Edge Functions
├── functions/
│   └── .gitkeep                    # Vercel Edge Functions
├── app/                            # ← Your application goes here
│   └── (created by you)
├── docker-compose.yml              # Local development orchestration
├── Dockerfile                      # Production build
├── Dockerfile.dev                  # Development with hot reload
├── docker-entrypoint.sh            # Docker entrypoint script
├── setup-new-project.sh            # Interactive setup script
├── .env.example                    # Environment variables template
├── .env.local.example              # Local-only environment template
├── .gitignore                      # Git ignore rules
├── .dockerignore                   # Docker ignore rules
└── README.md                       # This file
```

## 🛠️ Customization

### Changing Ports

Edit `docker-compose.yml`:

```yaml
services:
  app:
    ports:
      - "3001:3000"  # Change host port (left side)
```

### Adding Environment Variables

1. Add to `.env.example` (template for others)
2. Add to `.env.local` (your local values - git ignored)
3. Add to Vercel Dashboard (production values)
4. Add to GitHub Secrets (for CI/CD)

### Framework-Specific Setup

#### Next.js

```bash
# Install Supabase client
cd app
npm install @supabase/supabase-js

# Create lib/supabase.ts
mkdir -p src/lib
cat > src/lib/supabase.ts << 'SUPABASE'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
SUPABASE
```

#### React + Vite

Update `Dockerfile.dev`:

```dockerfile
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

#### Vue.js

Update `Dockerfile.dev`:

```dockerfile
CMD ["npm", "run", "dev"]
```

And add to `vite.config.ts`:

```typescript
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
  }
})
```

## 🚢 Deployment Setup

### Prerequisites

- GitHub account with repo access
- Vercel account (free tier works)
- Supabase account (free tier works)

### Step-by-Step

#### 1. Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

#### 2. Set Up Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login and link project
vercel login
vercel link

# This creates .vercel/project.json with:
# - projectId
# - orgId
```

#### 3. Create Supabase Production Project

1. Go to https://supabase.com/dashboard
2. Click "New project"
3. Note your credentials:
   - Project URL
   - Anon (public) key
   - Service role key
   - Database connection string

#### 4. Configure GitHub Secrets

Repository → Settings → Secrets and variables → Actions → New repository secret

Required secrets:

```
VERCEL_TOKEN          # From: https://vercel.com/account/tokens
VERCEL_ORG_ID         # From: .vercel/project.json
VERCEL_PROJECT_ID     # From: .vercel/project.json
SUPABASE_DB_PASSWORD  # From: Supabase Dashboard
```

#### 5. Configure Vercel Environment Variables

Vercel Dashboard → Your Project → Settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NODE_ENV=production
```

#### 6. Deploy!

```bash
# Push to main branch triggers automatic deployment
git push origin main

# Or deploy manually
vercel --prod

# Or trigger from GitHub Actions UI
# Go to Actions tab → Deploy to Vercel → Run workflow
```

## 📊 Monitoring & Management

### View Container Status

```bash
docker compose ps
```

### View Logs

```bash
# All services
docker compose logs -f

# Specific service
docker compose logs -f app
docker compose logs -f postgres
```

### Database Management

```bash
# Connect to PostgreSQL
docker compose exec postgres psql -U postgres

# Run SQL file
docker compose exec -T postgres psql -U postgres < schema.sql

# Backup database
docker compose exec postgres pg_dump -U postgres > backup.sql

# Restore database
docker compose exec -T postgres psql -U postgres < backup.sql
```

### Execute Commands in App Container

```bash
# Run npm commands
docker compose exec app npm install new-package
docker compose exec app npm run test
docker compose exec app npm run build

# Access shell
docker compose exec app sh
```

### Restart Services

```bash
# Restart all
docker compose restart

# Restart specific service
docker compose restart app

# Rebuild and restart
docker compose up -d --build app
```

## 🧹 Cleanup

```bash
# Stop containers (keep data)
docker compose down

# Stop and remove volumes (delete all data)
docker compose down -v

# Remove only app container
docker compose rm -sf app

# Full cleanup
docker compose down -v --rmi all
```

## 🔒 Security Best Practices

1. **Never commit `.env`** - It's in `.gitignore` by default
2. **Rotate secrets regularly** - Regenerate JWT tokens periodically
3. **Use different credentials** - Separate keys for local/prod
4. **Enable RLS** - Use Supabase Row Level Security in production
5. **Review permissions** - Check Supabase policies before going live

## 🎓 Learning Resources

### Docker
- [Docker Documentation](https://docs.docker.com)
- [Docker Compose Guide](https://docs.docker.com/compose/)

### Supabase
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase CLI](https://supabase.com/docs/guides/cli)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

### Vercel
- [Vercel Documentation](https://vercel.com/docs)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [GitHub Integration](https://vercel.com/docs/git/vercel-for-github)

### GitHub Actions
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Find what's using the port
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or change the port in docker-compose.yml
```

### Container Won't Start

```bash
# Check logs for errors
docker compose logs app

# Rebuild from scratch
docker compose down
docker compose up -d --build
```

### Database Connection Issues

```bash
# Check if PostgreSQL is ready
docker compose exec postgres pg_isready -U postgres

# Restart database
docker compose restart postgres

# Check connection string
echo $DATABASE_URL
```

### Hot Reload Not Working

```bash
# Ensure volumes are properly mounted
docker compose down
docker compose up -d

# For Next.js, add to next.config.js:
# module.exports = {
#   webpack: (config) => {
#     config.watchOptions = {
#       poll: 1000,
#       aggregateTimeout: 300,
#     }
#     return config
#   },
# }
```

### Deployment Fails

1. Check GitHub Actions logs for specific error
2. Verify all secrets are set correctly
3. Check Vercel deployment logs
4. Ensure environment variables are set in Vercel
5. Verify build command in `package.json`

## 🤝 Contributing to This Template

Improvements are welcome! Please:

1. Fork this template
2. Create a feature branch
3. Make your changes
4. Test with a fresh project
5. Submit a pull request

## 📝 License

MIT License - Feel free to use this template for any project!

## 💡 Tips & Tricks

- **Use branches for features**: Keep `main` clean for auto-deployments
- **Preview deployments**: PR branches automatically deploy to Vercel preview URLs
- **Database migrations**: Use Supabase migrations for schema changes
- **Environment parity**: Keep local and production as similar as possible
- **Backup regularly**: Export your database schema and data periodically
- **Watch for secrets**: Use GitHub Secrets for sensitive data
- **Test locally first**: Always test in Docker before pushing to production
