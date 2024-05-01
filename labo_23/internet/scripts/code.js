let startpages=[];
const setup = () => {
    let kn = document.getElementById("knop");
    kn.addEventListener("click", bewaarHistory);
    refr();
}



const bewaarHistory=()=>{
    let textContent = document.getElementById("textKnop");
    let textValue = textContent.value;
    let textSubs = textValue.substring(3,textValue.length);
   // let divContainer = document.getElementById("divCont");

    let splittedText = textSubs.split(" ");

    let hr = document.createElement("a");


    if(textValue.charAt(0) === "/" && (textValue.charAt(1) === "y" || textValue.charAt(1) === "t" || textValue.charAt(1) === "i" || textValue.charAt(1) === "g")) {


        /* layout */
        let divLayout = document.getElementById("staticRow");

        let divCol = document.createElement("div");
        divCol.className = "col-4";
        divCol.style.paddingBottom = "15px";



        /** card */
        let divCard = document.createElement("div");
        divCard.className = "card";
        let h = document.createElement("h3");
        h.className = "card-title";
        h.classList.add("paLef");
        let t = document.createElement("p");
        t.classList.add("paLef");
        let b = document.createElement("a");
        b.role = "button";
        b.className = "btn btn-dark btn-lg active";
        b.innerHTML = "Go!";
        let divForB = document.createElement("div");
        divForB.classList.add("paLef");
        divForB.appendChild(b);
        divCard.appendChild(h);
        divCard.appendChild(t);
        divCard.appendChild(divForB);
        divForB.classList.add("plc");


        divCol.appendChild(divCard);
       // divContainer.appendChild(divLayout);
        divLayout.appendChild(divCol);
        if (textValue.charAt(1) === "y") {
            divCard.style.backgroundColor = "red";
            h.textContent = "Youtube";
            t.textContent = textValue.substring(2, textValue.length);
            if (splittedText.length < 1) {
                b.onclick=function () {
                    window.open("https://www.youtube.com/results?search_query="+ textSubs);
                }
               hr.href = "https://www.google.com/search?q=" + textSubs;
            } else {
                let tex = "";
                for (let i = 0; i < splittedText.length; i++) {
                    tex += splittedText[i] + "+";
                }

                let slicedTex = tex.slice(0, tex.length - 1);
                console.log(tex);
                console.log(slicedTex);
                b.onclick=function () {
                    window.open("https://www.youtube.com/results?search_query=" + slicedTex);
                }
               hr.href = "https://www.youtube.com/results?search_query=" + slicedTex;
                window.open("https://www.youtube.com/results?search_query=" + slicedTex);
            }

        } else if (textValue.charAt(1) === "i") {
            divCard.style.backgroundColor = "purple";
            h.textContent = "Instagram";
            t.textContent = textValue.substring(2, textValue.length);
            b.onclick=function () {
                window.open("https://www.instagram.com/explore/tags/" + textSubs);
            }
            hr.href = "https://www.instagram.com/explore/tags/" + textSubs;
            window.open("https://www.instagram.com/explore/tags/" + textSubs);
            b.style.backgroundColor = "orange";
        } else if (textValue.charAt(1) === "t") {
            divCard.style.backgroundColor = "dodgerblue";
            h.textContent = "Twitter";
            t.textContent = textValue.substring(2, textValue.length);
            b.onclick=function () {
                window.open("https://twitter.com/hashtag/" + textSubs);
            }
            hr.href = "https://twitter.com/hashtag/" + textSubs;
            window.open("https://twitter.com/hashtag/" + textSubs);
            b.style.backgroundColor = "indianorange";

        } else if (textValue.charAt(1) === "g") {
            divCard.style.backgroundColor = "dodgerblue";
            h.textContent = "Google";
            t.textContent = textValue.substring(2, textValue.length);
            b.style.backgroundColor = "indianred";

            if (splittedText.length < 2) {
                b.onclick=function () {
                    window.open("https://www.google.com/search?q=" + textSubs);
                }
                    hr.href = "https://www.google.com/search?q=" + textSubs;
                window.open("https://www.google.com/search?q=" + textSubs);
            } else {
                let tex = "";
                for (let i = 0; i < splittedText.length; i++) {
                    tex += splittedText[i] + "+";
                }
                let slicedTex = tex.slice(0, tex.length - 1);
                //console.log(tex);
                //console.log(slicedTex);
                b.onclick=function () {
                    window.open("https://www.google.com/search?q=" + slicedTex);
                }
                hr.href = "https://www.google.com/search?q=" + slicedTex;
                window.open("https://www.google.com/search?q=" + slicedTex);
            }
        }


        let obj ={
            title : h.textContent,
            text: t.textContent,
            url:hr.href

        }

        startpages.push(obj);

        localStorage.setItem("opgeslaan", JSON.stringify(startpages));

        textContent.value = "";

    }else {
        alert("Unknown Command");
    }
}

const refr=()=>{
    let s = localStorage.getItem("opgeslaan");
    let restoredObjects = JSON.parse(s);
    if(restoredObjects !== null) {
        for (let i = 0; i < restoredObjects.length; i++) {

            /* layout */
            let divLayout = document.getElementById("staticRow");

            let divCol = document.createElement("div");
            divCol.className = "col-4";
            divCol.style.paddingBottom = "15px";


            /** card */
            let divCard = document.createElement("div");
            divCard.className = "card";
            let h = document.createElement("h3");
            h.className = "card-title";
            h.classList.add("paLef");
            let t = document.createElement("p");
            t.classList.add("paLef");
            let b = document.createElement("a");
            b.role = "button";
            b.className = "btn btn-dark btn-lg active";
            b.innerHTML = "Go";
            let divForB = document.createElement("div");
            divForB.classList.add("paLef");
            divForB.appendChild(b);
            divCard.appendChild(h);
            divCard.appendChild(t);
            divCard.appendChild(divForB);
            divForB.classList.add("plc");


            divCol.appendChild(divCard);
            divLayout.appendChild(divCol);


            if (restoredObjects[i].title === "Youtube") {
                divCard.style.backgroundColor = "red";
                h.textContent = "Youtube";
                /** restoredObjects[i].title */
                t.textContent = restoredObjects[i].text;
                b.onclick = function () {
                    window.open(restoredObjects[i].url);
                }

            } else if (restoredObjects[i].title === "Instagram") {
                divCard.style.backgroundColor = "purple";
                h.textContent = "Instagram";
                /** restoredObjects[i].title */
                t.textContent = restoredObjects[i].text;
                b.onclick = function () {
                    window.open(restoredObjects[i].url);
                }
                b.style.backgroundColor = "orange";

            } else if (restoredObjects[i].title === "Twitter") {
                divCard.style.backgroundColor = "dodgerblue";
                h.textContent = "Twitter";
                /** restoredObjects[i].title */
                t.textContent = restoredObjects[i].text;
                b.onclick = function () {
                    window.open(restoredObjects[i].url);
                }
                b.style.backgroundColor = "indianorange";

            } else if (restoredObjects[i].title === "Google") {
                divCard.style.backgroundColor = "dodgerblue";
                h.textContent = "Google";
                /** restoredObjects[i].title */
                t.textContent = restoredObjects[i].text;
                b.onclick = function () {
                    window.open(restoredObjects[i].url);
                }
                b.style.backgroundColor = "indianred";

            }


        }
    }

}
window.addEventListener("load", setup);