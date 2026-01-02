# Architecture Overview

## System Design

This template provides a complete, production-ready architecture for full-stack development:

```
┌─────────────────────────────────────────────────────────────┐
│                        Your Application                      │
│  (Next.js / React / Vue / Svelte - Hot Reload in Docker)   │
│                     http://localhost:3000                    │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│                    Kong API Gateway                          │
│                  http://localhost:8000                       │
│  • CORS handling                                             │
│  • Authentication (key-auth)                                │
│  • Rate limiting (optional)                                 │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│                  PostgreSQL Database                         │
│  • Schema management                                        │
│  • Row Level Security (RLS)                                │
│  • Realtime subscriptions                                  │
│                    localhost:5432                           │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│                 Supabase Studio (Admin)                      │
│              http://localhost:54323                          │
│  • Database browser                                         │
│  • Auth management                                          │
│  • API testing                                              │
└─────────────────────────────────────────────────────────────┘
```

## Docker Compose Services

### 1. **PostgreSQL** (`postgres`)
- **Image**: postgres:15-alpine
- **Purpose**: Data storage and management
- **Port**: 5432
- **Health Check**: `pg_isready`
- **Volume**: `postgres_data` (persistent storage)

### 2. **Kong** (`kong`)
- **Image**: kong:3-alpine
- **Purpose**: API Gateway and authentication
- **Port**: 8000 (API), 8001 (Admin)
- **Config**: `supabase/config/kong.yml`
- **Features**: CORS, Auth, Rate limiting

### 3. **Supabase Studio** (`studio`)
- **Image**: supabase/studio:latest
- **Purpose**: Admin dashboard for database management
- **Port**: 54323
- **Database**: Connects to PostgreSQL

### 4. **Your Application** (`app`)
- **Image**: Custom Node.js build
- **Dockerfile**: `Dockerfile.dev` (development)
- **Port**: 3000
- **Features**: Hot reload, live code mounting
- **Languages**: Next.js, React, Vue, Svelte, or custom Node.js

## Deployment Architecture

### Local Development
```
Developer Laptop
├── Docker Desktop
│   ├── PostgreSQL
│   ├── Kong
│   ├── Supabase Studio
│   └── Your App (Hot Reload)
└── Code Editor (VS Code)
```

### Production (Vercel + Supabase)
```
GitHub Repository
    │
    ├──→ GitHub Actions CI/CD
    │       ├── Test (npm run test)
    │       └── Build (npm run build)
    │
    ├──→ Vercel (Frontend Hosting)
    │       ├── Next.js App
    │       ├── Edge Functions
    │       └── Static Assets
    │
    └──→ Supabase (Backend)
            ├── PostgreSQL
            ├── Auth
            ├── Storage
            └── Realtime
```

## Technology Stack

### Frontend
- **Framework**: Next.js / React / Vue / Svelte
- **Styling**: TailwindCSS (recommended)
- **State**: Supabase client SDK
- **Build**: Vercel Edge Functions

### Backend
- **API Gateway**: Kong
- **Database**: PostgreSQL
- **Auth**: Supabase Auth
- **Storage**: Supabase Storage
- **Edge Functions**: Vercel Edge Runtime

### Infrastructure
- **Local**: Docker & Docker Compose
- **Production**: Vercel + Supabase
- **CI/CD**: GitHub Actions
- **Repository**: GitHub

## Data Flow

### Authentication Flow
```
Client (Browser)
    │
    ├──→ Supabase Auth
    │       ├── Sign Up / Sign In
    │       └── JWT Token
    │
    └──→ App (Authenticated)
            ├── API Requests (with JWT)
            ├── Database Queries
            └── RLS Enforced
```

### API Request Flow
```
Client Request
    │
    ├──→ Kong API Gateway
    │       ├── CORS Check
    │       ├── Auth Validation
    │       └── Rate Limiting
    │
    ├──→ PostgreSQL
    │       ├── Row Level Security
    │       ├── Data Retrieval
    │       └── Realtime Updates
    │
    └──→ Client Response
```

## File Organization

