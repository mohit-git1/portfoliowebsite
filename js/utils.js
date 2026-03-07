/* ══════════════════════════════════════════
   utils.js — Shared utility functions
   ══════════════════════════════════════════ */

/**
 * Sets the current year in any element with id="year".
 */
function setCurrentYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', setCurrentYear);
