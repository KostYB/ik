"use strict";

document.addEventListener('DOMContentLoaded', function () {
  $('[data-scroll]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#' + $(this).attr('data-scroll')).offset().top
    }, 500, 'linear');
  });
  $('.js-feedback-show').on('click', function () {
    $('.js-feedback-container').slideDown(750);
    $('.js-ft-header').hide(0);
  });
  $('html').imagesLoaded({
    background: true
  }, function () {
    $('body').removeClass('loading');

    if (document.querySelector('.numscroller') != null) {
      $(document).rollerInit();
      var elements = gsap.utils.toArray('.numscroller');
      elements.forEach(function (elem) {
        ScrollTrigger.create({
          trigger: elem,
          onEnter: function onEnter() {
            $(elem).scrollzip({
              showFunction: function showFunction() {
                numberRoller($(this).attr('data-slno'));
              },
              wholeVisible: false
            });
          },
          onEnterBack: function onEnterBack() {},
          onLeave: function onLeave() {}
        });
      });
    }

    ;
  });
});

function pageWidth() {
  return Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth, window.innerWidth, document.documentElement.clientWidth, document.body.clientWidth);
}

;