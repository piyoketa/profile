# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for @piyoketa built with Vue 3, Vuetify, and Docker. The site showcases work across four main areas: Mental Health, IT, Game Development, and Interview Analysis.

## Development Environment

The project uses a Docker-based development environment:

- **Frontend**: Vue 3 + Vuetify + Vite
- **Container**: Node 20 Alpine with bash support
- **Development**: Docker container with hot reload and file watching

## Common Commands

### Docker Development
```bash
# Enter the development container
make enter

# Build the container
make build

# Start the container in background
make run
```

### Inside Container (after `make enter`)
```bash
# Start development server (runs on port 5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Frontend Structure
- **Entry Point**: `frontend/src/main.js` - Vue app initialization with Vuetify
- **Routing**: `frontend/src/router/index.js` - Vue Router with 5 main routes
- **Layout**: `frontend/src/App.vue` - Main layout with responsive navigation
- **Pages**: `frontend/src/pages/` - Individual page components for each section

### Key Components
- **App.vue**: Main application layout with responsive navigation bar and drawer
- **Router**: Handles navigation between Home, Mental Health, IT, Game Dev, and Interview pages
- **Assets**: Profile images and article images stored in `src/assets/`

### Navigation Structure
The site has a responsive navigation system:
- Desktop: Horizontal tabs in the app bar
- Mobile: Hamburger menu with drawer navigation
- Routes: `/`, `/mental-health`, `/it`, `/game-dev`, `/interview`

### Styling
- Uses Vuetify 3 component library
- Custom SCSS styles in App.vue
- Responsive design with mobile-first approach
- Dark blue (#0F1E2E) header with white text

## Docker Configuration

The project uses a multi-stage Docker setup:
- **Base Image**: node:20-alpine with bash
- **Working Directory**: `/app/frontend` (mapped from host)
- **Port**: 5173 exposed for Vite dev server
- **File Watching**: Configured with polling for Docker compatibility

## Development Notes

- Vite config includes file watching with polling for Docker environments
- Server runs on `0.0.0.0` to allow external access from container
- Path aliases configured (`@` points to `src/`)
- The container runs indefinitely with bash access for development