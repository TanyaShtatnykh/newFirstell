$(function () {
  var popup = $('.popup');
  var startBtn = $('.download__button');
  var closeBtn = $('.popup__close-btn');
  var popupForm = $('.popup__form');

  /*открытие попапа*/
  $(startBtn).on('click', function () {
    $(popup).addClass('popup--open');
    document.body.style.overflow = 'hidden';
  });

  /*сброс всех классов до первоначального состояния*/
  function autoClose() {
    $(popup).removeClass('popup--open');
    $('.popup__info').removeClass('popup__info--hidden');
    $('.popup__succsess-text').removeClass('popup__succsess-text--visible');
    $('.popup__send-btn').removeClass('popup__send-btn--hidden');
    document.body.style.overflow = 'auto';
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