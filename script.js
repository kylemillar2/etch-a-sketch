const container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.setAttribute("draggable", false);
    container.appendChild(div);
}

const boxes = container.querySelectorAll("div");

container.addEventListener("mousedown", function(e) {
    e.target.classList.add("coloured");
});

container.addEventListener("mouseover", function (e) {
    if (e.buttons === 1) {
        e.target.classList.add("coloured");
    }
})

const button = document.querySelector(".change-size")
