let filters = Array.from(document.querySelectorAll('*[filter="item"]'));
let projectList = document.querySelector('[proj-list]');

if (filters.length > 0) filters.map(el => el.addEventListener('click', changeStateFilters));

if (projectList) {
  projectList.style.opacity = 0;

  if (localStorage.scroll) window.scrollTo(0, Number(localStorage.scroll));

  document.addEventListener("DOMContentLoaded", () => {
    gsap.to(projectList, {opacity:1});
  });
}

function changeStateFilters(evt) {
  evt.preventDefault();

  localStorage.setItem('scroll', `${pageYOffset}`);

  let href = this.getAttribute('href');

  filters.forEach(el => el.setAttribute('state', 'disable'));
  this.setAttribute('state', 'enable');

  gsap.to(projectList, {opacity: 0, onComplete: () => location.href = href});
}
