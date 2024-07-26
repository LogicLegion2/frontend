"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
window.addEventListener('load', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  var urlParams, token, id, recursoCancelar, responseCancelar;
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        urlParams = new URLSearchParams(window.location.search);
        token = sessionStorage.getItem('token');
        id = sessionStorage.getItem('id');
        recursoCancelar = sessionStorage.getItem("urlLogic") + "/ventas/ultima";
        if (!(urlParams.get('status') === 'error')) {
          _context2.next = 11;
          break;
        }
        _context2.next = 7;
        return fetch(recursoCancelar, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "x-access-token": token
          },
          body: JSON.stringify({
            id: id
          })
        });
      case 7:
        responseCancelar = _context2.sent;
        if (responseCancelar.ok) {
          Swal.fire({
            icon: 'warning',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Compra cancelada exitosamente' + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert',
              content: 'text-alert'
            }
          });
          setTimeout(function () {
            window.location.href = "/cliente/menu";
          }, 1500);
        }
        _context2.next = 12;
        break;
      case 11:
        document.getElementById('form-comprar-producto').addEventListener('submit', /*#__PURE__*/function () {
          var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(event) {
            var metodoEntrega, direccion, productos, totalGlobal, urlLogic, recursoPago, recursoReiniciar, responsePago, data, responseReiniciar, response;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  event.preventDefault();
                  metodoEntrega = document.getElementById('metodoEntrega').value;
                  direccion = document.getElementById('direccion').value;
                  productos = JSON.parse(localStorage.getItem('productos') || '[]');
                  totalGlobal = localStorage.getItem('totalGlobal');
                  urlLogic = sessionStorage.getItem("urlLogic") + "/ventas/compra";
                  recursoPago = sessionStorage.getItem("urlLogic") + "/create-order";
                  recursoReiniciar = sessionStorage.getItem("urlLogic") + "/ventas/reiniciar";
                  _context.prev = 8;
                  _context.next = 11;
                  return fetch(recursoPago, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      totalGlobal: totalGlobal
                    })
                  });
                case 11:
                  responsePago = _context.sent;
                  _context.next = 14;
                  return responsePago.json();
                case 14:
                  data = _context.sent;
                  window.location.href = data.links[1].href;
                  _context.next = 18;
                  return fetch(recursoReiniciar, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      "x-access-token": token
                    },
                    body: JSON.stringify({
                      id: id
                    })
                  });
                case 18:
                  responseReiniciar = _context.sent;
                  if (!responsePago.ok) {
                    _context.next = 26;
                    break;
                  }
                  _context.next = 22;
                  return fetch(urlLogic, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      "x-access-token": token
                    },
                    body: JSON.stringify({
                      id: id,
                      productos: productos,
                      totalGlobal: totalGlobal,
                      metodoEntrega: metodoEntrega,
                      direccion: direccion
                    })
                  });
                case 22:
                  response = _context.sent;
                  localStorage.removeItem('productos');
                  _context.next = 28;
                  break;
                case 26:
                  Swal.fire({
                    icon: 'warning',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Debes iniciar sesión primero' + "</h5>",
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                      popup: 'bg-alert'
                    }
                  });
                  setTimeout(function () {
                    window.location.href = "/cliente/carrito";
                  }, 1500);
                case 28:
                  _context.next = 33;
                  break;
                case 30:
                  _context.prev = 30;
                  _context.t0 = _context["catch"](8);
                  console.error('Error:', _context.t0);
                case 33:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[8, 30]]);
          }));
          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      case 12:
      case "end":
        return _context2.stop();
    }
  }, _callee2);
})));