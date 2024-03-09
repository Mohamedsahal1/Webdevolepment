const setup = () => {
    let sl = document.getElementsByClassName("slider");

        sl[0].addEventListener("input", start);
        sl[1].addEventListener("input", start1);
        sl[2].addEventListener("input", start2);




    document.getElementById("roodKleur").addEventListener("input", verkleuren);
    document.getElementById("groenKleur").addEventListener("input", verkleuren);
    document.getElementById("blueKleur").addEventListener("input", verkleuren);
}

const start=()=>{
    let n = document.getElementsByClassName("numb");
    let s = document.getElementsByClassName("slider");
    n[0].textContent = "Red " + s[0].value;

}
const start1=()=>{
    let n = document.getElementsByClassName("numb");
    let s = document.getElementsByClassName("slider");

    n[1].textContent = "Green " +  s[1].value;
}
const start2=()=>{
    let n = document.getElementsByClassName("numb");
    let s = document.getElementsByClassName("slider");

    n[2].innerHTML =  "Blue " + s[2].value;
}
const verkleuren=()=>{
    let rood = document.getElementById("roodKleur").value;
    let groen = document.getElementById("groenKleur").value;
    let blue = document.getElementById("blueKleur").value;
    let kleur = 'rgb(' + rood + ',' + groen + ',' + blue + ')';
    document.getElementById("colorD").style.backgroundColor = kleur;
}
window.addEventListener("load", setup);