const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const formulario1 = document.getElementById('formu2');



let contador = 1

function ola (){
    formulario1.addEventListener('submit', function(event) {
    event.preventDefault();
    const titulo = document.getElementById('dato1').value;
    const genero = document.getElementById('dato2').value;
    const duracion = document.getElementById('dato3').value;
    const director = document.getElementById('dato4').value;
    const lugar = document.getElementById("tvody")
    const parrafo = document.createElement("tr")

    parrafo.id=`ids${contador}`

    parrafo.innerHTML=
        `<td>${titulo}</td>
        <td>${genero}</td>
        <td>${duracion}</td>
        <td>${director}</td>
        <td><button id="holas${contador}">Eliminar</button></td>
        `;

    lugar.appendChild(parrafo);
    contador = contador+1
    formulario1.reset()
})}


btn4.addEventListener("click",ola())



