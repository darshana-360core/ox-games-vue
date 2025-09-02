"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/crypto-prediction-resources-js-pages-admin-settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/crypto-prediction/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/crypto-prediction/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _components_Admin_FileUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Admin/FileUpload */ "./resources/js/components/Admin/FileUpload.vue");
/* harmony import */ var _components_AssetSearchAutocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/AssetSearchAutocomplete */ "./resources/js/components/AssetSearchAutocomplete.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AssetSearchAutocomplete: _components_AssetSearchAutocomplete__WEBPACK_IMPORTED_MODULE_3__["default"],
    FileUpload: _components_Admin_FileUpload__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    packageId: {
      type: String,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      variables: {
        CRYPTO_PREDICTION_BANNER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".banner")),
        CRYPTO_PREDICTION_BACKGROUND: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".background")),
        CRYPTO_PREDICTION_MIN_BET: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".min_bet")), 10),
        CRYPTO_PREDICTION_MAX_BET: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".max_bet")), 10),
        CRYPTO_PREDICTION_BET_CHANGE_AMOUNT: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".bet_change_amount")), 10),
        CRYPTO_PREDICTION_DEFAULT_BET_AMOUNT: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".default_bet_amount")), 10),
        CRYPTO_PREDICTION_DEFAULT_ASSET_NAME: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".default_asset_name")),
        CRYPTO_PREDICTION_ASSET_MAX_RANK: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".asset_max_rank")), 10),
        CRYPTO_PREDICTION_DURATIONS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".durations")),
        CRYPTO_PREDICTION_PAYTABLE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".paytable")),
        CRYPTO_PREDICTION_PRICE_UPDATE_INTERVAL: parseInt((0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".price_update_interval")), 10),
        CRYPTO_PREDICTION_SOUNDS_WIN: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".sounds.win")),
        CRYPTO_PREDICTION_SOUNDS_LOSE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".sounds.lose"))
      }
    };
  },
  computed: {
    availableDurations: function availableDurations() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".available_durations"));
    }
  },
  created: function created() {
    this.$emit('input', this.variables);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AssetSearchAutocomplete.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AssetSearchAutocomplete.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/route */ "./resources/js/plugins/route.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      "default": ''
    },
    defaultAssetName: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      "default": false
    },
    dense: {
      type: Boolean,
      required: false,
      "default": false
    }
  },
  data: function data() {
    return {
      value: {},
      items: [],
      searchInProgress: false,
      input: null
    };
  },
  watch: {
    input: function input(value, previousValue) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$post, items;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(value === null || value === _this.value.name || _this.searchInProgress)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", false);
            case 2:
              _this.searchInProgress = true;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post((0,_plugins_route__WEBPACK_IMPORTED_MODULE_0__.route)('assets.search'), {
                type: _this.type,
                search: value,
                exact: previousValue === null
              });
            case 5:
              _yield$axios$post = _context.sent;
              items = _yield$axios$post.data;
              _this.items = items;
              if (previousValue === null && _this.items.length) {
                _this.value = _this.items[0];
                _this.$emit('change', _this.value);
              }
              _this.searchInProgress = false;
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    var _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            // trigger input change
            _this2.input = _this2.defaultAssetName;
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
});

/***/ }),

/***/ "./packages/crypto-prediction/resources/js/pages/admin/settings.vue":
/*!**************************************************************************!*\
  !*** ./packages/crypto-prediction/resources/js/pages/admin/settings.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_vue_vue_type_template_id_422787bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=422787bc& */ "./packages/crypto-prediction/resources/js/pages/admin/settings.vue?vue&type=template&id=422787bc&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./packages/crypto-prediction/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_422787bc___WEBPACK_IMPORTED_MODULE_0__.render,
  _settings_vue_vue_type_template_id_422787bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/crypto-prediction/resources/js/pages/admin/settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/crypto-prediction/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./packages/crypto-prediction/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/crypto-prediction/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AssetSearchAutocomplete.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/AssetSearchAutocomplete.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetSearchAutocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssetSearchAutocomplete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AssetSearchAutocomplete.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetSearchAutocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/crypto-prediction/resources/js/pages/admin/settings.vue?vue&type=template&id=422787bc&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/crypto-prediction/resources/js/pages/admin/settings.vue?vue&type=template&id=422787bc& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCombobox */ "./node_modules/vuetify/lib/components/VCombobox/VCombobox.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");











