const setup = () => {
    let para = document.getElementsByClassName("belangrijk");
    for(let i= 0; para.length; i++) {
    para[i].classList.add("opvallend");
    }

}


window.addEventListener("load", setup);