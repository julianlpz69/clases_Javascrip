const botonClientes1 = document.getElementById("clientes-Link")
const btnAgregarClientes = document.getElementById("btn-Agregar-clientes")
const btnEditarClientes = document.getElementById("btn-Editar-clientes")
const btnEliminarClientes = document.getElementById("btn-Eliminar-clientes")
const btnConfirmarEliminar = document.getElementById("btnconfirmareliminar")
const btnConfirmarAgregar = document.getElementById("btnConfirmarAgregar")
const formularioClientes = document.getElementById("formularioClientes")
const divbtnconfirmar1 = document.getElementById("botones")
const divbtnconfirmar2 = document.getElementById("boton2")
const formularioAgregarClientes = document.getElementById("formularioAgregarClientes")
const formularioEliminarClientes = document.getElementById("formulario-Eliminar-Clientes")


const clientes = new Map()
// clientes.set(2695802,{nombres:"Julian Jose",apellidos:"Lopez Arellano",telefono:"3132419753",correo:"julianjoselpz2019@gmail.com",fecha:"2003-09-17",nacionalidad:"Bucaramanges"})









    btnConfirmarAgregar.addEventListener("click", function(event) {
    event.preventDefault();
    const id = document.getElementById("datoNumero").value;
    const nombres = document.getElementById("datoNombres").value;
    const apellidos = document.getElementById("datoApellidos").value;
    const telefono = document.getElementById("datoTelefono").value;
    const correo = document.getElementById("datoCorreo").value;
    const fecha = document.getElementById("datoFecha").value;
    const nacionalidad = document.getElementById("datoNacionalidad").value;

    clientes.set(id,{nombres,apellidos,telefono,correo,fecha,nacionalidad})
    formularioClientes.reset()
})




function mostrar(pametro){
    pametro.addEventListener("click", function(event) {
        event.preventDefault();
        
        const lugar = document.getElementById("lista-clientes")
        lugar.innerHTML=""
    
        for (const [miClave,miValor] of clientes) {
            const lugar = document.getElementById("lista-clientes")
            const parrafo = document.createElement("tr")
        
            parrafo.id=`${miClave}`
        
            parrafo.innerHTML=
                `<td>${miClave}</td>
                <td>${miValor.nombres}</td>
                <td>${miValor.apellidos}</td>
                <td>${miValor.telefono}</td>
                <td>${miValor.correo}</td>
                <td>${miValor.fecha}</td>
                <td>${miValor.nacionalidad}</td>
                `;
        
            lugar.appendChild(parrafo);
        
        }
    })}
    
    
    mostrar(btnConfirmarAgregar)
    


    divbtnconfirmar2.addEventListener('click', function(event) {
    event.preventDefault();
   
    const idEliminar = document.getElementById("datoNumeroEliminar").value

    if (clientes.has(idEliminar) == false){ 
        formularioClientes.reset()
        alert("Ese Numero No Corresponde a Ningun Cliente")

    }

    if (clientes.has(idEliminar) == true){ 
        clientes.delete(idEliminar)
        formularioClientes.reset()
        alert("Cliente eliminado de la lista")

    }
    
})

mostrar(divbtnconfirmar2)







botonClientes1.addEventListener('click', function(event) {
    event.preventDefault();
    formularioClientes.classList.toggle('d-none');

});


btnAgregarClientes.addEventListener('click', function(event) {
    event.preventDefault();
    formularioAgregarClientes.classList.toggle('d-none');
    formularioEliminarClientes.classList.add('d-none');

});

btnEliminarClientes.addEventListener('click', function(event) {
    event.preventDefault();
    formularioEliminarClientes.classList.toggle('d-none');
    formularioAgregarClientes.classList.add('d-none');

});


