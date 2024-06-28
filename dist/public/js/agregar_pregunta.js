"use strict";

document.getElementById("crearPregunta").addEventListener("click", function (e) {
  e.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Captura los valores del formulario
  var pregunta = document.getElementById("pregunta").value;
  var respuesta = document.getElementById("respuesta").value;

  // Objeto con los datos de la pregunta
  var datosPregunta = {
    pregunta: pregunta,
    respuesta: respuesta
  };

  // Enviar los datos al servidor
  fetch('http://localhost:3000/preguntas/crear', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosPregunta)
  }).then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error! Status: ".concat(response.status));
    }
    return response.json(); // Parsea la respuesta a JSON
  }).then(function (data) {
    // Verifica si la respuesta está vacía antes de intentar analizarla como JSON
    if (data) {
      console.log("Pregunta agregada:", data); // Muestra en consola la respuesta del servidor
      //  location.reload(); Recarga la página después de agregar la pregunta (opcional)
    } else {
      console.error("Fetch error: Respuesta vacía o no válida");
    }
  })["catch"](function (error) {
    console.error("Fetch error:", error); // Manejo de errores si falla la petición fetch
  });
});