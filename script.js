
const container = document.querySelector("#container")

// Creates a grid of AxA length when given a number less than 100
function createGrid(n){
    const size = 800
    for (i = 0; i < n**2; i++) {
        const div = document.createElement("div")
        div.className = "box"
        div.style.width = `${size / n}px`
        div.style.height = `${size / n}px`
        container.appendChild(div)
    }

    // Selects all boxes and then add an event listener for each box which changes the background color when the mouse touches it
    const boxes = document.querySelectorAll(".box")
    boxes.forEach((boxes) => {
    boxes.addEventListener("mouseover", () => {
        boxes.style.backgroundColor = "black"
        })
    })
}

function obtainPixels(){
    let count = 0
    do {
        count = Number(prompt("Enter a number between 1 and 100"))
    } while (count < 1 || count > 100)
    return count
}

function deleteGrid(){
    const boxes = document.querySelectorAll(".box")
    boxes.forEach(el => el.remove())
}

const canvas = document.querySelector(".canvas")
canvas.addEventListener("click", () => {
    deleteGrid()
    createGrid(obtainPixels())
})

createGrid(16)
