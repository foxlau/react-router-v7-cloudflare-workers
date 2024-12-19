# Welcome to React Router!

A supercharged React Router v7 template, forked from [the official Cloudflare template](https://github.com/remix-run/react-router-templates/tree/main/cloudflare), enhanced with additional tooling to provide a complete solution for building modern full-stack React applications.

## Features

- 🚀 Server-side rendering (SSR)
- ⚡️ Hot Module Replacement (HMR)
- 📦 Smart asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎨 TailwindCSS for styling
- 🔍 Biome for linting and formatting
- ✨ Prettier code formatting support
- 📖 [React Router docs](https://reactrouter.com/)

## Links

React Router v7 Authentication Demo Series:
- [React Router v7 with Better Auth](https://github.com/foxlau/react-router-v7-better-auth) - Authentication demo using Better Auth package
- [React Router v7 with Remix Auth](https://github.com/foxlau/react-router-v7-remix-auth) - Multi-strategy authentication demo using Remix Auth

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

Deployment is done using the Wrangler CLI.

To deploy directly to production:

```sh
npx wrangler deploy
```

To deploy a preview URL:

```sh
npx wrangler versions upload
```

You can then promote a version to production after verification or roll it out progressively.

```sh
npx wrangler versions deploy
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
