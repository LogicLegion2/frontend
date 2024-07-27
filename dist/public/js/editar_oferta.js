"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
document.addEventListener('DOMContentLoaded', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  var id, urlOferta, urlProductos, _yield$Promise$all, _yield$Promise$all2, responseOferta, responseProductos, ofertaData, productosData, productosSelect1, productosSelect2;
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        id = localStorage.getItem('ofertaSeleccionada');
        if (!id) {
          _context2.next = 32;
          break;
        }
        urlOferta = sessionStorage.getItem("urlLogic") + "/ofertas/obtener/".concat(id);
        urlProductos = sessionStorage.getItem("urlLogic") + "/productos";
        _context2.prev = 4;
        _context2.next = 7;
        return Promise.all([fetch(urlOferta), fetch(urlProductos)]);
      case 7:
        _yield$Promise$all = _context2.sent;
        _yield$Promise$all2 = (0, _slicedToArray2["default"])(_yield$Promise$all, 2);
        responseOferta = _yield$Promise$all2[0];
        responseProductos = _yield$Promise$all2[1];
        if (!(responseOferta.ok && responseProductos.ok)) {
          _context2.next = 26;
          break;
        }
        _context2.next = 14;
        return responseOferta.json();
      case 14:
        ofertaData = _context2.sent;
        _context2.next = 17;
        return responseProductos.json();
      case 17:
        productosData = _context2.sent;
        document.getElementById('oferta_id').value = id;
        document.getElementById('descripcion').value = ofertaData.descripcion || '';
        document.getElementById('precio').value = ofertaData.precio || '';
        productosSelect1 = document.getElementById('producto1');
        productosSelect2 = document.getElementById('producto2');
        productosData.productos.forEach(function (producto) {
          var option1 = document.createElement('option');
          option1.value = producto.idProducto;
          option1.text = producto.producto;
          if (producto.idProducto === ofertaData.producto1) {
            option1.selected = true;
          }
          productosSelect1.appendChild(option1);
          var option2 = document.createElement('option');
          option2.value = producto.idProducto;
          option2.text = producto.producto;
          if (producto.idProducto === ofertaData.producto2) {
            option2.selected = true;
          }
          productosSelect2.appendChild(option2);
        });
        _context2.next = 27;
        break;
      case 26:
        console.error(responseOferta, responseProductos);
      case 27:
        _context2.next = 32;
        break;
      case 29:
        _context2.prev = 29;
        _context2.t0 = _context2["catch"](4);
        console.error('Error fetching data:', _context2.t0);
      case 32:
        document.getElementById('editForm').addEventListener('submit', /*#__PURE__*/function () {
          var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
            var formData, token, response, responseData;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  formData = {
                    id: document.getElementById('oferta_id').value,
                    producto1: document.getElementById('producto1').value,
                    producto2: document.getElementById('producto2').value,
                    descripcion: document.getElementById('descripcion').value,
                    precio: document.getElementById('precio').value
                  };
                  _context.prev = 2;
                  token = sessionStorage.getItem("token");
                  _context.next = 6;
                  return fetch(sessionStorage.getItem("urlLogic") + "/ofertas/editar", {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      "x-access-token": token
                    },
                    body: JSON.stringify(formData)
                  });
                case 6:
                  response = _context.sent;
                  if (!response.ok) {
                    _context.next = 15;
                    break;
                  }
                  _context.next = 10;
                  return response.json();
                case 10:
                  responseData = _context.sent;
                  Swal.fire({
                    icon: 'success',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Oferta editada exitosamente' + "</h5>",
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
                  _context.next = 17;
                  break;
                case 15:
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
                    window.location.href = "/admin/oferta";
                  }, 1500);
                case 17:
                  _context.next = 23;
                  break;
                case 19:
                  _context.prev = 19;
                  _context.t0 = _context["catch"](2);
                  console.error('Error al editar la oferta:', _context.t0);
                  Swal.fire({
                    icon: 'error',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Error al editar la oferta' + "</h5>",
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                      popup: 'bg-alert'
                    }
                  });
                case 23:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[2, 19]]);
          }));
          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      case 33:
      case "end":
        return _context2.stop();
    }
  }, _callee2, null, [[4, 29]]);
})));