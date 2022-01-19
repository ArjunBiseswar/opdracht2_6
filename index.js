window.addEventListener('load', slideshowSetup);

function slideshowSetup() {
    document.getElementById('slideshow-next').addEventListener('click', slideshowNext);
}

function slideshowNext() {
    let slides = document.getElementsByClassName('slide');

    slides [0].style.display = 'none';
}