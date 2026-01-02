# Git Setup

After running `./setup-new-project.sh`, your Git repository will be initialized.

## Connect to GitHub (Optional)

```bash
# Create a new repository on GitHub (don't initialize with README)
# Then run:

git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

## Deployment via GitHub Actions

1. Push to `main` → Automatic production deployment
2. Push to `develop` → Automatic preview deployment
3. Create PR → Automatic preview URL

See [docs/DEPLOYMENT.md](../docs/DEPLOYMENT.md) for full setup.
