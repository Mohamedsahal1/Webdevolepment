const setup = () => {
document.getElementById("output").addEventListener("click",methode)
}

const methode=()=>{
    let input = document.getElementById("textinput").value.trim();
    let indhet;
    let indHet;
    let resultaat;
    for(let i = 0; i < 1; i++) {
        resultaat = input
            .replace("de", "het")
            .replace("De", "Het")
        indhet = resultaat.indexOf("het");
        indHet = resultaat.indexOf("Het");
    }

    for(let m = 0; m < 1; m++){
        for(let a =0; a < 1; a++){
            if(m !== indhet[a]) {
                input.replace("het", "de")
            }
        }
    }
    for(let s = 0; s < 1; s++){
        for(let b =0; b < 1; b++){
            if(s !== indhet[b]) {
                input.replace("Het", "de");
            }
        }
    }

    console.log(resultaat);
    console.log(indhet);
    console.log(indHet);




}


window.addEventListener("load", setup);