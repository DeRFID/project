const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
let currentSlideIndex = 0;

function showSlide(){
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
}

function nextSlide(){
    currentSlideIndex++;
    if(currentSlideIndex >= slides.length){
        currentSlideIndex = 0;
    }
    showSlide();
}

function previousSlide(){
    currentSlideIndex--;
    if(currentSlideIndex < 0){
        currentSlideIndex = slides.length - 1;
    }
    showSlide();
}


arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', previousSlide);


  