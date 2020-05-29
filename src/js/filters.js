let filters = [...document.querySelectorAll('*[filter]')], filter,
    projectList = document.querySelector('[proj-list]'),
    projectItems = [...document.querySelectorAll('[category]')];
let update = false;

// ПОКАЗ БЛОКОВ
let viewBtn = document.querySelector('[project-btn="add"]'),
    visibleList = document.querySelector('[visible-list]');

if (viewBtn) {
  viewBtn.addEventListener('click', viewBlockHandler);

  if (visibleList.getAttribute('proj-list') === 'express' && visibleList.children.length <= 4) viewBtn.style.display = 'none';
  if (visibleList.getAttribute('proj-list') === 'all' && visibleList.children.length <= 7) viewBtn.style.display = 'none';
}

function viewBlockHandler() {
  visibleList.setAttribute('visible-list', 'true');
  viewBtn.style.display = 'none';
}

if (filters.length > 0) {
  filters.forEach(el => el.addEventListener('click', changeStateFilters));

  filter = location.search.split('=')[1];

  if (filter) {
    setFilter(filter, update);
    filters.forEach(el => {
      if (el.getAttribute('filter') === filter) el.setAttribute('state', 'enable');
      else el.setAttribute('state', 'disable');
    });
  }
}

function changeStateFilters(evt) {
  evt.preventDefault();

  let clickFilter =  this.getAttribute('filter');

  filters.forEach(el => el.setAttribute('state', 'disable'));
  this.setAttribute('state', 'enable');

  if (clickFilter === 'all') {
    gsap.to(projectList, { opacity: 0, onComplete: () => {
      projectItems.forEach( el => el.setAttribute('visible', 'true') );
      projectList.style.opacity = ``;
    }});
    window.history.replaceState(clickFilter, 'filter', `${location.pathname}`);
    stateVisibleProject(false);
  } else {
    window.history.replaceState(clickFilter, 'filter', `${location.pathname}?filter=${clickFilter}`);
    setFilter(clickFilter);
  }
}

function setFilter(clickFilter, upd = true) {
  let visibleItems = projectItems.filter(item => item.getAttribute('category').split('||').includes(clickFilter)); // Элементы, которые надо показать (другие скрыть)

  gsap.to(projectList, { opacity: 0, onComplete: () => {
    projectItems.forEach(el => el.setAttribute('visible', 'false'));
    visibleItems.forEach(el => el.setAttribute('visible', 'true'));
    projectList.style.opacity = ``;
  }});

  stateVisibleProject(true);
}

// setHistory()
function stateVisibleProject(f) {
  projectList.setAttribute('visible-list', `${f}`);
  viewBtn.style.display = f ? `none` : ``;
}
