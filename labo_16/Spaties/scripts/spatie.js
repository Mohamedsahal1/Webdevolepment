const setup = () => {
    let i = document.getElementById("deButton");
    i.addEventListener("click", spatie);

}
const spatie=(deInput)=>{
    let i="";
    let m=document.getElementById("deInput").value;
    for (let te = 0; te < m.length; te++){
        i+= m[te]+" ";
    }
    console.log(i);
    return i;
}
window.addEventListener("load", setup);