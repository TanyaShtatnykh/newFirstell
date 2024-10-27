



$(function () {
  $('.header__burger-btn').on('click', function() {
    $(this).toggleClass('header__burger-btn--open');
    $('.header__menu').toggleClass('header__menu--open');
  });
  $('.header__menu-link').on('click', function() {
    if ($('.header__burger-btn').hasClass('header__burger-btn--open')) {
      $('.header__burger-btn').removeClass('header__burger-btn--open');
      $('.header__menu').removeClass('header__menu--open');
    }
  })
});

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


$(function () {
  var popup = $('.popup');
  var startBtn = $('.download__button');
  var closeBtn = $('.popup__close-btn');
  var popupForm = $('.popup__form');

  /*открытие попапа*/
  $(startBtn).on('click', function () {
    $(popup).addClass('popup--open');
  });

  /*сброс всех классов до первоначального состояния*/
  function autoClose() {
    $(popup).removeClass('popup--open');
    $('.popup__info').removeClass('popup__info--hidden');
    $('.popup__succsess-text').removeClass('popup__succsess-text--visible');
    $('.popup__send-btn').removeClass('popup__send-btn--hidden');
  };

  /*закрытие попапа нажатием на крестик*/
  $(closeBtn).on('click', function () {
    autoClose();
  });

  /*обработчик отправки формы*/
  $(popupForm).on('submit', function (e) {
    e.preventDefault();
    $.ajax({
      url: this.action,
      type: this.method,
      data: $(this).serialize(),
      success: function (data) {
        /*скрываем форму*/
        $('.popup__info').addClass('popup__info--hidden');
        $('.popup__send-btn').addClass('popup__send-btn--hidden');

        /*показываем текст после отправки*/
        $('.popup__succsess-text').addClass('popup__succsess-text--visible');
        
        /*очищаем поля формы*/
        $('.popup__field').val('');

        /*автоматически скрываем попап через 3 сек*/
        setTimeout(autoClose, 3000);
      }
    });
  });
});
$(function () {
  $('.portfolio__slider').owlCarousel({
    items: 1,
    loop: false,
    autoplay: false,
    smartSpeed: 1500,
    autoHeight:true,
    infiniti: false,
    navText: ["<img src='img/arrow-back.svg'>", "<img src='img/arrow-next.svg'>"],
    responsive: {
      0: {
        nav: false,
        dots: true,
      },
      576: {
        nav: true,
        dots: false,
      }
    }
  });
});

$(function () {
  $('.pricelist__container').owlCarousel({
    loop: true,
    autoplay: false,
    center: true,
    smartSpeed: 1000,
    nav: true,
    dots: false,
    navText: ["<img src='img/arrow-back.svg'>", "<img src='img/arrow-next.svg'>"],
    responsive: {
      0: {
        items: 1,
        autoHeight:true,
      },
      768: {
        items: 2,
        autoHeight:false,
      },
      992: {
        items: 3,
      }
    }
  });
});


$(function () {
  $('.reviews__slides').owlCarousel({
    loop: true,
    autoplay: false,
    smartSpeed: 1000,
    nav: true,
    dots: false,
    navText: ["<img src='img/arrow-back.svg'>", "<img src='img/arrow-next.svg'>"],
    responsive: {
      0: {
        items: 1,
        autoHeight:true,
        margin: 0,
      },
      768: {
        items: 2,
        autoHeight:false,
        margin: 20,
      },
      992: {
        items: 2,
        margin: 40,
      },
      1200: {
        items: 2,
        margin: 80,
      }
    }
  });
});

$(function () {
  $('.services__btn').on('click', function() {
    $('.service').toggleClass('service--open');
    $('.services__btn').toggleClass('services__btn--open');
  });
});



