let form = document.querySelector("form");

let textInput = document.getElementById("button1");

form.addEventListener("submit", event=> {
    event.preventDefault();
    console.log(textInput.value)
});