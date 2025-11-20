let form = document.querySelector("form");

let textInput = document.getElementById("button1");

let color = document.getElementById("color1");

form.addEventListener("submit", event=> {
    event.preventDefault();
    console.log(textInput.value)
    console.log(color.value)
    color.innerText = sessionStorage.getItem("color1")
    form.innerText = sessionStorage.getItem("form")
    textInput.innerText = sessionStorage.getItem("button1")
});
