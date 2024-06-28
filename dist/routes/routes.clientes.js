"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersCliente = require("../controllers/controllers.cliente.js");
var rutaCliente = (0, _express.Router)();
rutaCliente.get("/home", _controllersCliente.paginaPrincipalCliente);
rutaCliente.get("/menu", _controllersCliente.menuCliente);
rutaCliente.get("/barbero/:id", _controllersCliente.mostrarPerfilBarbero);
rutaCliente.get("/reservar", _controllersCliente.realizarReserva);
rutaCliente.get("/favorito", _controllersCliente.mostrarListaFavoritos);
rutaCliente.get("/reserva", _controllersCliente.mostrarReserva);
rutaCliente.get("/entrega", _controllersCliente.mostrarEntregas);
rutaCliente.get("/reembolso", _controllersCliente.realizarReembolso);
rutaCliente.get("/cita", _controllersCliente.mostrarHistorialCitas);
rutaCliente.get("/compra", _controllersCliente.mostrarHistorialCompras);
rutaCliente.get("/carrito", _controllersCliente.mostrarCarritoCompras);
rutaCliente.get("/perfil", _controllersCliente.perfilCliente);
rutaCliente.get("/comprar", _controllersCliente.realizarCompra);
rutaCliente.get("/docs", _controllersCliente.mostrarDocs);
var _default = exports["default"] = rutaCliente;