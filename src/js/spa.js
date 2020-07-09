let headerLinks = [...document.querySelectorAll(`*[data-href]`)];
let body = document.body;

headerLinks.forEach(el => el.addEventListener(`click`, redirectEffect));
window.addEventListener(`pageshow`, pageShowHandler, false);

// body.classList.add('body--opacity');
// body.classList.remove('body--opacityFalse');

function pageShowHandler(evt) {
  evt.persisted = false;
  body.style.opacity = 1;
}


function redirectEffect(evt) {
  evt.preventDefault();
  let target = this.getAttribute(`data-href`);

  body.style.opacity = 0;
  // body.classList.remove('body--opacity');
  // body.classList.add('body--opacityFalse');

  body.addEventListener('transitionend', () => {
    window.location = target;
  });
}


// let body = document.querySelector('.body');

// document.addEventListener('DOMContentLoaded', () => {
//   setTimeout(bodyChange, 1000);
// });

// function bodyChange() {
//   body.style.opacity = 1;
// }