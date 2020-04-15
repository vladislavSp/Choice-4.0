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

    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
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

  expressSlider.on('slideChange', changeSlideHandler);

  function changeSlideHandler() { // progressbar пагинации
    let paginations = Array.from(document.querySelectorAll('.view__point'));

    paginations.map((el, index, arr) => {
      if (index < expressSlider.activeIndex) el.style.backgroundColor = 'white';
      else if (index >= expressSlider.activeIndex) el.style.backgroundColor = '';
    });
  }
}
