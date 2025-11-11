/* Particle Network Animation using particles.js */
particlesJS("particles-js", {
  "particles": {
    "number": {"value": 80},
    "color": {"value": "#00bcd4"},
    "shape": {"type": "circle"},
    "opacity": {"value":0.5},
    "size": {"value":3},
    "line_linked": {"enable":true,"distance":120,"color":"#00bcd4","opacity":0.4,"width":1},
    "move": {"enable":true,"speed":2,"direction":"none","out_mode":"bounce"}
  },
  "interactivity": {
    "events": {"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"}}
  },
  "retina_detect": true
});

// research cards interaction
document.addEventListener('DOMContentLoaded', function () {
  const cards = Array.from(document.querySelectorAll('.research-card'));
  const details = {
    md: document.getElementById('detail-md'),
    quantum: document.getElementById('detail-quantum'),
    fem: document.getElementById('detail-fem'),
    ai: document.getElementById('detail-ai')
  };

  function closeAllDetails() {
    Object.values(details).forEach(d => {
      if (d) d.classList.remove('open');
      if (d) d.setAttribute('aria-hidden', 'true');
    });
    cards.forEach(c => c.classList.remove('active'));
  }

  function openDetail(id) {
    closeAllDetails();
    const panel = details[id];
    const card = cards.find(c => c.dataset.id === id);
    if (!panel) return;
    // activate card
    if (card) card.classList.add('active');

    // expand panel (add class with transition)
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');

    // smooth scroll to the panel's top (with offset for fixed nav)
    const navHeight = document.querySelector('nav')?.offsetHeight || 70;
    const rect = panel.getBoundingClientRect();
    const absoluteY = window.pageYOffset + rect.top;
    const targetY = Math.max(absoluteY - navHeight - 20, 0);

    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  }

  // click / keyboard handler
  cards.forEach(card => {
    const id = card.dataset.id;
    card.addEventListener('click', () => openDetail(id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDetail(id);
      }
    });
  });

  // optional: close detail when clicking outside any card/panel
  document.addEventListener('click', (e) => {
    const clickedCard = e.target.closest('.research-card');
    const clickedPanel = e.target.closest('.detail-panel');
    if (!clickedCard && !clickedPanel) {
      // close all
      closeAllDetails();
    }
  });
});
