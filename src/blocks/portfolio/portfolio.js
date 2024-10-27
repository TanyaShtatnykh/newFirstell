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
