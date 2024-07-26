"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
document.addEventListener('DOMContentLoaded', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  var urlProductos, responseProductos, productosData, productosSelect1, productosSelect2;
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        urlProductos = sessionStorage.getItem("urlLogic") + "/productos";
        _context2.prev = 1;
        _context2.next = 4;
        return fetch(urlProductos);
      case 4:
        responseProductos = _context2.sent;
        if (responseProductos.ok) {
          _context2.next = 7;
          break;
        }
        throw new Error("Error al obtener productos: ".concat(responseProductos.status, " ").concat(responseProductos.statusText));
      case 7:
        _context2.next = 9;
        return responseProductos.json();
      case 9:
        productosData = _context2.sent;
        productosSelect1 = document.getElementById('producto1');
        productosSelect2 = document.getElementById('producto2');
        productosData.productos.forEach(function (producto) {
          var option1 = document.createElement('option');
          option1.value = producto.idProducto;
          option1.text = producto.producto;
          productosSelect1.appendChild(option1);
          var option2 = document.createElement('option');
          option2.value = producto.idProducto;
          option2.text = producto.producto;
          productosSelect2.appendChild(option2);
        });
        _context2.next = 19;
        break;
      case 15:
        _context2.prev = 15;
        _context2.t0 = _context2["catch"](1);
        console.error('Error fetching data:', _context2.t0);
        Swal.fire({
          icon: 'error',
          title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Error al obtener productos' + "</h5>",
          text: _context2.t0.message,
          showConfirmButton: true,
          customClass: {
            popup: 'bg-alert',
            content: 'text-alert'
          }
        });
      case 19:
        document.getElementById('addForm').addEventListener('submit', /*#__PURE__*/function () {
          var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
            var producto1, producto2, descripcion, precio, foto, token, options, response, responseText, responseData;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  producto1 = document.getElementById('producto1').value;
                  producto2 = document.getElementById('producto2').value;
                  descripcion = document.getElementById('descripcion').value;
                  precio = document.getElementById('precio').value;
                  foto = document.getElementById('formFile').files[0];
                  console.log('Producto 1:', producto1);
                  console.log('Producto 2:', producto2);
                  console.log('Descripción:', descripcion);
                  console.log('Precio:', precio);
                  console.log('Archivo:', foto);
                  if (!(!producto1 || !producto2 || !descripcion || !precio || !foto)) {
                    _context.next = 14;
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
                case 14:
                  token = sessionStorage.getItem("token");
                  options = {
                    method: "POST",
                    headers: {
                      "content-Type": "application/json",
                      "x-access-token": token
                    },
                    body: JSON.stringify({
                      producto1: producto1,
                      producto2: producto2,
                      descripcion: descripcion,
                      precio: precio,
                      foto: foto
                    })
                  };
                  _context.prev = 16;
                  _context.next = 19;
                  return fetch(sessionStorage.getItem("urlLogic") + '/ofertas/crear', options);
                case 19:
                  response = _context.sent;
                  if (response.ok) {
                    _context.next = 25;
                    break;
                  }
                  _context.next = 23;
                  return response.text();
                case 23:
                  responseText = _context.sent;
                  throw new Error("Error: ".concat(response.status, " ").concat(response.statusText, " - ").concat(responseText));
                case 25:
                  _context.next = 27;
                  return response.json();
                case 27:
                  responseData = _context.sent;
                  Swal.fire({
                    icon: 'success',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Oferta agregada exitosamente' + "</h5>",
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                      popup: 'bg-alert',
                      content: 'text-alert'
                    }
                  });
                  setTimeout(function () {
                    window.location.href = "/admin/oferta";
                  }, 1500);
                  _context.next = 36;
                  break;
                case 32:
                  _context.prev = 32;
                  _context.t0 = _context["catch"](16);
                  console.error('Error al agregar la oferta:', _context.t0);
                  Swal.fire({
                    icon: 'error',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Error al agregar la oferta' + "</h5>",
                    showConfirmButton: true,
                    customClass: {
                      popup: 'bg-alert'
                    }
                  });
                case 36:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[16, 32]]);
          }));
          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      case 20:
      case "end":
        return _context2.stop();
    }
  }, _callee2, null, [[1, 15]]);
})));