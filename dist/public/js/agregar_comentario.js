"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("enviar").addEventListener("click", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var comentario, idUsuario, idBarbero, token, datosComentario, response, contentType, errorText, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            comentario = document.getElementById("comentario").value;
            idUsuario = sessionStorage.getItem("id");
            idBarbero = sessionStorage.getItem("idBarbero");
            token = sessionStorage.getItem("token");
            datosComentario = {
              comentario: comentario,
              idUsuario: idUsuario,
              idBarbero: idBarbero
            };
            _context.prev = 6;
            _context.next = 9;
            return fetch(sessionStorage.getItem("urlLogic") + '/comentarios/crear', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                "x-access-token": token
              },
              body: JSON.stringify(datosComentario)
            });
          case 9:
            response = _context.sent;
            contentType = response.headers.get("content-type");
            if (response.ok) {
              _context.next = 16;
              break;
            }
            _context.next = 14;
            return response.text();
          case 14:
            errorText = _context.sent;
            throw new Error("HTTP error! Status: ".concat(response.status, " - ").concat(errorText));
          case 16:
            if (!(contentType && contentType.includes("application/json"))) {
              _context.next = 25;
              break;
            }
            _context.next = 19;
            return response.json();
          case 19:
            data = _context.sent;
            console.log("Comentario agregado:", data);
            Swal.fire({
              icon: 'success',
              title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Comentario agregado exitosamente</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
              }
            });
            window.location.reload();
            _context.next = 26;
            break;
          case 25:
            throw new Error("Received content is not JSON");
          case 26:
            _context.next = 32;
            break;
          case 28:
            _context.prev = 28;
            _context.t0 = _context["catch"](6);
            console.error("Fetch error:", _context.t0);
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al agregar comentario</h5>",
              text: _context.t0.message,
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert'
              }
            });
          case 32:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[6, 28]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});