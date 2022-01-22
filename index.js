const listValueCard = ['A', '2', '3', '4', '5', '6', '7','8','9','10', 'J', 'Q', 'K'];

let urlCorazon = 'https://images.emojiterra.com/mozilla/512px/2665.png';
let urlTreabol = "https://www.magosartesanos.com/contents/media/l_trebol.png";
let urlDiamante = "https://cdn.streamloots.com/uploads/5b9e46bdfa44c0001165ead4/3f9c1d63-ff3c-41d4-aa16-9a97206f9240.png";
let urlPica = 'https://i.pinimg.com/originals/f1/02/d4/f102d4733e97548ddf63db01d0063510.png';

const listSimbol = [urlCorazon, urlTreabol, urlDiamante, urlPica];

function generateCard(){
    const indexValueCard = Math.floor(Math.random() * (listValueCard.length - 0 ) ) + 0;
    const indexUrlSimbol = Math.floor(Math.random() * (listSimbol.length - 0 ) ) + 0;

    document.getElementById('print').innerHTML = `<div class="top">
                                                    <img src=${listSimbol[indexUrlSimbol]} alt="img-simbol">
                                                </div>
                                                <div class="midel">
                                                    <p> ${listValueCard[indexValueCard]} </p>
                                                </div>
                                                <div class="bottom"> 
                                                    <img class="reverse" src=${listSimbol[indexUrlSimbol]} alt="img-simbol">
                                                </div>`
    
} 

generateCard();