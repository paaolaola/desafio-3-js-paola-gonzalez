//Ejercicio 3

//function pintar() {ele.style.backgroundColor = "yellow";}
//const ele = document.getElementById("ele1");ele.addEventListener("click", pintar);

//////////////////////////////////////////////////////////////////////////////////

//Funcion anonima modificada click

const ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
    ele.style.backgroundColor = "yellow";
});

//Funcion anonima modificada color green

ele.style.backgroundColor = "green";
ele.addEventListener("click", function () {
    ele.style.backgroundColor = "yellow";
});
