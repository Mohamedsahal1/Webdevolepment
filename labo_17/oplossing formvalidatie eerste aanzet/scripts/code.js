const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerFamilienaam();
	valideerGeboorteDatum();
	valideerEmail();
	valideerAantalKinderen();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		reportError(txtVoornaam, "max 30 charakters")
	} else {
		clearError(txtVoornaam);
	}
};

const valideerFamilienaam=()=>{
	let familienaam = document.getElementById("txtfamilienaam");
	let familienaam1 = document.getElementById("txtfamilienaam").value;

	let result = familienaam.value.trim();
	if(result.length < 50){
		reportError(familienaam, "min 50 karakters");
	}else{
		clearError(familienaam);
	}
	if(familienaam1 === ""){
		reportError(familienaam, "verplicht veld");
	}else{
		clearError(familienaam)
	}
};


const valideerGeboorteDatum=()=>{
	let datum = document.getElementById("geboorteDatum").value;
	let da = datum.trim();
	let datum1 = document.getElementById("geboorteDatum");
	if(!da){
		reportError(da, "formaat is niet jjjj-mm-dd");
	}else{
		clearError(da);
	}


	if(!datum1){
		reportError(datum, "verplicht veld");
	}else{
		clearError(datum);
	}
};

const valideerEmail=()=>{
	let email = document.getElementById("email").value;
	if(!email){
		reportError(email, "verplicht veld");
	}else{
		clearError(email);
	}
	if(email.contains("@") > 1){
		reportError(email, "geen geldig email adres");
	}else{
		clearError(email);
	}
}


const valideerAantalKinderen=()=>{
	let kinderen = document.getElementById("kinderen").value;
	let min = 0;
	let max = 99;

	if(kinderen < min){
		reportError(kinderen,"is geen positief getal");
		console.log("pro");
	}else if(kinderen > max) {
		reportError(kinderen,"is te vruchtbaar");
	}else {
		 clearError(kinderen);
	}
};




const reportError = (element, message) => {
	// als je deze gebruikt, behoeft het error element natuurlijk geen id attribuute
	element.className="invalid";
	element.nextElementSibling.innerHTML = message; // LET OP : nextSibling zou niet werken, die geeft een text node (d.i. immers de next sibling)
};

const clearError = (element) => {
	// als je deze gebruikt, behoeft het error element natuurlijk geen id attribuute
	element.className="";
	element.nextElementSibling.innerHTML = "";
};
window.addEventListener("load", setup);