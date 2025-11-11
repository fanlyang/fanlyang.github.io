window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.background = window.scrollY > 100 ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.5)';
});
