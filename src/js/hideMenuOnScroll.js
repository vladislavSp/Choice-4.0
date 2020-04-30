let header = document.querySelector('.header');
let positionInit = pageYOffset;

document.addEventListener('scroll', hideMenuHandler);

function hideMenuHandler(evt) {
  let dif = pageYOffset - positionInit;

  if (dif > 50) {
    positionInit = pageYOffset;
    header.classList.add('header--hid');
  }
  else if (dif < -10) {
    positionInit = pageYOffset;
    header.classList.remove('header--hid');
  }
}
