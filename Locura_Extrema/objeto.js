var persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",

    saludar: function() {
        var saludo = "Hola, soy " + this.nombre + "!";
        document.getElementById("saludo").textContent = saludo;
    }
};

console.log(persona.nombre);  // Resultado: "Juan"
console.log(persona.edad);    // Resultado: 30
console.log(persona.ciudad);  // Resultado: "Madrid"

persona.saludar();  // Resultado: "Hola, soy Juan!"


persona.profesion = "Ingeniero";
persona.cambiarCiudad = function(nuevaCiudad) {
 this.ciudad = nuevaCiudad;
};

console.log(persona.profesion);  // Resultado: "Ingeniero"

persona.cambiarCiudad("Barcelona");
console.log(persona.ciudad);









// Define un objeto de película muy usable ---------------------------------------------------------------------------------------------------------------------------------------------------
var pelicula = {
    titulo: "El Señor de los Anillos",
    genero: "Fantasía",
    director: "Peter Jackson",
    duracion: 201,
    mostrarInformacion: function() {
        var informacion = "Título: " + this.titulo + "<br>" +
                        "Género: " + this.genero + "<br>" +
                        "Director: " + this.director + "<br>" +
                        "Duración: " + this.duracion + " minutos";
        document.getElementById("informacion").innerHTML = informacion;
    }
};

  // Muestra la información de la película en la página
pelicula.mostrarInformacion();