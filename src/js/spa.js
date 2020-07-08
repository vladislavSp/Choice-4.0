let headerLinks = [...document.querySelectorAll(`*[data-href]`)];

document.body.style.opacity = 1;

headerLinks.forEach(el => el.addEventListener(`click`, redirectEffect));

function redirectEffect(evt) {
  evt.preventDefault();
  let target = this.getAttribute(`data-href`);

  document.body.style.opacity = 0;
  document.body.addEventListener(`transitionend`, redirectFunc);

  function redirectFunc() {
    window.location = target;
  }
}

// document.addEventListener('DOMContentLoaded', () => {
//     let body = document.querySelector('.body');
//     body.style.opacity = 1;
// });