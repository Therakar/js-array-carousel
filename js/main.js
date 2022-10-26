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

// variabile sentinella
let active = 0;

// event listener
const up = document.getElementById("up");
const down = document.getElementById("down");

up.addEventListener("click", scrollUp);
down.addEventListener("click", scrollDown);

function scrollUp() {
    alert("scroll Up");
    active = active - 1;
}

function scrollDown() {
    alert("scroll Down");
    active = active + 1;
}





