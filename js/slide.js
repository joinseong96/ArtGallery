$(function () {
  var main_slide = new Swiper(".main_swiper", {
    slidesPerView: "auto",
    loop: true,
    loopedSlides: 1,
    loopAdditionalSlides: 5,
    spaceBetween: 10,
    centeredSlides: true,
    speed: 800,
    autoplay: {
      delay: 3500,
    },
    pagination: {
      el: ".main_swiper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      700: {
        spaceBetween: 20,
      },
      1680: {
        spaceBetween: 28,
      },
    },
  });
  var exhib_first = new Swiper(".exhib_first", {
    slidesPerView: 1.15,
    spaceBetween: 10,
    centeredSlides: true,
    speed: 800,
    autoplay: {
      delay: 3500,
    },
    pagination: {
      el: ".exhib_first .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      700: {
        slidesPerView: 1.178,
        spaceBetween: 30,
      },
      1680: {
        slidesPerView: 1.193,
        spaceBetween: 60,
      },
    },
  });
  var exhib_second = new Swiper(".exhib_second", {
    slidesPerView: 1,
    loop: true,
    speed: 700,
  });
  exhib_first.controller.control = exhib_second;
  exhib_second.controller.control = exhib_first;

  var work_place_slide = new Swiper(".artist_about .bottom", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 15,
    freeMode: true,
    loopedSlides: 1,
    loopAdditionalSlides: 5,
    breakpoints: {
      700: {
        spaceBetween: 50,
      },
      1680: {
        spaceBetween: 100,
      },
    },
  });

  var selected_slide = new Swiper(".selected", {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    loopedSlides: 1,
    loopAdditionalSlides: 5,
    centeredSlides: true,
    speed: 800,
    autoplay: {
      delay: 3500,
    },
    pagination: {
      el: ".selected .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      700: {
        spaceBetween: 50,
      },
      1680: {
        spaceBetween: 100,
      },
    },
  });
});
