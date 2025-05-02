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
function copyNumber() {
    var tempInput = document.createElement("input");
    tempInput.value = "7 777 777 7777";
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  

    var alertBox = document.getElementById("customAlert");
    alertBox.style.display = "block";
  

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


  
