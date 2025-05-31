# Clash Recruit Tech Stack

This document provides an overview of the technologies and tools used in the Clash Recruit project.

## Client-Side

### Core Framework
- [React](https://react.dev/) (v19.1.0) - The core UI library for building the user interface
- [TypeScript](https://www.typescriptlang.org/) (v5.8.3) - Adds static typing to JavaScript for better development experience

### UI Components & Styling
- [Mantine](https://mantine.dev/) (v8.0.2) - Modern React component library
  - [@mantine/core](https://mantine.dev/core/getting-started/) - Core components
  - [@mantine/hooks](https://mantine.dev/hooks/getting-started/) - Custom React hooks
  - [@mantine/form](https://mantine.dev/form/use-form/) - Form handling
  - [@mantine/modals](https://mantine.dev/modals/getting-started/) - Modal management
  - [@mantine/notifications](https://mantine.dev/notifications/getting-started/) - Toast notifications
  - [@mantine/carousel](https://mantine.dev/carousel/getting-started/) - Carousel component

### Routing
- [TanStack Router](https://tanstack.com/router/latest) (v1.120.12) - Type-safe routing solution
  - [@tanstack/react-router](https://tanstack.com/router/latest) - Core routing functionality
  - [@tanstack/react-router-devtools](https://tanstack.com/router/latest) - Development tools for debugging routes

### Icons
- [Tabler Icons](https://tabler-icons.io/) (v3.33.0) - Beautiful hand-crafted icons

### Carousel
- [Embla Carousel](https://www.embla-carousel.com/) (v8.6.0) - Lightweight carousel library
  - [embla-carousel](https://www.embla-carousel.com/) - Core carousel functionality
  - [embla-carousel-react](https://www.embla-carousel.com/) - React wrapper for Embla

## Backend

### Database & Backend
- [Convex](https://www.convex.dev/) (v1.24.3) - Backend platform with real-time database
  - [@convex-dev/auth](https://www.convex.dev/) - Authentication utilities for Convex

### Authentication
- [Auth.js](https://authjs.dev/) (v0.37.0) - Complete authentication solution

## Development Tools

### Build Tools
- [Vite](https://vitejs.dev/) (v6.3.5) - Next generation frontend tooling
- [SWC](https://swc.rs/) (via @vitejs/plugin-react-swc) - Fast TypeScript/JavaScript compiler

### Code Quality
- [Biome](https://biomejs.dev/) (v1.9.4) - All-in-one toolchain
  - Formatting
  - Linting
  - Type checking

### CSS Processing
- [PostCSS](https://postcss.org/) (v8.5.4) - CSS transformation tool
- [postcss-preset-mantine](https://mantine.dev/styles/postcss-preset/) - Mantine's PostCSS preset
- [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars) - PostCSS plugin for CSS variables

### Type Definitions
- [@types/react](https://www.npmjs.com/package/@types/react) (v19.1.2) - TypeScript definitions for React
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) (v19.1.2) - TypeScript definitions for ReactDOM
- [@types/node](https://www.npmjs.com/package/@types/node) (v22.15.29) - TypeScript definitions for Node.js

## Scripts

The project includes several npm scripts for development:

- `dev` - Start development server
- `build` - Build for production
- `format` - Format code using Biome
- `lint` - Lint code using Biome
- `preview` - Preview production build
- `convex` - Start Convex development server
- `check-types` - Type checking without emitting files
