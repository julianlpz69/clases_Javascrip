
const btn1 = document.getElementById('btn1');
const form = document.getElementById('holiwi');
const contenedor = document.getElementById('contenedor-texto');
const padre = document.getElementById('tvody')

contador = 1
let numeros = []





const formu = document.getElementById('formulario');

formu.addEventListener('submit', function(event) {
    event.preventDefault();

btn1.addEventListener("click",function agregar(e){
    e.preventDefault();

    

    const tell = document.getElementById('tell').value;
    const nombres = document.getElementById('name').value;
    const gmail = document.getElementById('gmail').value;

    let lugar = document.getElementById("tvody")
    var parrafo = document.createElement("tr")
    parrafo.id=`ids${contador}`
    var btn2 = document.getElementById(`ids${contador}`);


    

    
    parrafo.innerHTML=
        `<td>${numeros.length+1}</td>
        <td>${nombres}</td>
        <td>${gmail}</td>
        <td>${tell}</td>
        <td><button id="holas${contador}">Eliminar</button></td>
        `;

        

    var lol = `holas${contador}`
    var lolo = `ids${contador}`
            
        lugar.appendChild(parrafo);
        numeros.push("uno")

    



    var btn2 = document.getElementById(lol);

    btn2.addEventListener("click",function eliminar(){
    var eliminar = document.getElementById(lolo)
    padre.removeChild(eliminar)})

    contador = contador + 1

    formu.reset()
})})
