//Ejercicio 3

//function pintar() {ele.style.backgroundColor = "yellow";}
//const ele = document.getElementById("ele1");ele.addEventListener("click", pintar);

/////////////////////////////////////////

const ele = document.querySelector("#ele1");

//Funcion anonima modificada click

ele.addEventListener("click", () => {
    ele.style.backgroundColor = "yellow";
});

//Funcion modificada color green
const pintar = (id, color = "green") => {
    const elemento = document.querySelector(id);
    elemento.style.backgroundColor = color;
};
pintar("#ele1");

ele.addEventListener("click", () => {
    ele.style.backgroundColor = "yellow";
});
