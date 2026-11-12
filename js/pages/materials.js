document.addEventListener('DOMContentLoaded', () => {
  const ITEMS_PER_PAGE = 9;
  let currentPage = 1;
  let currentFilters = {};
  renderBreadcrumbs('breadcrumbs', [{ label: 'Home', href: 'index.html' }, { label: 'Study Materials', href: 'materials.html' }]);
  renderFilters('filterContainer');
  const urlSearch = getUrlParam('search');
  if (urlSearch) currentFilters.search = urlSearch;
  renderResults();

  const searchInput = document.getElementById('materialSearch');
  if (searchInput) {
    if (urlSearch) searchInput.value = urlSearch;
    let searchTimer = null;
    searchInput.addEventListener('input', () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        currentFilters.search = searchInput.value.trim() || undefined;
        currentPage = 1;
        renderResults();
      }, 150);
    });
  }
  document.addEventListener('change', (e) => {
    if (e.target.matches('.filter-select')) {
      const key = e.target.dataset.filter;
      if (e.target.value) currentFilters[key] = e.target.value;
      else delete currentFilters[key];
      currentPage = 1;
      renderResults();
    }
  });

  function renderResults() {
    const grid = document.getElementById('materialsGrid');
    const emptyState = document.getElementById('emptyState');
    const allResults = getMaterials(currentFilters);
    const totalPages = Math.ceil(allResults.length / ITEMS_PER_PAGE);
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageResults = allResults.slice(start, start + ITEMS_PER_PAGE);
    const resultCount = document.getElementById('resultCount');
    if (resultCount) resultCount.textContent = `${allResults.length} materials found`;
    if (pageResults.length === 0) { 
      grid.innerHTML = ''; 
      emptyState.style.display = 'block'; 
    } else { 
      emptyState.style.display = 'none'; 
      grid.innerHTML = pageResults.map(renderMaterialCard).join(''); 
    }
    renderPagination('pagination', currentPage, totalPages, (page) => { 
      currentPage = page; 
      renderResults(); 
      window.scrollTo({ top: 180, behavior: 'smooth' });
    });
  }
});
