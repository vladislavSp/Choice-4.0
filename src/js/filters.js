let filters = [...document.querySelectorAll('*[data-filter]')], filter,
    projectList = document.querySelector('[data-proj-list]'),
    viewBtn = document.querySelector('[data-project-btn="add"]'),
    projectItems = [...document.querySelectorAll('[data-category]')];
// let update = false;

// ПОКАЗ БЛОКОВ
if (viewBtn) {
  viewBtn.addEventListener('click', viewBlockHandler);

  if (projectList.getAttribute('data-proj-list') === 'express' && projectList.children.length <= 4) viewBtn.style.display = 'none';
}

if (filters.length > 0) {
  filters.forEach(el => el.addEventListener('click', changeStateFilters));

  filter = location.search.split('=')[1];

  if (filter) {
    setFilter(filter); //, update
    filters.forEach(el => {
      if (el.getAttribute('data-filter') === filter) el.setAttribute('data-state', 'enable');
      else el.setAttribute('data-state', 'disable');
    });
  }
}

function viewBlockHandler() {
  stateVisibleProject(true);
}

function changeStateFilters(evt) {
  evt.preventDefault();

  let clickFilter =  this.getAttribute('data-filter');

  filters.forEach(el => el.setAttribute('data-state', 'disable'));
  this.setAttribute('data-state', 'enable');

  if (clickFilter === 'all') {
    gsap.to(projectList, { opacity: 0, onComplete: () => {
      projectItems.forEach( el => el.setAttribute('data-visible', 'true') );
      gsap.to(projectList, { opacity: 1, duration: 0.5});
    }});
    window.history.replaceState(clickFilter, 'data-filter', `${location.pathname}`);
    stateVisibleProject(false);
  } else {
    window.history.replaceState(clickFilter, 'filter', `${location.pathname}?filter=${clickFilter}`);
    setFilter(clickFilter);
  }
}

function setFilter(clickFilter, upd = true) {
  let visibleItems = projectItems.filter(item => item.getAttribute('data-category').split('||').includes(clickFilter)); // Элементы, которые надо показать (другие скрыть)

  gsap.to(projectList, { opacity: 0, duration: 0.5, onComplete: () => {
    projectItems.forEach(el => el.setAttribute('data-visible', 'false'));
    visibleItems.forEach(el => el.setAttribute('data-visible', 'true'));
    gsap.to(projectList, { opacity: 1, duration: 0.5});
  }});

  stateVisibleProject(true);
}

function stateVisibleProject(f) {
  projectList.setAttribute('data-visible-list', `${f}`);
  viewBtn.style.display = f ? `none` : ``;
}
