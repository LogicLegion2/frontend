"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function eliminarEntrega(_x) {
  return _eliminarEntrega.apply(this, arguments);
}
function _eliminarEntrega() {
  _eliminarEntrega = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          localStorage.getItem('entregaSeleccionada', id);
          Swal.fire({
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + '¿Estás seguro de marcar como entregada?' + "</h5>",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#318331",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, marcar",
            cancelButtonText: "Cancelar",
            customClass: {
              popup: 'bg-alert',
              content: 'text-alert'
            }
          }).then( /*#__PURE__*/function () {
            var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(result) {
              var token, urlLogic, respuesta;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!result.isConfirmed) {
                      _context.next = 11;
                      break;
                    }
                    token = sessionStorage.getItem("token");
                    urlLogic = sessionStorage.getItem("urlLogic") + "/ventas/desactivar";
                    if (!id) {
                      _context.next = 10;
                      break;
                    }
                    _context.next = 6;
                    return fetch(urlLogic, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        "x-access-token": token
                      },
                      body: JSON.stringify({
                        id: id
                      })
                    });
                  case 6:
                    respuesta = _context.sent;
                    if (respuesta.ok) {
                      Swal.fire({
                        icon: 'success',
                        title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Entrega marcada exitosamente' + "</h5>",
                        showConfirmButton: false,
                        timer: 1500,
                        customClass: {
                          popup: 'bg-alert',
                          content: 'text-alert'
                        }
                      });
                      setTimeout(function () {
                        window.location.reload();
                      }, 1500);
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
                  case 10:
                    Swal.fire({
                      icon: 'error',
                      title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Seleccione una entrega primero' + "</h5>",
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
              }, _callee);
            }));
            return function (_x2) {
              return _ref.apply(this, arguments);
            };
          }());
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _eliminarEntrega.apply(this, arguments);
}