var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      flat: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardText, [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("General")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c("file-upload", {
    attrs: {
      label: _vm.$t("Banner"),
      name: "banner",
      folder: "games/".concat(_vm.packageId)
    },
    model: {
      value: _vm.form.CRYPTO_PREDICTION_BANNER,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "CRYPTO_PREDICTION_BANNER", $$v);
      },
      expression: "form.CRYPTO_PREDICTION_BANNER"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Background image"),
      name: "background",
      folder: "games/".concat(_vm.packageId),
      clearable: true
    },
    model: {
      value: _vm.form.CRYPTO_PREDICTION_BACKGROUND,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "CRYPTO_PREDICTION_BACKGROUND", $$v);
      },
      expression: "form.CRYPTO_PREDICTION_BACKGROUND"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Min bet"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("CRYPTO_PREDICTION_MIN_BET"),
      "error-messages": _vm.form.errors.get("CRYPTO_PREDICTION_MIN_BET"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "CRYPTO_PREDICTION_MIN_BET");
      }
    },
    model: {
      value: _vm.form.CRYPTO_PREDICTION_MIN_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "CRYPTO_PREDICTION_MIN_BET", _vm._n($$v));
      },
      expression: "form.CRYPTO_PREDICTION_MIN_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Max bet"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("CRYPTO_PREDICTION_MAX_BET"),
      "error-messages": _vm.form.errors.get("CRYPTO_PREDICTION_MAX_BET"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "CRYPTO_PREDICTION_MAX_BET");
      }
    },
    model: {
      value: _vm.form.CRYPTO_PREDICTION_MAX_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "CRYPTO_PREDICTION_MAX_BET", _vm._n($$v));
      },
      expression: "form.CRYPTO_PREDICTION_MAX_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Bet increment / decrement amount"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("CRYPTO_PREDICTION_BET_CHANGE_AMOUNT"),
      "error-messages": _vm.form.errors.get("CRYPTO_PREDICTION_BET_CHANGE_AMOUNT"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "CRYPTO_PREDICTION_BET_CHANGE_AMOUNT");
      }
    },
    model: {
      value: _vm.form.CRYPTO_PREDICTION_BET_CHANGE_AMOUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "CRYPTO_PREDICTION_BET_CHANGE_AMOUNT", _vm._n($$v));
      },
      expression: "form.CRYPTO_PREDICTION_BET_CHANGE_AMOUNT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Default bet amount"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("CRYPTO_PREDICTION_DEFAULT_BET_AMOUNT"),
      "error-messages": _vm.form.errors.get("CRYPTO_PREDICTION_DEFAULT_BET_AMOUNT"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "CRYPTO_PREDICTION_DEFAULT_BET_AMOUNT");
      }
    },
    model: {
      value: _vm.form.CRYPTO_PREDICTION_DEFAULT_BET_AMOUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "CRYPTO_PREDICTION_DEFAULT_BET_AMOUNT", _vm._n($$v));
      },
      expression: "form.CRYPTO_PREDICTION_DEFAULT_BET_AMOUNT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Durations"),
      items: _vm.availableDurations,
      "item-text": "text",
      "item-value": "value",
      multiple: "",
      outlined: "",
      chips: "",
      "small-chips": "",
      "deletable-chips": "",
      "hide-selected": "",
      "no-filter": ""
    },
    model: {
      value: _vm.form.CRYPTO_PREDICTION_DURATIONS,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "CRYPTO_PREDICTION_DURATIONS", $$v);
      },
      expression: "form.CRYPTO_PREDICTION_DURATIONS"
    }
  }), _vm._v(" "), _c("asset-search-autocomplete", {
    attrs: {
      type: "crypto",
      label: _vm.$t("Default asset"),
      "default-asset-name": _vm.variables.CRYPTO_PREDICTION_DEFAULT_ASSET_NAME
    },
    on: {
      change: function change($event) {
        _vm.form.CRYPTO_PREDICTION_DEFAULT_ASSET_NAME = $event.name;
      }
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    staticClass: "mb-5",
    attrs: {
      label: _vm.$t("Asset rank limit"),
      rules: [_vm.validationInteger, function (v) {
        return _vm.validationMin(v, 1);
      }, function (v) {
        return _vm.validationMax(v, 100);
      }],
      error: _vm.form.errors.has("CRYPTO_PREDICTION_ASSET_MAX_RANK"),
      "error-messages": _vm.form.errors.get("CRYPTO_PREDICTION_ASSET_MAX_RANK"),
      outlined: "",
      hint: _vm.$t("Lower ranked assets will not be available for play.") + " " + _vm.$t("Market data provider can be selected in Services » Crypto API."),
      "persistent-hint": ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "CRYPTO_PREDICTION_ASSET_MAX_RANK");
      }
    },
    model: {
      value: _vm.form.CRYPTO_PREDICTION_ASSET_MAX_RANK,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "CRYPTO_PREDICTION_ASSET_MAX_RANK", _vm._n($$v));
      },
      expression: "form.CRYPTO_PREDICTION_ASSET_MAX_RANK"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    staticClass: "mb-5",
    attrs: {
      label: _vm.$t("Price refresh interval"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("CRYPTO_PREDICTION_PRICE_UPDATE_INTERVAL"),
      "error-messages": _vm.form.errors.get("CRYPTO_PREDICTION_PRICE_UPDATE_INTERVAL"),
      outlined: "",
      prefix: _vm.$t("Every"),
      suffix: _vm.$t("seconds"),
      hint: _vm.$t("Market data source: {0}", ["coincap.io"]),
      "persistent-hint": ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "CRYPTO_PREDICTION_PRICE_UPDATE_INTERVAL");
      }
    },
    model: {
      value: _vm.form.CRYPTO_PREDICTION_PRICE_UPDATE_INTERVAL,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "CRYPTO_PREDICTION_PRICE_UPDATE_INTERVAL", _vm._n($$v));
      },
      expression: "form.CRYPTO_PREDICTION_PRICE_UPDATE_INTERVAL"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      "no-gutters": ""
    }
  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    staticClass: "pr-lg-2",
    attrs: {
      cols: "12",
      lg: "6"
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: "".concat(_vm.$t("Payout"), " (").concat(_vm.$t("Higher"), ")"),
      rules: [_vm.validationPositiveNumber],
      error: _vm.form.errors.has("CRYPTO_PREDICTION_PAYTABLE"),
      "error-messages": _vm.form.errors.get("CRYPTO_PREDICTION_PAYTABLE"),
      outlined: "",
      prefix: "".concat(_vm.$t("Bet"), " x"),
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "CRYPTO_PREDICTION_PAYTABLE");
      }
    },
    model: {
      value: _vm.form.CRYPTO_PREDICTION_PAYTABLE[1],
      callback: function callback($$v) {
        _vm.$set(_vm.form.CRYPTO_PREDICTION_PAYTABLE, 1, _vm._n($$v));
      },
      expression: "form.CRYPTO_PREDICTION_PAYTABLE[1]"
    }
  })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    staticClass: "pl-lg-2",
    attrs: {
      cols: "12",
      lg: "6"
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: "".concat(_vm.$t("Payout"), " (").concat(_vm.$t("Lower"), ")"),
      rules: [_vm.validationPositiveNumber],
      error: _vm.form.errors.has("CRYPTO_PREDICTION_PAYTABLE"),
      "error-messages": _vm.form.errors.get("CRYPTO_PREDICTION_PAYTABLE"),
      outlined: "",
      prefix: "".concat(_vm.$t("Bet"), " x"),
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "CRYPTO_PREDICTION_PAYTABLE");
      }
    },
    model: {
      value: _vm.form.CRYPTO_PREDICTION_PAYTABLE[-1],
      callback: function callback($$v) {
        _vm.$set(_vm.form.CRYPTO_PREDICTION_PAYTABLE, -1, _vm._n($$v));
      },
      expression: "form.CRYPTO_PREDICTION_PAYTABLE[-1]"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Sounds")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c("file-upload", {
    attrs: {
      label: _vm.$t("Win"),
      name: "win",
      folder: "games/".concat(_vm.packageId),
      accept: ".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",
      clearable: true
    },
    model: {
      value: _vm.form.CRYPTO_PREDICTION_SOUNDS_WIN,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "CRYPTO_PREDICTION_SOUNDS_WIN", $$v);
      },
      expression: "form.CRYPTO_PREDICTION_SOUNDS_WIN"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Lose"),
      name: "lose",
      folder: "games/".concat(_vm.packageId),
      accept: ".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",
      clearable: true
    },
    model: {
      value: _vm.form.CRYPTO_PREDICTION_SOUNDS_LOSE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "CRYPTO_PREDICTION_SOUNDS_LOSE", $$v);
      },
      expression: "form.CRYPTO_PREDICTION_SOUNDS_LOSE"
    }
  })], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AssetSearchAutocomplete.vue?vue&type=template&id=d7086fb6&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AssetSearchAutocomplete.vue?vue&type=template&id=d7086fb6& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VAutocomplete */ "./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItemAvatar.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");






