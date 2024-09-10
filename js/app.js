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
    const content = data.map( ({ number }) => `<div id="${number}" class="box">${number}</div>` );
    return content;
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

//tennivalók: 
//1. kivenni az input mező értékét
const getInputValue = function(){
    return document.querySelector("#num").value;
};

//2. megfelelő e az érték? (nem üres, nem string, 1 és 15 között van)
const checkValue = () =>{
    const value = getInputValue();
    if (!value.trim()){
        return [false, 0];
    }
    if (isNaN(value)){
        return [false, 0]; 
    }
    const currentValue = Number(value)
    if(currentValue < 1 || currentValue > 15){
        return [false, 0]; 
    }
    return [true, currentValue];
};

//4. vétetlen szám generátor
const randomNumber = () =>{
    return Math.floor(Math.random() * 256);
};

//5. számokból színt készíteni
const createColor = () =>{
    const r = randomNumber();
    const g = randomNumber();
    const b = randomNumber();
    return [r, g, b];
};

//szinezes vegrehajtasa
const coloringBox = () =>{
    const [ isValid, number ] = checkValue();
    if (!isValid){
        sendErrorMessage();
        return;
    }
    const boxes = document.querySelectorAll(".box"); 
    const box = Array.from(boxes).find(b => Number(b.id) === number);
    const [ r, g, b ] = createColor();
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};

function sendErrorMessage() {
    alert("Helytelen értéket adott meg!")
};

function clearInput(){
    const inputElement = document.querySelector("#num");
    inputElement.value = "";
    inputElement.focus();
}

//szinezo gomb mukodtetese
const coloring = () =>{
    const button = document.querySelector(".card button:nth-child(3)");
    button.addEventListener("click", ()=>{
        coloringBox();
        clearInput();
    });
   
};

const reset = () =>{
    const resetButton = document.querySelector(".card button:nth-child(4)");
    resetButton.addEventListener("click", () =>{
        renderBoxes();
        //coloring();
        clearInput();
    })
}

//3. a színező gombra eseményfigyelőt helyezni - színező callback-eljárás

//6. 3. feladat színező eljárásában alkalmazni ezt a színt

//az oldal inicializalasa - dinamikus tartalom feltoltese
document.addEventListener("DOMContentLoaded", () => {
    renderBoxes();
    coloring();
    reset();
    const boxes = document.querySelectorAll(".box"); 
    console.log("Boxlista3: ",boxes); //log
});

