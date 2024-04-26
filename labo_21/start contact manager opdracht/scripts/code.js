let personen = [

];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    let s = document.getElementById("lstPersonen");
    let voornaam = document.getElementById("txtVoornaam").value;
    let achternaam =  document.getElementById("txtFamilienaam").value;
    let geboorte= document.getElementById("txtGeboorteDatum").value;
    let email = document.getElementById("txtEmail").value;
    let kinderen= document.getElementById("txtAantalKinderen").value;
    
            let persoon ={
                firstName : voornaam,
                lastName : achternaam,
                birthdate : geboorte,
                adres : email,
                children : kinderen
            }
            personen.push(persoon);
            let p = JSON.stringify(persoon)
            console.log(p);
    if(!s.options[s.selectedIndex]){
            let op = document.createElement("option");
            op.innerHTML = persoon.firstName +" " + persoon.lastName;
            for(let a = 0; a < personen.length; a++){
                op.id = a.toString();
            }
           // op.id = "option1";

            s.appendChild(op);
        }else {

        for(let pers of personen){
            if(s.options.selectedIndex === personen.indexOf(pers)){

                pers.firstName = document.getElementById("txtVoornaam").value;
                pers.lastName =  document.getElementById("txtFamilienaam").value;
                pers.birthdate = document.getElementById("txtGeboorteDatum").value;
                pers.adres = document.getElementById("txtEmail").value;
                pers.children = document.getElementById("txtAantalKinderen").value;
                document.getElementById(s.options.selectedIndex.toString()).innerHTML =
                    document.getElementById("txtVoornaam").value + " "+
                    document.getElementById("txtFamilienaam").value;
            }
        }

    }
    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan
    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

const invullen=()=>{
    let s = document.getElementById("lstPersonen");
            for(let persoon of personen){

            if(s.options.selectedIndex === personen.indexOf(persoon)){
                document.getElementById("txtVoornaam").value = persoon.firstName;
                document.getElementById("txtFamilienaam").value= persoon.lastName;
                document.getElementById("txtGeboorteDatum").value= persoon.birthdate;
                document.getElementById("txtEmail").value= persoon.adres;
                document.getElementById("txtAantalKinderen").value= persoon.children;
        }
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let s = document.getElementById("lstPersonen");


    document.getElementById("txtVoornaam").value = "";
 document.getElementById("txtFamilienaam").value= "";
document.getElementById("txtGeboorteDatum").value= "";
    document.getElementById("txtEmail").value= "";
    document.getElementById("txtAantalKinderen").value= "";
    for(let i =0; i< s.length; i++){
        s[i].selected = false;
    }

    //s.options.selectedIndex = -1;


    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);
    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);
    let lstPersonen = document.getElementById("lstPersonen").onchange = invullen;
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);