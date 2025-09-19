// let edad = prompt("ingresa tu EDAD");
// alert("Hola" + edad);
// edad = edad +10;


// clase 2
// Ctrl + }
// console.log(edad);


const nombreProducto = "guitarra"
let CantidadDeseada = parseInt(prompt("Ingrese La cantidad deseada de " + nombreProducto));
const precioUnitario = 1000;
let costoTotal = CantidadDeseada * precioUnitario;

if (CantidadDeseada >= 5) {
    costoTotal = CantidadDeseada * precioUnitario * 0.90;
}

alert("el costo total es: " + costoTotal + " dolares por " + CantidadDeseada + " De " + nombreProducto );

