const TechSprint = {
  siteName: 'TechSprint',
  siteUrl: 'https://techsprint.dev',
  siteDescription: 'Master technology with structured roadmaps, tutorials, and career guidance. Your sprint to tech excellence starts here.',

  navLinks: [
    { href: '/', label: 'Home' },
    { href: '/roadmaps/', label: 'Roadmaps', featured: true },
    { href: '/tech/', label: 'Latest Tech' },
    { href: '/tutorials/', label: 'Tutorials' },
    { href: '/career/', label: 'Career & Projects' },
    { href: '/about', label: 'About' }
  ],

  faqCollections: {
    roadmaps: {
      heading: 'Roadmaps FAQ',
      items: [
        { q: 'How do I choose the right roadmap?', a: 'Start with the role you want. Frontend is the most common entry point if you enjoy visual work. Backend fits if you like data and APIs. Full stack combines both. DevOps and Data Science are stronger once you have programming fundamentals.' },
        { q: 'How long does a roadmap take to complete?', a: 'Most paths take 6–18 months of consistent study. Duration depends on your weekly hours, prior experience, and whether you build projects alongside each skill — not just check boxes.' },
        { q: 'Can I track my progress?', a: 'Yes. Each roadmap has skill checklists stored in your browser. Check off topics as you learn and the progress bar on roadmap cards updates automatically.' },
        { q: 'Do I need prior coding experience?', a: 'Frontend and Backend roadmaps include beginner phases. Full stack, DevOps, and Data Science assume you already know basic programming. Use our tutorials if you are starting from zero.' }
      ]
    },
    tech: {
      heading: 'Latest Tech FAQ',
      items: [
        { q: 'How often is this section updated?', a: 'We refresh trend write-ups as major framework and platform releases land. Expect coverage of React, Next.js, Python, cloud, and AI throughout the year — not only at launch week.' },
        { q: 'Which technologies should I learn in 2026?', a: 'Core web skills (JavaScript/TypeScript, a frontend framework, APIs, and Git) still matter most. Layer on AI-assisted development and cloud basics so you can ship and operate real products.' },
        { q: 'Are these articles beginner-friendly?', a: 'Each piece explains why a technology matters, then goes deeper. Beginners should pair an article with a related tutorial or roadmap so the concepts have a place to land.' },
        { q: 'Should I chase every new framework?', a: 'No. Learn one stack thoroughly, then sample new tools when they solve a real problem. Trends help you stay aware; roadmaps keep you employable.' }
      ]
    },
    tutorials: {
      heading: 'Tutorials FAQ',
      items: [
        { q: 'Are the tutorials free?', a: 'Yes. All TechSprint tutorials are free to read. You can follow them at your own pace without an account.' },
        { q: 'What order should I follow?', a: 'Start with Getting Started with Web Development, then Git Basics, then CSS Flexbox, then JavaScript Fundamentals. After that, pick a roadmap and keep building projects.' },
        { q: 'Do tutorials include hands-on practice?', a: 'Yes. Each guide is written so you can code along in the browser or a local editor. Treat the examples as exercises, not just reading material.' },
        { q: 'How long is each tutorial?', a: 'Most take 15–30 minutes. Use them as focused sessions. If a concept is still fuzzy, repeat the examples before moving on.' }
      ]
    },
    career: {
      heading: 'Career FAQ',
      items: [
        { q: 'How do I build a portfolio with no job experience?', a: 'Ship 3–5 complete projects that solve a real problem. Document the problem, your decisions, and a live demo. Quality and clarity beat a long list of unfinished clones.' },
        { q: 'How should I prepare for technical interviews?', a: 'Practice coding problems, system design at the right level for the role, and behavioral stories using the STAR format. Our interview prep guide covers all three.' },
        { q: 'What projects impress employers?', a: 'Projects with real users, clean Git history, tests, and a deployed URL. Full-stack apps, tools that save time, or data projects with a clear insight stand out more than tutorial replicas.' },
        { q: 'How long does it take to become job-ready?', a: 'With a structured roadmap, projects, and interview practice, many career-switchers reach junior-ready in 8–14 months. Consistency matters more than speed.' }
      ]
    },
    about: {
      heading: 'About TechSprint FAQ',
      items: [
        { q: 'Is TechSprint free to use?', a: 'Yes. Roadmaps, tutorials, and career guides are free. We exist to give learners a clear path without a paywall on the core content.' },
        { q: 'Who creates the content?', a: 'Practicing engineers and educators. We keep paths aligned with what teams actually hire for, and we update them as the industry shifts.' },
        { q: 'Can I suggest a topic or correction?', a: 'Yes. Reach us through the contact links in the footer. Community feedback is how roadmaps stay accurate.' },
        { q: 'Do I need to create an account?', a: 'No account is required to read content. Roadmap progress is saved locally in your browser so you can pick up where you left off.' }
      ]
    }
  },

  searchIndex: [
    { title: 'Frontend Developer Roadmap', url: '/roadmaps/frontend-developer', category: 'Roadmaps', icon: '🗺️' },
    { title: 'Backend Developer Roadmap', url: '/roadmaps/backend-developer', category: 'Roadmaps', icon: '🗺️' },
    { title: 'Full Stack Developer Roadmap', url: '/roadmaps/fullstack-developer', category: 'Roadmaps', icon: '🗺️' },
    { title: 'DevOps Engineer Roadmap', url: '/roadmaps/devops-engineer', category: 'Roadmaps', icon: '🗺️' },
    { title: 'Data Scientist Roadmap', url: '/roadmaps/data-scientist', category: 'Roadmaps', icon: '🗺️' },
    { title: 'React 19 Features', url: '/tech/react', category: 'Latest Tech', icon: '⚛️' },
    { title: 'AI & Machine Learning Trends', url: '/tech/ai-ml', category: 'Latest Tech', icon: '🤖' },
    { title: 'Cloud Computing Guide', url: '/tech/cloud', category: 'Latest Tech', icon: '☁️' },
    { title: 'Python in 2026', url: '/tech/python', category: 'Latest Tech', icon: '🐍' },
    { title: 'Next.js 15 Overview', url: '/tech/nextjs', category: 'Latest Tech', icon: '▲' },
    { title: 'Getting Started with Web Development', url: '/tutorials/getting-started-web-dev', category: 'Tutorials', icon: '📚' },
    { title: 'Git Basics for Beginners', url: '/tutorials/git-basics', category: 'Tutorials', icon: '📚' },
    { title: 'CSS Flexbox Complete Guide', url: '/tutorials/css-flexbox', category: 'Tutorials', icon: '📚' },
    { title: 'JavaScript Fundamentals', url: '/tutorials/javascript-fundamentals', category: 'Tutorials', icon: '📚' },
    { title: 'Portfolio Building Guide', url: '/career/portfolio-guide', category: 'Career', icon: '💼' },
    { title: 'Technical Interview Prep', url: '/career/interview-prep', category: 'Career', icon: '💼' },
    { title: 'Project Ideas for Developers', url: '/career/project-ideas', category: 'Career', icon: '💼' },
    { title: 'About TechSprint', url: '/about', category: 'About', icon: 'ℹ️' }
  ]
};

