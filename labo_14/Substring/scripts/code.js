const setup = () => {
let substringW = document.getElementById("substringTwee");
substringW.addEventListener("click",substringWoord );
}
const substringWoord=()=> {
    let beginIndex = document.getElementById("numberLinks").value;
    let eindIndex =  document.getElementById("numberRechts").value;
    let m = document.getElementById("textInput").value;
    document.getElementById("textOutput").innerHTML += m.substring(beginIndex,eindIndex);
}
window.addEventListener("load", setup);