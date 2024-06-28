"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function toggleEdit(field) {
  var form = document.getElementById("form-".concat(field));
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}
function cambiarNombre(_x, _x2) {
  return _cambiarNombre.apply(this, arguments);
}
function _cambiarNombre() {
  _cambiarNombre = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event, id) {
    var urlLogic, nombre, response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          urlLogic = sessionStorage.getItem("urlLogic") + "/usuarios/nombre/barbero/".concat(id);
          nombre = event.target.nombre.value;
          _context.prev = 3;
          _context.next = 6;
          return fetch(urlLogic, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: id,
              nombre: nombre
            })
          });
        case 6:
          response = _context.sent;
          if (response.ok) {
            Swal.fire({
              icon: 'success',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Nombre cambiado exitosamente' + "</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
              }
            });
            setTimeout(function () {
              window.location.reload();
            }, 1500);
          } else {
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + "Error al cambiar el nombre" + "</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
              }
            });
          }
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](3);
          console.error('Error:', _context.t0);
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + "Error al cambiar el nombre" + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert',
              content: 'text-alert'
            }
          });
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 10]]);
  }));
  return _cambiarNombre.apply(this, arguments);
}
function cambiarTelefono(_x3, _x4) {
  return _cambiarTelefono.apply(this, arguments);
}
function _cambiarTelefono() {
  _cambiarTelefono = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event, id) {
    var urlLogic, telefono, response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          event.preventDefault();
          urlLogic = sessionStorage.getItem("urlLogic") + "/usuarios/telefono/barbero/".concat(id);
          telefono = event.target.telefono.value;
          _context2.prev = 3;
          _context2.next = 6;
          return fetch(urlLogic, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: id,
              telefono: telefono
            })
          });
        case 6:
          response = _context2.sent;
          if (response.ok) {
            Swal.fire({
              icon: 'success',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Teléfono cambiado exitosamente' + "</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
              }
            });
            setTimeout(function () {
              window.location.reload();
            }, 1500);
          } else {
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + "Error al cambiar el t\xE9lefono" + "</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
              }
            });
          }
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](3);
          console.error('Error:', _context2.t0);
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + "Error al cambiar el t\xE9lefono" + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert',
              content: 'text-alert'
            }
          });
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 10]]);
  }));
  return _cambiarTelefono.apply(this, arguments);
}
function cambiarCorreo(_x5, _x6) {
  return _cambiarCorreo.apply(this, arguments);
}
function _cambiarCorreo() {
  _cambiarCorreo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(event, id) {
    var urlLogic, correo, response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          event.preventDefault();
          urlLogic = sessionStorage.getItem("urlLogic") + "/usuarios/correo/barbero/".concat(id);
          correo = event.target.correo.value;
          _context3.prev = 3;
          _context3.next = 6;
          return fetch(urlLogic, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: id,
              correo: correo
            })
          });
        case 6:
          response = _context3.sent;
          if (response.ok) {
            Swal.fire({
              icon: 'success',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Correo cambiado exitosamente' + "</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
              }
            });
            setTimeout(function () {
              window.location.reload();
            }, 1500);
          } else {
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + "Error al cambiar el correo" + "</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
              }
            });
          }
          _context3.next = 14;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](3);
          console.error('Error:', _context3.t0);
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + "Error al cambiar el correo" + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert',
              content: 'text-alert'
            }
          });
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[3, 10]]);
  }));
  return _cambiarCorreo.apply(this, arguments);
}
function cambiarFoto(_x7, _x8) {
  return _cambiarFoto.apply(this, arguments);
}
function _cambiarFoto() {
  _cambiarFoto = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(event, id) {
    var urlLogic, formData, foto, response;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          event.preventDefault();
          urlLogic = sessionStorage.getItem("urlLogic") + "/usuarios/foto/barbero/".concat(id);
          formData = new FormData();
          foto = event.target.foto.files[0];
          formData.append('id', id);
          formData.append('foto', foto);
          _context4.prev = 6;
          _context4.next = 9;
          return fetch(urlLogic, {
            method: 'POST',
            body: formData
          });
        case 9:
          response = _context4.sent;
          if (response.ok) {
            Swal.fire({
              icon: 'success',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Foto de perfil cambiada exitosamente' + "</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
              }
            });
            setTimeout(function () {
              window.location.reload();
            }, 1500);
          } else {
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + "Error al cambiar la foto de perfil" + "</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
              }
            });
          }
          _context4.next = 17;
          break;
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](6);
          console.error('Error:', _context4.t0);
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + "Error al cambiar la foto de perfil" + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert',
              content: 'text-alert'
            }
          });
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[6, 13]]);
  }));
  return _cambiarFoto.apply(this, arguments);
}
function cambiarContrasena(_x9, _x10) {
  return _cambiarContrasena.apply(this, arguments);
}
function _cambiarContrasena() {
  _cambiarContrasena = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(event, id) {
    var urlLogic, form, contrasena, contrasenaNueva, confirmarContrasena, response, errorData;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          event.preventDefault();
          urlLogic = sessionStorage.getItem("urlLogic") + "/usuarios/contrasena/barbero/".concat(id);
          form = event.target;
          contrasena = form.contrasena.value;
          contrasenaNueva = form.contrasenaNueva.value;
          confirmarContrasena = form.confirmarContrasena.value;
          if (!(contrasenaNueva !== confirmarContrasena)) {
            _context5.next = 9;
            break;
          }
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Las contraseñas no coinciden' + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert'
            }
          });
          return _context5.abrupt("return");
        case 9:
          _context5.prev = 9;
          _context5.next = 12;
          return fetch(urlLogic, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: id,
              contrasena: contrasena,
              contrasenaNueva: contrasenaNueva
            })
          });
        case 12:
          response = _context5.sent;
          if (!response.ok) {
            _context5.next = 18;
            break;
          }
          Swal.fire({
            icon: 'success',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Contraseña cambiada exitosamente' + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert',
              content: 'text-alert'
            }
          });
          setTimeout(function () {
            window.location.reload();
          }, 1500);
          _context5.next = 22;
          break;
        case 18:
          _context5.next = 20;
          return response.json();
        case 20:
          errorData = _context5.sent;
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Intentalo de nuevo más tarde' + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert'
            }
          });
        case 22:
          _context5.next = 28;
          break;
        case 24:
          _context5.prev = 24;
          _context5.t0 = _context5["catch"](9);
          console.error('Error:', _context5.t0);
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + "Error al cambiar la contrase\xF1a" + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert',
              content: 'text-alert'
            }
          });
        case 28:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[9, 24]]);
  }));
  return _cambiarContrasena.apply(this, arguments);
}
function cambiarDescripcion(_x11, _x12) {
  return _cambiarDescripcion.apply(this, arguments);
}
function _cambiarDescripcion() {
  _cambiarDescripcion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(event, id) {
    var urlLogic, descripcion, response;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          event.preventDefault();
          urlLogic = sessionStorage.getItem("urlLogic") + "/usuarios/descripcion/".concat(id);
          descripcion = event.target.descripcion.value;
          _context6.prev = 3;
          _context6.next = 6;
          return fetch(urlLogic, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: id,
              descripcion: descripcion
            })
          });
        case 6:
          response = _context6.sent;
          if (response.ok) {
            Swal.fire({
              icon: 'success',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Descripción cambiado exitosamente' + "</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
              }
            });
            setTimeout(function () {
              window.location.reload();
            }, 1500);
          } else {
            Swal.fire({
              icon: 'error',
              title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + "Error al cambiar la descripci\xF3n" + "</h5>",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
              }
            });
          }
          _context6.next = 14;
          break;
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](3);
          console.error('Error:', _context6.t0);
          Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + "Error al cambiar la descripci\xF3n" + "</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-alert',
              content: 'text-alert'
            }
          });
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[3, 10]]);
  }));
  return _cambiarDescripcion.apply(this, arguments);
}