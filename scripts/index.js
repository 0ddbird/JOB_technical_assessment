const navIconGreen = "<img class='arrow-green' src='../../assets/arrow.svg'/>"
const navIconWhite = "<img class='arrow-white' src='../../assets/arrow-white.svg'/>"

const navText = [`<div class='nav-button prev owl-prev'>${navIconGreen}${navIconWhite}</div>`, `<div class='nav-button next owl-next'>${navIconGreen}${navIconWhite}</div>`]


$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
        nav: true,
        loop: true,
        margin: 5,
        stagePadding: 30,
        dots: false,
        center: false,
        navText,
        responsive: {
            0: {
                nav: true,
                items: 1,
                loop: true,
            },
            600: {
                nav: true,
                items: 2
            },
            1000: {
                nav: true,
                items: 3
            }
        }
    });
});