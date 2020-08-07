let expressBlock = document.querySelector('[data-story="express"]');

if (expressBlock && window.matchMedia("(min-width: 992px)").matches) {
  let imageCursor = document.querySelector('[data-image="express-arrow"]'),
      wrapperStories = document.querySelector('.view__wrapper--story'),
      widthHalfImage = imageCursor.getBoundingClientRect().width / 2,
      heightHalfImage = imageCursor.getBoundingClientRect().height / 2,
      expressBlockWidth = 0;
  const LEFT_CURSOR = `assets/images/express-arrow-left.svg`,
      RIGHT_CURSOR = `assets/images/express-arrow-right.svg`;

  if (wrapperStories) expressBlockWidth = expressBlock.getBoundingClientRect().width / 2; // additional value for Story 
  expressBlock.addEventListener('mousemove', cursorChange); 
  expressBlock.addEventListener('mouseleave', cursorReset); 

  function cursorChange(evt) {
    evt.preventDefault();
    let target = evt.target;

    imageCursor.style.display = 'block';
    imageCursor.style.top = `${evt.layerY - heightHalfImage}px`;
    imageCursor.style.left = `${evt.layerX - widthHalfImage + expressBlockWidth}px`;

    // Проверка показа курсора
    if (!imageCursor.getAttribute('src')) {
      if (target.classList.contains('view__image-right')) imageCursor.src = RIGHT_CURSOR;
      else if (target.classList.contains('view__image-left')) imageCursor.src = LEFT_CURSOR;
    } else {
      if (target.classList.contains('view__image-right') && imageCursor.getAttribute('src') === `${LEFT_CURSOR}`) imageCursor.src = RIGHT_CURSOR;
      else if (target.classList.contains('view__image-left') && imageCursor.getAttribute('src') === `${RIGHT_CURSOR}`) imageCursor.src = LEFT_CURSOR;
      else return;
    }
  }

  function cursorReset() {
    imageCursor.style.display = 'none';
    imageCursor.src = '';
  }
}

