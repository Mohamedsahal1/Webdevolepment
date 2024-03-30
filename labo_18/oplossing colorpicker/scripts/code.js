const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
	let s = document.getElementById("save");
	s.addEventListener("click", andereManier);

};

const update = () => {
	let red=document.getElementById("sldRed").value; //input always value
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;// html-element innerHTML
	document.getElementById("lblBlue").innerHTML=blue;
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};

const andereManier=()=>{
	let red=document.getElementById("sldRed").value; //input always value
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;

	let deParent = document.createElement("lu");
	document.getElementById("gesaved").appendChild(deParent);
	let deKind = document.createElement("li");
	deKind.style.backgroundColor="rgb("+red+","+green+","+blue+")";
	deParent.appendChild(deKind);
	deKind.className="gesaved";
	deParent.className="deParentC";
	let deButton = document.createElement("button");
	deKind.appendChild(deButton);
	deButton.textContent = 'X';
	deButton.className="deB"

	deButton.onclick = function(){
		document.getElementById("gesaved").removeChild(deParent);
		document.getElementById("gesaved").removeChild(deKind);
		document.getElementById("gesaved").removeChild(deButton);
	}
	deKind.addEventListener("click", function(event){
		document.getElementById("swatch").style.backgroundColor=event.backgroundColor;
	});
}


window.addEventListener("load", initialize);