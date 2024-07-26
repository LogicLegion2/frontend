"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
document.addEventListener('DOMContentLoaded', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  var id, urlLogic, response, data;
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        id = localStorage.getItem('ubicacionSeleccionada');
        if (!id) {
          _context2.next = 22;
          break;
        }
        urlLogic = sessionStorage.getItem("urlLogic") + "/ubicaciones/obtener/".concat(id);
        _context2.prev = 3;
        _context2.next = 6;
        return fetch(urlLogic);
      case 6:
        response = _context2.sent;
        _context2.next = 9;
        return response.json();
      case 9:
        data = _context2.sent;
        document.getElementById('ubicacion_id').value = id;
        document.getElementById('titulo').value = data.titulo;
        document.getElementById('ubicacion').value = data.ubicacion;
        document.getElementById('descripcion').value = data.descripcion;
        document.getElementById('titulo').setAttribute('placeholder', data.titulo);
        document.getElementById('ubicacion').setAttribute('placeholder', data.ubicacion);
        document.getElementById('descripcion').setAttribute('placeholder', data.descripcion);
        _context2.next = 22;
        break;
      case 19:
        _context2.prev = 19;
        _context2.t0 = _context2["catch"](3);
        console.error('Error fetching location data:', _context2.t0);
      case 22:
        document.getElementById('editForm').addEventListener('submit', /*#__PURE__*/function () {
          var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
            var formData, token, _response;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  formData = {
                    id: document.getElementById('ubicacion_id').value,
                    titulo: document.getElementById('titulo').value,
                    ubicacion: document.getElementById('ubicacion').value,
                    descripcion: document.getElementById('descripcion').value
                  };
                  _context.prev = 2;
                  token = sessionStorage.getItem("token");
                  _context.next = 6;
                  return fetch(sessionStorage.getItem("urlLogic") + '/ubicaciones/editar', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      "x-access-token": token
                    },
                    body: JSON.stringify(formData)
                  });
                case 6:
                  _response = _context.sent;
                  if (_response.ok) {
                    Swal.fire({
                      icon: 'success',
                      title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Ubicación editada exitosamente' + "</h5>",
                      showConfirmButton: false,
                      timer: 1500,
                      customClass: {
                        popup: 'bg-alert',
                        content: 'text-alert'
                      }
                    });
                    setTimeout(function () {
                      window.location.href = "/admin/ubicacion";
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
                    setTimeout(function () {
                      window.location.href = "/admin/ubicacion";
                    }, 1500);
                  }
                  _context.next = 13;
                  break;
                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](2);
                  Swal.fire({
                    icon: 'error',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Error al editar la ubicaqción' + "</h5>",
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                      popup: 'bg-alert'
                    }
                  });
                case 13:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[2, 10]]);
          }));
          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      case 23:
      case "end":
        return _context2.stop();
    }
  }, _callee2, null, [[3, 19]]);
})));