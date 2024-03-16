const setup = () => {
    let r = document.getElementById("result");
    r.addEventListener("click", uitkomst);
}
const uitkomst=()=>{
    check();
    taal();
    landen();
    bestellen();
}

const check=()=>{

let element = document.getElementById("textCheck");
if(element.checked){
    console.log("is roker");
}else{
    console.log("is geen roker");
}
};
const taal =()=>{
    let ne = document.getElementById("nl");
    let en = document.getElementById("en");
    let fr = document.getElementById("fr");
    if(ne.checked){
        console.log("moedertaal is nederlands")
    }else if(en.checked){
        console.log("moedertaal is engels")
    }else if(fr.checked){
        console.log("moedertaal is frans")
    }

};

const landen=()=> {
    let element = document.getElementById("buurlanden");
    for (let i = 0; i < element.options.length; i++) {
        if (element.options[i].selected) {
            console.log("my favorite buurland is " + element.options[i].text);
        }
    }
};


const bestellen=()=>{
    let element = document.getElementById("bestellingen");
    for(let i=0; i < element.options.length; i++){
        if(element.options[i].selected){
            console.log("Bestelling bestaat uit " + element.options[i].text +" ");
        }
    }
};


window.addEventListener("load", setup);