"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registro = exports.login = exports.contrasena = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var login = exports.login = function login(req, res) {
  var url = process.env.BACKEND_URL;
  var options = {
    url: url
  };
  res.render("views.iniciar_sesion.ejs", options);
};
var registro = exports.registro = function registro(req, res) {
  res.render("views.registrarse.ejs");
};
var contrasena = exports.contrasena = function contrasena(req, res) {
  res.render("views.reinstaurar_contrasena.ejs");
};