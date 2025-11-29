
const container = document.querySelector("#container")

// Creates the 16x16 grid and applies class box to it
for (i = 0; i < 272; i++) {
    const div = document.createElement("div")
    div.className = "box"
    container.appendChild(div)
}

// Selects all boxes and then add an event listener for each box which changes the background color when the mouse touches it
const boxes = document.querySelectorAll(".box")
boxes.forEach((boxes) => {
    boxes.addEventListener("mouseover", () => {
        boxes.style.backgroundColor = "black"
    })
})