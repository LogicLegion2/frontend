"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var loguear = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var correo, contrasena, url, urlLogic, options, response, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          correo = document.getElementById("correo").value;
          contrasena = document.getElementById("contrasena").value;
          url = document.getElementById("url").value;
          sessionStorage.setItem("urlLogic", url);
          urlLogic = sessionStorage.getItem("urlLogic") + "/usuarios/login";
          options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              correo: correo,
              contrasena: contrasena
            })
          };
          _context.prev = 6;
          Swal.fire({
            title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Iniciando Sesi\xF3n</h5>",
            allowOutsideClick: false,
            timer: 35000,
            customClass: {
              popup: 'bg-alert',
              content: 'text-alert'
            },
            didOpen: function didOpen() {
              Swal.showLoading();
            }
          });
          _context.next = 10;
          return fetch(urlLogic, options);
        case 10:
          response = _context.sent;
          _context.next = 13;
          return response.json();
        case 13:
          data = _context.sent;
          if (!data.error) {
            _context.next = 18;
            break;
          }
          Swal.fire({
            icon: 'warning',
            title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>".concat(data.message, "</h5>"),
            showConfirmButton: false,
            timer: 30000,
            customClass: {
              popup: 'bg-alert',
              content: 'text-alert'
            }
          });
          _context.next = 33;
          break;
        case 18:
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("id", data.id);
          sessionStorage.setItem("rol", data.rol);
          document.cookie = "id=".concat(data.id, "; path=/");
          document.cookie = "token=".concat(data.token, "; path=/");
          _context.t0 = data.rol;
          _context.next = _context.t0 === 'administrador' ? 26 : _context.t0 === 'usuario' ? 28 : _context.t0 === 'barbero' ? 30 : 32;
          break;
        case 26:
          window.location.href = "/admin/home";
          return _context.abrupt("break", 33);
        case 28:
          window.location.href = "/cliente/home";
          return _context.abrupt("break", 33);
        case 30:
          window.location.href = "/barbero/home";
          return _context.abrupt("break", 33);
        case 32:
          window.location.href = "/login";
        case 33:
          _context.next = 38;
          break;
        case 35:
          _context.prev = 35;
          _context.t1 = _context["catch"](6);
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error en la conexi\xF3n</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert',
              content: 'text-alert'
            }
          });
        case 38:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[6, 35]]);
  }));
  return function loguear() {
    return _ref.apply(this, arguments);
  };
}();
var cerrarSesion = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var token, urlLogout, options, response, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          token = sessionStorage.getItem("token");
          if (token) {
            _context2.next = 4;
            break;
          }
          console.log("No hay token almacenado");
          return _context2.abrupt("return");
        case 4:
          urlLogout = sessionStorage.getItem("urlLogic") + "/usuarios/logout";
          options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": token
            }
          };
          _context2.prev = 6;
          _context2.next = 9;
          return fetch(urlLogout, options);
        case 9:
          response = _context2.sent;
          _context2.next = 12;
          return response.json();
        case 12:
          data = _context2.sent;
          if (response.status === 200) {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("id");
            sessionStorage.removeItem("rol");
            document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            window.location.href = "/";
          } else {
            console.error("Error al cerrar sesión:", data.message);
          }
          _context2.next = 19;
          break;
        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](6);
          console.error("Error de red:", _context2.t0);
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[6, 16]]);
  }));
  return function cerrarSesion() {
    return _ref2.apply(this, arguments);
  };
}();