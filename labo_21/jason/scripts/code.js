
const setup = () => {
    te();
    let i = document.getElementById("b");
    i.addEventListener("click", ob);
}

const te =()=>{
    let personen=[
        {
            voornaam: 'Jan',
            familienaam: 'Janssens',
            geboorteDatum: new Date('2010-10-10'),
            email: 'jan@example.com',
            aantalKinderen: 0
        },
        {
            voornaam: 'Mieke',
            familienaam: 'Mickelsen',
            geboorteDatum: new Date('1980-01-01'),
            email: 'mieke@example.com',
            aantalKinderen: 1
        },
        {
            voornaam: 'Piet',
            familienaam: 'Pieters',
            geboorteDatum: new Date('1970-12-31'),
            email: 'piet@example.com',
            aantalKinderen: 2
        }
    ];
    let text = JSON.stringify(personen);
    console.log(text);

}
const ob =()=>{
    let inp = document.getElementById("input");
    let i = inp.value.trim();
    let g = JSON.parse(i);
    console.log(g);

}
window.addEventListener("load", setup);