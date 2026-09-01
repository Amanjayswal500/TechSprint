function initNavigation() {
  const header = document.getElementById('header');
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('.mobile-nav__link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

function initSearch() {
  const searchBtn = document.getElementById('searchBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  if (!searchBtn || !searchOverlay) return;

  function openSearch() {
    searchOverlay.classList.add('active');
    setTimeout(() => searchInput?.focus(), 100);
    renderSearchResults('');
  }

  function closeSearch() {
    searchOverlay.classList.remove('active');
    if (searchInput) searchInput.value = '';
  }

  searchBtn.addEventListener('click', openSearch);

  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') closeSearch();
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }

  function renderSearchResults(query) {
    if (!searchResults) return;

    const base = typeof getBasePath === 'function' ? getBasePath() : '';
    const items = TechSprint.searchIndex.filter(item => {
      if (!query) return true;
      const q = query.toLowerCase();
      return item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
    });

    if (items.length === 0) {
      searchResults.innerHTML = '<div class="search-empty">No results found. Try a different search term.</div>';
      return;
    }

    searchResults.innerHTML = items.slice(0, 8).map(item => {
      const url = base + item.url.replace(/^\//, '');
      return `
        <a href="${url}" class="search-result">
          <span class="search-result__icon">${item.icon}</span>
          <div>
            <div class="search-result__title">${item.title}</div>
            <div class="search-result__category">${item.category}</div>
          </div>
        </a>
      `;
    }).join('');
  }
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    const tabs = tabGroup.querySelectorAll('.tab');
    const filterContainer = tabGroup.closest('.filter-bar')?.parentElement || document;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.dataset.filter;
        const items = filterContainer.querySelectorAll('[data-category]');

        items.forEach(item => {
          if (!filter || filter === 'all') {
            item.style.display = '';
          } else {
            item.style.display = item.dataset.category === filter ? '' : 'none';
          }
        });

        const countEl = filterContainer.querySelector('.filter-bar__count');
        if (countEl && items.length) {
          const visible = [...items].filter(i => i.style.display !== 'none').length;
          countEl.textContent = `${visible} result${visible !== 1 ? 's' : ''}`;
        }
      });
    });
  });
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function initNewsletter() {
  document.querySelectorAll('.newsletter__form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter__input');
      if (input && input.value) {
        showToast('Thanks for subscribing! Check your inbox soon.');
        input.value = '';
      }
    });
  });
}

function initCopyButtons() {
  document.querySelectorAll('.code-block__copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.closest('.code-block')?.querySelector('code')?.textContent;
      if (code) {
        navigator.clipboard.writeText(code).then(() => {
          btn.textContent = 'Copied!';
          setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
        });
      }
    });
  });
}

function initSectionNav() {
  const nav = document.querySelector('.section-nav');
  if (!nav) return;

  const links = [...nav.querySelectorAll('.section-nav__link')];
  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
    });
  }, {
    rootMargin: '-30% 0px -55% 0px',
    threshold: [0.1, 0.25, 0.5]
  });

  sections.forEach(section => observer.observe(section));
}

function initApp() {
  initNavigation();
  initSearch();
  initScrollAnimations();
  initTabs();
  initNewsletter();
  initCopyButtons();
  initSectionNav();
}

document.addEventListener('components:loaded', initApp);

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('header')) {
    initApp();
  }
});
