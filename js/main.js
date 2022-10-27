"use strict"

// array che contiene le immagini
const images = [`img/01.jpg`, `img/02.jpg`, `img/03.jpg`, `img/04.jpg`, `img/05.jpg`,];



// ciclo for che va a ciclare l'array images
for (let i = 0; i < images.length; i++){

    // creo i div che contengono le imagini
    const element = document.createElement(`div`);

    // inserisco le immagini dentro i div
    element.innerHTML =`<img src="${images[i]}" alt="img">`; 

    // do la classe "item" a tutti i div
    element.classList.add("item");

    // metto i div nell'html
    document.getElementById("carousel-container").append(element);
}

// assegno al primo div la classe "active"
document.querySelector(".item").classList.add("active");




// event listener
const up = document.getElementById("up");
const down = document.getElementById("down");

// variabile sentinella
let active = 0;

// seleziono tutti gli items
const items = document.querySelectorAll(".item")

up.addEventListener("click", function(){
    items[active].classList.remove("active");
    if (active === 0 ){
        active = images.length - 1;
    } else {
        active--;
    }
    items[active].classList.add("active");
});

down.addEventListener("click", function() {
    items[active].classList.remove("active");
    if (active === images.length - 1){
        active = 0;
    } else {
        active++;
    }
    items[active].classList.add("active");

    // const itemActive = document.querySelector(".item.active");
    // const nextItem = itemActive.nextElementSibling;
    // itemActive.classList.remove("active");
    // if (nextItem != null){
    //    nextItem.classList.add("active"); 
    // } else{
    //     document.querySelector(".item").classList.add("active");
    // }
});















