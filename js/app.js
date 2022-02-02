"use strict";

document.addEventListener('DOMContentLoaded', function () {
  $('[data-scroll]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#' + $(this).attr('data-scroll')).offset().top
    }, 500, 'linear');
  });
  $('.js-feedback-area').on('click', function () {
    $('.js-feedback-animate').addClass('show');
  });
  $('html').imagesLoaded({
    background: true
  }, function () {
    if (document.querySelector('[data-color]') != null) {
      var elements = document.querySelectorAll('[data-color]');
      elements.forEach(function (elem) {});
    }

    ;
    $('body').removeClass('loading');
  });
});

function pageWidth() {
  return Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth, window.innerWidth, document.documentElement.clientWidth, document.body.clientWidth);
}

;

function color(elem, direction) {
  direction = direction || 1;
  var color = elem.getAttribute('data-color');
  document.querySelector('.js-color').style.color = color;
}