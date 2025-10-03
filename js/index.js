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



// while -> mientras| condicion sea true -> Realiza una accion
// do while -> mientras | se ejecuta al menos una vez 

// while (condition) {
    
// }

// for (let i = 0; i < 5; i++) {
//     // const element = array[index]; 
//     alert("Hola"+i)
// }

let stock = ["guitarra acustica", "guitarra electrica", "guitarra 7 cuerdas", "ukelele"];
// console.log(stock)
// console.log(stock[3])

for (let pos = 0; pos < stock.length; pos++) {
    const element = stock[pos];
    console.log(stock[pos]);
}

stock.pop()
console.log("actualizacion: ");
console.log(stock);

for (let pos = 0; pos < stock.length; pos++) {
    const element = stock[pos];
    console.log(stock[pos]);
}