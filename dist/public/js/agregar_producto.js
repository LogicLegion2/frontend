"use strict";

document.getElementById("formAgregarProducto").addEventListener("click", function (e) {
  e.preventDefault();

  // Captura los valores del formulario
  var nombre = document.getElementById("agregar_nombre").value;
  var descripcion = document.getElementById("agregar_descripcion").value;
  var precio = document.getElementById("agregar_precio").value;
  var cantidad = document.getElementById("agregar_cantidad").value;
  var foto = document.getElementById("agregar_imagen").value;
  // Crea un objeto FormData para manejar la subida del archivo
  var formData = new FormData();
  formData.append("nombre", nombre);
  formData.append("descripcion", descripcion);
  formData.append("precio", precio);
  formData.append("cantidad", cantidad);
  formData.append("foto", foto);
  fetch("http://localhost:3000/productos/crear", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      cantidad: cantidad,
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