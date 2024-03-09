const setup = () => {
    let b = document.getElementById("button");
    b.addEventListener("click", breken);

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
    console.log(aantal);
}

window.addEventListener("load", setup);