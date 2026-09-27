# Kishan Ravikumar — Portfolio

React + Vite + Tailwind CSS portfolio.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
```

Outputs a production build to `dist/`.

```bash
npm run preview
```

Serves the built `dist/` folder locally so you can sanity-check the production build.

## Deploy to GitHub Pages

**Before your first deploy**, open `vite.config.js` and set `base` to match your repo name:

```js
base: '/your-repo-name/',
```

(If this repo will be your `<username>.github.io` root site, use `base: '/'` instead.)

### Option A — GitHub Actions (recommended)

This repo includes `.github/workflows/deploy.yml`, which builds and deploys automatically
on every push to `main`. In your GitHub repo settings, go to **Settings → Pages** and set
the source to **GitHub Actions**. That's it — push to `main` and it deploys itself.

### Option B — manual deploy with `gh-pages`

```bash
npm run deploy
```

This builds the site and pushes `dist/` to a `gh-pages` branch. In **Settings → Pages**,
set the source branch to `gh-pages`.

## Adding your CV

Drop your CV PDF into the `public/` folder as `Kishan-Ravikumar-CV.pdf` (matching the
filename referenced by the "Download CV" button in `src/data.js` → `profile.cvFile`), or
update that filename to match whatever you name it.

## Project structure

```
src/
  components/   — one component per section (Navbar, Hero, About, Experience, ...)
  hooks/        — useReveal (scroll-in animation), useScrollSpy (active nav link)
  data.js       — all portfolio content (experience, projects, skills, education)
  App.jsx       — assembles the sections
  index.css     — Tailwind entry + a couple of global rules
```

To update content (a new project, a role, a skill), edit `src/data.js` — the components
render from that file, so nothing else needs to change for text updates.
