// MentEJ shared behavior — vanilla JS, no dependencies.
(function () {

  /* ---------------- THEME TOGGLE ---------------- */
  function initTheme() {
    var root = document.documentElement;
    var toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    function isDark() { return root.getAttribute('data-theme') === 'dark'; }

    function updateToggleUI() {
      var dark = isDark();
      toggle.setAttribute('aria-pressed', dark ? 'true' : 'false');
      toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    updateToggleUI();

    toggle.addEventListener('click', function () {
      var dark = !isDark();
      if (dark) {
        root.setAttribute('data-theme', 'dark');
      } else {
        root.removeAttribute('data-theme');
      }
      try { localStorage.setItem('mentej-theme', dark ? 'dark' : 'light'); } catch (e) {}
      updateToggleUI();
    });
  }

  /* ---------------- MOBILE NAV ---------------- */
  function initMobileNav() {
    var hamburger = document.getElementById('hamburgerBtn');
    var navLinks = document.getElementById('navLinks');
    var scrim = document.getElementById('navScrim');
    if (!hamburger || !navLinks) return;

    var lastFocused = null;

    function openMenu() {
      navLinks.classList.add('open');
      if (scrim) scrim.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.setAttribute('aria-label', 'Close menu');
      document.body.classList.add('menu-open');
      lastFocused = document.activeElement;
      var firstLink = navLinks.querySelector('a');
      if (firstLink) firstLink.focus();
    }

    function closeMenu() {
      navLinks.classList.remove('open');
      if (scrim) scrim.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open menu');
      document.body.classList.remove('menu-open');
      if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    }

    function isOpen() { return navLinks.classList.contains('open'); }

    hamburger.addEventListener('click', function () {
      isOpen() ? closeMenu() : openMenu();
    });

    // Close when a nav link is tapped
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { closeMenu(); });
    });

    // Close when clicking the scrim (outside the menu)
    if (scrim) scrim.addEventListener('click', closeMenu);

    // Close with Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) closeMenu();
    });

    // Close if resized back to desktop width
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900 && isOpen()) closeMenu();
    });
  }

  /* ---------------- ACTIVE NAV LINK ---------------- */
  function markActiveLink() {
    var current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === current) {
        link.classList.add('active');
      } else if (href !== current && link.classList.contains('active') && href !== window.location.pathname) {
        // leave server-rendered active state alone unless it mismatches
      }
    });
  }

  /* ---------------- SCROLL REVEAL ---------------- */
  var observer;
  function getObserver() {
    if (observer) return observer;
    if (!('IntersectionObserver' in window)) return null;
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    return observer;
  }

  function observeNewNodes(root) {
    var obs = getObserver();
    var nodes = (root || document).querySelectorAll('[data-animate]:not(.is-visible)');
    if (!obs) {
      // No IntersectionObserver support — just show everything.
      nodes.forEach(function (n) { n.classList.add('is-visible'); });
      return;
    }
    nodes.forEach(function (n) { obs.observe(n); });
  }

  function initScrollReveal() {
    observeNewNodes(document);
  }

  window.MentEJ = { observeNewNodes: observeNewNodes };

  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initMobileNav();
    markActiveLink();
    initScrollReveal();
  });
})();
