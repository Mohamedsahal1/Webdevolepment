const setup = () => {
    let her = document.getElementById("herbreken");
    her.addEventListener("click", subT);
}

const subT =()=>{
let aant =document.getElementsByClassName("aantal");
let pri =document.getElementsByClassName("prijs");
let btw = document.getElementsByClassName("btw");
let subtot =document.getElementsByClassName("subtotaal");

subtot[0].innerHTML = (parseInt(pri[0].innerHTML, 10) * parseInt(aant[0].value, 10) +
    (parseInt(pri[0].innerHTML, 10) * parseInt(aant[0].value, 10) * parseInt(btw[0].innerHTML, 10)/100)).toFixed(2)
               +" " +"Eur ";
subtot[1].innerHTML = (parseInt(pri[1].innerHTML, 10) * parseInt(aant[1].value, 10) +
    (parseInt(pri[1].innerHTML, 10) * parseInt(aant[1].value, 10) * parseInt(btw[1].innerHTML, 10)/100)).toFixed(2)
    +" " +"Eur ";
subtot[2].innerHTML = (parseInt(pri[2].innerHTML, 10) * parseInt(aant[2].value, 10) +
    (parseInt(pri[2].innerHTML, 10) * parseInt(aant[2].value, 10) * parseInt(btw[2].innerHTML, 10)/100)).toFixed(2)
    +" " +"Eur ";


let eind = (parseInt(pri[0].innerHTML, 10) * parseInt(aant[0].value, 10) +
    (parseInt(pri[0].innerHTML, 10) * parseInt(aant[0].value, 10) * parseInt(btw[0].innerHTML, 10)/100))+
    (parseInt(pri[1].innerHTML, 10) * parseInt(aant[1].value, 10) +
    (parseInt(pri[1].innerHTML, 10) * parseInt(aant[1].value, 10) * parseInt(btw[1].innerHTML, 10)/100))+
    (parseInt(pri[2].innerHTML, 10) * parseInt(aant[2].value, 10) +
    (parseInt(pri[2].innerHTML, 10) * parseInt(aant[2].value, 10) * parseInt(btw[2].innerHTML, 10)/100));


    document.getElementById("subtotaalLaatste").innerHTML = eind.toFixed(2) + " " + "Eur ";

}
window.addEventListener("load", setup);