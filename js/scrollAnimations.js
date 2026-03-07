/* ═══════════════════════════════════════════
   scrollAnimations.js — IntersectionObserver
   ═══════════════════════════════════════════ */

/**
 * Watches all .fade-up elements and adds .visible
 * when they enter the viewport.
 */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);
