
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const contenedor = document.getElementById('contenedor-texto');


let numeros = []
let nombre = []
let email = []
let telefono = []



btn1.addEventListener("click",function agregar(){

    let nombres =(prompt("Escribe el nombre"))
    nombre.push(nombres)
    
    let emails =(prompt("Escribe el nombre"))
    email.push(emails)

    let telefonos =(prompt("Escribe el nombre"))
    telefono.push(telefonos)
    


    let simulado = <tr>
        <td>${telefonos}</td>
        <td>${nombres}</td>
        <td>${emails}</td>
        <td>${telefonos}</td>
    </tr>


    
    })

