"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
document.addEventListener('DOMContentLoaded', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  var urlUbicaciones, urlBarberos, urlServicios, _yield$Promise$all, _yield$Promise$all2, ubicacionesResponse, barberosResponse, serviciosResponse, ubicacionesData, barberosData, serviciosData, ubicacionesSelect, barberosSelect, serviciosSelect;
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        urlUbicaciones = sessionStorage.getItem("urlLogic") + "/ubicaciones";
        urlBarberos = sessionStorage.getItem("urlLogic") + "/barberos/admin";
        urlServicios = sessionStorage.getItem("urlLogic") + "/servicios";
        _context2.prev = 3;
        _context2.next = 6;
        return Promise.all([fetch(urlUbicaciones), fetch(urlBarberos), fetch(urlServicios)]);
      case 6:
        _yield$Promise$all = _context2.sent;
        _yield$Promise$all2 = (0, _slicedToArray2["default"])(_yield$Promise$all, 3);
        ubicacionesResponse = _yield$Promise$all2[0];
        barberosResponse = _yield$Promise$all2[1];
        serviciosResponse = _yield$Promise$all2[2];
        if (!(ubicacionesResponse.ok || barberosResponse.ok || serviciosResponse.ok)) {
          _context2.next = 27;
          break;
        }
        _context2.next = 14;
        return ubicacionesResponse.json();
      case 14:
        ubicacionesData = _context2.sent;
        _context2.next = 17;
        return barberosResponse.json();
      case 17:
        barberosData = _context2.sent;
        _context2.next = 20;
        return serviciosResponse.json();
      case 20:
        serviciosData = _context2.sent;
        ubicacionesSelect = document.getElementById('ubicacion');
        barberosSelect = document.getElementById('barbero');
        serviciosSelect = document.getElementById('servicio');
        ubicacionesData.ubicaciones.forEach(function (ubicacion) {
          var option1 = document.createElement('option');
          option1.value = ubicacion.idUbicacion;
          option1.text = ubicacion.titulo;
          ubicacionesSelect.appendChild(option1);
        });
        barberosData.barberos.forEach(function (barbero) {
          var option2 = document.createElement('option');
          option2.value = barbero.id;
          option2.text = barbero.barbero;
          barberosSelect.appendChild(option2);
        });
        serviciosData.servicios.forEach(function (servicio) {
          var option3 = document.createElement('option');
          option3.value = servicio.idServicio;
          option3.text = servicio.tipoServicio;
          serviciosSelect.appendChild(option3);
        });
      case 27:
        _context2.next = 33;
        break;
      case 29:
        _context2.prev = 29;
        _context2.t0 = _context2["catch"](3);
        console.error('Error al cargar datos del servidor:', _context2.t0);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al cargar datos del servidor. Por favor, inténtelo de nuevo más tarde.',
          showConfirmButton: true,
          customClass: {
            popup: 'bg-alert'
          }
        });
      case 33:
        document.getElementById('addForm').addEventListener('submit', /*#__PURE__*/function () {
          var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
            var id, ubicacion, barbero, fecha, hora, servicio, comentario, now, fechaSeleccionada, formData, token, response, result;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  id = sessionStorage.getItem('id');
                  ubicacion = document.getElementById('ubicacion').value;
                  barbero = document.getElementById('barbero').value;
                  fecha = document.getElementById('fecha').value;
                  hora = document.getElementById('horario').value;
                  servicio = document.getElementById('servicio').value;
                  comentario = document.getElementById('notas').value;
                  if (!(!ubicacion || !barbero || !fecha || !hora || !servicio)) {
                    _context.next = 11;
                    break;
                  }
                  Swal.fire({
                    icon: 'error',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Todos los campos son obligatorios' + "</h5>",
                    showConfirmButton: true,
                    customClass: {
                      popup: 'bg-alert'
                    }
                  });
                  return _context.abrupt("return");
                case 11:
                  now = new Date();
                  fechaSeleccionada = new Date("".concat(fecha, "T").concat(hora, ":00"));
                  if (!(fechaSeleccionada < now)) {
                    _context.next = 16;
                    break;
                  }
                  Swal.fire({
                    icon: 'error',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'No se puede reservar en una fecha y hora pasada' + "</h5>",
                    showConfirmButton: false,
                    timer: 2000,
                    customClass: {
                      popup: 'bg-alert'
                    }
                  });
                  return _context.abrupt("return");
                case 16:
                  _context.prev = 16;
                  formData = {
                    id: id,
                    ubicacion: ubicacion,
                    barbero: barbero,
                    fecha: fecha,
                    hora: hora,
                    servicio: servicio,
                    comentario: comentario
                  };
                  token = sessionStorage.getItem("token");
                  _context.next = 21;
                  return fetch(sessionStorage.getItem("urlLogic") + "/reservas/crear", {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'x-access-token': token
                    },
                    body: JSON.stringify(formData)
                  });
                case 21:
                  response = _context.sent;
                  if (!response.ok) {
                    _context.next = 27;
                    break;
                  }
                  Swal.fire({
                    icon: 'success',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Reserva realizada exitosamente' + "</h5>",
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
                  _context.next = 31;
                  break;
                case 27:
                  _context.next = 29;
                  return response.json();
                case 29:
                  result = _context.sent;
                  Swal.fire({
                    icon: 'error',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + result.message + "</h5>",
                    showConfirmButton: false,
                    timer: 3000,
                    customClass: {
                      popup: 'bg-alert'
                    }
                  });
                case 31:
                  _context.next = 37;
                  break;
                case 33:
                  _context.prev = 33;
                  _context.t0 = _context["catch"](16);
                  console.error('Error al enviar la reservación:', _context.t0);
                  Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error al enviar la reservación. Por favor, inténtelo de nuevo más tarde.',
                    showConfirmButton: true,
                    customClass: {
                      popup: 'bg-alert'
                    }
                  });
                case 37:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[16, 33]]);
          }));
          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      case 34:
      case "end":
        return _context2.stop();
    }
  }, _callee2, null, [[3, 29]]);
})));