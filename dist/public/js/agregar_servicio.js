"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("crearServicio").addEventListener("submit", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var tipoServicio, descripcion, precio, fotoServicio, token, options, response, errorMessage, contentType, data, text;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            tipoServicio = document.getElementById("tiposervicio").value;
            descripcion = document.getElementById("descripcion").value;
            precio = document.getElementById("precio").value;
            fotoServicio = document.getElementById("fotoServicio").files[0];
            if (!(!tipoServicio || !descripcion || !precio || !fotoServicio)) {
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
            token = sessionStorage.getItem("token");
            options = {
              method: "POST",
              headers: {
                "content-Type": "application/json",
                "x-access-token": token
              },
              body: JSON.stringify({
                tipoServicio: tipoServicio,
                descripcion: descripcion,
                precio: precio,
                fotoServicio: fotoServicio
              })
            };
            _context.prev = 10;
            _context.next = 13;
            return fetch(sessionStorage.getItem("urlLogic") + '/servicios/crear', options);
          case 13:
            response = _context.sent;
            if (response.ok) {
              _context.next = 19;
              break;
            }
            _context.next = 17;
            return response.text();
          case 17:
            errorMessage = _context.sent;
            throw new Error("HTTP error! Status: ".concat(response.status, " - ").concat(errorMessage));
          case 19:
            contentType = response.headers.get('content-type');
            if (!(contentType && contentType.includes('application/json'))) {
              _context.next = 29;
              break;
            }
            _context.next = 23;
            return response.json();
          case 23:
            data = _context.sent;
            console.log("Servicio agregado:", data);
            Swal.fire({
              icon: 'success',
              title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Servicio agregado exitosamente</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
              }
            });
            setTimeout(function () {
              window.location.href = "/admin/servicio";
            }, 1500);
            _context.next = 34;
            break;
          case 29:
            _context.next = 31;
            return response.text();
          case 31:
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
          case 34:
            _context.next = 40;
            break;
          case 36:
            _context.prev = 36;
            _context.t0 = _context["catch"](10);
            console.error("Fetch error:", _context.t0);
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al agregar servicio</h5>",
              text: _context.t0.message,
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
      }, _callee, null, [[10, 36]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});