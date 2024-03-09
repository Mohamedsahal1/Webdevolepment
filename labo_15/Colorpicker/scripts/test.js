const setup = () => {
    let sl = document.getElementsByClassName("slider");
    for(let i =0; i < sl.length; i++){
        sl[i].addEventListener("input", start);
        sl[i].addEventListener("input", mmm);
        sl[i].addEventListener("change", mmm);
    }
}

const start=()=>{
    let n = document.getElementsByClassName("numb");
    let s = document.getElementsByClassName("slider");
    for (let i = 0; i < n.length; i++ ){
        for(let m = 0; m < s.length; m++){

            n[0].textContent = "Red " + s[0].value;
            n[1].textContent = "Green " + s[1].value;
            n[2].textContent = "Blue " + s[2].value;
        }
    }
}
const verkleuren=()=>{
    let rood = document.getElementById("roodKleur").value;
    let groen = document.getElementById("groenKleur").value;
    let blue = document.getElementById("blueKleur").value;
    let kleur = 'rgb(' + rood + ',' + groen + ',' + blue + ')';
    document.getElementById("colorD").style.backgroundColor = kleur;
}
const mmm=()=>{
    let s = document.getElementsByClassName("slider");
        for(let m = 0; m < s.length; m++){
            document.getElementById("colorD").style.backgroundColor = 'rgb(' + m[0].value + ',' + m[1].value + ',' + m[2].value + ')';
        }
}
window.addEventListener("load", setup);