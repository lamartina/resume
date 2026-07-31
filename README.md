# Sam LaMartina — Resume Website

A modern, dark-themed personal resume site built with [Astro](https://astro.build).

## 🚀 Getting Started

**Prerequisites:** Node.js 24+

```bash
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✏️ Customizing Content

All content is defined directly in the `.astro` component files — no CMS or external data source. Look for the `---` frontmatter sections at the top of each component to update jobs, projects, skills, etc.

## 🎨 Theming

All colors and fonts are CSS variables in `src/layouts/Layout.astro`:

```css
:root {
  --bg:       #080c14;
  --accent:   #00dcb4;  /* teal */
  --accent-2: #0090ff;  /* blue */
  ...
}
```

## 🌐 Deploying

Use common sense to deploy to a webserver

## the end.
goodbye.