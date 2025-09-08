"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["user-account-deposits-create"],{

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/account/deposits/create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/account/deposits/create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");
/* harmony import */ var _plugins_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/plugins/format */ "./resources/js/plugins/format.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.min.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_FormParameter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/FormParameter */ "./resources/js/components/FormParameter.vue");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bs58 */ "./node_modules/bs58/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var packages_payments_resources_js_static_chains__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! packages/payments/resources/js/static/chains */ "./packages/payments/resources/js/static/chains.json");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FormParameter: _components_FormParameter__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_5__["default"]],
  middleware: ['auth', 'verified', '2fa_passed'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Make a deposit')
    };
  },
  data: function data() {
    return {
      method: null,
      // currently selected deposit method object
      methods: null,
      formIsProcessing: false,
      submitButtonText: this.$t('Proceed'),
      form: new (vform__WEBPACK_IMPORTED_MODULE_4___default())({
        amount: null,
        payment_currency: null,
        parameters: {}
      }),
      evm: {
        addresses: [],
        confirmedAddresses: null,
        addressConfirmationInProgress: false,
        web: null,
        wallet: {
          isInstalled: false,
          isConnected: false
        }
      },
      tron: {
        addresses: [],
        confirmedAddresses: null,
        addressConfirmationInProgress: false,
        web: null,
        wallet: {
          isInstalled: false,
          isConnected: false
        }
      },
      solana: {
        confirmedAddresses: null,
        addressConfirmationInProgress: false,
        phantom: {
          isInstalled: false,
          isConnected: false
        }
      },
      stripe: {
        instance: null,
        elements: null,
        card: null
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_10__.mapState)('auth', ['user'])), {}, {
    currency: function currency() {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(this.method, 'currency');
    },
    rate: function rate() {
      return this.form.payment_currency && this.paymentCurrenciesCount > 0 ? this.paymentCurrencies[this.form.payment_currency].rate_credits : (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(this.method, 'rate', 0);
    },
    paymentAmount: function paymentAmount() {
      var decimalPlaces = (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(this.method, 'decimal_places');
      return this.rate > 0 && this.form.amount > 0 ? (0,_plugins_format__WEBPACK_IMPORTED_MODULE_3__.decimal)(this.form.amount / this.rate, decimalPlaces || 8) : 0;
    },
    paymentCurrencies: function paymentCurrencies() {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(this.method, 'payment_currencies');
    },
    paymentCurrenciesCount: function paymentCurrenciesCount() {
      return this.paymentCurrencies ? Object.keys(this.paymentCurrencies).length : 0;
    },
    depositMin: function depositMin() {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(this.method, 'min_amount');
    },
    depositMax: function depositMax() {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(this.method, 'max_amount');
    },
    evmAddressIsConfirmed: function evmAddressIsConfirmed() {
      var _this = this;
      return this.evm.confirmedAddresses && !!this.evm.confirmedAddresses.find(function (item) {
        return item.address === _this.form.parameters.address;
      });
    },
    tronAddressIsConfirmed: function tronAddressIsConfirmed() {
      var _this2 = this;
      return this.tron.confirmedAddresses && !!this.tron.confirmedAddresses.find(function (item) {
        return item.address === _this2.form.parameters.address;
      });
    },
    solanaAddressIsConfirmed: function solanaAddressIsConfirmed() {
      var _this3 = this;
      return this.solana.confirmedAddresses && !!this.solana.confirmedAddresses.find(function (item) {
        return item.address === _this3.form.parameters.address;
      });
    },
    evmChainName: function evmChainName() {
      return (web3__WEBPACK_IMPORTED_MODULE_6___default().givenProvider) ? packages_payments_resources_js_static_chains__WEBPACK_IMPORTED_MODULE_9__[(web3__WEBPACK_IMPORTED_MODULE_6___default().givenProvider.networkVersion)] || this.$t('Unknown chain') : null;
    }
  }),
  watch: {
    method: function method(_method) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var code;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this4.formIsValid = true;
              _this4.form.errors.clear();
              _this4.$nextTick(function () {
                _this4.form.amount = _this4.depositMin;
              });
              code = (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(_method, 'payment_method.gateway.code'); // disable credentials for tron to avoid this error:
              // Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'
              (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = code !== 'tron';
              _this4.form.parameters = {};
              // Assign default values to custom parameters
              if (_method && _method.parameters) {
                _method.parameters.forEach(function (parameter) {
                  _this4.$set(_this4.form.parameters, parameter.id, parameter["default"]);
                });
              }

              // Assign default values to built-in method parameters
              if (_method && _method.payment_method) {
                _method.payment_method.input_parameters.forEach(function (parameter) {
                  _this4.$set(_this4.form.parameters, parameter.id, parameter["default"]);
                });
              }
              if (code === 'stripe') {
                if (_this4.stripe.instance) {
                  _this4.$nextTick(function () {
                    _this4.initStripe();
                  });
                } else {
                  (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.loadScript)('https://js.stripe.com/v3/', _this4.initStripe);
                }
              } else if (code === 'evm') {
                if ((web3__WEBPACK_IMPORTED_MODULE_6___default().givenProvider)) {
                  _this4.evm.wallet.isInstalled = true;
                  if ((web3__WEBPACK_IMPORTED_MODULE_6___default().givenProvider.selectedAddress)) {
                    _this4.connectWeb3Wallet();
                  }
                }
              } else if (code === 'tron') {
                if (window.tronWeb) {
                  _this4.tron.wallet.isInstalled = true;
                }
              } else if (code === 'solana') {
                if (window.solana) {
                  _this4.solana.phantom.isInstalled = window.solana && window.solana.isPhantom;
                  _this4.connectPhantom(true);
                }
              }
              _this4.form.payment_currency = _this4.paymentCurrencies ? Object.keys(_this4.paymentCurrencies)[0] : null;
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    evmAddressIsConfirmed: function evmAddressIsConfirmed(confirmed) {
      this.checkAddress(confirmed);
    },
    tronAddressIsConfirmed: function tronAddressIsConfirmed(confirmed) {
      this.checkAddress(confirmed);
    },
    solanaAddressIsConfirmed: function solanaAddressIsConfirmed(confirmed) {
      this.checkAddress(confirmed);
    }
  },
  created: function created() {
    var _this5 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _yield$axios$get, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _this5.$store.dispatch('auth/fetchUser');
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/deposit-methods');
          case 3:
            _yield$axios$get = _context2.sent;
            data = _yield$axios$get.data;
            _this5.methods = data;
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = true;
  },
  methods: {
    get: _plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get,
    chooseMethod: function chooseMethod(method) {
      this.method = method;
      window.scrollTo(0, 0);
    },
    checkAddress: function checkAddress(confirmed) {
      if (confirmed) {
        this.form.errors.clear('parameters.address');
      } else if (!confirmed && this.form.parameters.address) {
        this.form.errors.set('parameters.address', this.$t('Please confirm this address belongs to you by signing a random text string.'));
      }
    },
    initWeb3: function initWeb3(blockchain) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var web, addresses;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if ((web3__WEBPACK_IMPORTED_MODULE_6___default().givenProvider)) {
                _context3.next = 4;
                break;
              }
              _this6.$store.dispatch('message/error', {
                text: _this6.$t('Please check that a {0} compatible wallet (such as {1}) is installed and enabled in your browser.', ['Web3', 'Metamask'])
              });
              _this6.formIsValid = false;
              return _context3.abrupt("return", false);
            case 4:
              web = new (web3__WEBPACK_IMPORTED_MODULE_6___default())((web3__WEBPACK_IMPORTED_MODULE_6___default().givenProvider));
              _this6[blockchain].web = web;
              _context3.prev = 6;
              _context3.next = 9;
              return web.eth.requestAccounts();
            case 9:
              addresses = _context3.sent;
              _this6[blockchain].addresses = addresses;
              _this6.$set(_this6.form.parameters, 'address', addresses[0]);
              _this6.fetchConfirmedBlockchainAddresses(blockchain);
              _context3.next = 19;
              break;
            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](6);
              _this6.$store.dispatch('message/error', {
                text: _context3.t0.code === 4001 ? _this6.$t('Access to your account is not authorized') : _context3.t0.message
              });
              _this6.formIsValid = false;
            case 19:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[6, 15]]);
      }))();
    },
    connectTronlink: function connectTronlink() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var web, address;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              web = window.tronWeb;
              _this7.tron.web = web;
              address = web.defaultAddress.base58;
              if (address !== false) {
                _this7.tron.wallet.isConnected = true;
                _this7.$set(_this7.form.parameters, 'address', address);
                _this7.fetchConfirmedBlockchainAddresses('tron');
              } else {
                _this7.$store.dispatch('message/error', {
                  text: _this7.$t('Access to your account is not authorized')
                });
                _this7.formIsValid = false;
              }
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    connectWeb3Wallet: function connectWeb3Wallet() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var web, addresses;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              web = new (web3__WEBPACK_IMPORTED_MODULE_6___default())((web3__WEBPACK_IMPORTED_MODULE_6___default().givenProvider));
              _this8.evm.web = web;
              _context5.prev = 2;
              _context5.next = 5;
              return web.eth.requestAccounts();
            case 5:
              addresses = _context5.sent;
              _context5.next = 13;
              break;
            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](2);
              _this8.$store.dispatch('message/error', {
                text: _context5.t0.message
              });
              _this8.formIsValid = false;
              return _context5.abrupt("return", false);
            case 13:
              _this8.evm.wallet.isConnected = !!addresses[0];
              _this8.$set(_this8.form.parameters, 'address', addresses[0]);
              _this8.fetchConfirmedBlockchainAddresses('evm');
            case 16:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[2, 8]]);
      }))();
    },
    connectPhantom: function connectPhantom(silent) {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return window.solana.connect({
                onlyIfTrusted: silent
              });
            case 3:
              _context6.next = 9;
              break;
            case 5:
              _context6.prev = 5;
              _context6.t0 = _context6["catch"](0);
              // { code: 4001, message: 'User rejected the request.' }
              if (!silent) {
                _this9.$store.dispatch('message/error', {
                  text: _context6.t0.message
                });
                _this9.formIsValid = false;
              }
              return _context6.abrupt("return", false);
            case 9:
              _this9.solana.phantom.isConnected = window.solana.isConnected;
              _this9.$set(_this9.form.parameters, 'address', window.solana.publicKey.toString());
              _this9.fetchConfirmedBlockchainAddresses('solana');
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 5]]);
      }))();
    },
    fetchConfirmedBlockchainAddresses: function fetchConfirmedBlockchainAddresses(blockchain) {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _yield$axios$get2, data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (_this0[blockchain].confirmedAddresses) {
                _context7.next = 6;
                break;
              }
              _context7.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/blockchains/".concat(blockchain, "/addresses"));
            case 3:
              _yield$axios$get2 = _context7.sent;
              data = _yield$axios$get2.data;
              _this0[blockchain].confirmedAddresses = data;
            case 6:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    confirmBlockchainAddress: function confirmBlockchainAddress() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var blockchain, _yield$axios$post, data, signature, address, web, response, request;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              blockchain = (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(_this1.method, 'payment_method.gateway.code');
              _this1[blockchain].addressConfirmationInProgress = true;
              _context8.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/blockchains/".concat(blockchain, "/addresses"), {
                address: _this1.form.parameters.address
              });
            case 4:
              _yield$axios$post = _context8.sent;
              data = _yield$axios$post.data;
              address = data;
              web = _this1[blockchain].web;
              _context8.prev = 8;
              if (!(blockchain === 'tron')) {
                _context8.next = 15;
                break;
              }
              _context8.next = 12;
              return web.trx.sign(web.toHex(address.message).replace(/^0x/, ''));
            case 12:
              signature = _context8.sent;
              _context8.next = 25;
              break;
            case 15:
              if (!(blockchain === 'solana')) {
                _context8.next = 22;
                break;
              }
              _context8.next = 18;
              return window.solana.signMessage(new TextEncoder().encode(address.message), 'utf8');
            case 18:
              response = _context8.sent;
              signature = bs58__WEBPACK_IMPORTED_MODULE_8___default().encode(response.signature);
              _context8.next = 25;
              break;
            case 22:
              _context8.next = 24;
              return web.eth.personal.sign(address.message, _this1.form.parameters.address);
            case 24:
              signature = _context8.sent;
            case 25:
              _context8.next = 30;
              break;
            case 27:
              _context8.prev = 27;
              _context8.t0 = _context8["catch"](8);
              _this1.form.errors.set('parameters.address', _context8.t0.message);
            case 30:
              if (!signature) {
                _context8.next = 35;
                break;
              }
              _context8.next = 33;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/blockchains/".concat(blockchain, "/addresses/").concat(address.id, "/verify"), {
                signature: signature
              });
            case 33:
              request = _context8.sent;
              _this1[blockchain].confirmedAddresses.push(request.data);
            case 35:
              _this1[blockchain].addressConfirmationInProgress = false;
            case 36:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[8, 27]]);
      }))();
    },
    initStripe: function initStripe() {
      var _this10 = this;
      this.stripe.instance = window.Stripe((0,_plugins_config__WEBPACK_IMPORTED_MODULE_1__.config)('payments.stripe.public_key'));
      var style = {
        base: {
          color: this.$vuetify.theme.isDark ? '#fff' : '#000',
          lineHeight: '20px',
          fontFamily: 'inherit',
          fontSize: '16px',
          '::placeholder': {
            color: this.$vuetify.theme.isDark ? 'rgba(255, 255, 255, 0.7)' : '#000'
          },
          fontSmoothing: 'antialiased'
        },
        invalid: {
          color: '#ff5252',
          iconColor: '#ff5252'
        }
      };
      this.stripe.elements = this.stripe.instance.elements();
      this.stripe.card = this.stripe.elements.create('card', {
        style: style
      });
      this.stripe.card.mount(this.$refs.card);

      // Handle real-time validation errors from the card Element.
      this.stripe.card.addEventListener('change', function (event) {
        _this10.$refs.error.textContent = event.error ? event.error.message : '';
      });
    },
    submit: function submit() {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _yield$_this11$stripe, paymentMethod, _yield$_this11$form$p, data;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _this11.formIsProcessing = true;
              if (!((0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.get)(_this11.method, 'payment_method.gateway.code') === 'stripe')) {
                _context9.next = 7;
                break;
              }
              _context9.next = 4;
              return _this11.stripe.instance.createPaymentMethod('card', _this11.stripe.card, {
                billing_details: {
                  name: _this11.user.name,
                  email: _this11.user.email
                }
              });
            case 4:
              _yield$_this11$stripe = _context9.sent;
              paymentMethod = _yield$_this11$stripe.paymentMethod;
              _this11.form.parameters.payment_method_id = paymentMethod.id;
            case 7:
              _context9.next = 9;
              return _this11.form.post("/api/deposits/methods/".concat(_this11.method.id))["catch"](function () {
                return false;
              });
            case 9:
              _yield$_this11$form$p = _context9.sent;
              data = _yield$_this11$form$p.data;
              // data will be undefined in case of any form errors (422 HTTP code)
              if (data) {
                if (data.success) {
                  if (data.redirect) {
                    if (data.redirect.external) {
                      _this11.submitButtonText = _this11.$t('Redirecting') + '...';
                      window.location.href = data.redirect.url;
                    } else {
                      _this11.$router.push({
                        name: data.redirect.url,
                        params: data.redirect.params
                      });
                    }
                  } else {
                    _this11.$router.push({
                      name: 'user.account.deposits.index',
                      query: {
                        status: 'complete'
                      }
                    });
                  }
                  // error
                } else {
                  _this11.$store.dispatch('message/error', {
                    text: data.message
                  });
                  _this11.formIsProcessing = false;
                }
              } else {
                _this11.formIsProcessing = false;
              }
            case 12:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=69fba079&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=69fba079&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".method-description[data-v-69fba079] {\n  white-space: pre-line;\n}\n.StripeElement[data-v-69fba079] {\n  padding: 16px 0 16px 12px;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.24);\n}\n.StripeElement .ElementsApp .InputElement[data-v-69fba079] {\n  font-size: 16px;\n  line-height: 20px;\n  padding: 8px 0 8px;\n}\n.StripeElement--focus[data-v-69fba079] {\n  border-width: 2px;\n  border-color: var(--v-primary-base);\n}\n.StripeElement--invalid[data-v-69fba079] {\n  border-color: #ff5252;\n}\n.theme-light .StripeElement[data-v-69fba079] {\n  border-color: rgba(0, 0, 0, 0.42);\n}\n.theme-light .StripeElement--focus[data-v-69fba079] {\n  border-color: var(--v-primary-base);\n}\n\n/*.v-alert::v-deep {\n  .v-alert__wrapper {\n    .v-icon {\n      align-self: center;\n    }\n  }\n}*/", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=69fba079&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=69fba079&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_69fba079_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&id=69fba079&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=69fba079&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_69fba079_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_69fba079_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/user/account/deposits/create.vue":
/*!*************************************************************!*\
  !*** ./resources/js/pages/user/account/deposits/create.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_69fba079_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=69fba079&scoped=true& */ "./resources/js/pages/user/account/deposits/create.vue?vue&type=template&id=69fba079&scoped=true&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/account/deposits/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _create_vue_vue_type_style_index_0_id_69fba079_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&id=69fba079&lang=scss&scoped=true& */ "./resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=69fba079&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_69fba079_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_69fba079_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "69fba079",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/account/deposits/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/account/deposits/create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/user/account/deposits/create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/account/deposits/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=69fba079&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=69fba079&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_69fba079_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&id=69fba079&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/account/deposits/create.vue?vue&type=style&index=0&id=69fba079&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/account/deposits/create.vue?vue&type=template&id=69fba079&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/account/deposits/create.vue?vue&type=template&id=69fba079&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/VAlert.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VList.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItem.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/VMenu.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VSkeletonLoader */ "./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/VToolbar.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");




















