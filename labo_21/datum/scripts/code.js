const setup = () => {
    breken();

}

const breken=()=>{
    let huidigeDatum = new Date();
    let verjaardag = new Date('Febraury 02, 2025 05:54:00');
    let tussenTijd = verjaardag.getTime() -huidigeDatum.getTime();
    let dagen = Math.round (tussenTijd  / (1000 * 60 *60 * 24));
    console.log(`huidige datum ${huidigeDatum.toISOString()}`);
    console.log(`verjaardag : ${verjaardag.toISOString()}`);
    console.log(`aantal dagen ${dagen}`)
}
window.addEventListener("load", setup);