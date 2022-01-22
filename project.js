const container = document.getElementById("container");
const body = document.querySelector("body");
const container2 = document.createElement("div");
container2.classList.add("cont");
body.insertBefore(container2, container);

// Makes a Grid based on the parameters given
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', cols)
    for(i = 0; i < cols; i++) {
        let cell = document.createElement("div")
        cell.textContent = (i + 1);
        container.appendChild(cell).className = "grid-item";
    }
    let total = (cols * rows) - cols;
    
    for (a = 0; a < total; a++) {
        let cell = document.createElement("div")
        cell.innerText = cols += 1;
        container.appendChild(cell).className = "grid-item";
    }
}
makeRows(16,16)

// Changes Background Color of each grid to a random one
function changeColor(e) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;
}

function changeColor2(e) {
    e.target.style.backgroundColor = "";
}

let grids = document.querySelectorAll(".grid-item");

grids.forEach(grid => grid.addEventListener("mouseenter", changeColor))
grids.forEach(grid => grid.addEventListener("mouseout", changeColor2))

let button1 = document.createElement("button");
button1.classList.add('btn');
button1.innerText = "Clear Grid";

body.insertBefore(button1, container);

let button1Select = document.querySelector('.btn')

// Removes the Grid
button1Select.addEventListener("click", function() {
    removeAllChildNodes(container)
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}
let button2 = document.createElement("button");
button2.classList.add('btn');
button2.innerText = "Create a Grid";


body.insertBefore(button2, container) 
container2.appendChild(button1);
container2.appendChild(button2);

// Asks for user input to make a grid based on the input
button2.addEventListener("click", function() {
    let askRows = Number(window.prompt("How many Rows?", ""))
    if (askRows >= 100) {
        alert("Please input a number lower than 100")
        return 0
    } else {

    }
    let askCols = Number(window.prompt("How many Columns?", "")) 
    if (askCols >= 100) {
        alert("Please input a number lower than 100")
        return 0
    } else {
        makeRows(askRows, askCols)
    }
    
    let grids = document.querySelectorAll(".grid-item");
    grids.forEach(grid => grid.addEventListener("mouseenter", changeColor))
    grids.forEach(grid => grid.addEventListener("mouseout", changeColor2))
    
})
