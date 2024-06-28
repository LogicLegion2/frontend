"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = require("dotenv");
var _index = _interopRequireDefault(require("./routes/index.js"));
var _ejs = _interopRequireDefault(require("ejs"));
var _path = _interopRequireDefault(require("path"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _url = require("url");
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
(0, _dotenv.config)();
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = _path["default"].dirname(_filename);
var server = (0, _express["default"])();
server.use((0, _morgan["default"])("dev"));
server.use((0, _cors["default"])());
server.use((0, _cookieParser["default"])());
server.set("view engine", "ejs");
server.set("views", _path["default"].join(_dirname + "/views"));
server.set("port", process.env.PORT || 3000);
server.use(_express["default"]["static"](_path["default"].join(_dirname + "/public")));
server.use("/", _index["default"]);

// server.use("/", (req,res)=>{
//     res.render("archivoDeError")
// });
var _default = exports["default"] = server;