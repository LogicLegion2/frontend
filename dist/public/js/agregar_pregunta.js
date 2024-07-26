"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("crearPreguntaForm").addEventListener("submit", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var pregunta, respuesta, datosPregunta, token, response, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            pregunta = document.getElementById("pregunta").value;
            respuesta = document.getElementById("respuesta").value;
            datosPregunta = {
              pregunta: pregunta,
              respuesta: respuesta
            };
            _context.prev = 4;
            token = sessionStorage.getItem("token");
            _context.next = 8;
            return fetch(sessionStorage.getItem("urlLogic") + '/preguntas/crear', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                "x-access-token": token
              },
              body: JSON.stringify(datosPregunta)
            });
          case 8:
            response = _context.sent;
            if (response.ok) {
              _context.next = 11;
              break;
            }
            throw new Error("HTTP error! Status: ".concat(response.status));
          case 11:
            _context.next = 13;
            return response.json();
          case 13:
            data = _context.sent;
            console.log("Pregunta agregada:", data);
            Swal.fire({
              icon: 'success',
              title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Pregunta agregada exitosamente</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
              }
            });
            window.location.href = "/admin/pregunta";
            _context.next = 23;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](4);
            console.error("Fetch error:", _context.t0);
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al agregar pregunta</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert'
              }
            });
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 19]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});