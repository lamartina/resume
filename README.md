# Sam LaMartina — Resume Website

A modern, dark-themed personal resume site built with [Astro](https://astro.build).

## 🚀 Getting Started

**Prerequisites:** Node.js 18+

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

## 📁 Project Structure

```
src/
  layouts/
    Layout.astro        — HTML shell, fonts, global CSS
  pages/
    index.astro         — Single-page entry point
  components/
    Nav.astro           — Fixed navigation bar
    Hero.astro          — Landing section with terminal widget
    About.astro         — Bio, services, contact info
    Experience.astro    — Work history, education, pricing
    Skills.astro        — Skill bars, code languages, tools
    Projects.astro      — Portfolio projects
    Contact.astro       — Contact form + footer
public/
  favicon.svg
  srlamartina-resume.pdf  ← Add your PDF resume here!
```

## ✏️ Customizing Content

All content is defined directly in the `.astro` component files — no CMS or external data source. Look for the `---` frontmatter sections at the top of each component to update jobs, projects, skills, etc.

## 📄 Adding Your Resume PDF

Drop your resume PDF into the `public/` folder as `srlamartina-resume.pdf` so the "Download CV" button works.

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

Works out of the box on [Netlify](https://netlify.com), [Vercel](https://vercel.com), or [Cloudflare Pages](https://pages.cloudflare.com) — just connect your repo and deploy.
