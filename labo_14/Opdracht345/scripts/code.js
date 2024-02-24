const setup = () => {

    let pElement=document.getElementById("wijzig");
    pElement.addEventListener("click", clickButton);

}


const clickButton =()=> {
    document.getElementById("txtOutput").innerHTML = "Welkom!";
}



window.addEventListener("load", setup);