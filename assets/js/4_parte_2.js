//Ejercicio 4 (Parte 2)

const colorDiv = document.getElementById("key");

document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        colorDiv.style.backgroundColor = "pink";
    } else if (event.key === "s") {
        colorDiv.style.backgroundColor = "orange";
    } else if (event.key === "d") {
        colorDiv.style.backgroundColor = "lightblue";
    } else if (event.key === "q") {
        colorDiv.style.backgroundColor = "purple";
    } else if (event.key === "w") {
        colorDiv.style.backgroundColor = "grey";
    } else if (event.key === "e") {
        colorDiv.style.backgroundColor = "brown";
    }
});
