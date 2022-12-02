import { addScrollAnimation } from './observer.js'
import carouselProps from './carouselProps.js'
import domElements from './domElements.js'

$(document).ready(function(){ $(".owl-carousel").owlCarousel(carouselProps) })
addScrollAnimation(domElements)