"use strict";

document.getElementById("registrarUsuario").addEventListener("click", function (e) {
  e.preventDefault();
  var nombre = document.getElementById("nombre").value;
  var telefono = document.getElementById("telefono").value;
  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("password").value;
  var rol = document.getElementById("rol").value;
  if (!nombre || !telefono || !correo || !contrasena || !rol) {
    Swal.fire({
      icon: 'error',
      title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Todos los campos son obligatorios</h5>",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: 'bg-alert'
      }
    });
    return;
  }
  var telefonoRegex = /^\d{10}$/;
  if (!telefonoRegex.test(telefono)) {
    Swal.fire({
      icon: 'error',
      title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Número de teléfono no valido</h5>",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: 'bg-alert'
      }
    });
    return;
  }
  if (!correo.includes("@")) {
    Swal.fire({
      icon: 'error',
      title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Correo electronico no valido</h5>",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: 'bg-alert'
      }
    });
    return;
  }
  var token = sessionStorage.getItem("token");
  var options = {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      "x-access-token": token
    },
    body: JSON.stringify({
      nombre: nombre,
      telefono: telefono,
      correo: correo,
      contrasena: contrasena,
      rol: rol
    })
  };
  fetch(sessionStorage.getItem("urlLogic") + '/usuarios/registrar', options).then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error! Status: ".concat(response.status));
    }
    return response.json();
  }).then(function (data) {
    if (data) {
      console.log("Usuario agregado:", data);
      Swal.fire({
        icon: 'success',
        title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Usuario registrado exitosamente</h5>",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: 'bg-alert',
          content: 'text-alert'
        }
      });
      setTimeout(function () {
        window.location.href = "/admin/usuario";
      }, 1500);
    } else {
      console.error("Fetch error: Respuesta vacía o no válida");
    }
  })["catch"](function (error) {
    console.error("Fetch error:", error);
  });
});