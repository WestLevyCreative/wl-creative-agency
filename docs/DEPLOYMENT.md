# Deployment Guide

## Overview

This template includes a complete CI/CD pipeline that automatically:
- Tests your code on every push
- Builds your application
- Deploys to Vercel (production or preview)
- Manages database migrations

## Prerequisites

### 1. GitHub Repository

```bash
# Initialize Git
git init
git add .
git commit -m "Initial commit"

# Create repository on GitHub and push
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

### 2. Vercel Account Setup

#### Install Vercel CLI

```bash
npm install -g vercel
```

#### Link Your Project

```bash
# Login to Vercel
vercel login

# Link project
vercel link

# This creates .vercel/project.json with:
# - projectId
# - orgId
```

#### Get Required Tokens

```bash
# Visit https://vercel.com/account/tokens
# Create a new token and note it down as VERCEL_TOKEN
```

### 3. Supabase Production Project

1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Note these credentials:
   - `NEXT_PUBLIC_SUPABASE_URL` - Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Anon (public) key
   - `SUPABASE_SERVICE_ROLE_KEY` - Service role key
   - `SUPABASE_DB_PASSWORD` - Database password

## GitHub Secrets Configuration

### 1. Access Repository Settings

```
GitHub → Your Repository → Settings → Secrets and variables → Actions
```

### 2. Add Required Secrets

Click "New repository secret" and add these:

#### Vercel Secrets

| Secret | Value | Source |
|--------|-------|--------|
| `VERCEL_TOKEN` | Your token | https://vercel.com/account/tokens |
| `VERCEL_ORG_ID` | Organization ID | `.vercel/project.json` after `vercel link` |
| `VERCEL_PROJECT_ID` | Project ID | `.vercel/project.json` after `vercel link` |

#### Supabase Secrets

| Secret | Value | Source |
|--------|-------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | https://xxxxx.supabase.co | Supabase Dashboard |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your anon key | Supabase Dashboard → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Your service role key | Supabase Dashboard → Settings → API |
| `SUPABASE_DB_PASSWORD` | Your DB password | Set during project creation |

#### Optional - Database Migration Secrets

| Secret | Value | Source |
|--------|-------|--------|
| `SUPABASE_ACCESS_TOKEN` | Your access token | Supabase Dashboard → Account settings |
| `SUPABASE_PROJECT_ID` | Project ID | Supabase Dashboard URL |

### 3. Verify Secrets

```bash
# List your secrets (values are masked)
gh secret list --repo yourusername/your-repo
```

## Deployment Workflow

### Automatic Deployment

The `.github/workflows/deploy.yml` file automatically:

1. **On every push to `main`:**
   - Runs tests
   - Builds the application
   - Deploys to Vercel (production)
   - Runs database migrations

2. **On every push to `develop`:**
   - Runs tests
   - Builds the application
   - Deploys to Vercel (preview)

3. **On pull requests:**
   - Runs tests
   - Builds the application
   - Comments with deployment URL

### Manual Deployment

#### Deploy to Vercel

```bash
# Production deployment
vercel --prod

# Preview deployment
vercel

# Set specific environment
vercel --env DATABASE_URL=postgresql://...
```

#### Deploy Edge Functions

```bash
# Automatic on push to main
# Or manually:
vercel deploy
```

## Vercel Configuration

### Environment Variables

Set these in Vercel Dashboard → Settings → Environment Variables:

#### Production

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
NODE_ENV=production
```

#### Preview

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
NODE_ENV=development
```

### Build Settings

#### For Next.js

```
Framework: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm ci
```

#### For React + Vite

```
Framework: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm ci
```

## Database Migrations

### Local Development

Test migrations locally before pushing:

```bash
# Create a new migration
cat > supabase/migrations/002_new_table.sql << 'SQL'
create table public.new_table (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default now()
);
SQL

# Test the migration
docker compose exec postgres psql -U postgres < supabase/migrations/002_new_table.sql
```

### Production Migrations

Migrations run automatically on deployment. To manually run:

```bash
# Using Supabase CLI
supabase db pull          # Pull latest schema
supabase db push          # Push migrations to production
```

## Troubleshooting

### Deployment Fails

1. **Check GitHub Actions logs**
   - Go to Actions tab
   - Click the failed workflow
   - View the error logs

2. **Common issues**
   - Missing environment variables
   - Secrets not set in GitHub
   - Missing Vercel project ID
   - Build script failure

3. **Fix and retry**
   ```bash
   # Fix the issue
   git add .
   git commit -m "Fix deployment issue"
   git push origin main
   ```

### Secret Issues

```bash
# Verify secrets are set
gh secret list --repo yourusername/your-repo

# Update a secret
gh secret set SECRET_NAME --body "new-value"

# Delete a secret
gh secret delete SECRET_NAME
```

### Build Failures

1. **Check build logs in Vercel**
   - Vercel Dashboard → Deployments
   - Click the failed deployment
   - Check build logs

2. **Common issues**
   - Missing dependencies
   - TypeScript errors
   - Environment variables not set
   - API endpoint errors

3. **Fix locally and test**
   ```bash
   cd app
   npm run build
   ```

### Database Connection Issues

```bash
# Verify credentials
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY

# Test connection (from your app)
curl https://xxxxx.supabase.co/rest/v1/
```

## Monitoring

### Vercel Analytics

- **Deployments**: vercel.com/dashboard/analytics
- **Performance**: Monitor Core Web Vitals
- **Errors**: Check Error Tracking

### Supabase Monitoring

- **Database**: Dashboard → Statistics
- **API Usage**: Dashboard → API Logs
- **Performance**: Dashboard → Performance

## Rollback

### Revert to Previous Deployment

```bash
# In Vercel Dashboard:
# 1. Deployments → Find the version you want
# 2. Click "Redeploy"
# 3. Confirm
```

```bash
# Or using git:
git revert <commit-hash>
git push origin main
```

## Security Best Practices

1. **Secrets Management**
   - Use GitHub Secrets for all credentials
   - Never commit `.env` files
   - Rotate secrets regularly

2. **Vercel Deployment**
   - Enable password protection for preview deploys
   - Use separate projects for staging/production
   - Monitor unauthorized deployments

3. **Supabase**
   - Enable Row Level Security
   - Use service role key only on backend
   - Restrict API key scopes
   - Enable audit logs

4. **CI/CD**
   - Review workflow before merging
   - Use branch protection rules
   - Require status checks before merge
   - Monitor workflow logs

## Reference

### File Locations

- **Deployment workflow**: `.github/workflows/deploy.yml`
- **Environment template**: `.env.example`
- **Vercel config**: `vercel.json` (optional)
- **Docker setup**: `docker-compose.yml`

### Useful Links

- [Vercel Deployment Docs](https://vercel.com/docs)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Supabase Deployment](https://supabase.com/docs/guides/hosting)
- [Environment Variables Guide](https://vercel.com/docs/projects/environment-variables)

## Next Steps

1. ✅ Set up GitHub repository
2. ✅ Configure Vercel
3. ✅ Create Supabase project
4. ✅ Add GitHub Secrets
5. ✅ Push to main
6. ✅ Monitor deployment in Vercel Dashboard

Your application should now be automatically deploying!
