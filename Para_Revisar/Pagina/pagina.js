const botonClientes1 = document.getElementById("clientes-Link")
const botonRutas = document.getElementById("rutasLink")
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
const formularioEditarClientes = document.getElementById("formularioEditarClientes")
const formularioEditar = document.getElementById("formularioEditar")
const formularioRutas = document.getElementById("formularioRutas")
const formularioClientesCompra = document.getElementById("formularioClientesCompra")



const clientes = new Map()




function mostrar(pametro){
    pametro.addEventListener("click", function(event) {
        event.preventDefault();
        
        const lugar = document.getElementById("lista-clientes")
        const lugar2 = document.getElementById("tablaClientesCompra")
        lugar.innerHTML=""
        lugar2.innerHTML=`<option selected>Seleciona Al Cliente</option>`
    
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


            const parrafo2 = document.createElement("option")
            parrafo2.innerHTML=`${miValor.nombres}`
    
            lugar2.appendChild(parrafo2);
        }})}


function agregar(){
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
    formularioClientesCompra.reset()
    
})}
        

const btnEditar = document.getElementById("btnconfirmarEditar2");

function editar(){
    btnEditar.addEventListener("click", function(event) {
    event.preventDefault();
    

    formularioEditar.classList.remove('d-none')
    const idNombre = document.getElementById("datoClienteEditar").value

    const datoNombres2 = document.getElementById("datoNombres2");
    const datoApellidos2 = document.getElementById("datoApellidos2");
    const datoTelefono2 = document.getElementById("datoTelefono2");
    const datoCorreo2 = document.getElementById("datoCorreo2");
    const datoFecha2 = document.getElementById("datoFecha2");
    const datoNacionalidad2 = document.getElementById("datoNacionalidad2");


    
    datoNombres2.value = clientes.get(idNombre).nombres;
    datoApellidos2.value = clientes.get(idNombre).apellidos;
    datoTelefono2.value = clientes.get(idNombre).telefono;
    datoCorreo2.value = clientes.get(idNombre).correo;
    datoFecha2.value = clientes.get(idNombre).fecha;
    datoNacionalidad2.value = clientes.get(idNombre).nacionalidad;

})}


const btnConfirmar = document.getElementById("btnConfirmarEditar")

function editar2(){
    btnConfirmar.addEventListener("click", function(event) {
    event.preventDefault();
    const id = document.getElementById("datoClienteEditar").value;
    const nombres = document.getElementById("datoNombres2").value;
    const apellidos = document.getElementById("datoApellidos2").value;
    const telefono = document.getElementById("datoTelefono2").value;
    const correo = document.getElementById("datoCorreo2").value;
    const fecha = document.getElementById("datoFecha2").value;
    const nacionalidad = document.getElementById("datoNacionalidad2").value;

    clientes.set(id,{nombres,apellidos,telefono,correo,fecha,nacionalidad})
    formularioClientes.reset()
    formularioEditar.classList.add('d-none')

    alert("Los datos del cliente han sido modificados Exitosamente")
    
})}


function eliminar(){
    btnConfirmarEliminar.addEventListener('click', function(event) {
    event.preventDefault();

    const idEliminar = document.getElementById("datoNumeroEliminar").value

    if (clientes.has(idEliminar) == false){ 
        formularioClientes.reset()
        alert("Ese Numero No Corresponde a Ningun Cliente")

    }

    if (clientes.has(idEliminar) == true){ 
        clientes.delete(idEliminar)
        formularioClientes.reset()
        alert("Cliente eliminado de la lista")}
    })}

agregar()
mostrar(btnConfirmarAgregar)
editar()
mostrar(btnEditar)
editar2()
mostrar(btnConfirmar)
eliminar()
mostrar(btnConfirmarEliminar)


botonClientes1.addEventListener('click', function(event) {
    event.preventDefault();
    formularioClientes.classList.toggle('d-none');
    formularioRutas.classList.add('d-none');

    

});


