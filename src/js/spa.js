let headerLinks = [...document.querySelectorAll(`*[data-href]`)];
let body = document.body;

headerLinks.forEach(el => el.addEventListener(`click`, redirectEffect));
window.addEventListener(`pageshow`, pageShowHandler, false);


function pageShowHandler(evt) {
  evt.persisted = false;
  body.style.opacity = 1;
}


function redirectEffect(evt) {
  evt.preventDefault();
  let target = this.getAttribute(`data-href`);

  body.style.opacity = 0;

  body.addEventListener('transitionend', () => {
    window.location = target;
  });
}
