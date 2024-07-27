"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("formAgregarUbicacion").addEventListener("submit", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var titulo, ubicacion, descripcion, foto, token, dataToSend, response, errorMessage, responseData;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            titulo = document.getElementById("agregar_titulo").value;
            ubicacion = document.getElementById("agregar_ubicacion").value;
            descripcion = document.getElementById("agregar_descripcion").value;
            foto = document.getElementById("agregar_imagen").files[0];
            if (!(!titulo || !ubicacion || !descripcion || !foto)) {
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
            dataToSend = {
              titulo: titulo,
              ubicacion: ubicacion,
              descripcion: descripcion,
              foto: foto.name
            };
            _context.prev = 10;
            _context.next = 13;
            return fetch(sessionStorage.getItem("urlLogic") + '/ubicaciones/crear', {
              method: 'POST',
              headers: {
                "content-Type": "application/json",
                "x-access-token": token
              },
              body: JSON.stringify(dataToSend)
            });
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
            _context.next = 21;
            return response.json();
          case 21:
            responseData = _context.sent;
            console.log("Ubicación registrada:", responseData);
            Swal.fire({
              icon: 'success',
              title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Ubicación registrada exitosamente</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
              }
            });
            window.location.href = "/admin/ubicacion";
            _context.next = 31;
            break;
          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](10);
            console.error("Fetch error:", _context.t0);
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al registrar ubicación</h5>",
              text: _context.t0.message,
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert'
              }
            });
          case 31:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[10, 27]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});