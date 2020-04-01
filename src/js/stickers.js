let stickers = Array.from(document.querySelectorAll('.univercity__sticker'));
let universityBlock = document.querySelector('.univercity');

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
  let sticker = this;
  sticker.setAttribute('state', 'active');

  document.addEventListener('mousemove', positionMouseHandler);

  function positionMouseHandler() {
    let top = event.pageY - getCoords(universityBlock).top;
    sticker.style.top = `${top - evt.offsetY}px`;
    sticker.style.left = `${event.pageX - evt.offsetX}px`;
  }

  this.addEventListener('mouseup', removeHandler);

  function removeHandler() {
    document.removeEventListener('mousemove', positionMouseHandler);
    this.removeEventListener('mouseup', removeHandler);
    sticker.setAttribute('state', '');
  }
}



document.addEventListener("DOMContentLoaded", () => {
  if (stickers.length) stickers.map(el => el.addEventListener('mousedown', moveStickerHandler));
});
