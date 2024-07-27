"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
document.addEventListener('DOMContentLoaded', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  var id, urlLogic, response, data;
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        id = localStorage.getItem('preguntaSeleccionada');
        if (!id) {
          _context2.next = 24;
          break;
        }
        urlLogic = sessionStorage.getItem("urlLogic") + "/preguntas/obtener/".concat(id);
        _context2.prev = 3;
        _context2.next = 6;
        return fetch(urlLogic);
      case 6:
        response = _context2.sent;
        if (!response.ok) {
          _context2.next = 18;
          break;
        }
        _context2.next = 10;
        return response.json();
      case 10:
        data = _context2.sent;
        document.getElementById('pregunta_id').value = id;
        document.getElementById('pregunta').value = data.pregunta;
        document.getElementById('respuesta').value = data.respuesta;
        document.getElementById('pregunta').setAttribute('placeholder', data.pregunta);
        document.getElementById('respuesta').setAttribute('placeholder', data.respuesta);
        _context2.next = 19;
        break;
      case 18:
        console.error('Error fetching question data:', response.statusText);
      case 19:
        _context2.next = 24;
        break;
      case 21:
        _context2.prev = 21;
        _context2.t0 = _context2["catch"](3);
        console.error('Error fetching question data:', _context2.t0);
      case 24:
        document.getElementById('editForm').addEventListener('submit', /*#__PURE__*/function () {
          var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
            var formData, token, _response;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  formData = {
                    id: document.getElementById('pregunta_id').value,
                    pregunta: document.getElementById('pregunta').value,
                    resp: document.getElementById('respuesta').value
                  };
                  _context.prev = 2;
                  token = sessionStorage.getItem("token");
                  _context.next = 6;
                  return fetch(sessionStorage.getItem("urlLogic") + '/preguntas/editar', {
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
                      title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Pregunta editada exitosamente' + "</h5>",
                      showConfirmButton: false,
                      timer: 1500,
                      customClass: {
                        popup: 'bg-alert',
                        content: 'text-alert'
                      }
                    });
                    setTimeout(function () {
                      window.location.href = "/admin/pregunta";
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
                      window.location.href = "/admin/pregunta";
                    }, 1500);
                  }
                  _context.next = 13;
                  break;
                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](2);
                  Swal.fire({
                    icon: 'error',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Error al editar la pregunta' + "</h5>",
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
      case 25:
      case "end":
        return _context2.stop();
    }
  }, _callee2, null, [[3, 21]]);
})));