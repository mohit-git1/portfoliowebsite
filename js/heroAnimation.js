/**
 * Animates the hero name on page load and 
 * adds a mouse-following parallax effect to background blobs.
 */
function initHeroAnimation() {
  const heroName = document.querySelector('.hero-name');
  if (!heroName) return;

  // ── Entrance Animation ──
  heroName.style.opacity = '0';
  heroName.style.transform = 'translateY(20px)';

  setTimeout(() => {
    heroName.style.transition =
      'opacity 1.2s var(--ease-out), transform 1.2s var(--ease-out)';
    heroName.style.opacity = '1';
    heroName.style.transform = 'translateY(0)';
  }, 100);

  // ── Mouse Parallax for Blobs ──
  const blob1 = document.querySelector('.hero-blob1');
  const blob2 = document.querySelector('.hero-blob2');
  
  if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;

      if (blob1) {
        blob1.style.transform = `translate(${mouseX * 30}px, ${mouseY * 30}px)`;
      }
      if (blob2) {
        blob2.style.transform = `translate(${mouseX * -15}px, ${mouseY * -15}px)`;
      }
    });

    // Add smooth transition for blob parallax
    if (blob1) blob1.style.transition = 'transform 0.2s ease-out';
    if (blob2) blob2.style.transition = 'transform 0.2s ease-out';
  }
}

document.addEventListener('DOMContentLoaded', initHeroAnimation);
