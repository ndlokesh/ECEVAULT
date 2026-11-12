document.addEventListener('DOMContentLoaded', () => {
  const semNum = parseInt(getUrlParam('sem'));
  const sem = getSemester(semNum);
  if (!sem) return;
  document.title = `${sem.label} — ECEVault`;
  document.getElementById('semesterTitle').textContent = sem.label;
  renderBreadcrumbs('breadcrumbs', [{ label: 'Home', href: 'index.html' }, { label: sem.label, href: `semester.html?sem=${sem.id}` }]);
  const grid = document.getElementById('subjectGrid');
  grid.innerHTML = sem.subjects.map(subj => {
    const matCount = ECE_DATA.materials.filter(m => m.subjectId === subj.id).length;
    return `
      <a href="subject.html?id=${subj.id}" class="subject-card">
        <span class="subject-card__code">${subj.code}</span>
        <h3 class="subject-card__name">${subj.name}</h3>
        <div class="subject-card__info"><span>${subj.units} Units</span> &bull; <span>${matCount} Materials</span></div>
      </a>
    `;
  }).join('');
  const matGrid = document.getElementById('semMaterialsGrid');
  const materials = getMaterials({ semester: semNum });
  if (materials.length > 0) matGrid.innerHTML = materials.map(renderMaterialCard).join('');
  else document.getElementById('emptyState').style.display = 'block';
});
