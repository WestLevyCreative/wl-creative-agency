# Pipeline Setup for wl-creative-agency

This guide will help you set up the complete deployment pipeline for the wl-creative-agency repository.

## 1. Repository Setup

✅ **Remote Repository**: Already configured
- Remote: `https://github.com/WestLevyCreative/wl-creative-agency.git`
- Branches: `main` (production), `develop` (preview)

## 2. GitHub Secrets Configuration

You need to add the following secrets to your GitHub repository:

### Vercel Deployment Secrets
1. Go to [vercel.com](https://vercel.com) and create a new project
2. Connect it to your `wl-creative-agency` repository
3. Get the following values from Vercel dashboard:
   - **VERCEL_TOKEN**: From `Settings > Tokens`
   - **VERCEL_ORG_ID**: From `.vercel/project.json` after connecting
   - **VERCEL_PROJECT_ID**: From `.vercel/project.json` after connecting

### Supabase Database Secrets
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Get the following values:
   - **NEXT_PUBLIC_SUPABASE_URL**: From `Settings > API`
   - **NEXT_PUBLIC_SUPABASE_ANON_KEY**: From `Settings > API`
   - **SUPABASE_SERVICE_ROLE_KEY**: From `Settings > API` (Service Role)
   - **SUPABASE_ACCESS_TOKEN**: From your Supabase account settings
   - **SUPABASE_PROJECT_ID**: Your project ID
   - **SUPABASE_DB_PASSWORD**: Your database password

### Adding Secrets to GitHub
1. Go to your repository: `https://github.com/WestLevyCreative/wl-creative-agency`
2. Navigate to `Settings > Secrets and variables > Actions`
3. Click `New repository secret` and add each secret

## 3. Required Secrets List

```
VERCEL_TOKEN              # Vercel deployment token
VERCEL_ORG_ID             # Vercel organization ID
VERCEL_PROJECT_ID         # Vercel project ID
NEXT_PUBLIC_SUPABASE_URL  # Supabase API URL
NEXT_PUBLIC_SUPABASE_ANON_KEY  # Supabase anonymous key
SUPABASE_SERVICE_ROLE_KEY # Supabase service role key
SUPABASE_ACCESS_TOKEN     # Supabase CLI access token
SUPABASE_PROJECT_ID       # Supabase project ID
SUPABASE_DB_PASSWORD      # Supabase database password
```

## 4. Initial Deployment

1. **First Push to Main**:
   ```bash
   git add .
   git commit -m "Initial setup with deployment pipeline"
   git push -u origin main
   ```

2. **GitHub Actions will automatically**:
   - Run tests and build
   - Deploy to Vercel (production)
   - Run database migrations (if needed)

3. **For Preview Deployments**:
   ```bash
   git checkout -b develop
   git push -u origin develop
   ```

## 5. Environment Variables

The pipeline uses these environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_DB_PASSWORD`

## 6. Troubleshooting

### Common Issues:
- **Build Failures**: Check that all required secrets are set
- **Vercel Deployment**: Ensure VERCEL_TOKEN has proper permissions
- **Database Migrations**: Verify SUPABASE_ACCESS_TOKEN is valid
- **Supabase Connection**: Check that Supabase project is properly configured

### Debug Steps:
1. Check GitHub Actions logs in repository
2. Verify Vercel project settings
3. Test Supabase connection locally
4. Ensure all dependencies are installed

## 7. Next Steps

After setup:
1. Configure your domain in Vercel
2. Set up SSL certificates
3. Configure custom environment variables
4. Set up monitoring and alerts
5. Create development workflow documentation