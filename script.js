function createGrid() {
    for (let i = 0; i < 256; i++) {
        let div = document.createElement("div");
        div.setAttribute("draggable", false);
        div.setAttribute("ondragstart", "return false;");
        container.appendChild(div);
    }
}

const container = document.querySelector(".container");
const boxes = document.querySelectorAll(".container > div");

container.addEventListener("mousedown", function(e) {
    e.target.classList.add("coloured");
});

container.addEventListener("mouseover", function (e) {
    if (e.buttons === 1 && (e.target.classList.contains("container") === false)) {
        e.target.classList.add("coloured");
        console.log(e);
    }
})

createGrid();

const button = document.querySelector(".change-size")
