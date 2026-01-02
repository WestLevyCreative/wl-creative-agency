<!-- Copilot workspace instructions for the Local-First Development Template -->

# Local-First Development Template - Copilot Instructions

This workspace is a complete, production-ready template for building full-stack applications with:
- Local Docker development environment
- Supabase (PostgreSQL, Auth, Storage, Realtime)
- Framework-agnostic support (Next.js, React, Vue, Svelte)
- One-click deployment to Vercel
- GitHub Actions CI/CD pipeline
- Edge Functions ready

## Key Features

- **Docker Compose**: Complete local development stack with hot-reload
- **Supabase Stack**: PostgreSQL, Studio admin, REST API, Auth system
- **Framework Support**: Choose your framework - we handle the infrastructure
- **Environment Parity**: Same setup locally and in production
- **Security First**: Separate credentials for local/production, secrets management
- **CI/CD Ready**: GitHub Actions workflow for automated testing and deployment

## Workspace Structure

```
.
├── app/                          # Your application (Next.js, React, Vue, Svelte, etc.)
├── functions/                    # Vercel Edge Functions
├── supabase/                     # Supabase configuration and migrations
│   ├── config/kong.yml          # API Gateway configuration
│   ├── migrations/              # Database migration files
│   └── functions/               # Supabase Edge Functions
├── .github/workflows/           # GitHub Actions CI/CD
├── docker-compose.yml           # Local development orchestration
├── Dockerfile                   # Production build
├── Dockerfile.dev              # Development with hot reload
├── setup-new-project.sh        # Interactive setup script
├── .env.example                # Environment template
└── README.md                   # Full documentation
```

## Development Workflow

### 1. Initial Setup
```bash
chmod +x setup-new-project.sh
./setup-new-project.sh
```

### 2. Create Your Application
Choose one framework and run the appropriate command in the `app/` directory:
- **Next.js**: `npx create-next-app@latest . --typescript --tailwind --app`
- **React + Vite**: `npm create vite@latest . -- --template react-ts`
- **Vue**: `npm create vue@latest`
- **Svelte**: `npm create vite@latest . -- --template svelte`

### 3. Start Development
```bash
docker compose up -d
```

Access:
- App: http://localhost:3000
- Supabase Studio: http://localhost:54323
- API: http://localhost:8000
- PostgreSQL: localhost:5432

## Common Tasks

### View logs
```bash
docker compose logs -f app
docker compose logs -f postgres
```

### Access database
```bash
docker compose exec postgres psql -U postgres
```

### Restart services
```bash
docker compose restart app
docker compose up -d --build
```

### Stop everything
```bash
docker compose down      # Keep data
docker compose down -v   # Delete all data
```

## Deployment Setup

### GitHub Secrets Required
- `VERCEL_TOKEN` - From vercel.com/account/tokens
- `VERCEL_ORG_ID` - From .vercel/project.json
- `VERCEL_PROJECT_ID` - From .vercel/project.json
- `NEXT_PUBLIC_SUPABASE_URL` - From Supabase project
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - From Supabase project
- `SUPABASE_SERVICE_ROLE_KEY` - From Supabase project
- `SUPABASE_DB_PASSWORD` - Your database password

### Deployment Flow
1. Push to `main` → Production deployment
2. Push to `develop` → Preview deployment
3. PR → Automatic preview URL in comments

## Key Files to Understand

- **docker-compose.yml**: Orchestrates all services (PostgreSQL, Supabase, App)
- **Dockerfile.dev**: Development image with hot reload
- **Dockerfile**: Production multi-stage build
- **setup-new-project.sh**: Interactive template setup
- **.github/workflows/deploy.yml**: Automated testing and deployment

## Environment Variables

### Local Development (.env.local)
- `DB_PASSWORD`: PostgreSQL password (auto-generated)
- `NEXT_PUBLIC_SUPABASE_URL`: Local Supabase URL
- `ANON_KEY`: Public Supabase key
- `SERVICE_ROLE_KEY`: Admin Supabase key

### Production (Vercel Dashboard)
- Same variables but with production Supabase project
- Different keys and URLs for security

## Security Notes

1. **Never commit `.env` files** - They're in `.gitignore`
2. **Use GitHub Secrets** for CI/CD credentials
3. **Rotate secrets regularly** in production
4. **Enable Row Level Security** in Supabase for production
5. **Different credentials** for local and production environments

## Troubleshooting

### Port conflicts
```bash
lsof -i :3000
kill -9 <PID>
```

### Database issues
```bash
docker compose restart postgres
docker compose exec postgres pg_isready -U postgres
```

### Hot reload not working
```bash
docker compose down
docker compose up -d
```

### Build failures
1. Check GitHub Actions logs
2. Verify all secrets are set
3. Ensure app builds locally: `cd app && npm run build`

## Resources

- [Docker Documentation](https://docs.docker.com)
- [Supabase Docs](https://supabase.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Next.js Documentation](https://nextjs.org/docs)

## Tips

- Use feature branches for development
- Test locally before pushing
- Keep local and production as similar as possible
- Regular database backups
- Monitor Vercel and Supabase dashboards
- Use GitHub Actions logs for debugging deployments
