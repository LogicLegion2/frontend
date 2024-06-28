"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _routesHome = _interopRequireDefault(require("./routes.home.js"));
var _routesClientes = _interopRequireDefault(require("./routes.clientes.js"));
var _routesAdmin = _interopRequireDefault(require("./routes.admin.js"));
var _routesBarbero = _interopRequireDefault(require("./routes.barbero.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ruta = (0, _express.Router)();
ruta.use("/home", _routesHome["default"]);
ruta.use("/cliente", _routesClientes["default"]);
ruta.use("/admin", _routesAdmin["default"]);
ruta.use("/barbero", _routesBarbero["default"]);
var _default = exports["default"] = ruta;