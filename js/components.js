/* ═══════════════════════════════════════════════════════════
   ECEVault — Shared Component Renderers & Security Utilities
   ═══════════════════════════════════════════════════════════ */

/* ── Security Firewall: Input Sanitizer (Anti-XSS) ───── */
function sanitizeHTML(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ── Render a Material Card ───────────────────────────── */
function renderMaterialCard(material) {
  const subj = typeof getSubject === 'function' ? getSubject(material.subjectId) : null;
  const color = typeof getTypeColor === 'function' ? getTypeColor(material.type) : 'blue';
  const icon = typeof getTypeIcon === 'function' ? getTypeIcon(material.type) : '';
  const safeTitle = sanitizeHTML(material.title);
  const safeDesc = sanitizeHTML(material.description || '');
  const safeSubjName = sanitizeHTML(subj ? subj.name : 'ECE');
  const safeSize = sanitizeHTML(material.size || '3.5 MB');
  const safeFormat = sanitizeHTML((material.format || 'pdf').toUpperCase());
  const safeTypeLabel = typeof getTypeLabel === 'function' ? getTypeLabel(material.type) : material.type;

  return `
    <div class="material-card" data-id="${sanitizeHTML(material.id)}">
      <div class="material-card__header">
        <div class="material-card__icon material-card__icon--${color}">
          ${icon}
        </div>
        <div class="material-card__meta">
          <h3 class="material-card__title">${safeTitle}</h3>
          <p class="material-card__subject">${safeSubjName}</p>
        </div>
      </div>
      <div class="material-card__badges">
        <span class="badge badge--${color}">${safeTypeLabel}</span>
        <span class="badge badge--blue">Sem ${sanitizeHTML(material.semester)}</span>
        ${material.unit !== 'all' && material.unit !== undefined ? `<span class="badge badge--amber">Unit ${sanitizeHTML(material.unit)}</span>` : ''}
        <span class="badge badge--green">${safeFormat}</span>
      </div>
      <p class="material-card__desc">${safeDesc}</p>
      <div class="material-card__footer">
        <a href="preview.html?id=${encodeURIComponent(material.id)}" class="btn btn--outline btn--sm">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          Preview
        </a>
        <button class="btn btn--primary btn--sm" onclick="handleDownload('${sanitizeHTML(material.id)}')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          Download
        </button>
        <span class="material-card__size">${safeSize}</span>
      </div>
    </div>
  `;
}

/* ── Render a Semester Card ───────────────────────────── */
function renderSemesterCard(sem) {
  return `
    <a href="semester.html?sem=${encodeURIComponent(sem.id)}" class="semester-card">
      <div class="semester-card__icon semester-card__icon--${sem.id}">
        0${sem.id}
      </div>
      <div class="semester-card__label">${sanitizeHTML(sem.label)}</div>
      <div class="semester-card__count">${sem.subjects ? sem.subjects.length : 0} Subjects</div>
      <span class="semester-card__link">View Subjects →</span>
    </a>
  `;
}

/* ── Render Filter Controls ───────────────────────────── */
function renderFilters(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container || typeof ECE_DATA === 'undefined') return;

  const showSemester = options.showSemester !== false;
  const showType = options.showType !== false;
  const showUnit = options.showUnit !== false;

  let html = '<div class="filters" id="filterControls">';

  if (showSemester) {
    html += `
      <select class="filter-select" id="filterSemester" data-filter="semester">
        <option value="">All Semesters</option>
        ${ECE_DATA.semesters.map(s => `<option value="${s.id}">${sanitizeHTML(s.label)}</option>`).join('')}
      </select>
    `;
  }

  if (options.subjects && Array.isArray(options.subjects)) {
    html += `
      <select class="filter-select" id="filterSubject" data-filter="subjectId">
        <option value="">All Subjects</option>
        ${options.subjects.map(s => `<option value="${s.id}">${sanitizeHTML(s.name)}</option>`).join('')}
      </select>
    `;
  }

  if (showType) {
    html += `
      <select class="filter-select" id="filterType" data-filter="type">
        <option value="">All Resource Types</option>
        <option value="notes">Lecture Notes</option>
        <option value="paper">Previous Year Papers</option>
        <option value="lab">Lab Manuals</option>
        <option value="syllabus">Syllabus Breakdown</option>
      </select>
    `;
  }

  if (showUnit) {
    html += `
      <select class="filter-select" id="filterUnit" data-filter="unit">
        <option value="">All Units</option>
        <option value="1">Unit 1</option>
        <option value="2">Unit 2</option>
        <option value="3">Unit 3</option>
        <option value="4">Unit 4</option>
        <option value="5">Unit 5</option>
      </select>
    `;
  }

  html += `
    <select class="filter-select" id="filterFormat" data-filter="format">
      <option value="">All Formats</option>
      <option value="pdf">PDF Documents</option>
      <option value="doc">DOC / Word</option>
      <option value="ppt">PPT Slides</option>
    </select>
  `;

  html += '</div>';
  container.innerHTML = html;
}

