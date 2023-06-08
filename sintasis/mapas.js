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

var clientes = new Map()

nombres = "hola"
apellidos = "perooo"
id = 212123
telefono = "sadas"
clientes.set(id,{nombres,apellidos, telefono})

console.log(clientes.has("sadas"))
 
// Recorrer el Map utilizando un bucle for...of
// for (const [miClave, miValor] of clientes) {
//     console.log(miClave, miValor.telefono);
// }




// Eliminar un elemento del Map
console.log(miMapa.delete('clave3'))
console.log(miMapa)




// Vaciar el Map
miMapa.clear();
console.log(miMapa)
