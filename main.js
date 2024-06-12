const container = document.querySelector(".pyramid-container");
const layerInput = document.getElementById("user-input");
const pyramidContainer = document.querySelector(".pyramid-container");
const msgAlert = document.getElementById("alert");

function createPyramid() {
    pyramidContainer.innerHTML = "";
    let width = window.screen.width < 768 ? 35 : 50;
    let userInput = layerInput.value;



    if (userInput > 10 || userInput < 5) {
        msgAlert.innerHTML = "Not a valid Size"
        return;
    } else {
        msgAlert.innerHTML = ""
        userInput = layerInput.value
    }

    msgAlert.innerHTML = ""

    for (let i = 0; i < userInput; i++) {
        const div = document.createElement('div');
        div.style.width = `${width}px`;
        div.className = "base-level"
        for (let j = 0; j <= i; j++) {
            const innerDiv = document.createElement("div");
            innerDiv.classList.add("box");
            innerDiv.style.backgroundColor = "#AD9B80"
            div.appendChild(innerDiv)
        }
        width += window.screen.width < 768 ? 35 : 50;
        container.appendChild(div);
    }
}

console.log(layerInput.value)
layerInput.addEventListener("input", createPyramid)