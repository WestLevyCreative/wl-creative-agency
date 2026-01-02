#!/bin/sh

# Docker entrypoint script for development
set -e

echo "🚀 Starting application in development mode..."

# Wait for dependencies
echo "⏳ Waiting for services to be ready..."

# Wait for database if needed
if [ -n "$DATABASE_URL" ]; then
  echo "📦 Waiting for PostgreSQL..."
  while ! nc -z postgres 5432 2>/dev/null; do
    sleep 1
  done
  echo "✅ PostgreSQL is ready"
fi

# Ensure dependencies are installed
if [ ! -d "node_modules" ] || [ -z "$(ls -A node_modules 2>/dev/null)" ]; then
  echo "📥 Installing dependencies..."
  npm install
fi

# Execute the main command
echo "🎯 Starting application..."
exec "$@"
