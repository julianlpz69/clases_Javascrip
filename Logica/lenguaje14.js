const formularioAgregarClientes = document.getElementById("formularioAgregarClientes")
const btnConfirmarAgregar = document.getElementById("btnConfirmarAgregar")
const cerrarFormulario = document.getElementById("cerrarFormulario")
const formularioClientes = document.getElementById("formularioClientes")
const btnConfirmarEdicion = document.getElementById("btnConfirmarEdicion")
const formularioEditarClientes = document.getElementById("formularioEditarClientes")


let clientes = new Map


function reset(){
    formularioAgregarClientes.reset()
}



function agregar(){
    formularioAgregarClientes.addEventListener("submit", function(event) {
    event.preventDefault();
    const id = document.getElementById("datoNumero").value;
    const nombres = document.getElementById("datoNombres").value;
    const apellidos = document.getElementById("datoApellidos").value;
    const telefono = document.getElementById("datoTelefono").value;
    const correo = document.getElementById("datoCorreo").value;

    if (telefono < 0 ){
        alert("ingrese un telefono aceptable")
    }

    else if (id < 0 ){
        alert("ingrese un ID aceptable")
    }

    else if (clientes.has(`${id}`) == true){
        alert("Ese ID Ya fue Asignado A Otro Cliente")
    }

    else{
        clientes.set(`${id}`,{nombres,apellidos,telefono,correo}) 
        formularioAgregarClientes.reset()
        $('#formularioClientes').modal('hide')
    }
})}


function mostrar(pametro){
    pametro.addEventListener("submit", function(event) {
        event.preventDefault();
        const lugar = document.getElementById("listaClientes")
        lugar.innerHTML=""
    
        for (const [miClave,miValor] of clientes) {
            const lugar = document.getElementById("listaClientes")
            const parrafo = document.createElement("tr")
            parrafo.id=`${miClave}`
        
            parrafo.innerHTML=
                `<td class="fw-bold">${miClave}</td>
                <td>${miValor.nombres}</td>
                <td>${miValor.apellidos}</td>
                <td>${miValor.telefono}</td>
                <td>${miValor.correo}</td>
                <td><button onClick="btnEditar(${miClave})" data-bs-toggle="modal" data-bs-target="#formularioEditarClientes2" type="button" class="btn btn-black"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="rgb(0, 255, 255)" class="bi bi-clipboard2-pulse" viewBox="0 0 16 16"><path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/><path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/><path d="M9.979 5.356a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.926-.08L4.69 10H4.5a.5.5 0 0 0 0 1H5a.5.5 0 0 0 .447-.276l.936-1.873 1.138 3.793a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h.5a.5.5 0 0 0 0-1h-.128L9.979 5.356Z"/></svg></button></td>
                <td><button onClick="btnDelete(${miClave})" type="button"  class="btn btn-black"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="rgb(0, 255, 255)" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/> <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg></button></td>                `;
            lugar.appendChild(parrafo);
            

        }})}

function btnEditar(ids) {
        document.getElementById("datoOculto").value = `${ids}`
        document.getElementById("datoNumero2").value = `${ids}`
        document.getElementById("datoNombres2").value = clientes.get(`${ids}`).nombres;
        document.getElementById("datoApellidos2").value = clientes.get(`${ids}`).apellidos;
        document.getElementById("datoTelefono2").value = clientes.get(`${ids}`).telefono;
        document.getElementById("datoCorreo2").value = clientes.get(`${ids}`).correo;
}

function editar(){
    formularioEditarClientes.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const idOculto = document.getElementById("datoOculto").value;
    const id = document.getElementById("datoNumero2").value;
    const nombres = document.getElementById("datoNombres2").value;
    const apellidos = document.getElementById("datoApellidos2").value;
    const telefono = document.getElementById("datoTelefono2").value;
    const correo = document.getElementById("datoCorreo2").value;


    if (id < 0 ){
        alert("ingrese un ID aceptable")
    }

    else if (clientes.has(`${id}`) == true){

        if (idOculto != id){
             alert("Ese ID Ya fue Asignado A Otro Cliente")
        }

        if (idOculto == id){
            clientes.set(`${id}`,{nombres,apellidos,telefono,correo})
            $('#formularioEditarClientes2').modal('hide')
       }
    }


    else{
        clientes.delete(`${idOculto}`)
        clientes.set(`${id}`,{nombres,apellidos,telefono,correo})
        $('#formularioEditarClientes2').modal('hide')
    }})}



function btnDelete(button) {
    console.log(clientes)
    let confirmar = confirm("¿Estas seguro de eliminar estos Datos?")
    if (confirmar==true){
    const row = document.getElementById(`${button}`);
    clientes.delete(`${button}`);
    row.remove()
    console.log(clientes)
    }}

    






    
    

btnConfirmarEdicion.addEventListener("submit",editar())
btnConfirmarEdicion.addEventListener("submit",mostrar(formularioEditarClientes))
    
btnConfirmarAgregar.addEventListener("submit",agregar())
btnConfirmarAgregar.addEventListener("submit",mostrar(formularioAgregarClientes))