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
  let offsetX = evt.offsetX;
  let offsetY = evt.offsetY;

  stickers.map(el => {
    if (el.getAttribute('state') === 'none') el.removeEventListener('mousedown', moveStickerHandler);
  });

  let sticker = this;
  this.setAttribute('state', 'active');

  document.addEventListener('mousemove', positionMouseHandler);
  this.addEventListener('mouseup', removeHandler);

  function positionMouseHandler() {
    let top = event.pageY - getCoords(universityBlock).top;
    sticker.style.top = `${top - offsetY}px`;
    sticker.style.left = `${event.pageX - offsetX}px`;
  }

  function removeHandler() {
    document.removeEventListener('mousemove', positionMouseHandler);
    sticker.removeEventListener('mouseup', removeHandler);
    sticker.setAttribute('state', 'none');

    stickers.map(el => {
      if (el.getAttribute('state') === 'none') el.addEventListener('mousedown', moveStickerHandler);
    });
  }
}



document.addEventListener("DOMContentLoaded", () => {
  if (stickers.length) stickers.map(el => el.addEventListener('mousedown', moveStickerHandler));
});
