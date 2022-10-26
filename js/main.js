"use strict"

// array che contiene le immagini
const images = [`img/01`, `img/02`, `img/03`, `img/04`, `img/05`,];



// ciclo for che va a ciclare l'array images
for (let i = 0; i < images.length; i++){
    const element = document.createElement(`div`);
    element.innerHTML =`<div class="item"><img src="${images[i]}" alt="img"></div>`; 

    document.getElementById("carousel-container").appendChild(`<div class="item"><img src="${images[i]}" alt="img"></div>`);
}