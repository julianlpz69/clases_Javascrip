// Crear un nuevo Map
const miMapa = new Map();



// Un Mapa De Objetos IMPORTANTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
const miMapa2 = new Map();


let titulo = "harry Poter"

let holas = "peoo"
let holas2 = "peoo2"
let holas3 = "peoo3"

miMapa2.set(titulo,{holas,holas2,holas3})

console.log(miMapa2)

console.log(miMapa2.get(titulo).holas2)

console.log(miMapa2.has(titulo)) // ver si el valor existe en el mapa






// Agregar elementos al Map
miMapa.set('clave1', 'valor1');
miMapa.set('clave2', 'valor2');
miMapa.set('clave3', 'valor3');

console.log(miMapa)


// Obtener el tamaño del Map
console.log('Tamaño del Map:', miMapa.size);



// Obtener un valor del Map
console.log('Valor de clave2:', miMapa.get('clave2'));



// Agregar al mapa
miMapa.set("clave4","valor4")
console.log(miMapa);


// Cambiar el valor de una clave
miMapa.set("clave1","valor10")
console.log(miMapa);



// Comprobar si una clave existe en el Map
console.log('¿Existe clave3?', miMapa.has('clave3'));




// Recorrer el Map utilizando un bucle for...of
for (const [miClave, miValor] of miMapa) {
    console.log(miClave, miValor);
}




// Eliminar un elemento del Map
console.log(miMapa.delete('clave3'))
console.log(miMapa)




// Vaciar el Map
miMapa.clear();
console.log(miMapa)
