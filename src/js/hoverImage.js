let serviceItems = [...document.querySelectorAll('*[data-service-item]')], image;
const desktop = window.matchMedia("(min-width: 992px)").matches;

if (serviceItems.length && desktop) {
  serviceItems.forEach(el => el.addEventListener('mousemove', imageHoverHandler));
}

function imageHoverHandler(evt) {
  // Коорд-ты мыши внутри блока
  let coordX = evt.clientX - this.getBoundingClientRect().x;
  let coordY = evt.clientY - this.getBoundingClientRect().y;
  positioningImage(coordX, coordY, this);
  // hiddenText(this);
}

function positioningImage(x, y, obj) {
  image = obj.querySelector('.service__image');
  let video = image.querySelector('video');
  // let source = image.querySelector('source');
  let src = video.getAttribute('data-src');
  
  if (!video.getAttribute('src')) {
    video.preload = 'metadata';
    video.src = src;
    video.removeAttribute('data-src');
  }

  let imageWidth = image.getBoundingClientRect().width;
  let imageHeight = image.getBoundingClientRect().height;

  image.style.top = `${y - (imageHeight/2)}px`;
  image.style.left = `${x - (imageWidth/2)}px`;
}



// ABOUT
let techItems = [...document.querySelectorAll('.tech__item')];

if (techItems.length && desktop) {
  techItems.forEach(el => el.addEventListener('mouseenter', changeSrcVideo));

  function changeSrcVideo() {
    let video = this.querySelector('video');
    video.src = video.getAttribute('data-src');
  }
}
