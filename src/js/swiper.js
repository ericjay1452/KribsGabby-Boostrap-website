const swiper = new Swiper('.swiper', {
    speed : 500,
    direction : 'vertical',
    zoom : true,
    zoom : {
        maxRation : 4,
    },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop : true,
    coverflowEffect: {
      rotate: 50,
      stretch: 5,
      depth: 10,
      modifier: 1,
      slideShadows: true,
      scale : 2,
    },
    autoplay : {
      delay : 2000,
      pauseOnMouseEnter: true,
    },

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

});