botonRutas.addEventListener('click', function(event) {
    event.preventDefault();
    formularioRutas.classList.toggle('d-none');
    formularioClientes.classList.add('d-none');

});


btnAgregarClientes.addEventListener('click', function(event) {
    event.preventDefault();
    formularioAgregarClientes.classList.toggle('d-none');
    formularioEliminarClientes.classList.add('d-none');
    formularioEditarClientes.classList.add('d-none');

});

btnEliminarClientes.addEventListener('click', function(event) {
    event.preventDefault();
    formularioEliminarClientes.classList.toggle('d-none');
    formularioAgregarClientes.classList.add('d-none');
    formularioEditarClientes.classList.add('d-none');

});

btnEditarClientes.addEventListener('click', function(event) {
    event.preventDefault();
    formularioEditarClientes.classList.toggle('d-none');
    formularioAgregarClientes.classList.add('d-none');
    formularioEliminarClientes.classList.add('d-none');

})


const btnAgregarRutas = document.getElementById("btn-AgregarRuta");
const formularioAgregarRutas = document.getElementById("formularioAgregarRutas");


btnAgregarRutas.addEventListener('click', function(event) {
    event.preventDefault();
    formularioAgregarRutas.classList.toggle('d-none');

})










const rutas = new Map()
var numero = 1
const btnConfirmarAgregarRuta = document.getElementById('btnConfirmarAgregarRuta');




function mostrarRutas(pametro){
    pametro.addEventListener("click", function(event) {
        event.preventDefault();
        
        const lugar3 = document.getElementById("listaRutas")
        const lugar4 = document.getElementById("tablaClientesComprar2")
        lugar3.innerHTML=""
        lugar4.innerHTML=`<option selected>Seleciona A LA Ruta</option>`
    
        for (const [miClave,miValor] of rutas) {
            const lugar = document.getElementById("listaRutas")
            const parrafo = document.createElement("tr")
        
            parrafo.id=`${miClave}`
        
            parrafo.innerHTML=
            `<td>${miClave}</td>
            <td>${miValor.nombre}</td>
            <td>${miValor.valor}</td>
            <td>${miValor.origen}</td>
            <td>${miValor.destino}</td>
            <td>${miValor.puntos}</td>
            <td><button onClick="onDelete(this),mostrarRutas(this)" type="button" id="1" class="btn btn-danger">Eliminar</button></td>
                
                `;
        
            lugar.appendChild(parrafo);


        const lugar2 = document.getElementById("tablaClientesComprar2")
        const parrafo2 = document.createElement("option")
        parrafo2.id=`s${miClave}`
        parrafo2.innerHTML=`${rutas.get(numero).nombre}}`

        lugar2.appendChild(parrafo2);

        numero = numero + 1
        }})}





        var numero2 = 1
        function onDelete(button) {
            let confirmar = confirm("¿Estas seguro de eliminar esta Ruta?")
            if (confirmar==true){
            const row = document.getElementById(numero);
            const row2 = document.getElementById(`s${numero}`);
            rutas.delete(numero2);
            console.log(rutas)
            row.remove();
            row2.remove();
            
            numero2 = numero2 + 1
            }}






function agregarRuta(){
    btnConfirmarAgregarRuta.addEventListener("click", function(event) {
    event.preventDefault();
    const nombre = document.getElementById('datoNombreRuta').value;
    const valor = document.getElementById('datoValorRuta').value;
    const origen = document.getElementById('datoOrigenRuta').value;
    const destino = document.getElementById('datoDestinoRuta').value;
    const puntos = document.getElementById('datoPuntosRuta').value;

    rutas.set(numero,{nombre,valor,origen,destino,puntos})
    formularioRutas.reset()
    formularioClientesCompra.reset()
    
})}



agregarRuta()
mostrarRutas(btnConfirmarAgregarRuta)


