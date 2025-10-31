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





//clase 6:  

let producto ={
    nombre: "Camiseta",
    precio: 1000,
    CantidadDisponible: 5
}

producto.nombre= "Zapatillas";
producto.categoria = "calzado";
delete producto.CantidadDisponible;


//clase 6

// let titulo = document.querySelector("h2");
// titulo.style.color = "blue";
// titulo.innerText = "Gallate";
// titulo.style.fontSize = "25px";

// let precio = document.querySelector("p");
// precio.innerText = "$800";




// clase 7

let parrafoAgregado = document.createElement("p");
parrafoAgregado.innerText = "galleta";
console.log(parrafoAgregado);
document.body.appendChild(parrafoAgregado);

parrafoAgregado.remove();