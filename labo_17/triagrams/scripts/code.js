const setup = () => {
    document.getElementById("tria").addEventListener("click", tr)

}
const tr=()=>{
    let text = "onoorbaar";
    let output ="";
    for(let i =0; i<text.length; i++){
        output += text.slice(i,i+3) + "\n";
    }
    console.log(output);
}
window.addEventListener("load", setup);