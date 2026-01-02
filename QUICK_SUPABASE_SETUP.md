# Quick Supabase Integration Setup

## Step 1: Dashboard Integration (Recommended - 5 minutes)

### Connect GitHub to Supabase
1. **Go to Supabase Dashboard**
   - Visit [supabase.com](https://supabase.com)
   - Sign in and select your project

2. **Connect GitHub**
   - Go to `Settings` → `Integrations`
   - Click "Connect" on GitHub integration
   - Authorize Supabase access
   - Select repository: `WestLevyCreative/wl-creative-agency`

3. **Configure Automatic Deployments**
   - **Database**: Go to `Database` → `Migrations` → Enable "Auto-migrate on push"
   - **Functions**: Go to `Functions` → `Settings` → Enable "Auto-deploy on push"
   - **Branches**: Configure `main` (production) and `develop` (preview)

## Step 2: GitHub Secrets (2 minutes)

Add these secrets to your GitHub repository:
1. Go to: `https://github.com/WestLevyCreative/wl-creative-agency/settings/secrets/actions`
2. Click "New repository secret" for each:

```
SUPABASE_ACCESS_TOKEN     # From Supabase account → Settings → API
SUPABASE_PROJECT_ID       # From your Supabase project URL or Settings
```

## Step 3: Test the Integration (3 minutes)

1. **Make a small database change**:
   ```bash
   # Create a simple migration
   npx supabase migration new add_test_table
   ```

2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Test Supabase integration"
   git push origin main
   ```

3. **Check deployment**:
   - Go to GitHub Actions tab
   - Verify "Supabase Deploy" workflow runs successfully
   - Check Supabase Dashboard for new migration

## Alternative: GitHub Actions Only

If you prefer not to use Dashboard integration, I've already created the workflow file at `.github/workflows/supabase.yml` with these features:

- **Automatic database migrations** on push to main/develop
- **Edge Functions deployment** 
- **Database seeding** (optional)
- **Pull request previews**

## What Gets Deployed

### Database Migrations
- Schema changes applied automatically
- Row Level Security policies updated
- Extensions installed/updated

### Edge Functions
- Functions from `supabase/functions/` deployed
- Dependencies automatically installed
- Environment variables configured

### Studio Updates
- Database schema visible in real-time
- New tables and columns appear immediately
- RLS policies applied automatically

## Monitoring

- **GitHub Actions**: Check deployment status in Actions tab
- **Supabase Dashboard**: View migration logs and function logs
- **Real-time updates**: Changes appear immediately in Studio

## Troubleshooting

### Common Issues:
1. **Permission denied**: Check `SUPABASE_ACCESS_TOKEN` has proper permissions
2. **Migration conflicts**: Ensure no conflicting migrations exist
3. **Function errors**: Check function syntax and dependencies

### Quick Fixes:
```bash
# Check Supabase CLI
supabase --version

# Test connection
supabase status

# View logs
supabase functions logs
```

## Next Steps

1. ✅ **Complete setup** using steps above
2. 🧪 **Test with small changes** first
3. 📊 **Monitor deployments** in GitHub Actions
4. 🔧 **Configure alerts** for failed deployments
5. 📚 **Add team members** to Supabase project

## Support

- [Supabase Documentation](https://supabase.com/docs)
- [GitHub Actions Guide](https://docs.github.com/en/actions)
- [Supabase CLI Reference](https://supabase.com/docs/guides/cli)

---

**Time Estimate**: 10 minutes total
**Difficulty**: Easy
**Recommended**: Dashboard integration for automatic deployments