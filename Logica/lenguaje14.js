const form = document.getElementById('hijo');
const btn1 = document.getElementById('btn');
const btn2 = document.getElementById('btn2');


btn1.addEventListener("click",function agregar(){
    var parrafo = document.createElement("p")
    var contenido = document.createTextNode("Hola soy un texto y me gusta que me reproduzcan")
    parrafo.appendChild(contenido)
    parrafo.id="papa"
    form.appendChild(parrafo);
    })
btn2.addEventListener("click",function eliminar(){
    var eliminar = document.getElementById("papa")
    form.removeChild(eliminar)})



