/* ═══════════════════════════════════════════════════════════
   ECEVault — Global Application Logic & Event Handlers
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Menu Handler (Standard pages)
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
  }

  // Global Navbar Search
  const searchInput = document.getElementById('globalSearch');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) window.location.href = `materials.html?search=${encodeURIComponent(query)}`;
      }
    });
  }

  // ══════════════ SECRET ADMIN SHORTCUTS ══════════════
  // 1. Keyboard Shortcut: Ctrl + Shift + A (or Cmd + Shift + A on Mac)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      // Optional subtle toast indication before navigating
      if (typeof showToast === 'function') {
        showToast('Opening Admin Dashboard…', 'info');
      }
      setTimeout(() => {
        window.location.href = 'admin.html';
      }, 200);
    }
  });

  // 2. Hidden Mobile / Mouse Trigger: Triple-click on any copyright text
  let secretClickCount = 0;
  let secretClickTimer = null;
  document.addEventListener('click', (e) => {
    const text = e.target.textContent || '';
    if (text.includes('ECEvault') || text.includes('2026') || e.target.closest('footer')) {
      secretClickCount++;
      clearTimeout(secretClickTimer);
      secretClickTimer = setTimeout(() => {
        secretClickCount = 0;
      }, 1400);

      if (secretClickCount >= 3) {
        secretClickCount = 0;
        if (typeof showToast === 'function') {
          showToast('Accessing Admin Portal…', 'info');
        }
        setTimeout(() => {
          window.location.href = 'admin.html';
        }, 200);
      }
    }
  });
});
