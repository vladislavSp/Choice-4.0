let expressContainer = document.querySelector('.view__container');

if (expressContainer) {
  let expressSlider = new Swiper(expressContainer, {
    wrapperClass: 'view__images',
    slideClass: 'view__slide',
    slidesPerView: 'auto',
    effect: 'fade',
    speed: 600,
    spaceBetween: 0,
    allowTouchMove: false,

    fadeEffect: {
      crossFade: true,
    },

    breakpoints: {
      768: {
        effect: 'fade',
        spaceBetween: 32,
      }
    },

    navigation: {
      nextEl: '.view__image-right',
      prevEl: '.view__image-left',
    },

    pagination: {
      el: '.view__paginations',
      type: 'bullets',
      clickable: true,
      bulletClass: 'view__point',
      bulletActiveClass: 'view__point--active',
      progressbarFillClass: 'allmove',
    },
  });

  let wrapperStories = document.querySelector('[story="express"]');
  let paginations = [...document.querySelectorAll('.view__point')];

  let initTime = 9000, rangeTime = 9, initSeconds = 0, newTimer; //

  wrapperStories.addEventListener('mousedown', holdStoriesHandler);
  wrapperStories.addEventListener('touchstart', holdStoriesHandler);
  expressSlider.on('slideChange', changeSlideHandler);

  let timerFunction = setTimeout(nextSlide, 0); // счетчик секунд

  function nextSlide() {
    initSeconds += 1;

    if (initSeconds > rangeTime) {
      initSeconds = 1; // переключить слайд, когда счётчик достигнет 10
      expressSlider.slideNext();
    }
    // Если холд - удалить таймер, и возобновить при удалении холда
    newTimer = setTimeout(nextSlide, 1000);
    if (expressSlider.progress === 1) clearTimeout(newTimer);
  }

  function holdStoriesHandler(e) {
    clearTimeout(newTimer);

    paginations[expressSlider.activeIndex].classList.add('paused');

    if (e.type === 'touchstart') {
      document.addEventListener('touchend', playStoriesHandler);
      wrapperStories.removeEventListener('touchstart', holdStoriesHandler);
    } else {
      document.addEventListener('mouseup', playStoriesHandler);
      wrapperStories.removeEventListener('mousedown', holdStoriesHandler);
    }
  }

  function playStoriesHandler(evt) {
    newTimer = setTimeout(nextSlide, 1000);

    paginations[expressSlider.activeIndex].classList.remove('paused');

    if (evt.type === 'touchend') {
      document.removeEventListener('touchend', playStoriesHandler);
      wrapperStories.addEventListener('touchstart', holdStoriesHandler);
    } else {
      document.removeEventListener('mouseup', playStoriesHandler);
      wrapperStories.addEventListener('mousedown', holdStoriesHandler);
    }
  }

  function changeSlideHandler() { // progressbar пагинации
    initSeconds = 1;
    // if (!newTimer) newTimer = setTimeout(nextSlide, 1000);
    paginations.forEach((el, index, arr) => {
      if (index < expressSlider.activeIndex) el.style.backgroundColor = 'white';
      else if (index >= expressSlider.activeIndex) el.style.backgroundColor = '';
    });
  }
}
