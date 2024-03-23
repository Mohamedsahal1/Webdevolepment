const setup = () => {
    it();
}
const it=()=>{
    let lists = document.querySelectorAll("li");
    for(let l=0; l < lists.length; l++){
        lists[l].classList.add("listitem");
    }
    let st = document.getElementsByClassName("listitem");
    for(let s = 0; s < st.length; s++){
        st[s].style.backgroundColor = "red";
    }

    const im = document.createElement("img");
    im.setAttribute("src", "image/foto-van-mohamed.jpg");
    document.body.appendChild(im);
}

window.addEventListener("load", setup);