#!/bin/bash

echo "🔍 Checking Pipeline Configuration for wl-creative-agency"
echo "========================================================"

# Check if remote repository is configured correctly
echo "1. Checking remote repository..."
REMOTE_URL=$(git remote get-url origin 2>/dev/null)
if [[ "$REMOTE_URL" == *"WestLevyCreative/wl-creative-agency.git"* ]]; then
    echo "✅ Remote repository correctly configured: $REMOTE_URL"
else
    echo "❌ Remote repository not configured or incorrect"
    echo "   Expected: https://github.com/WestLevyCreative/wl-creative-agency.git"
    echo "   Found: $REMOTE_URL"
fi

# Check if GitHub repository exists
echo ""
echo "2. Checking GitHub repository..."
if gh repo view WestLevyCreative/wl-creative-agency >/dev/null 2>&1; then
    echo "✅ GitHub repository exists: WestLevyCreative/wl-creative-agency"
else
    echo "❌ GitHub repository not found or not accessible"
fi

# Check if .vercel directory exists
echo ""
echo "3. Checking Vercel configuration..."
if [ -d ".vercel" ]; then
    echo "✅ .vercel directory exists"
    if [ -f ".vercel/project.json" ]; then
        echo "✅ Vercel project.json exists"
    else
        echo "⚠️  Vercel project.json not found"
    fi
else
    echo "❌ .vercel directory not found"
fi

# Check if GitHub Actions workflow exists
echo ""
echo "4. Checking GitHub Actions workflow..."
if [ -f ".github/workflows/deploy.yml" ]; then
    echo "✅ GitHub Actions workflow exists"
else
    echo "❌ GitHub Actions workflow not found"
fi

# Check if app directory exists
echo ""
echo "5. Checking application structure..."
if [ -d "app" ] && [ -f "app/package.json" ]; then
    echo "✅ Application directory structure exists"
    APP_NAME=$(jq -r '.name' app/package.json 2>/dev/null)
    echo "   App name: $APP_NAME"
else
    echo "❌ Application directory structure not found"
fi

# Check GitHub authentication
echo ""
echo "6. Checking GitHub authentication..."
if gh auth status >/dev/null 2>&1; then
    echo "✅ GitHub CLI authenticated"
    CURRENT_USER=$(gh api user | jq -r '.login')
    echo "   Current user: $CURRENT_USER"
else
    echo "❌ GitHub CLI not authenticated"
fi

echo ""
echo "📋 Summary"
echo "=========="
echo "Repository: WestLevyCreative/wl-creative-agency"
echo "Branches: main (production), develop (preview)"
echo "Workflow: .github/workflows/deploy.yml"
echo "App Location: app/"
echo ""
echo "⚠️  Next Steps:"
echo "   1. Add required GitHub secrets (see SETUP_PIPELINE.md)"
echo "   2. Create Vercel project and get VERCEL_* secrets"
echo "   3. Create Supabase project and get SUPABASE_* secrets"
echo "   4. Push to main branch to trigger first deployment"