/* ════════════════════════════════════════════════════════════
   scrollAnimations.js — Intersection Observer
   ════════════════════════════════════════════════════════════ */

function initScrollAnimations() {
  const options = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Initial fade-ups
  document.querySelectorAll('.fade-up').forEach((el) => {
    observer.observe(el);
  });

  // Stagger grid items if they are within a parent that's visible
  const grids = document.querySelectorAll('.proj-grid, .skills-grid');
  grids.forEach((grid) => {
    const children = grid.children;
    Array.from(children).forEach((child, index) => {
      child.style.transitionDelay = `${index * 0.1}s`;
    });
  });
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);
