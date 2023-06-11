const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const formulario2 = document.getElementById('formu2');
const formulario11 = document.getElementById('formu11');
const formulario12 = document.getElementById('formu12');
const formulario13 = document.getElementById('formu13');
const formulario3 = document.getElementById('formu3');
const listap = document.getElementById('list')

var lista = []


let contador = 0

function agregar (){
    formulario2.addEventListener('submit', function(event) {
    event.preventDefault();
    const titulo = document.getElementById('dato1').value;
    const genero = document.getElementById('dato2').value;
    const duracion = document.getElementById('dato3').value;
    const director = document.getElementById('dato4').value;
    

    var miMapa = new Map();

    miMapa.set('titulo', titulo);
    miMapa.set('genero', genero);
    miMapa.set('duracion', duracion);
    miMapa.set('director', director);

    lista.push(miMapa)

    const lugar = document.getElementById("tvody")
    const parrafo = document.createElement("tr")
    const lugar2 = document.getElementById("lista-peliculas")

    parrafo.id=`ids${contador}`

    parrafo.innerHTML=
        `<td>${titulo}</td>
        <td>${genero}</td>
        <td>${duracion}</td>
        <td>${director}</td>
        `;

    lugar.appendChild(parrafo);

    let parrafo2 = document.createElement("li")
    
    parrafo2.innerHTML = `${titulo}`
    lugar2.appendChild(parrafo2);

    contador = contador+1
    formulario2.reset()
})}

// // Función para eliminar una película
// function borrarPelicula(index) {
//     peliculas.splice(index, 1);
//     cargarPeliculas();
//   }

function botones (pametro1,parametro2){
    parametro2.addEventListener('submit', function(event) {
    event.preventDefault();
    
    pametro1.classList.toggle('d-none')
        
})}


btn1.addEventListener("submit" , botones(formulario2,formulario11))

btn2.addEventListener("submit" , botones(listap,formulario12))

btn3.addEventListener("submit" , botones(formulario3,formulario13))

btn4.addEventListener("submit",agregar())