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

  if (clickFilter === 'all') {
    gsap.to(projectList, { opacity: 0, onComplete: () => {
        projectList.style.opacity = ``;
        projectItems.forEach( el => el.style.display = '' );
      }
    });
    window.history.replaceState({clickFilter}, 'filter', `${location.pathname}`);
  } else {
    window.history.replaceState({clickFilter}, 'filter', `${location.pathname}?filter=${clickFilter}`);
    setFilter(clickFilter);
  }

  filters.forEach(el => el.setAttribute('state', 'disable'));
  this.setAttribute('state', 'enable');
}

function setFilter(clickFilter, upd = true) {
  projectItems.forEach((el, i, arr) => {
    let categArr = el.getAttribute('category').split('||').filter(elem => elem === clickFilter);
    console.log(categArr);
    if (!categArr.length) {
        gsap.to(projectList, { opacity: 0, onComplete: () => {
          arr[i].style.display = `none`;
          projectList.style.opacity = ``;
        }});
    } else {
      gsap.to(projectList, { opacity: 0, onComplete: () => {
        arr[i].style.display = ``;
        projectList.style.opacity = ``;
      }});
    }
  });
}

// function gsapOpacity(arr, param) {
//   arr.style.display = param ? `none` : ``;
//   projectList.style.opacity = `1`;
// }

// () => {
//     arr[i].style.display = `none`;
//     projectList.style.opacity = ``;
//   }
