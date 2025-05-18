# Olaoluwa's Portfolio

A modern, responsive portfolio website built with [Next.js 15](https://nextjs.org/) and [React 19](https://react.dev/). This site showcases my work, skills, and projects, with a focus on performance, accessibility, and developer experience.

## Features

- **App Router**: Uses Next.js 15 App Router for file-based routing and layouts.
- **TypeScript**: Type-safe codebase for reliability and maintainability.
- **Theming**: Light/dark mode support with [next-themes](https://github.com/pacocoursey/next-themes).
- **Custom Fonts**: [Geist](https://vercel.com/font) Sans and Mono loaded via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts).
- **Tailwind CSS**: Utility-first styling with [Tailwind CSS v4](https://tailwindcss.com/).
- **Reusable Components**: Modular components in the [`components/`](components/) directory.
- **SVG Assets**: Optimized SVGs in [`public/`](public/) for fast loading.
- **ESLint**: Linting with [eslint-config-next](https://nextjs.org/docs/app/building-your-application/configuring/eslint).

## Packages Used

- [`next`](https://www.npmjs.com/package/next) (v15): React framework for SSR, SSG, and more.
- [`react`](https://www.npmjs.com/package/react) (v19): UI library.
- [`react-dom`](https://www.npmjs.com/package/react-dom) (v19): React DOM bindings.
- [`next-themes`](https://www.npmjs.com/package/next-themes): Theme switching (light/dark/system).
- [`clsx`](https://www.npmjs.com/package/clsx): Utility for conditionally joining classNames.
- [`tailwind-merge`](https://www.npmjs.com/package/tailwind-merge): Merges Tailwind CSS classes.
- [`motion`](https://www.npmjs.com/package/motion): Animation library.
- [`react-icons`](https://www.npmjs.com/package/react-icons): Popular icon packs as React components.
- [`@types/react`, `@types/react-dom`, `@types/node`]: TypeScript type definitions.

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
app/           # App Router pages, layouts, and providers
components/    # Reusable UI components
public/        # Static assets (SVGs, images)
utils/         # Utility functions
```

- Main layout: [`app/layout.tsx`](app/layout.tsx)
- Theme provider: [`app/provider.tsx`](app/provider.tsx)
- Example component: [`components/Hero.tsx`](components/Hero.tsx)

## Customization

- **Edit content:** Update [`app/page.tsx`](app/page.tsx) and components in [`components/`](components/).
- **Change theme logic:** See [`app/provider.tsx`](app/provider.tsx).
- **Add assets:** Place SVGs/images in [`public/`](public/).

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js.

## License

This project is for personal portfolio use. Feel free to fork and adapt for your own portfolio!
