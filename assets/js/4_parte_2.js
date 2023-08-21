//Ejercicio 4 (Parte 2)

const colorDiv = document.getElementById("key");
const colorDiv2 = document.getElementById("key2");

document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        colorDiv.style.backgroundColor = "pink";
    } else if (event.key === "s") {
        colorDiv.style.backgroundColor = "coral";
    } else if (event.key === "d") {
        colorDiv.style.backgroundColor = "lightblue";
    } else if (event.key === "q") {
        colorDiv2.style.backgroundColor = "purple";
    } else if (event.key === "w") {
        colorDiv2.style.backgroundColor = "grey";
    } else if (event.key === "e") {
        colorDiv2.style.backgroundColor = "sienna";
    }
});
