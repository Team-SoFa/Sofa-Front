/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./redux/actions/authActions.js":
/*!**************************************!*\
  !*** ./redux/actions/authActions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearTokens: () => (/* binding */ clearTokens),
/* harmony export */   setTokens: () => (/* binding */ setTokens)
/* harmony export */ });
// src/redux/actions/authActions.js
var setTokens = function setTokens(accessToken, refreshToken) {
  return {
    type: 'SET_TOKENS',
    payload: {
      accessToken: accessToken,
      refreshToken: refreshToken
    }
  };
};
var clearTokens = function clearTokens() {
  return {
    type: 'CLEAR_TOKENS'
  };
};

/***/ }),

/***/ "./redux/reducers/authReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/authReducer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// src/redux/reducers/authReducer.js
var initialState = {
  accessToken: '',
  refreshToken: ''
};
var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case 'SET_TOKENS':
      return _objectSpread(_objectSpread({}, state), {}, {
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken
      });
    case 'CLEAR_TOKENS':
      return _objectSpread(_objectSpread({}, state), {}, {
        accessToken: '',
        refreshToken: ''
      });
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authReducer);

/***/ }),

/***/ "./redux/reducers/folderReducer.js":
/*!*****************************************!*\
  !*** ./redux/reducers/folderReducer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// src/redux/reducers/folderReducer.js

var initialState = {
  folderList: []
};
var folderReducer = function folderReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case "SET_FOLDER_LIST":
      return _objectSpread(_objectSpread({}, state), {}, {
        folderList: action.payload // 서버에서 받은 폴더 목록으로 갱신
      });
    case "UPDATE_FOLDER_NAME":
      return _objectSpread(_objectSpread({}, state), {}, {
        folderList: state.folderList.map(function (folder) {
          return folder.id === action.payload.id ? _objectSpread(_objectSpread({}, folder), {}, {
            name: action.payload.name
          }) : folder;
        })
      });
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (folderReducer);

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/dist/redux.mjs");
/* harmony import */ var _reducers_authReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/authReducer */ "./redux/reducers/authReducer.js");
/* harmony import */ var _reducers_folderReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/folderReducer */ "./redux/reducers/folderReducer.js");
 // Redux에서 combineReducers 가져오기


var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  auth: _reducers_authReducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  folder: _reducers_folderReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
});
var store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(rootReducer);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./services/apiClient.js":
/*!*******************************!*\
  !*** ./services/apiClient.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   del: () => (/* binding */ del),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   post: () => (/* binding */ post),
/* harmony export */   put: () => (/* binding */ put),
/* harmony export */   refreshPost: () => (/* binding */ refreshPost),
/* harmony export */   tokenDel: () => (/* binding */ tokenDel),
/* harmony export */   tokenGet: () => (/* binding */ tokenGet),
/* harmony export */   tokenPatch: () => (/* binding */ tokenPatch),
/* harmony export */   tokenPost: () => (/* binding */ tokenPost),
/* harmony export */   tokenPut: () => (/* binding */ tokenPut)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

 // store 가져오기

var API_BASE_URL = "http://api.linkiving.com";
var apiClient = axios__WEBPACK_IMPORTED_MODULE_1__["default"].create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  // 타임아웃 설정
  headers: {
    "Content-Type": "application/json"
  }
});

// Redux에서 accessToken을 가져오는 함수
var getAccessToken = function getAccessToken() {
  var state = _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState(); // store 상태 가져오기
  return state.auth.accessToken; // authReducer에서 관리하는 accessToken 가져오기
};
var getRefreshToken = function getRefreshToken() {
  var state = _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState(); // store 상태 가져오기
  return state.auth.refreshToken; // authReducer에서 관리하는 accessToken 가져오기
};

// GET 요청을 위한 함수 (토큰 없는 기본 GET 요청)
var get = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
    var params,
      headers,
      response,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          headers = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          _context.next = 4;
          return apiClient.get(url, {
            params: params,
            headers: headers
          });
        case 4:
          response = _context.sent;
          return _context.abrupt("return", response.data);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function get(_x) {
    return _ref.apply(this, arguments);
  };
}();

// POST 요청을 위한 함수 (토큰 없는 기본 POST 요청)
var post = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
    var data,
      headers,
      response,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          data = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
          headers = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
          console.log("Final Headers:", headers);
          console.log('data:', data);
          _context2.next = 6;
          return apiClient.post(url, data, {
            headers: headers
          });
        case 6:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function post(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

// PUT 요청을 위한 함수 (토큰 없는 기본 PUT 요청)
var put = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url) {
    var data,
      headers,
      response,
      _args3 = arguments;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          data = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
          headers = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
          _context3.next = 4;
          return apiClient.put(url, data, {
            headers: headers
          });
        case 4:
          response = _context3.sent;
          return _context3.abrupt("return", response.data);
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function put(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

// DELETE 요청을 위한 함수 (토큰 없는 기본 DELETE 요청)
var del = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(url) {
    var headers,
      response,
      _args4 = arguments;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          headers = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
          _context4.next = 3;
          return apiClient["delete"](url, {
            headers: headers
          });
        case 3:
          response = _context4.sent;
          return _context4.abrupt("return", response.data);
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function del(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

// GET 요청을 위한 함수 (accessToken이 필요한 GET 요청)
var tokenGet = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(url) {
    var params,
      headers,
      accessToken,
      response,
      _args5 = arguments;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          params = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
          headers = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
          accessToken = getAccessToken(); // accessToken이 있으면 Authorization 헤더 추가
          if (accessToken) {
            headers['Authorization'] = "Bearer ".concat(accessToken);
          }
          _context5.next = 6;
          return apiClient.get(url, {
            params: params,
            headers: headers
          });
        case 6:
          response = _context5.sent;
          return _context5.abrupt("return", response.data);
        case 8:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function tokenGet(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

// POST 요청을 위한 함수 (accessToken이 필요한 POST 요청)
var tokenPost = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(url) {
    var data,
      headers,
      accessToken,
      response,
      _args6 = arguments;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          data = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
          headers = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : {};
          accessToken = getAccessToken();
          if (accessToken) {
            headers['Authorization'] = "Bearer ".concat(accessToken);
          }
          _context6.next = 6;
          return apiClient.post(url, data, {
            headers: headers
          });
        case 6:
          response = _context6.sent;
          return _context6.abrupt("return", response.data);
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function tokenPost(_x6) {
    return _ref6.apply(this, arguments);
  };
}();
var refreshPost = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(url) {
    var data,
      headers,
      refreshToken,
      response,
      _args7 = arguments;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          data = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
          headers = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : {};
          refreshToken = getRefreshToken();
          if (refreshToken) {
            headers['Authorization'] = "Bearer ".concat(refreshToken);
          }
          console.log("refreshToken", refreshToken);
          _context7.next = 7;
          return apiClient.post(url, data, {
            headers: headers
          });
        case 7:
          response = _context7.sent;
          return _context7.abrupt("return", response.data);
        case 9:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function refreshPost(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

// PUT 요청을 위한 함수 (accessToken이 필요한 PUT 요청)
var tokenPut = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(url) {
    var data,
      headers,
      accessToken,
      response,
      _args8 = arguments;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          data = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};
          headers = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : {};
          accessToken = getAccessToken(); // accessToken이 있으면 Authorization 헤더 추가
          if (accessToken) {
            headers['Authorization'] = "Bearer ".concat(accessToken);
          }
          _context8.next = 6;
          return apiClient.put(url, data, {
            headers: headers
          });
        case 6:
          response = _context8.sent;
          return _context8.abrupt("return", response.data);
        case 8:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function tokenPut(_x8) {
    return _ref8.apply(this, arguments);
  };
}();

// DELETE 요청을 위한 함수 (accessToken이 필요한 DELETE 요청)
var tokenDel = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(url) {
    var headers,
      accessToken,
      response,
      _args9 = arguments;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          headers = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};
          accessToken = getAccessToken(); // accessToken이 있으면 Authorization 헤더 추가
          if (accessToken) {
            headers['Authorization'] = "Bearer ".concat(accessToken);
          }
          _context9.next = 5;
          return apiClient["delete"](url, {
            headers: headers
          });
        case 5:
          response = _context9.sent;
          return _context9.abrupt("return", response.data);
        case 7:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function tokenDel(_x9) {
    return _ref9.apply(this, arguments);
  };
}();

// Patch 요청을 위한 함수 (accessToken이 필요한 DELETE 요청)
var tokenPatch = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(url) {
    var data,
      headers,
      accessToken,
      response,
      _args10 = arguments;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          data = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : {};
          headers = _args10.length > 2 && _args10[2] !== undefined ? _args10[2] : {};
          accessToken = getAccessToken(); // accessToken이 있으면 Authorization 헤더 추가
          if (accessToken) {
            headers['Authorization'] = "Bearer ".concat(accessToken);
          }
          _context10.next = 6;
          return apiClient.patch(url, data, {
            headers: headers
          });
        case 6:
          response = _context10.sent;
          return _context10.abrupt("return", response.data);
        case 8:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function tokenPatch(_x10) {
    return _ref10.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./services/linkCardService.js":
/*!*************************************!*\
  !*** ./services/linkCardService.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linkCardAiPost: () => (/* binding */ linkCardAiPost),
/* harmony export */   linkCardAllListGet: () => (/* binding */ linkCardAllListGet),
/* harmony export */   linkCardDelete: () => (/* binding */ linkCardDelete),
/* harmony export */   linkCardEnterPost: () => (/* binding */ linkCardEnterPost),
/* harmony export */   linkCardFolderListGet: () => (/* binding */ linkCardFolderListGet),
/* harmony export */   linkCardFolderPatch: () => (/* binding */ linkCardFolderPatch),
/* harmony export */   linkCardGet: () => (/* binding */ linkCardGet),
/* harmony export */   linkCardInfoPatch: () => (/* binding */ linkCardInfoPatch),
/* harmony export */   linkCardPost: () => (/* binding */ linkCardPost),
/* harmony export */   linkCardTagDelPost: () => (/* binding */ linkCardTagDelPost),
/* harmony export */   linkCardTagPost: () => (/* binding */ linkCardTagPost)
/* harmony export */ });
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiClient */ "./services/apiClient.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


// 링크 카드 추가
var linkCardPost = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0,_apiClient__WEBPACK_IMPORTED_MODULE_0__.tokenPost)("/linkCard", data, {});
        case 3:
          response = _context.sent;
          return _context.abrupt("return", response);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error("linkCardPost failed:", _context.t0);
          throw _context.t0;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function linkCardPost(_x) {
    return _ref.apply(this, arguments);
  };
}();

// 링크 카드 AI 정보 생성
var linkCardAiPost = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
    var response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0,_apiClient__WEBPACK_IMPORTED_MODULE_0__.tokenPost)("/linkCard/ai", data, {});
        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", response);
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error("linkCardPost failed:", _context2.t0);
          throw _context2.t0;
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function linkCardAiPost(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

// 링크 카드 태그 추가
var linkCardTagPost = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id, data) {
    var response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0,_apiClient__WEBPACK_IMPORTED_MODULE_0__.tokenPost)("/linkCard/" + id + "/tag", data, {});
        case 3:
          response = _context3.sent;
          return _context3.abrupt("return", response);
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error("linkCardTagPost failed:", _context3.t0);
          throw _context3.t0;
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function linkCardTagPost(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

// 링크 카드 태그 삭제
var linkCardTagDelPost = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id, tagId, tagType) {
    var response;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0,_apiClient__WEBPACK_IMPORTED_MODULE_0__.tokenDel)("/linkCard/" + id + "/tag?" + "tagId=" + tagId + "&tagType=" + tagType, {}, {});
        case 3:
          response = _context4.sent;
          return _context4.abrupt("return", response);
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.error("linkCardTagDel failed:", _context4.t0);
          throw _context4.t0;
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function linkCardTagDelPost(_x5, _x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

// 링크 카드 방문
var linkCardEnterPost = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
    var response;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0,_apiClient__WEBPACK_IMPORTED_MODULE_0__.tokenPost)("/linkCard/" + id + "/enter", {}, {});
        case 3:
          response = _context5.sent;
          return _context5.abrupt("return", response);
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.error("linkCardEnter failed:", _context5.t0);
          throw _context5.t0;
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function linkCardEnterPost(_x8) {
    return _ref5.apply(this, arguments);
  };
}();

// 링크 카드 휴지통 이동
var linkCardDelete = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id) {
    var response;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          console.log('id', id);
          _context6.next = 4;
          return (0,_apiClient__WEBPACK_IMPORTED_MODULE_0__.tokenPost)("/linkCard/" + id + "/delete", {}, {});
        case 4:
          response = _context6.sent;
          return _context6.abrupt("return", response);
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          console.error("linkCardDelete failed:", _context6.t0);
          throw _context6.t0;
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return function linkCardDelete(_x9) {
    return _ref6.apply(this, arguments);
  };
}();

// 링크 카드 타이틀, 메모, 요약 수정
var linkCardInfoPatch = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(id, data) {
    var response;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return (0,_apiClient__WEBPACK_IMPORTED_MODULE_0__.tokenPatch)("/linkCard/" + id + "/info", data, {});
        case 3:
          response = _context7.sent;
          return _context7.abrupt("return", response);
        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          console.error("linkCardEnter failed:", _context7.t0);
          throw _context7.t0;
        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 7]]);
  }));
  return function linkCardInfoPatch(_x10, _x11) {
    return _ref7.apply(this, arguments);
  };
}();

// 링크 카드 폴더 변경
var linkCardFolderPatch = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(id, data) {
    var response;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return (0,_apiClient__WEBPACK_IMPORTED_MODULE_0__.tokenPatch)("/linkCard/" + id + "/folder", data, {});
        case 3:
          response = _context8.sent;
          return _context8.abrupt("return", response);
        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          console.error("linkCardFolderPatch failed:", _context8.t0);
          throw _context8.t0;
        case 11:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return function linkCardFolderPatch(_x12, _x13) {
    return _ref8.apply(this, arguments);
  };
}();

// 링크 카드 조회
var linkCardGet = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(id) {
    var response;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return (0,_apiClient__WEBPACK_IMPORTED_MODULE_0__.tokenGet)("/linkCard/" + id, {}, {});
        case 3:
          response = _context9.sent;
          return _context9.abrupt("return", response);
        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          console.error("linkCardFolderPatch failed:", _context9.t0);
          throw _context9.t0;
        case 11:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 7]]);
  }));
  return function linkCardGet(_x14) {
    return _ref9.apply(this, arguments);
  };
}();

// 링크 카드 폴더 리스트 조회
var linkCardFolderListGet = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(folderId, sortBy, sortOrder, lastId, limit) {
    var response;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return (0,_apiClient__WEBPACK_IMPORTED_MODULE_0__.tokenGet)("/linkCard/list/" + folderId + "?sortBy=" + sortBy + "&sortOrder=" + sortOrder + "&lastId=" + lastId + "&limit=" + limit, {}, {});
        case 3:
          response = _context10.sent;
          return _context10.abrupt("return", response);
        case 7:
          _context10.prev = 7;
          _context10.t0 = _context10["catch"](0);
          console.error("linkCardListGet failed:", _context10.t0);
          throw _context10.t0;
        case 11:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 7]]);
  }));
  return function linkCardFolderListGet(_x15, _x16, _x17, _x18, _x19) {
    return _ref10.apply(this, arguments);
  };
}();

// 링크 카드 전체 리스트 조회
var linkCardAllListGet = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(sortBy, sortOrder, lastId, limit) {
    var response;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return (0,_apiClient__WEBPACK_IMPORTED_MODULE_0__.tokenGet)("/linkCard/list" + "?sortBy=" + sortBy + "&sortOrder=" + sortOrder + "&lastId=" + lastId + "&limit=" + limit, {}, {});
        case 3:
          response = _context11.sent;
          return _context11.abrupt("return", response);
        case 7:
          _context11.prev = 7;
          _context11.t0 = _context11["catch"](0);
          console.error("linkCardListGet failed:", _context11.t0);
          throw _context11.t0;
        case 11:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 7]]);
  }));
  return function linkCardAllListGet(_x20, _x21, _x22, _x23) {
    return _ref11.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./services/memberService.js":
/*!***********************************!*\
  !*** ./services/memberService.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memberGet: () => (/* binding */ memberGet)
/* harmony export */ });
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiClient */ "./services/apiClient.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


// 현재 로그인한 사용자 정보 조회
var memberGet = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var params,
      url,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
          _context.prev = 1;
          _context.next = 4;
          return (0,_apiClient__WEBPACK_IMPORTED_MODULE_0__.tokenGet)('/member', params);
        case 4:
          url = _context.sent;
          return _context.abrupt("return", url);
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.error('Google 로그인 URL을 가져오는 데 실패했습니다:', _context.t0);
          throw _context.t0;
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function memberGet() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/adapters/adapters.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/adapters/adapters.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.js */ "./node_modules/axios/lib/helpers/null.js");
/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr.js */ "./node_modules/axios/lib/adapters/xhr.js");
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch.js */ "./node_modules/axios/lib/adapters/fetch.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");






const knownAdapters = {
  http: _http_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  xhr: _xhr_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  fetch: _fetch_js__WEBPACK_IMPORTED_MODULE_2__["default"]
}

_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(adapter) || adapter === null || adapter === false;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAdapter: (adapters) => {
    adapters = _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_4__["default"](`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_4__["default"](
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
});


/***/ }),

/***/ "./node_modules/axios/lib/adapters/fetch.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/adapters/fetch.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_composeSignals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/composeSignals.js */ "./node_modules/axios/lib/helpers/composeSignals.js");
/* harmony import */ var _helpers_trackStream_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/trackStream.js */ "./node_modules/axios/lib/helpers/trackStream.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/progressEventReducer.js */ "./node_modules/axios/lib/helpers/progressEventReducer.js");
/* harmony import */ var _helpers_resolveConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/resolveConfig.js */ "./node_modules/axios/lib/helpers/resolveConfig.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/settle.js */ "./node_modules/axios/lib/core/settle.js");










const isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';

// used only inside the fetch adapter
const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ?
    ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) :
    async (str) => new Uint8Array(await new Response(str).arrayBuffer())
);

const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false
  }
}

const supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;

  const hasContentType = new Request(_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].origin, {
    body: new ReadableStream(),
    method: 'POST',
    get duplex() {
      duplexAccessed = true;
      return 'half';
    },
  }).headers.has('Content-Type');

  return duplexAccessed && !hasContentType;
});

const DEFAULT_CHUNK_SIZE = 64 * 1024;

const supportsResponseStream = isReadableStreamSupported &&
  test(() => _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isReadableStream(new Response('').body));


const resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};

isFetchSupported && (((res) => {
  ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
    !resolvers[type] && (resolvers[type] = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isFunction(res[type]) ? (res) => res[type]() :
      (_, config) => {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"](`Response type '${type}' is not supported`, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERR_NOT_SUPPORT, config);
      })
  });
})(new Response));

const getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }

  if(_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isBlob(body)) {
    return body.size;
  }

  if(_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isSpecCompliantForm(body)) {
    const _request = new Request(_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].origin, {
      method: 'POST',
      body,
    });
    return (await _request.arrayBuffer()).byteLength;
  }

  if(_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArrayBufferView(body) || _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArrayBuffer(body)) {
    return body.byteLength;
  }

  if(_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isURLSearchParams(body)) {
    body = body + '';
  }

  if(_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(body)) {
    return (await encodeText(body)).byteLength;
  }
}

const resolveBodyLength = async (headers, body) => {
  const length = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].toFiniteNumber(headers.getContentLength());

  return length == null ? getBodyLength(body) : length;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = 'same-origin',
    fetchOptions
  } = (0,_helpers_resolveConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(config);

  responseType = responseType ? (responseType + '').toLowerCase() : 'text';

  let composedSignal = (0,_helpers_composeSignals_js__WEBPACK_IMPORTED_MODULE_4__["default"])([signal, cancelToken && cancelToken.toAbortSignal()], timeout);

  let request;

  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
  });

  let requestContentLength;

  try {
    if (
      onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' &&
      (requestContentLength = await resolveBodyLength(headers, data)) !== 0
    ) {
      let _request = new Request(url, {
        method: 'POST',
        body: data,
        duplex: "half"
      });

      let contentTypeHeader;

      if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
        headers.setContentType(contentTypeHeader)
      }

      if (_request.body) {
        const [onProgress, flush] = (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_5__.progressEventDecorator)(
          requestContentLength,
          (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_5__.progressEventReducer)((0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_5__.asyncDecorator)(onUploadProgress))
        );

        data = (0,_helpers_trackStream_js__WEBPACK_IMPORTED_MODULE_6__.trackStream)(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }

    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(withCredentials)) {
      withCredentials = withCredentials ? 'include' : 'omit';
    }

    // Cloudflare Workers throws when credentials are defined
    // see https://github.com/cloudflare/workerd/issues/902
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : undefined
    });

    let response = await fetch(request);

    const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');

    if (supportsResponseStream && (onDownloadProgress || (isStreamResponse && unsubscribe))) {
      const options = {};

      ['status', 'statusText', 'headers'].forEach(prop => {
        options[prop] = response[prop];
      });

      const responseContentLength = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].toFiniteNumber(response.headers.get('content-length'));

      const [onProgress, flush] = onDownloadProgress && (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_5__.progressEventDecorator)(
        responseContentLength,
        (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_5__.progressEventReducer)((0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_5__.asyncDecorator)(onDownloadProgress), true)
      ) || [];

      response = new Response(
        (0,_helpers_trackStream_js__WEBPACK_IMPORTED_MODULE_6__.trackStream)(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }

    responseType = responseType || 'text';

    let responseData = await resolvers[_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].findKey(resolvers, responseType) || 'text'](response, config);

    !isStreamResponse && unsubscribe && unsubscribe();

    return await new Promise((resolve, reject) => {
      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_7__["default"])(resolve, reject, {
        data: responseData,
        headers: _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_8__["default"].from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      })
    })
  } catch (err) {
    unsubscribe && unsubscribe();

    if (err && err.name === 'TypeError' && /fetch/i.test(err.message)) {
      throw Object.assign(
        new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Network Error', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      )
    }

    throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].from(err, err && err.code, config, request);
  }
}));




/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../core/settle.js */ "./node_modules/axios/lib/core/settle.js");
/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/parseProtocol.js */ "./node_modules/axios/lib/helpers/parseProtocol.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/progressEventReducer.js */ "./node_modules/axios/lib/helpers/progressEventReducer.js");
/* harmony import */ var _helpers_resolveConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/resolveConfig.js */ "./node_modules/axios/lib/helpers/resolveConfig.js");











const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = (0,_helpers_resolveConfig_js__WEBPACK_IMPORTED_MODULE_0__["default"])(config);
    let requestData = _config.data;
    const requestHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(_config.headers).normalize();
    let {responseType, onUploadProgress, onDownloadProgress} = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;

    function done() {
      flushUpload && flushUpload(); // flush events
      flushDownload && flushDownload(); // flush events

      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);

      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
    }

    let request = new XMLHttpRequest();

    request.open(_config.method.toUpperCase(), _config.url, true);

    // Set the request timeout in MS
    request.timeout = _config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Request aborted', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Network Error', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = _config.transitional || _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_4__["default"];
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ETIMEDOUT : _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      _utils_js__WEBPACK_IMPORTED_MODULE_5__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_5__["default"].isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = _config.responseType;
    }

    // Handle progress if needed
    if (onDownloadProgress) {
      ([downloadThrottled, flushDownload] = (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__.progressEventReducer)(onDownloadProgress, true));
      request.addEventListener('progress', downloadThrottled);
    }

    // Not all browsers support upload events
    if (onUploadProgress && request.upload) {
      ([uploadThrottled, flushUpload] = (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__.progressEventReducer)(onUploadProgress));

      request.upload.addEventListener('progress', uploadThrottled);

      request.upload.addEventListener('loadend', flushUpload);
    }

    if (_config.cancelToken || _config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_7__["default"](null, config, request) : cancel);
        request.abort();
        request = null;
      };

      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = (0,_helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_config.url);

    if (protocol && _platform_index_js__WEBPACK_IMPORTED_MODULE_9__["default"].protocols.indexOf(protocol) === -1) {
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Unsupported protocol ' + protocol + ':', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");
/* harmony import */ var _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios.js */ "./node_modules/axios/lib/core/Axios.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel/CancelToken.js */ "./node_modules/axios/lib/cancel/CancelToken.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/spread.js */ "./node_modules/axios/lib/helpers/spread.js");
/* harmony import */ var _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/isAxiosError.js */ "./node_modules/axios/lib/helpers/isAxiosError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");
/* harmony import */ var _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/HttpStatusCode.js */ "./node_modules/axios/lib/helpers/HttpStatusCode.js");




















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"](defaultConfig);
  const instance = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.request, context);

  // Copy axios.prototype to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, context, {allOwnKeys: true});

  // Copy context to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance((0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(_defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

// Expose Axios class to allow class inheritance
axios.Axios = _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"];

// Expose Cancel & CancelToken
axios.CanceledError = _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__["default"];
axios.CancelToken = _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__["default"];
axios.isCancel = _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__["default"];
axios.VERSION = _env_data_js__WEBPACK_IMPORTED_MODULE_8__.VERSION;
axios.toFormData = _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__["default"];

// Expose AxiosError class
axios.AxiosError = _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__["default"];

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__["default"];

// Expose isAxiosError
axios.isAxiosError = _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__["default"];

// Expose mergeConfig
axios.mergeConfig = _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"];

axios.AxiosHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__["default"];

axios.formToJSON = thing => (0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__["default"].getAdapter;

axios.HttpStatusCode = _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__["default"];

axios.default = axios;

// this module should only have a default export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  toAbortSignal() {
    const controller = new AbortController();

    const abort = (err) => {
      controller.abort(err);
    };

    this.subscribe(abort);

    controller.signal.unsubscribe = () => this.unsubscribe(abort);

    return controller.signal;
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelToken);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CanceledError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, message == null ? 'canceled' : message, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].inherits(CanceledError, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __CANCEL__: true
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanceledError);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCancel)
/* harmony export */ });


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterceptorManager.js */ "./node_modules/axios/lib/core/InterceptorManager.js");
/* harmony import */ var _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatchRequest.js */ "./node_modules/axios/lib/core/dispatchRequest.js");
/* harmony import */ var _mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/validator.js */ "./node_modules/axios/lib/helpers/validator.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");











const validators = _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
      response: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};

        Error.captureStackTrace ? Error.captureStackTrace(dummy) : (dummy = new Error());

        // slice off the Error: ... line
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
        try {
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
            err.stack += '\n' + stack
          }
        } catch (e) {
          // ignore the case where "stack" is an un-writable property
        }
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(config, {
      baseUrl: validators.spelling('baseURL'),
      withXsrfToken: validators.spelling('withXSRFToken')
    }, true);

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].merge(
      headers.common,
      headers[config.method]
    );

    headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [_dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
    const fullPath = (0,_buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config.baseURL, config.url);
    return (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__["default"])(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios);


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosError.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});

const prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);

  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosError);


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosHeaders.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosHeaders.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseHeaders.js */ "./node_modules/axios/lib/helpers/parseHeaders.js");





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value)) return;

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders((0,_helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"])(header), valueOrRewrite);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosHeaders);


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterceptorManager);


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFullPath)
/* harmony export */ });
/* harmony import */ var _helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isAbsoluteURL.js */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
/* harmony import */ var _helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/combineURLs.js */ "./node_modules/axios/lib/helpers/combineURLs.js");





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0,_helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__["default"])(requestedURL)) {
    return (0,_helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseURL, requestedURL);
  }
  return requestedURL;
}


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dispatchRequest)
/* harmony export */ });
/* harmony import */ var _transformData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformData.js */ "./node_modules/axios/lib/core/transformData.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers);

  // Transform request data
  config.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__["default"].getAdapter(config.adapter || _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
      config,
      config.transformResponse,
      response
    );

    response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!(0,_cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__["default"])(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeConfig)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");





const headersToObject = (thing) => thing instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? { ...thing } : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, prop, caseless) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(target) && _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge.call({caseless}, target, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge({}, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, prop , caseless) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(a, b, prop , caseless);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a, prop , caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b , prop) => mergeDeepProperties(headersToObject(a), headersToObject(b),prop, true)
  };

  _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ settle)
/* harmony export */ });
/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      'Request failed with status code ' + response.status,
      [_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_REQUEST, _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transformData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  const context = response || config;
  const headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(context.headers);
  let data = context.data;

  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}


/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "./node_modules/axios/lib/helpers/toURLEncodedForm.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");










/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: _transitional_js__WEBPACK_IMPORTED_MODULE_1__["default"],

  adapter: ['xhr', 'http', 'fetch'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);

    if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);

    if (isFormData) {
      return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data)) : data;
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isReadableStream(data)
    ) {
      return data;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {
      return data.buffer;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data, this.formSerializer).toString();
      }

      if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isResponse(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isReadableStream(data)) {
      return data;
    }

    if (data && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.FormData,
    Blob: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaults);


/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});


/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
const VERSION = "1.7.9";

/***/ }),

/***/ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js":
/*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosURLSearchParams);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/HttpStatusCode.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpStatusCode);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bind)
/* harmony export */ });


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildURL)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?(object|Function)} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(options)) {
    options = {
      serialize: options
    };
  } 

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(params) ?
      params.toString() :
      new _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__["default"](params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ combineURLs)
/* harmony export */ });


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/composeSignals.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/composeSignals.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




const composeSignals = (signals, timeout) => {
  const {length} = (signals = signals ? signals.filter(Boolean) : []);

  if (timeout || length) {
    let controller = new AbortController();

    let aborted;

    const onabort = function (reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? err : new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_1__["default"](err instanceof Error ? err.message : err));
      }
    }

    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"](`timeout ${timeout} of ms exceeded`, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ETIMEDOUT))
    }, timeout)

    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach(signal => {
          signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
        });
        signals = null;
      }
    }

    signals.forEach((signal) => signal.addEventListener('abort', onabort));

    const {signal} = controller;

    signal.unsubscribe = () => _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].asap(unsubscribe);

    return signal;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (composeSignals);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(path) && cookie.push('path=' + path);

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  });



/***/ }),

/***/ "./node_modules/axios/lib/helpers/formDataToJSON.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target) ? target.length : name;

    if (isLast) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(formData) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(formData.entries)) {
    const obj = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataToJSON);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAbsoluteURL)
/* harmony export */ });


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAxiosError)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(payload) && (payload.isAxiosError === true);
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasStandardBrowserEnv ? ((origin, isMSIE) => (url) => {
  url = new URL(url, _platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].origin);

  return (
    origin.protocol === url.protocol &&
    origin.host === url.host &&
    (isMSIE || origin.port === url.port)
  );
})(
  new URL(_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].origin),
  _platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].navigator && /(msie|trident)/i.test(_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].navigator.userAgent)
) : () => true);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/null.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line strict
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseProtocol.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseProtocol)
/* harmony export */ });


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/progressEventReducer.js":
/*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/progressEventReducer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asyncDecorator: () => (/* binding */ asyncDecorator),
/* harmony export */   progressEventDecorator: () => (/* binding */ progressEventDecorator),
/* harmony export */   progressEventReducer: () => (/* binding */ progressEventReducer)
/* harmony export */ });
/* harmony import */ var _speedometer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speedometer.js */ "./node_modules/axios/lib/helpers/speedometer.js");
/* harmony import */ var _throttle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./throttle.js */ "./node_modules/axios/lib/helpers/throttle.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = (0,_speedometer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(50, 250);

  return (0,_throttle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true
    };

    listener(data);
  }, freq);
}

const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;

  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
}

const asyncDecorator = (fn) => (...args) => _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].asap(() => fn(...args));


/***/ }),

/***/ "./node_modules/axios/lib/helpers/resolveConfig.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/resolveConfig.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isURLSameOrigin.js */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
/* harmony import */ var _cookies_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cookies.js */ "./node_modules/axios/lib/helpers/cookies.js");
/* harmony import */ var _core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _buildURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((config) => {
  const newConfig = (0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, config);

  let {data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth} = newConfig;

  newConfig.headers = headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(headers);

  newConfig.url = (0,_buildURL_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_3__["default"])(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);

  // HTTP basic authentication
  if (auth) {
    headers.set('Authorization', 'Basic ' +
      btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : ''))
    );
  }

  let contentType;

  if (_utils_js__WEBPACK_IMPORTED_MODULE_4__["default"].isFormData(data)) {
    if (_platform_index_js__WEBPACK_IMPORTED_MODULE_5__["default"].hasStandardBrowserEnv || _platform_index_js__WEBPACK_IMPORTED_MODULE_5__["default"].hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(undefined); // Let the browser set it
    } else if ((contentType = headers.getContentType()) !== false) {
      // fix semicolon duplication issue for ReactNative FormData implementation
      const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (_platform_index_js__WEBPACK_IMPORTED_MODULE_5__["default"].hasStandardBrowserEnv) {
    withXSRFToken && _utils_js__WEBPACK_IMPORTED_MODULE_4__["default"].isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));

    if (withXSRFToken || (withXSRFToken !== false && (0,_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_6__["default"])(newConfig.url))) {
      // Add xsrf header
      const xsrfValue = xsrfHeaderName && xsrfCookieName && _cookies_js__WEBPACK_IMPORTED_MODULE_7__["default"].read(xsrfCookieName);

      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }

  return newConfig;
});



/***/ }),

/***/ "./node_modules/axios/lib/helpers/speedometer.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/speedometer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (speedometer);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ spread)
/* harmony export */ });


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/throttle.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/throttle.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;

  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  }

  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if ( passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs)
        }, threshold - passed);
      }
    }
  }

  const flush = () => lastArgs && invoke(lastArgs);

  return [throttled, flush];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (throttle);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toFormData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/node/classes/FormData.js */ "./node_modules/axios/lib/helpers/null.js");




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(thing) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(arr) && !arr.some(isVisitable);
}

const predicates = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (_platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"] || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSpecCompliantForm(formData);

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(value)) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Blob is not supported. Use a Buffer instead.');
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) && isFlatArray(value)) ||
        ((_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]')) && (arr = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(value, function each(el, key) {
      const result = !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && visitor.call(
        formData, el, _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFormData);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toURLEncodedForm.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toURLEncodedForm)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");






function toURLEncodedForm(data, options) {
  return (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, new _platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNode && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/trackStream.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/trackStream.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   readBytes: () => (/* binding */ readBytes),
/* harmony export */   streamChunk: () => (/* binding */ streamChunk),
/* harmony export */   trackStream: () => (/* binding */ trackStream)
/* harmony export */ });

const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;

  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }

  let pos = 0;
  let end;

  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
}

const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
}

const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }

  const reader = stream.getReader();
  try {
    for (;;) {
      const {done, value} = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
}

const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);

  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  }

  return new ReadableStream({
    async pull(controller) {
      try {
        const {done, value} = await iterator.next();

        if (done) {
         _onFinish();
          controller.close();
          return;
        }

        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  })
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + _env_data_js__WEBPACK_IMPORTED_MODULE_0__.VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

validators.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    // eslint-disable-next-line no-console
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  }
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('options must be an object', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('option ' + opt + ' must be ' + result, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Unknown option ' + opt, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  assertOptions,
  validators
});


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/Blob.js":
/*!*****************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/Blob.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof Blob !== 'undefined' ? Blob : null);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/FormData.js":
/*!*********************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof FormData !== 'undefined' ? FormData : null);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/URLSearchParams.js */ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js");
/* harmony import */ var _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormData.js */ "./node_modules/axios/lib/platform/browser/classes/FormData.js");
/* harmony import */ var _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Blob.js */ "./node_modules/axios/lib/platform/browser/classes/Blob.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isBrowser: true,
  classes: {
    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Blob: _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});


/***/ }),

/***/ "./node_modules/axios/lib/platform/common/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/platform/common/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasBrowserEnv: () => (/* binding */ hasBrowserEnv),
/* harmony export */   hasStandardBrowserEnv: () => (/* binding */ hasStandardBrowserEnv),
/* harmony export */   hasStandardBrowserWebWorkerEnv: () => (/* binding */ hasStandardBrowserWebWorkerEnv),
/* harmony export */   navigator: () => (/* binding */ _navigator),
/* harmony export */   origin: () => (/* binding */ origin)
/* harmony export */ });
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

const _navigator = typeof navigator === 'object' && navigator || undefined;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = hasBrowserEnv &&
  (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();

const origin = hasBrowserEnv && window.location.href || 'http://localhost';




/***/ }),

/***/ "./node_modules/axios/lib/platform/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/platform/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/utils.js */ "./node_modules/axios/lib/platform/common/utils.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ..._common_utils_js__WEBPACK_IMPORTED_MODULE_0__,
  ..._node_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");




// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

const [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__["default"])(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }

  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({source, data}) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);

    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    }
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === 'function',
  isFunction(_global.postMessage)
);

const asap = typeof queueMicrotask !== 'undefined' ?
  queueMicrotask.bind(_global) : ( typeof process !== 'undefined' && process.nextTick || _setImmediate);

// *********************

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap
});


/***/ }),

/***/ "./node_modules/redux/dist/redux.mjs":
/*!*******************************************!*\
  !*** ./node_modules/redux/dist/redux.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __DO_NOT_USE__ActionTypes: () => (/* binding */ actionTypes_default),
/* harmony export */   applyMiddleware: () => (/* binding */ applyMiddleware),
/* harmony export */   bindActionCreators: () => (/* binding */ bindActionCreators),
/* harmony export */   combineReducers: () => (/* binding */ combineReducers),
/* harmony export */   compose: () => (/* binding */ compose),
/* harmony export */   createStore: () => (/* binding */ createStore),
/* harmony export */   isAction: () => (/* binding */ isAction),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   legacy_createStore: () => (/* binding */ legacy_createStore)
/* harmony export */ });
// src/utils/formatProdErrorMessage.ts
function formatProdErrorMessage(code) {
  return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}

// src/utils/symbol-observable.ts
var $$observable = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
var symbol_observable_default = $$observable;

// src/utils/actionTypes.ts
var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
var ActionTypes = {
  INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
};
var actionTypes_default = ActionTypes;

// src/utils/isPlainObject.ts
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}

// src/utils/kindOf.ts
function miniKindOf(val) {
  if (val === void 0)
    return "undefined";
  if (val === null)
    return "null";
  const type = typeof val;
  switch (type) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function": {
      return type;
    }
  }
  if (Array.isArray(val))
    return "array";
  if (isDate(val))
    return "date";
  if (isError(val))
    return "error";
  const constructorName = ctorName(val);
  switch (constructorName) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return constructorName;
  }
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
  return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
  return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
  if (val instanceof Date)
    return true;
  return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
  let typeOfVal = typeof val;
  if (true) {
    typeOfVal = miniKindOf(val);
  }
  return typeOfVal;
}

// src/createStore.ts
function createStore(reducer, preloadedState, enhancer) {
  if (typeof reducer !== "function") {
    throw new Error( false ? 0 : `Expected the root reducer to be a function. Instead, received: '${kindOf(reducer)}'`);
  }
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error( false ? 0 : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error( false ? 0 : `Expected the enhancer to be a function. Instead, received: '${kindOf(enhancer)}'`);
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = /* @__PURE__ */ new Map();
  let nextListeners = currentListeners;
  let listenerIdCounter = 0;
  let isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = /* @__PURE__ */ new Map();
      currentListeners.forEach((listener, key) => {
        nextListeners.set(key, listener);
      });
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error( false ? 0 : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error( false ? 0 : `Expected the listener to be a function. Instead, received: '${kindOf(listener)}'`);
    }
    if (isDispatching) {
      throw new Error( false ? 0 : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    }
    let isSubscribed = true;
    ensureCanMutateNextListeners();
    const listenerId = listenerIdCounter++;
    nextListeners.set(listenerId, listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error( false ? 0 : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      nextListeners.delete(listenerId);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( false ? 0 : `Actions must be plain objects. Instead, the actual type was: '${kindOf(action)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    }
    if (typeof action.type === "undefined") {
      throw new Error( false ? 0 : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }
    if (typeof action.type !== "string") {
      throw new Error( false ? 0 : `Action "type" property must be a string. Instead, the actual type was: '${kindOf(action.type)}'. Value was: '${action.type}' (stringified)`);
    }
    if (isDispatching) {
      throw new Error( false ? 0 : "Reducers may not dispatch actions.");
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    const listeners = currentListeners = nextListeners;
    listeners.forEach((listener) => {
      listener();
    });
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error( false ? 0 : `Expected the nextReducer to be a function. Instead, received: '${kindOf(nextReducer)}`);
    }
    currentReducer = nextReducer;
    dispatch({
      type: actionTypes_default.REPLACE
    });
  }
  function observable() {
    const outerSubscribe = subscribe;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error( false ? 0 : `Expected the observer to be an object. Instead, received: '${kindOf(observer)}'`);
        }
        function observeState() {
          const observerAsObserver = observer;
          if (observerAsObserver.next) {
            observerAsObserver.next(getState());
          }
        }
        observeState();
        const unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      },
      [symbol_observable_default]() {
        return this;
      }
    };
  }
  dispatch({
    type: actionTypes_default.INIT
  });
  const store = {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [symbol_observable_default]: observable
  };
  return store;
}
function legacy_createStore(reducer, preloadedState, enhancer) {
  return createStore(reducer, preloadedState, enhancer);
}

