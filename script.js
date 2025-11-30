
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
}

createGrid(16)

// Selects all boxes and then add an event listener for each box which changes the background color when the mouse touches it
const boxes = document.querySelectorAll(".box")
boxes.forEach((boxes) => {
    boxes.addEventListener("mouseover", () => {
        boxes.style.backgroundColor = "black"
    })
})