#!/bin/bash

echo "🚀 Setting up Supabase GitHub Integration"
echo "=========================================="

# Check if Supabase CLI is installed
echo "1. Checking Supabase CLI..."
if command -v supabase &> /dev/null; then
    echo "✅ Supabase CLI is installed"
    SUPABASE_VERSION=$(supabase --version)
    echo "   Version: $SUPABASE_VERSION"
else
    echo "❌ Supabase CLI not found"
    echo "   Installing Supabase CLI..."
    npm install -g @supabase/supabase
    if [ $? -eq 0 ]; then
        echo "✅ Supabase CLI installed successfully"
    else
        echo "❌ Failed to install Supabase CLI"
        exit 1
    fi
fi

# Check if logged in to Supabase
echo ""
echo "2. Checking Supabase authentication..."
if supabase status &> /dev/null; then
    echo "✅ Already authenticated to Supabase"
else
    echo "⚠️  Not authenticated to Supabase"
    echo "   Please run: supabase login"
    echo "   Then come back and run this script again"
    exit 1
fi

# Check if project is linked
echo ""
echo "3. Checking project link..."
if [ -f "supabase/.supabase" ]; then
    echo "✅ Project already linked"
else
    echo "⚠️  Project not linked"
    echo "   You need to link your Supabase project:"
    echo "   supabase link --project-ref YOUR_PROJECT_REF"
    echo "   (Get PROJECT_REF from your Supabase dashboard)"
fi

# Create GitHub Actions workflow for Supabase
echo ""
echo "4. Creating Supabase GitHub Actions workflow..."
cat > .github/workflows/supabase.yml << 'EOF'
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
EOF

if [ $? -eq 0 ]; then
    echo "✅ Created .github/workflows/supabase.yml"
else
    echo "❌ Failed to create Supabase workflow"
    exit 1
fi

# Create verification script
echo ""
echo "5. Creating verification script..."
cat > verify-supabase.sh << 'EOF'
#!/bin/bash

echo "🔍 Verifying Supabase Integration"
echo "================================="

# Check Supabase CLI
echo "1. Supabase CLI:"
if command -v supabase &> /dev/null; then
    echo "✅ Installed: $(supabase --version)"
else
    echo "❌ Not installed"
fi

# Check authentication
echo ""
echo "2. Authentication:"
if supabase status &> /dev/null; then
    echo "✅ Authenticated"
else
    echo "❌ Not authenticated"
fi

# Check project link
echo ""
echo "3. Project Link:"
if [ -f "supabase/.supabase" ]; then
    echo "✅ Project linked"
else
    echo "❌ Project not linked"
fi

# Check workflow
echo ""
echo "4. GitHub Actions:"
if [ -f ".github/workflows/supabase.yml" ]; then
    echo "✅ Workflow created"
else
    echo "❌ Workflow not found"
fi

# Check GitHub secrets
echo ""
echo "5. GitHub Secrets:"
echo "   Required secrets:"
echo "   - SUPABASE_ACCESS_TOKEN"
echo "   - SUPABASE_PROJECT_ID"
echo "   Check: https://github.com/WestLevyCreative/wl-creative-agency/settings/secrets/actions"

echo ""
echo "📋 Next Steps:"
echo "1. Add required GitHub secrets"
echo "2. Link your Supabase project: supabase link --project-ref YOUR_PROJECT_REF"
echo "3. Test with a small database change"
echo "4. Push to main branch to trigger deployment"
EOF

chmod +x verify-supabase.sh
echo "✅ Created verify-supabase.sh"

echo ""
echo "🎉 Supabase Integration Setup Complete!"
echo "======================================="
echo ""
echo "📋 Summary:"
echo "   ✅ Supabase CLI: Installed"
echo "   ✅ GitHub Actions: Created"
echo "   ✅ Verification script: Created"
echo ""
echo "⚠️  Next Steps:"
echo "   1. Add GitHub secrets (SUPABASE_ACCESS_TOKEN, SUPABASE_PROJECT_ID)"
echo "   2. Link your Supabase project: supabase link --project-ref YOUR_PROJECT_REF"
echo "   3. Run: ./verify-supabase.sh"
echo "   4. Test with a small change"
echo ""
echo "📚 For Dashboard integration (recommended):"
echo "   Visit: https://supabase.com/dashboard"
echo "   Go to Settings → Integrations → GitHub"
echo "   Connect your repository: WestLevyCreative/wl-creative-agency"