var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      label: _vm.label || _vm.$t("Asset"),
      items: _vm.items,
      loading: _vm.searchInProgress,
      "search-input": _vm.input,
      disabled: _vm.disabled,
      color: "primary",
      "hide-selected": "",
      "hide-no-data": "",
      "item-text": "name",
      placeholder: _vm.$t("Search") + "...",
      "return-object": "",
      "hide-details": _vm.dense,
      dense: _vm.dense,
      outlined: ""
    },
    on: {
      "update:searchInput": function updateSearchInput($event) {
        _vm.input = $event;
      },
      "update:search-input": function updateSearchInput($event) {
        _vm.input = $event;
      },
      change: function change($event) {
        return _vm.$emit("change", _vm.value);
      }
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_1__["default"], {
          staticClass: "text-h5 font-weight-light justify-center",
          attrs: {
            color: "primary"
          }
        }, [_vm._v("\n      " + _vm._s(item.name.charAt(0).toUpperCase()) + "\n    ")]), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_2__.VListItemContent, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_2__.VListItemTitle, {
          domProps: {
            textContent: _vm._s(item.name)
          }
        }), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_2__.VListItemSubtitle, {
          domProps: {
            textContent: _vm._s(item.symbol)
          }
        })], 1)];
      }
    }]),
    model: {
      value: _vm.value,
      callback: function callback($$v) {
        _vm.value = $$v;
      },
      expression: "value"
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/crypto-prediction/resources/js/pages/admin/settings.vue?vue&type=template&id=422787bc&":
/*!*********************************************************************************************************!*\
  !*** ./packages/crypto-prediction/resources/js/pages/admin/settings.vue?vue&type=template&id=422787bc& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_422787bc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_422787bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_422787bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=422787bc& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/crypto-prediction/resources/js/pages/admin/settings.vue?vue&type=template&id=422787bc&");


/***/ }),

/***/ "./resources/js/components/AssetSearchAutocomplete.vue?vue&type=template&id=d7086fb6&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/AssetSearchAutocomplete.vue?vue&type=template&id=d7086fb6& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetSearchAutocomplete_vue_vue_type_template_id_d7086fb6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetSearchAutocomplete_vue_vue_type_template_id_d7086fb6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetSearchAutocomplete_vue_vue_type_template_id_d7086fb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssetSearchAutocomplete.vue?vue&type=template&id=d7086fb6& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AssetSearchAutocomplete.vue?vue&type=template&id=d7086fb6&");


/***/ })

}]);