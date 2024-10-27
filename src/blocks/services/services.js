$(function () {
  $('.services__btn').on('click', function() {
    $('.service').toggleClass('service--open');
    $('.services__btn').toggleClass('services__btn--open');
  });
});