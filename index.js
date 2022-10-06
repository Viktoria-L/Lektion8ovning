console.log("hello");

let sofia = document.querySelector("#change");
sofia.innerText = "Hej igen!";
let btn = document.querySelector("#changeText");
btn.addEventListener("click", () => {
    sofia.innerText = "Hej igen!";
});

let viktoriasDiv = document.querySelector("#viktoria"); //pekar på min div

let lina = document.querySelector("#linas-p");
lina.innerText = "Ändrar texten på denna";