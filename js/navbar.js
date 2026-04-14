/* ════════════════════════════════════════════════════════════
   navbar.js — Sticky Header Behaviors
   ════════════════════════════════════════════════════════════ */

function initNavbar() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

function initThemeToggle() {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.theme-toggle-icon');
  if (!toggle || !icon) return;

  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme || 'dark';

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    icon.textContent = isDark ? '☀️' : '🌙';
  };

  applyTheme(initialTheme);

  toggle.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
  });

}

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initThemeToggle();
});
