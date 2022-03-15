$(function () {
    $('.works-slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.12509 15.125H24.1808L16.903 7.84714L18.8472 5.90289L29.4443 16.5L18.8472 27.0971L16.903 25.1529L24.1808 17.875H4.12509V15.125Z" fill="white"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.12509 15.125H24.1808L16.903 7.84714L18.8472 5.90289L29.4443 16.5L18.8472 27.0971L16.903 25.1529L24.1808 17.875H4.12509V15.125Z" fill="white"/></svg></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    //menu 

    let btnMenu = document.querySelector('.btn-menu');
    let popupMenu = document.querySelector('.popup-menu');
    let body = document.querySelector('body');


    btnMenu.addEventListener('click', function () {
        popupMenu.classList.add('is-active');
        body.classList.add('no-scroll');
        if (popupMenu.classList.contains('is-active')) {
            body.addEventListener('keydown', function (e) {
                if (e.keyCode === 27) {
                    popupMenu.classList.remove('is-active');
                    body.classList.remove('no-scroll');
                }
            })
        }
    })

    body.addEventListener('click', function (a) {
        let target = a.target;
        if (target.classList.contains('popup__inner') || target.classList.contains('popup-close')) {
            popupMenu.classList.remove('is-active');
            body.classList.remove('no-scroll');
        }
    })

})