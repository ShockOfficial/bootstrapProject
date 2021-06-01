$('.team-carousel').slick({
    arrows: false,
    autoplaySpeed: 2300,
    autoplay: true,
    mobileFirst: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 766,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }
    ]
});