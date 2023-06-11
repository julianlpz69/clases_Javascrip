


/* Agregar LA Informacion Del Formulario A El Mapa De Objetos  */
function agregar(){
    btnConfirmarAgregar.addEventListener("submit", function(event) {
    event.preventDefault();
    const id = document.getElementById("datoNumero").value;
    const nombres = document.getElementById("datoNombres").value;
    const apellidos = document.getElementById("datoApellidos").value;
    const telefono = document.getElementById("datoTelefono").value;
    const correo = document.getElementById("datoCorreo").value;
    const fecha = document.getElementById("datoFecha").value;
    const nacionalidad = document.getElementById("datoNacionalidad").value;


    if (id < 0 || isNaN(Number(id)) || telefono < 0 || isNaN(Number(telefono)) ){
        alert("ingrese un valor aceptable")
    }
    else{
        clientes.set(id,{nombres,apellidos,telefono,correo,fecha,nacionalidad});
       }
})}
/* ------------------------------------------------ -------------------------------------------------------------------*/



/* Mostrar/Agregar La Informacion Agregada a Un Mapa de Objetos en una TAbla  */
function mostrar(pametro){
    pametro.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const lugar = document.getElementById("lista-clientes");
        lugar.innerHTML="";
    
        for (const [miClave,miValor] of clientes) {
            const lugar = document.getElementById("lista-clientes");
            const parrafo = document.createElement("tr");
        
            parrafo.id=`${miClave}`;
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
        }})}
/* ------------------------------------------------ -------------------------------------------------------------------*/




/* Editar informacion de un Formulario Pidiendo el ID -------------------------------------------------------------------*/
function editar(){
    const btnEditar = document.getElementById("btnConfirmarEditar");
    btnEditar.addEventListener("click", function(event) {
    event.preventDefault();
    
    formularioEditar.classList.remove('d-none');
    const idNombre = document.getElementById("datoClienteEditar").value;
    const datoNombres2 = document.getElementById("datoNombres2");
    const datoApellidos2 = document.getElementById("datoApellidos2");
    const datoTelefono2 = document.getElementById("datoTelefono2");
    const datoCorreo2 = document.getElementById("datoCorreo2");
    const datoFecha2 = document.getElementById("datoFecha2");
    const datoNacionalidad2 = document.getElementById("datoNacionalidad2");


/* Para que los input ya esten llenos con los valores puestos es agregar */
    datoNombres2.value = clientes.get(idNombre).nombres;
    datoApellidos2.value = clientes.get(idNombre).apellidos;
    datoTelefono2.value = clientes.get(idNombre).telefono;
    datoCorreo2.value = clientes.get(idNombre).correo;
    datoFecha2.value = clientes.get(idNombre).fecha;
    datoNacionalidad2.value = clientes.get(idNombre).nacionalidad;
})}

/* Despues debe aver otro boton que diga confirmar los cambios y manda los cambios a el mapa de objetos*/

    function editar2(){
    const btnConfirmar = document.getElementById("btnConfirmarEditar");

    btnConfirmar.addEventListener("click", function(event) {
    event.preventDefault();
    const id = document.getElementById("datoClienteEditar").value;
    const nombres = document.getElementById("datoNombres2").value;
    const apellidos = document.getElementById("datoApellidos2").value;
    const telefono = document.getElementById("datoTelefono2").value;
    const correo = document.getElementById("datoCorreo2").value;
    const fecha = document.getElementById("datoFecha2").value;
    const nacionalidad = document.getElementById("datoNacionalidad2").value;


    if (valor < 0 || isNaN(Number(valor)) ){
        alert("ingrese un valor aceptable")
    }
    else{
        clientes.set(id,{nombres,apellidos,telefono,correo,fecha,nacionalidad});
        formularioClientes.reset();
        alert("Los datos del cliente han sido modificados Exitosamente");}
    
   
})}
/* ------------------------------------------------ -------------------------------------------------------------------*/



/* Eliminar Informacion Del Mapa Pidiendo el id*/

function eliminar(){
    const btnConfirmarEliminar = document.getElementById("btnConfirmarEditar");
    btnConfirmarEliminar.addEventListener('click', function(event) {
    event.preventDefault();

    const idEliminar = document.getElementById("datoNumeroEliminar").value;

    if (clientes.has(idEliminar) == false){ 
        formularioClientes.reset();
        alert("Ese Numero No Corresponde a Ningun Cliente");

    }

    if (clientes.has(idEliminar) == true){ 
        clientes.delete(idEliminar);
        formularioClientes.reset();
        alert("Cliente eliminado de la lista");}
    })}
/* ------------------------------------------------ -------------------------------------------------------------------*/



/* Ocultar y desocultar informacion de la diferentes servicios de la pagina */

function ocultar(parametro1,parametro2,parametro3,parametro4,parametro5){
    parametro1.addEventListener('click', function(event) {
        event.preventDefault();
        parametro2.classList.toggle('d-none');
        parametro3.classList.add('d-none');
        parametro4.classList.add('d-none');
        parametro5.classList.add('d-none');
    })}
/* ------------------------------------------------ -------------------------------------------------------------------*/


/*Boton que al previonar eliminar toda la linea del formulario */

var idDelTr = 1

/* <td><button onClick="btnDelete(this),mostrarRutas(this)" type="button" id="1" class="btn btn-danger">Eliminar</button></td>*/

function btnDelete(button) {
    let confirmar = confirm("¿Estas seguro de eliminar esta Ruta?")
    if (confirmar==true){
    const TR = document.getElementById(idDelTr);
    Mapa.delete(numero2);
    TR.remove();

    
    idDelTr = idDelTr + 1
    }}
/* ------------------------------------------------ -------------------------------------------------------------------*/
