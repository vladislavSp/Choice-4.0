let filters = Array.from(document.querySelectorAll('*[filter="item"]'));

if (filters.length > 0) filters.map(el => el.addEventListener('click', changeStateFilters));

function changeStateFilters() {
  filters.map(el => el.setAttribute('state', 'disable'));
  this.setAttribute('state', 'enable');
}
