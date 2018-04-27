var display = false;
var text = document.querySelector("h1");
var underline = document.querySelector("#underline");
var toggleStyleButton = document.querySelector("#toggleStyle");

toggleStyleButton.addEventListener("click", function() {
    display = !display;
    text.className = display ? "to-blue" : "to-black";
    underline.className = display ? "underline-show" : "underline-hide";
}, false);