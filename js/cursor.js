/* ════════════════════════════════════════════════════════════
   cursor.js — Custom Cursor Logic
   ════════════════════════════════════════════════════════════ */

function initCursor() {
  const follower = document.createElement('div');
  follower.classList.add('cursor-follower');
  document.body.appendChild(follower);

  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Show cursor on first movement
    if (follower.style.opacity === '0' || follower.style.opacity === '') {
      follower.style.opacity = '1';
    }
  });

  // Smooth follow using requestAnimationFrame
  function update() {
    const easing = 0.15;
    followerX += (mouseX - followerX) * easing;
    followerY += (mouseY - followerY) * easing;

    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;

    requestAnimationFrame(update);
  }
  update();

  // Morph on interactive elements
  const interactives = document.querySelectorAll('a, button, .btn, .proj-card');
  interactives.forEach((el) => {
    el.addEventListener('mouseenter', () => follower.classList.add('hovering'));
    el.addEventListener('mouseleave', () => follower.classList.remove('hovering'));
  });
}

if (window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('DOMContentLoaded', initCursor);
}
