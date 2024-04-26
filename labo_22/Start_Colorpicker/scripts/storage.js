let kleurinfoObjectenEnValues =[];



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
        kleurinfoObjectenEnValues.push(sliderValues);







};

const restoreSliderValues = () => {

    for(let waarde of arrayValues){


    }
    let values = localStorage.getItem("storedSliderValues");
    let valuesPar = JSON.parse(values);

    document.getElementById("sldRed").value = valuesPar.redValue;
    document.getElementById("sldGreen").value = valuesPar.greenValue;
    document.getElementById("sldBlue").value = valuesPar.blueValue;



};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatchElement = document.getElementById("swatch");
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    let swatch = {};
    swatch.swatchColor = swatchElement.style.backgroundColor = "(rgb" + red + "," + green +","+ blue +")";

    let jasonSwatchEl = JSON.stringify(swatch);

    localStorage.setItem("gestoredSwatchElement", jasonSwatchEl);

    kleurinfoObjectenEnValues.push(swatch);



};

const restoreSwatches = () => {
    let swatchClasses = document.querySelectorAll(".swatch");
    for(let kleur of kleurinfoObjectenEnValues){
        for(let s = 0; s < swatchClasses; s++){
            swatchClasses[s].style.backgroundColor = "(rgb" + kleur.redValue + ","
                + kleur.greenValue + "," + kleur.blueValue+ ")";
        }
    }





};