// src/utils/warning.ts
function warning(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e) {
  }
}

// src/combineReducers.ts
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  const reducerKeys = Object.keys(reducers);
  const argumentName = action && action.type === actionTypes_default.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (reducerKeys.length === 0) {
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  }
  if (!isPlainObject(inputState)) {
    return `The ${argumentName} has unexpected type of "${kindOf(inputState)}". Expected argument to be an object with the following keys: "${reducerKeys.join('", "')}"`;
  }
  const unexpectedKeys = Object.keys(inputState).filter((key) => !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key]);
  unexpectedKeys.forEach((key) => {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === actionTypes_default.REPLACE)
    return;
  if (unexpectedKeys.length > 0) {
    return `Unexpected ${unexpectedKeys.length > 1 ? "keys" : "key"} "${unexpectedKeys.join('", "')}" found in ${argumentName}. Expected to find one of the known reducer keys instead: "${reducerKeys.join('", "')}". Unexpected keys will be ignored.`;
  }
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach((key) => {
    const reducer = reducers[key];
    const initialState = reducer(void 0, {
      type: actionTypes_default.INIT
    });
    if (typeof initialState === "undefined") {
      throw new Error( false ? 0 : `The slice reducer for key "${key}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    }
    if (typeof reducer(void 0, {
      type: actionTypes_default.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error( false ? 0 : `The slice reducer for key "${key}" returned undefined when probed with a random type. Don't try to handle '${actionTypes_default.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
    }
  });
}
function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (true) {
      if (typeof reducers[key] === "undefined") {
        warning(`No reducer provided for key "${key}"`);
      }
    }
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducerKeys = Object.keys(finalReducers);
  let unexpectedKeyCache;
  if (true) {
    unexpectedKeyCache = {};
  }
  let shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }
  return function combination(state = {}, action) {
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    if (true) {
      const warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }
    let hasChanged = false;
    const nextState = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        const actionType = action && action.type;
        throw new Error( false ? 0 : `When called with an action of type ${actionType ? `"${String(actionType)}"` : "(unknown type)"}, the slice reducer for key "${key}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

// src/bindActionCreators.ts
function bindActionCreator(actionCreator, dispatch) {
  return function(...args) {
    return dispatch(actionCreator.apply(this, args));
  };
}
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error( false ? 0 : `bindActionCreators expected an object or a function, but instead received: '${kindOf(actionCreators)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  }
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

// src/compose.ts
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

// src/applyMiddleware.ts
function applyMiddleware(...middlewares) {
  return (createStore2) => (reducer, preloadedState) => {
    const store = createStore2(reducer, preloadedState);
    let dispatch = () => {
      throw new Error( false ? 0 : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    };
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);
    return {
      ...store,
      dispatch
    };
  };
}

// src/utils/isAction.ts
function isAction(action) {
  return isPlainObject(action) && "type" in action && typeof action.type === "string";
}

//# sourceMappingURL=redux.mjs.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./sidePanel.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reduxAlias_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reduxAlias/store */ "./redux/store.js");
/* harmony import */ var reduxAlias_actions_authActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reduxAlias/actions/authActions */ "./redux/actions/authActions.js");
/* harmony import */ var _services_memberService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/memberService */ "./services/memberService.js");
/* harmony import */ var _services_linkCardService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/linkCardService */ "./services/linkCardService.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




chrome.runtime.sendMessage({
  action: "openSidePanel"
});

// 멤버 조회 핸들러
var hanldeMemberGet = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var headers, response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          headers = {};
          _context.next = 4;
          return (0,_services_memberService__WEBPACK_IMPORTED_MODULE_2__.memberGet)();
        case 4:
          response = _context.sent;
          console.log("멤버 조회 응답:", response);
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log("멤버 조회 실패!");
        case 11:
          _context.prev = 11;
          console.log("로딩 종료"); // 로딩 상태 종료
          return _context.finish(11);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8, 11, 14]]);
  }));
  return function hanldeMemberGet() {
    return _ref.apply(this, arguments);
  };
}();
var handleLinkCardAiPost = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var _tabs$, tabs, encodedUrl, url, data, response, _response$folder, _response$tags, transformedData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return chrome.tabs.query({
            active: true,
            currentWindow: true
          });
        case 3:
          tabs = _context2.sent;
          encodedUrl = (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.url; // 인코딩된 URL
          if (encodedUrl) {
            _context2.next = 8;
            break;
          }
          console.error("활성 탭 URL을 가져올 수 없습니다.");
          return _context2.abrupt("return");
        case 8:
          url = decodeURIComponent(encodedUrl); // 디코딩된 URL
          console.log("Decoded URL:", url);

          // 헤더에 URL 추가
          data = {
            url: url // 디코딩된 URL 사용
          }; // API 요청 보내기
          _context2.next = 13;
          return (0,_services_linkCardService__WEBPACK_IMPORTED_MODULE_3__.linkCardAiPost)(data);
        case 13:
          response = _context2.sent;
          console.log(response);
          if (response) {
            // 응답 데이터를 변환
            transformedData = {
              title: response.title || "Default Title",
              url: response.url || url,
              // 디코딩된 URL 사용
              folderId: ((_response$folder = response.folder) === null || _response$folder === void 0 ? void 0 : _response$folder.id) || "default-folder-id",
              // 폴더 ID
              tagList: ((_response$tags = response.tags) === null || _response$tags === void 0 ? void 0 : _response$tags.map(function (tag) {
                return {
                  id: tag.id || 0,
                  tagType: tag.tagType || "AI/CUSTOM"
                };
              })) || [],
              memo: "Default memo text",
              // 기본 메모 추가
              summary: response.summary || "Default summary"
            }; // 상태 업데이트
            setLinkCardListDetail(transformedData); // 배열 형태로 상태에 저장
            console.log("가공된 데이터:", transformedData);
          }
          _context2.next = 21;
          break;
        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](0);
          console.error("링크카드 생성 실패:", _context2.t0);
        case 21:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 18]]);
  }));
  return function handleLinkCardAiPost() {
    return _ref2.apply(this, arguments);
  };
}();

// Form Elements
var formElements = {
  title: document.getElementById("titleInput"),
  folder: document.getElementById("folderSelect"),
  tag: document.getElementById("tagInput"),
  summary: document.getElementById("autoSummary"),
  memo: document.getElementById("memoInput")
};
var skeleton = document.getElementById("skeleton");
var form = document.getElementById("form");
var isLoading = true;

// UI 상태 토글
var toggleUI = function toggleUI() {
  if (isLoading) {
    skeleton.style.display = "block";
    form.style.display = "none";
  } else {
    skeleton.style.display = "none";
    form.style.display = "block";
  }
};
var setLoadingState = function setLoadingState(loading) {
  isLoading = loading;
  toggleUI();
};

// Chrome Storage에서 저장된 토큰 가져오기
var initializeSidePanel = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          try {
            console.log("Chrome Storage에서 토큰 확인 중...");
            chrome.storage.local.get(["accessToken", "refreshToken"], function (tokens) {
              var accessToken = tokens.accessToken,
                refreshToken = tokens.refreshToken;
              if (accessToken && refreshToken) {
                console.log("토큰 발견:", {
                  accessToken: accessToken,
                  refreshToken: refreshToken
                });
                // Redux Store에 토큰 설정
                reduxAlias_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,reduxAlias_actions_authActions__WEBPACK_IMPORTED_MODULE_1__.setTokens)(accessToken, refreshToken));
                console.log("Redux Store에 토큰 저장 완료");

                // 토큰이 있는 경우 멤버 조회 바로 호출
                hanldeMemberGet();
                handleLinkCardAiPost();
              } else {
                console.warn("Chrome Storage에 저장된 토큰이 없습니다.");
              }
            });
          } catch (error) {
            console.error("Chrome Storage에서 토큰 가져오기 실패:", error);
          }
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function initializeSidePanel() {
    return _ref3.apply(this, arguments);
  };
}();

// Mock 데이터 로드
var loadFormData = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          setLoadingState(true);
          _context4.prev = 1;
          _context4.next = 4;
          return new Promise(function (resolve) {
            return setTimeout(resolve, 3000);
          });
        case 4:
          // Mock 데이터 로드
          console.log("Data loaded from API");

          // Form 데이터 채우기
          formElements.title.value = "예제 제목";
          formElements.folder.value = "폴더 1";
          formElements.tag.value = "태그 예제";
          formElements.summary.value = "자동 생성된 요약";
          formElements.memo.value = "사용자 메모";
          _context4.next = 15;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](1);
          console.error("데이터 로드 실패:", _context4.t0);
        case 15:
          _context4.prev = 15;
          setLoadingState(false);
          return _context4.finish(15);
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 12, 15, 18]]);
  }));
  return function loadFormData() {
    return _ref4.apply(this, arguments);
  };
}();

