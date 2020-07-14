let expressBlock = document.querySelector('[data-story="express"]');

if (expressBlock) {
  let imageCursor = document.querySelector('[data-image="express-arrow"]');
  expressBlock.addEventListener('mousemove', cursorChange);

  function cursorChange(evt) {
    let target = evt.target;

    imageCursor.style.top = evt.offsetY;
    imageCursor.style.left = evt.offsetX;
  
    if (target.classList.contains('view__image-right')) console.log(`RIGHT`);
    if (target.classList.contains('view__image-left')) console.log(`LEFT`);

    expressBlock.addEventListener('mouseleave', cursorReset);
  }

  function cursorReset() {
    console.log('RESET');
  }
}