var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__["default"], [!_vm.methods ? _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      align: "center",
      justify: "center"
    }
  }, _vm._l([0, 1, 2], function (i) {
    return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: i,
      attrs: {
        cols: "12",
        md: "4",
        lg: "3"
      }
    }, [_c(vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attrs: {
        type: "card"
      }
    })], 1);
  }), 1) : _vm.methods.length > 0 ? _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      align: "center",
      justify: "center"
    }
  }, [!_vm.method ? _vm._l(_vm.methods, function (mtd) {
    return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: mtd.id,
      attrs: {
        cols: "12",
        md: "4",
        lg: "3"
      },
      on: {
        click: function click($event) {
          return _vm.chooseMethod(mtd);
        }
      }
    }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["default"], [mtd.banner ? _c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_5__["default"], {
      staticClass: "cursor-pointer",
      attrs: {
        src: mtd.banner,
        height: "200"
      }
    }) : _vm._e(), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
      staticClass: "cursor-pointer justify-center"
    }, [_vm._v("\n            " + _vm._s(mtd.name) + "\n          ")])], 1)], 1);
  }) : _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["default"], [_c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_7__["default"], [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      icon: ""
    },
    on: {
      click: function click($event) {
        _vm.method = null;
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], [_vm._v("mdi-arrow-left")])], 1), _vm._v(" "), _c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_10__.VToolbarTitle, [_vm._v("\n            " + _vm._s(_vm.method.name) + "\n          ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_vm.method.description ? _c("div", {
    staticClass: "method-description mb-5",
    domProps: {
      innerHTML: _vm._s(_vm.method.description)
    }
  }) : _vm._e(), _vm._v(" "), _c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    },
    model: {
      value: _vm.formIsValid,
      callback: function callback($$v) {
        _vm.formIsValid = $$v;
      },
      expression: "formIsValid"
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    attrs: {
      label: _vm.$t("Deposit amount"),
      suffix: _vm.$t("credits"),
      rules: [function (v) {
        return _vm.validationMin(v, _vm.depositMin);
      }, function (v) {
        return _vm.validationMax(v, _vm.depositMax);
      }],
      error: _vm.form.errors.has("amount"),
      "error-messages": _vm.form.errors.get("amount"),
      disabled: _vm.formIsProcessing,
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "amount");
      }
    },
    model: {
      value: _vm.form.amount,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "amount", _vm._n($$v));
      },
      expression: "form.amount"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    staticClass: "input-with-button",
    attrs: {
      value: _vm.paymentAmount,
      label: _vm.$t("Payment amount"),
      suffix: _vm.paymentCurrenciesCount > 0 ? "" : _vm.currency,
      error: _vm.form.errors.has("payment_currency"),
      "error-messages": _vm.form.errors.get("payment_currency"),
      disabled: _vm.formIsProcessing,
      outlined: "",
      readonly: ""
    },
    scopedSlots: _vm._u([_vm.paymentCurrenciesCount > 0 ? {
      key: "append",
      fn: function fn() {
        return [_c(vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_13__["default"], {
          attrs: {
            top: "",
            right: "",
            "max-height": "300",
            disabled: _vm.formIsProcessing || _vm.paymentCurrenciesCount === 1
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(_ref) {
              var on = _ref.on;
              return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], _vm._g({
                attrs: {
                  text: ""
                }
              }, on), [_vm._v("\n                      " + _vm._s(_vm.form.payment_currency) + "\n                      "), _vm.paymentCurrenciesCount > 1 ? _c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], [_vm._v("\n                        mdi-menu-down\n                      ")]) : _vm._e()], 1)];
            }
          }], null, false, 3656334950)
        }, [_vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["default"], _vm._l(_vm.paymentCurrencies, function (ccy, symbol) {
          return _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_15__["default"], {
            key: symbol,
            on: {
              click: function click($event) {
                _vm.form.payment_currency = symbol;
              }
            }
          }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_16__.VListItemTitle, [ccy.name ? [_vm._v("\n                          " + _vm._s(symbol) + " - " + _vm._s(ccy.name) + "\n                        ")] : [_vm._v("\n                          " + _vm._s(symbol) + "\n                        ")]], 2)], 1);
        }), 1)], 1)];
      },
      proxy: true
    } : null], null, true)
  }), _vm._v(" "), _vm.get(_vm.method, "payment_method.gateway.code") === "stripe" ? [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.parameters.payment_method_id,
      expression: "form.parameters.payment_method_id"
    }],
    attrs: {
      type: "hidden"
    },
    domProps: {
      value: _vm.form.parameters.payment_method_id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.parameters, "payment_method_id", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    ref: "card"
  }), _vm._v(" "), _c("div", {
    ref: "error",
    staticClass: "mb-5"
  })] : _vm.get(_vm.method, "payment_method.gateway.code") === "evm" ? [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.evm.wallet.isConnected,
      expression: "evm.wallet.isConnected"
    }],
    attrs: {
      label: _vm.$t("Your address"),
      rules: [_vm.validationRequired],
      error: _vm.form.errors.has("parameters.address"),
      "error-messages": _vm.form.errors.get("parameters.address"),
      readonly: true,
      outlined: ""
    },
    on: {
      change: function change($event) {
        return _vm.clearFormErrors($event, "parameters.address");
      }
    },
    scopedSlots: _vm._u([{
      key: "append-outer",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
          staticClass: "mt-n2",
          attrs: {
            disabled: _vm.evmAddressIsConfirmed || !_vm.form.parameters.address || _vm.evm.confirmedAddresses === null || _vm.evm.addressConfirmationInProgress,
            loading: _vm.evm.addressConfirmationInProgress
          },
          on: {
            click: _vm.confirmBlockchainAddress
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("Confirm")) + "\n                  ")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.form.parameters.address,
      callback: function callback($$v) {
        _vm.$set(_vm.form.parameters, "address", $$v);
      },
      expression: "form.parameters.address"
    }
  }), _vm._v(" "), _vm.evmChainName ? _c("p", {
    staticClass: "success--text"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("You are connected to")) + " " + _vm._s(_vm.evmChainName) + "\n              ")]) : _vm._e(), _vm._v(" "), _vm.evm.wallet.isInstalled ? [!_vm.evm.wallet.isConnected ? _c("div", {
    staticClass: "mb-5"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    staticClass: "loginBtnSec",
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.connectWeb3Wallet();
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Connect wallet")) + "\n                  ")])], 1) : _vm._e()] : _c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_17__["default"], {
    staticClass: "justify-center align-center align-content-center",
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      type: "warning"
    }
  }, [_c("p", [_vm._v("\n                  " + _vm._s(_vm.$t("Web3 wallet is not detected.")) + "\n                  " + _vm._s(_vm.$t("If you are using a desktop computer, install the Metamask wallet browser extension.")) + "\n                  " + _vm._s(_vm.$t("If you are using a mobile phone, use the in-app browser.")) + "\n                ")])])] : _vm.get(_vm.method, "payment_method.gateway.code") === "tron" ? [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tron.wallet.isConnected,
      expression: "tron.wallet.isConnected"
    }],
    attrs: {
      label: _vm.$t("Your address"),
      rules: [_vm.validationRequired],
      error: _vm.form.errors.has("parameters.address"),
      "error-messages": _vm.form.errors.get("parameters.address"),
      readonly: true,
      outlined: ""
    },
    on: {
      change: function change($event) {
        return _vm.clearFormErrors($event, "parameters.address");
      }
    },
    scopedSlots: _vm._u([{
      key: "append-outer",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
          staticClass: "mt-n2",
          attrs: {
            disabled: _vm.tronAddressIsConfirmed || !_vm.form.parameters.address || _vm.tron.confirmedAddresses === null || _vm.tron.addressConfirmationInProgress,
            loading: _vm.tron.addressConfirmationInProgress
          },
          on: {
            click: _vm.confirmBlockchainAddress
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("Confirm")) + "\n                  ")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.form.parameters.address,
      callback: function callback($$v) {
        _vm.$set(_vm.form.parameters, "address", $$v);
      },
      expression: "form.parameters.address"
    }
  }), _vm._v(" "), _vm.tron.wallet.isInstalled ? [!_vm.tron.wallet.isConnected ? _c("div", {
    staticClass: "mb-5"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      color: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.connectTronlink();
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Connect Tronlink")) + "\n                  ")])], 1) : _vm._e()] : _c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_17__["default"], {
    staticClass: "justify-center align-center align-content-center",
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      type: "warning"
    }
  }, [_c("p", [_vm._v("\n                  " + _vm._s(_vm.$t("Tronlink wallet is not detected.")) + "\n                  " + _vm._s(_vm.$t("If you are using a desktop computer, install the Tronlink wallet browser extension.")) + "\n                  " + _vm._s(_vm.$t("If you are using a mobile phone, use the in-app browser.")) + "\n                ")])])] : _vm.get(_vm.method, "payment_method.gateway.code") === "solana" ? [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.solana.phantom.isConnected,
      expression: "solana.phantom.isConnected"
    }],
    attrs: {
      label: _vm.$t("Your address"),
      rules: [_vm.validationRequired],
      error: _vm.form.errors.has("parameters.address"),
      "error-messages": _vm.form.errors.get("parameters.address"),
      readonly: true,
      outlined: ""
    },
    on: {
      change: function change($event) {
        return _vm.clearFormErrors($event, "parameters.address");
      }
    },
    scopedSlots: _vm._u([{
      key: "append-outer",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
          staticClass: "mt-n2",
          attrs: {
            disabled: _vm.solanaAddressIsConfirmed || !_vm.form.parameters.address || _vm.solana.confirmedAddresses === null || _vm.solana.addressConfirmationInProgress,
            loading: _vm.solana.addressConfirmationInProgress
          },
          on: {
            click: _vm.confirmBlockchainAddress
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("Confirm")) + "\n                  ")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.form.parameters.address,
      callback: function callback($$v) {
        _vm.$set(_vm.form.parameters, "address", $$v);
      },
      expression: "form.parameters.address"
    }
  }), _vm._v(" "), _vm.solana.phantom.isInstalled ? [!_vm.solana.phantom.isConnected ? _c("div", {
    staticClass: "mb-5"
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      color: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.connectPhantom(false);
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Connect Phantom wallet")) + "\n                  ")])], 1) : _vm._e()] : _c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_17__["default"], {
    staticClass: "justify-center align-center align-content-center",
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      type: "warning"
    }
  }, [_c("p", [_vm._v("\n                  " + _vm._s(_vm.$t("Phantom wallet is not detected.")) + "\n                  " + _vm._s(_vm.$t("If you are using a desktop computer, install the Phantom wallet browser extension.")) + "\n                  " + _vm._s(_vm.$t("If you are using a mobile phone, use the in-app browser.")) + "\n                ")])])] : _vm._e(), _vm._v(" "), _vm.method.payment_method ? _vm._l(_vm.method.payment_method.input_parameters, function (parameter) {
    return _c("form-parameter", {
      key: parameter.id,
      attrs: {
        parameter: parameter,
        form: _vm.form,
        "form-key": "parameters",
        disabled: _vm.formIsProcessing
      },
      model: {
        value: _vm.form.parameters[parameter.id],
        callback: function callback($$v) {
          _vm.$set(_vm.form.parameters, parameter.id, $$v);
        },
        expression: "form.parameters[parameter.id]"
      }
    });
  }) : _vm._e(), _vm._v(" "), _vm.method.parameters ? _vm._l(_vm.method.parameters, function (parameter) {
    return _c("form-parameter", {
      key: parameter.id,
      attrs: {
        parameter: parameter,
        form: _vm.form,
        "form-key": "parameters",
        disabled: _vm.formIsProcessing
      },
      model: {
        value: _vm.form.parameters[parameter.id],
        callback: function callback($$v) {
          _vm.$set(_vm.form.parameters, parameter.id, $$v);
        },
        expression: "form.parameters[parameter.id]"
      }
    });
  }) : _vm._e(), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      type: "submit",
      color: "primary",
      disabled: !_vm.formIsValid || _vm.form.busy || _vm.formIsProcessing,
      loading: _vm.form.busy
    }
  }, [_vm._v("\n              " + _vm._s(_vm.submitButtonText) + "\n            ")])], 2)], 1)], 1)], 1)], 2) : _vm.methods.length === 0 ? _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      align: "center",
      justify: "center"
    }
  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__["default"], [_c("p", {
    staticClass: "text-center"
  }, [_vm._v("\n        " + _vm._s(_vm.$t("No deposit methods enabled.")) + "\n      ")])])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/user/account/deposits/create.vue?vue&type=template&id=69fba079&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/user/account/deposits/create.vue?vue&type=template&id=69fba079&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_69fba079_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_69fba079_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_69fba079_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=69fba079&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/user/account/deposits/create.vue?vue&type=template&id=69fba079&scoped=true&");


