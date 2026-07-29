# srlamartina.com

Personal resume site for Sam LaMartina, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`.

## Build

```bash
npm run build
```

Static output goes to `dist/`. `npm run preview` serves that build locally.

## Deploying to GitHub Pages

1. **Create a GitHub repo** (any name — e.g. `resume-site`) and push this project to its `main` branch.
2. **Enable Pages via GitHub Actions**: in the repo, go to **Settings → Pages**, and under
   "Build and deployment" set **Source** to **GitHub Actions** (not "Deploy from a branch").
3. **Push to `main`.** The workflow at `.github/workflows/deploy.yml` will install dependencies,
   run `astro build`, and publish `dist/` automatically. Check the **Actions** tab to watch progress.
4. **Point the domain at GitHub Pages.** At your domain registrar, set:
   - Four **A records** for the root domain (`srlamartina.com`) pointing to:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - (Optional) a **CNAME record** for `www` pointing to `<your-github-username>.github.io`
5. **Set the custom domain in repo settings.** Settings → Pages → enter `srlamartina.com` in the
   "Custom domain" field. GitHub will verify it and provision HTTPS automatically (can take up to
   ~24 hours, usually much faster). The `public/CNAME` file in this repo already contains
   `srlamartina.com`, so this step just confirms it in GitHub's UI.
6. **Add a firewall via Cloudflare (optional but recommended).** Move `srlamartina.com`'s
   nameservers to Cloudflare (free plan), re-add the same DNS records there, and enable the
   orange-cloud proxy. Set **SSL/TLS mode to "Full"** (not "Flexible") to avoid a redirect loop
   with GitHub's own HTTPS. This is what gives you WAF/DDoS protection — GitHub Pages DNS alone
   doesn't include it.

## Updating content

- **Resume text**: edit the arrays at the top of the components in `src/components/`
  (`Experience.astro`, `Education.astro`, `Skills.astro`, `Contact.astro`).
- **Resume PDF**: replace `public/resume.pdf` with an updated file of the same name — no code
  changes needed, it's served as a static asset at `/resume.pdf`.
- **Publish changes**: commit and push to `main`; the GitHub Actions workflow rebuilds and
  redeploys automatically.

## Note on the previous site

The live WordPress site at srlamartina.com currently has a "Blog" section containing
SEO-spam-style posts (gibberish, unrelated foreign-language and gambling terms) — a common sign
of a compromised WordPress install. That content was intentionally **not** carried over here.
Worth checking whether the old WordPress installation is still exposed anywhere and should be
taken down or cleaned up.
