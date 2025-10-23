// main.js — mobile menu + dark mode toggle
(function() {
  const $ = (sel, root=document) => root.querySelector(sel);
  const menuBtn = $('.menu-toggle');
  const nav = $('.nav-links');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const shown = nav.classList.toggle('show');
      menuBtn.setAttribute('aria-expanded', String(shown));
    });
  }

  // Dark mode
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (stored) {
    root.setAttribute('data-theme', stored);
  } else if (prefersDark) {
    root.setAttribute('data-theme', 'dark');
  }

  const toggle = $('#theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const curr = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', curr);
      localStorage.setItem('theme', curr);
    });
  }
})();