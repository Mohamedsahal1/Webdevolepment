const setup = () => {
    document.getElementById("ei").onchange = op2;
}
const op2=()=>{
    let textIn = document.getElementById("note");
    let cl = document.getElementById("img");
    let select = document.getElementById("ei").value;
    if (select === "o2") {
        cl.classList.remove("hidden");
        cl.classList.add("with-egg");
        textIn.textContent = "Hierboven, een kip met  ei";
        tellenA();
    }else if(select === "o3"){
        cl.classList.remove("hidden");
        cl.classList.remove("with-egg");
        cl.classList.add("img");
        textIn.textContent = "Hierboven, een kip zonder  ei";
        tellenA();
    }
}
const tellenA=()=>{
    let text = document.getElementById("note").innerHTML;
    let letter = document.getElementById("textinput").value;
    let count = 0;
    for(let i =0; i <text.length; i++){
        if(text[i] === letter){
            count++;
        }
    }
    document.getElementById("note").innerHTML += "<br/>" +"Letter " + letter + " komt " + count + " keer voor in bovenstaande zin.";
}



window.addEventListener("load", setup);