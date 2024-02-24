const setup = () => {
let substringW = document.getElementById("substringTwee");
substringW.addEventListener("click",substringWoord );
}
const substringWoord=()=> {
    let textInput = document.getElementById("textInput").value;
    let beginIndex = document.getElementById("numberLinks").value;
    let eindIndex =  document.getElementById("numberLinks").value;
    let resultaat = textInput.substring(beginIndex, eindIndex);

    document.getElementById("txtOutput").innerHTML += resultaat;

}
window.addEventListener("load", setup);