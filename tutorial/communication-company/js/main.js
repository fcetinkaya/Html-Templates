/*
Project : VoipZeker Convert PSD to HTML
Website : www.voipzeker.nl
Developer : Fatih Çetinkaya
Email: fatihxcetinkaya@gmail.com
*/

jQuery(document).ready(function () {
    $(function () {
        $('#nav').slicknav();
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            responsive: true,
            slideWidth: 0,
            controls: false,
            auto: true,
            autoHover: true,
            touchEnabled: false
        });
    });
});


jQuery(document).ready(function () {
    $(function () {
        $(".regular").slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                            slidesToScroll: 1
                    }
                },
                 {
                     breakpoint: 800,
                     settings: {
                         slidesToShow: 3,
                         slidesToScroll: 1
                     }
                 },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                 {
                     breakpoint: 480,
                     settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1
                     }
                 }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    });
});


jQuery(document).ready(function () {
    $(function () {
        $("#testimonial-slider").owlCarousel({
            items: 2,
            itemsDesktop: [1000, 2],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 2],
            pagination: false,
            navigation: true,
            navigationText: ["", ""],
            autoPlay: true
        });
    });
});