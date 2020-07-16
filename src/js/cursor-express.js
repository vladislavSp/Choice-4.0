let expressBlock = document.querySelector('[data-story="express"]');

if (expressBlock && window.matchMedia("(min-width: 992px)").matches) {
  let imageCursor = document.querySelector('[data-image="express-arrow"]'),
      wrapperStories = document.querySelector('.view__wrapper--story'),
      widthHalfImage = imageCursor.getBoundingClientRect().width / 2,
      heightHalfImage = imageCursor.getBoundingClientRect().height / 2,
      expressBlockWidth = 0;

  if (wrapperStories) expressBlockWidth = expressBlock.getBoundingClientRect().width / 2; // дополнительная поправка для обертки Story 

  const leftCursor = `assets/images/express-arrow-left.svg`,
        rightCursor = `assets/images/express-arrow-right.svg`; 

  expressBlock.addEventListener('mousemove', cursorChange); 
  expressBlock.addEventListener('mouseleave', cursorReset); 

  function cursorChange(evt) {
    evt.preventDefault();
    let target = evt.target;

    imageCursor.style.display = 'block';

    imageCursor.style.top = `${evt.layerY - heightHalfImage}px`;
    imageCursor.style.left = `${evt.layerX - widthHalfImage + expressBlockWidth}px`; //+ this.getBoundingClientRect().width

    // Проверка показа курсора
    if (!imageCursor.getAttribute('src')) {
      if (target.classList.contains('view__image-right')) imageCursor.src = rightCursor;
      else if (target.classList.contains('view__image-left')) imageCursor.src = leftCursor;
    } else {
      if (target.classList.contains('view__image-right') && imageCursor.getAttribute('src') === `${leftCursor}`) imageCursor.src = rightCursor;
      else if (target.classList.contains('view__image-left') && imageCursor.getAttribute('src') === `${rightCursor}`) imageCursor.src = leftCursor;
      else return;
    }
  }

  function cursorReset() {
    imageCursor.style.display = 'none';
    imageCursor.src = '';
  }
}

