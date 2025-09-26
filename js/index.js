// let edad = prompt("ingresa tu EDAD");
// alert("Hola" + edad);
// edad = edad +10;


// clase 2
// Ctrl + }
// console.log(edad);


const nombreProducto = "guitarra"
const CantidadDeseada = parseInt(prompt("Ingrese La cantidad deseada de " + nombreProducto));
const precioUnitario = 1000;
// let costoTotal = CantidadDeseada * precioUnitario;



// alert("el costo total es: " + costoTotal + " dolares por " + CantidadDeseada + " De " + nombreProducto );


// let nombre = prompt ("Ingresa tu nombre: ")


// function saludar () {
//     alert("Holaa!!")
// }

// saludar()

function sumarProductos(precioUnitario, CantidadDeseada) {
    let costoTotal = precioUnitario*CantidadDeseada;
      if (CantidadDeseada >= 5) {
    costoTotal = CantidadDeseada * precioUnitario * 0.90;
}
    alert("El total es: " + costoTotal)
  
}

// sumarProductos(1000, 1)
sumarProductos(precioUnitario,CantidadDeseada)
console.log(sumarProductos)
