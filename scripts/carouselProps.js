const navIconGreen = "<img class='arrow-green' src='./assets/arrow.svg'/>"
const navIconWhite = "<img class='arrow-white' src='./assets/arrow-white.svg'/>"
const navText = [`<div class='nav-button prev owl-prev'>${navIconGreen}${navIconWhite}</div>`, `<div class='nav-button next owl-next'>${navIconGreen}${navIconWhite}</div>`]
const carouselProps = {
    nav: true,
    loop: true,
    dots: false,
    center: false,
    navText,
    responsive: {
        0: {
            nav: true,
            items: 1,
            loop: true
        },
        961: {
            nav: true,
            stagePadding: 40,
            items: 2
        },
        1281: {
            nav: true,
            items: 3,
            stagePadding: 10
        }
    }
}

export default carouselProps