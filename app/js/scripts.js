'use strict';

$(document).ready(function() {

  // ัะบัั
  $(".go-to").on('click',function(e){

    e.preventDefault();

    var anchor = $(this).attr("href");

    if ($(anchor).length) {
      var run = $(anchor).offset().top;
      $('body,html').stop().animate({scrollTop: run}, 1500);
    } else {
      console.warn("ID don't search!")
    }
  });

  $(".mobile-menu").on("click", function(){
    $("header nav > ul").stop().slideToggle(function(){
      if ($(this).css('display') === 'none'){
        $(this).removeAttr('style');
      }
    });
  });

  $.fn.forceNumbericOnly = function () {
    return this.each(function () {
      $(this).keydown(function (e) {
        var key = e.charCode || e.keyCode || 0;
        return (key == 8 || key == 9 || key == 46 || (key >= 37 && key <= 40) || (key >=
          48 && key <= 57) || (key >= 96 && key <= 105) || key == 107 || key ==
          109 || key == 173 || key == 61);
      });
    });
  };

  $(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) {
      $('.header').removeClass('active_menu');
    } else {
      $('.header').addClass('active_menu');
    }
  });

  $('input[type=tel]').forceNumbericOnly();

  $('.slider').slick({
    arrows: true,
  });

  $('.tabs-wrapper').each(function() {
    let ths = $(this);
    ths.find('.title').not(':first').hide();
    ths.find('.tab').click(function() {
      ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.title').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });

  $('.bestsellers-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
