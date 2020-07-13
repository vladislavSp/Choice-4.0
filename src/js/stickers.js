let stickers = Array.from(document.querySelectorAll('[data-sticker="item"]')),
    universityBlock = document.querySelector('[data-sticker-block="flag"]'),
    bodyScrollHeight = document.body.scrollHeight,
    bodyWidth = document.body.getBoundingClientRect().width;

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
  let type = evt.type, offsetX, offsetY;

  if (type === 'mousedown') {
    offsetX = evt.offsetX; // координаты щелчка на стикере
    offsetY = evt.offsetY;
    document.addEventListener('mousemove', positionMouseHandler);
    document.addEventListener('mouseup', removeHandler); // this
  } else if (type === 'touchstart') {
    offsetX = evt.touches[0].pageX - evt.touches[0].target.offsetLeft;
    offsetY = evt.touches[0].clientY;
    document.addEventListener('touchmove', positionMouseHandler, { passive: false });
    document.addEventListener('touchend', removeHandler); // this
  }

  stickers.forEach(el => {
    if (el.getAttribute('data-state') === 'none') {
      el.removeEventListener('mousedown', moveStickerHandler);
      if (type === 'touchstart') el.removeEventListener('touchstart', moveStickerHandler);
    }
  });

  let sticker = this;
  this.setAttribute('data-state', 'active');

  function positionMouseHandler(event) {
    if (event.cancelable) event.preventDefault();

    let stickerHeight = sticker.getBoundingClientRect().height,
        stickerWidth = sticker.getBoundingClientRect().width,
        leftStopValue = bodyWidth - stickerWidth,
        topRelativeBlock = getCoords(universityBlock).top,
        top = event.pageY - topRelativeBlock,
        stopBottomValue = bodyScrollHeight - topRelativeBlock - stickerHeight;

    if (type === 'touchstart') {
      let stickerHalfWidth = stickerWidth / 2;
      leftStopValue = bodyWidth - stickerHalfWidth;
      top = event.touches[0].pageY - topRelativeBlock - (event.touches[0].target.clientHeight/2);

      sticker.style.top = `${top}px`;

      if ((event.touches[0].pageX - offsetX) < stickerHalfWidth) sticker.style.left = stickerHalfWidth;
      else if ((event.touches[0].pageX - offsetX) > leftStopValue) sticker.style.left = leftStopValue;
      else sticker.style.left = `${event.touches[0].pageX - offsetX}px`;
    } else {
      // Нижняя граница документа для стикера
      if ((top - offsetY) > stopBottomValue) sticker.style.top = stopBottomValue;
      else sticker.style.top = `${top - offsetY}px`;

      // Позиционирование стикера внутри границ документа
      if ((event.pageX - offsetX) < 0) sticker.style.left = 0;
      else if ((event.pageX - offsetX) > leftStopValue) sticker.style.left = leftStopValue;
      else sticker.style.left = `${event.pageX - offsetX}px`;
    }
  }

  function removeHandler() {
    if (type === 'mousedown') {
      document.removeEventListener('mousemove', positionMouseHandler);
      document.removeEventListener('mouseup', removeHandler); // sticker
    } else if (type === 'touchstart') {
      document.removeEventListener('touchmove', positionMouseHandler);
      document.removeEventListener('touchend', removeHandler); // sticker
    }

    sticker.setAttribute('data-state', 'none');

    stickers.forEach(el => {
      if (el.getAttribute('data-state') === 'none') {
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
