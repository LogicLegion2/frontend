"use strict";

document.getElementById("registrarBarbero").addEventListener("click", function (e) {
  e.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Captura los valores del formulario
  var nombre = document.getElementById("nombre").value;
  var telefono = document.getElementById("telefono").value;
  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("contrasena").value;
  var descripcion = document.getElementById("descripcion").value;
  var fotoPerfil = document.getElementById("fotoPerfil").value;

  // Objeto con los datos del barbero
  var datosBarbero = {
    nombre: nombre,
    correo: correo,
    contrasena: contrasena,
    telefono: telefono,
    descripcion: descripcion,
    fotoPerfil: fotoPerfil
  };

  // Enviar los datos al servidor
  fetch('http://localhost:3000/usuarios/barbero', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosBarbero)
  }).then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error! Status: ".concat(response.status));
    }
    return response.json(); // Parsea la respuesta a JSON
  }).then(function (data) {
    // Verifica si la respuesta está vacía antes de intentar analizarla como JSON
    if (data) {
      console.log("Barbero agregado:", data); // Muestra en consola la respuesta del servidor
      // location.reload(); // Recarga la página después de agregar el barbero (opcional)
    } else {
      console.error("Fetch error: Respuesta vacía o no válida");
    }
  })["catch"](function (error) {
    console.error("Fetch error:", error); // Manejo de errores si falla la petición fetch
  });
});