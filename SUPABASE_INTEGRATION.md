# Supabase GitHub Integration Setup

This guide will help you connect your GitHub repository to Supabase for automatic deployments and CI/CD.

## Option 1: Dashboard Integration (Recommended)

### Step 1: Connect GitHub to Supabase

1. **Go to Supabase Dashboard**
   - Visit [supabase.com](https://supabase.com)
   - Sign in to your account
   - Select your project

2. **Navigate to Settings**
   - Click on your project
   - Go to `Settings` → `Integrations`

3. **Connect GitHub**
   - Find the GitHub integration
   - Click "Connect"
   - Authorize Supabase to access your GitHub account
   - Select the repository: `WestLevyCreative/wl-creative-agency`

### Step 2: Configure Automatic Deployments

1. **Database Migrations**
   - Go to `Database` → `Migrations`
   - Enable "Auto-migrate on push"
   - Select branch: `main` (production), `develop` (preview)

2. **Edge Functions**
   - Go to `Functions` → `Settings`
   - Enable "Auto-deploy on push"
   - Select branch: `main` (production), `develop` (preview)

3. **Branch Preview Deployments**
   - Go to `Settings` → `Branches`
   - Enable "Create preview branches"
   - Configure preview branch naming pattern

### Step 3: Configure GitHub Actions (Optional Enhancement)

If you want additional control, add this to your existing workflow:

```yaml
# Add to .github/workflows/deploy.yml
supabase-deploy:
  name: Deploy to Supabase
  runs-on: ubuntu-latest
  needs: test
  if: github.ref == 'refs/heads/main' || github.ref == 'refs/heads/develop'
  
  steps:
    - name: Checkout code
      uses: actions/checkout@v4
    
    - name: Setup Supabase CLI
      uses: supabase/setup-cli@v1
    
    - name: Deploy to Supabase
      env:
        SUPABASE_ACCESS_TOKEN: ${{ secrets.SUPABASE_ACCESS_TOKEN }}
        SUPABASE_PROJECT_ID: ${{ secrets.SUPABASE_PROJECT_ID }}
      run: |
        supabase db push
        supabase functions deploy --project-ref $SUPABASE_PROJECT_ID
```

## Option 2: GitHub Actions Only

If you prefer not to use the Dashboard integration, here's a complete GitHub Actions workflow:

### Step 1: Create Supabase Workflow

Create `.github/workflows/supabase.yml`:

```yaml
name: Supabase Deploy

on:
  push:
    branches:
      - main
      - develop
  pull_request:
    branches:
      - main

jobs:
  supabase-deploy:
    name: Deploy to Supabase
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Supabase CLI
        uses: supabase/setup-cli@v1
      
      - name: Deploy Database Migrations
        env:
          SUPABASE_ACCESS_TOKEN: ${{ secrets.SUPABASE_ACCESS_TOKEN }}
          SUPABASE_PROJECT_ID: ${{ secrets.SUPABASE_PROJECT_ID }}
        run: |
          supabase db push --project-ref $SUPABASE_PROJECT_ID
      
      - name: Deploy Edge Functions
        env:
          SUPABASE_ACCESS_TOKEN: ${{ secrets.SUPABASE_ACCESS_TOKEN }}
          SUPABASE_PROJECT_ID: ${{ secrets.SUPABASE_PROJECT_ID }}
        run: |
          supabase functions deploy --project-ref $SUPABASE_PROJECT_ID
      
      - name: Seed Database (if needed)
        env:
          SUPABASE_ACCESS_TOKEN: ${{ secrets.SUPABASE_ACCESS_TOKEN }}
          SUPABASE_PROJECT_ID: ${{ secrets.SUPABASE_PROJECT_ID }}
        run: |
          supabase db seed --project-ref $SUPABASE_PROJECT_ID
```

## Required GitHub Secrets

Add these secrets to your GitHub repository:

```
SUPABASE_ACCESS_TOKEN     # From Supabase account settings
SUPABASE_PROJECT_ID       # Your Supabase project ID
```

## Option 3: Manual CLI Commands

For one-time deployments or testing:

```bash
# Install Supabase CLI
npm install -g @supabase/supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref YOUR_PROJECT_REF

# Deploy database
supabase db push

# Deploy functions
supabase functions deploy

# Seed database
supabase db seed
```

## What Gets Deployed

### Database
- **Migrations**: Applied automatically on push
- **Schema changes**: Synced with your local schema
- **Seeds**: Optional data seeding

### Edge Functions
- **Functions**: Deployed from `supabase/functions/`
- **Dependencies**: Automatically installed
- **Environment variables**: Configured per environment

### Studio
- **Database schema**: Updated in real-time
- **Row Level Security**: Applied automatically
- **Extensions**: Managed through migrations

## Branch Strategy

- **main**: Production deployment
- **develop**: Preview deployment
- **feature branches**: Optional preview deployments

## Monitoring

- **Deployment logs**: Available in Supabase Dashboard
- **GitHub Actions**: Detailed logs in Actions tab
- **Function logs**: Available in Functions → Logs

## Troubleshooting

### Common Issues:
1. **Permission denied**: Ensure `SUPABASE_ACCESS_TOKEN` has proper permissions
2. **Migration conflicts**: Check for conflicting migrations
3. **Function deployment**: Verify function syntax and dependencies

### Debug Commands:
```bash
# Check Supabase CLI version
supabase --version

# Test connection
supabase status

# View deployment logs
supabase functions logs
```

## Next Steps

1. Choose your integration method (Dashboard recommended)
2. Follow the setup steps above
3. Test with a small change to verify deployment
4. Configure monitoring and alerts
5. Set up branch protection rules for production

## Support

- [Supabase Documentation](https://supabase.com/docs)
- [GitHub Actions Guide](https://docs.github.com/en/actions)
- [Supabase CLI Reference](https://supabase.com/docs/guides/cli)