# Quick Start Guide

Get up and running with this template in 5 minutes.

## 1. Initial Setup (2 minutes)

```bash
# Run the setup wizard
chmod +x setup-new-project.sh
./setup-new-project.sh
```

The script will:
- ✅ Generate secure credentials
- ✅ Initialize Git
- ✅ Create `.env.local`
- ✅ Set up directory structure

## 2. Create Your App (2 minutes)

### Option A: Next.js (Recommended)

```bash
cd app
npx create-next-app@latest . --typescript --tailwind --app
cd ..
```

### Option B: React + Vite

```bash
cd app
npm create vite@latest . -- --template react-ts
cd ..
```

### Option C: Vue.js

```bash
cd app
npm create vue@latest
cd ..
```

## 3. Start Development (1 minute)

```bash
# Start all services
docker compose up -d

# Open in browser
open http://localhost:3000
```

## 4. Access Your Services

| Service | URL |
|---------|-----|
| Your App | http://localhost:3000 |
| Supabase Admin | http://localhost:54323 |
| PostgreSQL | localhost:5432 |

## 5. View Logs

```bash
docker compose logs -f
```

## Common Commands

```bash
# Stop services
docker compose down

# Restart
docker compose restart

# Full reset (deletes data)
docker compose down -v

# Execute command in app
docker compose exec app npm install package-name

# Access database
docker compose exec postgres psql -U postgres
```

## Next Steps

- 📖 Read [DEVELOPMENT.md](docs/DEVELOPMENT.md) for detailed development guide
- 🚀 Read [DEPLOYMENT.md](docs/DEPLOYMENT.md) for deployment instructions
- 📚 Check [README.md](README.md) for full documentation

## Troubleshooting

### Can't connect to localhost?
- Make sure Docker is running: `docker ps`
- Check ports aren't in use: `lsof -i :3000`

### Container won't start?
- Check logs: `docker compose logs app`
- Rebuild: `docker compose down && docker compose up -d --build`

### Hot reload not working?
- Restart: `docker compose restart app`
- For Next.js, add watch polling (see DEVELOPMENT.md)

## Need Help?

1. Check [README.md](README.md) Troubleshooting section
2. Review [DEVELOPMENT.md](docs/DEVELOPMENT.md)
3. Check Docker/Supabase logs: `docker compose logs -f`

---

**Ready to deploy?** → See [DEPLOYMENT.md](docs/DEPLOYMENT.md)
