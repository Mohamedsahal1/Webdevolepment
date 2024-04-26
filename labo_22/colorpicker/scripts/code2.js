let kleurinfoObjecten =[];



const storeSliderValues = () => {
    let sliderValues ={};
    let sliderValuesJason;

    let saveButton = document.getElementById("btnSave");
    let i = 0;

    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    sliderValues.redValue = red;
    sliderValues.greenValue = green;
    sliderValues.blueValue = blue;

    sliderValuesJason = JSON.stringify(sliderValues);
    localStorage.setItem("storedSliderValues", sliderValuesJason);







};

const restoreSliderValues = () => {

    //for(let waarde of arrayValues){
    //}
    let values = localStorage.getItem("storedSliderValues");
    let valuesPar = JSON.parse(values);

    document.getElementById("sldRed").value = valuesPar.redValue;
    document.getElementById("sldGreen").value = valuesPar.greenValue;
    document.getElementById("sldBlue").value = valuesPar.blueValue;

    document.getElementById("lblRed").innerHTML=valuesPar.redValue;
    document.getElementById("lblGreen").innerHTML=valuesPar.greenValue;// html-element innerHTML
    document.getElementById("lblBlue").innerHTML=valuesPar.blueValue;



};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
   // let swatchElement = document.getElementById("swatch");

    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    let swatch = {};
    //swatch.swatchColor = swatchElement.style.backgroundColor = "(rgb" + red + "," + green +","+ blue +")";
    swatch.rood = red;
    swatch.groen = green;
    swatch.blauw = blue;
    kleurinfoObjecten.push(swatch);


    localStorage.setItem("gestoredSwatchElement", JSON.stringify(kleurinfoObjecten));




};

const restoreSwatches = () => {

   let swatches= JSON.parse(localStorage.getItem("gestoredSwatchElement"));
   console.log(swatches);



for(let i = 0; i < swatches.length; i++){
    let swatch=document.getElementById("swatch");

    let deParent = document.createElement("ul");
    document.getElementById("gesaved").appendChild(deParent);
    let deKind = document.createElement("li");
    deKind.style.backgroundColor="rgb("+swatches[i].rood+","+swatches[i].groen+","+swatches[i].blauw+")";
    deParent.appendChild(deKind);
    deKind.className="gesaved";
    deParent.className="deParentC";

    let deButton = document.createElement("button");
    deKind.appendChild(deButton);
    deButton.textContent = 'X';
    deButton.className="deB";
    deButton.onclick = function(){
        deKind.removeChild(deButton);
        deParent.removeChild(deKind);
        document.getElementById("gesaved").removeChild(deParent);

    };
    deKind.addEventListener("click", function(event){
        document.getElementById("swatch").style.backgroundColor=event.target.style.backgroundColor;
    });
}




};
