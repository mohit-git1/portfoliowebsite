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

document.addEventListener('DOMContentLoaded', initNavbar);
