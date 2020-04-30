let stickers = Array.from(document.querySelectorAll('[sticker="item"]'));
let universityBlock = document.querySelector('[sticker-block="flag"]');

// ВЫЧИСЛЕНИЕ КООРДИНАТ БЛОКА ОТНОСИТЕЛЬНО ДОКУМЕНТА
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

// ПОЗИЦИЯ МЫШИ
function moveStickerHandler(evt) {
  let offsetX = evt.offsetX; // координаты щелчка
  let offsetY = evt.offsetY;

  // document.addEventListener('mouseleave', mouseLeaveHandler); // мышь за пределами документа
  document.addEventListener('mousemove', positionMouseHandler);
  document.addEventListener('mouseup', removeHandler); // this

  stickers.forEach(el => {
    if (el.getAttribute('state') === 'none') el.removeEventListener('mousedown', moveStickerHandler);
  });

  let sticker = this;
  this.setAttribute('state', 'active');

  function positionMouseHandler(event) {
    let stopLeftValue = document.body.getBoundingClientRect().width - sticker.getBoundingClientRect().width;
    let top = event.pageY - getCoords(universityBlock).top;
    sticker.style.top = `${top - offsetY}px`;

console.log(event.pageX, offsetX);

    // Позиционирование стикера внутри документа (границы)
    if ((event.pageX - offsetX) < 0) sticker.style.left = 0;
    else if ((event.pageX - offsetX) > stopLeftValue) sticker.style.left = stopLeftValue;
    else sticker.style.left = `${event.pageX - offsetX}px`;
  }

  function removeHandler() {
    document.removeEventListener('mousemove', positionMouseHandler);
    document.removeEventListener('mouseup', removeHandler); // sticker
    sticker.setAttribute('state', 'none');

    stickers.forEach(el => {
      if (el.getAttribute('state') === 'none') el.addEventListener('mousedown', moveStickerHandler);
    });
  }

  function mouseLeaveHandler(evt) {
    if (evt.type === 'mouseleave') console.log(evt.type);
    removeHandler();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (stickers.length) stickers.forEach(el => el.addEventListener('mousedown', moveStickerHandler));
});
