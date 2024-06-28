"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersAdmin = require("../controllers/controllers.admin.js");
var rutaAdmin = (0, _express.Router)();
rutaAdmin.get("/home", _controllersAdmin.paginaPrincipalAdmin);
rutaAdmin.get("/menu", _controllersAdmin.menuAdmin);
rutaAdmin.get("/barbero/:id", _controllersAdmin.mostrarPerfilBarbero);
rutaAdmin.get("/producto", _controllersAdmin.mostrarProducto);
rutaAdmin.get("/producto/editar", _controllersAdmin.editarProducto);
rutaAdmin.get("/producto/crear", _controllersAdmin.crearProducto);
rutaAdmin.get("/servicio", _controllersAdmin.mostrarServicio);
rutaAdmin.get("/servicio/editar", _controllersAdmin.editarServicio);
rutaAdmin.get("/servicio/crear", _controllersAdmin.crearServicio);
rutaAdmin.get("/oferta", _controllersAdmin.mostrarOferta);
rutaAdmin.get("/oferta/editar", _controllersAdmin.editarOferta);
rutaAdmin.get("/oferta/crear", _controllersAdmin.crearOferta);
rutaAdmin.get("/ubicacion", _controllersAdmin.mostrarUbicacion);
rutaAdmin.get("/ubicacion/editar", _controllersAdmin.editarUbicacion);
rutaAdmin.get("/ubicacion/crear", _controllersAdmin.crearUbicacion);
rutaAdmin.get("/pregunta", _controllersAdmin.mostrarPregunta);
rutaAdmin.get("/pregunta/editar", _controllersAdmin.editarPregunta);
rutaAdmin.get("/pregunta/crear", _controllersAdmin.crearPregunta);
rutaAdmin.get("/usuario", _controllersAdmin.mostrarUsuario);
rutaAdmin.get("/crear/usuario", _controllersAdmin.crearUsuario);
rutaAdmin.get("/crear/barbero", _controllersAdmin.crearBarbero);
rutaAdmin.get("/reserva", _controllersAdmin.mostrartReservas);
rutaAdmin.get("/entrega", _controllersAdmin.mostrartEntregas);
rutaAdmin.get("/vendido", _controllersAdmin.mostrarProductosVendidos);
rutaAdmin.get("/reserva/producto", _controllersAdmin.mostrarReservasProductos);
rutaAdmin.get("/historial", _controllersAdmin.mostrarHistorialReservas);
rutaAdmin.get("/perfil", _controllersAdmin.perfilAdmin);
var _default = exports["default"] = rutaAdmin;