$('.js-slider').slick({
    dots:true,
    arrows:false,
    dotsClass:'slider-dots',
    slideToShow: 1,
    slideToSkroll: 1,
    mobileFirst:true,
    responsive: [
        {
        breakpoint:768,
        settings:{
            slidesToShow: 4,
        }
        }
    ]
});
