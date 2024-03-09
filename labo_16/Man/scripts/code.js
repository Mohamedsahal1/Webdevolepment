const setup = () => {
    let b = document.getElementById("button");
    b.addEventListener("click", breken);
    let p = document.getElementById("button1");
    p.addEventListener("click", breken1);
    let t = document.getElementById("buttonTest");
    t.addEventListener("click", test);

}

const breken=()=>{
    let statement = "De man van An geeft geen hand aan ambetante verwanten";
    let gezochtstatement = "an";
    let aantal = 0;
    let index = statement.indexOf(gezochtstatement);
    while(index != -1){
        aantal++;
        index = statement.indexOf(gezochtstatement, index+1);
    }
    document.getElementById("result1").textContent += aantal;
}
const breken1=()=>{
    let statement = "De man van An geeft geen hand aan ambetante verwanten";
    let gezochtstatement = "an";
    let aantal = 0;
    let index = statement.lastIndexOf(gezochtstatement);
    while(index != -1){
        aantal++;
        index = statement.lastIndexOf(gezochtstatement, index-1);
    }
    document.getElementById("result2").textContent += aantal;
}
const test=()=>{
    let statement = document.getElementById("prob1").value;
    let gezochtstatement = document.getElementById("prob2").value;
    let aantal = 0;
    let index = statement.indexOf(gezochtstatement);
    while(index != -1){
        aantal++;
        index = statement.indexOf(gezochtstatement, index+1);
    }
    document.getElementById("try").textContent += aantal;
}

window.addEventListener("load", setup);