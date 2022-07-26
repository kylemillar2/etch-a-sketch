const container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    container.appendChild(document.createElement("div"));
}

const boxes = container.querySelectorAll("div");
boxes.forEach(box => {
    box.addEventListener("mousedown", function(e) {
        box.style.backgroundColor = "black"
    })
});

