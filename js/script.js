/* 
Consegna:
Dati tre array contenenti:
 - una lista ordinata di 5 immagini,
 - una lista ordinata dei relativi 5 luoghi e
 - una lista di 5 news,
creare un carosello come nella foto allegata.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l’immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
 - titolo e
 - testo.
Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.
*/

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// const itemsContainer = document.querySelector('.img-big-container');
// const thumbsContainer = document.querySelector('.img-little-container');

// for (let i = 0; i < items.length; i++) {

    
//     let classElement = '';
//     if (i == 0) {
//         classElement = 'first active';
//     } else if (i == items.length - 1) { 
//         classElement = 'last';
//     }

//     const tag = `
//         <div class="img-big-container ${classElement}">
//             <img src="${items[i]}" alt="">
//             <div class ="text">
//             <h3>${title[i]}</h3>
//             <p>${text[i]}</p>
//         </div>
//     `;
//     const tagThumb = `
//         <div class="img-little-container ${classElement}">
//              <img src="${items[i]}" alt="">
//         </div>
//     `;

//     itemsContainer.innerHTML += tag;
//     thumbsContainer.innerHTML += tagThumb;
// }






const buttonDown = document.querySelector('.fa-arrow-alt-circle-down');
const buttonUp = document.querySelector('.fa-arrow-alt-circle-up');


buttonDown.addEventListener('click',
    function () {
        const bigActive = document.querySelector('.immage-cities.active');
        console.log(bigActive);
        const littleActive = document.querySelector('.img-right.active');
             
        const listClasses = bigActive.classList;
        
        let last = false;
        for (let i = 0; i < listClasses.length; i++) { 
            if (listClasses[i] == 'last') {
                last = true;
            }
        }
       
        let littleLast = littleActive.classList.contains('last');
        
        if (last == false) {    
            bigActive.classList.remove('active');
            const nextImgBig = bigActive.nextElementSibling;
            nextImgBig.classList.add('active');
        }
        
        if (littleLast == false) {
            littleActive.classList.remove('active');
            const nextImgLittle = littleActive.nextElementSibling;
            nextImgLittle.classList.add('active');
        }
    }
);

buttonUp.addEventListener('click',
    function () {
        const bigActive = document.querySelector('.immage-cities.active');
        console.log(bigActive);
        const littleActive = document.querySelector('.img-right.active');
             
        const listClasses = bigActive.classList;
        
        let first = false;
        for (let i = 0; i < listClasses.length; i++) { 
            if (listClasses[i] == 'first') {
                first = true;
            }
        }
       
        let littleFirst = littleActive.classList.contains('first');
        
        if (first == false) {    
            bigActive.classList.remove('active');
            const previousImgBig = bigActive.previousElementSibling;
            previousImgBig.classList.add('active');
        }
        
        if (littleFirst == false) {
            littleActive.classList.remove('active');
            const previousImgLittle = littleActive.previousElementSibling;
            previousImgLittle.classList.add('active');
        }
    }
);






















