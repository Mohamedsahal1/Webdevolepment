const setup = () => {
let substringW = document.getElementById("substringTwee");
substringW.addEventListener("click",substringWoord );
}
const substringWoord=()=> {

    let beginIndex = parseInt(document.getElementById("numberLinks").value);
    let eindIndex =  parseInt(document.getElementById("numberRechts").value);
   let m = document.getElementById("textInput").innerHTML;

        m.substring(2,4);
    document.getElementById("textOutput").innerHTML = m;


}
window.addEventListener("load", setup);