"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/slots-resources-js-pages-admin-settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Admin_FileUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/Admin/FileUpload */ "./resources/js/components/Admin/FileUpload.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FileUpload: _components_Admin_FileUpload__WEBPACK_IMPORTED_MODULE_5__["default"],
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_4___default())
  },
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_3__["default"]],
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
      cloneVariationForm: new (vform__WEBPACK_IMPORTED_MODULE_2___default())({
        id: null
      }),
      removeVariationForm: new (vform__WEBPACK_IMPORTED_MODULE_2___default())()
    };
  },
  computed: {
    variationsCount: function variationsCount() {
      return this.form.GAME_SLOTS_VARIATIONS.length;
    },
    url: function url() {
      return window.location.origin + '/slots/';
    }
  },
  created: function created() {
    var variations = (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".variations")).map(function (v, i) {
      if (typeof v.id === 'undefined') {
        v.id = i;
      }
      if (typeof v.auto_play === 'undefined') {
        v.auto_play = {
          enabled: true,
          interval: 8
        };
      }
      if (typeof v.sounds === 'undefined') {
        v.sounds = {
          win: null,
          lose: null
        };
      }
      return v;
    });
    this.$emit('input', {
      GAME_SLOTS_VARIATIONS: variations
    });
  },
  methods: {
    symbolImagePath: function symbolImagePath(variationIndex, symbolIndex) {
      return this.form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex] ? this.form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex].image : '';
    },
    moveVariationUp: function moveVariationUp(variationIndex) {
      (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_1__.moveArrayElement)(this.form.GAME_SLOTS_VARIATIONS, variationIndex, variationIndex - 1);
    },
    moveVariationDown: function moveVariationDown(variationIndex) {
      (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_1__.moveArrayElement)(this.form.GAME_SLOTS_VARIATIONS, variationIndex, variationIndex + 1);
    },
    cloneVariation: function cloneVariation(variationIndex) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var clonableVariationId, id, n, _yield$_this$cloneVar, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              clonableVariationId = _this.form.GAME_SLOTS_VARIATIONS[variationIndex].id;
              id = Math.round(new Date().getTime() / 1000);
              n = _this.form.GAME_SLOTS_VARIATIONS.length;
              _this.cloneVariationForm.id = id;
              _context.next = 6;
              return _this.cloneVariationForm.post("/api/admin/settings/slots/variations/".concat(clonableVariationId));
            case 6:
              _yield$_this$cloneVar = _context.sent;
              data = _yield$_this$cloneVar.data;
              if (data.success) {
                _this.form.GAME_SLOTS_VARIATIONS.push(JSON.parse(JSON.stringify(_this.form.GAME_SLOTS_VARIATIONS[variationIndex])));
                _this.form.GAME_SLOTS_VARIATIONS[n].id = id;
                _this.form.GAME_SLOTS_VARIATIONS[n].title += ' - cloned';
                _this.form.GAME_SLOTS_VARIATIONS[n].slug += '-cloned';
              } else {
                _this.$store.dispatch('message/error', {
                  text: data.message
                });
              }
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    removeVariation: function removeVariation(variationIndex) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var id, _yield$_this2$removeV, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              id = _this2.form.GAME_SLOTS_VARIATIONS[variationIndex].id;
              _context2.next = 3;
              return _this2.removeVariationForm["delete"]("/api/admin/settings/slots/variations/".concat(id));
            case 3:
              _yield$_this2$removeV = _context2.sent;
              data = _yield$_this2$removeV.data;
              // remove variation from the settings object in any case
              _this2.form.GAME_SLOTS_VARIATIONS.splice(variationIndex, 1);
              if (!data.success) {
                _this2.$store.dispatch('message/error', {
                  text: data.message
                });
              }
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    addSymbol: function addSymbol(variationIndex) {
      this.form.GAME_SLOTS_VARIATIONS[variationIndex].symbols.push({
        image: '',
        wild: false,
        scatter: false,
        payouts: [0, 0, 0, 0, 0]
      });
    },
    removeSymbol: function removeSymbol(variationIndex, symbolIndex) {
      // this.form.GAME_SLOTS_VARIATIONS[variationIndex].reels.forEach((reel, i, reels) => {
      //   reels[i] = [...reel.filter(index => index !== symbolIndex)]
      // })
      this.form.GAME_SLOTS_VARIATIONS[variationIndex].symbols.splice(symbolIndex, 1);
    },
    disableActiveMagicSymbols: function disableActiveMagicSymbols(type, variationIndex, symbolIndex, enabled) {
      if (enabled) {
        // disable all wild / scatter symbols except current one, because only 1 wild / scatter symbol can be enabled at a time
        this.form.GAME_SLOTS_VARIATIONS[variationIndex].symbols.forEach(function (symbol, index, symbols) {
          if (index !== symbolIndex) {
            symbols[index][type] = false;
          }
        });
      }
    },
    addSymbolToReel: function addSymbolToReel(variationIndex, reelIndex, symbolIndex) {
      this.form.GAME_SLOTS_VARIATIONS[variationIndex].reels[reelIndex].push(symbolIndex);
    },
    removeSymbolFromReel: function removeSymbolFromReel(variationIndex, reelIndex, index) {
      this.form.GAME_SLOTS_VARIATIONS[variationIndex].reels[reelIndex].splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".v-badge[data-v-9f694888] {\n  cursor: move;\n  /* fallback if grab cursor is unsupported */\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n.sortable-chosen .v-badge[data-v-9f694888], .sortable-ghost .v-badge[data-v-9f694888] {\n  cursor: move;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_9f694888_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_9f694888_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_9f694888_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./packages/slots/resources/js/pages/admin/settings.vue":
/*!**************************************************************!*\
  !*** ./packages/slots/resources/js/pages/admin/settings.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_vue_vue_type_template_id_9f694888_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=9f694888&scoped=true& */ "./packages/slots/resources/js/pages/admin/settings.vue?vue&type=template&id=9f694888&scoped=true&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./packages/slots/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _settings_vue_vue_type_style_index_0_id_9f694888_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true& */ "./packages/slots/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_9f694888_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _settings_vue_vue_type_template_id_9f694888_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9f694888",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/slots/resources/js/pages/admin/settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/slots/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./packages/slots/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/slots/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./packages/slots/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_9f694888_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=template&id=9f694888&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=template&id=9f694888&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js");
