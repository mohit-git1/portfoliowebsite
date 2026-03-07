/* ══════════════════════════════════════════
   heroAnimation.js — Hero name entrance
   ══════════════════════════════════════════ */

/**
 * Animates the hero name on page load with a
 * slight delay so the transition is visible.
 */
function initHeroAnimation() {
  const heroName = document.querySelector('.hero-name');
  if (!heroName) return;

  heroName.style.opacity = '0';
  heroName.style.transform = 'translateY(20px)';

  setTimeout(() => {
    heroName.style.transition =
      'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)';
    heroName.style.opacity = '1';
    heroName.style.transform = 'translateY(0)';
  }, 100);
}

document.addEventListener('DOMContentLoaded', initHeroAnimation);
