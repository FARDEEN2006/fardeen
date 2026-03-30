(() => {
  const root = document.documentElement;

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');

  const setNavOpen = (isOpen) => {
    root.classList.toggle('nav-open', isOpen);
    if (navToggle) navToggle.setAttribute('aria-expanded', String(isOpen));
  };

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      setNavOpen(!root.classList.contains('nav-open'));
    });

    nav.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest('a')) setNavOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setNavOpen(false);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 760) setNavOpen(false);
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
