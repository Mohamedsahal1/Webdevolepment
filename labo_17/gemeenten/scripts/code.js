const setup = () => {

}

const gemeenten=()=>{
    let aanpassen ="";
    let gemeente = document.getElementById("demo");

    while(aanpassen !== "stop"){
        aanpassen = prompt("Gemeente: ");
        if(aanpassen !== "stop"){
            let createOption = document.createElement("option");
            createOption.value=aanpassen;
            createOption.textContent=aanpassen;
            gemeente.appendChild(createOption);
        }

    }
}
window.addEventListener("load", setup);