let stickers = Array.from(document.querySelectorAll('[sticker="item"]'));
let universityBlock = document.querySelector('[sticker-block="flag"]');
let bodyScrollHeight = document.body.scrollHeight;

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
  evt.preventDefault();
  let type = evt.type;
  let offsetX, offsetY;

  if (type === 'mousedown') {
    offsetX = evt.offsetX; // координаты щелчка на стикере
    offsetY = evt.offsetY;
  } else if (type === 'touchstart') {
    console.log(evt.touches[0].screenY, evt.touches[0].clientY);
    offsetX = evt.touches[0].pageX - evt.touches[0].target.offsetLeft;
    offsetY = evt.touches[0].pageY - evt.touches[0].pageY;
  }

  // console.log(offsetX, offsetY);
  if (type === 'mousedown') {
    document.addEventListener('mousemove', positionMouseHandler);
    document.addEventListener('mouseup', removeHandler); // this
  } else if (type === 'touchstart') {
    document.addEventListener('touchmove', positionMouseHandler);
    document.addEventListener('touchend', removeHandler); // this
  }

  stickers.forEach(el => {
    if (el.getAttribute('state') === 'none') {
      el.removeEventListener('mousedown', moveStickerHandler);
      if (type === 'touchstart') el.removeEventListener('touchstart', moveStickerHandler);
    }
  });

  let sticker = this;
  this.setAttribute('state', 'active');

  function positionMouseHandler(event) {
    let leftStopValue = document.body.getBoundingClientRect().width - sticker.getBoundingClientRect().width;

    // if (type === 'touchstart') console.log(event.touches[0].pageY);

    let top = event.pageY - getCoords(universityBlock).top;
    let stopBottomValue = bodyScrollHeight - getCoords(universityBlock).top - sticker.getBoundingClientRect().height;

// console.log(leftStopValue, top, stopBottomValue);

    // Нижняя граница документа для стикера
    if ((top - offsetY) > stopBottomValue) sticker.style.top = stopBottomValue;
    else sticker.style.top = `${top - offsetY}px`;

    // Позиционирование стикера внутри границ документа
    if ((event.pageX - offsetX) < 0) sticker.style.left = 0;
    else if ((event.pageX - offsetX) > leftStopValue) sticker.style.left = leftStopValue;
    else sticker.style.left = `${event.pageX - offsetX}px`;
  }

  function removeHandler() {
    if (type === 'mousedown') {
      document.removeEventListener('mousemove', positionMouseHandler);
      document.removeEventListener('mouseup', removeHandler); // sticker
    } else if (type === 'touchstart') {
      document.removeEventListener('touchmove', positionMouseHandler);
      document.removeEventListener('touchend', removeHandler); // sticker
    }

    sticker.setAttribute('state', 'none');

    stickers.forEach(el => {
      if (el.getAttribute('state') === 'none') {
        el.addEventListener('mousedown', moveStickerHandler);
        el.addEventListener('touchstart', moveStickerHandler);
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (stickers.length) stickers.forEach(el => el.addEventListener('mousedown', moveStickerHandler));

  if (window.matchMedia("(max-width: 991px)").matches) {
    stickers.forEach(el => el.addEventListener('touchstart', moveStickerHandler));
  }
});
