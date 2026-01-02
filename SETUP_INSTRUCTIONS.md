# Project Setup Instructions

Your project has been created from the Local-First Development Template.

## Quick Start (5 minutes)

### 1. Run Setup Wizard
```bash
./setup-new-project.sh
```

This will:
- Generate secure credentials
- Initialize Git repository
- Create `.env.local`
- Set up directory structure

### 2. Create Your Application

**Next.js (recommended):**
```bash
cd app
npx create-next-app@latest . --typescript --tailwind --app
cd ..
```

**React + Vite:**
```bash
cd app
npm create vite@latest . -- --template react-ts
cd ..
```

**Vue:**
```bash
cd app
npm create vue@latest
cd ..
```

### 3. Start Development
```bash
docker compose up -d
open http://localhost:3000
```

## Documentation

- **[START_HERE.md](START_HERE.md)** - Overview & quick reference
- **[QUICK_START.md](QUICK_START.md)** - 5-minute setup guide
- **[README.md](README.md)** - Complete documentation
- **[docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)** - Development guide
- **[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Deployment guide
- **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)** - System design

## Common Commands

```bash
# Start services
docker compose up -d

# View logs
docker compose logs -f

# Stop services
docker compose down

# Full reset (delete data)
docker compose down -v
```

## Next Steps

1. Run `./setup-new-project.sh`
2. Create your app in the `app/` directory
3. Run `docker compose up -d`
4. Start building!

For more details, see [START_HERE.md](START_HERE.md)
