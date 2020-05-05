var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector("button");

function createGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function randomHex(color) {
    color.value = "#" + Math.random().toString(16).slice(2, 8)
}

function randomColorButton(){
    randomHex(color1);
    randomHex(color2);
    createGradient();
}

color1.addEventListener("input", createGradient);

color2.addEventListener("input", createGradient);

button.addEventListener("click", randomColorButton);