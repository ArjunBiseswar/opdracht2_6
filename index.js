window.addEventListener('load', slideshowSetup);

let slideindex = 0;
let slides;

function slideshowSetup() {
    document.getElementById('slideshow-next').addEventListener('click', slideshowNext);
    document.getElementById('slideshow-prev').addEventListener('click', slideshowPrevious);
}

function slideshowNext() {
    let slides = document.getElementsByClassName('slide');    

    slides[slideindex].classList.remove('visible');

    slideindex += 1;

    if(slideindex == slides.length) {
        slideindex = 0;
    }

    slides[slideindex].classList.add('visible');
}

function slideshowPrevious() {
    let slides = document.getElementsByClassName('slide');

    slides[slideindex].classList.remove('visible');

    slideindex -= 1;

    if(slideindex == -1) {
        slideindex = slides.length - 1;
    }

    slides[slideindex].classList.add('visible');
}