let serviceItems = Array.from(document.querySelectorAll('*[service-item]'));
let image;

if (serviceItems.length) {
  serviceItems.forEach(el => {
    el.addEventListener('mousemove', imageHoverHandler);
    el.addEventListener('mouseleave', viewTextHandler);
  });
}

function imageHoverHandler(evt) {
  // Коорд-ты мыши внутри блока
  let coordX = evt.clientX - this.getBoundingClientRect().x;
  let coordY = evt.clientY - this.getBoundingClientRect().y;
  positioningImage(coordX, coordY, this);
  hiddenText(this);
}

function positioningImage(x, y, obj) {
  image = obj.querySelector('.service__image');

  let imageWidth = image.getBoundingClientRect().width;
  let imageHeight = image.getBoundingClientRect().height;

  image.style.top = `${y - (imageHeight/2)}px`;
  image.style.left = `${x - (imageWidth/2)}px`;
}

function hiddenText(obj) {
  obj.querySelector('.service__desc').style.opacity = '0';
}

function viewTextHandler() {
  console.log(this);
  this.querySelector('.service__desc').style.opacity = '';
}
