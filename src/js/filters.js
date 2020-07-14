import ProjectGrid from './ProjectGrid';

let filters = [...document.querySelectorAll('*[data-filter]')],
    filter,
    initialLength = 0, initNum = 4,
    projectList = document.querySelector('[data-proj-list]'),
    viewBtn = document.querySelector('[data-project-btn="add"]'),
    viewBtnExpress = document.querySelector('[data-express-btn="add"]'),
    expressCases = [...document.querySelectorAll('.project__item')],
    projectItems = [...document.querySelectorAll('[data-category]')];

let pictureLoad = new ProjectGrid;
pictureLoad.calc();

let initialProjectArray = [...projectItems];
initialProjectArray.forEach((el, i) => el.setAttribute('data-sort', i));



// Обработчик показа блоков
if (viewBtn) {
  initialVisibleArr();
  viewBtn.addEventListener('click', viewBlockHandler);
} else if (viewBtnExpress) {
  initStateExpress(expressCases);
  viewBtnExpress.addEventListener('click', viewExpressCases);
}

function viewExpressCases() {
  let count = initNum + 4;

  if (count >= expressCases.length) {
    count = expressCases.length;
    viewBtnExpress.style.display = 'none';
  }

  for (initNum; initNum < count; initNum++) {
    expressCases[initNum].style.display = '';
  }
}

function initStateExpress(blocks) {
  blocks.forEach((el, i) => {
    if (i > 3) el.style.display = 'none';
  })
}

function initialVisibleArr() {
  const initArr = sortElem();
  const defaultProjects = [...document.querySelectorAll('[data-visible="true"]')];

  defaultProjects.forEach(el => el.style.display = '');

  initArr.forEach((obj, i) => {
    if (i > 0) obj.forEach(el => el.style.display = 'none');
  });

  if (initArr.length === 1) viewBtn.style.display = 'none';
}

if (filters.length > 0) {
  filters.forEach(el => el.addEventListener('click', changeStateFilters));
  filter = location.search.split('=')[1]; // находим фильтр в строке адреса

  if (filter) {
    setFilter(filter); // update
    filters.forEach(el => {
      if (el.getAttribute('data-filter') === filter) el.setAttribute('data-state', 'enable');
      else el.setAttribute('data-state', 'disable');
    });
  } else {
    filters.forEach(el => {
      if (el.getAttribute('data-filter') === `all`) el.setAttribute('data-state', 'enable');
    })
  }
}


function viewBlockHandler() {
  const initArr = sortElem(); // массив разделенный на секции
  let length = initArr.length - 1; // количество итераций открытия

  if (initialLength < length) {
    initialLength += 1;
    initArr[initialLength].forEach(el => el.style.display = '');
    if (initialLength === length) viewBtn.style.display = 'none';
  }
}


function changeStateFilters(evt) {
  evt.preventDefault();
  let clickFilter =  this.getAttribute('data-filter');

  initialLength = 0;
  viewBtn.style.display = '';
  filters.forEach(el => el.setAttribute('data-state', 'disable'));
  this.setAttribute('data-state', 'enable');

  if (clickFilter === 'all') {
    gsap.to(projectList, { opacity: 0, onComplete: () => {
      projectItems.forEach( el => el.setAttribute('data-visible', 'true') );
      
      setDefaultMassive(initialProjectArray); // начальная сортировка

      gsap.to(projectList, { opacity: 1, duration: 0.5});
      pictureLoad.calc();
      initialVisibleArr();
    }});

    window.history.replaceState(clickFilter, 'data-filter', `${location.pathname}`);
  } else {
    window.history.replaceState(clickFilter, 'filter', `${location.pathname}?filter=${clickFilter}`);
    setFilter(clickFilter, evt);
  }
}

function setFilter(clickFilter, evt = undefined) {
  let visibleItems = projectItems.filter(item => item.getAttribute('data-category').split('||').includes(clickFilter)); // Элементы, которые надо показать (другие скрыть)
  let customDuration = 0;

  if (evt) customDuration = 0.5;

  // Добавление порядка для сортировки
  projectItems.forEach(el => el.setAttribute('data-sort', 2));

  visibleItems.forEach(el => {
    if (el.getAttribute('data-flagman') === clickFilter) el.setAttribute('data-sort', 0);
    else el.setAttribute('data-sort', 1);
  });

  gsap.to(projectList, { opacity: 0, duration: customDuration, onComplete: () => {
    projectItems.forEach(el => el.setAttribute('data-visible', 'false'));
    visibleItems.forEach(el => el.setAttribute('data-visible', 'true'));

    sortProject(projectItems);

    gsap.to(projectList, { opacity: 1, duration: 0.5});
    pictureLoad.calc();
    initialVisibleArr();
  }});
}

function setDefaultMassive(arr) {
  let parent = arr[0].parentNode;
  parent.innerHTML = '';
  arr.forEach(el => parent.appendChild(el));
}

// Функция сортировки дом-элементов
function sortProject(items, filter) {
  let itemsArray = [];
  let parent = items[0].parentNode;

  for (let i = 0; i < items.length; i++) {
    itemsArray.push(parent.removeChild(items[i]));
  }

  itemsArray.sort(function(a, b) {
    let numA = Number(a.getAttribute('data-sort'));
    let numB = Number(b.getAttribute('data-sort'));

    if (numA < numB) return -1;
    if (numA > numB) return 1;
    return 0;
  })
  .forEach(function(node) {
    parent.appendChild(node)
  });
}

///////////////
function sortElem() {
    // init variable
    let itm = [...document.querySelectorAll('[data-visible="true"]')],
        elem = [];
    // body function
    first();
    next();
    // first section
    function first() {
        // add element
        elem[0] = [];
        for(let i = 0; i <= 7; i++){
            elem[0].push(itm[i]);
        }
    }
    // next section
    function next() {
        // calc number cycle
        let nextnum = (itm.length - 8) / 6;
        // transform number
        nextnum = Math.ceil(nextnum);
        // add element
        for(let i = 1; i <= nextnum; i++) {
            elem[i] = [];
            for(let n = i * 6 + 2; n <= i * 6 + 7; n++){
                if(itm[n] !== undefined){
                    elem[i].push(itm[n]);
                }
            }
        }
    }

    return elem;
}