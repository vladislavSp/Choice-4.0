let header = document.querySelector('[hr="color"]');
let positionInit = pageYOffset;

document.addEventListener('scroll', hideMenuHandler);

function hideMenuHandler(evt) {
  let heightHeader = header.getBoundingClientRect().height;
  let dif = pageYOffset - positionInit;

  if (pageYOffset < 100) dif = 40;

  if (dif > (heightHeader/2)) {
    positionInit = pageYOffset;
    header.classList.add('header--hid');
  }
  else if (dif < -10) {
    positionInit = pageYOffset;
    header.classList.remove('header--hid');
  }
}
