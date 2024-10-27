const childrenSwiper = new Swiper('.p-slide__slider', {
  navigation: {
    nextEl: '.p-slide__arrow--next',
    prevEl: '.p-slide__arrow--prev'
  },
  loop: true,
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
  },
});