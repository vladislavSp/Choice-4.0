let filters = [...document.querySelectorAll('*[filter]')], filter,
    projectList = document.querySelector('[proj-list]'),
    viewBtn = document.querySelector('[project-btn="add"]'),
    projectItems = [...document.querySelectorAll('[category]')];
let update = false;

// ПОКАЗ БЛОКОВ
if (viewBtn) {
  viewBtn.addEventListener('click', viewBlockHandler);

  if (projectList.getAttribute('proj-list') === 'express' && projectList.children.length <= 4) viewBtn.style.display = 'none';
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

function viewBlockHandler() {
  stateVisibleProject(true);
}

function changeStateFilters(evt) {
  evt.preventDefault();

  let clickFilter =  this.getAttribute('filter');

  filters.forEach(el => el.setAttribute('state', 'disable'));
  this.setAttribute('state', 'enable');

  if (clickFilter === 'all') {
    gsap.to(projectList, { opacity: 0, onComplete: () => {
      projectItems.forEach( el => el.setAttribute('visible', 'true') );
      gsap.to(projectList, { opacity: 1, duration: 0.5});
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

  gsap.to(projectList, { opacity: 0, duration: 0.5, onComplete: () => {
    projectItems.forEach(el => el.setAttribute('visible', 'false'));
    visibleItems.forEach(el => el.setAttribute('visible', 'true'));
    gsap.to(projectList, { opacity: 1, duration: 0.5});
  }});

  stateVisibleProject(true);
}

function stateVisibleProject(f) {
  projectList.setAttribute('visible-list', `${f}`);
  viewBtn.style.display = f ? `none` : ``;
}
