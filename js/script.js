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
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// inserisco immagini arrey
const imgBigContainer = document.querySelector('.img-big-container');

for (let i = 0; i < items.length; i++) {
    let image = `<img src="${items[i]}" alt="">`;

    imgBigContainer.innerHTML += image;
}


// faccio in modo che solo una delle immagini sia attiva
const imagesScrol = document.querySelectorAll('.img-big-container img');

imagesScrol[0].classList.add('first', 'active');
imagesScrol[imagesScrol.length - 1].classList.add('last');


// attivo i bottoni
const buttonUp = document.querySelector('.fa-arrow-alt-circle-up');
const buttonDown = document.querySelector('.fa-arrow-alt-circle-down');

buttonDown.addEventListener('click', function () {
    const imageActiveDown = document.querySelector('.active');
    
  
    let classesDown = imageActiveDown.classList;
    
    let last = false;
    for (let index = 0; index < classesDown.length; index++) {
      console.log(index, classesDown[index]);
      if (classesDown[index] == 'last') {
        // la variabile diventa vera  
        last = true;
      }
    }

    if (last == false) { //se non sono in last
        imageActiveDown.classList.remove('active');
        
        //elemento successivo
        const imgNextDown = imageActiveDown.nextElementSibling;
        
        imgNextDown.classList.add('active');
        
      } else { // se sono in last
        buttonDown.classList.remove('able');
      }
    
    });


    
    
buttonUp.addEventListener('click', function () {
    const imageActiveUp = document.querySelector('.active');
    
  
    let classesUp = imageActiveUp.classList;
    
    let first = false;
    for (let index = 0; index < classesUp.length; index++) {
      console.log(index, classesUp[index]);
      if (classesUp[index] == 'last') {
         
        first = true;
      }
    }

    if (first == false) { 
        imageActiveUp.classList.remove('active');
        
        
        const imgNextUp = imageActiveUp.previousElementSibling;
        
        imgNextUp.classList.add('active');
        
      } else { // 
        buttonUp.classList.remove('able');
      }
    
});