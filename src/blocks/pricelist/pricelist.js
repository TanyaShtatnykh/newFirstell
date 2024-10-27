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