
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const contenedor = document.getElementById('contenedor-texto');



let numeros = []
let nombre = []
let email = []
let telefono = []


function agregar(nombre,gmail,telefono){
    let lugar = document.getElementById("tvody")
    var parrafo = document.createElement("tr")

    
    parrafo.innerHTML=
        `<td>${nombre}</td>
        <td>${gmail}</td>
        <td>${telefono}</td>`;

        lugar.appendChild(parrafo);
}


const formu = document.getElementById('formulario');

btn1.addEventListener("click",function agregar(event){

    event.preventDefault()
   
    const tell = document.getElementById('tell').value;
    const nombres = document.getElementById('name').value;
    const gmail = document.getElementById('gmail').value;

    let lugar = document.getElementById("tvody")
    var parrafo = document.createElement("tr")

    
    parrafo.innerHTML=
        `<td>${numeros.length+1}</td>
        <td>${nombres}</td>
        <td>${gmail}</td>
        <td>${tell}</td>`;

        lugar.appendChild(parrafo);
        numeros.push("uno")

    
    formu.reset()
})

    

    