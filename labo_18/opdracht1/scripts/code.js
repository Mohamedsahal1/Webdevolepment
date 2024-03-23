const setup = () => {
    let text = document.querySelectorAll("#verander");
    for(let i=0; i < text.length; i++){
       text[i].addEventListener("click", textVeranderen);
    }
}

const textVeranderen=(event)=>{
    event.target.innerHTML = "Good job";
}


window.addEventListener("load", setup);