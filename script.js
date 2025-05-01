
function modalWindows(){
    const modal = document.getElementById('modal')
    const opener = document.getElementsByClassName('button')
    const openerTransparent = document.getElementsByClassName('button__transparent')
    const closeModal = document.querySelector(".close");
    for(i of opener){
        i.addEventListener("click", function(){
            modal.style.display = "flex";
        });
    }
    for(i of openerTransparent){
        i.addEventListener("click", function(){
            modal.style.display = "flex";
        });
    }

    closeModal.addEventListener('click', function closer(){
        modal.style.display = 'none'
    })
}    
modalWindows()


try {
    ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("footer__content--block4", {
        center: [43.2357, 76.9181], 
        zoom: 10
    });

    var myPlacemark = new ymaps.Placemark([43.2357, 76.9181], {
        balloonContent: "Бизнес-центр «Алатау Гранд»"
    });

    myMap.geoObjects.add(myPlacemark);
}
init()
} catch (error) {
    console.log("balumba");
    
}



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



const benefitsSlides = document.querySelectorAll('.slide__benefits');
const benefitsBtns = document.querySelectorAll('.benefits__bar--size');

function handleButtonClick(index) {
    for (let i = 0; i < benefitsSlides.length; i++) {
        benefitsSlides[i].classList.remove('block');
    }

    benefitsSlides[index].classList.add('block');
}

for (let i = 0; i < benefitsBtns.length; i++) {
    benefitsBtns[i].addEventListener('click', function() {
        handleButtonClick(i);
    });
}



function copyNumber() {
    // Создаём временный input
    var tempInput = document.createElement("input");
    tempInput.value = "7 777 777 7777";
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  
    // Показываем кастомный алерт
    var alertBox = document.getElementById("customAlert");
    alertBox.style.display = "block";
  
    // Скрываем алерт через 3 секунды
    setTimeout(function() {
      alertBox.style.display = "none";
    }, 3000);
  }
  
function showConfirmation() {
    var popup = document.getElementById("popupMessage");
    popup.style.display = "block";

    setTimeout(function() {
      popup.style.display = "none";
    }, 3000);
  }
  