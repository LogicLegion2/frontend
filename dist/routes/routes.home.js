"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersHome = require("../controllers/controllers.home.js");
var rutaHome = (0, _express.Router)();
rutaHome.get("/login", _controllersHome.login);
rutaHome.get("/registro", _controllersHome.registro);
rutaHome.get("/contrasena", _controllersHome.contrasena);
var _default = exports["default"] = rutaHome;