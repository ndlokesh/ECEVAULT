document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('semesterGrid');
  if (grid) grid.innerHTML = ECE_DATA.semesters.map(renderSemesterCard).join('');
  const featGrid = document.getElementById('featuredGrid');
  if (featGrid) featGrid.innerHTML = getMaterials({ featured: true }).slice(0, 6).map(renderMaterialCard).join('');
});
