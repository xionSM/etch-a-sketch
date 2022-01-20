const container = document.getElementById("container");
const body = document.querySelector("body");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', cols)
    for(i = 0; i < (cols * rows); i++) {
        let cell = document.createElement("div")
        cell.innerText = (i + 1);
        container.appendChild(cell).className = "grid-item";

    }
}
makeRows(16,16)

function changeColor(e) {
    e.target.style.backgroundColor = "#22e6fb"

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
