$(function () {
  $('.p-slider__more-btn').on('click', function() {
    $(this).parent('.p-slider').toggleClass('p-slider--open');
    $(this).toggleClass('p-slider__more-btn--open');
  });

  let service = document.querySelectorAll('.p-slider');
  let services = [...service];
  let slides = [];

  for (let i = 0; i < services.length; i++) {
    slides = services[i].querySelectorAll('.p-slide');
    if (slides.length > 6) {
      let moreBtn = services[i].querySelector('.p-slider__more-btn');
      moreBtn.classList.add('p-slider__more-btn--visible')
    }
  }
});