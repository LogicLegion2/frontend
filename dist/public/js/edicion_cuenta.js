"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function toggleEdit(field) {
  var form = document.getElementById("form-".concat(field));
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}
function cambiarNombre(_x, _x2) {
  return _cambiarNombre.apply(this, arguments);
}
function _cambiarNombre() {
  _cambiarNombre = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(event, id) {
    var token, urlLogic, nombre, response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          token = sessionStorage.getItem("token");
          urlLogic = sessionStorage.getItem("urlLogic") + "/usuarios/nombre/".concat(id);
          nombre = event.target.nombre.value;
          _context.prev = 4;
          _context.next = 7;
          return fetch(urlLogic, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "x-access-token": token
            },
            body: JSON.stringify({
              id: id,
              nombre: nombre
            })
          });
        case 7:
          response = _context.sent;
          if (response.ok) {
            Swal.fire({
              icon: 'success',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Nombre cambiado exitosamente' + "</h5>",
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
          _context.next = 15;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);
          console.error('Error:', _context.t0);
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + "Error al cambiar el nombre" + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert',
              content: 'text-alert'
            }
          });
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 11]]);
  }));
  return _cambiarNombre.apply(this, arguments);
}
function cambiarTelefono(_x3, _x4) {
  return _cambiarTelefono.apply(this, arguments);
}
function _cambiarTelefono() {
  _cambiarTelefono = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(event, id) {
    var token, urlLogic, telefono, telefonoRegex, response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          event.preventDefault();
          token = sessionStorage.getItem("token");
          urlLogic = sessionStorage.getItem("urlLogic") + "/usuarios/telefono/".concat(id);
          telefono = event.target.telefono.value;
          telefonoRegex = /^\d{10}$/;
          if (telefonoRegex.test(telefono)) {
            _context2.next = 8;
            break;
          }
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Número de teléfono no valido</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert'
            }
          });
          return _context2.abrupt("return");
        case 8:
          _context2.prev = 8;
          _context2.next = 11;
          return fetch(urlLogic, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "x-access-token": token
            },
            body: JSON.stringify({
              id: id,
              telefono: telefono
            })
          });
        case 11:
          response = _context2.sent;
          if (response.ok) {
            Swal.fire({
              icon: 'success',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Teléfono cambiado exitosamente' + "</h5>",
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
          _context2.next = 19;
          break;
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](8);
          console.error('Error:', _context2.t0);
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + "Error al cambiar el t\xE9lefono" + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert',
              content: 'text-alert'
            }
          });
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[8, 15]]);
  }));
  return _cambiarTelefono.apply(this, arguments);
}
function cambiarCorreo(_x5, _x6) {
  return _cambiarCorreo.apply(this, arguments);
}
function _cambiarCorreo() {
  _cambiarCorreo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(event, id) {
    var token, urlLogic, correo, response;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          event.preventDefault();
          token = sessionStorage.getItem("token");
          urlLogic = sessionStorage.getItem("urlLogic") + "/usuarios/correo/".concat(id);
          correo = event.target.correo.value;
          if (correo.includes("@")) {
            _context3.next = 7;
            break;
          }
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Correo electronico no valido</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert'
            }
          });
          return _context3.abrupt("return");
        case 7:
          _context3.prev = 7;
          _context3.next = 10;
          return fetch(urlLogic, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "x-access-token": token
            },
            body: JSON.stringify({
              id: id,
              correo: correo
            })
          });
        case 10:
          response = _context3.sent;
          if (response.ok) {
            Swal.fire({
              icon: 'success',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Correo cambiado exitosamente' + "</h5>",
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
          _context3.next = 18;
          break;
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](7);
          console.error('Error:', _context3.t0);
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + "Error al cambiar el correo" + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert',
              content: 'text-alert'
            }
          });
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[7, 14]]);
  }));
  return _cambiarCorreo.apply(this, arguments);
}
function cambiarFoto(_x7, _x8) {
  return _cambiarFoto.apply(this, arguments);
}
function _cambiarFoto() {
  _cambiarFoto = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(event, id) {
    var token, urlLogic, formData, foto, response;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          event.preventDefault();
          token = sessionStorage.getItem("token");
          urlLogic = sessionStorage.getItem("urlLogic") + "/usuarios/foto/".concat(id);
          formData = new FormData();
          foto = event.target.foto.files[0];
          formData.append('id', id);
          formData.append('foto', foto);
          _context4.prev = 7;
          _context4.next = 10;
          return fetch(urlLogic, {
            method: 'POST',
            body: formData
          });
        case 10:
          response = _context4.sent;
          if (response.ok) {
            Swal.fire({
              icon: 'success',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Foto de perfil cambiada exitosamente' + "</h5>",
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
          _context4.next = 18;
          break;
        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](7);
          console.error('Error:', _context4.t0);
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + "Error al cambiar la foto de perfil" + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert',
              content: 'text-alert'
            }
          });
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[7, 14]]);
  }));
  return _cambiarFoto.apply(this, arguments);
}
function cambiarContrasena(_x9, _x10) {
  return _cambiarContrasena.apply(this, arguments);
}
function _cambiarContrasena() {
  _cambiarContrasena = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(event, id) {
    var token, urlLogic, form, contrasena, contrasenaNueva, confirmarContrasena, passwordRegex, response;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          event.preventDefault();
          token = sessionStorage.getItem("token");
          urlLogic = sessionStorage.getItem("urlLogic") + "/usuarios/contrasena/".concat(id);
          form = event.target;
          contrasena = form.contrasena.value;
          contrasenaNueva = form.contrasenaNueva.value;
          confirmarContrasena = form.confirmarContrasena.value;
          if (!(contrasenaNueva !== confirmarContrasena)) {
            _context5.next = 10;
            break;
          }
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Las contraseñas no coinciden' + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert'
            }
          });
          return _context5.abrupt("return");
        case 10:
          passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
          if (passwordRegex.test(contrasenaNueva)) {
            _context5.next = 14;
            break;
          }
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>La contraseña debe tener al menos 8 caracteres, incluyendo números, letras minúsculas y mayúsculas</h5>",
            showConfirmButton: false,
            timer: 4500,
            customClass: {
              popup: 'bg-alert'
            }
          });
          return _context5.abrupt("return");
        case 14:
          _context5.prev = 14;
          _context5.next = 17;
          return fetch(urlLogic, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "x-access-token": token
            },
            body: JSON.stringify({
              id: id,
              contrasena: contrasena,
              contrasenaNueva: contrasenaNueva
            })
          });
        case 17:
          response = _context5.sent;
          if (response.ok) {
            Swal.fire({
              icon: 'success',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Contraseña cambiada exitosamente' + "</h5>",
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
          _context5.next = 25;
          break;
        case 21:
          _context5.prev = 21;
          _context5.t0 = _context5["catch"](14);
          console.error('Error:', _context5.t0);
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + "Error al cambiar la contrase\xF1a" + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert',
              content: 'text-alert'
            }
          });
        case 25:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[14, 21]]);
  }));
  return _cambiarContrasena.apply(this, arguments);
}