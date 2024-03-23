const setup = () => {
    let i = document.getElementById("deB");
    i.addEventListener("click", create);
}

const create=()=>{
    let element = document.createElement("p");
    element.innerHTML = "niewe p-element";
    document.getElementById("myDIV").appendChild(element);

}
window.addEventListener("load", setup);