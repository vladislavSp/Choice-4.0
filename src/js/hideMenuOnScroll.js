let headerScroll = document.querySelector('[data-hr="scroll"]'),
    positionInit = pageYOffset; // начальная прокрутка док-та

document.addEventListener('scroll', hideMenuHandler);

function hideMenuHandler(evt) {
  let heightHeader = headerScroll.getBoundingClientRect().height; // 121
  let dif = pageYOffset - positionInit; // разница текущей прокрутки с изначальной

  if (pageYOffset < heightHeader/2) dif = -1; // вначале страницы

  if (dif > 30) {
    positionInit = pageYOffset; // увел-е начальной позиции в соответствии с прокруткой
    headerScroll.classList.add('header--hid');
  } else if (dif < 0) {
    positionInit = pageYOffset;
    headerScroll.classList.remove('header--hid');
  }
}
