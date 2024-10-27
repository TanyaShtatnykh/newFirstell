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