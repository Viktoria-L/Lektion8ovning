console.log("hello");

let sofia = document.querySelector("#change");
let btn = document.querySelector("#changeText");
btn.addEventListener("click", () => {
    sofia.innerText = "Hej igen!";
});

let viktoriasDiv = document.querySelector("#viktoria"); //pekar på min div
