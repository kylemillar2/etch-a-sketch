function createGrid(num) {
    container.innerHTML = "";
    let total = num ** 2;
    for (let i = 0; i < total; i++) {
        let div = document.createElement("div");
        div.setAttribute("draggable", false);
        div.setAttribute("ondragstart", "return false;");
        container.appendChild(div); }

    let wh = Math.floor((container.offsetWidth / num)).toString() + "px";
    let allDivs = document.querySelectorAll(".container > div");
    allDivs.forEach(div => {div.style.width = wh;});
}

const container = document.querySelector(".container");
const boxes = document.querySelectorAll(".container > div");
const button = document.querySelector(".change-size")

container.addEventListener("mousedown", function(e) {
    if (e.target.classList.contains("container") === false) {
        e.target.classList.add("coloured");
    }
});

container.addEventListener("mouseover", function (e) {
    if (e.buttons === 1 && (e.target.classList.contains("container") === false)) {
        e.target.classList.add("coloured");
        console.log(e);
    }
})

button.addEventListener("click", () => {
    let num = prompt("Enter number of squares per row:")
    createGrid(num);
})

createGrid(16);