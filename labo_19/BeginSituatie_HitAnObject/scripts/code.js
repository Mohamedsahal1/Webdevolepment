let global= {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    let field = document.getElementById("playField");
    let img0 = document.getElementsByClassName("issa")[0];
    let knop = document.getElementById("knop");
    field.addEventListener("click", start);
    knop.addEventListener("click", start);
    timeoutId = setInterval(start, 10000);
    //img0.addEventListener("click", alerT);
};

const alerT=()=>{
    alert("Game over");
}



const start=()=>{
    let img0 = document.getElementById("img0");
    let rand =  Math.random() * 5;
    let imgP = global.IMAGE_PATH_PREFIX;
    let imgS = global.IMAGE_PATH_SUFFIX;
    let innerW = window.innerWidth;
    let innerH = window.innerHeight;
    for(let i =0; i< rand; i++){
        img0.src= imgP+i+imgS;
        img0.style.position = "absolute";
        img0.style.top = (Math.random() * innerH) + "px";
        img0.style.bottom = (Math.random() * innerH) + "px";
        img0.style.left = (Math.random() * innerW) + "px";
        img0.style.right = (Math.random() * innerW) + "px";
        if(rand === 0){
            img0.click=function (){
                alerT();
            }
        }
    }



}


window.addEventListener("load", setup);


