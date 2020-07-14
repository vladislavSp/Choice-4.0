let expressBlock = document.querySelector('[data-story="express"]');

if (expressBlock) {
  let imageCursor = document.querySelector('[data-image="express-arrow"]');
  expressBlock.addEventListener('mousemove', cursorChange);

  console.log(imageCursor);

  function cursorChange(evt) {
    let target = evt.target;
    imageCursor.style.display = '';

    imageCursor.style.top = `${evt.offsetY}px`;
    imageCursor.style.left = `${evt.offsetX}px`;

    // imageCursor.style.top = `${evt.offsetY}px`;
    // imageCursor.style.left = `${evt.offsetX}px`;

    // if (target.classList.contains('view__image-right')) console.log(`RIGHT`);
    // if (target.classList.contains('view__image-left')) console.log(`LEFT`);

    expressBlock.addEventListener('mouseleave', cursorReset);
  }

  function cursorReset() {
    console.log('RESET');
    imageCursor.style.display = 'none';
  }
}

