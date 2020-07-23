let expressContainer = document.querySelector('.view__container'),
    backgroundDivs = [...document.querySelectorAll('.view__blur[data-active]')],
    rightButtonChangeSlider = document.querySelector('.view__image-right'),
    leftButtonChangeSlider = document.querySelector('.view__image-left');

if (expressContainer) {
  let expressSlider = new Swiper(expressContainer, {
    wrapperClass: 'view__images',
    slideClass: 'view__slide',
    slidesPerView: 'auto',
    effect: 'fade',
    speed: 200,
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

  let wrapperStories = document.querySelector('[data-story="express"]');
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

    // if (expressSlider.progress === 1) clearTimeout(newTimer);
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
  
  let endTimer;

  function changeSlideHandler() { // progressbar
    initSeconds = 1; // сброс значения для таймера newTimer на 1



    // Функция для зацикливания слайдов
    if (expressSlider.progress === 1) {
      endTimer = setTimeout(nextSlideForEnding, initTime);
    } else if (expressSlider.progress !== 1) {
      if (endTimer) clearTimeout(endTimer);
    } 

    // Добавление обработчиков переключения слайдов на всем этапе
    if (expressSlider.isBeginning) {
      leftButtonChangeSlider.addEventListener('click', changeStateOnLastSlide);
      rightButtonChangeSlider.removeEventListener('click', changeStateOnFirstSlide);
    } else if (expressSlider.isEnd) {
      rightButtonChangeSlider.addEventListener('click', changeStateOnFirstSlide);
      leftButtonChangeSlider.removeEventListener('click', changeStateOnLastSlide);
    } else if (!expressSlider.isBeginning && !expressSlider.isEnd) {
      rightButtonChangeSlider.removeEventListener('click', changeStateOnFirstSlide);
      leftButtonChangeSlider.removeEventListener('click', changeStateOnLastSlide);
    }

    backgroundDivs.forEach(el => {
      let numSlide = Number(el.dataset.active);
      if (numSlide === expressSlider.activeIndex + 1) el.dataset.state = `active`;
      else el.dataset.state = `inactive`;
    })
    
    // if (!newTimer) newTimer = setTimeout(nextSlide, 1000);
    paginations.forEach((el, index, arr) => {
      if (index < expressSlider.activeIndex) el.style.backgroundColor = 'white';
      else if (index >= expressSlider.activeIndex) el.style.backgroundColor = '';
    }); 
  }

  function nextSlideForEnding() {
    expressSlider.slideTo(0);
    initSeconds = 0; // компенсация таймеров для начального слайда
    // nextSlide();
  }

  function changeStateOnFirstSlide() {
    expressSlider.slideTo(0);
  }
  function changeStateOnLastSlide() {
    expressSlider.slideTo(expressSlider.slides.length - 1);
  }
}