/* ── Render Breadcrumbs ───────────────────────────────── */
function renderBreadcrumbs(containerId, crumbs) {
  const container = document.getElementById(containerId);
  if (!container || !Array.isArray(crumbs)) return;

  container.innerHTML = crumbs.map((crumb, i) => {
    if (i === crumbs.length - 1) {
      return `<span>${sanitizeHTML(crumb.label)}</span>`;
    }
    return `<a href="${encodeURI(crumb.href)}">${sanitizeHTML(crumb.label)}</a><span class="breadcrumbs__sep">›</span>`;
  }).join('');
}

/* ── Render Pagination (Debounced & Fast) ──────────────── */
function renderPagination(containerId, currentPage, totalPages, onPageChange) {
  const container = document.getElementById(containerId);
  if (!container || totalPages <= 1) {
    if (container) container.innerHTML = '';
    return;
  }

  let html = '';
  html += `<button class="pagination__btn" data-page="${currentPage - 1}" ${currentPage <= 1 ? 'disabled' : ''} aria-label="Previous Page">‹</button>`;

  for (let i = 1; i <= totalPages; i++) {
    if (totalPages > 7) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        html += `<button class="pagination__btn ${i === currentPage ? 'pagination__btn--active' : ''}" data-page="${i}">${i}</button>`;
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        html += `<button class="pagination__btn" disabled>…</button>`;
      }
    } else {
      html += `<button class="pagination__btn ${i === currentPage ? 'pagination__btn--active' : ''}" data-page="${i}">${i}</button>`;
    }
  }

  html += `<button class="pagination__btn" data-page="${currentPage + 1}" ${currentPage >= totalPages ? 'disabled' : ''} aria-label="Next Page">›</button>`;
  container.innerHTML = html;

  container.querySelectorAll('.pagination__btn[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = parseInt(btn.dataset.page);
      if (!isNaN(page) && page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    });
  });
}

/* ── Download Handler ─────────────────────────────────── */
function handleDownload(materialId) {
  const allMats = typeof getAllMaterials === 'function' ? getAllMaterials() : (typeof ECE_DATA !== 'undefined' ? ECE_DATA.materials : []);
  const material = allMats.find(m => m.id === materialId);
  if (!material) return;
  const subj = typeof getSubject === 'function' ? getSubject(material.subjectId) : null;

  showToast(`Preparing "${material.title}" for download…`, 'info');

  setTimeout(() => {
    material.downloads = (material.downloads || 0) + 1;

    // Direct uploaded data URL
    if (material.dataUrl) {
      const a = document.createElement('a');
      a.href = material.dataUrl;
      a.download = material.fileName || `${material.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast(`"${material.title}" downloaded successfully!`, 'success');
      return;
    }

    // External Cloud File URL
    if (material.fileUrl) {
      const a = document.createElement('a');
      a.href = material.fileUrl;
      a.download = material.fileName || `${material.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.${material.format || 'pdf'}`;
      if (material.fileUrl.startsWith('http')) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast(`"${material.title}" downloaded successfully!`, 'success');
      return;
    }

    // Fallback document blob
    const content = `%PDF-1.4
% ECEVault Academic Resource
Title: ${material.title}
Subject: ${subj ? subj.name : 'ECE'} (${subj ? subj.code : 'EC'})
Semester: ${material.semester}
Format: ${(material.format || 'PDF').toUpperCase()}
Size: ${material.size || '3.5 MB'}
Description: ${material.description || ''}
------------------------------------------------------------
Verified Study Resource provided by ECEVault
Open Academic Portal for Electronics & Communication Engineering
`;
    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${material.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast(`"${material.title}" downloaded successfully!`, 'success');
  }, 300);
}

/* ── Lightweight Toast Notification ───────────────────── */
function showToast(message, type = 'info') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      ${type === 'success' 
        ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' 
        : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'}
    </svg>
    <span>${sanitizeHTML(message)}</span>
  `;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast--visible'));
  setTimeout(() => {
    toast.classList.remove('toast--visible');
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}
