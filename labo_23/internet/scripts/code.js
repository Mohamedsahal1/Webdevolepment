let startpages=[];
const setup = () => {
    refresh();
    let kn = document.getElementById("knop");
    kn.addEventListener("click", bewaarHistory);
}

const bewaarHistory=()=>{
    let textContent = document.getElementById("textKnop");
    let textValue = textContent.value;
    let textSubs = textValue.substring(3,textValue.length);
    let splittedText = textSubs.split(" ");
    let hr = document.createElement("a");

    if(textValue.charAt(0) === "/" && (textValue.charAt(1) === "y" || textValue.charAt(1) === "t" || textValue.charAt(1) === "i" || textValue.charAt(1) === "g")) {

        let divLayout = document.getElementById("staticRow");
        let divCol = document.createElement("div");
        let divCard = document.createElement("div");
        let h = document.createElement("h3");
        let t = document.createElement("p");
        let b = document.createElement("a");
        let divForB = document.createElement("div");

        add(divForB,divCard,divCol,divLayout, b, t, h);

        if (textValue.charAt(1) === "y") {
            secondSearch(divCard, "#ff0000", h, "Youtube",t, textValue, b, "#282828")
            search(splittedText, b,textSubs, "https://www.youtube.com/results?search_query=", hr);
        } else if (textValue.charAt(1) === "i") {
            firstSearch(divCard, "#c32aa3", h, "Instagram", t, textValue, hr, textSubs, b, "#f46f30", "https://www.instagram.com/explore/tags/");
        } else if (textValue.charAt(1) === "t") {
            firstSearch(divCard, "#1da1f2", h, "Twitter", t, textValue, hr, textSubs, b, "#000000", "https://twitter.com/hashtag/");
        } else if (textValue.charAt(1) === "g") {
            secondSearch(divCard, "#ea4335", h, "Google",t, textValue, b, "#fbbc05")
            search(splittedText, b,textSubs, "https://www.google.com/search?q=", hr);
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
        if(textValue.charAt(0) !== "/"){
            alert("Invalid Command");
        }else {
            alert("Unknown Command prefex");

        }
    }
}

const refresh=()=>{
    let s = localStorage.getItem("opgeslaan");
    let restoredObjects = JSON.parse(s);
    if(restoredObjects !== null) {
        for (let i = 0; i < restoredObjects.length; i++) {

            let divLayout = document.getElementById("staticRow");
            let divCol = document.createElement("div");
            let divCard = document.createElement("div");
            let h = document.createElement("h3");
            let t = document.createElement("p");
            let b = document.createElement("a");
            let divForB = document.createElement("div");
            add(divForB,divCard,divCol,divLayout, b, t, h);

            if (restoredObjects[i].title === "Youtube") {
                retrieve( divCard, h, t, b,"#ff0000","Youtube",restoredObjects[i], "#282828");
            } else if (restoredObjects[i].title === "Instagram") {
                retrieve( divCard, h, t, b,"#c32aa3","Instagram",restoredObjects[i], "#f46f30");
            } else if (restoredObjects[i].title === "Twitter") {
                retrieve( divCard, h, t, b,"#1da1f2","Twitter",restoredObjects[i], "#000000");
            } else if (restoredObjects[i].title === "Google") {
                retrieve( divCard, h, t, b,"#ea4335","Google",restoredObjects[i], "#fbbc05");
            }
        }
    }

}

const retrieve = (divCardElement, hElement, tElement, bElement, bColor, title, element, buttonColor)=>{
    divCardElement.style.backgroundColor = bColor;
    hElement.textContent = title;
    /** restoredObjects[i].title */
    tElement.textContent = element.text;
    bElement.onclick = function () {
        window.open(element.url);
    }
    bElement.style.backgroundColor = buttonColor;
}

const add=(divForB,divCard,divCol,divLayout, b, t, h)=>{
    divCol.className = "col-4";
    divCol.style.paddingBottom = "15px";
    divCard.className = "card";
    h.className = "card-title";
    h.classList.add("paLef");
    t.classList.add("paLef");
    b.role = "button";
    b.className = "btn btn-dark btn-lg active";
    b.innerHTML = "Go!";
    divForB.classList.add("paLef");
    divForB.appendChild(b);
    divCard.appendChild(h);
    divCard.appendChild(t);
    divCard.appendChild(divForB);
    divForB.classList.add("plc");
    divCol.appendChild(divCard);
    divLayout.appendChild(divCol);
}

const search=(splittedText, b,textSubs, url, hr)=>{
    if (splittedText.length < 1) {
        b.onclick=function () {
            window.open(url + textSubs);
        }
        hr.href = url + textSubs;
    } else {
        let tex = "";
        for (let i = 0; i < splittedText.length; i++) {
            tex += splittedText[i] + "+";
        }
        let slicedTex = tex.slice(0, tex.length - 1);
        console.log(tex);
        console.log(slicedTex);
        b.onclick=function () {
            window.open(url + slicedTex);
        }
        hr.href = url + slicedTex;
        window.open(url + slicedTex);
    }
}

const firstSearch=(divCard, divColor, h, hCont, t, textValue, hr, textSubs, b, bColor, url)=>{
    divCard.style.backgroundColor = divColor;
    h.textContent = hCont;
    t.textContent = textValue.substring(2, textValue.length);
    b.onclick=function () {
        window.open(url + textSubs);
    }
    hr.href = url + textSubs;
    window.open(url + textSubs);
    b.style.backgroundColor = bColor;
}
const secondSearch=(divCard, divCardColor, h, hCont,t, textValue, b, bColor)=>{
    divCard.style.backgroundColor = divCardColor;
    h.textContent = hCont;
    t.textContent = textValue.substring(2, textValue.length);
    b.style.backgroundColor = bColor;
}


window.addEventListener("load", setup);