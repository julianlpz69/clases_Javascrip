
// Enviar solo texto a alguna etiqueta html ------------------------------------------------------------------------------------------------------------------------------------------------

document.getElementById("id-lugar(h1)").textContent = LoQueQuieresPonerle


// Enviar texto junto a etiquetas a alguna etiqueta html ------------------------------------------------------------------------------------------------------------------------------------------------



let LoQueQuieresPonerle2 = document.createElement("li")

LoQueQuieresPonerle2.innerHTML=
`<td>${titulo}</td>
<td>${genero}</td>
<td>${duracion}</td>
<td>${director}</td>
`; 

document.getElementById("id-lugar(h1)").appendChild(LoQueQuieresPonerle2)





// Inicar funciones donde con lleve un boton sumit y hay que evitar su recarga de pagina ------------------------------------------------------------------------------------------------------------------------------------------------

function nombre (){
    todo-el-lugar-donde-esta-el-boton.addEventListener('submit', function(e) {
    e.preventDefault();
    
})}




// Hacer que el boton hago algo ------------------------------------------------------------------------------------------------------------------------------------------------

bton.addEventListener("click" , funcion())




// Resetear la informacion de un formulario ------------------------------------------------------------------------------------------------------------------------------------------------

formulario2.reset()




// Otra forma de llamar las cosas en javascrip ------------------------------------------------------------------------------------------------------------------------------------------------

document.querySelector("h1")        // Etiquetas
document.querySelector(".class")    // Clases
document.querySelector("#id")       // Ids




// Cambiar la clase de una etiquetA ------------------------------------------------------------------------------------------------------------------------------------------------

ID-DE-LA-PAGINA.classList.toggle('d-none')      // si existe la clase la elimina si no existe la agrega

ID-DE-LA-PAGINA.classList.remove('d-none')      // Quitar

ID-DE-LA-PAGINA.classList.add('d-none')         // agregar

ID-DE-LA-PAGINA.classList.replace('d-none','d-none22')         // Remplaza la class d-none por d-none22





