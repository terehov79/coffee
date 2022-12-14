(function ($) {

  $(document).ready(function () {
    // TODO SVG Sprite init in IE/SAFARI
    svg4everybody();
  });

  // TODO Select global init
  $('.select-gl__value').on('click', function (event) {
    event.preventDefault();
    if ($(this).hasClass('select__active')) {
      $(this).toggleClass('select__active').next().fadeToggle(100);
    } else {
      $('.select-gl__value').removeClass('select__active').next().fadeOut(100);
      $(this).toggleClass('select__active').next().fadeToggle(100);
      
    }
  });

  $('.select-gl__item').on('click', function () {
    $(this).parents('.select-gl').find('.selected').removeClass('selected');
    $(this).addClass('selected');
    $(this).parents('.select-gl').find('.select-gl__value span').text($(this).text());
    $('.select-gl__value').removeClass('select__active').next().fadeOut(1000);
  });

  // TODO Select with icon items
  $('.select-fix-js .select-gl__item').on('click', function () {
    let icon = $(this).find('.icons-js').clone();
    $(this).parents('.select-gl__this').children('.select-gl__value').find('.icons-js').remove();
    $(this).parents('.select-gl__this').children('.select-gl__value').prepend(icon);
  });

  // TODO Wrapper click close select
  $('.wrapper').on('click', function () {
    $('.select-gl__value').removeClass('select__active').next().fadeOut(100);
  });

  $('.select-gl__this').on('click', function (event) {
    event.stopPropagation();
  });

  // TODO Rating init
  let stars = document.querySelectorAll(".stars");
  for (let i = 0; i < stars.length; i++) {
    let star = parseInt(stars[i].getAttribute('data-stars'));
    raterJs({
      max: 5,
      starSize: 25,
      rating: star,
      readOnly: true,
      element: stars[i]
    });
  }

   // TODO Rating init
   let circles = document.querySelectorAll(".circles");
   for (let i = 0; i < circles.length; i++) {
     let star = parseInt(circles[i].getAttribute('data-circles'));
     raterJs({
       max: 10,
       starSize: 15,
       rating: star,
       readOnly: true,
       element: circles[i]
     });
   }

  $(".swiper-container").each(function () {
    let $parent = $(this).parents('.slider');
    new Swiper(this, {
      speed: 1000,
      spaceBetween: 25,
      slidesPerView: 3,
      loop: false,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      navigation: {
        nextEl: $parent.find(".swiper-next_btn")[0],
        prevEl: $parent.find(".swiper-prev_btn")[0]
      },
      // pagination: {
      //   el: $parent.find(".swiper-pagination")[0],
      //   type: 'fraction',
      // },
    });
  });

  $(".swiper-container").each(function () {
    let $parent = $(this).parents('.instagram__slider');
    new Swiper(this, {
      speed: 1000,
      spaceBetween: 25,
      slidesPerView: 3,
      // slidesPerColumn: 3,
      // grid: {
      //   rows: 2,
      // },
      loop: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      navigation: {
        nextEl: $parent.find(".swiper-next_btn")[0],
        prevEl: $parent.find(".swiper-prev_btn")[0]
      },
      pagination: {
        el: $parent.find(".swiper-pagination")[0],
        type: 'fraction',
      },
    });
  });


$('.header__burger').on('click', function(){
  $('.header__menu').toggleClass('open');
});

$('.close').on('click', function(){
  $('.header__menu').toggleClass('open');
});

$(window).on('scroll', function(){
  if ($(this).scrollTop() > 10) {
    $('.header--wrap').addClass('active')
  } else {
    $('.header--wrap').removeClass('active')
  }
})

})(jQuery);