```
project/
├── app/                              # Your application
│   ├── src/
│   │   ├── pages/ or app/           # Routes
│   │   ├── lib/                     # Utilities & configs
│   │   ├── components/              # React components
│   │   └── styles/                  # Styling
│   ├── package.json
│   └── tsconfig.json
│
├── functions/                        # Vercel Edge Functions
│   ├── hello.ts                     # Example function
│   └── [other-functions].ts
│
├── supabase/
│   ├── config/
│   │   └── kong.yml                # API Gateway config
│   ├── migrations/
│   │   ├── 001_initial_schema.sql  # Initial schema
│   │   └── [other-migrations].sql
│   └── functions/                  # Supabase Edge Functions
│       └── hello/
│           └── index.ts
│
├── docs/
│   ├── DEVELOPMENT.md              # Development guide
│   ├── DEPLOYMENT.md               # Deployment guide
│   └── example-api-route.ts        # Code examples
│
├── .github/
│   ├── workflows/
│   │   └── deploy.yml              # CI/CD pipeline
│   └── copilot-instructions.md     # Copilot config
│
├── docker-compose.yml              # Local dev setup
├── Dockerfile                      # Production image
├── Dockerfile.dev                  # Dev image
├── docker-entrypoint.sh            # Entrypoint script
├── setup-new-project.sh            # Setup wizard
├── .env.example                    # Environment template
├── .gitignore                      # Git ignore rules
├── .dockerignore                   # Docker ignore rules
├── QUICK_START.md                  # Quick start guide
├── README.md                       # Main documentation
└── ARCHITECTURE.md                 # This file
```

## Environment Management

### Local Development (`.env.local`)
```
NODE_ENV=development
DB_PASSWORD=generated_secure_password
NEXT_PUBLIC_SUPABASE_URL=http://localhost:8000
NEXT_PUBLIC_SUPABASE_ANON_KEY=local_anon_key
SUPABASE_SERVICE_ROLE_KEY=local_service_role_key
```

### Production (Vercel)
```
NODE_ENV=production
NEXT_PUBLIC_SUPABASE_URL=https://project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=prod_anon_key
SUPABASE_SERVICE_ROLE_KEY=prod_service_role_key
```

## Security Layers

### 1. **Network Security**
- Kong API Gateway validates all requests
- CORS policies enforce origin restrictions
- JWT validation on protected endpoints

### 2. **Database Security**
- Row Level Security (RLS) for data isolation
- Service role key limited to backend use
- Anon key limited to public data

### 3. **Authentication**
- Supabase Auth handles user management
- JWT tokens for API authentication
- Secure password hashing

### 4. **Secrets Management**
- `.env` files never committed
- GitHub Secrets for CI/CD
- Vercel environment variables for production

## Scalability Considerations

### Local Development
- Single machine with Docker
- Suitable for 1-5 developers
- Full stack simulation

### Production
- **Frontend**: Vercel global edge network
- **Backend**: Supabase auto-scaling
- **Database**: PostgreSQL with managed backups
- **Edge Functions**: Distributed globally

### Performance Optimization
- Edge Functions for low latency
- Supabase Realtime for live updates
- Image optimization in CDN
- Database query optimization with indexes

## Backup & Recovery

### Database Backups
```bash
# Backup
docker compose exec postgres pg_dump -U postgres > backup.sql

# Restore
docker compose exec -T postgres psql -U postgres < backup.sql
```

### Production Backups
- Automatic daily backups (Supabase)
- Manual exports via Supabase dashboard
- GitHub repository as version history

## Monitoring & Logging

### Local Development
```bash
docker compose logs -f              # All services
docker compose logs -f app          # App only
docker compose logs -f postgres     # Database only
```

### Production
- **Vercel**: Deployment logs, performance metrics
- **Supabase**: Database metrics, API logs
- **GitHub Actions**: Workflow logs, status checks

## Troubleshooting Architecture Issues

### Service Communication Issues
1. Check network: `docker network ls`
2. Check service health: `docker compose ps`
3. Test connectivity: `docker compose exec app ping postgres`

### Database Issues
1. Verify PostgreSQL: `docker compose exec postgres pg_isready -U postgres`
2. Check volume: `docker volume ls`
3. Examine logs: `docker compose logs postgres`

### API Gateway Issues
1. Test Kong: `curl http://localhost:8001/status`
2. Check config: `docker compose exec kong cat /etc/kong/kong.yml`
3. Review logs: `docker compose logs kong`

## Next Steps

1. **For Development**: See [DEVELOPMENT.md](docs/DEVELOPMENT.md)
2. **For Deployment**: See [DEPLOYMENT.md](docs/DEPLOYMENT.md)
3. **Quick Setup**: See [QUICK_START.md](QUICK_START.md)

---

**Questions?** Check the README.md or review the relevant documentation.