/* harmony import */ var vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VBadge */ "./node_modules/vuetify/lib/components/VBadge/VBadge.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCombobox */ "./node_modules/vuetify/lib/components/VCombobox/VCombobox.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/VDivider.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VList.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItem.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItemIcon.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/VMenu.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/VSwitch.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");





















var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      flat: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardText, [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__["default"], _vm._l(_vm.form.GAME_SLOTS_VARIATIONS, function (variation, variationIndex) {
    return _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: variationIndex
    }, [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(variation.title))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("General")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      attrs: {
        label: _vm.$t("Title"),
        rules: [_vm.validationRequired],
        outlined: ""
      },
      model: {
        value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].title,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex], "title", $$v);
        },
        expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].title"
      }
    }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      attrs: {
        label: _vm.$t("Slug"),
        rules: [_vm.validationRequired],
        prefix: _vm.url,
        outlined: ""
      },
      model: {
        value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].slug,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex], "slug", $$v);
        },
        expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].slug"
      }
    }), _vm._v(" "), _c(vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      attrs: {
        label: _vm.$t("Categories"),
        multiple: "",
        outlined: "",
        chips: "",
        "small-chips": "",
        "deletable-chips": "",
        "hide-selected": "",
        "no-filter": ""
      },
      model: {
        value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].categories,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex], "categories", $$v);
        },
        expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].categories"
      }
    }), _vm._v(" "), _c("file-upload", {
      attrs: {
        label: _vm.$t("Banner"),
        name: "banner",
        folder: "games/slots/".concat(variation.id)
      },
      model: {
        value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].banner,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex], "banner", $$v);
        },
        expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].banner"
      }
    }), _vm._v(" "), _c("file-upload", {
      attrs: {
        label: _vm.$t("Background image"),
        name: "background",
        folder: "games/slots/".concat(variation.id),
        clearable: true
      },
      model: {
        value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].background,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex], "background", $$v);
        },
        expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].background"
      }
    }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      attrs: {
        label: _vm.$t("Min bet"),
        rules: [_vm.validationInteger, _vm.validationPositiveNumber],
        outlined: "",
        suffix: _vm.$t("credits")
      },
      model: {
        value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].min_bet,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex], "min_bet", _vm._n($$v));
        },
        expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].min_bet"
      }
    }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      attrs: {
        label: _vm.$t("Max bet"),
        rules: [_vm.validationInteger, _vm.validationPositiveNumber],
        outlined: "",
        suffix: _vm.$t("credits")
      },
      model: {
        value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].max_bet,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex], "max_bet", _vm._n($$v));
        },
        expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].max_bet"
      }
    }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      attrs: {
        label: _vm.$t("Bet increment / decrement amount"),
        rules: [_vm.validationInteger, _vm.validationPositiveNumber],
        outlined: "",
        suffix: _vm.$t("credits")
      },
      model: {
        value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].bet_change_amount,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex], "bet_change_amount", _vm._n($$v));
        },
        expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].bet_change_amount"
      }
    }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      attrs: {
        label: _vm.$t("Default bet amount"),
        rules: [_vm.validationInteger, _vm.validationPositiveNumber],
        outlined: "",
        suffix: _vm.$t("credits")
      },
      model: {
        value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].default_bet_amount,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex], "default_bet_amount", _vm._n($$v));
        },
        expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].default_bet_amount"
      }
    }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      attrs: {
        label: _vm.$t("Default number of lines"),
        rules: [_vm.validationInteger, function (v) {
          return _vm.validationMin(v, 1);
        }, function (v) {
          return _vm.validationMax(v, 20);
        }],
        outlined: ""
      },
      model: {
        value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].default_lines,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex], "default_lines", _vm._n($$v));
        },
        expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].default_lines"
      }
    }), _vm._v(" "), _c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_8__["default"], {
      attrs: {
        label: _vm.$t("Auto play"),
        color: "primary",
        "false-value": false,
        "true-value": true
      },
      model: {
        value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].auto_play.enabled,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex].auto_play, "enabled", $$v);
        },
        expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].auto_play.enabled"
      }
    }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].auto_play.enabled,
        expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].auto_play.enabled"
      }],
      attrs: {
        label: _vm.$t("Auto play interval"),
        rules: [_vm.validationPositiveInteger],
        outlined: "",
        suffix: _vm.$t("seconds")
      },
      model: {
        value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].auto_play.interval,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex].auto_play, "interval", _vm._n($$v));
        },
        expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].auto_play.interval"
      }
    })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Symbols")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_vm._l(variation.symbols, function (symbols, symbolIndex) {
      return [_c("div", {
        key: symbolIndex
      }, [_c("file-upload", {
        attrs: {
          label: _vm.$t("Image"),
          name: "symbol-".concat(symbolIndex),
          folder: "games/slots/".concat(variation.id)
        },
        model: {
          value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex].image,
          callback: function callback($$v) {
            _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex], "image", $$v);
          },
          expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex].image"
        }
      }), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], _vm._l([0, 1, 2, 3, 4], function (k) {
        return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: k
        }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
          staticClass: "text-center",
          attrs: {
            label: _vm.$t("Payout") + " x" + (k + 1),
            rules: [_vm.validationInteger],
            "hide-details": true,
            outlined: ""
          },
          model: {
            value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex].payouts[k],
            callback: function callback($$v) {
              _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex].payouts, k, _vm._n($$v));
            },
            expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex].payouts[k]"
          }
        })], 1);
      }), 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], [_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_8__["default"], {
        attrs: {
          label: _vm.$t("Wild"),
          color: "primary",
          "false-value": false,
          "true-value": true
        },
        on: {
          change: function change($event) {
            return _vm.disableActiveMagicSymbols("wild", variationIndex, symbolIndex, $event);
          }
        },
        model: {
          value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex].wild,
          callback: function callback($$v) {
            _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex], "wild", $$v);
          },
          expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex].wild"
        }
      })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], [_c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_8__["default"], {
        attrs: {
          label: _vm.$t("Scatter"),
          color: "primary",
          "false-value": false,
          "true-value": true
        },
        on: {
          change: function change($event) {
            return _vm.disableActiveMagicSymbols("scatter", variationIndex, symbolIndex, $event);
          }
        },
        model: {
          value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex].scatter,
          callback: function callback($$v) {
            _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex], "scatter", $$v);
          },
          expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex].scatter"
        }
      })], 1)], 1), _vm._v(" "), variation.symbols.length > 1 ? _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
        attrs: {
          color: "error"
        },
        on: {
          click: function click($event) {
            return _vm.removeSymbol(variationIndex, symbolIndex);
          }
        }
      }, [_vm._v("\n                          " + _vm._s(_vm.$t("Remove symbol")) + "\n                        ")])], 1)], 1) : _vm._e(), _vm._v(" "), symbolIndex < variation.symbols.length - 1 ? _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_12__["default"], {
        staticClass: "mt-5 mb-10"
      }) : _vm._e()], 1)];
    }), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
      attrs: {
        color: "primary"
      },
      on: {
        click: function click($event) {
          return _vm.addSymbol(variationIndex);
        }
      }
    }, [_vm._v("\n                      " + _vm._s(_vm.$t("Add symbol")) + "\n                    ")])], 1)], 1)], 2)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Reels")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], _vm._l([0, 1, 2, 3, 4], function (reelIndex) {
      return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: reelIndex
      }, [_c("draggable", {
        attrs: {
          list: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].reels[reelIndex]
        }
      }, _vm._l(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex].reels[reelIndex], function (symbolIndex, k) {
        return _c("div", {
          key: k,
          staticClass: "text-center mb-3"
        }, [_c(vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_13__["default"], {
          attrs: {
            color: "rgba(255,255,255,0)"
          }
        }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
          attrs: {
            slot: "badge",
            color: "error",
            icon: "",
            "x-small": ""
          },
          on: {
            click: function click($event) {
              return _vm.removeSymbolFromReel(variationIndex, reelIndex, k);
            }
          },
          slot: "badge"
        }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_14__["default"], [_vm._v("mdi-close")])], 1), _vm._v(" "), _c(vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_15__["default"], {
          attrs: {
            size: "64",
            tile: ""
          }
        }, [_c("img", {
          attrs: {
            src: _vm.symbolImagePath(variationIndex, symbolIndex),
            alt: _vm.symbolImagePath(variationIndex, symbolIndex)
          }
        })])], 1)], 1);
      }), 0), _vm._v(" "), _c("div", {
        staticClass: "text-center mt-5"
      }, [_c(vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_16__["default"], {
        attrs: {
          "offset-y": "",
          top: "",
          right: "",
          "max-height": "300"
        },
        scopedSlots: _vm._u([{
          key: "activator",
          fn: function fn(_ref) {
            var on = _ref.on;
            return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], _vm._g({
              attrs: {
                color: "primary",
                small: ""
              }
            }, on), [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_14__["default"], [_vm._v("mdi-plus")]), _vm._v("\n                            " + _vm._s(_vm.$t("Add")) + "\n                          ")], 1)];
          }
        }], null, true)
      }, [_vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_17__["default"], _vm._l(variation.symbols, function (symbol, symbolIndex) {
        return _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_18__["default"], {
          key: symbolIndex,
          on: {
            click: function click($event) {
              return _vm.addSymbolToReel(variationIndex, reelIndex, symbolIndex);
            }
          }
        }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_19__["default"], {
          staticClass: "mr-0"
        }, [_c(vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_15__["default"], {
          attrs: {
            size: "64",
            tile: ""
          }
        }, [_c("img", {
          attrs: {
            src: _vm.symbolImagePath(variationIndex, symbolIndex),
            alt: _vm.symbolImagePath(variationIndex, symbolIndex)
          }
        })])], 1)], 1);
      }), 1)], 1)], 1)], 1);
    }), 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Sounds")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c("file-upload", {
      attrs: {
        label: _vm.$t("Win"),
        name: "win",
        folder: "games/slots/".concat(variation.id),
        accept: ".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",
        clearable: true
      },
      model: {
        value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].sounds.win,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex].sounds, "win", $$v);
        },
        expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].sounds.win"
      }
    }), _vm._v(" "), _c("file-upload", {
      attrs: {
        label: _vm.$t("Lose"),
        name: "lose",
        folder: "games/slots/".concat(variation.id),
        accept: ".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",
        clearable: true
      },
      model: {
        value: _vm.form.GAME_SLOTS_VARIATIONS[variationIndex].sounds.lose,
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_SLOTS_VARIATIONS[variationIndex].sounds, "lose", $$v);
        },
        expression: "form.GAME_SLOTS_VARIATIONS[variationIndex].sounds.lose"
      }
    })], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"], [_vm.variationsCount > 1 && variationIndex < _vm.variationsCount - 1 ? _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
      attrs: {
        color: "primary",
        icon: "",
        large: "",
        tile: ""
      },
      on: {
        click: function click($event) {
          return _vm.moveVariationDown(variationIndex);
        }
      }
    }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_14__["default"], [_vm._v("mdi-arrow-down")])], 1) : _vm._e(), _vm._v(" "), _vm.variationsCount > 1 && variationIndex > 0 ? _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
      attrs: {
        color: "primary",
        icon: "",
        large: "",
        tile: ""
      },
      on: {
        click: function click($event) {
          return _vm.moveVariationUp(variationIndex);
        }
      }
    }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_14__["default"], [_vm._v("mdi-arrow-up")])], 1) : _vm._e(), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
      staticClass: "mx-2",
      attrs: {
        color: "primary"
      },
      on: {
        click: function click($event) {
          return _vm.cloneVariation(variationIndex);
        }
      }
    }, [_vm._v("\n                " + _vm._s(_vm.$t("Clone")) + "\n              ")]), _vm._v(" "), _vm.variationsCount > 1 ? _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
      attrs: {
        color: "error"
      },
      on: {
        click: function click($event) {
          return _vm.removeVariation(variationIndex);
        }
      }
    }, [_vm._v("\n                " + _vm._s(_vm.$t("Remove")) + "\n              ")]) : _vm._e()], 1)], 1)], 1)], 1);
  }), 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/slots/resources/js/pages/admin/settings.vue?vue&type=template&id=9f694888&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./packages/slots/resources/js/pages/admin/settings.vue?vue&type=template&id=9f694888&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_9f694888_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_9f694888_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_9f694888_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=9f694888&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=template&id=9f694888&scoped=true&");


/***/ })

}]);