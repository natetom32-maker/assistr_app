const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('menu-open');
});

const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      nav.classList.remove('menu-open');
    }
  });
});
