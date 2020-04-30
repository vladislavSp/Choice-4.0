let header = document.querySelector('[hr="color"]');
let positionInit = pageYOffset;

document.addEventListener('scroll', hideMenuHandler);

function hideMenuHandler(evt) {
  let dif = pageYOffset - positionInit;

  if (pageYOffset < 100) dif = 49;

  if (dif > 50) {
    positionInit = pageYOffset;
    header.classList.add('header--hid');
  }
  else if (dif < -10) {
    positionInit = pageYOffset;
    header.classList.remove('header--hid');
  }
}
