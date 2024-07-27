"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("registrarCliente").addEventListener("click", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var nombre, telefono, correo, contrasena, telefonoRegex, passwordRegex, token, options, response, errorMessage, contentType, data, text;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            nombre = document.getElementById("nombre").value;
            telefono = document.getElementById("telefono").value;
            correo = document.getElementById("correo").value;
            contrasena = document.getElementById("contrasena").value;
            if (!(!nombre || !telefono || !correo || !contrasena)) {
              _context.next = 8;
              break;
            }
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Todos los campos son obligatorios</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert'
              }
            });
            return _context.abrupt("return");
          case 8:
            telefonoRegex = /^\d{10}$/;
            if (telefonoRegex.test(telefono)) {
              _context.next = 12;
              break;
            }
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Número de teléfono no valido</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert'
              }
            });
            return _context.abrupt("return");
          case 12:
            if (correo.includes("@")) {
              _context.next = 15;
              break;
            }
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Correo electronico no valido</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert'
              }
            });
            return _context.abrupt("return");
          case 15:
            passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if (passwordRegex.test(contrasena)) {
              _context.next = 19;
              break;
            }
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>La contraseña debe tener al menos 8 caracteres, incluyendo números, letras minúsculas y mayúsculas</h5>",
              showConfirmButton: false,
              timer: 4500,
              customClass: {
                popup: 'bg-alert'
              }
            });
            return _context.abrupt("return");
          case 19:
            token = sessionStorage.getItem("token");
            options = {
              method: "POST",
              headers: {
                "content-Type": "application/json",
                "x-access-token": token
              },
              body: JSON.stringify({
                nombre: nombre,
                telefono: telefono,
                correo: correo,
                contrasena: contrasena
              })
            };
            _context.prev = 21;
            _context.next = 24;
            return fetch('https://backend-production-64de.up.railway.app/usuarios/registro', options);
          case 24:
            response = _context.sent;
            if (response.ok) {
              _context.next = 30;
              break;
            }
            _context.next = 28;
            return response.text();
          case 28:
            errorMessage = _context.sent;
            throw new Error("HTTP error! Status: ".concat(response.status, " - ").concat(errorMessage));
          case 30:
            contentType = response.headers.get('content-type');
            if (!(contentType && contentType.includes('application/json'))) {
              _context.next = 40;
              break;
            }
            _context.next = 34;
            return response.json();
          case 34:
            data = _context.sent;
            console.log("Usuario registrado:", data);
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
              window.location.href = "/";
            }, 1500);
            _context.next = 45;
            break;
          case 40:
            _context.next = 42;
            return response.text();
          case 42:
            text = _context.sent;
            console.error("Respuesta no JSON:", text);
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al agregar servicio</h5>",
              text: "Error en la respuesta del servidor",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert'
              }
            });
          case 45:
            _context.next = 51;
            break;
          case 47:
            _context.prev = 47;
            _context.t0 = _context["catch"](21);
            console.error("Fetch error:", _context.t0);
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al registrar usuario</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert'
              }
            });
          case 51:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[21, 47]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});