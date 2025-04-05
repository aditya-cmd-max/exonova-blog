document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.animationDelay = Math.random() * 0.5 + 's';
  });
});
