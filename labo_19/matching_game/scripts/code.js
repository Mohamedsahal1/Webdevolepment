
const setup = () => {
    plaatsPictures();
    const cards = document.querySelectorAll(".card");
    for(let i = 0; i < cards.length; i++ ){
        cards[i].addEventListener("click", flipCard);
    }

}

const plaatsPictures=()=>{
    const naamKaart =["kaart2", "kaart1", "kaart5", "kaart2", "kaart3", "kaart6", "kaart4", "kaart3", "kaart5", "kaart4", "kaart1", "kaart6"];
    const achterkantPic = ["achterkant", "achterkant", "achterkant", "achterkant", "achterkant", "achterkant", "achterkant", "achterkant", "achterkant", "achterkant", "achterkant", "achterkant"];
    let voorkant = document.querySelectorAll(".voorkant");
    let achterkant = document.querySelectorAll(".achterkant");
    for (let i =0; i < voorkant.length; i++){
        voorkant[i].src = "images/"+ naamKaart[i] +".jpg";
        voorkant[i].alt = naamKaart[i] ;
    }
    for (let i =0; i < achterkant.length; i++){
        achterkant[i].src = "images/"+ achterkantPic[i] +".jpg";
        achterkant[i].alt = "achterkant" +i;
    }
}
let hasFlippedCard = false;
let firstCard, secondCard;
let lock = false;
const flipCard=(event)=>{
    if(lock) return;
    if(event.currentTarget === firstCard) return;
    event.currentTarget.classList.toggle("flip");

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = event.currentTarget;
        return;

    }

    secondCard = event.currentTarget;
    checkM();

}

const checkM=()=>{
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disabelthem() : unflip();


}
const unflip=()=>{
    lock = true;
    setTimeout(()=>{
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    }, 500);
}
const disabelthem=()=>{

    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}

const resetBoard =()=>{
    [hasFlippedCard, lock] = [false, false];
    [firstCard, secondCard] = [null, null];
}

( function (){
    const cards = document.querySelectorAll(".card");
    for(let i = 0; i < cards.length; i++ ){
        let randomNumbers = Math.floor(Math.random() *12);
        cards[i].style.order = randomNumbers.toString();
    }

})();
window.addEventListener("load", setup);