"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersBarbero = require("../controllers/controllers.barbero.js");
var rutaBarbero = (0, _express.Router)();
rutaBarbero.get("/home", _controllersBarbero.paginaPrincipalBarbero);
rutaBarbero.get("/perfil", _controllersBarbero.perfilBarbero);
var _default = exports["default"] = rutaBarbero;