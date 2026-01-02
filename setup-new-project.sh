#!/bin/bash

# Interactive setup script for creating a new project from this template
# This script helps initialize the template with your project-specific configuration

set -e

echo ""
echo "🚀 Local-First Development Template Setup"
echo "=========================================="
echo ""

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to prompt user
prompt() {
    local prompt="$1"
    local default="$2"
    local response
    read -p "$(echo -e ${BLUE}${prompt}${NC})" response
    echo "${response:-$default}"
}

# Check prerequisites
check_prerequisites() {
    echo "📋 Checking prerequisites..."
    
    local missing=0
    
    if ! command -v docker &> /dev/null; then
        echo "❌ Docker is not installed"
        missing=1
    else
        echo "✅ Docker found"
    fi
    
    if ! command -v docker-compose &> /dev/null && ! command -v docker compose &> /dev/null; then
        echo "❌ Docker Compose is not installed"
        missing=1
    else
        echo "✅ Docker Compose found"
    fi
    
    if ! command -v git &> /dev/null; then
        echo "❌ Git is not installed"
        missing=1
    else
        echo "✅ Git found"
    fi
    
    if [ $missing -eq 1 ]; then
        echo ""
        echo "❌ Please install missing prerequisites"
        exit 1
    fi
    
    echo "✅ All prerequisites met"
    echo ""
}

# Generate secure secrets
generate_secrets() {
    echo "🔐 Generating secure secrets..."
    
    # Generate a random password (16 characters)
    DB_PASSWORD=$(openssl rand -base64 12)
    
    # JWT tokens (using placeholder values - should be generated in production)
    # These are safe defaults for local development
    ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4YW1wbGUiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNDk5NTAwMCwiZXhwIjoxNjI1MDgxNDAwfQ.CRXP3ySUJUgq9d3-o_Up-XENzFMwIsCaL0Xc_E_0Zgs"
    SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4YW1wbGUiLCJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjI0OTk1MDAwLCJleHAiOjE2MjUwODE0MDB9.ducMBoQFc4Sm1GLaDgnPm5pWeb4srw5Js7A7dqc_vQM"
    
    echo "✅ Secrets generated"
}

# Initialize git repository
setup_git() {
    echo ""
    echo "📦 Setting up Git repository..."
    
    if git rev-parse --git-dir > /dev/null 2>&1; then
        echo "⚠️  Git repository already exists"
        return
    fi
    
    git init
    git config user.email "${GIT_EMAIL:-noreply@example.com}"
    git config user.name "${GIT_NAME:-Your Name}"
    
    echo "✅ Git repository initialized"
}

# Prompt for project details
setup_project_details() {
    echo ""
    echo "📝 Project Configuration"
    echo "======================="
    echo ""
    
    PROJECT_NAME=$(prompt "Project name [my-project]: " "my-project")
    PROJECT_DESCRIPTION=$(prompt "Project description [A full-stack application]: " "A full-stack application")
    
    echo ""
    echo "🎨 Framework Selection"
    echo "====================="
    echo "1) Next.js (recommended)"
    echo "2) React + Vite"
    echo "3) Vue.js"
    echo "4) Svelte"
    echo "5) Other (manual setup)"
    echo ""
    
    FRAMEWORK=$(prompt "Select framework [1-5] [1]: " "1")
    
    case $FRAMEWORK in
        1) FRAMEWORK_NAME="Next.js" ;;
        2) FRAMEWORK_NAME="React + Vite" ;;
        3) FRAMEWORK_NAME="Vue.js" ;;
        4) FRAMEWORK_NAME="Svelte" ;;
        5) FRAMEWORK_NAME="Other" ;;
        *) FRAMEWORK_NAME="Next.js" ;;
    esac
}

# Create .env.local from .env.example
setup_env_file() {
    echo ""
    echo "🔧 Creating environment file..."
    
    if [ ! -f .env.example ]; then
        echo "⚠️  .env.example not found"
        return
    fi
    
    # Create .env.local with generated values
    cp .env.example .env.local
    
    # Update with generated secrets (platform-specific sed)
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s|your_secure_password_here|${DB_PASSWORD}|g" .env.local
        sed -i '' "s|postgresql://postgres:your_secure_password_here|postgresql://postgres:${DB_PASSWORD}|g" .env.local
    else
        # Linux
        sed -i "s|your_secure_password_here|${DB_PASSWORD}|g" .env.local
        sed -i "s|postgresql://postgres:your_secure_password_here|postgresql://postgres:${DB_PASSWORD}|g" .env.local
    fi
    
    echo "✅ Environment file created (.env.local)"
    echo "⚠️  IMPORTANT: Add .env.local to .gitignore (already done)"
}

