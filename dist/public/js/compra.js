"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
document.getElementById('btn-realizar-compra').addEventListener('click', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var productos, totalGlobal, urlLogic, response, result;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        productos = [];
        document.querySelectorAll('.cont-perf').forEach(function (productoDiv) {
          var idProducto = productoDiv.querySelector('input[id^="unidades-"]').id.split('-')[1];
          var cantidad = productoDiv.querySelector('input[id^="unidades-"]').value;
          var producto = document.getElementById('nombre-producto').value;
          productos.push({
            idProducto: idProducto,
            cantidad: cantidad,
            producto: producto
          });
        });
        totalGlobal = document.getElementById('totalGlobal').value.replace('$', '');
        localStorage.setItem('productos', JSON.stringify(productos));
        localStorage.setItem('totalGlobal', totalGlobal);
        urlLogic = sessionStorage.getItem("urlLogic") + "/ventas/stock";
        _context.prev = 6;
        _context.next = 9;
        return fetch(urlLogic, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            productos: productos
          })
        });
      case 9:
        response = _context.sent;
        if (!response.ok) {
          _context.next = 14;
          break;
        }
        window.location.href = '/cliente/comprar';
        _context.next = 18;
        break;
      case 14:
        _context.next = 16;
        return response.json();
      case 16:
        result = _context.sent;
        Swal.fire({
          icon: 'warning',
          title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + "No hay stock disponible para estos productos." + "</h5>",
          showConfirmButton: false,
          timer: 2500,
          customClass: {
            popup: 'bg-alert',
            content: 'text-alert'
          }
        });
      case 18:
        _context.next = 23;
        break;
      case 20:
        _context.prev = 20;
        _context.t0 = _context["catch"](6);
        console.error('Error:', _context.t0);
      case 23:
      case "end":
        return _context.stop();
    }
  }, _callee, null, [[6, 20]]);
})));
window.addEventListener('load', function () {
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('status') === 'success') {
    Swal.fire({
      icon: 'success',
      title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Compra realizada exitosamente' + "</h5>",
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
});
window.addEventListener('load', function () {
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('status') === 'error') {
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
});