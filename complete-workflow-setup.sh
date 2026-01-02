#!/bin/bash

echo "🚀 Complete GitHub Actions Workflow Setup"
echo "========================================="

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Not in a git repository"
    exit 1
fi

echo "1. Checking GitHub Actions workflow files..."

# Check if workflow files exist
if [ -f ".github/workflows/deploy.yml" ]; then
    echo "✅ Main deployment workflow exists"
else
    echo "❌ Main deployment workflow not found"
fi

if [ -f ".github/workflows/supabase.yml" ]; then
    echo "✅ Supabase deployment workflow exists"
else
    echo "❌ Supabase deployment workflow not found"
fi

echo ""
echo "2. Checking workflow file structure..."

# Check .github directory
if [ -d ".github" ]; then
    echo "✅ .github directory exists"
    if [ -d ".github/workflows" ]; then
        echo "✅ .github/workflows directory exists"
        WORKFLOW_COUNT=$(find .github/workflows -name "*.yml" -o -name "*.yaml" | wc -l)
        echo "   Found $WORKFLOW_COUNT workflow files"
    else
        echo "❌ .github/workflows directory not found"
    fi
else
    echo "❌ .github directory not found"
fi

echo ""
echo "3. Validating workflow syntax..."

# Check YAML syntax for workflow files
for file in .github/workflows/*.yml .github/workflows/*.yaml; do
    if [ -f "$file" ]; then
        echo "   Checking $file..."
        if command -v yamllint &> /dev/null; then
            if yamllint "$file" &> /dev/null; then
                echo "   ✅ YAML syntax valid"
            else
                echo "   ⚠️  YAML syntax issues found"
                yamllint "$file"
            fi
        else
            echo "   ⚠️  yamllint not installed, skipping syntax check"
        fi
    fi
done

echo ""
echo "4. Checking required secrets..."

# List required secrets for each workflow
echo "Required secrets for .github/workflows/deploy.yml:"
echo "   - VERCEL_TOKEN"
echo "   - VERCEL_ORG_ID" 
echo "   - VERCEL_PROJECT_ID"
echo "   - NEXT_PUBLIC_SUPABASE_URL"
echo "   - NEXT_PUBLIC_SUPABASE_ANON_KEY"
echo "   - SUPABASE_SERVICE_ROLE_KEY"
echo "   - SUPABASE_ACCESS_TOKEN"
echo "   - SUPABASE_PROJECT_ID"
echo "   - SUPABASE_DB_PASSWORD"

echo ""
echo "Required secrets for .github/workflows/supabase.yml:"
echo "   - SUPABASE_ACCESS_TOKEN"
echo "   - SUPABASE_PROJECT_ID"

echo ""
echo "5. Creating GitHub secrets setup guide..."

cat > GITHUB_SECRETS_SETUP.md << 'EOF'
# GitHub Secrets Setup Guide

## Required Secrets for wl-creative-agency

### Vercel Deployment Secrets
Add these to: `https://github.com/WestLevyCreative/wl-creative-agency/settings/secrets/actions`

1. **VERCEL_TOKEN**
   - Get from: [vercel.com/settings/tokens](https://vercel.com/settings/tokens)
   - Purpose: Deploy to Vercel

2. **VERCEL_ORG_ID**
   - Get from: After connecting to Vercel project (check .vercel/project.json)
   - Purpose: Identify Vercel organization

3. **VERCEL_PROJECT_ID**
   - Get from: After connecting to Vercel project (check .vercel/project.json)
   - Purpose: Identify Vercel project

### Supabase Database Secrets
Add these to: `https://github.com/WestLevyCreative/wl-creative-agency/settings/secrets/actions`

4. **NEXT_PUBLIC_SUPABASE_URL**
   - Get from: Supabase Dashboard → Settings → API
   - Purpose: Frontend API connection

5. **NEXT_PUBLIC_SUPABASE_ANON_KEY**
   - Get from: Supabase Dashboard → Settings → API
   - Purpose: Anonymous frontend access

6. **SUPABASE_SERVICE_ROLE_KEY**
   - Get from: Supabase Dashboard → Settings → API (Service Role)
   - Purpose: Admin database access

7. **SUPABASE_ACCESS_TOKEN**
   - Get from: Supabase Dashboard → Account Settings → API
   - Purpose: CLI authentication

8. **SUPABASE_PROJECT_ID**
   - Get from: Supabase Dashboard → Settings → General
   - Purpose: Identify Supabase project

9. **SUPABASE_DB_PASSWORD**
   - Get from: Supabase Dashboard → Database → Connection String
   - Purpose: Database connection

## Adding Secrets

1. Go to your repository: https://github.com/WestLevyCreative/wl-creative-agency
2. Click "Settings" tab
3. Click "Secrets and variables" → "Actions"
4. Click "New repository secret"
5. Enter name and value for each secret
6. Click "Add secret"

## Verification

After adding all secrets, test your workflow:
```bash
git add .
git commit -m "Setup complete with all secrets"
git push origin main
```

Check GitHub Actions tab to verify workflows run successfully.
EOF

echo "✅ Created GITHUB_SECRETS_SETUP.md"

echo ""
echo "6. Creating workflow verification script..."

cat > verify-workflow.sh << 'EOF'
#!/bin/bash

echo "🔍 Verifying GitHub Actions Workflow Setup"
echo "=========================================="

# Check if workflow files exist
echo "1. Workflow Files:"
if [ -f ".github/workflows/deploy.yml" ]; then
    echo "   ✅ deploy.yml exists"
else
    echo "   ❌ deploy.yml missing"
fi

if [ -f ".github/workflows/supabase.yml" ]; then
    echo "   ✅ supabase.yml exists"
else
    echo "   ❌ supabase.yml missing"
fi

# Check workflow syntax
echo ""
echo "2. Workflow Syntax:"
for file in .github/workflows/*.yml .github/workflows/*.yaml; do
    if [ -f "$file" ]; then
        echo "   Checking $file..."
        if command -v yamllint &> /dev/null; then
            if yamllint "$file" &> /dev/null; then
                echo "   ✅ Valid YAML"
            else
                echo "   ❌ Invalid YAML"
            fi
        else
            echo "   ⚠️  yamllint not available"
        fi
    fi
done

# Check if repository is connected to GitHub
echo ""
echo "3. Repository Status:"
if git remote -v | grep -q "origin.*github.com"; then
    echo "   ✅ Connected to GitHub"
    REMOTE_URL=$(git remote get-url origin)
    echo "   URL: $REMOTE_URL"
else
    echo "   ❌ Not connected to GitHub"
fi

# Check if we can access GitHub API
echo ""
echo "4. GitHub Access:"
if command -v gh &> /dev/null; then
    if gh auth status &> /dev/null; then
        echo "   ✅ GitHub CLI authenticated"
        CURRENT_REPO=$(gh repo view --json nameWithOwner 2>/dev/null | jq -r '.nameWithOwner' 2>/dev/null)
        if [ "$CURRENT_REPO" == "WestLevyCreative/wl-creative-agency" ]; then
            echo "   ✅ Connected to correct repository"
        else
            echo "   ⚠️  Connected to: $CURRENT_REPO"
        fi
    else
        echo "   ❌ GitHub CLI not authenticated"
    fi
else
    echo "   ⚠️  GitHub CLI not installed"
fi

echo ""
echo "📋 Next Steps:"
echo "1. Add all required secrets (see GITHUB_SECRETS_SETUP.md)"
echo "2. Commit and push workflow files"
echo "3. Trigger first deployment"
echo "4. Monitor GitHub Actions tab for results"
EOF

chmod +x verify-workflow.sh
echo "✅ Created verify-workflow.sh"

echo ""
echo "🎉 Workflow Setup Complete!"
echo "=========================="
echo ""
echo "📋 Summary:"
echo "   ✅ Workflow files created and staged"
echo "   ✅ Setup guides generated"
echo "   ✅ Verification script created"
echo ""
echo "⚠️  Next Steps:"
echo "   1. Add required GitHub secrets (see GITHUB_SECRETS_SETUP.md)"
echo "   2. Run: ./verify-workflow.sh"
echo "   3. Commit and push: git commit -m 'Setup workflows' && git push"
echo "   4. Monitor GitHub Actions for deployment"
echo ""
echo "📚 Documentation:"
echo "   - GITHUB_SECRETS_SETUP.md: How to add secrets"
echo "   - verify-workflow.sh: Check setup status"
echo "   - QUICK_SUPABASE_SETUP.md: Supabase integration"
echo "   - SETUP_PIPELINE.md: Complete pipeline setup"