// alert("asdfa")

//számokat tartalmazó négyzetek létrehozása:
/* const makeBoxes = () => {
    let boxList = [];
    for (let i = 1; i < 16; i++) {
        boxList.push(`<div id="box-${i}" class="box">${i}</div>`);
    }
    return boxList;
}; */

const makeBoxes = () =>{
    const data = [
        {number: 1},
        {number: 2},
        {number: 3},
        {number: 4},
        {number: 5},
        {number: 6},
        {number: 7},
        {number: 8},
        {number: 9},
        {number: 10},
        {number: 11},
        {number: 12},
        {number: 13},
        {number: 14},
        {number: 15}
    ];
    const content = data.map();
}

//a négyzetek megjelenítése a html-ben:
const renderBoxes = () => {
    const boxesContainer = document.querySelector(".boxes");
    boxesContainer.innerHTML = "";
    boxesContainer.innerHTML = makeBoxes().join('');

    //const boxes = document.querySelectorAll(".box"); 
    //console.log("Boxlista:2 ",boxes); //log
};

//oldal betöltésekor inicializálódik a weboldal:
//document.addEventListener("DOMContentLoaded", renderBoxes);

//ezek a kódsorok hamarabb futnak le, mint a callback függvények - ezért itt még nem létezik a renderelt tartalom
//const boxes = document.querySelectorAll(".box"); 
//console.log("Boxlista1: ",boxes); //log

document.addEventListener("DOMContentLoaded", () => {
    renderBoxes();
    const boxes = document.querySelectorAll(".box"); 
    console.log("Boxlista3: ",boxes); //log
});

//tennivalók: 
//1. kivenni az input mező értékét
//2. megfelelő e az érték? (nem üres, nem string, 1 és 15 között van)
//3. a színező gombra eseményfigyelőt helyezni - színező callback-eljárás
//4. vétetlen szám generátor
//5. számokból színt készíteni
//6. 3. feladat színező eljárásában alkalmazni ezt a színt