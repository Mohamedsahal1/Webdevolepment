const setup = () => {
    let i = document.getElementById("ei");

    for(let m = 0; i.options < 2; m++){
        m.addEventListener("click", uitvoeren);
    }
//i.addEventListener("click", uitvoeren)
}
const uitvoeren=()=>{
    let option = document.getElementById("ei");
    let foto = document.getElementsByClassName("hidden");
    let t = document.getElementById("note");

    for(let i = 0; i<2; i++){
        if(option[1].selected){
            foto[0].style.
            t.textContent = "Hierboven, een met een ei";

        }else if(option[2].selected){
            foto[0].style.backgroundImage = "without-egg.png";
            t.textContent = "Hierboven, een zonder  ei";
        }
    }
    tellen();
}

const tellen =()=>{
    let text = document.getElementById("note");
    let letter = document.getElementById("textinput").value;
    let count = 0;
    for(let i = 0; i<text.length; i++){
        if(text[i] === letter){
            count++;
        }
    }
    text.textContent += "\n"+ "Letter" + letter.innerHTML + "komt" + count + "keer voor in bovenstaande zin.";
}
window.addEventListener("load", setup);