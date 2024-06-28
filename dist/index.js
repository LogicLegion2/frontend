"use strict";

var _server = _interopRequireDefault(require("./server.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_server["default"].listen(_server["default"].get("port"), function () {
  console.log("Frontend en el puerto ".concat(_server["default"].get("port")));
});