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
    let knop = document.getElementById("knop");
    field.addEventListener("click", start);
    knop.addEventListener("click", start);
    timeoutId = setInterval(start, 10000);
    //img0.addEventListener("click", alerT);
    field.style.width = window.innerWidth +"px";
    field.style.height = window.innerHeight +"px";

};





const start=()=>{
    let field = document.getElementById("playField");
    let img0 = document.getElementById("img0");
    let maxLeft = field.clientWidth - img0.offsetWidth;
    let heigthMax = field.clientHeight - img0.offsetHeight;
    let left = Math.floor(Math.random() * maxLeft);
    let top = Math.floor(Math.random() * heigthMax);

    let rand =  Math.random() * 5;
    let imgP = global.IMAGE_PATH_PREFIX;
    let imgS = global.IMAGE_PATH_SUFFIX;
    let innerW = window.innerWidth;
    let innerH = window.innerHeight;


    for(let i =0; i < rand; i++){
        img0.src= imgP+i+imgS;
        img0.alt = "image"+i;
        img0.style.position = "absolute";
        img0.style.top = top +"px";
        img0.style.left = left+"px";
            img0.onclick=function (){
                let an = global.score++
                document.getElementById("hits").innerHTML =an.toString();
                if(img0.alt === "image0") {
                    alert("Game over");
                    clearInterval(timeoutId);
                    img0.src=" ";
                }

            }

        }

}


window.addEventListener("load", setup);


