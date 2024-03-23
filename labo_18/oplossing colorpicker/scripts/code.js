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
	s.addEventListener("click", save);


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
const save=()=>{
	let red=document.getElementById("sldRed").value; //input always value
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;

	let an = document.createElement("li");
	an.id = 'liID';
     an.className="gesaved";
	an.style.backgroundColor= "rgb("+red+","+green+","+blue+")";
	document.getElementById("gesaved").appendChild(an);
	let b = document.createElement("button");
	b.innerHTML = "X";
	b.className="punt";
	document.getElementById("gesaved").appendChild(b);
	b.onclick = function () {
		document.getElementById("gesaved").removeChild(an);
		document.getElementById("gesaved").removeChild(b);

	}
	let lis=document.getElementsByTagName("li");
	for (let i=0;i<lis.length;i++) {
		lis[i].addEventListener("click", klik);
	}
};
const klik = (event) => {
		document.getElementById("swatch").style.backgroundColor = event.target.style.backgroundColor;
};




window.addEventListener("load", initialize);