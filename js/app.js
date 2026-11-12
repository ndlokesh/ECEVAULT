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

  // ══════════════ SECRET ADMIN ACCESS SYSTEM ══════════════

  function openAdminPortal() {
    if (typeof showToast === 'function') {
      showToast('Opening Admin Dashboard…', 'info');
    }
    setTimeout(() => {
      window.location.href = 'admin.html';
    }, 120);
  }

  // 1. Secret Keyword Sequence: Type "admin" anywhere on the keyboard
  let keySequence = '';
  window.addEventListener('keydown', (e) => {
    // Skip if user is actively typing in a search field or textarea
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

    if (e.key && e.key.length === 1) {
      keySequence += e.key.toLowerCase();
      if (keySequence.length > 10) {
        keySequence = keySequence.slice(-10);
      }
      if (keySequence.endsWith('admin')) {
        keySequence = '';
        openAdminPortal();
      }
    }
  });

  // 2. Conflict-Free Keyboard Shortcuts:
  // Chrome reserves Ctrl+Shift+A for "Search Tabs", so we support:
  // - Ctrl + Alt + A
  // - Ctrl + Shift + X
  // - Alt + Shift + A
  window.addEventListener('keydown', (e) => {
    const isCtrlOrCmd = e.ctrlKey || e.metaKey;

    // Ctrl + Alt + A
    if (isCtrlOrCmd && e.altKey && (e.key === 'a' || e.key === 'A')) {
      e.preventDefault();
      openAdminPortal();
      return;
    }

    // Ctrl + Shift + X
    if (isCtrlOrCmd && e.shiftKey && (e.key === 'x' || e.key === 'X')) {
      e.preventDefault();
      openAdminPortal();
      return;
    }

    // Alt + Shift + A
    if (e.altKey && e.shiftKey && (e.key === 'a' || e.key === 'A')) {
      e.preventDefault();
      openAdminPortal();
      return;
    }

    // Fallback: in case Ctrl+Shift+A is received
    if (isCtrlOrCmd && e.shiftKey && (e.key === 'a' || e.key === 'A')) {
      e.preventDefault();
      openAdminPortal();
      return;
    }
  }, true);

  // 3. Double-Click on Navbar / Brand Logo:
  document.querySelectorAll('header a, nav a, .navbar__brand, a[href="index.html"]').forEach(brand => {
    brand.addEventListener('dblclick', (e) => {
      e.preventDefault();
      openAdminPortal();
    });
  });

  // 4. Subtle Hidden Lock Icon in Footer (1-Click for Site Owner):
  const footerRow = document.querySelector('.footer__bottom, footer .pt-8, footer div:last-child');
  if (footerRow && !document.getElementById('secretAdminLock')) {
    const lockLink = document.createElement('a');
    lockLink.id = 'secretAdminLock';
    lockLink.href = 'admin.html';
    lockLink.title = 'Admin Portal (Secret Link)';
    lockLink.setAttribute('aria-label', 'Admin Portal');
    lockLink.style.cssText = 'display:inline-flex; align-items:center; justify-content:center; width:22px; height:22px; color:#94A3B8; opacity:0.4; transition:all 0.2s; margin-left:10px; cursor:pointer; vertical-align:middle;';
    lockLink.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
    
    lockLink.addEventListener('mouseenter', () => { lockLink.style.opacity = '1'; lockLink.style.color = '#2563EB'; });
    lockLink.addEventListener('mouseleave', () => { lockLink.style.opacity = '0.4'; lockLink.style.color = '#94A3B8'; });
    
    footerRow.appendChild(lockLink);
  }
});
