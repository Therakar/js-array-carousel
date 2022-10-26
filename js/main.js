"use strict"

// array che contiene le immagini
const images = [`img/01.jpg`, `img/02.jpg`, `img/03.jpg`, `img/04.jpg`, `img/05.jpg`,];



// ciclo for che va a ciclare l'array images
for (let i = 0; i < images.length; i++){
    const element = document.createElement(`div`);
    element.innerHTML =`<img src="${images[i]}" alt="img">`; 
    element.classList.add("item")
    document.getElementById("carousel-container").append(element);
}