# TechSprint

A production-ready technology learning platform with structured roadmaps, tutorials, and career guidance.

## Features

- **Developer Roadmaps** — Step-by-step learning paths with progress tracking (Frontend, Backend, Full Stack, DevOps, Data Science)
- **Latest Tech** — Articles on trending technologies and frameworks
- **Tutorials** — Hands-on programming guides from beginner to advanced
- **Career & Projects** — Portfolio guides, interview prep, and project ideas
- **Dark/Light Theme** — Toggle with system preference detection
- **Global Search** — Find content across the platform (Ctrl+K)
- **Responsive Design** — Mobile-first, works on all devices
- **SEO Optimized** — Meta tags, Open Graph, structured data, sitemap

## Project Structure

```
TechSprint/
├── index.html              # Homepage
├── about.html              # About page
├── robots.txt              # SEO
├── sitemap.xml             # SEO
├── manifest.json           # PWA manifest
├── css/
│   ├── variables.css       # Design tokens & theming
│   ├── base.css            # Reset & typography
│   ├── components.css      # UI components
│   ├── layout.css          # Header, footer, layouts
│   └── pages.css           # Page-specific styles
├── js/
│   ├── components.js       # Header/footer injection
│   ├── theme.js            # Dark/light mode
│   ├── main.js             # Navigation, search, tabs
│   └── roadmaps.js         # Progress tracking
├── roadmaps/               # Flagship section
├── tech/                   # Latest tech articles
├── tutorials/              # Programming tutorials
├── career/                 # Career guidance
└── assets/
    └── favicon.svg
```

## Getting Started

Open `index.html` in a browser, or serve locally:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```

Then visit `http://localhost:8000`

## Tech Stack

- Pure HTML, CSS, and JavaScript (no build tools required)
- CSS custom properties for theming
- LocalStorage for roadmap progress & theme preference
- Intersection Observer for scroll animations

## License

MIT
