"use strict"

let pageSlider = new Swiper('slider', {
    speed: 1000,
    scrollbar:{
        el: ".slider__scrolbar",
        draggable: true
    },
    breakpoints: {
        "320": {
            slidesPerView:1,
            centeredSlides: false
        },
        "922": {
            slidesPerView:2,
            centeredSlides: true
        }
    }
});