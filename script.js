document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.animationDelay = Math.random() * 0.5 + 's';
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.fact-card');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(query) ? 'flex' : 'none';
    });
  });
});
