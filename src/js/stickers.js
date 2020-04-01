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
  console.log(evt.offsetX, evt.offsetY);
  console.log(this.getBoundingClientRect());

  document.addEventListener('mousemove', positionMouseHandler);

  function positionMouseHandler() {
    let top = event.pageY - getCoords(universityBlock).top;
    sticker.style.top = `${top}px`;
    sticker.style.left = `${event.pageX}px`;
  }

  this.addEventListener('mouseup', removeHandler);

  function removeHandler() {
    document.removeEventListener('mousemove', positionMouseHandler);
  }
}



document.addEventListener("DOMContentLoaded", () => {
  if (stickers.length) stickers.map(el => el.addEventListener('mousedown', moveStickerHandler));
});
