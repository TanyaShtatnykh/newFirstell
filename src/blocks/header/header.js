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