/***/ }),

/***/ "./packages/payments/resources/js/static/chains.json":
/*!***********************************************************!*\
  !*** ./packages/payments/resources/js/static/chains.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"1":"Ethereum Mainnet","2":"Expanse Network","3":"Ropsten","4":"Rinkeby","5":"Görli","6":"Ethereum Classic Testnet Kotti","7":"ThaiChain","8":"Ubiq","9":"Ubiq Network Testnet","10":"Optimism","11":"Metadium Mainnet","12":"Metadium Testnet","13":"Diode Testnet Staging","14":"Flare Mainnet","15":"Diode Prenet","16":"Flare Testnet Coston","17":"ThaiChain 2.0 ThaiFi","18":"ThunderCore Testnet","19":"Songbird Canary-Network","20":"Elastos Smart Chain","21":"ELA-ETH-Sidechain Testnet","22":"ELA-DID-Sidechain Mainnet","23":"ELA-DID-Sidechain Testnet","24":"Dithereum Mainnet","25":"Cronos Mainnet Beta","26":"Genesis L1 testnet","27":"ShibaChain","28":"Boba Network Rinkeby Testnet","29":"Genesis L1","30":"RSK Mainnet","31":"RSK Testnet","32":"GoodData Testnet","33":"GoodData Mainnet","34":"Dithereum Testnet","35":"TBWG Chain","38":"Valorbit","40":"Telos EVM Mainnet","41":"Telos EVM Testnet","42":"Kovan","43":"Darwinia Pangolin Testnet","44":"Darwinia Crab Network","45":"Darwinia Pangoro Testnet","50":"XinFin Network Mainnet","51":"XinFin Apothem Testnet","52":"CoinEx Smart Chain Mainnet","53":"CoinEx Smart Chain Testnet","54":"Openpiece Mainnet","55":"Zyx Mainnet","56":"Binance Smart Chain Mainnet","57":"Syscoin Mainnet","58":"Ontology Mainnet","59":"EOS Mainnet","60":"GoChain","61":"Ethereum Classic Mainnet","62":"Ethereum Classic Testnet Morden","63":"Ethereum Classic Testnet Mordor","64":"Ellaism","65":"OKExChain Testnet","66":"OKXChain Mainnet","67":"DBChain Testnet","68":"SoterOne Mainnet","69":"Optimism Kovan","70":"Hoo Smart Chain","71":"Conflux eSpace (Testnet)","74":"IDChain Mainnet","76":"Mix","77":"POA Network Sokol","78":"PrimusChain mainnet","79":"Zenith Mainnet","80":"GeneChain","81":"Zenith Testnet (Vilnius)","82":"Meter Mainnet","83":"Meter Testnet","85":"GateChain Testnet","86":"GateChain Mainnet","87":"Nova Network","88":"TomoChain","89":"TomoChain Testnet","90":"Garizon Stage0","91":"Garizon Stage1","92":"Garizon Stage2","93":"Garizon Stage3","95":"CryptoKylin Testnet","96":"NEXT Smart Chain","97":"Binance Smart Chain Testnet","99":"POA Network Core","100":"Gnosis Chain (formerly xDai)","101":"EtherInc","102":"Web3Games Testnet","105":"Web3Games Devnet","106":"Velas EVM Mainnet","107":"Nebula Testnet","108":"ThunderCore Mainnet","110":"Proton Testnet","111":"EtherLite Chain","122":"Fuse Mainnet","123":"Fuse Sparknet","124":"Decentralized Web Mainnet","125":"OYchain Testnet","126":"OYchain Mainnet","127":"Factory 127 Mainnet","128":"Huobi ECO Chain Mainnet","137":"Polygon Mainnet","141":"Openpiece Testnet","142":"DAX CHAIN","162":"Lightstreams Testnet","163":"Lightstreams Mainnet","168":"AIOZ Network","170":"HOO Smart Chain Testnet","172":"Latam-Blockchain Resil Testnet","186":"Seele Mainnet","188":"BMC Mainnet","189":"BMC Testnet","199":"BitTorrent Chain Mainnet","200":"Arbitrum on xDai","211":"Freight Trust Network","218":"SoterOne Mainnet old","222":"Permission","225":"LACHAIN Mainnet","226":"LACHAIN Testnet","239":"Aitd Testnet","246":"Energy Web Chain","250":"Fantom Opera","256":"Huobi ECO Chain Testnet","258":"Setheum","262":"SUR Blockchain Network","269":"High Performance Blockchain","288":"Boba Network","300":"Optimism on Gnosis Chain","321":"KCC Mainnet","322":"KCC Testnet","333":"Web3Q Mainnet","335":"DFK Chain Test","336":"Shiden","338":"Cronos Testnet","361":"Theta Mainnet","363":"Theta Sapphire Testnet","364":"Theta Amber Testnet","365":"Theta Testnet","369":"PulseChain Mainnet","385":"Lisinski","420":"Optimistic Ethereum Testnet Goerli","499":"Rupaya","512":"Double-A Chain Mainnet","513":"Double-A Chain Testnet","534":"Candle Mainnet","555":"Vela1 Chain Mainnet","558":"Tao Network","588":"Metis Stardust Testnet","592":"Astar","595":"Acala Mandala Testnet","596":"Karura Network Testnet","597":"Acala Network Testnet","600":"Meshnyan testnet","666":"Pixie Chain Testnet","686":"Karura Network","700":"Star Social Testnet","707":"BlockChain Station Mainnet","708":"BlockChain Station Testnet","721":"Factory 127 Testnet","776":"OpenChain Testnet","777":"cheapETH","787":"Acala Network","788":"Aerochain Testnet","803":"Haic","820":"Callisto Mainnet","821":"Callisto Testnet","880":"Ambros Chain Mainnet","888":"Wanchain","900":"Garizon Testnet Stage0","901":"Garizon Testnet Stage1","902":"Garizon Testnet Stage2","903":"Garizon Testnet Stage3","940":"PulseChain Testnet","941":"PulseChain Testnet v2b","942":"PulseChain Testnet v3","977":"Nepal Blockchain Network","998":"Lucky Network","999":"Wanchain Testnet","1001":"Klaytn Testnet Baobab","1007":"Newton Testnet","1008":"Eurus Mainnet","1010":"Evrice Network","1012":"Newton","1022":"Sakura","1023":"Clover Testnet","1024":"CLV Parachain","1028":"BitTorrent Chain Testnet","1030":"Conflux eSpace","1088":"Metis Andromeda Mainnet","1139":"MathChain","1140":"MathChain Testnet","1197":"Iora Chain","1201":"Evanesco Testnet","1202":"World Trade Technical Chain Mainnet","1213":"Popcateum Mainnet","1214":"EnterChain Mainnet","1280":"HALO Mainnet","1284":"Moonbeam","1285":"Moonriver","1286":"Moonrock old","1287":"Moonbase Alpha","1288":"Moonrock","1337":"CENNZnet old","1618":"Catecoin Chain Mainnet","1620":"Atheios","1657":"Btachain","1688":"LUDAN Mainnet","1819":"Cube Chain Testnet","1856":"Teslafunds","1898":"BON Network","1984":"Eurus Testnet","1987":"EtherGem","2001":"Milkomeda C1 Mainnet","2008":"CloudWalk Testnet","2009":"CloudWalk Mainnet","2020":"420coin","2021":"Edgeware Mainnet","2022":"Beresheet Testnet","2023":"Taycan Testnet","2025":"Rangers Protocol Mainnet","2100":"Ecoball Mainnet","2101":"Ecoball Testnet Espuma","2152":"Findora Mainnet","2153":"Findora Testnet","2213":"Evanesco Mainnet","2221":"Kava EVM Testnet","2223":"VChain Mainnet","2559":"Kortho Mainnet","2569":"TechPay Mainnet","2612":"EZChain C-Chain Mainnet","2613":"EZChain C-Chain Testnet","3000":"CENNZnet Rata","3001":"CENNZnet Nikau","3331":"ZCore Testnet","3333":"Web3Q Testnet","3334":"Web3Q Galileo","3400":"Paribu Net Mainnet","3500":"Paribu Net Testnet","3690":"Bittex Mainnet","3966":"DYNO Mainnet","3967":"DYNO Testnet","4002":"Fantom Testnet","4102":"AIOZ Network Testnet","4689":"IoTeX Network Mainnet","4690":"IoTeX Network Testnet","4918":"Venidium Testnet","5197":"EraSwap Mainnet","5315":"Uzmi Network Mainnet","5551":"Nahmii Mainnet","5553":"Nahmii Testnet","5700":"Syscoin Tanenbaum Testnet","5777":"Digest Swarm Chain","5851":"Ontology Testnet","5869":"Wegochain Rubidium Mainnet","6626":"Pixie Chain Mainnet","7341":"Shyft Mainnet","7878":"Hazlor Testnet","8000":"Teleport","8001":"Teleport Testnet","8029":"MDGL Testnet","8080":"GeneChain Adenine Testnet","8217":"Klaytn Mainnet Cypress","8285":"KorthoTest","8723":"TOOL Global Mainnet","8724":"TOOL Global Testnet","8888":"Ambros Chain Testnet","8898":"Mammoth Mainnet","8995":"bloxberg","9000":"Evmos Testnet","9001":"Evmos","9100":"Genesis Coin","9527":"Rangers Protocol Testnet Robin","9999":"myOwn Testnet","10000":"Smart Bitcoin Cash","10001":"Smart Bitcoin Cash Testnet","10101":"Blockchain Genesis Mainnet","10823":"CryptoCoinPay","11111":"WAGMI","11437":"Shyft Testnet","12051":"Singularity ZERO Testnet","12052":"Singularity ZERO Mainnet","13381":"Phoenix Mainnet","16000":"MetaDot Mainnet","16001":"MetaDot Testnet","19845":"BTCIX Network","21337":"CENNZnet Azalea","21816":"omChain Mainnet","22023":"Taycan","24484":"Webchain","24734":"MintMe.com Coin","30067":"Piece testnet","31102":"Ethersocial Network","31337":"GoChain Testnet","32520":"Bitgert Mainnet","32659":"Fusion Mainnet","39797":"Energi Mainnet","42069":"pegglecoin","42161":"Arbitrum One","42220":"Celo Mainnet","42261":"Emerald Paratime Testnet","42262":"Emerald Paratime Mainnet","43110":"Athereum","43113":"Avalanche Fuji Testnet","43114":"Avalanche C-Chain","44787":"Celo Alfajores Testnet","45000":"Autobahn Network","47805":"REI Network","49797":"Energi Testnet","53935":"DFK Chain","55555":"REI Chain Mainnet","55556":"REI Chain Testnet","60000":"Thinkium Testnet Chain 0","60001":"Thinkium Testnet Chain 1","60002":"Thinkium Testnet Chain 2","60103":"Thinkium Testnet Chain 103","62320":"Celo Baklava Testnet","62621":"MultiVAC Mainnet","63000":"eCredits Mainnet","63001":"eCredits Testnet","69420":"Condrieu","70000":"Thinkium Mainnet Chain 0","70001":"Thinkium Mainnet Chain 1","70002":"Thinkium Mainnet Chain 2","70103":"Thinkium Mainnet Chain 103","71393":"Polyjuice Testnet","73799":"Energy Web Volta Testnet","78110":"Firenze test network","80001":"Mumbai","99998":"UB Smart Chain(testnet)","99999":"UB Smart Chain","100000":"QuarkChain Mainnet Root","100001":"QuarkChain Mainnet Shard 0","100002":"QuarkChain Mainnet Shard 1","100003":"QuarkChain Mainnet Shard 2","100004":"QuarkChain Mainnet Shard 3","100005":"QuarkChain Mainnet Shard 4","100006":"QuarkChain Mainnet Shard 5","100007":"QuarkChain Mainnet Shard 6","100008":"QuarkChain Mainnet Shard 7","108801":"BROChain Mainnet","110000":"QuarkChain Devnet Root","110001":"QuarkChain Devnet Shard 0","110002":"QuarkChain Devnet Shard 1","110003":"QuarkChain Devnet Shard 2","110004":"QuarkChain Devnet Shard 3","110005":"QuarkChain Devnet Shard 4","110006":"QuarkChain Devnet Shard 5","110007":"QuarkChain Devnet Shard 6","110008":"QuarkChain Devnet Shard 7","200101":"Milkomeda C1 Testnet","200625":"Akroma","201018":"Alaya Mainnet","201030":"Alaya Dev Testnet","210425":"PlatON Mainnet","234666":"Haymo Testnet","246529":"ARTIS sigma1","246785":"ARTIS Testnet tau1","281121":"Social Smart Chain Mainnet","333888":"Polis Testnet","333999":"Polis Mainnet","421611":"Arbitrum Rinkeby","444900":"Weelink Testnet","512512":"CMP-Testnet","666666":"Vision - Vpioneer Test Chain","888888":"Vision - Mainnet","955305":"Eluvio Content Fabric","1313114":"Etho Protocol","1313500":"Xerom","1337702":"Kintsugi","2203181":"PlatON Dev Testnet","7762959":"Musicoin","11155111":"Sepolia","13371337":"PepChain Churchill","18289463":"IOLite","20180430":"SmartMesh Mainnet","20181205":"quarkblockchain","28945486":"Auxilium Network Mainnet","35855456":"Joys Digital Mainnet","61717561":"Aquachain","99415706":"Joys Digital TestNet","192837465":"Gather Mainnet Network","245022926":"Neon EVM DevNet","245022934":"Neon EVM MainNet","245022940":"Neon EVM TestNet","311752642":"OneLedger Mainnet","356256156":"Gather Testnet Network","486217935":"Gather Devnet Network","1122334455":"IPOS Network","1313161554":"Aurora Mainnet","1313161555":"Aurora Testnet","1313161556":"Aurora Betanet","1666600000":"Harmony Mainnet Shard 0","1666600001":"Harmony Mainnet Shard 1","1666600002":"Harmony Mainnet Shard 2","1666600003":"Harmony Mainnet Shard 3","1666700000":"Harmony Testnet Shard 0","1666700001":"Harmony Testnet Shard 1","1666700002":"Harmony Testnet Shard 2","1666700003":"Harmony Testnet Shard 3","2021121117":"DataHopper","3125659152":"Pirl","4216137055":"OneLedger Testnet Frankenstein","11297108099":"Palm Testnet","11297108109":"Palm","197710212030":"Ntity Mainnet","197710212031":"Haradev Testnet","6022140761023":"Molereum Network","868455272153094":"Godwoken Testnet (V1)"}');

/***/ })

}]);