"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
document.addEventListener('DOMContentLoaded', function () {
  var urlLogic = sessionStorage.getItem("urlLogic");
  var token = sessionStorage.getItem("token");
  var id = sessionStorage.getItem("id");
  function agregarCarrito(_x, _x2) {
    return _agregarCarrito.apply(this, arguments);
  }
  function _agregarCarrito() {
    _agregarCarrito = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(producto, cantidad) {
      var response;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log();
            _context.prev = 1;
            _context.next = 4;
            return fetch("".concat(urlLogic, "/ventas/carrito/agregar/").concat(producto), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
              },
              body: JSON.stringify({
                id: id,
                cantidad: cantidad
              })
            });
          case 4:
            response = _context.sent;
            if (response.ok) {
              Swal.fire({
                icon: 'success',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Producto añadido al carrito' + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                  popup: 'bg-alert',
                  content: 'text-alert'
                }
              });
            } else {
              Swal.fire({
                icon: 'warning',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Debes iniciar sesión primero' + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                  popup: 'bg-alert'
                }
              });
            }
            _context.next = 12;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.error('Error adding favorite:', _context.t0);
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Error al añadir a favoritos' + "</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert'
              }
            });
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8]]);
    }));
    return _agregarCarrito.apply(this, arguments);
  }
  window.agregarCarrito = agregarCarrito;
});