// 초기화 로직
document.addEventListener("DOMContentLoaded", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
    while (1) switch (_context5.prev = _context5.next) {
      case 0:
        console.log("DOMContentLoaded 이벤트 발생");
        _context5.next = 3;
        return initializeSidePanel();
      case 3:
        // Chrome Storage에서 저장된 토큰 가져오기
        console.log("Side Panel 초기화 완료");
        _context5.next = 6;
        return loadFormData();
      case 6:
        // 데이터 로드
        console.log("Form 데이터 로드 완료");
      case 7:
      case "end":
        return _context5.stop();
    }
  }, _callee5);
})));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFBO1VBRW5DOEssZUFBZSxDQUFDLEtBQUssQ0FBQztVQUFDLE9BQUFuSCxTQUFBLENBQUFwRCxNQUFBO1FBQUE7UUFBQTtVQUFBLE9BQUFvRCxTQUFBLENBQUF4RCxJQUFBO01BQUE7SUFBQSxHQUFBcUQsUUFBQTtFQUFBLENBRTFCO0VBQUEsZ0JBbEJLOEgsWUFBWUEsQ0FBQTtJQUFBLE9BQUEvSCxLQUFBLENBQUEzQyxLQUFBLE9BQUF0SCxTQUFBO0VBQUE7QUFBQSxHQWtCakI7O0FBRUQ7QUFDQWdSLFFBQVEsQ0FBQ2tCLGdCQUFnQixDQUFDLGtCQUFrQixlQUFBN0ssaUJBQUEsY0FBQXJHLG1CQUFBLEdBQUFpRixJQUFBLENBQUUsU0FBQXdFLFNBQUE7RUFBQSxPQUFBekosbUJBQUEsR0FBQXVCLElBQUEsVUFBQW9JLFVBQUFDLFNBQUE7SUFBQSxrQkFBQUEsU0FBQSxDQUFBbEUsSUFBQSxHQUFBa0UsU0FBQSxDQUFBM0YsSUFBQTtNQUFBO1FBQzVDcUUsT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLENBQUM7UUFBQ3FCLFNBQUEsQ0FBQTNGLElBQUE7UUFBQSxPQUNqQ3lNLG1CQUFtQixDQUFDLENBQUM7TUFBQTtRQUFFO1FBQzdCcEksT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7UUFBQ3FCLFNBQUEsQ0FBQTNGLElBQUE7UUFBQSxPQUMzQitNLFlBQVksQ0FBQyxDQUFDO01BQUE7UUFBRTtRQUN0QjFJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO01BQUM7TUFBQTtRQUFBLE9BQUFxQixTQUFBLENBQUEvRCxJQUFBO0lBQUE7RUFBQSxHQUFBNEQsUUFBQTtBQUFBLENBQy9CLEdBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvZm9sZGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGlDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvbGlua0NhcmRTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL21lbWJlclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy9hZGFwdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL2ZldGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzL3RyYW5zaXRpb25hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2Vudi9kYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvSHR0cFN0YXR1c0NvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tcG9zZVNpZ25hbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0F4aW9zRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZVByb3RvY29sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wcm9ncmVzc0V2ZW50UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcmVzb2x2ZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3BlZWRvbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3RvRm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3RvVVJMRW5jb2RlZEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3RyYWNrU3RyZWFtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2NsYXNzZXMvQmxvYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvY2xhc3Nlcy9Gb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvY2xhc3Nlcy9VUkxTZWFyY2hQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vY29tbW9uL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZGlzdC9yZWR1eC5tanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc2lkZVBhbmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzXHJcbmV4cG9ydCBjb25zdCBzZXRUb2tlbnMgPSAoYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbikgPT4gKHtcclxuICAgIHR5cGU6ICdTRVRfVE9LRU5TJyxcclxuICAgIHBheWxvYWQ6IHsgYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiB9LFxyXG4gIH0pO1xyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBjbGVhclRva2VucyA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiAnQ0xFQVJfVE9LRU5TJyxcclxuICB9KTtcclxuICAiLCIvLyBzcmMvcmVkdXgvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanNcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgYWNjZXNzVG9rZW46ICcnLFxyXG4gICAgcmVmcmVzaFRva2VuOiAnJyxcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGF1dGhSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSAnU0VUX1RPS0VOUyc6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgYWNjZXNzVG9rZW46IGFjdGlvbi5wYXlsb2FkLmFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgcmVmcmVzaFRva2VuOiBhY3Rpb24ucGF5bG9hZC5yZWZyZXNoVG9rZW4sXHJcbiAgICAgICAgfTtcclxuICAgICAgY2FzZSAnQ0xFQVJfVE9LRU5TJzpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBhY2Nlc3NUb2tlbjogJycsXHJcbiAgICAgICAgICByZWZyZXNoVG9rZW46ICcnLFxyXG4gICAgICAgIH07XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgYXV0aFJlZHVjZXI7XHJcbiAgIiwiLy8gc3JjL3JlZHV4L3JlZHVjZXJzL2ZvbGRlclJlZHVjZXIuanNcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGZvbGRlckxpc3Q6IFtdLFxyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgZm9sZGVyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJTRVRfRk9MREVSX0xJU1RcIjpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBmb2xkZXJMaXN0OiBhY3Rpb24ucGF5bG9hZCwgLy8g7ISc67KE7JeQ7IScIOuwm+ydgCDtj7TrjZQg66qp66Gd7Jy866GcIOqwseyLoFxyXG4gICAgICAgIH07XHJcbiAgICAgIGNhc2UgXCJVUERBVEVfRk9MREVSX05BTUVcIjpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBmb2xkZXJMaXN0OiBzdGF0ZS5mb2xkZXJMaXN0Lm1hcCgoZm9sZGVyKSA9PlxyXG4gICAgICAgICAgICBmb2xkZXIuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICAgICAgICAgPyB7IC4uLmZvbGRlciwgbmFtZTogYWN0aW9uLnBheWxvYWQubmFtZSB9XHJcbiAgICAgICAgICAgICAgOiBmb2xkZXJcclxuICAgICAgICAgICksXHJcbiAgICAgICAgfTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBmb2xkZXJSZWR1Y2VyO1xyXG4gICIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjsgLy8gUmVkdXjsl5DshJwgY29tYmluZVJlZHVjZXJzIOqwgOyguOyYpOq4sFxyXG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvYXV0aFJlZHVjZXJcIjtcclxuaW1wb3J0IGZvbGRlclJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvZm9sZGVyUmVkdWNlclwiO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGF1dGg6IGF1dGhSZWR1Y2VyLFxyXG4gIGZvbGRlcjogZm9sZGVyUmVkdWNlcixcclxufSk7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vcmVkdXgvc3RvcmUnOyAvLyBzdG9yZSDqsIDsoLjsmKTquLBcclxuXHJcbmNvbnN0IEFQSV9CQVNFX1VSTCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9BUElfQkFTRV9VUkw7XHJcblxyXG5jb25zdCBhcGlDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IEFQSV9CQVNFX1VSTCxcclxuICB0aW1lb3V0OiAxMDAwMCwgLy8g7YOA7J6E7JWE7JuDIOyEpOyglVxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8gUmVkdXjsl5DshJwgYWNjZXNzVG9rZW7snYQg6rCA7KC47Jik64qUIO2VqOyImFxyXG5jb25zdCBnZXRBY2Nlc3NUb2tlbiA9ICgpID0+IHtcclxuICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7ICAvLyBzdG9yZSDsg4Htg5wg6rCA7KC47Jik6riwXHJcbiAgcmV0dXJuIHN0YXRlLmF1dGguYWNjZXNzVG9rZW47ICAgLy8gYXV0aFJlZHVjZXLsl5DshJwg6rSA66as7ZWY64qUIGFjY2Vzc1Rva2VuIOqwgOyguOyYpOq4sFxyXG59O1xyXG5cclxuY29uc3QgZ2V0UmVmcmVzaFRva2VuID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTsgIC8vIHN0b3JlIOyDge2DnCDqsIDsoLjsmKTquLBcclxuICByZXR1cm4gc3RhdGUuYXV0aC5yZWZyZXNoVG9rZW47ICAgLy8gYXV0aFJlZHVjZXLsl5DshJwg6rSA66as7ZWY64qUIGFjY2Vzc1Rva2VuIOqwgOyguOyYpOq4sFxyXG59O1xyXG5cclxuLy8gR0VUIOyalOyyreydhCDsnITtlZwg7ZWo7IiYICjthqDtgbAg7JeG64qUIOq4sOuzuCBHRVQg7JqU7LKtKVxyXG5leHBvcnQgY29uc3QgZ2V0ID0gYXN5bmMgKHVybCwgcGFyYW1zID0ge30sIGhlYWRlcnMgPSB7fSkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpQ2xpZW50LmdldCh1cmwsIHsgcGFyYW1zLCBoZWFkZXJzIH0pO1xyXG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59O1xyXG5cclxuLy8gUE9TVCDsmpTssq3snYQg7JyE7ZWcIO2VqOyImCAo7Yag7YGwIOyXhuuKlCDquLDrs7ggUE9TVCDsmpTssq0pXHJcbmV4cG9ydCBjb25zdCBwb3N0ID0gYXN5bmMgKHVybCwgZGF0YSA9IHt9LCBoZWFkZXJzID0ge30pID0+IHtcclxuICBjb25zb2xlLmxvZyhcIkZpbmFsIEhlYWRlcnM6XCIsIGhlYWRlcnMpO1xyXG4gIGNvbnNvbGUubG9nKCdkYXRhOicsIGRhdGEpO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpQ2xpZW50LnBvc3QodXJsLCBkYXRhLCB7IGhlYWRlcnMgfSk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn07XHJcblxyXG4vLyBQVVQg7JqU7LKt7J2EIOychO2VnCDtlajsiJggKO2GoO2BsCDsl4bripQg6riw67O4IFBVVCDsmpTssq0pXHJcbmV4cG9ydCBjb25zdCBwdXQgPSBhc3luYyAodXJsLCBkYXRhID0ge30sIGhlYWRlcnMgPSB7fSkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpQ2xpZW50LnB1dCh1cmwsIGRhdGEsIHsgaGVhZGVycyB9KTtcclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbi8vIERFTEVURSDsmpTssq3snYQg7JyE7ZWcIO2VqOyImCAo7Yag7YGwIOyXhuuKlCDquLDrs7ggREVMRVRFIOyalOyyrSlcclxuZXhwb3J0IGNvbnN0IGRlbCA9IGFzeW5jICh1cmwsIGhlYWRlcnMgPSB7fSkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpQ2xpZW50LmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KTtcclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbi8vIEdFVCDsmpTssq3snYQg7JyE7ZWcIO2VqOyImCAoYWNjZXNzVG9rZW7snbQg7ZWE7JqU7ZWcIEdFVCDsmpTssq0pXHJcbmV4cG9ydCBjb25zdCB0b2tlbkdldCA9IGFzeW5jICh1cmwsIHBhcmFtcyA9IHt9LCBoZWFkZXJzID0ge30pID0+IHtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IGdldEFjY2Vzc1Rva2VuKCk7XHJcblxyXG4gIC8vIGFjY2Vzc1Rva2Vu7J20IOyeiOycvOuptCBBdXRob3JpemF0aW9uIO2XpOuNlCDstpTqsIBcclxuICBpZiAoYWNjZXNzVG9rZW4pIHtcclxuICAgIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gO1xyXG4gIH1cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaUNsaWVudC5nZXQodXJsLCB7IHBhcmFtcywgaGVhZGVycyB9KTtcclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbi8vIFBPU1Qg7JqU7LKt7J2EIOychO2VnCDtlajsiJggKGFjY2Vzc1Rva2Vu7J20IO2VhOyalO2VnCBQT1NUIOyalOyyrSlcclxuZXhwb3J0IGNvbnN0IHRva2VuUG9zdCA9IGFzeW5jICh1cmwsIGRhdGEgPSB7fSwgaGVhZGVycyA9IHt9KSA9PiB7XHJcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSBnZXRBY2Nlc3NUb2tlbigpO1xyXG4gIFxyXG4gIGlmIChhY2Nlc3NUb2tlbikge1xyXG4gICAgaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke2FjY2Vzc1Rva2VufWA7XHJcbiAgfSAgXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlDbGllbnQucG9zdCh1cmwsIGRhdGEsIHsgaGVhZGVycyB9KTtcclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWZyZXNoUG9zdCA9IGFzeW5jICh1cmwsIGRhdGEgPSB7fSwgaGVhZGVycyA9IHt9KSA9PiB7XHJcbiAgY29uc3QgcmVmcmVzaFRva2VuID0gZ2V0UmVmcmVzaFRva2VuKCk7XHJcbiAgXHJcbiAgaWYgKHJlZnJlc2hUb2tlbikge1xyXG4gICAgaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3JlZnJlc2hUb2tlbn1gO1xyXG4gIH0gIFxyXG4gIGNvbnNvbGUubG9nKFwicmVmcmVzaFRva2VuXCIscmVmcmVzaFRva2VuKTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaUNsaWVudC5wb3N0KHVybCwgZGF0YSwgeyBoZWFkZXJzIH0pO1xyXG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59O1xyXG5cclxuLy8gUFVUIOyalOyyreydhCDsnITtlZwg7ZWo7IiYIChhY2Nlc3NUb2tlbuydtCDtlYTsmpTtlZwgUFVUIOyalOyyrSlcclxuZXhwb3J0IGNvbnN0IHRva2VuUHV0ID0gYXN5bmMgKHVybCwgZGF0YSA9IHt9LCBoZWFkZXJzID0ge30pID0+IHtcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IGdldEFjY2Vzc1Rva2VuKCk7XHJcblxyXG4gIC8vIGFjY2Vzc1Rva2Vu7J20IOyeiOycvOuptCBBdXRob3JpemF0aW9uIO2XpOuNlCDstpTqsIBcclxuICBpZiAoYWNjZXNzVG9rZW4pIHtcclxuICAgIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlDbGllbnQucHV0KHVybCwgZGF0YSwgeyBoZWFkZXJzIH0pO1xyXG4gIFxyXG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59O1xyXG5cclxuLy8gREVMRVRFIOyalOyyreydhCDsnITtlZwg7ZWo7IiYIChhY2Nlc3NUb2tlbuydtCDtlYTsmpTtlZwgREVMRVRFIOyalOyyrSlcclxuZXhwb3J0IGNvbnN0IHRva2VuRGVsID0gYXN5bmMgKHVybCwgaGVhZGVycyA9IHt9KSA9PiB7XHJcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSBnZXRBY2Nlc3NUb2tlbigpO1xyXG5cclxuICAvLyBhY2Nlc3NUb2tlbuydtCDsnojsnLzrqbQgQXV0aG9yaXphdGlvbiDtl6TrjZQg7LaU6rCAXHJcbiAgaWYgKGFjY2Vzc1Rva2VuKSB7XHJcbiAgICBoZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7YWNjZXNzVG9rZW59YDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpQ2xpZW50LmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KTtcclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbi8vIFBhdGNoIOyalOyyreydhCDsnITtlZwg7ZWo7IiYIChhY2Nlc3NUb2tlbuydtCDtlYTsmpTtlZwgREVMRVRFIOyalOyyrSlcclxuZXhwb3J0IGNvbnN0IHRva2VuUGF0Y2ggPSBhc3luYyAodXJsLCBkYXRhID0ge30sIGhlYWRlcnMgPSB7fSkgPT4ge1xyXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gZ2V0QWNjZXNzVG9rZW4oKTtcclxuXHJcbiAgLy8gYWNjZXNzVG9rZW7snbQg7J6I7Jy866m0IEF1dGhvcml6YXRpb24g7Zek642UIOy2lOqwgFxyXG4gIGlmIChhY2Nlc3NUb2tlbikge1xyXG4gICAgaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke2FjY2Vzc1Rva2VufWA7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaUNsaWVudC5wYXRjaCh1cmwsIGRhdGEsIHsgaGVhZGVycyB9KTtcclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuIiwiaW1wb3J0IHt0b2tlblBvc3QsIHRva2VuR2V0LCB0b2tlbkRlbCwgdG9rZW5QdXQsIHRva2VuUGF0Y2h9IGZyb20gXCIuL2FwaUNsaWVudFwiO1xyXG5cclxuLy8g66eB7YGsIOy5tOuTnCDstpTqsIBcclxuZXhwb3J0IGNvbnN0IGxpbmtDYXJkUG9zdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdG9rZW5Qb3N0KFwiL2xpbmtDYXJkXCIsIGRhdGEsIHt9KTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJsaW5rQ2FyZFBvc3QgZmFpbGVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyDrp4Htgawg7Lm065OcIEFJIOygleuztCDsg53shLFcclxuZXhwb3J0IGNvbnN0IGxpbmtDYXJkQWlQb3N0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0b2tlblBvc3QoXCIvbGlua0NhcmQvYWlcIiwgZGF0YSwge30pO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImxpbmtDYXJkUG9zdCBmYWlsZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIOunge2BrCDsubTrk5wg7YOc6re4IOy2lOqwgFxyXG5leHBvcnQgY29uc3QgbGlua0NhcmRUYWdQb3N0ID0gYXN5bmMgKGlkLCBkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdG9rZW5Qb3N0KFwiL2xpbmtDYXJkL1wiK2lkK1wiL3RhZ1wiLCBkYXRhLCB7fSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwibGlua0NhcmRUYWdQb3N0IGZhaWxlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8g66eB7YGsIOy5tOuTnCDtg5zqt7gg7IKt7KCcXHJcbmV4cG9ydCBjb25zdCBsaW5rQ2FyZFRhZ0RlbFBvc3QgPSBhc3luYyAoaWQsIHRhZ0lkLCB0YWdUeXBlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdG9rZW5EZWwoXHJcbiAgICAgICAgICAgIFwiL2xpbmtDYXJkL1wiK2lkK1wiL3RhZz9cIitcclxuICAgICAgICAgICAgXCJ0YWdJZD1cIit0YWdJZCtcclxuICAgICAgICAgICAgXCImdGFnVHlwZT1cIit0YWdUeXBlLCB7fSwge30pO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImxpbmtDYXJkVGFnRGVsIGZhaWxlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8g66eB7YGsIOy5tOuTnCDrsKnrrLhcclxuZXhwb3J0IGNvbnN0IGxpbmtDYXJkRW50ZXJQb3N0ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdG9rZW5Qb3N0KFwiL2xpbmtDYXJkL1wiK2lkK1wiL2VudGVyXCIsIHt9LCB7fSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwibGlua0NhcmRFbnRlciBmYWlsZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIOunge2BrCDsubTrk5wg7Zy07KeA7Ya1IOydtOuPmVxyXG5leHBvcnQgY29uc3QgbGlua0NhcmREZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lkJywgaWQpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdG9rZW5Qb3N0KFwiL2xpbmtDYXJkL1wiK2lkK1wiL2RlbGV0ZVwiLCB7fSwge30pO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImxpbmtDYXJkRGVsZXRlIGZhaWxlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8g66eB7YGsIOy5tOuTnCDtg4DsnbTti4AsIOuplOuqqCwg7JqU7JW9IOyImOyglVxyXG5leHBvcnQgY29uc3QgbGlua0NhcmRJbmZvUGF0Y2ggPSBhc3luYyAoaWQsIGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0b2tlblBhdGNoKFwiL2xpbmtDYXJkL1wiK2lkK1wiL2luZm9cIiwgZGF0YSwge30pO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImxpbmtDYXJkRW50ZXIgZmFpbGVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyDrp4Htgawg7Lm065OcIO2PtOuNlCDrs4Dqsr1cclxuZXhwb3J0IGNvbnN0IGxpbmtDYXJkRm9sZGVyUGF0Y2ggPSBhc3luYyAoaWQsIGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0b2tlblBhdGNoKFwiL2xpbmtDYXJkL1wiK2lkK1wiL2ZvbGRlclwiLCBkYXRhLCB7fSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwibGlua0NhcmRGb2xkZXJQYXRjaCBmYWlsZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIOunge2BrCDsubTrk5wg7KGw7ZqMXHJcbmV4cG9ydCBjb25zdCBsaW5rQ2FyZEdldCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRva2VuR2V0KFwiL2xpbmtDYXJkL1wiK2lkLCB7fSwge30pO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImxpbmtDYXJkRm9sZGVyUGF0Y2ggZmFpbGVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyDrp4Htgawg7Lm065OcIO2PtOuNlCDrpqzsiqTtirgg7KGw7ZqMXHJcbmV4cG9ydCBjb25zdCBsaW5rQ2FyZEZvbGRlckxpc3RHZXQgPSBhc3luYyAoXHJcbiAgICBmb2xkZXJJZCxcclxuICAgIHNvcnRCeSxcclxuICAgIHNvcnRPcmRlcixcclxuICAgIGxhc3RJZCxcclxuICAgIGxpbWl0XHJcbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRva2VuR2V0KFxyXG4gICAgICAgICAgICBcIi9saW5rQ2FyZC9saXN0L1wiK2ZvbGRlcklkK1xyXG4gICAgICAgICAgICBcIj9zb3J0Qnk9XCIrc29ydEJ5K1xyXG4gICAgICAgICAgICBcIiZzb3J0T3JkZXI9XCIrc29ydE9yZGVyK1xyXG4gICAgICAgICAgICBcIiZsYXN0SWQ9XCIrbGFzdElkK1xyXG4gICAgICAgICAgICBcIiZsaW1pdD1cIitsaW1pdCxcclxuICAgICAgICB7fSwge30pO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImxpbmtDYXJkTGlzdEdldCBmYWlsZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIOunge2BrCDsubTrk5wg7KCE7LK0IOumrOyKpO2KuCDsobDtmoxcclxuZXhwb3J0IGNvbnN0IGxpbmtDYXJkQWxsTGlzdEdldCA9IGFzeW5jIChcclxuICAgIHNvcnRCeSxcclxuICAgIHNvcnRPcmRlcixcclxuICAgIGxhc3RJZCxcclxuICAgIGxpbWl0XHJcbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRva2VuR2V0KFxyXG4gICAgICAgICAgICBcIi9saW5rQ2FyZC9saXN0XCIrXHJcbiAgICAgICAgICAgIFwiP3NvcnRCeT1cIitzb3J0QnkrXHJcbiAgICAgICAgICAgIFwiJnNvcnRPcmRlcj1cIitzb3J0T3JkZXIrXHJcbiAgICAgICAgICAgIFwiJmxhc3RJZD1cIitsYXN0SWQrXHJcbiAgICAgICAgICAgIFwiJmxpbWl0PVwiK2xpbWl0LCBcclxuICAgICAgICAgICAge30sIHt9KTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJsaW5rQ2FyZExpc3RHZXQgZmFpbGVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IHsgZ2V0LCBwb3N0LCBwdXQsIGRlbCwgdG9rZW5HZXR9IGZyb20gXCIuL2FwaUNsaWVudFwiO1xyXG5cclxuLy8g7ZiE7J6sIOuhnOq3uOyduO2VnCDsgqzsmqnsnpAg7KCV67O0IOyhsO2ajFxyXG5leHBvcnQgY29uc3QgbWVtYmVyR2V0ID0gYXN5bmMgKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1cmwgPSBhd2FpdCB0b2tlbkdldCgnL21lbWJlcicsIHBhcmFtcyk7IC8vIEdFVCDsmpTssq0g67O064K06riwXHJcbiAgICAgIHJldHVybiB1cmw7IC8vIOuhnOq3uOyduCBVUkwg67CY7ZmYXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdHb29nbGUg66Gc6re47J24IFVSTOydhCDqsIDsoLjsmKTripQg642wIOyLpO2MqO2WiOyKteuLiOuLpDonLCBlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yOyAvLyDsl5Drn6wg67Cc7IOdIOyLnCDtmLjstpztlZwg6rOz7Jy866GcIOyXkOufrCDsoITri6xcclxuICAgIH1cclxuICB9OyIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XHJcbmltcG9ydCBodHRwQWRhcHRlciBmcm9tICcuL2h0dHAuanMnO1xyXG5pbXBvcnQgeGhyQWRhcHRlciBmcm9tICcuL3hoci5qcyc7XHJcbmltcG9ydCBmZXRjaEFkYXB0ZXIgZnJvbSAnLi9mZXRjaC5qcyc7XHJcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gXCIuLi9jb3JlL0F4aW9zRXJyb3IuanNcIjtcclxuXHJcbmNvbnN0IGtub3duQWRhcHRlcnMgPSB7XHJcbiAgaHR0cDogaHR0cEFkYXB0ZXIsXHJcbiAgeGhyOiB4aHJBZGFwdGVyLFxyXG4gIGZldGNoOiBmZXRjaEFkYXB0ZXJcclxufVxyXG5cclxudXRpbHMuZm9yRWFjaChrbm93bkFkYXB0ZXJzLCAoZm4sIHZhbHVlKSA9PiB7XHJcbiAgaWYgKGZuKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sICduYW1lJywge3ZhbHVlfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCAnYWRhcHRlck5hbWUnLCB7dmFsdWV9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgcmVuZGVyUmVhc29uID0gKHJlYXNvbikgPT4gYC0gJHtyZWFzb259YDtcclxuXHJcbmNvbnN0IGlzUmVzb2x2ZWRIYW5kbGUgPSAoYWRhcHRlcikgPT4gdXRpbHMuaXNGdW5jdGlvbihhZGFwdGVyKSB8fCBhZGFwdGVyID09PSBudWxsIHx8IGFkYXB0ZXIgPT09IGZhbHNlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldEFkYXB0ZXI6IChhZGFwdGVycykgPT4ge1xyXG4gICAgYWRhcHRlcnMgPSB1dGlscy5pc0FycmF5KGFkYXB0ZXJzKSA/IGFkYXB0ZXJzIDogW2FkYXB0ZXJzXTtcclxuXHJcbiAgICBjb25zdCB7bGVuZ3RofSA9IGFkYXB0ZXJzO1xyXG4gICAgbGV0IG5hbWVPckFkYXB0ZXI7XHJcbiAgICBsZXQgYWRhcHRlcjtcclxuXHJcbiAgICBjb25zdCByZWplY3RlZFJlYXNvbnMgPSB7fTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG5hbWVPckFkYXB0ZXIgPSBhZGFwdGVyc1tpXTtcclxuICAgICAgbGV0IGlkO1xyXG5cclxuICAgICAgYWRhcHRlciA9IG5hbWVPckFkYXB0ZXI7XHJcblxyXG4gICAgICBpZiAoIWlzUmVzb2x2ZWRIYW5kbGUobmFtZU9yQWRhcHRlcikpIHtcclxuICAgICAgICBhZGFwdGVyID0ga25vd25BZGFwdGVyc1soaWQgPSBTdHJpbmcobmFtZU9yQWRhcHRlcikpLnRvTG93ZXJDYXNlKCldO1xyXG5cclxuICAgICAgICBpZiAoYWRhcHRlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihgVW5rbm93biBhZGFwdGVyICcke2lkfSdgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChhZGFwdGVyKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlamVjdGVkUmVhc29uc1tpZCB8fCAnIycgKyBpXSA9IGFkYXB0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFhZGFwdGVyKSB7XHJcblxyXG4gICAgICBjb25zdCByZWFzb25zID0gT2JqZWN0LmVudHJpZXMocmVqZWN0ZWRSZWFzb25zKVxyXG4gICAgICAgIC5tYXAoKFtpZCwgc3RhdGVdKSA9PiBgYWRhcHRlciAke2lkfSBgICtcclxuICAgICAgICAgIChzdGF0ZSA9PT0gZmFsc2UgPyAnaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgZW52aXJvbm1lbnQnIDogJ2lzIG5vdCBhdmFpbGFibGUgaW4gdGhlIGJ1aWxkJylcclxuICAgICAgICApO1xyXG5cclxuICAgICAgbGV0IHMgPSBsZW5ndGggP1xyXG4gICAgICAgIChyZWFzb25zLmxlbmd0aCA+IDEgPyAnc2luY2UgOlxcbicgKyByZWFzb25zLm1hcChyZW5kZXJSZWFzb24pLmpvaW4oJ1xcbicpIDogJyAnICsgcmVuZGVyUmVhc29uKHJlYXNvbnNbMF0pKSA6XHJcbiAgICAgICAgJ2FzIG5vIGFkYXB0ZXIgc3BlY2lmaWVkJztcclxuXHJcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxyXG4gICAgICAgIGBUaGVyZSBpcyBubyBzdWl0YWJsZSBhZGFwdGVyIHRvIGRpc3BhdGNoIHRoZSByZXF1ZXN0IGAgKyBzLFxyXG4gICAgICAgICdFUlJfTk9UX1NVUFBPUlQnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFkYXB0ZXI7XHJcbiAgfSxcclxuICBhZGFwdGVyczoga25vd25BZGFwdGVyc1xyXG59XHJcbiIsImltcG9ydCBwbGF0Zm9ybSBmcm9tIFwiLi4vcGxhdGZvcm0vaW5kZXguanNcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi91dGlscy5qc1wiO1xyXG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tIFwiLi4vY29yZS9BeGlvc0Vycm9yLmpzXCI7XHJcbmltcG9ydCBjb21wb3NlU2lnbmFscyBmcm9tIFwiLi4vaGVscGVycy9jb21wb3NlU2lnbmFscy5qc1wiO1xyXG5pbXBvcnQge3RyYWNrU3RyZWFtfSBmcm9tIFwiLi4vaGVscGVycy90cmFja1N0cmVhbS5qc1wiO1xyXG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gXCIuLi9jb3JlL0F4aW9zSGVhZGVycy5qc1wiO1xyXG5pbXBvcnQge3Byb2dyZXNzRXZlbnRSZWR1Y2VyLCBwcm9ncmVzc0V2ZW50RGVjb3JhdG9yLCBhc3luY0RlY29yYXRvcn0gZnJvbSBcIi4uL2hlbHBlcnMvcHJvZ3Jlc3NFdmVudFJlZHVjZXIuanNcIjtcclxuaW1wb3J0IHJlc29sdmVDb25maWcgZnJvbSBcIi4uL2hlbHBlcnMvcmVzb2x2ZUNvbmZpZy5qc1wiO1xyXG5pbXBvcnQgc2V0dGxlIGZyb20gXCIuLi9jb3JlL3NldHRsZS5qc1wiO1xyXG5cclxuY29uc3QgaXNGZXRjaFN1cHBvcnRlZCA9IHR5cGVvZiBmZXRjaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgUmVxdWVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgUmVzcG9uc2UgPT09ICdmdW5jdGlvbic7XHJcbmNvbnN0IGlzUmVhZGFibGVTdHJlYW1TdXBwb3J0ZWQgPSBpc0ZldGNoU3VwcG9ydGVkICYmIHR5cGVvZiBSZWFkYWJsZVN0cmVhbSA9PT0gJ2Z1bmN0aW9uJztcclxuXHJcbi8vIHVzZWQgb25seSBpbnNpZGUgdGhlIGZldGNoIGFkYXB0ZXJcclxuY29uc3QgZW5jb2RlVGV4dCA9IGlzRmV0Y2hTdXBwb3J0ZWQgJiYgKHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gJ2Z1bmN0aW9uJyA/XHJcbiAgICAoKGVuY29kZXIpID0+IChzdHIpID0+IGVuY29kZXIuZW5jb2RlKHN0cikpKG5ldyBUZXh0RW5jb2RlcigpKSA6XHJcbiAgICBhc3luYyAoc3RyKSA9PiBuZXcgVWludDhBcnJheShhd2FpdCBuZXcgUmVzcG9uc2Uoc3RyKS5hcnJheUJ1ZmZlcigpKVxyXG4pO1xyXG5cclxuY29uc3QgdGVzdCA9IChmbiwgLi4uYXJncykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gISFmbiguLi5hcmdzKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN1cHBvcnRzUmVxdWVzdFN0cmVhbSA9IGlzUmVhZGFibGVTdHJlYW1TdXBwb3J0ZWQgJiYgdGVzdCgoKSA9PiB7XHJcbiAgbGV0IGR1cGxleEFjY2Vzc2VkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0IGhhc0NvbnRlbnRUeXBlID0gbmV3IFJlcXVlc3QocGxhdGZvcm0ub3JpZ2luLCB7XHJcbiAgICBib2R5OiBuZXcgUmVhZGFibGVTdHJlYW0oKSxcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgZ2V0IGR1cGxleCgpIHtcclxuICAgICAgZHVwbGV4QWNjZXNzZWQgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gJ2hhbGYnO1xyXG4gICAgfSxcclxuICB9KS5oZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJyk7XHJcblxyXG4gIHJldHVybiBkdXBsZXhBY2Nlc3NlZCAmJiAhaGFzQ29udGVudFR5cGU7XHJcbn0pO1xyXG5cclxuY29uc3QgREVGQVVMVF9DSFVOS19TSVpFID0gNjQgKiAxMDI0O1xyXG5cclxuY29uc3Qgc3VwcG9ydHNSZXNwb25zZVN0cmVhbSA9IGlzUmVhZGFibGVTdHJlYW1TdXBwb3J0ZWQgJiZcclxuICB0ZXN0KCgpID0+IHV0aWxzLmlzUmVhZGFibGVTdHJlYW0obmV3IFJlc3BvbnNlKCcnKS5ib2R5KSk7XHJcblxyXG5cclxuY29uc3QgcmVzb2x2ZXJzID0ge1xyXG4gIHN0cmVhbTogc3VwcG9ydHNSZXNwb25zZVN0cmVhbSAmJiAoKHJlcykgPT4gcmVzLmJvZHkpXHJcbn07XHJcblxyXG5pc0ZldGNoU3VwcG9ydGVkICYmICgoKHJlcykgPT4ge1xyXG4gIFsndGV4dCcsICdhcnJheUJ1ZmZlcicsICdibG9iJywgJ2Zvcm1EYXRhJywgJ3N0cmVhbSddLmZvckVhY2godHlwZSA9PiB7XHJcbiAgICAhcmVzb2x2ZXJzW3R5cGVdICYmIChyZXNvbHZlcnNbdHlwZV0gPSB1dGlscy5pc0Z1bmN0aW9uKHJlc1t0eXBlXSkgPyAocmVzKSA9PiByZXNbdHlwZV0oKSA6XHJcbiAgICAgIChfLCBjb25maWcpID0+IHtcclxuICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihgUmVzcG9uc2UgdHlwZSAnJHt0eXBlfScgaXMgbm90IHN1cHBvcnRlZGAsIEF4aW9zRXJyb3IuRVJSX05PVF9TVVBQT1JULCBjb25maWcpO1xyXG4gICAgICB9KVxyXG4gIH0pO1xyXG59KShuZXcgUmVzcG9uc2UpKTtcclxuXHJcbmNvbnN0IGdldEJvZHlMZW5ndGggPSBhc3luYyAoYm9keSkgPT4ge1xyXG4gIGlmIChib2R5ID09IG51bGwpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgaWYodXRpbHMuaXNCbG9iKGJvZHkpKSB7XHJcbiAgICByZXR1cm4gYm9keS5zaXplO1xyXG4gIH1cclxuXHJcbiAgaWYodXRpbHMuaXNTcGVjQ29tcGxpYW50Rm9ybShib2R5KSkge1xyXG4gICAgY29uc3QgX3JlcXVlc3QgPSBuZXcgUmVxdWVzdChwbGF0Zm9ybS5vcmlnaW4sIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHksXHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoYXdhaXQgX3JlcXVlc3QuYXJyYXlCdWZmZXIoKSkuYnl0ZUxlbmd0aDtcclxuICB9XHJcblxyXG4gIGlmKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpIHx8IHV0aWxzLmlzQXJyYXlCdWZmZXIoYm9keSkpIHtcclxuICAgIHJldHVybiBib2R5LmJ5dGVMZW5ndGg7XHJcbiAgfVxyXG5cclxuICBpZih1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhib2R5KSkge1xyXG4gICAgYm9keSA9IGJvZHkgKyAnJztcclxuICB9XHJcblxyXG4gIGlmKHV0aWxzLmlzU3RyaW5nKGJvZHkpKSB7XHJcbiAgICByZXR1cm4gKGF3YWl0IGVuY29kZVRleHQoYm9keSkpLmJ5dGVMZW5ndGg7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZXNvbHZlQm9keUxlbmd0aCA9IGFzeW5jIChoZWFkZXJzLCBib2R5KSA9PiB7XHJcbiAgY29uc3QgbGVuZ3RoID0gdXRpbHMudG9GaW5pdGVOdW1iZXIoaGVhZGVycy5nZXRDb250ZW50TGVuZ3RoKCkpO1xyXG5cclxuICByZXR1cm4gbGVuZ3RoID09IG51bGwgPyBnZXRCb2R5TGVuZ3RoKGJvZHkpIDogbGVuZ3RoO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpc0ZldGNoU3VwcG9ydGVkICYmIChhc3luYyAoY29uZmlnKSA9PiB7XHJcbiAgbGV0IHtcclxuICAgIHVybCxcclxuICAgIG1ldGhvZCxcclxuICAgIGRhdGEsXHJcbiAgICBzaWduYWwsXHJcbiAgICBjYW5jZWxUb2tlbixcclxuICAgIHRpbWVvdXQsXHJcbiAgICBvbkRvd25sb2FkUHJvZ3Jlc3MsXHJcbiAgICBvblVwbG9hZFByb2dyZXNzLFxyXG4gICAgcmVzcG9uc2VUeXBlLFxyXG4gICAgaGVhZGVycyxcclxuICAgIHdpdGhDcmVkZW50aWFscyA9ICdzYW1lLW9yaWdpbicsXHJcbiAgICBmZXRjaE9wdGlvbnNcclxuICB9ID0gcmVzb2x2ZUNvbmZpZyhjb25maWcpO1xyXG5cclxuICByZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGUgPyAocmVzcG9uc2VUeXBlICsgJycpLnRvTG93ZXJDYXNlKCkgOiAndGV4dCc7XHJcblxyXG4gIGxldCBjb21wb3NlZFNpZ25hbCA9IGNvbXBvc2VTaWduYWxzKFtzaWduYWwsIGNhbmNlbFRva2VuICYmIGNhbmNlbFRva2VuLnRvQWJvcnRTaWduYWwoKV0sIHRpbWVvdXQpO1xyXG5cclxuICBsZXQgcmVxdWVzdDtcclxuXHJcbiAgY29uc3QgdW5zdWJzY3JpYmUgPSBjb21wb3NlZFNpZ25hbCAmJiBjb21wb3NlZFNpZ25hbC51bnN1YnNjcmliZSAmJiAoKCkgPT4ge1xyXG4gICAgICBjb21wb3NlZFNpZ25hbC51bnN1YnNjcmliZSgpO1xyXG4gIH0pO1xyXG5cclxuICBsZXQgcmVxdWVzdENvbnRlbnRMZW5ndGg7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG9uVXBsb2FkUHJvZ3Jlc3MgJiYgc3VwcG9ydHNSZXF1ZXN0U3RyZWFtICYmIG1ldGhvZCAhPT0gJ2dldCcgJiYgbWV0aG9kICE9PSAnaGVhZCcgJiZcclxuICAgICAgKHJlcXVlc3RDb250ZW50TGVuZ3RoID0gYXdhaXQgcmVzb2x2ZUJvZHlMZW5ndGgoaGVhZGVycywgZGF0YSkpICE9PSAwXHJcbiAgICApIHtcclxuICAgICAgbGV0IF9yZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogZGF0YSxcclxuICAgICAgICBkdXBsZXg6IFwiaGFsZlwiXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IGNvbnRlbnRUeXBlSGVhZGVyO1xyXG5cclxuICAgICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgJiYgKGNvbnRlbnRUeXBlSGVhZGVyID0gX3JlcXVlc3QuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSkge1xyXG4gICAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoY29udGVudFR5cGVIZWFkZXIpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChfcmVxdWVzdC5ib2R5KSB7XHJcbiAgICAgICAgY29uc3QgW29uUHJvZ3Jlc3MsIGZsdXNoXSA9IHByb2dyZXNzRXZlbnREZWNvcmF0b3IoXHJcbiAgICAgICAgICByZXF1ZXN0Q29udGVudExlbmd0aCxcclxuICAgICAgICAgIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGFzeW5jRGVjb3JhdG9yKG9uVXBsb2FkUHJvZ3Jlc3MpKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGRhdGEgPSB0cmFja1N0cmVhbShfcmVxdWVzdC5ib2R5LCBERUZBVUxUX0NIVU5LX1NJWkUsIG9uUHJvZ3Jlc3MsIGZsdXNoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXRpbHMuaXNTdHJpbmcod2l0aENyZWRlbnRpYWxzKSkge1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHMgPyAnaW5jbHVkZScgOiAnb21pdCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xvdWRmbGFyZSBXb3JrZXJzIHRocm93cyB3aGVuIGNyZWRlbnRpYWxzIGFyZSBkZWZpbmVkXHJcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2Nsb3VkZmxhcmUvd29ya2VyZC9pc3N1ZXMvOTAyXHJcbiAgICBjb25zdCBpc0NyZWRlbnRpYWxzU3VwcG9ydGVkID0gXCJjcmVkZW50aWFsc1wiIGluIFJlcXVlc3QucHJvdG90eXBlO1xyXG4gICAgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCwge1xyXG4gICAgICAuLi5mZXRjaE9wdGlvbnMsXHJcbiAgICAgIHNpZ25hbDogY29tcG9zZWRTaWduYWwsXHJcbiAgICAgIG1ldGhvZDogbWV0aG9kLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnMubm9ybWFsaXplKCkudG9KU09OKCksXHJcbiAgICAgIGJvZHk6IGRhdGEsXHJcbiAgICAgIGR1cGxleDogXCJoYWxmXCIsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiBpc0NyZWRlbnRpYWxzU3VwcG9ydGVkID8gd2l0aENyZWRlbnRpYWxzIDogdW5kZWZpbmVkXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcclxuXHJcbiAgICBjb25zdCBpc1N0cmVhbVJlc3BvbnNlID0gc3VwcG9ydHNSZXNwb25zZVN0cmVhbSAmJiAocmVzcG9uc2VUeXBlID09PSAnc3RyZWFtJyB8fCByZXNwb25zZVR5cGUgPT09ICdyZXNwb25zZScpO1xyXG5cclxuICAgIGlmIChzdXBwb3J0c1Jlc3BvbnNlU3RyZWFtICYmIChvbkRvd25sb2FkUHJvZ3Jlc3MgfHwgKGlzU3RyZWFtUmVzcG9uc2UgJiYgdW5zdWJzY3JpYmUpKSkge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0ge307XHJcblxyXG4gICAgICBbJ3N0YXR1cycsICdzdGF0dXNUZXh0JywgJ2hlYWRlcnMnXS5mb3JFYWNoKHByb3AgPT4ge1xyXG4gICAgICAgIG9wdGlvbnNbcHJvcF0gPSByZXNwb25zZVtwcm9wXTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZUNvbnRlbnRMZW5ndGggPSB1dGlscy50b0Zpbml0ZU51bWJlcihyZXNwb25zZS5oZWFkZXJzLmdldCgnY29udGVudC1sZW5ndGgnKSk7XHJcblxyXG4gICAgICBjb25zdCBbb25Qcm9ncmVzcywgZmx1c2hdID0gb25Eb3dubG9hZFByb2dyZXNzICYmIHByb2dyZXNzRXZlbnREZWNvcmF0b3IoXHJcbiAgICAgICAgcmVzcG9uc2VDb250ZW50TGVuZ3RoLFxyXG4gICAgICAgIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGFzeW5jRGVjb3JhdG9yKG9uRG93bmxvYWRQcm9ncmVzcyksIHRydWUpXHJcbiAgICAgICkgfHwgW107XHJcblxyXG4gICAgICByZXNwb25zZSA9IG5ldyBSZXNwb25zZShcclxuICAgICAgICB0cmFja1N0cmVhbShyZXNwb25zZS5ib2R5LCBERUZBVUxUX0NIVU5LX1NJWkUsIG9uUHJvZ3Jlc3MsICgpID0+IHtcclxuICAgICAgICAgIGZsdXNoICYmIGZsdXNoKCk7XHJcbiAgICAgICAgICB1bnN1YnNjcmliZSAmJiB1bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG9wdGlvbnNcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGUgfHwgJ3RleHQnO1xyXG5cclxuICAgIGxldCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNvbHZlcnNbdXRpbHMuZmluZEtleShyZXNvbHZlcnMsIHJlc3BvbnNlVHlwZSkgfHwgJ3RleHQnXShyZXNwb25zZSwgY29uZmlnKTtcclxuXHJcbiAgICAhaXNTdHJlYW1SZXNwb25zZSAmJiB1bnN1YnNjcmliZSAmJiB1bnN1YnNjcmliZSgpO1xyXG5cclxuICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHtcclxuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXHJcbiAgICAgICAgaGVhZGVyczogQXhpb3NIZWFkZXJzLmZyb20ocmVzcG9uc2UuaGVhZGVycyksXHJcbiAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXHJcbiAgICAgICAgc3RhdHVzVGV4dDogcmVzcG9uc2Uuc3RhdHVzVGV4dCxcclxuICAgICAgICBjb25maWcsXHJcbiAgICAgICAgcmVxdWVzdFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHVuc3Vic2NyaWJlICYmIHVuc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgaWYgKGVyciAmJiBlcnIubmFtZSA9PT0gJ1R5cGVFcnJvcicgJiYgL2ZldGNoL2kudGVzdChlcnIubWVzc2FnZSkpIHtcclxuICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbihcclxuICAgICAgICBuZXcgQXhpb3NFcnJvcignTmV0d29yayBFcnJvcicsIEF4aW9zRXJyb3IuRVJSX05FVFdPUkssIGNvbmZpZywgcmVxdWVzdCksXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2F1c2U6IGVyci5jYXVzZSB8fCBlcnJcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBBeGlvc0Vycm9yLmZyb20oZXJyLCBlcnIgJiYgZXJyLmNvZGUsIGNvbmZpZywgcmVxdWVzdCk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XHJcbmltcG9ydCBzZXR0bGUgZnJvbSAnLi8uLi9jb3JlL3NldHRsZS5qcyc7XHJcbmltcG9ydCB0cmFuc2l0aW9uYWxEZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy90cmFuc2l0aW9uYWwuanMnO1xyXG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xyXG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XHJcbmltcG9ydCBwYXJzZVByb3RvY29sIGZyb20gJy4uL2hlbHBlcnMvcGFyc2VQcm90b2NvbC5qcyc7XHJcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XHJcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xyXG5pbXBvcnQge3Byb2dyZXNzRXZlbnRSZWR1Y2VyfSBmcm9tICcuLi9oZWxwZXJzL3Byb2dyZXNzRXZlbnRSZWR1Y2VyLmpzJztcclxuaW1wb3J0IHJlc29sdmVDb25maWcgZnJvbSBcIi4uL2hlbHBlcnMvcmVzb2x2ZUNvbmZpZy5qc1wiO1xyXG5cclxuY29uc3QgaXNYSFJBZGFwdGVyU3VwcG9ydGVkID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzWEhSQWRhcHRlclN1cHBvcnRlZCAmJiBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgIGNvbnN0IF9jb25maWcgPSByZXNvbHZlQ29uZmlnKGNvbmZpZyk7XHJcbiAgICBsZXQgcmVxdWVzdERhdGEgPSBfY29uZmlnLmRhdGE7XHJcbiAgICBjb25zdCByZXF1ZXN0SGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKF9jb25maWcuaGVhZGVycykubm9ybWFsaXplKCk7XHJcbiAgICBsZXQge3Jlc3BvbnNlVHlwZSwgb25VcGxvYWRQcm9ncmVzcywgb25Eb3dubG9hZFByb2dyZXNzfSA9IF9jb25maWc7XHJcbiAgICBsZXQgb25DYW5jZWxlZDtcclxuICAgIGxldCB1cGxvYWRUaHJvdHRsZWQsIGRvd25sb2FkVGhyb3R0bGVkO1xyXG4gICAgbGV0IGZsdXNoVXBsb2FkLCBmbHVzaERvd25sb2FkO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XHJcbiAgICAgIGZsdXNoVXBsb2FkICYmIGZsdXNoVXBsb2FkKCk7IC8vIGZsdXNoIGV2ZW50c1xyXG4gICAgICBmbHVzaERvd25sb2FkICYmIGZsdXNoRG93bmxvYWQoKTsgLy8gZmx1c2ggZXZlbnRzXHJcblxyXG4gICAgICBfY29uZmlnLmNhbmNlbFRva2VuICYmIF9jb25maWcuY2FuY2VsVG9rZW4udW5zdWJzY3JpYmUob25DYW5jZWxlZCk7XHJcblxyXG4gICAgICBfY29uZmlnLnNpZ25hbCAmJiBfY29uZmlnLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgcmVxdWVzdC5vcGVuKF9jb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIF9jb25maWcudXJsLCB0cnVlKTtcclxuXHJcbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xyXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gX2NvbmZpZy50aW1lb3V0O1xyXG5cclxuICAgIGZ1bmN0aW9uIG9ubG9hZGVuZCgpIHtcclxuICAgICAgaWYgKCFyZXF1ZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlSGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKFxyXG4gICAgICAgICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgJiYgcmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSAhcmVzcG9uc2VUeXBlIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nID9cclxuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xyXG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcclxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxyXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcclxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXHJcbiAgICAgICAgY29uZmlnLFxyXG4gICAgICAgIHJlcXVlc3RcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNldHRsZShmdW5jdGlvbiBfcmVzb2x2ZSh2YWx1ZSkge1xyXG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgIGRvbmUoKTtcclxuICAgICAgfSwgZnVuY3Rpb24gX3JlamVjdChlcnIpIHtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICBkb25lKCk7XHJcbiAgICAgIH0sIHJlc3BvbnNlKTtcclxuXHJcbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcclxuICAgICAgcmVxdWVzdCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdvbmxvYWRlbmQnIGluIHJlcXVlc3QpIHtcclxuICAgICAgLy8gVXNlIG9ubG9hZGVuZCBpZiBhdmFpbGFibGVcclxuICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBvbmxvYWRlbmQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlIHRvIGVtdWxhdGUgb25sb2FkZW5kXHJcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcclxuICAgICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcclxuICAgICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxyXG4gICAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXHJcbiAgICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxyXG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZWFkeXN0YXRlIGhhbmRsZXIgaXMgY2FsbGluZyBiZWZvcmUgb25lcnJvciBvciBvbnRpbWVvdXQgaGFuZGxlcnMsXHJcbiAgICAgICAgLy8gc28gd2Ugc2hvdWxkIGNhbGwgb25sb2FkZW5kIG9uIHRoZSBuZXh0ICd0aWNrJ1xyXG4gICAgICAgIHNldFRpbWVvdXQob25sb2FkZW5kKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXHJcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcclxuICAgICAgaWYgKCFyZXF1ZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELCBjb25maWcsIHJlcXVlc3QpKTtcclxuXHJcbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcclxuICAgICAgcmVxdWVzdCA9IG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcclxuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xyXG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXHJcbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcignTmV0d29yayBFcnJvcicsIEF4aW9zRXJyb3IuRVJSX05FVFdPUkssIGNvbmZpZywgcmVxdWVzdCkpO1xyXG5cclxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxyXG4gICAgICByZXF1ZXN0ID0gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcclxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcclxuICAgICAgbGV0IHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBfY29uZmlnLnRpbWVvdXQgPyAndGltZW91dCBvZiAnICsgX2NvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJyA6ICd0aW1lb3V0IGV4Y2VlZGVkJztcclxuICAgICAgY29uc3QgdHJhbnNpdGlvbmFsID0gX2NvbmZpZy50cmFuc2l0aW9uYWwgfHwgdHJhbnNpdGlvbmFsRGVmYXVsdHM7XHJcbiAgICAgIGlmIChfY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gX2NvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xyXG4gICAgICB9XHJcbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcihcclxuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIHRyYW5zaXRpb25hbC5jbGFyaWZ5VGltZW91dEVycm9yID8gQXhpb3NFcnJvci5FVElNRURPVVQgOiBBeGlvc0Vycm9yLkVDT05OQUJPUlRFRCxcclxuICAgICAgICBjb25maWcsXHJcbiAgICAgICAgcmVxdWVzdCkpO1xyXG5cclxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxyXG4gICAgICByZXF1ZXN0ID0gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxyXG4gICAgcmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCAmJiByZXF1ZXN0SGVhZGVycy5zZXRDb250ZW50VHlwZShudWxsKTtcclxuXHJcbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxyXG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XHJcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMudG9KU09OKCksIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcclxuICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXHJcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKF9jb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xyXG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhX2NvbmZpZy53aXRoQ3JlZGVudGlhbHM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxyXG4gICAgaWYgKHJlc3BvbnNlVHlwZSAmJiByZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xyXG4gICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IF9jb25maWcucmVzcG9uc2VUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcclxuICAgIGlmIChvbkRvd25sb2FkUHJvZ3Jlc3MpIHtcclxuICAgICAgKFtkb3dubG9hZFRocm90dGxlZCwgZmx1c2hEb3dubG9hZF0gPSBwcm9ncmVzc0V2ZW50UmVkdWNlcihvbkRvd25sb2FkUHJvZ3Jlc3MsIHRydWUpKTtcclxuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGRvd25sb2FkVGhyb3R0bGVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xyXG4gICAgaWYgKG9uVXBsb2FkUHJvZ3Jlc3MgJiYgcmVxdWVzdC51cGxvYWQpIHtcclxuICAgICAgKFt1cGxvYWRUaHJvdHRsZWQsIGZsdXNoVXBsb2FkXSA9IHByb2dyZXNzRXZlbnRSZWR1Y2VyKG9uVXBsb2FkUHJvZ3Jlc3MpKTtcclxuXHJcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgdXBsb2FkVGhyb3R0bGVkKTtcclxuXHJcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCBmbHVzaFVwbG9hZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKF9jb25maWcuY2FuY2VsVG9rZW4gfHwgX2NvbmZpZy5zaWduYWwpIHtcclxuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xyXG4gICAgICBvbkNhbmNlbGVkID0gY2FuY2VsID0+IHtcclxuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVqZWN0KCFjYW5jZWwgfHwgY2FuY2VsLnR5cGUgPyBuZXcgQ2FuY2VsZWRFcnJvcihudWxsLCBjb25maWcsIHJlcXVlc3QpIDogY2FuY2VsKTtcclxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XHJcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBfY29uZmlnLmNhbmNlbFRva2VuICYmIF9jb25maWcuY2FuY2VsVG9rZW4uc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xyXG4gICAgICBpZiAoX2NvbmZpZy5zaWduYWwpIHtcclxuICAgICAgICBfY29uZmlnLnNpZ25hbC5hYm9ydGVkID8gb25DYW5jZWxlZCgpIDogX2NvbmZpZy5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbkNhbmNlbGVkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb3RvY29sID0gcGFyc2VQcm90b2NvbChfY29uZmlnLnVybCk7XHJcblxyXG4gICAgaWYgKHByb3RvY29sICYmIHBsYXRmb3JtLnByb3RvY29scy5pbmRleE9mKHByb3RvY29sKSA9PT0gLTEpIHtcclxuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdVbnN1cHBvcnRlZCBwcm90b2NvbCAnICsgcHJvdG9jb2wgKyAnOicsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBjb25maWcpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XHJcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEgfHwgbnVsbCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xyXG5pbXBvcnQgYmluZCBmcm9tICcuL2hlbHBlcnMvYmluZC5qcyc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICcuL2NvcmUvQXhpb3MuanMnO1xyXG5pbXBvcnQgbWVyZ2VDb25maWcgZnJvbSAnLi9jb3JlL21lcmdlQ29uZmlnLmpzJztcclxuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4vZGVmYXVsdHMvaW5kZXguanMnO1xyXG5pbXBvcnQgZm9ybURhdGFUb0pTT04gZnJvbSAnLi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzJztcclxuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XHJcbmltcG9ydCBDYW5jZWxUb2tlbiBmcm9tICcuL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyc7XHJcbmltcG9ydCBpc0NhbmNlbCBmcm9tICcuL2NhbmNlbC9pc0NhbmNlbC5qcyc7XHJcbmltcG9ydCB7VkVSU0lPTn0gZnJvbSAnLi9lbnYvZGF0YS5qcyc7XHJcbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4vaGVscGVycy90b0Zvcm1EYXRhLmpzJztcclxuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xyXG5pbXBvcnQgc3ByZWFkIGZyb20gJy4vaGVscGVycy9zcHJlYWQuanMnO1xyXG5pbXBvcnQgaXNBeGlvc0Vycm9yIGZyb20gJy4vaGVscGVycy9pc0F4aW9zRXJyb3IuanMnO1xyXG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gXCIuL2NvcmUvQXhpb3NIZWFkZXJzLmpzXCI7XHJcbmltcG9ydCBhZGFwdGVycyBmcm9tICcuL2FkYXB0ZXJzL2FkYXB0ZXJzLmpzJztcclxuaW1wb3J0IEh0dHBTdGF0dXNDb2RlIGZyb20gJy4vaGVscGVycy9IdHRwU3RhdHVzQ29kZS5qcyc7XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcclxuICBjb25zdCBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xyXG4gIGNvbnN0IGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XHJcblxyXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXHJcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQsIHthbGxPd25LZXlzOiB0cnVlfSk7XHJcblxyXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxyXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCwgbnVsbCwge2FsbE93bktleXM6IHRydWV9KTtcclxuXHJcbiAgLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xyXG4gIGluc3RhbmNlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGRlZmF1bHRDb25maWcsIGluc3RhbmNlQ29uZmlnKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcclxuY29uc3QgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XHJcblxyXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcclxuYXhpb3MuQXhpb3MgPSBBeGlvcztcclxuXHJcbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxyXG5heGlvcy5DYW5jZWxlZEVycm9yID0gQ2FuY2VsZWRFcnJvcjtcclxuYXhpb3MuQ2FuY2VsVG9rZW4gPSBDYW5jZWxUb2tlbjtcclxuYXhpb3MuaXNDYW5jZWwgPSBpc0NhbmNlbDtcclxuYXhpb3MuVkVSU0lPTiA9IFZFUlNJT047XHJcbmF4aW9zLnRvRm9ybURhdGEgPSB0b0Zvcm1EYXRhO1xyXG5cclxuLy8gRXhwb3NlIEF4aW9zRXJyb3IgY2xhc3NcclxuYXhpb3MuQXhpb3NFcnJvciA9IEF4aW9zRXJyb3I7XHJcblxyXG4vLyBhbGlhcyBmb3IgQ2FuY2VsZWRFcnJvciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG5heGlvcy5DYW5jZWwgPSBheGlvcy5DYW5jZWxlZEVycm9yO1xyXG5cclxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcclxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XHJcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxufTtcclxuXHJcbmF4aW9zLnNwcmVhZCA9IHNwcmVhZDtcclxuXHJcbi8vIEV4cG9zZSBpc0F4aW9zRXJyb3JcclxuYXhpb3MuaXNBeGlvc0Vycm9yID0gaXNBeGlvc0Vycm9yO1xyXG5cclxuLy8gRXhwb3NlIG1lcmdlQ29uZmlnXHJcbmF4aW9zLm1lcmdlQ29uZmlnID0gbWVyZ2VDb25maWc7XHJcblxyXG5heGlvcy5BeGlvc0hlYWRlcnMgPSBBeGlvc0hlYWRlcnM7XHJcblxyXG5heGlvcy5mb3JtVG9KU09OID0gdGhpbmcgPT4gZm9ybURhdGFUb0pTT04odXRpbHMuaXNIVE1MRm9ybSh0aGluZykgPyBuZXcgRm9ybURhdGEodGhpbmcpIDogdGhpbmcpO1xyXG5cclxuYXhpb3MuZ2V0QWRhcHRlciA9IGFkYXB0ZXJzLmdldEFkYXB0ZXI7XHJcblxyXG5heGlvcy5IdHRwU3RhdHVzQ29kZSA9IEh0dHBTdGF0dXNDb2RlO1xyXG5cclxuYXhpb3MuZGVmYXVsdCA9IGF4aW9zO1xyXG5cclxuLy8gdGhpcyBtb2R1bGUgc2hvdWxkIG9ubHkgaGF2ZSBhIGRlZmF1bHQgZXhwb3J0XHJcbmV4cG9ydCBkZWZhdWx0IGF4aW9zXHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4vQ2FuY2VsZWRFcnJvci5qcyc7XHJcblxyXG4vKipcclxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Q2FuY2VsVG9rZW59XHJcbiAqL1xyXG5jbGFzcyBDYW5jZWxUb2tlbiB7XHJcbiAgY29uc3RydWN0b3IoZXhlY3V0b3IpIHtcclxuICAgIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXNvbHZlUHJvbWlzZTtcclxuXHJcbiAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xyXG4gICAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IHRoaXM7XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcclxuICAgIHRoaXMucHJvbWlzZS50aGVuKGNhbmNlbCA9PiB7XHJcbiAgICAgIGlmICghdG9rZW4uX2xpc3RlbmVycykgcmV0dXJuO1xyXG5cclxuICAgICAgbGV0IGkgPSB0b2tlbi5fbGlzdGVuZXJzLmxlbmd0aDtcclxuXHJcbiAgICAgIHdoaWxlIChpLS0gPiAwKSB7XHJcbiAgICAgICAgdG9rZW4uX2xpc3RlbmVyc1tpXShjYW5jZWwpO1xyXG4gICAgICB9XHJcbiAgICAgIHRva2VuLl9saXN0ZW5lcnMgPSBudWxsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcclxuICAgIHRoaXMucHJvbWlzZS50aGVuID0gb25mdWxmaWxsZWQgPT4ge1xyXG4gICAgICBsZXQgX3Jlc29sdmU7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXHJcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICB0b2tlbi5zdWJzY3JpYmUocmVzb2x2ZSk7XHJcbiAgICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICB9KS50aGVuKG9uZnVsZmlsbGVkKTtcclxuXHJcbiAgICAgIHByb21pc2UuY2FuY2VsID0gZnVuY3Rpb24gcmVqZWN0KCkge1xyXG4gICAgICAgIHRva2VuLnVuc3Vic2NyaWJlKF9yZXNvbHZlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KSB7XHJcbiAgICAgIGlmICh0b2tlbi5yZWFzb24pIHtcclxuICAgICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWxlZEVycm9yKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCk7XHJcbiAgICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRocm93cyBhIGBDYW5jZWxlZEVycm9yYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxyXG4gICAqL1xyXG4gIHRocm93SWZSZXF1ZXN0ZWQoKSB7XHJcbiAgICBpZiAodGhpcy5yZWFzb24pIHtcclxuICAgICAgdGhyb3cgdGhpcy5yZWFzb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmUgdG8gdGhlIGNhbmNlbCBzaWduYWxcclxuICAgKi9cclxuXHJcbiAgc3Vic2NyaWJlKGxpc3RlbmVyKSB7XHJcbiAgICBpZiAodGhpcy5yZWFzb24pIHtcclxuICAgICAgbGlzdGVuZXIodGhpcy5yZWFzb24pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVycykge1xyXG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9saXN0ZW5lcnMgPSBbbGlzdGVuZXJdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVW5zdWJzY3JpYmUgZnJvbSB0aGUgY2FuY2VsIHNpZ25hbFxyXG4gICAqL1xyXG5cclxuICB1bnN1YnNjcmliZShsaXN0ZW5lcikge1xyXG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9BYm9ydFNpZ25hbCgpIHtcclxuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcblxyXG4gICAgY29uc3QgYWJvcnQgPSAoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnRyb2xsZXIuYWJvcnQoZXJyKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zdWJzY3JpYmUoYWJvcnQpO1xyXG5cclxuICAgIGNvbnRyb2xsZXIuc2lnbmFsLnVuc3Vic2NyaWJlID0gKCkgPT4gdGhpcy51bnN1YnNjcmliZShhYm9ydCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRyb2xsZXIuc2lnbmFsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxyXG4gICAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXHJcbiAgICovXHJcbiAgc3RhdGljIHNvdXJjZSgpIHtcclxuICAgIGxldCBjYW5jZWw7XHJcbiAgICBjb25zdCB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XHJcbiAgICAgIGNhbmNlbCA9IGM7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRva2VuLFxyXG4gICAgICBjYW5jZWxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW5jZWxUb2tlbjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcclxuXHJcbi8qKlxyXG4gKiBBIGBDYW5jZWxlZEVycm9yYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cclxuICogQHBhcmFtIHtPYmplY3Q9fSBjb25maWcgVGhlIGNvbmZpZy5cclxuICogQHBhcmFtIHtPYmplY3Q9fSByZXF1ZXN0IFRoZSByZXF1ZXN0LlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Q2FuY2VsZWRFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXHJcbiAqL1xyXG5mdW5jdGlvbiBDYW5jZWxlZEVycm9yKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCkge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxyXG4gIEF4aW9zRXJyb3IuY2FsbCh0aGlzLCBtZXNzYWdlID09IG51bGwgPyAnY2FuY2VsZWQnIDogbWVzc2FnZSwgQXhpb3NFcnJvci5FUlJfQ0FOQ0VMRUQsIGNvbmZpZywgcmVxdWVzdCk7XHJcbiAgdGhpcy5uYW1lID0gJ0NhbmNlbGVkRXJyb3InO1xyXG59XHJcblxyXG51dGlscy5pbmhlcml0cyhDYW5jZWxlZEVycm9yLCBBeGlvc0Vycm9yLCB7XHJcbiAgX19DQU5DRUxfXzogdHJ1ZVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbmNlbGVkRXJyb3I7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XHJcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcclxuaW1wb3J0IGJ1aWxkVVJMIGZyb20gJy4uL2hlbHBlcnMvYnVpbGRVUkwuanMnO1xyXG5pbXBvcnQgSW50ZXJjZXB0b3JNYW5hZ2VyIGZyb20gJy4vSW50ZXJjZXB0b3JNYW5hZ2VyLmpzJztcclxuaW1wb3J0IGRpc3BhdGNoUmVxdWVzdCBmcm9tICcuL2Rpc3BhdGNoUmVxdWVzdC5qcyc7XHJcbmltcG9ydCBtZXJnZUNvbmZpZyBmcm9tICcuL21lcmdlQ29uZmlnLmpzJztcclxuaW1wb3J0IGJ1aWxkRnVsbFBhdGggZnJvbSAnLi9idWlsZEZ1bGxQYXRoLmpzJztcclxuaW1wb3J0IHZhbGlkYXRvciBmcm9tICcuLi9oZWxwZXJzL3ZhbGlkYXRvci5qcyc7XHJcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi9BeGlvc0hlYWRlcnMuanMnO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IHZhbGlkYXRvci52YWxpZGF0b3JzO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcclxuICpcclxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXHJcbiAqL1xyXG5jbGFzcyBBeGlvcyB7XHJcbiAgY29uc3RydWN0b3IoaW5zdGFuY2VDb25maWcpIHtcclxuICAgIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcclxuICAgIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xyXG4gICAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXHJcbiAgICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNwYXRjaCBhIHJlcXVlc3RcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gY29uZmlnT3JVcmwgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxyXG4gICAqIEBwYXJhbSB7P09iamVjdH0gY29uZmlnXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXHJcbiAgICovXHJcbiAgYXN5bmMgcmVxdWVzdChjb25maWdPclVybCwgY29uZmlnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5fcmVxdWVzdChjb25maWdPclVybCwgY29uZmlnKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICBsZXQgZHVtbXkgPSB7fTtcclxuXHJcbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPyBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShkdW1teSkgOiAoZHVtbXkgPSBuZXcgRXJyb3IoKSk7XHJcblxyXG4gICAgICAgIC8vIHNsaWNlIG9mZiB0aGUgRXJyb3I6IC4uLiBsaW5lXHJcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBkdW1teS5zdGFjayA/IGR1bW15LnN0YWNrLnJlcGxhY2UoL14uK1xcbi8sICcnKSA6ICcnO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAoIWVyci5zdGFjaykge1xyXG4gICAgICAgICAgICBlcnIuc3RhY2sgPSBzdGFjaztcclxuICAgICAgICAgICAgLy8gbWF0Y2ggd2l0aG91dCB0aGUgMiB0b3Agc3RhY2sgbGluZXNcclxuICAgICAgICAgIH0gZWxzZSBpZiAoc3RhY2sgJiYgIVN0cmluZyhlcnIuc3RhY2spLmVuZHNXaXRoKHN0YWNrLnJlcGxhY2UoL14uK1xcbi4rXFxuLywgJycpKSkge1xyXG4gICAgICAgICAgICBlcnIuc3RhY2sgKz0gJ1xcbicgKyBzdGFja1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIC8vIGlnbm9yZSB0aGUgY2FzZSB3aGVyZSBcInN0YWNrXCIgaXMgYW4gdW4td3JpdGFibGUgcHJvcGVydHlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRocm93IGVycjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9yZXF1ZXN0KGNvbmZpZ09yVXJsLCBjb25maWcpIHtcclxuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xyXG4gICAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxyXG4gICAgaWYgKHR5cGVvZiBjb25maWdPclVybCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgICBjb25maWcudXJsID0gY29uZmlnT3JVcmw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25maWcgPSBjb25maWdPclVybCB8fCB7fTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xyXG5cclxuICAgIGNvbnN0IHt0cmFuc2l0aW9uYWwsIHBhcmFtc1NlcmlhbGl6ZXIsIGhlYWRlcnN9ID0gY29uZmlnO1xyXG5cclxuICAgIGlmICh0cmFuc2l0aW9uYWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB2YWxpZGF0b3IuYXNzZXJ0T3B0aW9ucyh0cmFuc2l0aW9uYWwsIHtcclxuICAgICAgICBzaWxlbnRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcclxuICAgICAgICBmb3JjZWRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcclxuICAgICAgICBjbGFyaWZ5VGltZW91dEVycm9yOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pXHJcbiAgICAgIH0sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFyYW1zU2VyaWFsaXplciAhPSBudWxsKSB7XHJcbiAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHBhcmFtc1NlcmlhbGl6ZXIpKSB7XHJcbiAgICAgICAgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIgPSB7XHJcbiAgICAgICAgICBzZXJpYWxpemU6IHBhcmFtc1NlcmlhbGl6ZXJcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnMocGFyYW1zU2VyaWFsaXplciwge1xyXG4gICAgICAgICAgZW5jb2RlOiB2YWxpZGF0b3JzLmZ1bmN0aW9uLFxyXG4gICAgICAgICAgc2VyaWFsaXplOiB2YWxpZGF0b3JzLmZ1bmN0aW9uXHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0b3IuYXNzZXJ0T3B0aW9ucyhjb25maWcsIHtcclxuICAgICAgYmFzZVVybDogdmFsaWRhdG9ycy5zcGVsbGluZygnYmFzZVVSTCcpLFxyXG4gICAgICB3aXRoWHNyZlRva2VuOiB2YWxpZGF0b3JzLnNwZWxsaW5nKCd3aXRoWFNSRlRva2VuJylcclxuICAgIH0sIHRydWUpO1xyXG5cclxuICAgIC8vIFNldCBjb25maWcubWV0aG9kXHJcbiAgICBjb25maWcubWV0aG9kID0gKGNvbmZpZy5tZXRob2QgfHwgdGhpcy5kZWZhdWx0cy5tZXRob2QgfHwgJ2dldCcpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgLy8gRmxhdHRlbiBoZWFkZXJzXHJcbiAgICBsZXQgY29udGV4dEhlYWRlcnMgPSBoZWFkZXJzICYmIHV0aWxzLm1lcmdlKFxyXG4gICAgICBoZWFkZXJzLmNvbW1vbixcclxuICAgICAgaGVhZGVyc1tjb25maWcubWV0aG9kXVxyXG4gICAgKTtcclxuXHJcbiAgICBoZWFkZXJzICYmIHV0aWxzLmZvckVhY2goXHJcbiAgICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxyXG4gICAgICAobWV0aG9kKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlIGhlYWRlcnNbbWV0aG9kXTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25maWcuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5jb25jYXQoY29udGV4dEhlYWRlcnMsIGhlYWRlcnMpO1xyXG5cclxuICAgIC8vIGZpbHRlciBvdXQgc2tpcHBlZCBpbnRlcmNlcHRvcnNcclxuICAgIGNvbnN0IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluID0gW107XHJcbiAgICBsZXQgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gdHJ1ZTtcclxuICAgIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xyXG4gICAgICBpZiAodHlwZW9mIGludGVyY2VwdG9yLnJ1bldoZW4gPT09ICdmdW5jdGlvbicgJiYgaW50ZXJjZXB0b3IucnVuV2hlbihjb25maWcpID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzICYmIGludGVyY2VwdG9yLnN5bmNocm9ub3VzO1xyXG5cclxuICAgICAgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbiA9IFtdO1xyXG4gICAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcclxuICAgICAgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcHJvbWlzZTtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGxldCBsZW47XHJcblxyXG4gICAgaWYgKCFzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMpIHtcclxuICAgICAgY29uc3QgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LmJpbmQodGhpcyksIHVuZGVmaW5lZF07XHJcbiAgICAgIGNoYWluLnVuc2hpZnQuYXBwbHkoY2hhaW4sIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluKTtcclxuICAgICAgY2hhaW4ucHVzaC5hcHBseShjaGFpbiwgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluKTtcclxuICAgICAgbGVuID0gY2hhaW4ubGVuZ3RoO1xyXG5cclxuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xyXG5cclxuICAgICAgd2hpbGUgKGkgPCBsZW4pIHtcclxuICAgICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluW2krK10sIGNoYWluW2krK10pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZW4gPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi5sZW5ndGg7XHJcblxyXG4gICAgbGV0IG5ld0NvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgICBpID0gMDtcclxuXHJcbiAgICB3aGlsZSAoaSA8IGxlbikge1xyXG4gICAgICBjb25zdCBvbkZ1bGZpbGxlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluW2krK107XHJcbiAgICAgIGNvbnN0IG9uUmVqZWN0ZWQgPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbltpKytdO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIG5ld0NvbmZpZyA9IG9uRnVsZmlsbGVkKG5ld0NvbmZpZyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgb25SZWplY3RlZC5jYWxsKHRoaXMsIGVycm9yKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHByb21pc2UgPSBkaXNwYXRjaFJlcXVlc3QuY2FsbCh0aGlzLCBuZXdDb25maWcpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpID0gMDtcclxuICAgIGxlbiA9IHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGkgPCBsZW4pIHtcclxuICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihyZXNwb25zZUludGVyY2VwdG9yQ2hhaW5baSsrXSwgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluW2krK10pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcm9taXNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXJpKGNvbmZpZykge1xyXG4gICAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcclxuICAgIGNvbnN0IGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XHJcbiAgICByZXR1cm4gYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xyXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcclxuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xyXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XHJcbiAgICAgIG1ldGhvZCxcclxuICAgICAgdXJsLFxyXG4gICAgICBkYXRhOiAoY29uZmlnIHx8IHt9KS5kYXRhXHJcbiAgICB9KSk7XHJcbiAgfTtcclxufSk7XHJcblxyXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xyXG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXHJcblxyXG4gIGZ1bmN0aW9uIGdlbmVyYXRlSFRUUE1ldGhvZChpc0Zvcm0pIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBodHRwTWV0aG9kKHVybCwgZGF0YSwgY29uZmlnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XHJcbiAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgIGhlYWRlcnM6IGlzRm9ybSA/IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuICAgICAgICB9IDoge30sXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGRhdGFcclxuICAgICAgfSkpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZ2VuZXJhdGVIVFRQTWV0aG9kKCk7XHJcblxyXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2QgKyAnRm9ybSddID0gZ2VuZXJhdGVIVFRQTWV0aG9kKHRydWUpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF4aW9zO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXSBUaGUgY29uZmlnLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxyXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXHJcbiAqL1xyXG5mdW5jdGlvbiBBeGlvc0Vycm9yKG1lc3NhZ2UsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UpIHtcclxuICBFcnJvci5jYWxsKHRoaXMpO1xyXG5cclxuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcclxuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLnN0YWNrID0gKG5ldyBFcnJvcigpKS5zdGFjaztcclxuICB9XHJcblxyXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgdGhpcy5uYW1lID0gJ0F4aW9zRXJyb3InO1xyXG4gIGNvZGUgJiYgKHRoaXMuY29kZSA9IGNvZGUpO1xyXG4gIGNvbmZpZyAmJiAodGhpcy5jb25maWcgPSBjb25maWcpO1xyXG4gIHJlcXVlc3QgJiYgKHRoaXMucmVxdWVzdCA9IHJlcXVlc3QpO1xyXG4gIGlmIChyZXNwb25zZSkge1xyXG4gICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgdGhpcy5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXMgPyByZXNwb25zZS5zdGF0dXMgOiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxudXRpbHMuaW5oZXJpdHMoQXhpb3NFcnJvciwgRXJyb3IsIHtcclxuICB0b0pTT046IGZ1bmN0aW9uIHRvSlNPTigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8vIFN0YW5kYXJkXHJcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcclxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAvLyBNaWNyb3NvZnRcclxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXHJcbiAgICAgIC8vIE1vemlsbGFcclxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXHJcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcclxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcclxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXHJcbiAgICAgIC8vIEF4aW9zXHJcbiAgICAgIGNvbmZpZzogdXRpbHMudG9KU09OT2JqZWN0KHRoaXMuY29uZmlnKSxcclxuICAgICAgY29kZTogdGhpcy5jb2RlLFxyXG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzXHJcbiAgICB9O1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBwcm90b3R5cGUgPSBBeGlvc0Vycm9yLnByb3RvdHlwZTtcclxuY29uc3QgZGVzY3JpcHRvcnMgPSB7fTtcclxuXHJcbltcclxuICAnRVJSX0JBRF9PUFRJT05fVkFMVUUnLFxyXG4gICdFUlJfQkFEX09QVElPTicsXHJcbiAgJ0VDT05OQUJPUlRFRCcsXHJcbiAgJ0VUSU1FRE9VVCcsXHJcbiAgJ0VSUl9ORVRXT1JLJyxcclxuICAnRVJSX0ZSX1RPT19NQU5ZX1JFRElSRUNUUycsXHJcbiAgJ0VSUl9ERVBSRUNBVEVEJyxcclxuICAnRVJSX0JBRF9SRVNQT05TRScsXHJcbiAgJ0VSUl9CQURfUkVRVUVTVCcsXHJcbiAgJ0VSUl9DQU5DRUxFRCcsXHJcbiAgJ0VSUl9OT1RfU1VQUE9SVCcsXHJcbiAgJ0VSUl9JTlZBTElEX1VSTCdcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcclxuXS5mb3JFYWNoKGNvZGUgPT4ge1xyXG4gIGRlc2NyaXB0b3JzW2NvZGVdID0ge3ZhbHVlOiBjb2RlfTtcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhBeGlvc0Vycm9yLCBkZXNjcmlwdG9ycyk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsICdpc0F4aW9zRXJyb3InLCB7dmFsdWU6IHRydWV9KTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXHJcbkF4aW9zRXJyb3IuZnJvbSA9IChlcnJvciwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSwgY3VzdG9tUHJvcHMpID0+IHtcclxuICBjb25zdCBheGlvc0Vycm9yID0gT2JqZWN0LmNyZWF0ZShwcm90b3R5cGUpO1xyXG5cclxuICB1dGlscy50b0ZsYXRPYmplY3QoZXJyb3IsIGF4aW9zRXJyb3IsIGZ1bmN0aW9uIGZpbHRlcihvYmopIHtcclxuICAgIHJldHVybiBvYmogIT09IEVycm9yLnByb3RvdHlwZTtcclxuICB9LCBwcm9wID0+IHtcclxuICAgIHJldHVybiBwcm9wICE9PSAnaXNBeGlvc0Vycm9yJztcclxuICB9KTtcclxuXHJcbiAgQXhpb3NFcnJvci5jYWxsKGF4aW9zRXJyb3IsIGVycm9yLm1lc3NhZ2UsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UpO1xyXG5cclxuICBheGlvc0Vycm9yLmNhdXNlID0gZXJyb3I7XHJcblxyXG4gIGF4aW9zRXJyb3IubmFtZSA9IGVycm9yLm5hbWU7XHJcblxyXG4gIGN1c3RvbVByb3BzICYmIE9iamVjdC5hc3NpZ24oYXhpb3NFcnJvciwgY3VzdG9tUHJvcHMpO1xyXG5cclxuICByZXR1cm4gYXhpb3NFcnJvcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF4aW9zRXJyb3I7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XHJcbmltcG9ydCBwYXJzZUhlYWRlcnMgZnJvbSAnLi4vaGVscGVycy9wYXJzZUhlYWRlcnMuanMnO1xyXG5cclxuY29uc3QgJGludGVybmFscyA9IFN5bWJvbCgnaW50ZXJuYWxzJyk7XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVIZWFkZXIoaGVhZGVyKSB7XHJcbiAgcmV0dXJuIGhlYWRlciAmJiBTdHJpbmcoaGVhZGVyKS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcclxuICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09IG51bGwpIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB1dGlscy5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLm1hcChub3JtYWxpemVWYWx1ZSkgOiBTdHJpbmcodmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVRva2VucyhzdHIpIHtcclxuICBjb25zdCB0b2tlbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gIGNvbnN0IHRva2Vuc1JFID0gLyhbXlxccyw7PV0rKVxccyooPzo9XFxzKihbXiw7XSspKT8vZztcclxuICBsZXQgbWF0Y2g7XHJcblxyXG4gIHdoaWxlICgobWF0Y2ggPSB0b2tlbnNSRS5leGVjKHN0cikpKSB7XHJcbiAgICB0b2tlbnNbbWF0Y2hbMV1dID0gbWF0Y2hbMl07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdG9rZW5zO1xyXG59XHJcblxyXG5jb25zdCBpc1ZhbGlkSGVhZGVyTmFtZSA9IChzdHIpID0+IC9eWy1fYS16QS1aMC05XmB8fiwhIyQlJicqKy5dKyQvLnRlc3Qoc3RyLnRyaW0oKSk7XHJcblxyXG5mdW5jdGlvbiBtYXRjaEhlYWRlclZhbHVlKGNvbnRleHQsIHZhbHVlLCBoZWFkZXIsIGZpbHRlciwgaXNIZWFkZXJOYW1lRmlsdGVyKSB7XHJcbiAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZmlsdGVyKSkge1xyXG4gICAgcmV0dXJuIGZpbHRlci5jYWxsKHRoaXMsIHZhbHVlLCBoZWFkZXIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzSGVhZGVyTmFtZUZpbHRlcikge1xyXG4gICAgdmFsdWUgPSBoZWFkZXI7XHJcbiAgfVxyXG5cclxuICBpZiAoIXV0aWxzLmlzU3RyaW5nKHZhbHVlKSkgcmV0dXJuO1xyXG5cclxuICBpZiAodXRpbHMuaXNTdHJpbmcoZmlsdGVyKSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLmluZGV4T2YoZmlsdGVyKSAhPT0gLTE7XHJcbiAgfVxyXG5cclxuICBpZiAodXRpbHMuaXNSZWdFeHAoZmlsdGVyKSkge1xyXG4gICAgcmV0dXJuIGZpbHRlci50ZXN0KHZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdEhlYWRlcihoZWFkZXIpIHtcclxuICByZXR1cm4gaGVhZGVyLnRyaW0oKVxyXG4gICAgLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvKFthLXpcXGRdKShcXHcqKS9nLCAodywgY2hhciwgc3RyKSA9PiB7XHJcbiAgICAgIHJldHVybiBjaGFyLnRvVXBwZXJDYXNlKCkgKyBzdHI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRBY2Nlc3NvcnMob2JqLCBoZWFkZXIpIHtcclxuICBjb25zdCBhY2Nlc3Nvck5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZSgnICcgKyBoZWFkZXIpO1xyXG5cclxuICBbJ2dldCcsICdzZXQnLCAnaGFzJ10uZm9yRWFjaChtZXRob2ROYW1lID0+IHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIG1ldGhvZE5hbWUgKyBhY2Nlc3Nvck5hbWUsIHtcclxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKGFyZzEsIGFyZzIsIGFyZzMpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1ttZXRob2ROYW1lXS5jYWxsKHRoaXMsIGhlYWRlciwgYXJnMSwgYXJnMiwgYXJnMyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNsYXNzIEF4aW9zSGVhZGVycyB7XHJcbiAgY29uc3RydWN0b3IoaGVhZGVycykge1xyXG4gICAgaGVhZGVycyAmJiB0aGlzLnNldChoZWFkZXJzKTtcclxuICB9XHJcblxyXG4gIHNldChoZWFkZXIsIHZhbHVlT3JSZXdyaXRlLCByZXdyaXRlKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBmdW5jdGlvbiBzZXRIZWFkZXIoX3ZhbHVlLCBfaGVhZGVyLCBfcmV3cml0ZSkge1xyXG4gICAgICBjb25zdCBsSGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xyXG5cclxuICAgICAgaWYgKCFsSGVhZGVyKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoZWFkZXIgbmFtZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHNlbGYsIGxIZWFkZXIpO1xyXG5cclxuICAgICAgaWYoIWtleSB8fCBzZWxmW2tleV0gPT09IHVuZGVmaW5lZCB8fCBfcmV3cml0ZSA9PT0gdHJ1ZSB8fCAoX3Jld3JpdGUgPT09IHVuZGVmaW5lZCAmJiBzZWxmW2tleV0gIT09IGZhbHNlKSkge1xyXG4gICAgICAgIHNlbGZba2V5IHx8IF9oZWFkZXJdID0gbm9ybWFsaXplVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldEhlYWRlcnMgPSAoaGVhZGVycywgX3Jld3JpdGUpID0+XHJcbiAgICAgIHV0aWxzLmZvckVhY2goaGVhZGVycywgKF92YWx1ZSwgX2hlYWRlcikgPT4gc2V0SGVhZGVyKF92YWx1ZSwgX2hlYWRlciwgX3Jld3JpdGUpKTtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChoZWFkZXIpIHx8IGhlYWRlciBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3IpIHtcclxuICAgICAgc2V0SGVhZGVycyhoZWFkZXIsIHZhbHVlT3JSZXdyaXRlKVxyXG4gICAgfSBlbHNlIGlmKHV0aWxzLmlzU3RyaW5nKGhlYWRlcikgJiYgKGhlYWRlciA9IGhlYWRlci50cmltKCkpICYmICFpc1ZhbGlkSGVhZGVyTmFtZShoZWFkZXIpKSB7XHJcbiAgICAgIHNldEhlYWRlcnMocGFyc2VIZWFkZXJzKGhlYWRlciksIHZhbHVlT3JSZXdyaXRlKTtcclxuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNIZWFkZXJzKGhlYWRlcikpIHtcclxuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgaGVhZGVyLmVudHJpZXMoKSkge1xyXG4gICAgICAgIHNldEhlYWRlcih2YWx1ZSwga2V5LCByZXdyaXRlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyICE9IG51bGwgJiYgc2V0SGVhZGVyKHZhbHVlT3JSZXdyaXRlLCBoZWFkZXIsIHJld3JpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGhlYWRlciwgcGFyc2VyKSB7XHJcbiAgICBoZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoaGVhZGVyKTtcclxuXHJcbiAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkodGhpcywgaGVhZGVyKTtcclxuXHJcbiAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXNba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKCFwYXJzZXIpIHtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZXIgPT09IHRydWUpIHtcclxuICAgICAgICAgIHJldHVybiBwYXJzZVRva2Vucyh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihwYXJzZXIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gcGFyc2VyLmNhbGwodGhpcywgdmFsdWUsIGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNSZWdFeHAocGFyc2VyKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHBhcnNlci5leGVjKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcnNlciBtdXN0IGJlIGJvb2xlYW58cmVnZXhwfGZ1bmN0aW9uJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhcyhoZWFkZXIsIG1hdGNoZXIpIHtcclxuICAgIGhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpO1xyXG5cclxuICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleSh0aGlzLCBoZWFkZXIpO1xyXG5cclxuICAgICAgcmV0dXJuICEhKGtleSAmJiB0aGlzW2tleV0gIT09IHVuZGVmaW5lZCAmJiAoIW1hdGNoZXIgfHwgbWF0Y2hIZWFkZXJWYWx1ZSh0aGlzLCB0aGlzW2tleV0sIGtleSwgbWF0Y2hlcikpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoaGVhZGVyLCBtYXRjaGVyKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIGxldCBkZWxldGVkID0gZmFsc2U7XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlSGVhZGVyKF9oZWFkZXIpIHtcclxuICAgICAgX2hlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcclxuXHJcbiAgICAgIGlmIChfaGVhZGVyKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleShzZWxmLCBfaGVhZGVyKTtcclxuXHJcbiAgICAgICAgaWYgKGtleSAmJiAoIW1hdGNoZXIgfHwgbWF0Y2hIZWFkZXJWYWx1ZShzZWxmLCBzZWxmW2tleV0sIGtleSwgbWF0Y2hlcikpKSB7XHJcbiAgICAgICAgICBkZWxldGUgc2VsZltrZXldO1xyXG5cclxuICAgICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh1dGlscy5pc0FycmF5KGhlYWRlcikpIHtcclxuICAgICAgaGVhZGVyLmZvckVhY2goZGVsZXRlSGVhZGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlbGV0ZUhlYWRlcihoZWFkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZWxldGVkO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIobWF0Y2hlcikge1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xyXG4gICAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcclxuICAgIGxldCBkZWxldGVkID0gZmFsc2U7XHJcblxyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xyXG4gICAgICBpZighbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHRoaXMsIHRoaXNba2V5XSwga2V5LCBtYXRjaGVyLCB0cnVlKSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XHJcbiAgICAgICAgZGVsZXRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGVsZXRlZDtcclxuICB9XHJcblxyXG4gIG5vcm1hbGl6ZShmb3JtYXQpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHt9O1xyXG5cclxuICAgIHV0aWxzLmZvckVhY2godGhpcywgKHZhbHVlLCBoZWFkZXIpID0+IHtcclxuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleShoZWFkZXJzLCBoZWFkZXIpO1xyXG5cclxuICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgIHNlbGZba2V5XSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcclxuICAgICAgICBkZWxldGUgc2VsZltoZWFkZXJdO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IGZvcm1hdCA/IGZvcm1hdEhlYWRlcihoZWFkZXIpIDogU3RyaW5nKGhlYWRlcikudHJpbSgpO1xyXG5cclxuICAgICAgaWYgKG5vcm1hbGl6ZWQgIT09IGhlYWRlcikge1xyXG4gICAgICAgIGRlbGV0ZSBzZWxmW2hlYWRlcl07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGZbbm9ybWFsaXplZF0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XHJcblxyXG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWRdID0gdHJ1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY29uY2F0KC4uLnRhcmdldHMpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmNvbmNhdCh0aGlzLCAuLi50YXJnZXRzKTtcclxuICB9XHJcblxyXG4gIHRvSlNPTihhc1N0cmluZ3MpIHtcclxuICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLCAodmFsdWUsIGhlYWRlcikgPT4ge1xyXG4gICAgICB2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSBmYWxzZSAmJiAob2JqW2hlYWRlcl0gPSBhc1N0cmluZ3MgJiYgdXRpbHMuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsICcpIDogdmFsdWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMudG9KU09OKCkpW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMudG9KU09OKCkpLm1hcCgoW2hlYWRlciwgdmFsdWVdKSA9PiBoZWFkZXIgKyAnOiAnICsgdmFsdWUpLmpvaW4oJ1xcbicpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xyXG4gICAgcmV0dXJuICdBeGlvc0hlYWRlcnMnO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb20odGhpbmcpIHtcclxuICAgIHJldHVybiB0aGluZyBpbnN0YW5jZW9mIHRoaXMgPyB0aGluZyA6IG5ldyB0aGlzKHRoaW5nKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb25jYXQoZmlyc3QsIC4uLnRhcmdldHMpIHtcclxuICAgIGNvbnN0IGNvbXB1dGVkID0gbmV3IHRoaXMoZmlyc3QpO1xyXG5cclxuICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiBjb21wdXRlZC5zZXQodGFyZ2V0KSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbXB1dGVkO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFjY2Vzc29yKGhlYWRlcikge1xyXG4gICAgY29uc3QgaW50ZXJuYWxzID0gdGhpc1skaW50ZXJuYWxzXSA9ICh0aGlzWyRpbnRlcm5hbHNdID0ge1xyXG4gICAgICBhY2Nlc3NvcnM6IHt9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBhY2Nlc3NvcnMgPSBpbnRlcm5hbHMuYWNjZXNzb3JzO1xyXG4gICAgY29uc3QgcHJvdG90eXBlID0gdGhpcy5wcm90b3R5cGU7XHJcblxyXG4gICAgZnVuY3Rpb24gZGVmaW5lQWNjZXNzb3IoX2hlYWRlcikge1xyXG4gICAgICBjb25zdCBsSGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xyXG5cclxuICAgICAgaWYgKCFhY2Nlc3NvcnNbbEhlYWRlcl0pIHtcclxuICAgICAgICBidWlsZEFjY2Vzc29ycyhwcm90b3R5cGUsIF9oZWFkZXIpO1xyXG4gICAgICAgIGFjY2Vzc29yc1tsSGVhZGVyXSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1dGlscy5pc0FycmF5KGhlYWRlcikgPyBoZWFkZXIuZm9yRWFjaChkZWZpbmVBY2Nlc3NvcikgOiBkZWZpbmVBY2Nlc3NvcihoZWFkZXIpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuQXhpb3NIZWFkZXJzLmFjY2Vzc29yKFsnQ29udGVudC1UeXBlJywgJ0NvbnRlbnQtTGVuZ3RoJywgJ0FjY2VwdCcsICdBY2NlcHQtRW5jb2RpbmcnLCAnVXNlci1BZ2VudCcsICdBdXRob3JpemF0aW9uJ10pO1xyXG5cclxuLy8gcmVzZXJ2ZWQgbmFtZXMgaG90Zml4XHJcbnV0aWxzLnJlZHVjZURlc2NyaXB0b3JzKEF4aW9zSGVhZGVycy5wcm90b3R5cGUsICh7dmFsdWV9LCBrZXkpID0+IHtcclxuICBsZXQgbWFwcGVkID0ga2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7IC8vIG1hcCBgc2V0YCA9PiBgU2V0YFxyXG4gIHJldHVybiB7XHJcbiAgICBnZXQ6ICgpID0+IHZhbHVlLFxyXG4gICAgc2V0KGhlYWRlclZhbHVlKSB7XHJcbiAgICAgIHRoaXNbbWFwcGVkXSA9IGhlYWRlclZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG51dGlscy5mcmVlemVNZXRob2RzKEF4aW9zSGVhZGVycyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBeGlvc0hlYWRlcnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcclxuXHJcbmNsYXNzIEludGVyY2VwdG9yTWFuYWdlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0gW107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcclxuICAgKi9cclxuICB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCwgb3B0aW9ucykge1xyXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKHtcclxuICAgICAgZnVsZmlsbGVkLFxyXG4gICAgICByZWplY3RlZCxcclxuICAgICAgc3luY2hyb25vdXM6IG9wdGlvbnMgPyBvcHRpb25zLnN5bmNocm9ub3VzIDogZmFsc2UsXHJcbiAgICAgIHJ1bldoZW46IG9wdGlvbnMgPyBvcHRpb25zLnJ1bldoZW4gOiBudWxsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGludGVyY2VwdG9yIHdhcyByZW1vdmVkLCBgZmFsc2VgIG90aGVyd2lzZVxyXG4gICAqL1xyXG4gIGVqZWN0KGlkKSB7XHJcbiAgICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcclxuICAgICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgYWxsIGludGVyY2VwdG9ycyBmcm9tIHRoZSBzdGFja1xyXG4gICAqXHJcbiAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICovXHJcbiAgY2xlYXIoKSB7XHJcbiAgICBpZiAodGhpcy5oYW5kbGVycykge1xyXG4gICAgICB0aGlzLmhhbmRsZXJzID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xyXG4gICAqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcclxuICAgKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgKi9cclxuICBmb3JFYWNoKGZuKSB7XHJcbiAgICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcclxuICAgICAgaWYgKGggIT09IG51bGwpIHtcclxuICAgICAgICBmbihoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRlcmNlcHRvck1hbmFnZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBpc0Fic29sdXRlVVJMIGZyb20gJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyc7XHJcbmltcG9ydCBjb21iaW5lVVJMcyBmcm9tICcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzJztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxyXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXHJcbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XHJcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xyXG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XHJcbiAgfVxyXG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHRyYW5zZm9ybURhdGEgZnJvbSAnLi90cmFuc2Zvcm1EYXRhLmpzJztcclxuaW1wb3J0IGlzQ2FuY2VsIGZyb20gJy4uL2NhbmNlbC9pc0NhbmNlbC5qcyc7XHJcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy9pbmRleC5qcyc7XHJcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4uL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzJztcclxuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XHJcbmltcG9ydCBhZGFwdGVycyBmcm9tIFwiLi4vYWRhcHRlcnMvYWRhcHRlcnMuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBUaHJvd3MgYSBgQ2FuY2VsZWRFcnJvcmAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcclxuICpcclxuICogQHJldHVybnMge3ZvaWR9XHJcbiAqL1xyXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xyXG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcclxuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XHJcbiAgfVxyXG5cclxuICBpZiAoY29uZmlnLnNpZ25hbCAmJiBjb25maWcuc2lnbmFsLmFib3J0ZWQpIHtcclxuICAgIHRocm93IG5ldyBDYW5jZWxlZEVycm9yKG51bGwsIGNvbmZpZyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcclxuICpcclxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xyXG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcclxuXHJcbiAgY29uZmlnLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShjb25maWcuaGVhZGVycyk7XHJcblxyXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcclxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcclxuICAgIGNvbmZpZyxcclxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XHJcbiAgKTtcclxuXHJcbiAgaWYgKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXS5pbmRleE9mKGNvbmZpZy5tZXRob2QpICE9PSAtMSkge1xyXG4gICAgY29uZmlnLmhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkYXB0ZXIgPSBhZGFwdGVycy5nZXRBZGFwdGVyKGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXIpO1xyXG5cclxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xyXG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xyXG5cclxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXHJcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxyXG4gICAgICBjb25maWcsXHJcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZSxcclxuICAgICAgcmVzcG9uc2VcclxuICAgICk7XHJcblxyXG4gICAgcmVzcG9uc2UuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKHJlc3BvbnNlLmhlYWRlcnMpO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XHJcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcclxuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xyXG5cclxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcclxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcclxuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcclxuICAgICAgICAgIGNvbmZpZyxcclxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZSxcclxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShyZWFzb24ucmVzcG9uc2UuaGVhZGVycyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcclxuICB9KTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xyXG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gXCIuL0F4aW9zSGVhZGVycy5qc1wiO1xyXG5cclxuY29uc3QgaGVhZGVyc1RvT2JqZWN0ID0gKHRoaW5nKSA9PiB0aGluZyBpbnN0YW5jZW9mIEF4aW9zSGVhZGVycyA/IHsgLi4udGhpbmcgfSA6IHRoaW5nO1xyXG5cclxuLyoqXHJcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcclxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XHJcbiAgY29uc3QgY29uZmlnID0ge307XHJcblxyXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlLCBwcm9wLCBjYXNlbGVzcykge1xyXG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcclxuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlLmNhbGwoe2Nhc2VsZXNzfSwgdGFyZ2V0LCBzb3VyY2UpO1xyXG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcclxuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHt9LCBzb3VyY2UpO1xyXG4gICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcclxuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNvdXJjZTtcclxuICB9XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxyXG4gIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMoYSwgYiwgcHJvcCAsIGNhc2VsZXNzKSB7XHJcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XHJcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShhLCBiLCBwcm9wICwgY2FzZWxlc3MpO1xyXG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYSkpIHtcclxuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSwgcHJvcCAsIGNhc2VsZXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxyXG4gIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIoYSwgYikge1xyXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChiKSkge1xyXG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxyXG4gIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIoYSwgYikge1xyXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChiKSkge1xyXG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBiKTtcclxuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGEpKSB7XHJcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXHJcbiAgZnVuY3Rpb24gbWVyZ2VEaXJlY3RLZXlzKGEsIGIsIHByb3ApIHtcclxuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcclxuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKGEsIGIpO1xyXG4gICAgfSBlbHNlIGlmIChwcm9wIGluIGNvbmZpZzEpIHtcclxuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBtZXJnZU1hcCA9IHtcclxuICAgIHVybDogdmFsdWVGcm9tQ29uZmlnMixcclxuICAgIG1ldGhvZDogdmFsdWVGcm9tQ29uZmlnMixcclxuICAgIGRhdGE6IHZhbHVlRnJvbUNvbmZpZzIsXHJcbiAgICBiYXNlVVJMOiBkZWZhdWx0VG9Db25maWcyLFxyXG4gICAgdHJhbnNmb3JtUmVxdWVzdDogZGVmYXVsdFRvQ29uZmlnMixcclxuICAgIHRyYW5zZm9ybVJlc3BvbnNlOiBkZWZhdWx0VG9Db25maWcyLFxyXG4gICAgcGFyYW1zU2VyaWFsaXplcjogZGVmYXVsdFRvQ29uZmlnMixcclxuICAgIHRpbWVvdXQ6IGRlZmF1bHRUb0NvbmZpZzIsXHJcbiAgICB0aW1lb3V0TWVzc2FnZTogZGVmYXVsdFRvQ29uZmlnMixcclxuICAgIHdpdGhDcmVkZW50aWFsczogZGVmYXVsdFRvQ29uZmlnMixcclxuICAgIHdpdGhYU1JGVG9rZW46IGRlZmF1bHRUb0NvbmZpZzIsXHJcbiAgICBhZGFwdGVyOiBkZWZhdWx0VG9Db25maWcyLFxyXG4gICAgcmVzcG9uc2VUeXBlOiBkZWZhdWx0VG9Db25maWcyLFxyXG4gICAgeHNyZkNvb2tpZU5hbWU6IGRlZmF1bHRUb0NvbmZpZzIsXHJcbiAgICB4c3JmSGVhZGVyTmFtZTogZGVmYXVsdFRvQ29uZmlnMixcclxuICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXHJcbiAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXHJcbiAgICBkZWNvbXByZXNzOiBkZWZhdWx0VG9Db25maWcyLFxyXG4gICAgbWF4Q29udGVudExlbmd0aDogZGVmYXVsdFRvQ29uZmlnMixcclxuICAgIG1heEJvZHlMZW5ndGg6IGRlZmF1bHRUb0NvbmZpZzIsXHJcbiAgICBiZWZvcmVSZWRpcmVjdDogZGVmYXVsdFRvQ29uZmlnMixcclxuICAgIHRyYW5zcG9ydDogZGVmYXVsdFRvQ29uZmlnMixcclxuICAgIGh0dHBBZ2VudDogZGVmYXVsdFRvQ29uZmlnMixcclxuICAgIGh0dHBzQWdlbnQ6IGRlZmF1bHRUb0NvbmZpZzIsXHJcbiAgICBjYW5jZWxUb2tlbjogZGVmYXVsdFRvQ29uZmlnMixcclxuICAgIHNvY2tldFBhdGg6IGRlZmF1bHRUb0NvbmZpZzIsXHJcbiAgICByZXNwb25zZUVuY29kaW5nOiBkZWZhdWx0VG9Db25maWcyLFxyXG4gICAgdmFsaWRhdGVTdGF0dXM6IG1lcmdlRGlyZWN0S2V5cyxcclxuICAgIGhlYWRlcnM6IChhLCBiICwgcHJvcCkgPT4gbWVyZ2VEZWVwUHJvcGVydGllcyhoZWFkZXJzVG9PYmplY3QoYSksIGhlYWRlcnNUb09iamVjdChiKSxwcm9wLCB0cnVlKVxyXG4gIH07XHJcblxyXG4gIHV0aWxzLmZvckVhY2goT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnMSwgY29uZmlnMikpLCBmdW5jdGlvbiBjb21wdXRlQ29uZmlnVmFsdWUocHJvcCkge1xyXG4gICAgY29uc3QgbWVyZ2UgPSBtZXJnZU1hcFtwcm9wXSB8fCBtZXJnZURlZXBQcm9wZXJ0aWVzO1xyXG4gICAgY29uc3QgY29uZmlnVmFsdWUgPSBtZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdLCBwcm9wKTtcclxuICAgICh1dGlscy5pc1VuZGVmaW5lZChjb25maWdWYWx1ZSkgJiYgbWVyZ2UgIT09IG1lcmdlRGlyZWN0S2V5cykgfHwgKGNvbmZpZ1twcm9wXSA9IGNvbmZpZ1ZhbHVlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuL0F4aW9zRXJyb3IuanMnO1xyXG5cclxuLyoqXHJcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IFRoZSByZXNwb25zZS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XHJcbiAgY29uc3QgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XHJcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcclxuICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoXHJcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXHJcbiAgICAgIFtBeGlvc0Vycm9yLkVSUl9CQURfUkVRVUVTVCwgQXhpb3NFcnJvci5FUlJfQkFEX1JFU1BPTlNFXVtNYXRoLmZsb29yKHJlc3BvbnNlLnN0YXR1cyAvIDEwMCkgLSA0XSxcclxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxyXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxyXG4gICAgICByZXNwb25zZVxyXG4gICAgKSk7XHJcbiAgfVxyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcclxuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL2RlZmF1bHRzL2luZGV4LmpzJztcclxuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXHJcbiAqIEBwYXJhbSB7P09iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlIG9iamVjdFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGZucywgcmVzcG9uc2UpIHtcclxuICBjb25zdCBjb25maWcgPSB0aGlzIHx8IGRlZmF1bHRzO1xyXG4gIGNvbnN0IGNvbnRleHQgPSByZXNwb25zZSB8fCBjb25maWc7XHJcbiAgY29uc3QgaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbnRleHQuaGVhZGVycyk7XHJcbiAgbGV0IGRhdGEgPSBjb250ZXh0LmRhdGE7XHJcblxyXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcclxuICAgIGRhdGEgPSBmbi5jYWxsKGNvbmZpZywgZGF0YSwgaGVhZGVycy5ub3JtYWxpemUoKSwgcmVzcG9uc2UgPyByZXNwb25zZS5zdGF0dXMgOiB1bmRlZmluZWQpO1xyXG4gIH0pO1xyXG5cclxuICBoZWFkZXJzLm5vcm1hbGl6ZSgpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xyXG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xyXG5pbXBvcnQgdHJhbnNpdGlvbmFsRGVmYXVsdHMgZnJvbSAnLi90cmFuc2l0aW9uYWwuanMnO1xyXG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuLi9oZWxwZXJzL3RvRm9ybURhdGEuanMnO1xyXG5pbXBvcnQgdG9VUkxFbmNvZGVkRm9ybSBmcm9tICcuLi9oZWxwZXJzL3RvVVJMRW5jb2RlZEZvcm0uanMnO1xyXG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xyXG5pbXBvcnQgZm9ybURhdGFUb0pTT04gZnJvbSAnLi4vaGVscGVycy9mb3JtRGF0YVRvSlNPTi5qcyc7XHJcblxyXG4vKipcclxuICogSXQgdGFrZXMgYSBzdHJpbmcsIHRyaWVzIHRvIHBhcnNlIGl0LCBhbmQgaWYgaXQgZmFpbHMsIGl0IHJldHVybnMgdGhlIHN0cmluZ2lmaWVkIHZlcnNpb25cclxuICogb2YgdGhlIGlucHV0XHJcbiAqXHJcbiAqIEBwYXJhbSB7YW55fSByYXdWYWx1ZSAtIFRoZSB2YWx1ZSB0byBiZSBzdHJpbmdpZmllZC5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGFyc2VyIC0gQSBmdW5jdGlvbiB0aGF0IHBhcnNlcyBhIHN0cmluZyBpbnRvIGEgSmF2YVNjcmlwdCBvYmplY3QuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVuY29kZXIgLSBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSB2YWx1ZSBhbmQgcmV0dXJucyBhIHN0cmluZy5cclxuICpcclxuICogQHJldHVybnMge3N0cmluZ30gQSBzdHJpbmdpZmllZCB2ZXJzaW9uIG9mIHRoZSByYXdWYWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIHN0cmluZ2lmeVNhZmVseShyYXdWYWx1ZSwgcGFyc2VyLCBlbmNvZGVyKSB7XHJcbiAgaWYgKHV0aWxzLmlzU3RyaW5nKHJhd1ZhbHVlKSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgKHBhcnNlciB8fCBKU09OLnBhcnNlKShyYXdWYWx1ZSk7XHJcbiAgICAgIHJldHVybiB1dGlscy50cmltKHJhd1ZhbHVlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKGUubmFtZSAhPT0gJ1N5bnRheEVycm9yJykge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoZW5jb2RlciB8fCBKU09OLnN0cmluZ2lmeSkocmF3VmFsdWUpO1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0cyA9IHtcclxuXHJcbiAgdHJhbnNpdGlvbmFsOiB0cmFuc2l0aW9uYWxEZWZhdWx0cyxcclxuXHJcbiAgYWRhcHRlcjogWyd4aHInLCAnaHR0cCcsICdmZXRjaCddLFxyXG5cclxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XHJcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IGhlYWRlcnMuZ2V0Q29udGVudFR5cGUoKSB8fCAnJztcclxuICAgIGNvbnN0IGhhc0pTT05Db250ZW50VHlwZSA9IGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSA+IC0xO1xyXG4gICAgY29uc3QgaXNPYmplY3RQYXlsb2FkID0gdXRpbHMuaXNPYmplY3QoZGF0YSk7XHJcblxyXG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCAmJiB1dGlscy5pc0hUTUxGb3JtKGRhdGEpKSB7XHJcbiAgICAgIGRhdGEgPSBuZXcgRm9ybURhdGEoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNGb3JtRGF0YSA9IHV0aWxzLmlzRm9ybURhdGEoZGF0YSk7XHJcblxyXG4gICAgaWYgKGlzRm9ybURhdGEpIHtcclxuICAgICAgcmV0dXJuIGhhc0pTT05Db250ZW50VHlwZSA/IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhVG9KU09OKGRhdGEpKSA6IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcclxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcclxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcclxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XHJcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKSB8fFxyXG4gICAgICB1dGlscy5pc1JlYWRhYmxlU3RyZWFtKGRhdGEpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcclxuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xyXG4gICAgfVxyXG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XHJcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04JywgZmFsc2UpO1xyXG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpc0ZpbGVMaXN0O1xyXG5cclxuICAgIGlmIChpc09iamVjdFBheWxvYWQpIHtcclxuICAgICAgaWYgKGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpID4gLTEpIHtcclxuICAgICAgICByZXR1cm4gdG9VUkxFbmNvZGVkRm9ybShkYXRhLCB0aGlzLmZvcm1TZXJpYWxpemVyKS50b1N0cmluZygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoKGlzRmlsZUxpc3QgPSB1dGlscy5pc0ZpbGVMaXN0KGRhdGEpKSB8fCBjb250ZW50VHlwZS5pbmRleE9mKCdtdWx0aXBhcnQvZm9ybS1kYXRhJykgPiAtMSkge1xyXG4gICAgICAgIGNvbnN0IF9Gb3JtRGF0YSA9IHRoaXMuZW52ICYmIHRoaXMuZW52LkZvcm1EYXRhO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9Gb3JtRGF0YShcclxuICAgICAgICAgIGlzRmlsZUxpc3QgPyB7J2ZpbGVzW10nOiBkYXRhfSA6IGRhdGEsXHJcbiAgICAgICAgICBfRm9ybURhdGEgJiYgbmV3IF9Gb3JtRGF0YSgpLFxyXG4gICAgICAgICAgdGhpcy5mb3JtU2VyaWFsaXplclxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNPYmplY3RQYXlsb2FkIHx8IGhhc0pTT05Db250ZW50VHlwZSApIHtcclxuICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24vanNvbicsIGZhbHNlKTtcclxuICAgICAgcmV0dXJuIHN0cmluZ2lmeVNhZmVseShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XSxcclxuXHJcbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSB0aGlzLnRyYW5zaXRpb25hbCB8fCBkZWZhdWx0cy50cmFuc2l0aW9uYWw7XHJcbiAgICBjb25zdCBmb3JjZWRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuZm9yY2VkSlNPTlBhcnNpbmc7XHJcbiAgICBjb25zdCBKU09OUmVxdWVzdGVkID0gdGhpcy5yZXNwb25zZVR5cGUgPT09ICdqc29uJztcclxuXHJcbiAgICBpZiAodXRpbHMuaXNSZXNwb25zZShkYXRhKSB8fCB1dGlscy5pc1JlYWRhYmxlU3RyZWFtKGRhdGEpKSB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhICYmIHV0aWxzLmlzU3RyaW5nKGRhdGEpICYmICgoZm9yY2VkSlNPTlBhcnNpbmcgJiYgIXRoaXMucmVzcG9uc2VUeXBlKSB8fCBKU09OUmVxdWVzdGVkKSkge1xyXG4gICAgICBjb25zdCBzaWxlbnRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuc2lsZW50SlNPTlBhcnNpbmc7XHJcbiAgICAgIGNvbnN0IHN0cmljdEpTT05QYXJzaW5nID0gIXNpbGVudEpTT05QYXJzaW5nICYmIEpTT05SZXF1ZXN0ZWQ7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgaWYgKHN0cmljdEpTT05QYXJzaW5nKSB7XHJcbiAgICAgICAgICBpZiAoZS5uYW1lID09PSAnU3ludGF4RXJyb3InKSB7XHJcbiAgICAgICAgICAgIHRocm93IEF4aW9zRXJyb3IuZnJvbShlLCBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0UsIHRoaXMsIG51bGwsIHRoaXMucmVzcG9uc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XSxcclxuXHJcbiAgLyoqXHJcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXHJcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cclxuICAgKi9cclxuICB0aW1lb3V0OiAwLFxyXG5cclxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxyXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcclxuXHJcbiAgbWF4Q29udGVudExlbmd0aDogLTEsXHJcbiAgbWF4Qm9keUxlbmd0aDogLTEsXHJcblxyXG4gIGVudjoge1xyXG4gICAgRm9ybURhdGE6IHBsYXRmb3JtLmNsYXNzZXMuRm9ybURhdGEsXHJcbiAgICBCbG9iOiBwbGF0Zm9ybS5jbGFzc2VzLkJsb2JcclxuICB9LFxyXG5cclxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XHJcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XHJcbiAgfSxcclxuXHJcbiAgaGVhZGVyczoge1xyXG4gICAgY29tbW9uOiB7XHJcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgKG1ldGhvZCkgPT4ge1xyXG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRzO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgc2lsZW50SlNPTlBhcnNpbmc6IHRydWUsXHJcbiAgZm9yY2VkSlNPTlBhcnNpbmc6IHRydWUsXHJcbiAgY2xhcmlmeVRpbWVvdXRFcnJvcjogZmFsc2VcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBcIjEuNy45XCI7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi90b0Zvcm1EYXRhLmpzJztcclxuXHJcbi8qKlxyXG4gKiBJdCBlbmNvZGVzIGEgc3RyaW5nIGJ5IHJlcGxhY2luZyBhbGwgY2hhcmFjdGVycyB0aGF0IGFyZSBub3QgaW4gdGhlIHVucmVzZXJ2ZWQgc2V0IHdpdGhcclxuICogdGhlaXIgcGVyY2VudC1lbmNvZGVkIGVxdWl2YWxlbnRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIGVuY29kZS5cclxuICpcclxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGVuY29kZWQgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gZW5jb2RlKHN0cikge1xyXG4gIGNvbnN0IGNoYXJNYXAgPSB7XHJcbiAgICAnISc6ICclMjEnLFxyXG4gICAgXCInXCI6ICclMjcnLFxyXG4gICAgJygnOiAnJTI4JyxcclxuICAgICcpJzogJyUyOScsXHJcbiAgICAnfic6ICclN0UnLFxyXG4gICAgJyUyMCc6ICcrJyxcclxuICAgICclMDAnOiAnXFx4MDAnXHJcbiAgfTtcclxuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCl+XXwlMjB8JTAwL2csIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoKSB7XHJcbiAgICByZXR1cm4gY2hhck1hcFttYXRjaF07XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJdCB0YWtlcyBhIHBhcmFtcyBvYmplY3QgYW5kIGNvbnZlcnRzIGl0IHRvIGEgRm9ybURhdGEgb2JqZWN0XHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgdG8gYmUgY29udmVydGVkIHRvIGEgRm9ybURhdGEgb2JqZWN0LlxyXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBvYmplY3QgcGFzc2VkIHRvIHRoZSBBeGlvcyBjb25zdHJ1Y3Rvci5cclxuICpcclxuICogQHJldHVybnMge3ZvaWR9XHJcbiAqL1xyXG5mdW5jdGlvbiBBeGlvc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMsIG9wdGlvbnMpIHtcclxuICB0aGlzLl9wYWlycyA9IFtdO1xyXG5cclxuICBwYXJhbXMgJiYgdG9Gb3JtRGF0YShwYXJhbXMsIHRoaXMsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5jb25zdCBwcm90b3R5cGUgPSBBeGlvc1VSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGU7XHJcblxyXG5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gYXBwZW5kKG5hbWUsIHZhbHVlKSB7XHJcbiAgdGhpcy5fcGFpcnMucHVzaChbbmFtZSwgdmFsdWVdKTtcclxufTtcclxuXHJcbnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKGVuY29kZXIpIHtcclxuICBjb25zdCBfZW5jb2RlID0gZW5jb2RlciA/IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gZW5jb2Rlci5jYWxsKHRoaXMsIHZhbHVlLCBlbmNvZGUpO1xyXG4gIH0gOiBlbmNvZGU7XHJcblxyXG4gIHJldHVybiB0aGlzLl9wYWlycy5tYXAoZnVuY3Rpb24gZWFjaChwYWlyKSB7XHJcbiAgICByZXR1cm4gX2VuY29kZShwYWlyWzBdKSArICc9JyArIF9lbmNvZGUocGFpclsxXSk7XHJcbiAgfSwgJycpLmpvaW4oJyYnKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF4aW9zVVJMU2VhcmNoUGFyYW1zO1xyXG4iLCJjb25zdCBIdHRwU3RhdHVzQ29kZSA9IHtcclxuICBDb250aW51ZTogMTAwLFxyXG4gIFN3aXRjaGluZ1Byb3RvY29sczogMTAxLFxyXG4gIFByb2Nlc3Npbmc6IDEwMixcclxuICBFYXJseUhpbnRzOiAxMDMsXHJcbiAgT2s6IDIwMCxcclxuICBDcmVhdGVkOiAyMDEsXHJcbiAgQWNjZXB0ZWQ6IDIwMixcclxuICBOb25BdXRob3JpdGF0aXZlSW5mb3JtYXRpb246IDIwMyxcclxuICBOb0NvbnRlbnQ6IDIwNCxcclxuICBSZXNldENvbnRlbnQ6IDIwNSxcclxuICBQYXJ0aWFsQ29udGVudDogMjA2LFxyXG4gIE11bHRpU3RhdHVzOiAyMDcsXHJcbiAgQWxyZWFkeVJlcG9ydGVkOiAyMDgsXHJcbiAgSW1Vc2VkOiAyMjYsXHJcbiAgTXVsdGlwbGVDaG9pY2VzOiAzMDAsXHJcbiAgTW92ZWRQZXJtYW5lbnRseTogMzAxLFxyXG4gIEZvdW5kOiAzMDIsXHJcbiAgU2VlT3RoZXI6IDMwMyxcclxuICBOb3RNb2RpZmllZDogMzA0LFxyXG4gIFVzZVByb3h5OiAzMDUsXHJcbiAgVW51c2VkOiAzMDYsXHJcbiAgVGVtcG9yYXJ5UmVkaXJlY3Q6IDMwNyxcclxuICBQZXJtYW5lbnRSZWRpcmVjdDogMzA4LFxyXG4gIEJhZFJlcXVlc3Q6IDQwMCxcclxuICBVbmF1dGhvcml6ZWQ6IDQwMSxcclxuICBQYXltZW50UmVxdWlyZWQ6IDQwMixcclxuICBGb3JiaWRkZW46IDQwMyxcclxuICBOb3RGb3VuZDogNDA0LFxyXG4gIE1ldGhvZE5vdEFsbG93ZWQ6IDQwNSxcclxuICBOb3RBY2NlcHRhYmxlOiA0MDYsXHJcbiAgUHJveHlBdXRoZW50aWNhdGlvblJlcXVpcmVkOiA0MDcsXHJcbiAgUmVxdWVzdFRpbWVvdXQ6IDQwOCxcclxuICBDb25mbGljdDogNDA5LFxyXG4gIEdvbmU6IDQxMCxcclxuICBMZW5ndGhSZXF1aXJlZDogNDExLFxyXG4gIFByZWNvbmRpdGlvbkZhaWxlZDogNDEyLFxyXG4gIFBheWxvYWRUb29MYXJnZTogNDEzLFxyXG4gIFVyaVRvb0xvbmc6IDQxNCxcclxuICBVbnN1cHBvcnRlZE1lZGlhVHlwZTogNDE1LFxyXG4gIFJhbmdlTm90U2F0aXNmaWFibGU6IDQxNixcclxuICBFeHBlY3RhdGlvbkZhaWxlZDogNDE3LFxyXG4gIEltQVRlYXBvdDogNDE4LFxyXG4gIE1pc2RpcmVjdGVkUmVxdWVzdDogNDIxLFxyXG4gIFVucHJvY2Vzc2FibGVFbnRpdHk6IDQyMixcclxuICBMb2NrZWQ6IDQyMyxcclxuICBGYWlsZWREZXBlbmRlbmN5OiA0MjQsXHJcbiAgVG9vRWFybHk6IDQyNSxcclxuICBVcGdyYWRlUmVxdWlyZWQ6IDQyNixcclxuICBQcmVjb25kaXRpb25SZXF1aXJlZDogNDI4LFxyXG4gIFRvb01hbnlSZXF1ZXN0czogNDI5LFxyXG4gIFJlcXVlc3RIZWFkZXJGaWVsZHNUb29MYXJnZTogNDMxLFxyXG4gIFVuYXZhaWxhYmxlRm9yTGVnYWxSZWFzb25zOiA0NTEsXHJcbiAgSW50ZXJuYWxTZXJ2ZXJFcnJvcjogNTAwLFxyXG4gIE5vdEltcGxlbWVudGVkOiA1MDEsXHJcbiAgQmFkR2F0ZXdheTogNTAyLFxyXG4gIFNlcnZpY2VVbmF2YWlsYWJsZTogNTAzLFxyXG4gIEdhdGV3YXlUaW1lb3V0OiA1MDQsXHJcbiAgSHR0cFZlcnNpb25Ob3RTdXBwb3J0ZWQ6IDUwNSxcclxuICBWYXJpYW50QWxzb05lZ290aWF0ZXM6IDUwNixcclxuICBJbnN1ZmZpY2llbnRTdG9yYWdlOiA1MDcsXHJcbiAgTG9vcERldGVjdGVkOiA1MDgsXHJcbiAgTm90RXh0ZW5kZWQ6IDUxMCxcclxuICBOZXR3b3JrQXV0aGVudGljYXRpb25SZXF1aXJlZDogNTExLFxyXG59O1xyXG5cclxuT2JqZWN0LmVudHJpZXMoSHR0cFN0YXR1c0NvZGUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gIEh0dHBTdGF0dXNDb2RlW3ZhbHVlXSA9IGtleTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIdHRwU3RhdHVzQ29kZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xyXG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xyXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XHJcbiAgfTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xyXG5pbXBvcnQgQXhpb3NVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi4vaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyc7XHJcblxyXG4vKipcclxuICogSXQgcmVwbGFjZXMgYWxsIGluc3RhbmNlcyBvZiB0aGUgY2hhcmFjdGVycyBgOmAsIGAkYCwgYCxgLCBgK2AsIGBbYCwgYW5kIGBdYCB3aXRoIHRoZWlyXHJcbiAqIFVSSSBlbmNvZGVkIGNvdW50ZXJwYXJ0c1xyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsIFRoZSB2YWx1ZSB0byBiZSBlbmNvZGVkLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZW5jb2RlZCB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcclxuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXHJcbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXHJcbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cclxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cclxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxyXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxyXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xyXG59XHJcblxyXG4vKipcclxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxyXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxyXG4gKiBAcGFyYW0gez8ob2JqZWN0fEZ1bmN0aW9uKX0gb3B0aW9uc1xyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIG9wdGlvbnMpIHtcclxuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cclxuICBpZiAoIXBhcmFtcykge1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgX2VuY29kZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5lbmNvZGUgfHwgZW5jb2RlO1xyXG5cclxuICBpZiAodXRpbHMuaXNGdW5jdGlvbihvcHRpb25zKSkge1xyXG4gICAgb3B0aW9ucyA9IHtcclxuICAgICAgc2VyaWFsaXplOiBvcHRpb25zXHJcbiAgICB9O1xyXG4gIH0gXHJcblxyXG4gIGNvbnN0IHNlcmlhbGl6ZUZuID0gb3B0aW9ucyAmJiBvcHRpb25zLnNlcmlhbGl6ZTtcclxuXHJcbiAgbGV0IHNlcmlhbGl6ZWRQYXJhbXM7XHJcblxyXG4gIGlmIChzZXJpYWxpemVGbikge1xyXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHNlcmlhbGl6ZUZuKHBhcmFtcywgb3B0aW9ucyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSB1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpID9cclxuICAgICAgcGFyYW1zLnRvU3RyaW5nKCkgOlxyXG4gICAgICBuZXcgQXhpb3NVUkxTZWFyY2hQYXJhbXMocGFyYW1zLCBvcHRpb25zKS50b1N0cmluZyhfZW5jb2RlKTtcclxuICB9XHJcblxyXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XHJcbiAgICBjb25zdCBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoXCIjXCIpO1xyXG5cclxuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xyXG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XHJcbiAgICB9XHJcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdXJsO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xyXG4gIHJldHVybiByZWxhdGl2ZVVSTFxyXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLz9cXC8kLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcclxuICAgIDogYmFzZVVSTDtcclxufVxyXG4iLCJpbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tIFwiLi4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanNcIjtcclxuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSBcIi4uL2NvcmUvQXhpb3NFcnJvci5qc1wiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xyXG5cclxuY29uc3QgY29tcG9zZVNpZ25hbHMgPSAoc2lnbmFscywgdGltZW91dCkgPT4ge1xyXG4gIGNvbnN0IHtsZW5ndGh9ID0gKHNpZ25hbHMgPSBzaWduYWxzID8gc2lnbmFscy5maWx0ZXIoQm9vbGVhbikgOiBbXSk7XHJcblxyXG4gIGlmICh0aW1lb3V0IHx8IGxlbmd0aCkge1xyXG4gICAgbGV0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcblxyXG4gICAgbGV0IGFib3J0ZWQ7XHJcblxyXG4gICAgY29uc3Qgb25hYm9ydCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcclxuICAgICAgaWYgKCFhYm9ydGVkKSB7XHJcbiAgICAgICAgYWJvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgdW5zdWJzY3JpYmUoKTtcclxuICAgICAgICBjb25zdCBlcnIgPSByZWFzb24gaW5zdGFuY2VvZiBFcnJvciA/IHJlYXNvbiA6IHRoaXMucmVhc29uO1xyXG4gICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoZXJyIGluc3RhbmNlb2YgQXhpb3NFcnJvciA/IGVyciA6IG5ldyBDYW5jZWxlZEVycm9yKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBlcnIpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCB0aW1lciA9IHRpbWVvdXQgJiYgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRpbWVyID0gbnVsbDtcclxuICAgICAgb25hYm9ydChuZXcgQXhpb3NFcnJvcihgdGltZW91dCAke3RpbWVvdXR9IG9mIG1zIGV4Y2VlZGVkYCwgQXhpb3NFcnJvci5FVElNRURPVVQpKVxyXG4gICAgfSwgdGltZW91dClcclxuXHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHNpZ25hbHMpIHtcclxuICAgICAgICB0aW1lciAmJiBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIHRpbWVyID0gbnVsbDtcclxuICAgICAgICBzaWduYWxzLmZvckVhY2goc2lnbmFsID0+IHtcclxuICAgICAgICAgIHNpZ25hbC51bnN1YnNjcmliZSA/IHNpZ25hbC51bnN1YnNjcmliZShvbmFib3J0KSA6IHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uYWJvcnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNpZ25hbHMgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbmFscy5mb3JFYWNoKChzaWduYWwpID0+IHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uYWJvcnQpKTtcclxuXHJcbiAgICBjb25zdCB7c2lnbmFsfSA9IGNvbnRyb2xsZXI7XHJcblxyXG4gICAgc2lnbmFsLnVuc3Vic2NyaWJlID0gKCkgPT4gdXRpbHMuYXNhcCh1bnN1YnNjcmliZSk7XHJcblxyXG4gICAgcmV0dXJuIHNpZ25hbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2VTaWduYWxzO1xyXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XHJcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJFbnYgP1xyXG5cclxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcclxuICB7XHJcbiAgICB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcclxuICAgICAgY29uc3QgY29va2llID0gW25hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpXTtcclxuXHJcbiAgICAgIHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpICYmIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcclxuXHJcbiAgICAgIHV0aWxzLmlzU3RyaW5nKHBhdGgpICYmIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcclxuXHJcbiAgICAgIHV0aWxzLmlzU3RyaW5nKGRvbWFpbikgJiYgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcclxuXHJcbiAgICAgIHNlY3VyZSA9PT0gdHJ1ZSAmJiBjb29raWUucHVzaCgnc2VjdXJlJyk7XHJcblxyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVhZChuYW1lKSB7XHJcbiAgICAgIGNvbnN0IG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcclxuICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVtb3ZlKG5hbWUpIHtcclxuICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIDpcclxuXHJcbiAgLy8gTm9uLXN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxyXG4gIHtcclxuICAgIHdyaXRlKCkge30sXHJcbiAgICByZWFkKCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7fVxyXG4gIH07XHJcblxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xyXG5cclxuLyoqXHJcbiAqIEl0IHRha2VzIGEgc3RyaW5nIGxpa2UgYGZvb1t4XVt5XVt6XWAgYW5kIHJldHVybnMgYW4gYXJyYXkgbGlrZSBgWydmb28nLCAneCcsICd5JywgJ3onXVxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXHJcbiAqXHJcbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHN0cmluZ3MuXHJcbiAqL1xyXG5mdW5jdGlvbiBwYXJzZVByb3BQYXRoKG5hbWUpIHtcclxuICAvLyBmb29beF1beV1bel1cclxuICAvLyBmb28ueC55LnpcclxuICAvLyBmb28teC15LXpcclxuICAvLyBmb28geCB5IHpcclxuICByZXR1cm4gdXRpbHMubWF0Y2hBbGwoL1xcdyt8XFxbKFxcdyopXS9nLCBuYW1lKS5tYXAobWF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIG1hdGNoWzBdID09PSAnW10nID8gJycgOiBtYXRjaFsxXSB8fCBtYXRjaFswXTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgYW4gYXJyYXkgdG8gYW4gb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5PGFueT59IGFyciAtIFRoZSBhcnJheSB0byBjb252ZXJ0IHRvIGFuIG9iamVjdC5cclxuICpcclxuICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggdGhlIHNhbWUga2V5cyBhbmQgdmFsdWVzIGFzIHRoZSBhcnJheS5cclxuICovXHJcbmZ1bmN0aW9uIGFycmF5VG9PYmplY3QoYXJyKSB7XHJcbiAgY29uc3Qgb2JqID0ge307XHJcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGFycik7XHJcbiAgbGV0IGk7XHJcbiAgY29uc3QgbGVuID0ga2V5cy5sZW5ndGg7XHJcbiAgbGV0IGtleTtcclxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgIGtleSA9IGtleXNbaV07XHJcbiAgICBvYmpba2V5XSA9IGFycltrZXldO1xyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogSXQgdGFrZXMgYSBGb3JtRGF0YSBvYmplY3QgYW5kIHJldHVybnMgYSBKYXZhU2NyaXB0IG9iamVjdFxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybURhdGEgVGhlIEZvcm1EYXRhIG9iamVjdCB0byBjb252ZXJ0IHRvIEpTT04uXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtPYmplY3Q8c3RyaW5nLCBhbnk+IHwgbnVsbH0gVGhlIGNvbnZlcnRlZCBvYmplY3QuXHJcbiAqL1xyXG5mdW5jdGlvbiBmb3JtRGF0YVRvSlNPTihmb3JtRGF0YSkge1xyXG4gIGZ1bmN0aW9uIGJ1aWxkUGF0aChwYXRoLCB2YWx1ZSwgdGFyZ2V0LCBpbmRleCkge1xyXG4gICAgbGV0IG5hbWUgPSBwYXRoW2luZGV4KytdO1xyXG5cclxuICAgIGlmIChuYW1lID09PSAnX19wcm90b19fJykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgY29uc3QgaXNOdW1lcmljS2V5ID0gTnVtYmVyLmlzRmluaXRlKCtuYW1lKTtcclxuICAgIGNvbnN0IGlzTGFzdCA9IGluZGV4ID49IHBhdGgubGVuZ3RoO1xyXG4gICAgbmFtZSA9ICFuYW1lICYmIHV0aWxzLmlzQXJyYXkodGFyZ2V0KSA/IHRhcmdldC5sZW5ndGggOiBuYW1lO1xyXG5cclxuICAgIGlmIChpc0xhc3QpIHtcclxuICAgICAgaWYgKHV0aWxzLmhhc093blByb3AodGFyZ2V0LCBuYW1lKSkge1xyXG4gICAgICAgIHRhcmdldFtuYW1lXSA9IFt0YXJnZXRbbmFtZV0sIHZhbHVlXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXJnZXRbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuICFpc051bWVyaWNLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0YXJnZXRbbmFtZV0gfHwgIXV0aWxzLmlzT2JqZWN0KHRhcmdldFtuYW1lXSkpIHtcclxuICAgICAgdGFyZ2V0W25hbWVdID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYnVpbGRQYXRoKHBhdGgsIHZhbHVlLCB0YXJnZXRbbmFtZV0sIGluZGV4KTtcclxuXHJcbiAgICBpZiAocmVzdWx0ICYmIHV0aWxzLmlzQXJyYXkodGFyZ2V0W25hbWVdKSkge1xyXG4gICAgICB0YXJnZXRbbmFtZV0gPSBhcnJheVRvT2JqZWN0KHRhcmdldFtuYW1lXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICFpc051bWVyaWNLZXk7XHJcbiAgfVxyXG5cclxuICBpZiAodXRpbHMuaXNGb3JtRGF0YShmb3JtRGF0YSkgJiYgdXRpbHMuaXNGdW5jdGlvbihmb3JtRGF0YS5lbnRyaWVzKSkge1xyXG4gICAgY29uc3Qgb2JqID0ge307XHJcblxyXG4gICAgdXRpbHMuZm9yRWFjaEVudHJ5KGZvcm1EYXRhLCAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgICAgYnVpbGRQYXRoKHBhcnNlUHJvcFBhdGgobmFtZSksIHZhbHVlLCBvYmosIDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtRGF0YVRvSlNPTjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xyXG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cclxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcclxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cclxuICByZXR1cm4gL14oW2Etel1bYS16XFxkK1xcLS5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvc1xyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWQgVGhlIHZhbHVlIHRvIHRlc3RcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zLCBvdGhlcndpc2UgZmFsc2VcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQXhpb3NFcnJvcihwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHBheWxvYWQpICYmIChwYXlsb2FkLmlzQXhpb3NFcnJvciA9PT0gdHJ1ZSk7XHJcbn1cclxuIiwiaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlckVudiA/ICgob3JpZ2luLCBpc01TSUUpID0+ICh1cmwpID0+IHtcclxuICB1cmwgPSBuZXcgVVJMKHVybCwgcGxhdGZvcm0ub3JpZ2luKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIG9yaWdpbi5wcm90b2NvbCA9PT0gdXJsLnByb3RvY29sICYmXHJcbiAgICBvcmlnaW4uaG9zdCA9PT0gdXJsLmhvc3QgJiZcclxuICAgIChpc01TSUUgfHwgb3JpZ2luLnBvcnQgPT09IHVybC5wb3J0KVxyXG4gICk7XHJcbn0pKFxyXG4gIG5ldyBVUkwocGxhdGZvcm0ub3JpZ2luKSxcclxuICBwbGF0Zm9ybS5uYXZpZ2F0b3IgJiYgLyhtc2llfHRyaWRlbnQpL2kudGVzdChwbGF0Zm9ybS5uYXZpZ2F0b3IudXNlckFnZW50KVxyXG4pIDogKCkgPT4gdHJ1ZTtcclxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHN0cmljdFxyXG5leHBvcnQgZGVmYXVsdCBudWxsO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XHJcblxyXG4vLyBSYXdBeGlvc0hlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXHJcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcclxuY29uc3QgaWdub3JlRHVwbGljYXRlT2YgPSB1dGlscy50b09iamVjdFNldChbXHJcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcclxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXHJcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxyXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXHJcbl0pO1xyXG5cclxuLyoqXHJcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcclxuICpcclxuICogYGBgXHJcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXHJcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxyXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXHJcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gcmF3SGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCByYXdIZWFkZXJzID0+IHtcclxuICBjb25zdCBwYXJzZWQgPSB7fTtcclxuICBsZXQga2V5O1xyXG4gIGxldCB2YWw7XHJcbiAgbGV0IGk7XHJcblxyXG4gIHJhd0hlYWRlcnMgJiYgcmF3SGVhZGVycy5zcGxpdCgnXFxuJykuZm9yRWFjaChmdW5jdGlvbiBwYXJzZXIobGluZSkge1xyXG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xyXG4gICAga2V5ID0gbGluZS5zdWJzdHJpbmcoMCwgaSkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB2YWwgPSBsaW5lLnN1YnN0cmluZyhpICsgMSkudHJpbSgpO1xyXG5cclxuICAgIGlmICgha2V5IHx8IChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZltrZXldKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XHJcbiAgICAgIGlmIChwYXJzZWRba2V5XSkge1xyXG4gICAgICAgIHBhcnNlZFtrZXldLnB1c2godmFsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJzZWRba2V5XSA9IFt2YWxdO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcGFyc2VkO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZVByb3RvY29sKHVybCkge1xyXG4gIGNvbnN0IG1hdGNoID0gL14oWy0rXFx3XXsxLDI1fSkoOj9cXC9cXC98OikvLmV4ZWModXJsKTtcclxuICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XHJcbn1cclxuIiwiaW1wb3J0IHNwZWVkb21ldGVyIGZyb20gXCIuL3NwZWVkb21ldGVyLmpzXCI7XHJcbmltcG9ydCB0aHJvdHRsZSBmcm9tIFwiLi90aHJvdHRsZS5qc1wiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4uL3V0aWxzLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NFdmVudFJlZHVjZXIgPSAobGlzdGVuZXIsIGlzRG93bmxvYWRTdHJlYW0sIGZyZXEgPSAzKSA9PiB7XHJcbiAgbGV0IGJ5dGVzTm90aWZpZWQgPSAwO1xyXG4gIGNvbnN0IF9zcGVlZG9tZXRlciA9IHNwZWVkb21ldGVyKDUwLCAyNTApO1xyXG5cclxuICByZXR1cm4gdGhyb3R0bGUoZSA9PiB7XHJcbiAgICBjb25zdCBsb2FkZWQgPSBlLmxvYWRlZDtcclxuICAgIGNvbnN0IHRvdGFsID0gZS5sZW5ndGhDb21wdXRhYmxlID8gZS50b3RhbCA6IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IHByb2dyZXNzQnl0ZXMgPSBsb2FkZWQgLSBieXRlc05vdGlmaWVkO1xyXG4gICAgY29uc3QgcmF0ZSA9IF9zcGVlZG9tZXRlcihwcm9ncmVzc0J5dGVzKTtcclxuICAgIGNvbnN0IGluUmFuZ2UgPSBsb2FkZWQgPD0gdG90YWw7XHJcblxyXG4gICAgYnl0ZXNOb3RpZmllZCA9IGxvYWRlZDtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBsb2FkZWQsXHJcbiAgICAgIHRvdGFsLFxyXG4gICAgICBwcm9ncmVzczogdG90YWwgPyAobG9hZGVkIC8gdG90YWwpIDogdW5kZWZpbmVkLFxyXG4gICAgICBieXRlczogcHJvZ3Jlc3NCeXRlcyxcclxuICAgICAgcmF0ZTogcmF0ZSA/IHJhdGUgOiB1bmRlZmluZWQsXHJcbiAgICAgIGVzdGltYXRlZDogcmF0ZSAmJiB0b3RhbCAmJiBpblJhbmdlID8gKHRvdGFsIC0gbG9hZGVkKSAvIHJhdGUgOiB1bmRlZmluZWQsXHJcbiAgICAgIGV2ZW50OiBlLFxyXG4gICAgICBsZW5ndGhDb21wdXRhYmxlOiB0b3RhbCAhPSBudWxsLFxyXG4gICAgICBbaXNEb3dubG9hZFN0cmVhbSA/ICdkb3dubG9hZCcgOiAndXBsb2FkJ106IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgbGlzdGVuZXIoZGF0YSk7XHJcbiAgfSwgZnJlcSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9ncmVzc0V2ZW50RGVjb3JhdG9yID0gKHRvdGFsLCB0aHJvdHRsZWQpID0+IHtcclxuICBjb25zdCBsZW5ndGhDb21wdXRhYmxlID0gdG90YWwgIT0gbnVsbDtcclxuXHJcbiAgcmV0dXJuIFsobG9hZGVkKSA9PiB0aHJvdHRsZWRbMF0oe1xyXG4gICAgbGVuZ3RoQ29tcHV0YWJsZSxcclxuICAgIHRvdGFsLFxyXG4gICAgbG9hZGVkXHJcbiAgfSksIHRocm90dGxlZFsxXV07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhc3luY0RlY29yYXRvciA9IChmbikgPT4gKC4uLmFyZ3MpID0+IHV0aWxzLmFzYXAoKCkgPT4gZm4oLi4uYXJncykpO1xyXG4iLCJpbXBvcnQgcGxhdGZvcm0gZnJvbSBcIi4uL3BsYXRmb3JtL2luZGV4LmpzXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vdXRpbHMuanNcIjtcclxuaW1wb3J0IGlzVVJMU2FtZU9yaWdpbiBmcm9tIFwiLi9pc1VSTFNhbWVPcmlnaW4uanNcIjtcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSBcIi4vY29va2llcy5qc1wiO1xyXG5pbXBvcnQgYnVpbGRGdWxsUGF0aCBmcm9tIFwiLi4vY29yZS9idWlsZEZ1bGxQYXRoLmpzXCI7XHJcbmltcG9ydCBtZXJnZUNvbmZpZyBmcm9tIFwiLi4vY29yZS9tZXJnZUNvbmZpZy5qc1wiO1xyXG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gXCIuLi9jb3JlL0F4aW9zSGVhZGVycy5qc1wiO1xyXG5pbXBvcnQgYnVpbGRVUkwgZnJvbSBcIi4vYnVpbGRVUkwuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb25maWcpID0+IHtcclxuICBjb25zdCBuZXdDb25maWcgPSBtZXJnZUNvbmZpZyh7fSwgY29uZmlnKTtcclxuXHJcbiAgbGV0IHtkYXRhLCB3aXRoWFNSRlRva2VuLCB4c3JmSGVhZGVyTmFtZSwgeHNyZkNvb2tpZU5hbWUsIGhlYWRlcnMsIGF1dGh9ID0gbmV3Q29uZmlnO1xyXG5cclxuICBuZXdDb25maWcuaGVhZGVycyA9IGhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShoZWFkZXJzKTtcclxuXHJcbiAgbmV3Q29uZmlnLnVybCA9IGJ1aWxkVVJMKGJ1aWxkRnVsbFBhdGgobmV3Q29uZmlnLmJhc2VVUkwsIG5ld0NvbmZpZy51cmwpLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcik7XHJcblxyXG4gIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cclxuICBpZiAoYXV0aCkge1xyXG4gICAgaGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArXHJcbiAgICAgIGJ0b2EoKGF1dGgudXNlcm5hbWUgfHwgJycpICsgJzonICsgKGF1dGgucGFzc3dvcmQgPyB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYXV0aC5wYXNzd29yZCkpIDogJycpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGxldCBjb250ZW50VHlwZTtcclxuXHJcbiAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkpIHtcclxuICAgIGlmIChwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJFbnYgfHwgcGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52KSB7XHJcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUodW5kZWZpbmVkKTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxyXG4gICAgfSBlbHNlIGlmICgoY29udGVudFR5cGUgPSBoZWFkZXJzLmdldENvbnRlbnRUeXBlKCkpICE9PSBmYWxzZSkge1xyXG4gICAgICAvLyBmaXggc2VtaWNvbG9uIGR1cGxpY2F0aW9uIGlzc3VlIGZvciBSZWFjdE5hdGl2ZSBGb3JtRGF0YSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICBjb25zdCBbdHlwZSwgLi4udG9rZW5zXSA9IGNvbnRlbnRUeXBlID8gY29udGVudFR5cGUuc3BsaXQoJzsnKS5tYXAodG9rZW4gPT4gdG9rZW4udHJpbSgpKS5maWx0ZXIoQm9vbGVhbikgOiBbXTtcclxuICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZShbdHlwZSB8fCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIC4uLnRva2Vuc10uam9pbignOyAnKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgeHNyZiBoZWFkZXJcclxuICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cclxuICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxyXG5cclxuICBpZiAocGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52KSB7XHJcbiAgICB3aXRoWFNSRlRva2VuICYmIHV0aWxzLmlzRnVuY3Rpb24od2l0aFhTUkZUb2tlbikgJiYgKHdpdGhYU1JGVG9rZW4gPSB3aXRoWFNSRlRva2VuKG5ld0NvbmZpZykpO1xyXG5cclxuICAgIGlmICh3aXRoWFNSRlRva2VuIHx8ICh3aXRoWFNSRlRva2VuICE9PSBmYWxzZSAmJiBpc1VSTFNhbWVPcmlnaW4obmV3Q29uZmlnLnVybCkpKSB7XHJcbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxyXG4gICAgICBjb25zdCB4c3JmVmFsdWUgPSB4c3JmSGVhZGVyTmFtZSAmJiB4c3JmQ29va2llTmFtZSAmJiBjb29raWVzLnJlYWQoeHNyZkNvb2tpZU5hbWUpO1xyXG5cclxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xyXG4gICAgICAgIGhlYWRlcnMuc2V0KHhzcmZIZWFkZXJOYW1lLCB4c3JmVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3Q29uZmlnO1xyXG59XHJcblxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlIGRhdGEgbWF4UmF0ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gW3NhbXBsZXNDb3VudD0gMTBdXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbbWluPSAxMDAwXVxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiBzcGVlZG9tZXRlcihzYW1wbGVzQ291bnQsIG1pbikge1xyXG4gIHNhbXBsZXNDb3VudCA9IHNhbXBsZXNDb3VudCB8fCAxMDtcclxuICBjb25zdCBieXRlcyA9IG5ldyBBcnJheShzYW1wbGVzQ291bnQpO1xyXG4gIGNvbnN0IHRpbWVzdGFtcHMgPSBuZXcgQXJyYXkoc2FtcGxlc0NvdW50KTtcclxuICBsZXQgaGVhZCA9IDA7XHJcbiAgbGV0IHRhaWwgPSAwO1xyXG4gIGxldCBmaXJzdFNhbXBsZVRTO1xyXG5cclxuICBtaW4gPSBtaW4gIT09IHVuZGVmaW5lZCA/IG1pbiA6IDEwMDA7XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiBwdXNoKGNodW5rTGVuZ3RoKSB7XHJcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0ZWRBdCA9IHRpbWVzdGFtcHNbdGFpbF07XHJcblxyXG4gICAgaWYgKCFmaXJzdFNhbXBsZVRTKSB7XHJcbiAgICAgIGZpcnN0U2FtcGxlVFMgPSBub3c7XHJcbiAgICB9XHJcblxyXG4gICAgYnl0ZXNbaGVhZF0gPSBjaHVua0xlbmd0aDtcclxuICAgIHRpbWVzdGFtcHNbaGVhZF0gPSBub3c7XHJcblxyXG4gICAgbGV0IGkgPSB0YWlsO1xyXG4gICAgbGV0IGJ5dGVzQ291bnQgPSAwO1xyXG5cclxuICAgIHdoaWxlIChpICE9PSBoZWFkKSB7XHJcbiAgICAgIGJ5dGVzQ291bnQgKz0gYnl0ZXNbaSsrXTtcclxuICAgICAgaSA9IGkgJSBzYW1wbGVzQ291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZCA9IChoZWFkICsgMSkgJSBzYW1wbGVzQ291bnQ7XHJcblxyXG4gICAgaWYgKGhlYWQgPT09IHRhaWwpIHtcclxuICAgICAgdGFpbCA9ICh0YWlsICsgMSkgJSBzYW1wbGVzQ291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5vdyAtIGZpcnN0U2FtcGxlVFMgPCBtaW4pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhc3NlZCA9IHN0YXJ0ZWRBdCAmJiBub3cgLSBzdGFydGVkQXQ7XHJcblxyXG4gICAgcmV0dXJuIHBhc3NlZCA/IE1hdGgucm91bmQoYnl0ZXNDb3VudCAqIDEwMDAgLyBwYXNzZWQpIDogdW5kZWZpbmVkO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwZWVkb21ldGVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cclxuICpcclxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cclxuICpcclxuICogIGBgYGpzXHJcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XHJcbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcclxuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XHJcbiAqICBgYGBcclxuICpcclxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXHJcbiAqXHJcbiAqICBgYGBqc1xyXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xyXG4gKiAgYGBgXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xyXG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xyXG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XHJcbiAgfTtcclxufVxyXG4iLCIvKipcclxuICogVGhyb3R0bGUgZGVjb3JhdG9yXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBmcmVxXHJcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxyXG4gKi9cclxuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIGZyZXEpIHtcclxuICBsZXQgdGltZXN0YW1wID0gMDtcclxuICBsZXQgdGhyZXNob2xkID0gMTAwMCAvIGZyZXE7XHJcbiAgbGV0IGxhc3RBcmdzO1xyXG4gIGxldCB0aW1lcjtcclxuXHJcbiAgY29uc3QgaW52b2tlID0gKGFyZ3MsIG5vdyA9IERhdGUubm93KCkpID0+IHtcclxuICAgIHRpbWVzdGFtcCA9IG5vdztcclxuICAgIGxhc3RBcmdzID0gbnVsbDtcclxuICAgIGlmICh0aW1lcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICB0aW1lciA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBmbi5hcHBseShudWxsLCBhcmdzKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRocm90dGxlZCA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3QgcGFzc2VkID0gbm93IC0gdGltZXN0YW1wO1xyXG4gICAgaWYgKCBwYXNzZWQgPj0gdGhyZXNob2xkKSB7XHJcbiAgICAgIGludm9rZShhcmdzLCBub3cpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGFzdEFyZ3MgPSBhcmdzO1xyXG4gICAgICBpZiAoIXRpbWVyKSB7XHJcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRpbWVyID0gbnVsbDtcclxuICAgICAgICAgIGludm9rZShsYXN0QXJncylcclxuICAgICAgICB9LCB0aHJlc2hvbGQgLSBwYXNzZWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBmbHVzaCA9ICgpID0+IGxhc3RBcmdzICYmIGludm9rZShsYXN0QXJncyk7XHJcblxyXG4gIHJldHVybiBbdGhyb3R0bGVkLCBmbHVzaF07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRocm90dGxlO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xyXG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xyXG4vLyB0ZW1wb3JhcnkgaG90Zml4IHRvIGF2b2lkIGNpcmN1bGFyIHJlZmVyZW5jZXMgdW50aWwgQXhpb3NVUkxTZWFyY2hQYXJhbXMgaXMgcmVmYWN0b3JlZFxyXG5pbXBvcnQgUGxhdGZvcm1Gb3JtRGF0YSBmcm9tICcuLi9wbGF0Zm9ybS9ub2RlL2NsYXNzZXMvRm9ybURhdGEuanMnO1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgaWYgdGhlIGdpdmVuIHRoaW5nIGlzIGEgYXJyYXkgb3IganMgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdGhpbmcgLSBUaGUgb2JqZWN0IG9yIGFycmF5IHRvIGJlIHZpc2l0ZWQuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNWaXNpdGFibGUodGhpbmcpIHtcclxuICByZXR1cm4gdXRpbHMuaXNQbGFpbk9iamVjdCh0aGluZykgfHwgdXRpbHMuaXNBcnJheSh0aGluZyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJdCByZW1vdmVzIHRoZSBicmFja2V0cyBmcm9tIHRoZSBlbmQgb2YgYSBzdHJpbmdcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIHBhcmFtZXRlci5cclxuICpcclxuICogQHJldHVybnMge3N0cmluZ30gdGhlIGtleSB3aXRob3V0IHRoZSBicmFja2V0cy5cclxuICovXHJcbmZ1bmN0aW9uIHJlbW92ZUJyYWNrZXRzKGtleSkge1xyXG4gIHJldHVybiB1dGlscy5lbmRzV2l0aChrZXksICdbXScpID8ga2V5LnNsaWNlKDAsIC0yKSA6IGtleTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEl0IHRha2VzIGEgcGF0aCwgYSBrZXksIGFuZCBhIGJvb2xlYW4sIGFuZCByZXR1cm5zIGEgc3RyaW5nXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gVGhlIHBhdGggdG8gdGhlIGN1cnJlbnQga2V5LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgY3VycmVudCBvYmplY3QgYmVpbmcgaXRlcmF0ZWQgb3Zlci5cclxuICogQHBhcmFtIHtzdHJpbmd9IGRvdHMgLSBJZiB0cnVlLCB0aGUga2V5IHdpbGwgYmUgcmVuZGVyZWQgd2l0aCBkb3RzIGluc3RlYWQgb2YgYnJhY2tldHMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwYXRoIHRvIHRoZSBjdXJyZW50IGtleS5cclxuICovXHJcbmZ1bmN0aW9uIHJlbmRlcktleShwYXRoLCBrZXksIGRvdHMpIHtcclxuICBpZiAoIXBhdGgpIHJldHVybiBrZXk7XHJcbiAgcmV0dXJuIHBhdGguY29uY2F0KGtleSkubWFwKGZ1bmN0aW9uIGVhY2godG9rZW4sIGkpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgdG9rZW4gPSByZW1vdmVCcmFja2V0cyh0b2tlbik7XHJcbiAgICByZXR1cm4gIWRvdHMgJiYgaSA/ICdbJyArIHRva2VuICsgJ10nIDogdG9rZW47XHJcbiAgfSkuam9pbihkb3RzID8gJy4nIDogJycpO1xyXG59XHJcblxyXG4vKipcclxuICogSWYgdGhlIGFycmF5IGlzIGFuIGFycmF5IGFuZCBub25lIG9mIGl0cyBlbGVtZW50cyBhcmUgdmlzaXRhYmxlLCB0aGVuIGl0J3MgYSBmbGF0IGFycmF5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5PGFueT59IGFyciAtIFRoZSBhcnJheSB0byBjaGVja1xyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzRmxhdEFycmF5KGFycikge1xyXG4gIHJldHVybiB1dGlscy5pc0FycmF5KGFycikgJiYgIWFyci5zb21lKGlzVmlzaXRhYmxlKTtcclxufVxyXG5cclxuY29uc3QgcHJlZGljYXRlcyA9IHV0aWxzLnRvRmxhdE9iamVjdCh1dGlscywge30sIG51bGwsIGZ1bmN0aW9uIGZpbHRlcihwcm9wKSB7XHJcbiAgcmV0dXJuIC9eaXNbQS1aXS8udGVzdChwcm9wKTtcclxufSk7XHJcblxyXG4vKipcclxuICogQ29udmVydCBhIGRhdGEgb2JqZWN0IHRvIEZvcm1EYXRhXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuICogQHBhcmFtIHs/T2JqZWN0fSBbZm9ybURhdGFdXHJcbiAqIEBwYXJhbSB7P09iamVjdH0gW29wdGlvbnNdXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLnZpc2l0b3JdXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWV0YVRva2VucyA9IHRydWVdXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZG90cyA9IGZhbHNlXVxyXG4gKiBAcGFyYW0gez9Cb29sZWFufSBbb3B0aW9ucy5pbmRleGVzID0gZmFsc2VdXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqKi9cclxuXHJcbi8qKlxyXG4gKiBJdCBjb252ZXJ0cyBhbiBvYmplY3QgaW50byBhIEZvcm1EYXRhIG9iamVjdFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdDxhbnksIGFueT59IG9iaiAtIFRoZSBvYmplY3QgdG8gY29udmVydCB0byBmb3JtIGRhdGEuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRGF0YSAtIFRoZSBGb3JtRGF0YSBvYmplY3QgdG8gYXBwZW5kIHRvLlxyXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IG9wdGlvbnNcclxuICpcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIHRvRm9ybURhdGEob2JqLCBmb3JtRGF0YSwgb3B0aW9ucykge1xyXG4gIGlmICghdXRpbHMuaXNPYmplY3Qob2JqKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGFyZ2V0IG11c3QgYmUgYW4gb2JqZWN0Jyk7XHJcbiAgfVxyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICBmb3JtRGF0YSA9IGZvcm1EYXRhIHx8IG5ldyAoUGxhdGZvcm1Gb3JtRGF0YSB8fCBGb3JtRGF0YSkoKTtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgb3B0aW9ucyA9IHV0aWxzLnRvRmxhdE9iamVjdChvcHRpb25zLCB7XHJcbiAgICBtZXRhVG9rZW5zOiB0cnVlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmRleGVzOiBmYWxzZVxyXG4gIH0sIGZhbHNlLCBmdW5jdGlvbiBkZWZpbmVkKG9wdGlvbiwgc291cmNlKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcclxuICAgIHJldHVybiAhdXRpbHMuaXNVbmRlZmluZWQoc291cmNlW29wdGlvbl0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtZXRhVG9rZW5zID0gb3B0aW9ucy5tZXRhVG9rZW5zO1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG4gIGNvbnN0IHZpc2l0b3IgPSBvcHRpb25zLnZpc2l0b3IgfHwgZGVmYXVsdFZpc2l0b3I7XHJcbiAgY29uc3QgZG90cyA9IG9wdGlvbnMuZG90cztcclxuICBjb25zdCBpbmRleGVzID0gb3B0aW9ucy5pbmRleGVzO1xyXG4gIGNvbnN0IF9CbG9iID0gb3B0aW9ucy5CbG9iIHx8IHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiBCbG9iO1xyXG4gIGNvbnN0IHVzZUJsb2IgPSBfQmxvYiAmJiB1dGlscy5pc1NwZWNDb21wbGlhbnRGb3JtKGZvcm1EYXRhKTtcclxuXHJcbiAgaWYgKCF1dGlscy5pc0Z1bmN0aW9uKHZpc2l0b3IpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2aXNpdG9yIG11c3QgYmUgYSBmdW5jdGlvbicpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY29udmVydFZhbHVlKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybiAnJztcclxuXHJcbiAgICBpZiAodXRpbHMuaXNEYXRlKHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gdmFsdWUudG9JU09TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXVzZUJsb2IgJiYgdXRpbHMuaXNCbG9iKHZhbHVlKSkge1xyXG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignQmxvYiBpcyBub3Qgc3VwcG9ydGVkLiBVc2UgYSBCdWZmZXIgaW5zdGVhZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlcih2YWx1ZSkgfHwgdXRpbHMuaXNUeXBlZEFycmF5KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gdXNlQmxvYiAmJiB0eXBlb2YgQmxvYiA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBCbG9iKFt2YWx1ZV0pIDogQnVmZmVyLmZyb20odmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgdmlzaXRvci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IGtleVxyXG4gICAqIEBwYXJhbSB7QXJyYXk8U3RyaW5nfE51bWJlcj59IHBhdGhcclxuICAgKiBAdGhpcyB7Rm9ybURhdGF9XHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmV0dXJuIHRydWUgdG8gdmlzaXQgdGhlIGVhY2ggcHJvcCBvZiB0aGUgdmFsdWUgcmVjdXJzaXZlbHlcclxuICAgKi9cclxuICBmdW5jdGlvbiBkZWZhdWx0VmlzaXRvcih2YWx1ZSwga2V5LCBwYXRoKSB7XHJcbiAgICBsZXQgYXJyID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHZhbHVlICYmICFwYXRoICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgaWYgKHV0aWxzLmVuZHNXaXRoKGtleSwgJ3t9JykpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICBrZXkgPSBtZXRhVG9rZW5zID8ga2V5IDoga2V5LnNsaWNlKDAsIC0yKTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAodXRpbHMuaXNBcnJheSh2YWx1ZSkgJiYgaXNGbGF0QXJyYXkodmFsdWUpKSB8fFxyXG4gICAgICAgICgodXRpbHMuaXNGaWxlTGlzdCh2YWx1ZSkgfHwgdXRpbHMuZW5kc1dpdGgoa2V5LCAnW10nKSkgJiYgKGFyciA9IHV0aWxzLnRvQXJyYXkodmFsdWUpKVxyXG4gICAgICAgICkpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICBrZXkgPSByZW1vdmVCcmFja2V0cyhrZXkpO1xyXG5cclxuICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiBlYWNoKGVsLCBpbmRleCkge1xyXG4gICAgICAgICAgISh1dGlscy5pc1VuZGVmaW5lZChlbCkgfHwgZWwgPT09IG51bGwpICYmIGZvcm1EYXRhLmFwcGVuZChcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XHJcbiAgICAgICAgICAgIGluZGV4ZXMgPT09IHRydWUgPyByZW5kZXJLZXkoW2tleV0sIGluZGV4LCBkb3RzKSA6IChpbmRleGVzID09PSBudWxsID8ga2V5IDoga2V5ICsgJ1tdJyksXHJcbiAgICAgICAgICAgIGNvbnZlcnRWYWx1ZShlbClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVmlzaXRhYmxlKHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQocmVuZGVyS2V5KHBhdGgsIGtleSwgZG90cyksIGNvbnZlcnRWYWx1ZSh2YWx1ZSkpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YWNrID0gW107XHJcblxyXG4gIGNvbnN0IGV4cG9zZWRIZWxwZXJzID0gT2JqZWN0LmFzc2lnbihwcmVkaWNhdGVzLCB7XHJcbiAgICBkZWZhdWx0VmlzaXRvcixcclxuICAgIGNvbnZlcnRWYWx1ZSxcclxuICAgIGlzVmlzaXRhYmxlXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGJ1aWxkKHZhbHVlLCBwYXRoKSB7XHJcbiAgICBpZiAodXRpbHMuaXNVbmRlZmluZWQodmFsdWUpKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHN0YWNrLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xyXG4gICAgICB0aHJvdyBFcnJvcignQ2lyY3VsYXIgcmVmZXJlbmNlIGRldGVjdGVkIGluICcgKyBwYXRoLmpvaW4oJy4nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhY2sucHVzaCh2YWx1ZSk7XHJcblxyXG4gICAgdXRpbHMuZm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gZWFjaChlbCwga2V5KSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9ICEodXRpbHMuaXNVbmRlZmluZWQoZWwpIHx8IGVsID09PSBudWxsKSAmJiB2aXNpdG9yLmNhbGwoXHJcbiAgICAgICAgZm9ybURhdGEsIGVsLCB1dGlscy5pc1N0cmluZyhrZXkpID8ga2V5LnRyaW0oKSA6IGtleSwgcGF0aCwgZXhwb3NlZEhlbHBlcnNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgICAgICBidWlsZChlbCwgcGF0aCA/IHBhdGguY29uY2F0KGtleSkgOiBba2V5XSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHN0YWNrLnBvcCgpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF1dGlscy5pc09iamVjdChvYmopKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdkYXRhIG11c3QgYmUgYW4gb2JqZWN0Jyk7XHJcbiAgfVxyXG5cclxuICBidWlsZChvYmopO1xyXG5cclxuICByZXR1cm4gZm9ybURhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvRm9ybURhdGE7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XHJcbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4vdG9Gb3JtRGF0YS5qcyc7XHJcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b1VSTEVuY29kZWRGb3JtKGRhdGEsIG9wdGlvbnMpIHtcclxuICByZXR1cm4gdG9Gb3JtRGF0YShkYXRhLCBuZXcgcGxhdGZvcm0uY2xhc3Nlcy5VUkxTZWFyY2hQYXJhbXMoKSwgT2JqZWN0LmFzc2lnbih7XHJcbiAgICB2aXNpdG9yOiBmdW5jdGlvbih2YWx1ZSwga2V5LCBwYXRoLCBoZWxwZXJzKSB7XHJcbiAgICAgIGlmIChwbGF0Zm9ybS5pc05vZGUgJiYgdXRpbHMuaXNCdWZmZXIodmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5hcHBlbmQoa2V5LCB2YWx1ZS50b1N0cmluZygnYmFzZTY0JykpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGhlbHBlcnMuZGVmYXVsdFZpc2l0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICB9LCBvcHRpb25zKSk7XHJcbn1cclxuIiwiXHJcbmV4cG9ydCBjb25zdCBzdHJlYW1DaHVuayA9IGZ1bmN0aW9uKiAoY2h1bmssIGNodW5rU2l6ZSkge1xyXG4gIGxldCBsZW4gPSBjaHVuay5ieXRlTGVuZ3RoO1xyXG5cclxuICBpZiAoIWNodW5rU2l6ZSB8fCBsZW4gPCBjaHVua1NpemUpIHtcclxuICAgIHlpZWxkIGNodW5rO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IHBvcyA9IDA7XHJcbiAgbGV0IGVuZDtcclxuXHJcbiAgd2hpbGUgKHBvcyA8IGxlbikge1xyXG4gICAgZW5kID0gcG9zICsgY2h1bmtTaXplO1xyXG4gICAgeWllbGQgY2h1bmsuc2xpY2UocG9zLCBlbmQpO1xyXG4gICAgcG9zID0gZW5kO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlYWRCeXRlcyA9IGFzeW5jIGZ1bmN0aW9uKiAoaXRlcmFibGUsIGNodW5rU2l6ZSkge1xyXG4gIGZvciBhd2FpdCAoY29uc3QgY2h1bmsgb2YgcmVhZFN0cmVhbShpdGVyYWJsZSkpIHtcclxuICAgIHlpZWxkKiBzdHJlYW1DaHVuayhjaHVuaywgY2h1bmtTaXplKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlYWRTdHJlYW0gPSBhc3luYyBmdW5jdGlvbiogKHN0cmVhbSkge1xyXG4gIGlmIChzdHJlYW1bU3ltYm9sLmFzeW5jSXRlcmF0b3JdKSB7XHJcbiAgICB5aWVsZCogc3RyZWFtO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVhZGVyID0gc3RyZWFtLmdldFJlYWRlcigpO1xyXG4gIHRyeSB7XHJcbiAgICBmb3IgKDs7KSB7XHJcbiAgICAgIGNvbnN0IHtkb25lLCB2YWx1ZX0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xyXG4gICAgICBpZiAoZG9uZSkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHlpZWxkIHZhbHVlO1xyXG4gICAgfVxyXG4gIH0gZmluYWxseSB7XHJcbiAgICBhd2FpdCByZWFkZXIuY2FuY2VsKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdHJhY2tTdHJlYW0gPSAoc3RyZWFtLCBjaHVua1NpemUsIG9uUHJvZ3Jlc3MsIG9uRmluaXNoKSA9PiB7XHJcbiAgY29uc3QgaXRlcmF0b3IgPSByZWFkQnl0ZXMoc3RyZWFtLCBjaHVua1NpemUpO1xyXG5cclxuICBsZXQgYnl0ZXMgPSAwO1xyXG4gIGxldCBkb25lO1xyXG4gIGxldCBfb25GaW5pc2ggPSAoZSkgPT4ge1xyXG4gICAgaWYgKCFkb25lKSB7XHJcbiAgICAgIGRvbmUgPSB0cnVlO1xyXG4gICAgICBvbkZpbmlzaCAmJiBvbkZpbmlzaChlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgUmVhZGFibGVTdHJlYW0oe1xyXG4gICAgYXN5bmMgcHVsbChjb250cm9sbGVyKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge2RvbmUsIHZhbHVlfSA9IGF3YWl0IGl0ZXJhdG9yLm5leHQoKTtcclxuXHJcbiAgICAgICAgaWYgKGRvbmUpIHtcclxuICAgICAgICAgX29uRmluaXNoKCk7XHJcbiAgICAgICAgICBjb250cm9sbGVyLmNsb3NlKCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGVuID0gdmFsdWUuYnl0ZUxlbmd0aDtcclxuICAgICAgICBpZiAob25Qcm9ncmVzcykge1xyXG4gICAgICAgICAgbGV0IGxvYWRlZEJ5dGVzID0gYnl0ZXMgKz0gbGVuO1xyXG4gICAgICAgICAgb25Qcm9ncmVzcyhsb2FkZWRCeXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShuZXcgVWludDhBcnJheSh2YWx1ZSkpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBfb25GaW5pc2goZXJyKTtcclxuICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjYW5jZWwocmVhc29uKSB7XHJcbiAgICAgIF9vbkZpbmlzaChyZWFzb24pO1xyXG4gICAgICByZXR1cm4gaXRlcmF0b3IucmV0dXJuKCk7XHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAgaGlnaFdhdGVyTWFyazogMlxyXG4gIH0pXHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHtWRVJTSU9OfSBmcm9tICcuLi9lbnYvZGF0YS5qcyc7XHJcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0ge307XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xyXG5bJ29iamVjdCcsICdib29sZWFuJywgJ251bWJlcicsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnc3ltYm9sJ10uZm9yRWFjaCgodHlwZSwgaSkgPT4ge1xyXG4gIHZhbGlkYXRvcnNbdHlwZV0gPSBmdW5jdGlvbiB2YWxpZGF0b3IodGhpbmcpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09IHR5cGUgfHwgJ2EnICsgKGkgPCAxID8gJ24gJyA6ICcgJykgKyB0eXBlO1xyXG4gIH07XHJcbn0pO1xyXG5cclxuY29uc3QgZGVwcmVjYXRlZFdhcm5pbmdzID0ge307XHJcblxyXG4vKipcclxuICogVHJhbnNpdGlvbmFsIG9wdGlvbiB2YWxpZGF0b3JcclxuICpcclxuICogQHBhcmFtIHtmdW5jdGlvbnxib29sZWFuP30gdmFsaWRhdG9yIC0gc2V0IHRvIGZhbHNlIGlmIHRoZSB0cmFuc2l0aW9uYWwgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWRcclxuICogQHBhcmFtIHtzdHJpbmc/fSB2ZXJzaW9uIC0gZGVwcmVjYXRlZCB2ZXJzaW9uIC8gcmVtb3ZlZCBzaW5jZSB2ZXJzaW9uXHJcbiAqIEBwYXJhbSB7c3RyaW5nP30gbWVzc2FnZSAtIHNvbWUgbWVzc2FnZSB3aXRoIGFkZGl0aW9uYWwgaW5mb1xyXG4gKlxyXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XHJcbiAqL1xyXG52YWxpZGF0b3JzLnRyYW5zaXRpb25hbCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25hbCh2YWxpZGF0b3IsIHZlcnNpb24sIG1lc3NhZ2UpIHtcclxuICBmdW5jdGlvbiBmb3JtYXRNZXNzYWdlKG9wdCwgZGVzYykge1xyXG4gICAgcmV0dXJuICdbQXhpb3MgdicgKyBWRVJTSU9OICsgJ10gVHJhbnNpdGlvbmFsIG9wdGlvbiBcXCcnICsgb3B0ICsgJ1xcJycgKyBkZXNjICsgKG1lc3NhZ2UgPyAnLiAnICsgbWVzc2FnZSA6ICcnKTtcclxuICB9XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXHJcbiAgcmV0dXJuICh2YWx1ZSwgb3B0LCBvcHRzKSA9PiB7XHJcbiAgICBpZiAodmFsaWRhdG9yID09PSBmYWxzZSkge1xyXG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihcclxuICAgICAgICBmb3JtYXRNZXNzYWdlKG9wdCwgJyBoYXMgYmVlbiByZW1vdmVkJyArICh2ZXJzaW9uID8gJyBpbiAnICsgdmVyc2lvbiA6ICcnKSksXHJcbiAgICAgICAgQXhpb3NFcnJvci5FUlJfREVQUkVDQVRFRFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2ZXJzaW9uICYmICFkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSkge1xyXG4gICAgICBkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSA9IHRydWU7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBmb3JtYXRNZXNzYWdlKFxyXG4gICAgICAgICAgb3B0LFxyXG4gICAgICAgICAgJyBoYXMgYmVlbiBkZXByZWNhdGVkIHNpbmNlIHYnICsgdmVyc2lvbiArICcgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmVhciBmdXR1cmUnXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZGF0b3IgPyB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0cykgOiB0cnVlO1xyXG4gIH07XHJcbn07XHJcblxyXG52YWxpZGF0b3JzLnNwZWxsaW5nID0gZnVuY3Rpb24gc3BlbGxpbmcoY29ycmVjdFNwZWxsaW5nKSB7XHJcbiAgcmV0dXJuICh2YWx1ZSwgb3B0KSA9PiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgY29uc29sZS53YXJuKGAke29wdH0gaXMgbGlrZWx5IGEgbWlzc3BlbGxpbmcgb2YgJHtjb3JyZWN0U3BlbGxpbmd9YCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQXNzZXJ0IG9iamVjdCdzIHByb3BlcnRpZXMgdHlwZVxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge29iamVjdH0gc2NoZW1hXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGFsbG93VW5rbm93blxyXG4gKlxyXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGFzc2VydE9wdGlvbnMob3B0aW9ucywgc2NoZW1hLCBhbGxvd1Vua25vd24pIHtcclxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XHJcbiAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCcsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUpO1xyXG4gIH1cclxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XHJcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcclxuICB3aGlsZSAoaS0tID4gMCkge1xyXG4gICAgY29uc3Qgb3B0ID0ga2V5c1tpXTtcclxuICAgIGNvbnN0IHZhbGlkYXRvciA9IHNjaGVtYVtvcHRdO1xyXG4gICAgaWYgKHZhbGlkYXRvcikge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNbb3B0XTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0aW9ucyk7XHJcbiAgICAgIGlmIChyZXN1bHQgIT09IHRydWUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignb3B0aW9uICcgKyBvcHQgKyAnIG11c3QgYmUgJyArIHJlc3VsdCwgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTl9WQUxVRSk7XHJcbiAgICAgIH1cclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgICBpZiAoYWxsb3dVbmtub3duICE9PSB0cnVlKSB7XHJcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdVbmtub3duIG9wdGlvbiAnICsgb3B0LCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhc3NlcnRPcHRpb25zLFxyXG4gIHZhbGlkYXRvcnNcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgPyBCbG9iIDogbnVsbFxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnID8gRm9ybURhdGEgOiBudWxsO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgQXhpb3NVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyc7XHJcbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnID8gVVJMU2VhcmNoUGFyYW1zIDogQXhpb3NVUkxTZWFyY2hQYXJhbXM7XHJcbiIsImltcG9ydCBVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi9jbGFzc2VzL1VSTFNlYXJjaFBhcmFtcy5qcydcclxuaW1wb3J0IEZvcm1EYXRhIGZyb20gJy4vY2xhc3Nlcy9Gb3JtRGF0YS5qcydcclxuaW1wb3J0IEJsb2IgZnJvbSAnLi9jbGFzc2VzL0Jsb2IuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaXNCcm93c2VyOiB0cnVlLFxyXG4gIGNsYXNzZXM6IHtcclxuICAgIFVSTFNlYXJjaFBhcmFtcyxcclxuICAgIEZvcm1EYXRhLFxyXG4gICAgQmxvYlxyXG4gIH0sXHJcbiAgcHJvdG9jb2xzOiBbJ2h0dHAnLCAnaHR0cHMnLCAnZmlsZScsICdibG9iJywgJ3VybCcsICdkYXRhJ11cclxufTtcclxuIiwiY29uc3QgaGFzQnJvd3NlckVudiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XHJcblxyXG5jb25zdCBfbmF2aWdhdG9yID0gdHlwZW9mIG5hdmlnYXRvciA9PT0gJ29iamVjdCcgJiYgbmF2aWdhdG9yIHx8IHVuZGVmaW5lZDtcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcclxuICpcclxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cclxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxyXG4gKlxyXG4gKiB3ZWIgd29ya2VyczpcclxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXHJcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXHJcbiAqXHJcbiAqIHJlYWN0LW5hdGl2ZTpcclxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcclxuICogbmF0aXZlc2NyaXB0XHJcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuY29uc3QgaGFzU3RhbmRhcmRCcm93c2VyRW52ID0gaGFzQnJvd3NlckVudiAmJlxyXG4gICghX25hdmlnYXRvciB8fCBbJ1JlYWN0TmF0aXZlJywgJ05hdGl2ZVNjcmlwdCcsICdOUyddLmluZGV4T2YoX25hdmlnYXRvci5wcm9kdWN0KSA8IDApO1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciB3ZWJXb3JrZXIgZW52aXJvbm1lbnRcclxuICpcclxuICogQWx0aG91Z2ggdGhlIGBpc1N0YW5kYXJkQnJvd3NlckVudmAgbWV0aG9kIGluZGljYXRlcyB0aGF0XHJcbiAqIGBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlcmAsIHRoZSBXZWJXb3JrZXIgd2lsbCBzdGlsbCBiZVxyXG4gKiBmaWx0ZXJlZCBvdXQgZHVlIHRvIGl0cyBqdWRnbWVudCBzdGFuZGFyZFxyXG4gKiBgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ2AuXHJcbiAqIFRoaXMgbGVhZHMgdG8gYSBwcm9ibGVtIHdoZW4gYXhpb3MgcG9zdCBgRm9ybURhdGFgIGluIHdlYldvcmtlclxyXG4gKi9cclxuY29uc3QgaGFzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52ID0gKCgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbiAgICBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUgJiZcclxuICAgIHR5cGVvZiBzZWxmLmltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbidcclxuICApO1xyXG59KSgpO1xyXG5cclxuY29uc3Qgb3JpZ2luID0gaGFzQnJvd3NlckVudiAmJiB3aW5kb3cubG9jYXRpb24uaHJlZiB8fCAnaHR0cDovL2xvY2FsaG9zdCc7XHJcblxyXG5leHBvcnQge1xyXG4gIGhhc0Jyb3dzZXJFbnYsXHJcbiAgaGFzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52LFxyXG4gIGhhc1N0YW5kYXJkQnJvd3NlckVudixcclxuICBfbmF2aWdhdG9yIGFzIG5hdmlnYXRvcixcclxuICBvcmlnaW5cclxufVxyXG4iLCJpbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi9ub2RlL2luZGV4LmpzJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9jb21tb24vdXRpbHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIC4uLnV0aWxzLFxyXG4gIC4uLnBsYXRmb3JtXHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGJpbmQgZnJvbSAnLi9oZWxwZXJzL2JpbmQuanMnO1xyXG5cclxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcclxuXHJcbmNvbnN0IHt0b1N0cmluZ30gPSBPYmplY3QucHJvdG90eXBlO1xyXG5jb25zdCB7Z2V0UHJvdG90eXBlT2Z9ID0gT2JqZWN0O1xyXG5cclxuY29uc3Qga2luZE9mID0gKGNhY2hlID0+IHRoaW5nID0+IHtcclxuICAgIGNvbnN0IHN0ciA9IHRvU3RyaW5nLmNhbGwodGhpbmcpO1xyXG4gICAgcmV0dXJuIGNhY2hlW3N0cl0gfHwgKGNhY2hlW3N0cl0gPSBzdHIuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkpO1xyXG59KShPYmplY3QuY3JlYXRlKG51bGwpKTtcclxuXHJcbmNvbnN0IGtpbmRPZlRlc3QgPSAodHlwZSkgPT4ge1xyXG4gIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XHJcbiAgcmV0dXJuICh0aGluZykgPT4ga2luZE9mKHRoaW5nKSA9PT0gdHlwZVxyXG59XHJcblxyXG5jb25zdCB0eXBlT2ZUZXN0ID0gdHlwZSA9PiB0aGluZyA9PiB0eXBlb2YgdGhpbmcgPT09IHR5cGU7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAqL1xyXG5jb25zdCB7aXNBcnJheX0gPSBBcnJheTtcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcclxuICpcclxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAqL1xyXG5jb25zdCBpc1VuZGVmaW5lZCA9IHR5cGVPZlRlc3QoJ3VuZGVmaW5lZCcpO1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xyXG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXHJcbiAgICAmJiBpc0Z1bmN0aW9uKHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcikgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAqL1xyXG5jb25zdCBpc0FycmF5QnVmZmVyID0ga2luZE9mVGVzdCgnQXJyYXlCdWZmZXInKTtcclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcclxuICBsZXQgcmVzdWx0O1xyXG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcclxuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKGlzQXJyYXlCdWZmZXIodmFsLmJ1ZmZlcikpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcclxuICpcclxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxyXG4gKi9cclxuY29uc3QgaXNTdHJpbmcgPSB0eXBlT2ZUZXN0KCdzdHJpbmcnKTtcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxyXG4gKi9cclxuY29uc3QgaXNGdW5jdGlvbiA9IHR5cGVPZlRlc3QoJ2Z1bmN0aW9uJyk7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcclxuICpcclxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxyXG4gKi9cclxuY29uc3QgaXNOdW1iZXIgPSB0eXBlT2ZUZXN0KCdudW1iZXInKTtcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcclxuICpcclxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxyXG4gKi9cclxuY29uc3QgaXNPYmplY3QgPSAodGhpbmcpID0+IHRoaW5nICE9PSBudWxsICYmIHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCc7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCb29sZWFuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCb29sZWFuLCBvdGhlcndpc2UgZmFsc2VcclxuICovXHJcbmNvbnN0IGlzQm9vbGVhbiA9IHRoaW5nID0+IHRoaW5nID09PSB0cnVlIHx8IHRoaW5nID09PSBmYWxzZTtcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAqL1xyXG5jb25zdCBpc1BsYWluT2JqZWN0ID0gKHZhbCkgPT4ge1xyXG4gIGlmIChraW5kT2YodmFsKSAhPT0gJ29iamVjdCcpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKHZhbCk7XHJcbiAgcmV0dXJuIChwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpID09PSBudWxsKSAmJiAhKFN5bWJvbC50b1N0cmluZ1RhZyBpbiB2YWwpICYmICEoU3ltYm9sLml0ZXJhdG9yIGluIHZhbCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcclxuICpcclxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcclxuICovXHJcbmNvbnN0IGlzRGF0ZSA9IGtpbmRPZlRlc3QoJ0RhdGUnKTtcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcclxuICpcclxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcclxuICovXHJcbmNvbnN0IGlzRmlsZSA9IGtpbmRPZlRlc3QoJ0ZpbGUnKTtcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcclxuICpcclxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcclxuICovXHJcbmNvbnN0IGlzQmxvYiA9IGtpbmRPZlRlc3QoJ0Jsb2InKTtcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVMaXN0XHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAqL1xyXG5jb25zdCBpc0ZpbGVMaXN0ID0ga2luZE9mVGVzdCgnRmlsZUxpc3QnKTtcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAqL1xyXG5jb25zdCBpc1N0cmVhbSA9ICh2YWwpID0+IGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHRoaW5nIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcclxuICovXHJcbmNvbnN0IGlzRm9ybURhdGEgPSAodGhpbmcpID0+IHtcclxuICBsZXQga2luZDtcclxuICByZXR1cm4gdGhpbmcgJiYgKFxyXG4gICAgKHR5cGVvZiBGb3JtRGF0YSA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGluZyBpbnN0YW5jZW9mIEZvcm1EYXRhKSB8fCAoXHJcbiAgICAgIGlzRnVuY3Rpb24odGhpbmcuYXBwZW5kKSAmJiAoXHJcbiAgICAgICAgKGtpbmQgPSBraW5kT2YodGhpbmcpKSA9PT0gJ2Zvcm1kYXRhJyB8fFxyXG4gICAgICAgIC8vIGRldGVjdCBmb3JtLWRhdGEgaW5zdGFuY2VcclxuICAgICAgICAoa2luZCA9PT0gJ29iamVjdCcgJiYgaXNGdW5jdGlvbih0aGluZy50b1N0cmluZykgJiYgdGhpbmcudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgRm9ybURhdGFdJylcclxuICAgICAgKVxyXG4gICAgKVxyXG4gIClcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxyXG4gKi9cclxuY29uc3QgaXNVUkxTZWFyY2hQYXJhbXMgPSBraW5kT2ZUZXN0KCdVUkxTZWFyY2hQYXJhbXMnKTtcclxuXHJcbmNvbnN0IFtpc1JlYWRhYmxlU3RyZWFtLCBpc1JlcXVlc3QsIGlzUmVzcG9uc2UsIGlzSGVhZGVyc10gPSBbJ1JlYWRhYmxlU3RyZWFtJywgJ1JlcXVlc3QnLCAnUmVzcG9uc2UnLCAnSGVhZGVycyddLm1hcChraW5kT2ZUZXN0KTtcclxuXHJcbi8qKlxyXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cclxuICpcclxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxyXG4gKi9cclxuY29uc3QgdHJpbSA9IChzdHIpID0+IHN0ci50cmltID9cclxuICBzdHIudHJpbSgpIDogc3RyLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLCAnJyk7XHJcblxyXG4vKipcclxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXHJcbiAqXHJcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcclxuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXHJcbiAqXHJcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXHJcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cclxuICpcclxuICogQHBhcmFtIHtCb29sZWFufSBbYWxsT3duS2V5cyA9IGZhbHNlXVxyXG4gKiBAcmV0dXJucyB7YW55fVxyXG4gKi9cclxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuLCB7YWxsT3duS2V5cyA9IGZhbHNlfSA9IHt9KSB7XHJcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXHJcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IGk7XHJcbiAgbGV0IGw7XHJcblxyXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxyXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xyXG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXHJcbiAgICBvYmogPSBbb2JqXTtcclxuICB9XHJcblxyXG4gIGlmIChpc0FycmF5KG9iaikpIHtcclxuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcclxuICAgIGZvciAoaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcclxuICAgIGNvbnN0IGtleXMgPSBhbGxPd25LZXlzID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKSA6IE9iamVjdC5rZXlzKG9iaik7XHJcbiAgICBjb25zdCBsZW4gPSBrZXlzLmxlbmd0aDtcclxuICAgIGxldCBrZXk7XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgIGtleSA9IGtleXNbaV07XHJcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRLZXkob2JqLCBrZXkpIHtcclxuICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcclxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcclxuICBsZXQgaSA9IGtleXMubGVuZ3RoO1xyXG4gIGxldCBfa2V5O1xyXG4gIHdoaWxlIChpLS0gPiAwKSB7XHJcbiAgICBfa2V5ID0ga2V5c1tpXTtcclxuICAgIGlmIChrZXkgPT09IF9rZXkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICByZXR1cm4gX2tleTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IF9nbG9iYWwgPSAoKCkgPT4ge1xyXG4gIC8qZXNsaW50IG5vLXVuZGVmOjAqL1xyXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGdsb2JhbFRoaXM7XHJcbiAgcmV0dXJuIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbClcclxufSkoKTtcclxuXHJcbmNvbnN0IGlzQ29udGV4dERlZmluZWQgPSAoY29udGV4dCkgPT4gIWlzVW5kZWZpbmVkKGNvbnRleHQpICYmIGNvbnRleHQgIT09IF9nbG9iYWw7XHJcblxyXG4vKipcclxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxyXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cclxuICpcclxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cclxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxyXG4gKlxyXG4gKiBFeGFtcGxlOlxyXG4gKlxyXG4gKiBgYGBqc1xyXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XHJcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxyXG4gKiBgYGBcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xyXG4gKi9cclxuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XHJcbiAgY29uc3Qge2Nhc2VsZXNzfSA9IGlzQ29udGV4dERlZmluZWQodGhpcykgJiYgdGhpcyB8fCB7fTtcclxuICBjb25zdCByZXN1bHQgPSB7fTtcclxuICBjb25zdCBhc3NpZ25WYWx1ZSA9ICh2YWwsIGtleSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0S2V5ID0gY2FzZWxlc3MgJiYgZmluZEtleShyZXN1bHQsIGtleSkgfHwga2V5O1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W3RhcmdldEtleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xyXG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IG1lcmdlKHJlc3VsdFt0YXJnZXRLZXldLCB2YWwpO1xyXG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcclxuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSBtZXJnZSh7fSwgdmFsKTtcclxuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gdmFsLnNsaWNlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgYXJndW1lbnRzW2ldICYmIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cclxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXHJcbiAqXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2FsbE93bktleXNdXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcclxuICovXHJcbmNvbnN0IGV4dGVuZCA9IChhLCBiLCB0aGlzQXJnLCB7YWxsT3duS2V5c309IHt9KSA9PiB7XHJcbiAgZm9yRWFjaChiLCAodmFsLCBrZXkpID0+IHtcclxuICAgIGlmICh0aGlzQXJnICYmIGlzRnVuY3Rpb24odmFsKSkge1xyXG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhW2tleV0gPSB2YWw7XHJcbiAgICB9XHJcbiAgfSwge2FsbE93bktleXN9KTtcclxuICByZXR1cm4gYTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCB3aXRoIEJPTVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjb250ZW50IHZhbHVlIHdpdGhvdXQgQk9NXHJcbiAqL1xyXG5jb25zdCBzdHJpcEJPTSA9IChjb250ZW50KSA9PiB7XHJcbiAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XHJcbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgxKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXJcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge29iamVjdH0gW3Byb3BzXVxyXG4gKiBAcGFyYW0ge29iamVjdH0gW2Rlc2NyaXB0b3JzXVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICovXHJcbmNvbnN0IGluaGVyaXRzID0gKGNvbnN0cnVjdG9yLCBzdXBlckNvbnN0cnVjdG9yLCBwcm9wcywgZGVzY3JpcHRvcnMpID0+IHtcclxuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ29uc3RydWN0b3IucHJvdG90eXBlLCBkZXNjcmlwdG9ycyk7XHJcbiAgY29uc3RydWN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnN0cnVjdG9yLCAnc3VwZXInLCB7XHJcbiAgICB2YWx1ZTogc3VwZXJDb25zdHJ1Y3Rvci5wcm90b3R5cGVcclxuICB9KTtcclxuICBwcm9wcyAmJiBPYmplY3QuYXNzaWduKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvcHMpO1xyXG59XHJcblxyXG4vKipcclxuICogUmVzb2x2ZSBvYmplY3Qgd2l0aCBkZWVwIHByb3RvdHlwZSBjaGFpbiB0byBhIGZsYXQgb2JqZWN0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2VPYmogc291cmNlIG9iamVjdFxyXG4gKiBAcGFyYW0ge09iamVjdH0gW2Rlc3RPYmpdXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb258Qm9vbGVhbn0gW2ZpbHRlcl1cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Byb3BGaWx0ZXJdXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG5jb25zdCB0b0ZsYXRPYmplY3QgPSAoc291cmNlT2JqLCBkZXN0T2JqLCBmaWx0ZXIsIHByb3BGaWx0ZXIpID0+IHtcclxuICBsZXQgcHJvcHM7XHJcbiAgbGV0IGk7XHJcbiAgbGV0IHByb3A7XHJcbiAgY29uc3QgbWVyZ2VkID0ge307XHJcblxyXG4gIGRlc3RPYmogPSBkZXN0T2JqIHx8IHt9O1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxyXG4gIGlmIChzb3VyY2VPYmogPT0gbnVsbCkgcmV0dXJuIGRlc3RPYmo7XHJcblxyXG4gIGRvIHtcclxuICAgIHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlT2JqKTtcclxuICAgIGkgPSBwcm9wcy5sZW5ndGg7XHJcbiAgICB3aGlsZSAoaS0tID4gMCkge1xyXG4gICAgICBwcm9wID0gcHJvcHNbaV07XHJcbiAgICAgIGlmICgoIXByb3BGaWx0ZXIgfHwgcHJvcEZpbHRlcihwcm9wLCBzb3VyY2VPYmosIGRlc3RPYmopKSAmJiAhbWVyZ2VkW3Byb3BdKSB7XHJcbiAgICAgICAgZGVzdE9ialtwcm9wXSA9IHNvdXJjZU9ialtwcm9wXTtcclxuICAgICAgICBtZXJnZWRbcHJvcF0gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzb3VyY2VPYmogPSBmaWx0ZXIgIT09IGZhbHNlICYmIGdldFByb3RvdHlwZU9mKHNvdXJjZU9iaik7XHJcbiAgfSB3aGlsZSAoc291cmNlT2JqICYmICghZmlsdGVyIHx8IGZpbHRlcihzb3VyY2VPYmosIGRlc3RPYmopKSAmJiBzb3VyY2VPYmogIT09IE9iamVjdC5wcm90b3R5cGUpO1xyXG5cclxuICByZXR1cm4gZGVzdE9iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciBhIHN0cmluZyBlbmRzIHdpdGggdGhlIGNoYXJhY3RlcnMgb2YgYSBzcGVjaWZpZWQgc3RyaW5nXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcclxuICogQHBhcmFtIHtTdHJpbmd9IHNlYXJjaFN0cmluZ1xyXG4gKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uPSAwXVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmNvbnN0IGVuZHNXaXRoID0gKHN0ciwgc2VhcmNoU3RyaW5nLCBwb3NpdGlvbikgPT4ge1xyXG4gIHN0ciA9IFN0cmluZyhzdHIpO1xyXG4gIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHBvc2l0aW9uID4gc3RyLmxlbmd0aCkge1xyXG4gICAgcG9zaXRpb24gPSBzdHIubGVuZ3RoO1xyXG4gIH1cclxuICBwb3NpdGlvbiAtPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xyXG4gIGNvbnN0IGxhc3RJbmRleCA9IHN0ci5pbmRleE9mKHNlYXJjaFN0cmluZywgcG9zaXRpb24pO1xyXG4gIHJldHVybiBsYXN0SW5kZXggIT09IC0xICYmIGxhc3RJbmRleCA9PT0gcG9zaXRpb247XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBuZXcgYXJyYXkgZnJvbSBhcnJheSBsaWtlIG9iamVjdCBvciBudWxsIGlmIGZhaWxlZFxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IFt0aGluZ11cclxuICpcclxuICogQHJldHVybnMgez9BcnJheX1cclxuICovXHJcbmNvbnN0IHRvQXJyYXkgPSAodGhpbmcpID0+IHtcclxuICBpZiAoIXRoaW5nKSByZXR1cm4gbnVsbDtcclxuICBpZiAoaXNBcnJheSh0aGluZykpIHJldHVybiB0aGluZztcclxuICBsZXQgaSA9IHRoaW5nLmxlbmd0aDtcclxuICBpZiAoIWlzTnVtYmVyKGkpKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBhcnIgPSBuZXcgQXJyYXkoaSk7XHJcbiAgd2hpbGUgKGktLSA+IDApIHtcclxuICAgIGFycltpXSA9IHRoaW5nW2ldO1xyXG4gIH1cclxuICByZXR1cm4gYXJyO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2tpbmcgaWYgdGhlIFVpbnQ4QXJyYXkgZXhpc3RzIGFuZCBpZiBpdCBkb2VzLCBpdCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjaGVja3MgaWYgdGhlXHJcbiAqIHRoaW5nIHBhc3NlZCBpbiBpcyBhbiBpbnN0YW5jZSBvZiBVaW50OEFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSB7VHlwZWRBcnJheX1cclxuICpcclxuICogQHJldHVybnMge0FycmF5fVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcclxuY29uc3QgaXNUeXBlZEFycmF5ID0gKFR5cGVkQXJyYXkgPT4ge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXHJcbiAgcmV0dXJuIHRoaW5nID0+IHtcclxuICAgIHJldHVybiBUeXBlZEFycmF5ICYmIHRoaW5nIGluc3RhbmNlb2YgVHlwZWRBcnJheTtcclxuICB9O1xyXG59KSh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2V0UHJvdG90eXBlT2YoVWludDhBcnJheSkpO1xyXG5cclxuLyoqXHJcbiAqIEZvciBlYWNoIGVudHJ5IGluIHRoZSBvYmplY3QsIGNhbGwgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGtleSBhbmQgdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0PGFueSwgYW55Pn0gb2JqIC0gVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggZW50cnkuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHt2b2lkfVxyXG4gKi9cclxuY29uc3QgZm9yRWFjaEVudHJ5ID0gKG9iaiwgZm4pID0+IHtcclxuICBjb25zdCBnZW5lcmF0b3IgPSBvYmogJiYgb2JqW1N5bWJvbC5pdGVyYXRvcl07XHJcblxyXG4gIGNvbnN0IGl0ZXJhdG9yID0gZ2VuZXJhdG9yLmNhbGwob2JqKTtcclxuXHJcbiAgbGV0IHJlc3VsdDtcclxuXHJcbiAgd2hpbGUgKChyZXN1bHQgPSBpdGVyYXRvci5uZXh0KCkpICYmICFyZXN1bHQuZG9uZSkge1xyXG4gICAgY29uc3QgcGFpciA9IHJlc3VsdC52YWx1ZTtcclxuICAgIGZuLmNhbGwob2JqLCBwYWlyWzBdLCBwYWlyWzFdKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJdCB0YWtlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBhbmQgYSBzdHJpbmcsIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIGFsbCB0aGUgbWF0Y2hlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVnRXhwIC0gVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCBhZ2FpbnN0LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBzZWFyY2guXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtBcnJheTxib29sZWFuPn1cclxuICovXHJcbmNvbnN0IG1hdGNoQWxsID0gKHJlZ0V4cCwgc3RyKSA9PiB7XHJcbiAgbGV0IG1hdGNoZXM7XHJcbiAgY29uc3QgYXJyID0gW107XHJcblxyXG4gIHdoaWxlICgobWF0Y2hlcyA9IHJlZ0V4cC5leGVjKHN0cikpICE9PSBudWxsKSB7XHJcbiAgICBhcnIucHVzaChtYXRjaGVzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhcnI7XHJcbn1cclxuXHJcbi8qIENoZWNraW5nIGlmIHRoZSBraW5kT2ZUZXN0IGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSB3aGVuIHBhc3NlZCBhbiBIVE1MRm9ybUVsZW1lbnQuICovXHJcbmNvbnN0IGlzSFRNTEZvcm0gPSBraW5kT2ZUZXN0KCdIVE1MRm9ybUVsZW1lbnQnKTtcclxuXHJcbmNvbnN0IHRvQ2FtZWxDYXNlID0gc3RyID0+IHtcclxuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWy1fXFxzXShbYS16XFxkXSkoXFx3KikvZyxcclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VyKG0sIHAxLCBwMikge1xyXG4gICAgICByZXR1cm4gcDEudG9VcHBlckNhc2UoKSArIHAyO1xyXG4gICAgfVxyXG4gICk7XHJcbn07XHJcblxyXG4vKiBDcmVhdGluZyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBpZiBhbiBvYmplY3QgaGFzIGEgcHJvcGVydHkuICovXHJcbmNvbnN0IGhhc093blByb3BlcnR5ID0gKCh7aGFzT3duUHJvcGVydHl9KSA9PiAob2JqLCBwcm9wKSA9PiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpKE9iamVjdC5wcm90b3R5cGUpO1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgUmVnRXhwIG9iamVjdFxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFJlZ0V4cCBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxyXG4gKi9cclxuY29uc3QgaXNSZWdFeHAgPSBraW5kT2ZUZXN0KCdSZWdFeHAnKTtcclxuXHJcbmNvbnN0IHJlZHVjZURlc2NyaXB0b3JzID0gKG9iaiwgcmVkdWNlcikgPT4ge1xyXG4gIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKTtcclxuICBjb25zdCByZWR1Y2VkRGVzY3JpcHRvcnMgPSB7fTtcclxuXHJcbiAgZm9yRWFjaChkZXNjcmlwdG9ycywgKGRlc2NyaXB0b3IsIG5hbWUpID0+IHtcclxuICAgIGxldCByZXQ7XHJcbiAgICBpZiAoKHJldCA9IHJlZHVjZXIoZGVzY3JpcHRvciwgbmFtZSwgb2JqKSkgIT09IGZhbHNlKSB7XHJcbiAgICAgIHJlZHVjZWREZXNjcmlwdG9yc1tuYW1lXSA9IHJldCB8fCBkZXNjcmlwdG9yO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvYmosIHJlZHVjZWREZXNjcmlwdG9ycyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlcyBhbGwgbWV0aG9kcyByZWFkLW9ubHlcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKi9cclxuXHJcbmNvbnN0IGZyZWV6ZU1ldGhvZHMgPSAob2JqKSA9PiB7XHJcbiAgcmVkdWNlRGVzY3JpcHRvcnMob2JqLCAoZGVzY3JpcHRvciwgbmFtZSkgPT4ge1xyXG4gICAgLy8gc2tpcCByZXN0cmljdGVkIHByb3BzIGluIHN0cmljdCBtb2RlXHJcbiAgICBpZiAoaXNGdW5jdGlvbihvYmopICYmIFsnYXJndW1lbnRzJywgJ2NhbGxlcicsICdjYWxsZWUnXS5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSBvYmpbbmFtZV07XHJcblxyXG4gICAgaWYgKCFpc0Z1bmN0aW9uKHZhbHVlKSkgcmV0dXJuO1xyXG5cclxuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmICgnd3JpdGFibGUnIGluIGRlc2NyaXB0b3IpIHtcclxuICAgICAgZGVzY3JpcHRvci53cml0YWJsZSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFkZXNjcmlwdG9yLnNldCkge1xyXG4gICAgICBkZXNjcmlwdG9yLnNldCA9ICgpID0+IHtcclxuICAgICAgICB0aHJvdyBFcnJvcignQ2FuIG5vdCByZXdyaXRlIHJlYWQtb25seSBtZXRob2QgXFwnJyArIG5hbWUgKyAnXFwnJyk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHRvT2JqZWN0U2V0ID0gKGFycmF5T3JTdHJpbmcsIGRlbGltaXRlcikgPT4ge1xyXG4gIGNvbnN0IG9iaiA9IHt9O1xyXG5cclxuICBjb25zdCBkZWZpbmUgPSAoYXJyKSA9PiB7XHJcbiAgICBhcnIuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgIG9ialt2YWx1ZV0gPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc0FycmF5KGFycmF5T3JTdHJpbmcpID8gZGVmaW5lKGFycmF5T3JTdHJpbmcpIDogZGVmaW5lKFN0cmluZyhhcnJheU9yU3RyaW5nKS5zcGxpdChkZWxpbWl0ZXIpKTtcclxuXHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XHJcblxyXG5jb25zdCB0b0Zpbml0ZU51bWJlciA9ICh2YWx1ZSwgZGVmYXVsdFZhbHVlKSA9PiB7XHJcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlID0gK3ZhbHVlKSA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xyXG59XHJcblxyXG5jb25zdCBBTFBIQSA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eidcclxuXHJcbmNvbnN0IERJR0lUID0gJzAxMjM0NTY3ODknO1xyXG5cclxuY29uc3QgQUxQSEFCRVQgPSB7XHJcbiAgRElHSVQsXHJcbiAgQUxQSEEsXHJcbiAgQUxQSEFfRElHSVQ6IEFMUEhBICsgQUxQSEEudG9VcHBlckNhc2UoKSArIERJR0lUXHJcbn1cclxuXHJcbmNvbnN0IGdlbmVyYXRlU3RyaW5nID0gKHNpemUgPSAxNiwgYWxwaGFiZXQgPSBBTFBIQUJFVC5BTFBIQV9ESUdJVCkgPT4ge1xyXG4gIGxldCBzdHIgPSAnJztcclxuICBjb25zdCB7bGVuZ3RofSA9IGFscGhhYmV0O1xyXG4gIHdoaWxlIChzaXplLS0pIHtcclxuICAgIHN0ciArPSBhbHBoYWJldFtNYXRoLnJhbmRvbSgpICogbGVuZ3RofDBdXHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RyO1xyXG59XHJcblxyXG4vKipcclxuICogSWYgdGhlIHRoaW5nIGlzIGEgRm9ybURhdGEgb2JqZWN0LCByZXR1cm4gdHJ1ZSwgb3RoZXJ3aXNlIHJldHVybiBmYWxzZS5cclxuICpcclxuICogQHBhcmFtIHt1bmtub3dufSB0aGluZyAtIFRoZSB0aGluZyB0byBjaGVjay5cclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1NwZWNDb21wbGlhbnRGb3JtKHRoaW5nKSB7XHJcbiAgcmV0dXJuICEhKHRoaW5nICYmIGlzRnVuY3Rpb24odGhpbmcuYXBwZW5kKSAmJiB0aGluZ1tTeW1ib2wudG9TdHJpbmdUYWddID09PSAnRm9ybURhdGEnICYmIHRoaW5nW1N5bWJvbC5pdGVyYXRvcl0pO1xyXG59XHJcblxyXG5jb25zdCB0b0pTT05PYmplY3QgPSAob2JqKSA9PiB7XHJcbiAgY29uc3Qgc3RhY2sgPSBuZXcgQXJyYXkoMTApO1xyXG5cclxuICBjb25zdCB2aXNpdCA9IChzb3VyY2UsIGkpID0+IHtcclxuXHJcbiAgICBpZiAoaXNPYmplY3Qoc291cmNlKSkge1xyXG4gICAgICBpZiAoc3RhY2suaW5kZXhPZihzb3VyY2UpID49IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCEoJ3RvSlNPTicgaW4gc291cmNlKSkge1xyXG4gICAgICAgIHN0YWNrW2ldID0gc291cmNlO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGlzQXJyYXkoc291cmNlKSA/IFtdIDoge307XHJcblxyXG4gICAgICAgIGZvckVhY2goc291cmNlLCAodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVkdWNlZFZhbHVlID0gdmlzaXQodmFsdWUsIGkgKyAxKTtcclxuICAgICAgICAgICFpc1VuZGVmaW5lZChyZWR1Y2VkVmFsdWUpICYmICh0YXJnZXRba2V5XSA9IHJlZHVjZWRWYWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN0YWNrW2ldID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNvdXJjZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB2aXNpdChvYmosIDApO1xyXG59XHJcblxyXG5jb25zdCBpc0FzeW5jRm4gPSBraW5kT2ZUZXN0KCdBc3luY0Z1bmN0aW9uJyk7XHJcblxyXG5jb25zdCBpc1RoZW5hYmxlID0gKHRoaW5nKSA9PlxyXG4gIHRoaW5nICYmIChpc09iamVjdCh0aGluZykgfHwgaXNGdW5jdGlvbih0aGluZykpICYmIGlzRnVuY3Rpb24odGhpbmcudGhlbikgJiYgaXNGdW5jdGlvbih0aGluZy5jYXRjaCk7XHJcblxyXG4vLyBvcmlnaW5hbCBjb2RlXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EaWdpdGFsQnJhaW5KUy9BeGlvc1Byb21pc2UvYmxvYi8xNmRlYWIxMzcxMGVjMDk3Nzk5MjIxMzFmM2ZhNTk1NDMyMGY4M2FiL2xpYi91dGlscy5qcyNMMTEtTDM0XHJcblxyXG5jb25zdCBfc2V0SW1tZWRpYXRlID0gKChzZXRJbW1lZGlhdGVTdXBwb3J0ZWQsIHBvc3RNZXNzYWdlU3VwcG9ydGVkKSA9PiB7XHJcbiAgaWYgKHNldEltbWVkaWF0ZVN1cHBvcnRlZCkge1xyXG4gICAgcmV0dXJuIHNldEltbWVkaWF0ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwb3N0TWVzc2FnZVN1cHBvcnRlZCA/ICgodG9rZW4sIGNhbGxiYWNrcykgPT4ge1xyXG4gICAgX2dsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoe3NvdXJjZSwgZGF0YX0pID0+IHtcclxuICAgICAgaWYgKHNvdXJjZSA9PT0gX2dsb2JhbCAmJiBkYXRhID09PSB0b2tlbikge1xyXG4gICAgICAgIGNhbGxiYWNrcy5sZW5ndGggJiYgY2FsbGJhY2tzLnNoaWZ0KCkoKTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoY2IpID0+IHtcclxuICAgICAgY2FsbGJhY2tzLnB1c2goY2IpO1xyXG4gICAgICBfZ2xvYmFsLnBvc3RNZXNzYWdlKHRva2VuLCBcIipcIik7XHJcbiAgICB9XHJcbiAgfSkoYGF4aW9zQCR7TWF0aC5yYW5kb20oKX1gLCBbXSkgOiAoY2IpID0+IHNldFRpbWVvdXQoY2IpO1xyXG59KShcclxuICB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nLFxyXG4gIGlzRnVuY3Rpb24oX2dsb2JhbC5wb3N0TWVzc2FnZSlcclxuKTtcclxuXHJcbmNvbnN0IGFzYXAgPSB0eXBlb2YgcXVldWVNaWNyb3Rhc2sgIT09ICd1bmRlZmluZWQnID9cclxuICBxdWV1ZU1pY3JvdGFzay5iaW5kKF9nbG9iYWwpIDogKCB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5uZXh0VGljayB8fCBfc2V0SW1tZWRpYXRlKTtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGlzQXJyYXksXHJcbiAgaXNBcnJheUJ1ZmZlcixcclxuICBpc0J1ZmZlcixcclxuICBpc0Zvcm1EYXRhLFxyXG4gIGlzQXJyYXlCdWZmZXJWaWV3LFxyXG4gIGlzU3RyaW5nLFxyXG4gIGlzTnVtYmVyLFxyXG4gIGlzQm9vbGVhbixcclxuICBpc09iamVjdCxcclxuICBpc1BsYWluT2JqZWN0LFxyXG4gIGlzUmVhZGFibGVTdHJlYW0sXHJcbiAgaXNSZXF1ZXN0LFxyXG4gIGlzUmVzcG9uc2UsXHJcbiAgaXNIZWFkZXJzLFxyXG4gIGlzVW5kZWZpbmVkLFxyXG4gIGlzRGF0ZSxcclxuICBpc0ZpbGUsXHJcbiAgaXNCbG9iLFxyXG4gIGlzUmVnRXhwLFxyXG4gIGlzRnVuY3Rpb24sXHJcbiAgaXNTdHJlYW0sXHJcbiAgaXNVUkxTZWFyY2hQYXJhbXMsXHJcbiAgaXNUeXBlZEFycmF5LFxyXG4gIGlzRmlsZUxpc3QsXHJcbiAgZm9yRWFjaCxcclxuICBtZXJnZSxcclxuICBleHRlbmQsXHJcbiAgdHJpbSxcclxuICBzdHJpcEJPTSxcclxuICBpbmhlcml0cyxcclxuICB0b0ZsYXRPYmplY3QsXHJcbiAga2luZE9mLFxyXG4gIGtpbmRPZlRlc3QsXHJcbiAgZW5kc1dpdGgsXHJcbiAgdG9BcnJheSxcclxuICBmb3JFYWNoRW50cnksXHJcbiAgbWF0Y2hBbGwsXHJcbiAgaXNIVE1MRm9ybSxcclxuICBoYXNPd25Qcm9wZXJ0eSxcclxuICBoYXNPd25Qcm9wOiBoYXNPd25Qcm9wZXJ0eSwgLy8gYW4gYWxpYXMgdG8gYXZvaWQgRVNMaW50IG5vLXByb3RvdHlwZS1idWlsdGlucyBkZXRlY3Rpb25cclxuICByZWR1Y2VEZXNjcmlwdG9ycyxcclxuICBmcmVlemVNZXRob2RzLFxyXG4gIHRvT2JqZWN0U2V0LFxyXG4gIHRvQ2FtZWxDYXNlLFxyXG4gIG5vb3AsXHJcbiAgdG9GaW5pdGVOdW1iZXIsXHJcbiAgZmluZEtleSxcclxuICBnbG9iYWw6IF9nbG9iYWwsXHJcbiAgaXNDb250ZXh0RGVmaW5lZCxcclxuICBBTFBIQUJFVCxcclxuICBnZW5lcmF0ZVN0cmluZyxcclxuICBpc1NwZWNDb21wbGlhbnRGb3JtLFxyXG4gIHRvSlNPTk9iamVjdCxcclxuICBpc0FzeW5jRm4sXHJcbiAgaXNUaGVuYWJsZSxcclxuICBzZXRJbW1lZGlhdGU6IF9zZXRJbW1lZGlhdGUsXHJcbiAgYXNhcFxyXG59O1xyXG4iLCIvLyBzcmMvdXRpbHMvZm9ybWF0UHJvZEVycm9yTWVzc2FnZS50c1xyXG5mdW5jdGlvbiBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKGNvZGUpIHtcclxuICByZXR1cm4gYE1pbmlmaWVkIFJlZHV4IGVycm9yICMke2NvZGV9OyB2aXNpdCBodHRwczovL3JlZHV4LmpzLm9yZy9FcnJvcnM/Y29kZT0ke2NvZGV9IGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMuIGA7XHJcbn1cclxuXHJcbi8vIHNyYy91dGlscy9zeW1ib2wtb2JzZXJ2YWJsZS50c1xyXG52YXIgJCRvYnNlcnZhYmxlID0gLyogQF9fUFVSRV9fICovICgoKSA9PiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLm9ic2VydmFibGUgfHwgXCJAQG9ic2VydmFibGVcIikoKTtcclxudmFyIHN5bWJvbF9vYnNlcnZhYmxlX2RlZmF1bHQgPSAkJG9ic2VydmFibGU7XHJcblxyXG4vLyBzcmMvdXRpbHMvYWN0aW9uVHlwZXMudHNcclxudmFyIHJhbmRvbVN0cmluZyA9ICgpID0+IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdChcIlwiKS5qb2luKFwiLlwiKTtcclxudmFyIEFjdGlvblR5cGVzID0ge1xyXG4gIElOSVQ6IGBAQHJlZHV4L0lOSVQkey8qIEBfX1BVUkVfXyAqLyByYW5kb21TdHJpbmcoKX1gLFxyXG4gIFJFUExBQ0U6IGBAQHJlZHV4L1JFUExBQ0Ukey8qIEBfX1BVUkVfXyAqLyByYW5kb21TdHJpbmcoKX1gLFxyXG4gIFBST0JFX1VOS05PV05fQUNUSU9OOiAoKSA9PiBgQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTiR7cmFuZG9tU3RyaW5nKCl9YFxyXG59O1xyXG52YXIgYWN0aW9uVHlwZXNfZGVmYXVsdCA9IEFjdGlvblR5cGVzO1xyXG5cclxuLy8gc3JjL3V0aWxzL2lzUGxhaW5PYmplY3QudHNcclxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcclxuICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiB8fCBvYmogPT09IG51bGwpXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgbGV0IHByb3RvID0gb2JqO1xyXG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pICE9PSBudWxsKSB7XHJcbiAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90byk7XHJcbiAgfVxyXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gcHJvdG8gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT09IG51bGw7XHJcbn1cclxuXHJcbi8vIHNyYy91dGlscy9raW5kT2YudHNcclxuZnVuY3Rpb24gbWluaUtpbmRPZih2YWwpIHtcclxuICBpZiAodmFsID09PSB2b2lkIDApXHJcbiAgICByZXR1cm4gXCJ1bmRlZmluZWRcIjtcclxuICBpZiAodmFsID09PSBudWxsKVxyXG4gICAgcmV0dXJuIFwibnVsbFwiO1xyXG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBcImJvb2xlYW5cIjpcclxuICAgIGNhc2UgXCJzdHJpbmdcIjpcclxuICAgIGNhc2UgXCJudW1iZXJcIjpcclxuICAgIGNhc2UgXCJzeW1ib2xcIjpcclxuICAgIGNhc2UgXCJmdW5jdGlvblwiOiB7XHJcbiAgICAgIHJldHVybiB0eXBlO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgcmV0dXJuIFwiYXJyYXlcIjtcclxuICBpZiAoaXNEYXRlKHZhbCkpXHJcbiAgICByZXR1cm4gXCJkYXRlXCI7XHJcbiAgaWYgKGlzRXJyb3IodmFsKSlcclxuICAgIHJldHVybiBcImVycm9yXCI7XHJcbiAgY29uc3QgY29uc3RydWN0b3JOYW1lID0gY3Rvck5hbWUodmFsKTtcclxuICBzd2l0Y2ggKGNvbnN0cnVjdG9yTmFtZSkge1xyXG4gICAgY2FzZSBcIlN5bWJvbFwiOlxyXG4gICAgY2FzZSBcIlByb21pc2VcIjpcclxuICAgIGNhc2UgXCJXZWFrTWFwXCI6XHJcbiAgICBjYXNlIFwiV2Vha1NldFwiOlxyXG4gICAgY2FzZSBcIk1hcFwiOlxyXG4gICAgY2FzZSBcIlNldFwiOlxyXG4gICAgICByZXR1cm4gY29uc3RydWN0b3JOYW1lO1xyXG4gIH1cclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xyXG59XHJcbmZ1bmN0aW9uIGN0b3JOYW1lKHZhbCkge1xyXG4gIHJldHVybiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yID09PSBcImZ1bmN0aW9uXCIgPyB2YWwuY29uc3RydWN0b3IubmFtZSA6IG51bGw7XHJcbn1cclxuZnVuY3Rpb24gaXNFcnJvcih2YWwpIHtcclxuICByZXR1cm4gdmFsIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIHZhbC5tZXNzYWdlID09PSBcInN0cmluZ1wiICYmIHZhbC5jb25zdHJ1Y3RvciAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLnN0YWNrVHJhY2VMaW1pdCA9PT0gXCJudW1iZXJcIjtcclxufVxyXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XHJcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIERhdGUpXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICByZXR1cm4gdHlwZW9mIHZhbC50b0RhdGVTdHJpbmcgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgdmFsLmdldERhdGUgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgdmFsLnNldERhdGUgPT09IFwiZnVuY3Rpb25cIjtcclxufVxyXG5mdW5jdGlvbiBraW5kT2YodmFsKSB7XHJcbiAgbGV0IHR5cGVPZlZhbCA9IHR5cGVvZiB2YWw7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgdHlwZU9mVmFsID0gbWluaUtpbmRPZih2YWwpO1xyXG4gIH1cclxuICByZXR1cm4gdHlwZU9mVmFsO1xyXG59XHJcblxyXG4vLyBzcmMvY3JlYXRlU3RvcmUudHNcclxuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XHJcbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDIpIDogYEV4cGVjdGVkIHRoZSByb290IHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICcke2tpbmRPZihyZWR1Y2VyKX0nYCk7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgZW5oYW5jZXIgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgZW5oYW5jZXIgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgYXJndW1lbnRzWzNdID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDApIDogXCJJdCBsb29rcyBsaWtlIHlvdSBhcmUgcGFzc2luZyBzZXZlcmFsIHN0b3JlIGVuaGFuY2VycyB0byBjcmVhdGVTdG9yZSgpLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEluc3RlYWQsIGNvbXBvc2UgdGhlbSB0b2dldGhlciB0byBhIHNpbmdsZSBmdW5jdGlvbi4gU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL3R1dG9yaWFscy9mdW5kYW1lbnRhbHMvcGFydC00LXN0b3JlI2NyZWF0aW5nLWEtc3RvcmUtd2l0aC1lbmhhbmNlcnMgZm9yIGFuIGV4YW1wbGUuXCIpO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGVuaGFuY2VyID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBlbmhhbmNlciA9IHByZWxvYWRlZFN0YXRlO1xyXG4gICAgcHJlbG9hZGVkU3RhdGUgPSB2b2lkIDA7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxKSA6IGBFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICcke2tpbmRPZihlbmhhbmNlcil9J2ApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSk7XHJcbiAgfVxyXG4gIGxldCBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XHJcbiAgbGV0IGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xyXG4gIGxldCBjdXJyZW50TGlzdGVuZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcclxuICBsZXQgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XHJcbiAgbGV0IGxpc3RlbmVySWRDb3VudGVyID0gMDtcclxuICBsZXQgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xyXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XHJcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xyXG4gICAgICBuZXh0TGlzdGVuZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcclxuICAgICAgY3VycmVudExpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lciwga2V5KSA9PiB7XHJcbiAgICAgICAgbmV4dExpc3RlbmVycy5zZXQoa2V5LCBsaXN0ZW5lcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcclxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDMpIDogXCJZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLmdldFN0YXRlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiBUaGUgcmVkdWNlciBoYXMgYWxyZWFkeSByZWNlaXZlZCB0aGUgc3RhdGUgYXMgYW4gYXJndW1lbnQuIFBhc3MgaXQgZG93biBmcm9tIHRoZSB0b3AgcmVkdWNlciBpbnN0ZWFkIG9mIHJlYWRpbmcgaXQgZnJvbSB0aGUgc3RvcmUuXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XHJcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNCkgOiBgRXhwZWN0ZWQgdGhlIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnJHtraW5kT2YobGlzdGVuZXIpfSdgKTtcclxuICAgIH1cclxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDUpIDogXCJZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLnN1YnNjcmliZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gSWYgeW91IHdvdWxkIGxpa2UgdG8gYmUgbm90aWZpZWQgYWZ0ZXIgdGhlIHN0b3JlIGhhcyBiZWVuIHVwZGF0ZWQsIHN1YnNjcmliZSBmcm9tIGEgY29tcG9uZW50IGFuZCBpbnZva2Ugc3RvcmUuZ2V0U3RhdGUoKSBpbiB0aGUgY2FsbGJhY2sgdG8gYWNjZXNzIHRoZSBsYXRlc3Qgc3RhdGUuIFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGkvc3RvcmUjc3Vic2NyaWJlbGlzdGVuZXIgZm9yIG1vcmUgZGV0YWlscy5cIik7XHJcbiAgICB9XHJcbiAgICBsZXQgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcclxuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcclxuICAgIGNvbnN0IGxpc3RlbmVySWQgPSBsaXN0ZW5lcklkQ291bnRlcisrO1xyXG4gICAgbmV4dExpc3RlbmVycy5zZXQobGlzdGVuZXJJZCwgbGlzdGVuZXIpO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNEaXNwYXRjaGluZykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDYpIDogXCJZb3UgbWF5IG5vdCB1bnN1YnNjcmliZSBmcm9tIGEgc3RvcmUgbGlzdGVuZXIgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpL3N0b3JlI3N1YnNjcmliZWxpc3RlbmVyIGZvciBtb3JlIGRldGFpbHMuXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xyXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XHJcbiAgICAgIG5leHRMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVySWQpO1xyXG4gICAgICBjdXJyZW50TGlzdGVuZXJzID0gbnVsbDtcclxuICAgIH07XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xyXG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNykgOiBgQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuIEluc3RlYWQsIHRoZSBhY3R1YWwgdHlwZSB3YXM6ICcke2tpbmRPZihhY3Rpb24pfScuIFlvdSBtYXkgbmVlZCB0byBhZGQgbWlkZGxld2FyZSB0byB5b3VyIHN0b3JlIHNldHVwIHRvIGhhbmRsZSBkaXNwYXRjaGluZyBvdGhlciB2YWx1ZXMsIHN1Y2ggYXMgJ3JlZHV4LXRodW5rJyB0byBoYW5kbGUgZGlzcGF0Y2hpbmcgZnVuY3Rpb25zLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTQtc3RvcmUjbWlkZGxld2FyZSBhbmQgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTYtYXN5bmMtbG9naWMjdXNpbmctdGhlLXJlZHV4LXRodW5rLW1pZGRsZXdhcmUgZm9yIGV4YW1wbGVzLmApO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg4KSA6ICdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuIFlvdSBtYXkgaGF2ZSBtaXNzcGVsbGVkIGFuIGFjdGlvbiB0eXBlIHN0cmluZyBjb25zdGFudC4nKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTcpIDogYEFjdGlvbiBcInR5cGVcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgc3RyaW5nLiBJbnN0ZWFkLCB0aGUgYWN0dWFsIHR5cGUgd2FzOiAnJHtraW5kT2YoYWN0aW9uLnR5cGUpfScuIFZhbHVlIHdhczogJyR7YWN0aW9uLnR5cGV9JyAoc3RyaW5naWZpZWQpYCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg5KSA6IFwiUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLlwiKTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xyXG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50UmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcclxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xyXG4gICAgICBsaXN0ZW5lcigpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYWN0aW9uO1xyXG4gIH1cclxuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xyXG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEwKSA6IGBFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICcke2tpbmRPZihuZXh0UmVkdWNlcil9YCk7XHJcbiAgICB9XHJcbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBhY3Rpb25UeXBlc19kZWZhdWx0LlJFUExBQ0VcclxuICAgIH0pO1xyXG4gIH1cclxuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xyXG4gICAgY29uc3Qgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAvKipcclxuICAgICAgICogVGhlIG1pbmltYWwgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24gbWV0aG9kLlxyXG4gICAgICAgKiBAcGFyYW0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxyXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cclxuICAgICAgICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggYW4gYHVuc3Vic2NyaWJlYCBtZXRob2QgdGhhdCBjYW5cclxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cclxuICAgICAgICovXHJcbiAgICAgIHN1YnNjcmliZShvYnNlcnZlcikge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09IFwib2JqZWN0XCIgfHwgb2JzZXJ2ZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDExKSA6IGBFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LiBJbnN0ZWFkLCByZWNlaXZlZDogJyR7a2luZE9mKG9ic2VydmVyKX0nYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcclxuICAgICAgICAgIGNvbnN0IG9ic2VydmVyQXNPYnNlcnZlciA9IG9ic2VydmVyO1xyXG4gICAgICAgICAgaWYgKG9ic2VydmVyQXNPYnNlcnZlci5uZXh0KSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyQXNPYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcclxuICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IG91dGVyU3Vic2NyaWJlKG9ic2VydmVTdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHVuc3Vic2NyaWJlXHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuICAgICAgW3N5bWJvbF9vYnNlcnZhYmxlX2RlZmF1bHRdKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBhY3Rpb25UeXBlc19kZWZhdWx0LklOSVRcclxuICB9KTtcclxuICBjb25zdCBzdG9yZSA9IHtcclxuICAgIGRpc3BhdGNoLFxyXG4gICAgc3Vic2NyaWJlLFxyXG4gICAgZ2V0U3RhdGUsXHJcbiAgICByZXBsYWNlUmVkdWNlcixcclxuICAgIFtzeW1ib2xfb2JzZXJ2YWJsZV9kZWZhdWx0XTogb2JzZXJ2YWJsZVxyXG4gIH07XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59XHJcbmZ1bmN0aW9uIGxlZ2FjeV9jcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcclxuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKTtcclxufVxyXG5cclxuLy8gc3JjL3V0aWxzL3dhcm5pbmcudHNcclxuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XHJcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gIH1cclxufVxyXG5cclxuLy8gc3JjL2NvbWJpbmVSZWR1Y2Vycy50c1xyXG5mdW5jdGlvbiBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKGlucHV0U3RhdGUsIHJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSkge1xyXG4gIGNvbnN0IHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xyXG4gIGNvbnN0IGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gYWN0aW9uVHlwZXNfZGVmYXVsdC5JTklUID8gXCJwcmVsb2FkZWRTdGF0ZSBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU3RvcmVcIiA6IFwicHJldmlvdXMgc3RhdGUgcmVjZWl2ZWQgYnkgdGhlIHJlZHVjZXJcIjtcclxuICBpZiAocmVkdWNlcktleXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gXCJTdG9yZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcmVkdWNlci4gTWFrZSBzdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgdG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLlwiO1xyXG4gIH1cclxuICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXRTdGF0ZSkpIHtcclxuICAgIHJldHVybiBgVGhlICR7YXJndW1lbnROYW1lfSBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFwiJHtraW5kT2YoaW5wdXRTdGF0ZSl9XCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcga2V5czogXCIke3JlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpfVwiYDtcclxuICB9XHJcbiAgY29uc3QgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoKGtleSkgPT4gIXJlZHVjZXJzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldKTtcclxuICB1bmV4cGVjdGVkS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldID0gdHJ1ZTtcclxuICB9KTtcclxuICBpZiAoYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBhY3Rpb25UeXBlc19kZWZhdWx0LlJFUExBQ0UpXHJcbiAgICByZXR1cm47XHJcbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiBgVW5leHBlY3RlZCAke3VuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyBcImtleXNcIiA6IFwia2V5XCJ9IFwiJHt1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKX1cIiBmb3VuZCBpbiAke2FyZ3VtZW50TmFtZX0uIEV4cGVjdGVkIHRvIGZpbmQgb25lIG9mIHRoZSBrbm93biByZWR1Y2VyIGtleXMgaW5zdGVhZDogXCIke3JlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpfVwiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLmA7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGFzc2VydFJlZHVjZXJTaGFwZShyZWR1Y2Vycykge1xyXG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih2b2lkIDAsIHtcclxuICAgICAgdHlwZTogYWN0aW9uVHlwZXNfZGVmYXVsdC5JTklUXHJcbiAgICB9KTtcclxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEyKSA6IGBUaGUgc2xpY2UgcmVkdWNlciBmb3Iga2V5IFwiJHtrZXl9XCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gSWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGUgcmVkdWNlciBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgbm90IGJlIHVuZGVmaW5lZC4gSWYgeW91IGRvbid0IHdhbnQgdG8gc2V0IGEgdmFsdWUgZm9yIHRoaXMgcmVkdWNlciwgeW91IGNhbiB1c2UgbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5gKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgcmVkdWNlcih2b2lkIDAsIHtcclxuICAgICAgdHlwZTogYWN0aW9uVHlwZXNfZGVmYXVsdC5QUk9CRV9VTktOT1dOX0FDVElPTigpXHJcbiAgICB9KSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMykgOiBgVGhlIHNsaWNlIHJlZHVjZXIgZm9yIGtleSBcIiR7a2V5fVwiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuIERvbid0IHRyeSB0byBoYW5kbGUgJyR7YWN0aW9uVHlwZXNfZGVmYXVsdC5JTklUfScgb3Igb3RoZXIgYWN0aW9ucyBpbiBcInJlZHV4LypcIiBuYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCBpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuYCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSB7XHJcbiAgY29uc3QgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XHJcbiAgY29uc3QgZmluYWxSZWR1Y2VycyA9IHt9O1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGtleSA9IHJlZHVjZXJLZXlzW2ldO1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICB3YXJuaW5nKGBObyByZWR1Y2VyIHByb3ZpZGVkIGZvciBrZXkgXCIke2tleX1cImApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICBmaW5hbFJlZHVjZXJzW2tleV0gPSByZWR1Y2Vyc1trZXldO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7XHJcbiAgbGV0IHVuZXhwZWN0ZWRLZXlDYWNoZTtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB7fTtcclxuICB9XHJcbiAgbGV0IHNoYXBlQXNzZXJ0aW9uRXJyb3I7XHJcbiAgdHJ5IHtcclxuICAgIGFzc2VydFJlZHVjZXJTaGFwZShmaW5hbFJlZHVjZXJzKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBzaGFwZUFzc2VydGlvbkVycm9yID0gZTtcclxuICB9XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKHN0YXRlID0ge30sIGFjdGlvbikge1xyXG4gICAgaWYgKHNoYXBlQXNzZXJ0aW9uRXJyb3IpIHtcclxuICAgICAgdGhyb3cgc2hhcGVBc3NlcnRpb25FcnJvcjtcclxuICAgIH1cclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgY29uc3Qgd2FybmluZ01lc3NhZ2UgPSBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKHN0YXRlLCBmaW5hbFJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSk7XHJcbiAgICAgIGlmICh3YXJuaW5nTWVzc2FnZSkge1xyXG4gICAgICAgIHdhcm5pbmcod2FybmluZ01lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbmV4dFN0YXRlID0ge307XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tpXTtcclxuICAgICAgY29uc3QgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNba2V5XTtcclxuICAgICAgY29uc3QgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW2tleV07XHJcbiAgICAgIGNvbnN0IG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcclxuICAgICAgaWYgKHR5cGVvZiBuZXh0U3RhdGVGb3JLZXkgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBjb25zdCBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE0KSA6IGBXaGVuIGNhbGxlZCB3aXRoIGFuIGFjdGlvbiBvZiB0eXBlICR7YWN0aW9uVHlwZSA/IGBcIiR7U3RyaW5nKGFjdGlvblR5cGUpfVwiYCA6IFwiKHVua25vd24gdHlwZSlcIn0sIHRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXCIke2tleX1cIiByZXR1cm5lZCB1bmRlZmluZWQuIFRvIGlnbm9yZSBhbiBhY3Rpb24sIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBwcmV2aW91cyBzdGF0ZS4gSWYgeW91IHdhbnQgdGhpcyByZWR1Y2VyIHRvIGhvbGQgbm8gdmFsdWUsIHlvdSBjYW4gcmV0dXJuIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuYCk7XHJcbiAgICAgIH1cclxuICAgICAgbmV4dFN0YXRlW2tleV0gPSBuZXh0U3RhdGVGb3JLZXk7XHJcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcclxuICAgIH1cclxuICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhzdGF0ZSkubGVuZ3RoO1xyXG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcclxuICB9O1xyXG59XHJcblxyXG4vLyBzcmMvYmluZEFjdGlvbkNyZWF0b3JzLnRzXHJcbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmFwcGx5KHRoaXMsIGFyZ3MpKTtcclxuICB9O1xyXG59XHJcbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcclxuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzICE9PSBcIm9iamVjdFwiIHx8IGFjdGlvbkNyZWF0b3JzID09PSBudWxsKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNikgOiBgYmluZEFjdGlvbkNyZWF0b3JzIGV4cGVjdGVkIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uLCBidXQgaW5zdGVhZCByZWNlaXZlZDogJyR7a2luZE9mKGFjdGlvbkNyZWF0b3JzKX0nLiBEaWQgeW91IHdyaXRlIFwiaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb21cIiBpbnN0ZWFkIG9mIFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiP2ApO1xyXG4gIH1cclxuICBjb25zdCBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XHJcbiAgZm9yIChjb25zdCBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpIHtcclxuICAgIGNvbnN0IGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xyXG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcclxufVxyXG5cclxuLy8gc3JjL2NvbXBvc2UudHNcclxuZnVuY3Rpb24gY29tcG9zZSguLi5mdW5jcykge1xyXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiAoYXJnKSA9PiBhcmc7XHJcbiAgfVxyXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcclxuICAgIHJldHVybiBmdW5jc1swXTtcclxuICB9XHJcbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZSgoYSwgYikgPT4gKC4uLmFyZ3MpID0+IGEoYiguLi5hcmdzKSkpO1xyXG59XHJcblxyXG4vLyBzcmMvYXBwbHlNaWRkbGV3YXJlLnRzXHJcbmZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykge1xyXG4gIHJldHVybiAoY3JlYXRlU3RvcmUyKSA9PiAocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUyKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcclxuICAgIGxldCBkaXNwYXRjaCA9ICgpID0+IHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTUpIDogXCJEaXNwYXRjaGluZyB3aGlsZSBjb25zdHJ1Y3RpbmcgeW91ciBtaWRkbGV3YXJlIGlzIG5vdCBhbGxvd2VkLiBPdGhlciBtaWRkbGV3YXJlIHdvdWxkIG5vdCBiZSBhcHBsaWVkIHRvIHRoaXMgZGlzcGF0Y2guXCIpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVBUEkgPSB7XHJcbiAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcclxuICAgICAgZGlzcGF0Y2g6IChhY3Rpb24sIC4uLmFyZ3MpID0+IGRpc3BhdGNoKGFjdGlvbiwgLi4uYXJncylcclxuICAgIH07XHJcbiAgICBjb25zdCBjaGFpbiA9IG1pZGRsZXdhcmVzLm1hcCgobWlkZGxld2FyZSkgPT4gbWlkZGxld2FyZShtaWRkbGV3YXJlQVBJKSk7XHJcbiAgICBkaXNwYXRjaCA9IGNvbXBvc2UoLi4uY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0b3JlLFxyXG4gICAgICBkaXNwYXRjaFxyXG4gICAgfTtcclxuICB9O1xyXG59XHJcblxyXG4vLyBzcmMvdXRpbHMvaXNBY3Rpb24udHNcclxuZnVuY3Rpb24gaXNBY3Rpb24oYWN0aW9uKSB7XHJcbiAgcmV0dXJuIGlzUGxhaW5PYmplY3QoYWN0aW9uKSAmJiBcInR5cGVcIiBpbiBhY3Rpb24gJiYgdHlwZW9mIGFjdGlvbi50eXBlID09PSBcInN0cmluZ1wiO1xyXG59XHJcbmV4cG9ydCB7XHJcbiAgYWN0aW9uVHlwZXNfZGVmYXVsdCBhcyBfX0RPX05PVF9VU0VfX0FjdGlvblR5cGVzLFxyXG4gIGFwcGx5TWlkZGxld2FyZSxcclxuICBiaW5kQWN0aW9uQ3JlYXRvcnMsXHJcbiAgY29tYmluZVJlZHVjZXJzLFxyXG4gIGNvbXBvc2UsXHJcbiAgY3JlYXRlU3RvcmUsXHJcbiAgaXNBY3Rpb24sXHJcbiAgaXNQbGFpbk9iamVjdCxcclxuICBsZWdhY3lfY3JlYXRlU3RvcmVcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVkdXgubWpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHN0b3JlIGZyb20gXCJyZWR1eEFsaWFzL3N0b3JlXCI7XHJcbmltcG9ydCB7IHNldFRva2VucyB9IGZyb20gXCJyZWR1eEFsaWFzL2FjdGlvbnMvYXV0aEFjdGlvbnNcIjtcclxuaW1wb3J0IHsgbWVtYmVyR2V0IH0gZnJvbSBcIi4vc2VydmljZXMvbWVtYmVyU2VydmljZVwiO1xyXG5pbXBvcnQgeyBsaW5rQ2FyZEdldCwgbGlua0NhcmRQb3N0LCBsaW5rQ2FyZEFpUG9zdCwgbGlua0NhcmRBbGxMaXN0R2V0LCBsaW5rQ2FyZEZvbGRlckxpc3RHZXQsIGxpbmtDYXJkRGVsZXRlLCBsaW5rQ2FyZEluZm9QYXRjaCwgbGlua0NhcmRFbnRlclBvc3QgfSBmcm9tIFwiLi9zZXJ2aWNlcy9saW5rQ2FyZFNlcnZpY2VcIjtcclxuXHJcbmNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiBcIm9wZW5TaWRlUGFuZWxcIiB9KTtcclxuXHJcbi8vIOuppOuyhCDsobDtmowg7ZW465Ok65+sXHJcbmNvbnN0IGhhbmxkZU1lbWJlckdldCA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHt9O1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBtZW1iZXJHZXQoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIuuppOuyhCDsobDtmowg7J2R64u1OlwiLCByZXNwb25zZSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIuuppOuyhCDsobDtmowg7Iuk7YyoIVwiKTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgY29uc29sZS5sb2coXCLroZzrlKkg7KKF66OMXCIpOyAvLyDroZzrlKkg7IOB7YOcIOyiheujjFxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZUxpbmtDYXJkQWlQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyDtmITsnqwg7Zmc7ISxIO2DreydmCBVUkwg6rCA7KC47Jik6riwXHJcbiAgICBjb25zdCB0YWJzID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSk7XHJcbiAgICBjb25zdCBlbmNvZGVkVXJsID0gdGFic1swXT8udXJsOyAvLyDsnbjsvZTrlKnrkJwgVVJMXHJcblxyXG4gICAgaWYgKCFlbmNvZGVkVXJsKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLtmZzshLEg7YOtIFVSTOydhCDqsIDsoLjsmKwg7IiYIOyXhuyKteuLiOuLpC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cmwgPSBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZFVybCk7IC8vIOuUlOy9lOuUqeuQnCBVUkxcclxuICAgIGNvbnNvbGUubG9nKFwiRGVjb2RlZCBVUkw6XCIsIHVybCk7XHJcblxyXG4gICAgLy8g7Zek642U7JeQIFVSTCDstpTqsIBcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHVybDogdXJsLCAvLyDrlJTsvZTrlKnrkJwgVVJMIOyCrOyaqVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBBUEkg7JqU7LKtIOuztOuCtOq4sFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsaW5rQ2FyZEFpUG9zdChkYXRhKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgLy8g7J2R64u1IOuNsOydtO2EsOulvCDrs4DtmZhcclxuICAgICAgY29uc3QgdHJhbnNmb3JtZWREYXRhID0ge1xyXG4gICAgICAgIHRpdGxlOiByZXNwb25zZS50aXRsZSB8fCBcIkRlZmF1bHQgVGl0bGVcIixcclxuICAgICAgICB1cmw6IHJlc3BvbnNlLnVybCB8fCB1cmwsIC8vIOuUlOy9lOuUqeuQnCBVUkwg7IKs7JqpXHJcbiAgICAgICAgZm9sZGVySWQ6IHJlc3BvbnNlLmZvbGRlcj8uaWQgfHwgXCJkZWZhdWx0LWZvbGRlci1pZFwiLCAvLyDtj7TrjZQgSURcclxuICAgICAgICB0YWdMaXN0OiByZXNwb25zZS50YWdzPy5tYXAodGFnID0+ICh7XHJcbiAgICAgICAgICBpZDogdGFnLmlkIHx8IDAsXHJcbiAgICAgICAgICB0YWdUeXBlOiB0YWcudGFnVHlwZSB8fCBcIkFJL0NVU1RPTVwiLFxyXG4gICAgICAgIH0pKSB8fCBbXSxcclxuICAgICAgICBtZW1vOiBcIkRlZmF1bHQgbWVtbyB0ZXh0XCIsIC8vIOq4sOuzuCDrqZTrqqgg7LaU6rCAXHJcbiAgICAgICAgc3VtbWFyeTogcmVzcG9uc2Uuc3VtbWFyeSB8fCBcIkRlZmF1bHQgc3VtbWFyeVwiLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8g7IOB7YOcIOyXheuNsOydtO2KuFxyXG4gICAgICBzZXRMaW5rQ2FyZExpc3REZXRhaWwodHJhbnNmb3JtZWREYXRhKTsgLy8g67Cw7Je0IO2Yle2DnOuhnCDsg4Htg5zsl5Ag7KCA7J6lXHJcbiAgICAgIGNvbnNvbGUubG9nKFwi6rCA6rO165CcIOuNsOydtO2EsDpcIiwgdHJhbnNmb3JtZWREYXRhKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLrp4HtgazsubTrk5wg7IOd7ISxIOyLpO2MqDpcIiwgZXJyKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBGb3JtIEVsZW1lbnRzXHJcbmNvbnN0IGZvcm1FbGVtZW50cyA9IHtcclxuICB0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZUlucHV0XCIpLFxyXG4gIGZvbGRlcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb2xkZXJTZWxlY3RcIiksXHJcbiAgdGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhZ0lucHV0XCIpLFxyXG4gIHN1bW1hcnk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0b1N1bW1hcnlcIiksXHJcbiAgbWVtbzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW1vSW5wdXRcIiksXHJcbn07XHJcblxyXG5jb25zdCBza2VsZXRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2tlbGV0b25cIik7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XHJcblxyXG5sZXQgaXNMb2FkaW5nID0gdHJ1ZTtcclxuXHJcbi8vIFVJIOyDge2DnCDthqDquIBcclxuY29uc3QgdG9nZ2xlVUkgPSAoKSA9PiB7XHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgc2tlbGV0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBza2VsZXRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2V0TG9hZGluZ1N0YXRlID0gKGxvYWRpbmcpID0+IHtcclxuICBpc0xvYWRpbmcgPSBsb2FkaW5nO1xyXG4gIHRvZ2dsZVVJKCk7XHJcbn07XHJcblxyXG4vLyBDaHJvbWUgU3RvcmFnZeyXkOyEnCDsoIDsnqXrkJwg7Yag7YGwIOqwgOyguOyYpOq4sFxyXG5jb25zdCBpbml0aWFsaXplU2lkZVBhbmVsID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNocm9tZSBTdG9yYWdl7JeQ7IScIO2GoO2BsCDtmZXsnbgg7KSRLi4uXCIpO1xyXG5cclxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJhY2Nlc3NUb2tlblwiLCBcInJlZnJlc2hUb2tlblwiXSwgKHRva2VucykgPT4ge1xyXG4gICAgICBjb25zdCB7IGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4gfSA9IHRva2VucztcclxuXHJcbiAgICAgIGlmIChhY2Nlc3NUb2tlbiAmJiByZWZyZXNoVG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIu2GoO2BsCDrsJzqsqw6XCIsIHsgYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiB9KTtcclxuICAgICAgICAvLyBSZWR1eCBTdG9yZeyXkCDthqDtgbAg7ISk7KCVXHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goc2V0VG9rZW5zKGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4pKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlZHV4IFN0b3Jl7JeQIO2GoO2BsCDsoIDsnqUg7JmE66OMXCIpO1xyXG5cclxuICAgICAgICAvLyDthqDtgbDsnbQg7J6I64qUIOqyveyasCDrqaTrsoQg7KGw7ZqMIOuwlOuhnCDtmLjstpxcclxuICAgICAgICBoYW5sZGVNZW1iZXJHZXQoKTtcclxuICAgICAgICBoYW5kbGVMaW5rQ2FyZEFpUG9zdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIkNocm9tZSBTdG9yYWdl7JeQIOyggOyepeuQnCDthqDtgbDsnbQg7JeG7Iq164uI64ukLlwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDaHJvbWUgU3RvcmFnZeyXkOyEnCDthqDtgbAg6rCA7KC47Jik6riwIOyLpO2MqDpcIiwgZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIE1vY2sg642w7J207YSwIOuhnOuTnFxyXG5jb25zdCBsb2FkRm9ybURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgc2V0TG9hZGluZ1N0YXRlKHRydWUpO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwMCkpOyAvLyBNb2NrIOuNsOydtO2EsCDroZzrk5xcclxuICAgIGNvbnNvbGUubG9nKFwiRGF0YSBsb2FkZWQgZnJvbSBBUElcIik7XHJcblxyXG4gICAgLy8gRm9ybSDrjbDsnbTthLAg7LGE7Jqw6riwXHJcbiAgICBmb3JtRWxlbWVudHMudGl0bGUudmFsdWUgPSBcIuyYiOygnCDsoJzrqqlcIjtcclxuICAgIGZvcm1FbGVtZW50cy5mb2xkZXIudmFsdWUgPSBcIu2PtOuNlCAxXCI7XHJcbiAgICBmb3JtRWxlbWVudHMudGFnLnZhbHVlID0gXCLtg5zqt7gg7JiI7KCcXCI7XHJcbiAgICBmb3JtRWxlbWVudHMuc3VtbWFyeS52YWx1ZSA9IFwi7J6Q64+ZIOyDneyEseuQnCDsmpTslb1cIjtcclxuICAgIGZvcm1FbGVtZW50cy5tZW1vLnZhbHVlID0gXCLsgqzsmqnsnpAg66mU66qoXCI7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLrjbDsnbTthLAg66Gc65OcIOyLpO2MqDpcIiwgZXJyb3IpO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBzZXRMb2FkaW5nU3RhdGUoZmFsc2UpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIOy0iOq4sO2ZlCDroZzsp4FcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiRE9NQ29udGVudExvYWRlZCDsnbTrsqTtirgg67Cc7IOdXCIpO1xyXG4gIGF3YWl0IGluaXRpYWxpemVTaWRlUGFuZWwoKTsgLy8gQ2hyb21lIFN0b3JhZ2Xsl5DshJwg7KCA7J6l65CcIO2GoO2BsCDqsIDsoLjsmKTquLBcclxuICBjb25zb2xlLmxvZyhcIlNpZGUgUGFuZWwg7LSI6riw7ZmUIOyZhOujjFwiKTtcclxuICBhd2FpdCBsb2FkRm9ybURhdGEoKTsgLy8g642w7J207YSwIOuhnOuTnFxyXG4gIGNvbnNvbGUubG9nKFwiRm9ybSDrjbDsnbTthLAg66Gc65OcIOyZhOujjFwiKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJzZXRUb2tlbnMiLCJhY2Nlc3NUb2tlbiIsInJlZnJlc2hUb2tlbiIsInR5cGUiLCJwYXlsb2FkIiwiY2xlYXJUb2tlbnMiLCJpbml0aWFsU3RhdGUiLCJhdXRoUmVkdWNlciIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwiX29iamVjdFNwcmVhZCIsImZvbGRlckxpc3QiLCJmb2xkZXJSZWR1Y2VyIiwibWFwIiwiZm9sZGVyIiwiaWQiLCJuYW1lIiwiY29tYmluZVJlZHVjZXJzIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImF1dGgiLCJzdG9yZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiYXhpb3MiLCJBUElfQkFTRV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0FQSV9CQVNFX1VSTCIsImFwaUNsaWVudCIsImJhc2VVUkwiLCJ0aW1lb3V0IiwiaGVhZGVycyIsImdldEFjY2Vzc1Rva2VuIiwiZ2V0U3RhdGUiLCJnZXRSZWZyZXNoVG9rZW4iLCJnZXQiLCJfcmVmIiwiX2NhbGxlZSIsInVybCIsInBhcmFtcyIsInJlc3BvbnNlIiwiX2FyZ3MiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZGF0YSIsIl94IiwicG9zdCIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfYXJnczIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJjb25zb2xlIiwibG9nIiwiX3gyIiwicHV0IiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9hcmdzMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIl94MyIsImRlbCIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfYXJnczQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJfeDQiLCJ0b2tlbkdldCIsIl9yZWY1IiwiX2NhbGxlZTUiLCJfYXJnczUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJjb25jYXQiLCJfeDUiLCJ0b2tlblBvc3QiLCJfcmVmNiIsIl9jYWxsZWU2IiwiX2FyZ3M2IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiX3g2IiwicmVmcmVzaFBvc3QiLCJfcmVmNyIsIl9jYWxsZWU3IiwiX2FyZ3M3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiX3g3IiwidG9rZW5QdXQiLCJfcmVmOCIsIl9jYWxsZWU4IiwiX2FyZ3M4IiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwiX3g4IiwidG9rZW5EZWwiLCJfcmVmOSIsIl9jYWxsZWU5IiwiX2FyZ3M5IiwiX2NhbGxlZTkkIiwiX2NvbnRleHQ5IiwiX3g5IiwidG9rZW5QYXRjaCIsIl9yZWYxMCIsIl9jYWxsZWUxMCIsIl9hcmdzMTAiLCJfY2FsbGVlMTAkIiwiX2NvbnRleHQxMCIsInBhdGNoIiwiX3gxMCIsImxpbmtDYXJkUG9zdCIsInQwIiwiZXJyb3IiLCJsaW5rQ2FyZEFpUG9zdCIsImxpbmtDYXJkVGFnUG9zdCIsImxpbmtDYXJkVGFnRGVsUG9zdCIsInRhZ0lkIiwidGFnVHlwZSIsImxpbmtDYXJkRW50ZXJQb3N0IiwibGlua0NhcmREZWxldGUiLCJsaW5rQ2FyZEluZm9QYXRjaCIsIl94MTEiLCJsaW5rQ2FyZEZvbGRlclBhdGNoIiwiX3gxMiIsIl94MTMiLCJsaW5rQ2FyZEdldCIsIl94MTQiLCJsaW5rQ2FyZEZvbGRlckxpc3RHZXQiLCJmb2xkZXJJZCIsInNvcnRCeSIsInNvcnRPcmRlciIsImxhc3RJZCIsImxpbWl0IiwiX3gxNSIsIl94MTYiLCJfeDE3IiwiX3gxOCIsIl94MTkiLCJsaW5rQ2FyZEFsbExpc3RHZXQiLCJfcmVmMTEiLCJfY2FsbGVlMTEiLCJfY2FsbGVlMTEkIiwiX2NvbnRleHQxMSIsIl94MjAiLCJfeDIxIiwiX3gyMiIsIl94MjMiLCJtZW1iZXJHZXQiLCJjaHJvbWUiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJoYW5sZGVNZW1iZXJHZXQiLCJoYW5kbGVMaW5rQ2FyZEFpUG9zdCIsIl90YWJzJCIsInRhYnMiLCJlbmNvZGVkVXJsIiwiX3Jlc3BvbnNlJGZvbGRlciIsIl9yZXNwb25zZSR0YWdzIiwidHJhbnNmb3JtZWREYXRhIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwidGl0bGUiLCJ0YWdMaXN0IiwidGFncyIsInRhZyIsIm1lbW8iLCJzdW1tYXJ5Iiwic2V0TGlua0NhcmRMaXN0RGV0YWlsIiwiZm9ybUVsZW1lbnRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNrZWxldG9uIiwiZm9ybSIsImlzTG9hZGluZyIsInRvZ2dsZVVJIiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0TG9hZGluZ1N0YXRlIiwibG9hZGluZyIsImluaXRpYWxpemVTaWRlUGFuZWwiLCJzdG9yYWdlIiwibG9jYWwiLCJ0b2tlbnMiLCJkaXNwYXRjaCIsIndhcm4iLCJsb2FkRm9ybURhdGEiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=