function getBasePath() {
  const path = window.location.pathname;
  const depth = (path.match(/\//g) || []).length - 1;
  if (path.includes('/roadmaps/') || path.includes('/tech/') || path.includes('/tutorials/') || path.includes('/career/')) {
    return '../';
  }
  return '';
}

function resolveUrl(url) {
  const base = getBasePath();
  if (url === '/') return base || './';
  return base + url.replace(/^\//, '');
}

function isActiveLink(href) {
  const path = window.location.pathname.toLowerCase();
  const segment = path.split('/').filter(Boolean).pop() || '';

  if (href === '/') {
    const isRoot = segment === '' || segment === 'index.html';
    const inSubsection = ['/roadmaps', '/tech', '/tutorials', '/career'].some(s => path.includes(s));
    return isRoot && !inSubsection && !path.includes('about');
  }

  if (href === '/about') {
    return path.includes('about');
  }

  const cleanHref = href.replace(/^\//, '').replace(/\/$/, '');
  return path.includes(cleanHref);
}

function renderHeader() {
  const base = getBasePath();
  const navLinks = TechSprint.navLinks.map(link => {
    const active = isActiveLink(link.href) ? ' active' : '';
    const featured = link.featured ? ' header__nav-link--featured' : '';
    return `<a href="${resolveUrl(link.href)}" class="header__nav-link${active}${featured}">${link.label}</a>`;
  }).join('');

  const mobileLinks = TechSprint.navLinks.map(link => {
    const active = isActiveLink(link.href) ? ' active' : '';
    return `<a href="${resolveUrl(link.href)}" class="mobile-nav__link${active}">${link.label}</a>`;
  }).join('');

  return `
    <header class="header" id="header">
      <div class="header__inner">
        <a href="${resolveUrl('/')}" class="header__logo">
          <span class="header__logo-icon">TS</span>
          TechSprint
        </a>
        <nav class="header__nav" aria-label="Main navigation">
          ${navLinks}
        </nav>
        <div class="header__actions">
          <button class="header__search-btn" id="searchBtn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          <button class="header__theme-btn" id="themeBtn" aria-label="Toggle theme">
            <svg class="icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            <svg class="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>
          <button class="header__menu-btn" id="menuBtn" aria-label="Open menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
    </header>
    <nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">
      ${mobileLinks}
    </nav>
    <div class="search-overlay" id="searchOverlay">
      <div class="search-modal" role="dialog" aria-label="Search">
        <input type="text" class="search-modal__input" id="searchInput" placeholder="Search roadmaps, tutorials, tech..." autocomplete="off">
        <div class="search-modal__results" id="searchResults"></div>
      </div>
    </div>
  `;
}

function renderFooter() {
  const base = getBasePath();
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <a href="${resolveUrl('/')}" class="header__logo">
              <span class="header__logo-icon">TS</span>
              TechSprint
            </a>
            <p>Structured learning paths, cutting-edge tech insights, and career guidance to accelerate your journey in technology.</p>
            <div class="footer__social">
              <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://discord.com" aria-label="Discord" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 class="footer__heading">Learn</h4>
            <div class="footer__links">
              <a href="${resolveUrl('/roadmaps/')}">Roadmaps</a>
              <a href="${resolveUrl('/tutorials/')}">Tutorials</a>
              <a href="${resolveUrl('/tech/')}">Latest Tech</a>
            </div>
          </div>
          <div>
            <h4 class="footer__heading">Career</h4>
            <div class="footer__links">
              <a href="${resolveUrl('/career/portfolio-guide')}">Portfolio Guide</a>
              <a href="${resolveUrl('/career/interview-prep')}">Interview Prep</a>
              <a href="${resolveUrl('/career/project-ideas')}">Project Ideas</a>
            </div>
          </div>
          <div>
            <h4 class="footer__heading">Company</h4>
            <div class="footer__links">
              <a href="${resolveUrl('/about')}">About</a>
              <a href="${resolveUrl('/about')}#faq-about">FAQ</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <p>&copy; ${new Date().getFullYear()} TechSprint. All rights reserved.</p>
          <p>Built with passion for developers worldwide.</p>
        </div>
      </div>
    </footer>
    <div class="toast-container" id="toastContainer"></div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderFaq(collectionKey) {
  const collection = TechSprint.faqCollections[collectionKey];
  if (!collection) return '';

  const items = collection.items.map((item, index) => `
    <details class="faq__item"${index === 0 ? ' open' : ''}>
      <summary class="faq__question">${escapeHtml(item.q)}</summary>
      <div class="faq__answer"><p>${escapeHtml(item.a)}</p></div>
    </details>
  `).join('');

  return `
    <div class="faq" id="faq-${collectionKey}">
      <h3 class="faq__heading">${escapeHtml(collection.heading)}</h3>
      ${items}
    </div>
  `;
}

function injectFaqs() {
  const mounts = document.querySelectorAll('[data-faq]');
  const usedKeys = [];

  mounts.forEach(mount => {
    const key = mount.dataset.faq;
    const markup = renderFaq(key);
    if (!markup) return;
    usedKeys.push(key);
    mount.outerHTML = markup;
  });

  if (!usedKeys.length) return;

  const faqEntities = usedKeys.flatMap(key => {
    const collection = TechSprint.faqCollections[key];
    return collection ? collection.items : [];
  });

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqEntities.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  });
  document.head.appendChild(script);
}

function injectComponents() {
  const headerPlaceholder = document.getElementById('site-header');
  const footerPlaceholder = document.getElementById('site-footer');

  if (headerPlaceholder) {
    headerPlaceholder.outerHTML = renderHeader();
  }
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = renderFooter();
  }

  injectFaqs();

  if (typeof updateThemeIcon === 'function') {
    const theme = document.documentElement.getAttribute('data-theme');
    updateThemeIcon(theme);
  }

  document.dispatchEvent(new CustomEvent('components:loaded'));
}

document.addEventListener('DOMContentLoaded', injectComponents);
