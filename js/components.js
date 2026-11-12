function renderMaterialCard(material) {
  const subj = getSubject(material.subjectId);
  const color = getTypeColor(material.type);
  const icon = getTypeIcon(material.type);
  return `
    <div class="material-card" data-id="${material.id}">
      <div class="material-card__header">
        <div class="material-card__icon material-card__icon--${color}">${icon}</div>
        <div class="material-card__meta">
          <h3 class="material-card__title">${material.title}</h3>
          <p class="material-card__subject">${subj ? subj.name : ''}</p>
        </div>
      </div>
      <div class="material-card__badges">
        <span class="badge badge--${color}">${getTypeLabel(material.type)}</span>
        <span class="badge badge--blue">Sem ${material.semester}</span>
        ${material.unit !== 'all' ? `<span class="badge badge--amber">Unit ${material.unit}</span>` : ''}
        <span class="badge badge--green">${material.format.toUpperCase()}</span>
      </div>
      <p class="material-card__desc">${material.description}</p>
      <div class="material-card__footer">
        <a href="preview.html?id=${material.id}" class="btn btn--outline btn--sm">Preview</a>
        <button class="btn btn--primary btn--sm" onclick="handleDownload('${material.id}')">Download</button>
        <span class="material-card__size">${material.size}</span>
      </div>
    </div>
  `;
}

function renderSemesterCard(sem) {
  return `
    <a href="semester.html?sem=${sem.id}" class="semester-card">
      <div class="semester-card__icon">${sem.id}</div>
      <div class="semester-card__label">${sem.label}</div>
      <div class="semester-card__count">${sem.subjects.length} Subjects</div>
      <span class="semester-card__link">View Subjects →</span>
    </a>
  `;
}

function renderFilters(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const showSemester = options.showSemester !== false;
  const showType = options.showType !== false;
  let html = '<div class="filters" id="filterControls">';
  if (showSemester) {
    html += `<select class="filter-select" id="filterSemester" data-filter="semester"><option value="">All Semesters</option>${ECE_DATA.semesters.map(s => `<option value="${s.id}">${s.label}</option>`).join('')}</select>`;
  }
  if (showType) {
    html += `<select class="filter-select" id="filterType" data-filter="type"><option value="">All Types</option><option value="notes">Notes</option><option value="paper">Question Papers</option><option value="lab">Lab Manuals</option></select>`;
  }
  html += '</div>';
  container.innerHTML = html;
}

function renderBreadcrumbs(containerId, crumbs) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = crumbs.map((crumb, i) => i === crumbs.length - 1 ? `<span>${crumb.label}</span>` : `<a href="${crumb.href}">${crumb.label}</a><span class="breadcrumbs__sep">›</span>`).join('');
}

function renderPagination(containerId, currentPage, totalPages, onPageChange) {
  const container = document.getElementById(containerId);
  if (!container || totalPages <= 1) { if (container) container.innerHTML = ''; return; }
  let html = '';
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="pagination__btn ${i === currentPage ? 'pagination__btn--active' : ''}" data-page="${i}">${i}</button>`;
  }
  container.innerHTML = html;
  container.querySelectorAll('.pagination__btn').forEach(btn => {
    btn.addEventListener('click', () => onPageChange(parseInt(btn.dataset.page)));
  });
}

function handleDownload(materialId) {
  const material = ECE_DATA.materials.find(m => m.id === materialId);
  if (!material) return;
  const subj = getSubject(material.subjectId);
  showToast(`Downloading "${material.title}"…`, 'info');
  setTimeout(() => {
    const blob = new Blob([`ECEVault Resource:\n${material.title}\nSubject: ${subj ? subj.name : 'ECE'}\nSemester: ${material.semester}`], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${material.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Downloaded successfully!`, 'success');
  }, 300);
}

function showToast(message, type = 'info') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast--visible'));
  setTimeout(() => {
    toast.classList.remove('toast--visible');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}
