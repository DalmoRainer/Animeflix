$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        480: {
            items: 2,
            nav: false
        },
        768: {
            items: 4,
            nav: false,
            loop: false
        },
        1024: {
            items: 5,
            nav: true,
            loop: true
        }
    }
});