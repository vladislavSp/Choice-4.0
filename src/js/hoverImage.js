let serviceItems = Array.from(document.querySelectorAll('*[service-item]'));
let image;

serviceItems.map(el => el.addEventListener('mousemove', imageHoverHandler));

function imageHoverHandler(evt) {
  // Коорд-ты мыши внутри блока
  let coordX = evt.clientX - this.getBoundingClientRect().x;
  let coordY = evt.clientY - this.getBoundingClientRect().y;
  positioningImage(coordX, coordY, this);
}

function positioningImage(x, y, obj) {
  image = obj.querySelector('.service__image');

  let imageWidth = image.getBoundingClientRect().width;
  let imageHeight = image.getBoundingClientRect().height;

  image.style.top = `${y - (imageHeight/2)}px`;
  image.style.left = `${x - (imageWidth/2)}px`;
}
