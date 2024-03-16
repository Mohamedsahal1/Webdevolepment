const setup = () => {
document.getElementById("output").addEventListener("click",methode)
}

const methode=()=>{
    let input = document.getElementById("textinput").value.trim();

    for(let i = 0; i < 1; i++){
        let resultaat= input
            .replace("de", "het")
            .replace("De", "Het")
            .replace("het", "de")
            .replace("Het", "De");
        console.log(resultaat);
    }

}


window.addEventListener("load", setup);