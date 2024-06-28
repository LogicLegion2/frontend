"use strict";

document.getElementById("formAgregarUbicacion").addEventListener("click", function (e) {
  e.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Captura los valores del formulario
  var titulo = document.getElementById("agregar_titulo").value;
  var ubicacion = document.getElementById("agregar_ubicacion").value;
  var descripcion = document.getElementById("agregar_descripcion").value;
  var foto = document.getElementById("agregar_imagen").value;
  // Crear un objeto FormData para manejar la subida del archivo
  var formData = new FormData();
  formData.append("titulo", titulo);
  formData.append("ubicacion", ubicacion);
  formData.append("descripcion", descripcion);
  formData.append("foto", foto);
  fetch("http://localhost:3000/ubicaciones/crear", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      titulo: titulo,
      ubicacion: ubicacion,
      descripcion: descripcion,
      foto: foto
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);
  })["catch"](function (error) {
    return console.log(error);
  });
});