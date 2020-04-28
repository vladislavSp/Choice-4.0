let filters = Array.from(document.querySelectorAll('*[filter="item"]'));
let projectList = document.querySelector('.projects__list');

if (filters.length > 0) filters.map(el => el.addEventListener('click', changeStateFilters));

if (projectList) projectList.style.opacity = 0;

document.addEventListener("DOMContentLoaded", () => {
  gsap.to(projectList, {opacity:1});
});

function changeStateFilters(evt) {
  evt.preventDefault();
  let href = this.getAttribute('href');

  filters.map(el => el.setAttribute('state', 'disable'));
  this.setAttribute('state', 'enable');

  gsap.to(projectList, {opacity: 0, onComplete:function(){
      // document.body.style.overflow = `hidden`;
      location.href = href;
  }});
}
