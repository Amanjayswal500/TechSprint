function getRoadmapKey() {
  const path = window.location.pathname;
  const match = path.match(/\/([^/]+)\/?$/);
  return match ? match[1] : null;
}

function loadProgress() {
  const key = getRoadmapKey();
  if (!key) return {};
  try {
    return JSON.parse(localStorage.getItem(`roadmap-progress-${key}`)) || {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  const key = getRoadmapKey();
  if (!key) return;
  localStorage.setItem(`roadmap-progress-${key}`, JSON.stringify(progress));
}

function initRoadmapProgress() {
  const checks = document.querySelectorAll('.roadmap-skill__check');
  if (!checks.length) return;

  const progress = loadProgress();

  checks.forEach(check => {
    const skillId = check.dataset.skill;
    if (skillId && progress[skillId]) {
      check.classList.add('checked');
      check.innerHTML = '✓';
    }

    check.addEventListener('click', () => {
      const id = check.dataset.skill;
      if (!id) return;

      check.classList.toggle('checked');
      check.innerHTML = check.classList.contains('checked') ? '✓' : '';

      const current = loadProgress();
      if (check.classList.contains('checked')) {
        current[id] = true;
      } else {
        delete current[id];
      }
      saveProgress(current);
      updateProgressBar();
    });
  });

  updateProgressBar();
}

function updateProgressBar() {
  const checks = document.querySelectorAll('.roadmap-skill__check');
  const progressBar = document.querySelector('.roadmap-progress .progress__bar');
  const progressText = document.querySelector('.roadmap-progress-text');

  if (!checks.length) return;

  const total = checks.length;
  const completed = document.querySelectorAll('.roadmap-skill__check.checked').length;
  const percent = Math.round((completed / total) * 100);

  if (progressBar) progressBar.style.width = `${percent}%`;
  if (progressText) progressText.textContent = `${completed}/${total} skills completed (${percent}%)`;
}

function initRoadmapSidebar() {
  const sidebarLinks = document.querySelectorAll('.roadmap-sidebar__link');
  const phases = document.querySelectorAll('.roadmap-phase');

  if (!sidebarLinks.length || !phases.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        sidebarLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-20% 0px -60% 0px' });

  phases.forEach(phase => observer.observe(phase));

  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initRoadmapCards() {
  document.querySelectorAll('.roadmap-card').forEach(card => {
    const key = card.dataset.roadmap;
    if (!key) return;

    try {
      const progress = JSON.parse(localStorage.getItem(`roadmap-progress-${key}`)) || {};
      const total = card.dataset.totalSkills ? parseInt(card.dataset.totalSkills) : 0;
      const completed = Object.keys(progress).length;
      const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

      const bar = card.querySelector('.progress__bar');
      const text = card.querySelector('.roadmap-card__progress-info span');

      if (bar) bar.style.width = `${percent}%`;
      if (text) text.textContent = `${percent}% complete`;
    } catch { /* ignore */ }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initRoadmapProgress();
  initRoadmapSidebar();
  initRoadmapCards();
});
