"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
document.addEventListener('DOMContentLoaded', function () {
  var urlLogic = sessionStorage.getItem("urlLogic");
  var token = sessionStorage.getItem("token");
  var id = sessionStorage.getItem("id");
  function barberoFavorito(_x) {
    return _barberoFavorito.apply(this, arguments);
  }
  function _barberoFavorito() {
    _barberoFavorito = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(barbero) {
      var response;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("".concat(urlLogic, "/favoritos/barbero/").concat(barbero), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
              },
              body: JSON.stringify({
                id: id
              })
            });
          case 3:
            response = _context.sent;
            if (response.ok) {
              Swal.fire({
                icon: 'success',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Barbero añadido a favoritos' + "</h5>",
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
            _context.next = 11;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
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
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return _barberoFavorito.apply(this, arguments);
  }
  function productoFavorito(_x2) {
    return _productoFavorito.apply(this, arguments);
  }
  function _productoFavorito() {
    _productoFavorito = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(producto) {
      var response;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch("".concat(urlLogic, "/favoritos/producto/").concat(producto), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
              },
              body: JSON.stringify({
                id: id
              })
            });
          case 3:
            response = _context2.sent;
            if (response.ok) {
              Swal.fire({
                icon: 'success',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Producto añadido a favoritos' + "</h5>",
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
            _context2.next = 11;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error('Error adding favorite:', _context2.t0);
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Error al añadir a favoritos' + "</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert'
              }
            });
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return _productoFavorito.apply(this, arguments);
  }
  function servicioFavorito(_x3) {
    return _servicioFavorito.apply(this, arguments);
  }
  function _servicioFavorito() {
    _servicioFavorito = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(servicio) {
      var response;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return fetch("".concat(urlLogic, "/favoritos/servicio/").concat(servicio), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
              },
              body: JSON.stringify({
                id: id
              })
            });
          case 3:
            response = _context3.sent;
            if (response.ok) {
              Swal.fire({
                icon: 'success',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Servicio añadido a favoritos' + "</h5>",
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
            _context3.next = 11;
            break;
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.error('Error adding favorite:', _context3.t0);
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Error al añadir a favoritos' + "</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert'
              }
            });
          case 11:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 7]]);
    }));
    return _servicioFavorito.apply(this, arguments);
  }
  function ofertaFavorito(_x4) {
    return _ofertaFavorito.apply(this, arguments);
  }
  function _ofertaFavorito() {
    _ofertaFavorito = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(oferta) {
      var response;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return fetch("".concat(urlLogic, "/favoritos/oferta/").concat(oferta), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
              },
              body: JSON.stringify({
                id: id
              })
            });
          case 3:
            response = _context4.sent;
            if (response.ok) {
              Swal.fire({
                icon: 'success',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Oferta añadido a favoritos' + "</h5>",
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
            _context4.next = 11;
            break;
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.error('Error adding favorite:', _context4.t0);
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Error al añadir a favoritos' + "</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert'
              }
            });
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return _ofertaFavorito.apply(this, arguments);
  }
  window.barberoFavorito = barberoFavorito;
  window.productoFavorito = productoFavorito;
  window.servicioFavorito = servicioFavorito;
  window.ofertaFavorito = ofertaFavorito;
});