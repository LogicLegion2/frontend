"use strict";

document.getElementById("registrarCliente").addEventListener("click", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var telefono = document.getElementById("telefono").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var datosUsuario = {
    nombre: name,
    telefono: telefono,
    correo: email,
    contrasena: password
  };
  fetch("http://localhost:3000/usuarios/registro", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosUsuario)
  }).then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error! Status: ".concat(response.status));
    }
    return response.json();
  }).then(function (data) {
    console.log("Usuario agregado:", data);
    // Aquí podrías mostrar una alerta o realizar alguna acción adicional después de agregar el usuario
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
    // Opcional: Redireccionar después de un tiempo
    setTimeout(function () {
      window.location.href = 'http://localhost:3800/cliente/home'; // Cambia por la ruta deseada
    }, 1500);
  })["catch"](function (error) {
    console.error("Fetch error:", error);
    Swal.fire({
      icon: 'error',
      title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al registrar usuario</h5>",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: 'bg-alert'
      }
    });
  });
});