# Create directories
setup_directories() {
    echo ""
    echo "📁 Creating directory structure..."

    mkdir -p supabase/migrations
    mkdir -p supabase/functions
    mkdir -p functions
    mkdir -p app

    touch supabase/migrations/.gitkeep
    touch supabase/functions/.gitkeep
    touch functions/.gitkeep
    touch app/.gitkeep

    echo "✅ Directory structure created"
    echo "⚠️  Note: Remove app/.gitkeep before running create-next-app or other framework setup"
}

# Copy framework-specific files
copy_framework_files() {
    echo ""
    echo "📋 Copying framework-specific files..."

    case $FRAMEWORK_NAME in
        "Next.js")
            if [ -d "app-template/nextjs" ]; then
                echo "  Copying Next.js + Supabase utilities..."
                mkdir -p app/utils app/app/api app/app/examples

                # Copy Supabase utilities
                if [ -d "app-template/nextjs/utils/supabase" ]; then
                    cp -r app-template/nextjs/utils/supabase app/utils/ 2>/dev/null || true
                fi

                # Copy middleware
                if [ -f "app-template/nextjs/middleware.ts" ]; then
                    cp app-template/nextjs/middleware.ts app/ 2>/dev/null || true
                fi

                # Copy health check endpoint
                if [ -d "app-template/nextjs/api/health" ]; then
                    cp -r app-template/nextjs/api/health app/app/api/ 2>/dev/null || true
                fi

                # Copy example page
                if [ -d "app-template/nextjs/examples/supabase-todos" ]; then
                    cp -r app-template/nextjs/examples/supabase-todos app/app/examples/ 2>/dev/null || true
                fi

                echo "  ✅ Next.js utilities copied to app/"
            else
                echo "  ℹ️  app-template/nextjs not found, skipping utility files"
            fi
            ;;
        *)
            echo "  ℹ️  Manual Supabase integration needed for ${FRAMEWORK_NAME}"
            echo "  See docs/DEVELOPMENT.md for framework-specific setup"
            ;;
    esac
}

# Display next steps
display_next_steps() {
    echo ""
    echo "✅ Setup Complete!"
    echo ""
    echo "📋 Next Steps:"
    echo "=============="
    echo ""
    echo "1️⃣  Create your application:"
    echo ""
    
    case $FRAMEWORK_NAME in
        "Next.js")
            echo "    cd app"
            echo "    rm .gitkeep  # Remove placeholder file"
            echo "    npx create-next-app@latest . --typescript --tailwind --app"
            echo "    npm install @supabase/ssr @supabase/supabase-js  # Install Supabase dependencies"
            echo "    cd .."
            echo ""
            echo "    Note: Supabase utilities, middleware, and example page have been"
            echo "    pre-installed in app/utils, app/middleware.ts, and app/app/examples"
            ;;
        "React + Vite")
            echo "    cd app"
            echo "    npm create vite@latest . -- --template react-ts"
            echo "    cd .."
            ;;
        "Vue.js")
            echo "    cd app"
            echo "    npm create vue@latest"
            echo "    cd .."
            ;;
        "Svelte")
            echo "    cd app"
            echo "    npm create vite@latest . -- --template svelte"
            echo "    cd .."
            ;;
        *)
            echo "    # Copy your application to the ./app directory"
            echo "    cp -r ~/my-existing-app/* app/"
            ;;
    esac
    
    echo ""
    echo "2️⃣  Start development environment:"
    echo ""
    echo "    docker compose up -d"
    echo ""
    echo "3️⃣  Access your services:"
    echo ""
    echo "    • Application:     http://localhost:3000"
    echo "    • Supabase Studio: http://localhost:54323"
    echo "    • Supabase API:    http://localhost:8000"
    echo "    • PostgreSQL:      localhost:5432"
    echo ""
    echo "4️⃣  View logs:"
    echo ""
    echo "    docker compose logs -f"
    echo ""
    echo "5️⃣  Stop services:"
    echo ""
    echo "    docker compose down"
    echo ""
    echo "📚 For more information, see README.md"
    echo ""
    echo "🎉 Happy coding!"
    echo ""
}

# Main execution
main() {
    # Make docker-entrypoint.sh executable
    if [ -f "docker-entrypoint.sh" ]; then
        chmod +x docker-entrypoint.sh
    fi

    check_prerequisites
    generate_secrets
    setup_git
    setup_project_details
    setup_env_file
    setup_directories
    copy_framework_files
    display_next_steps
    
    # Save configuration for reference
    cat > .project-config.json << EOF
{
  "projectName": "${PROJECT_NAME}",
  "projectDescription": "${PROJECT_DESCRIPTION}",
  "framework": "${FRAMEWORK_NAME}",
  "createdAt": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF
}

# Run main function
main "$@"
