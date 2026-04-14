/* ════════════════════════════════════════════════════════════
   magnetic.js — Magnetic Attraction Utility
   ════════════════════════════════════════════════════════════ */

function initMagnetic() {
  const elements = document.querySelectorAll('.btn, .proj-link, .nav-links a, .nav-cta, .cl');

  elements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const strength = 25; // Quieter pull
      el.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
      el.style.transition = 'transform 0.5s var(--ease-out)';
      setTimeout(() => {
        el.style.transition = '';
      }, 500);
    });
  });
}

document.addEventListener('DOMContentLoaded', initMagnetic);
