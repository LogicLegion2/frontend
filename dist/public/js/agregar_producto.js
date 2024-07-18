"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("formAgregarProducto").addEventListener("submit", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var nombre, descripcion, precio, cantidad, fotoProducto, token, options, response, errorMessage, contentType, data, text;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            nombre = document.getElementById("agregar_nombre").value;
            descripcion = document.getElementById("agregar_descripcion").value;
            precio = document.getElementById("agregar_precio").value;
            cantidad = document.getElementById("agregar_cantidad").value;
            fotoProducto = document.getElementById("agregar_imagen").files[0];
            if (!(!nombre || !descripcion || !precio || !cantidad || !fotoProducto)) {
              _context.next = 9;
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
          case 9:
            token = sessionStorage.getItem('token');
            options = {
              method: 'POST',
              headers: {
                "content-Type": "application/json",
                "x-access-token": token
              },
              body: JSON.stringify({
                nombre: nombre,
                descripcion: descripcion,
                cantidad: cantidad,
                precio: precio,
                fotoProducto: fotoProducto
              })
            };
            _context.prev = 11;
            _context.next = 14;
            return fetch(sessionStorage.getItem("urlLogic") + '/productos/crear', options);
          case 14:
            response = _context.sent;
            if (response.ok) {
              _context.next = 20;
              break;
            }
            _context.next = 18;
            return response.text();
          case 18:
            errorMessage = _context.sent;
            throw new Error("HTTP error! Status: ".concat(response.status, " - ").concat(errorMessage));
          case 20:
            contentType = response.headers.get('content-type');
            if (!(contentType && contentType.includes('application/json'))) {
              _context.next = 30;
              break;
            }
            _context.next = 24;
            return response.json();
          case 24:
            data = _context.sent;
            console.log("Producto agregado:", data);
            Swal.fire({
              icon: 'success',
              title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Producto agregado exitosamente</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
              }
            });
            setTimeout(function () {
              window.location.href = "/admin/producto";
            }, 1500);
            _context.next = 35;
            break;
          case 30:
            _context.next = 32;
            return response.text();
          case 32:
            text = _context.sent;
            console.error("Respuesta no JSON:", text);
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al agregar producto</h5>",
              text: "Error en la respuesta del servidor",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert'
              }
            });
          case 35:
            _context.next = 40;
            break;
          case 37:
            _context.prev = 37;
            _context.t0 = _context["catch"](11);
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al agregar producto</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert'
              }
            });
          case 40:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[11, 37]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});