(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/slots-resources-js-pages-game"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/game.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/game.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _mixins_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/mixins/Game */ "./resources/js/mixins/Game.vue");
/* harmony import */ var _mixins_Sound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/mixins/Sound */ "./resources/js/mixins/Sound.vue");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");
/* harmony import */ var packages_slots_resources_audio_win_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! packages/slots/resources/audio/win.wav */ "./packages/slots/resources/audio/win.wav");
/* harmony import */ var packages_slots_resources_audio_lose_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! packages/slots/resources/audio/lose.wav */ "./packages/slots/resources/audio/lose.wav");
/* harmony import */ var packages_slots_resources_audio_spin_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! packages/slots/resources/audio/spin.wav */ "./packages/slots/resources/audio/spin.wav");
/* harmony import */ var packages_slots_resources_audio_start_wav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! packages/slots/resources/audio/start.wav */ "./packages/slots/resources/audio/start.wav");
/* harmony import */ var packages_slots_resources_audio_stop_wav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! packages/slots/resources/audio/stop.wav */ "./packages/slots/resources/audio/stop.wav");
/* harmony import */ var packages_slots_resources_images_animation_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! packages/slots/resources/images/animation.png */ "./packages/slots/resources/images/animation.png");
/* harmony import */ var packages_slots_resources_images_animation_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(packages_slots_resources_images_animation_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Games_PlayControls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/components/Games/PlayControls */ "./resources/js/components/Games/PlayControls.vue");
/* harmony import */ var _components_Games_GameMessage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/components/Games/GameMessage */ "./resources/js/components/Games/GameMessage.vue");
/* harmony import */ var _components_BlockPreloader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/components/BlockPreloader */ "./resources/js/components/BlockPreloader.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Slots',
  components: {
    BlockPreloader: _components_BlockPreloader__WEBPACK_IMPORTED_MODULE_14__["default"],
    GameMessage: _components_Games_GameMessage__WEBPACK_IMPORTED_MODULE_13__["default"],
    PlayControls: _components_Games_PlayControls__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_Game__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_Sound__WEBPACK_IMPORTED_MODULE_4__["default"]],
  data: function data() {
    return {
      loading: false,
      playing: false,
      ready: false,
      message: null,
      bet: 0,
      lines: 0,
      line_cols: [[4, 2, 6, 9, 10, 1, 8, 7, 3, 5], [11, 13, 16, 12, 15, 17, 19, 14, 18, 20]],
      line_blink: [],
      win: {},
      win_scatters: [],
      win_lines: {},
      win_loop: [],
      result: null,
      animation: {}
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_15__.mapState)('auth', ['account'])), {}, {
    variations: function variations() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_1__.config)("".concat(this.gamePackageId)).variations;
    },
    variation: function variation() {
      var _this = this;
      return this.variations && this.variations.length ? this.variations.findIndex(function (o) {
        return o.slug === _this.$route.params.slug;
      }) : null;
    },
    config: function config() {
      return this.variation !== null ? this.variations[this.variation] : {};
    },
    totalBetAmount: function totalBetAmount() {
      return this.bet * this.lines;
    }
  }),
  watch: {
    variation: function variation(n, o) {
      // don't call init() when component is initiated, because it's called in the created() hook
      if (o !== null) {
        this.init();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.show_demo_t);
    clearInterval(this.i);
    this.show_demo_t = null;
    this.i = null;
    this.playing = false;
    this.soundStop(packages_slots_resources_audio_spin_wav__WEBPACK_IMPORTED_MODULE_8__["default"]);
  },
  created: function created() {
    var _this2 = this;
    // wait until next tick to ensure all computed properties are available (important to set lines property)
    this.$nextTick(function () {
      _this2.init();
    });
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_15__.mapActions)({
    updateUserAccountBalance: 'auth/updateUserAccountBalance',
    setProvablyFairGame: 'provably-fair/set'
  })), {}, {
    init: function init() {
      var _this3 = this;
      clearInterval(this.i);
      this.i = null;
      this.loading = false;
      this.playing = false;
      this.ready = false;
      this.message = null;
      this.lines = this.config.default_lines;
      this.line_blink = [];
      this.win = {};
      this.win_scatters = [];
      this.win_lines = {};
      this.win_loop = [];
      this.result = null;
      this.animation = {
        i: null,
        wheel_angle: 0,
        reels: [],
        sym: [],
        lines: [],
        animation: null,
        t: 0,
        t_show_demo: 0,
        t_hide: 0,
        is_show_demo: false,
        is_line_showig: false,
        lines_show_demo: -1,
        lines_show_c: 0,
        lines_show_demo_t: 1,
        is_spinned: false,
        is_render_planned: false,
        win_line_demo: 0,
        speed_max: 5000,
        animation_time: 30,
        animation_frames: 30,
        animation_framre_size: 200,
        // speed_max: this.options.config.speed_max,
        // animation_time: this.options.config.animation_time,
        requestAnimationFrame: function requestAnimationFrame(e) {
          return setTimeout(e, 1);
        },
        requestAnimationFrame_get: function requestAnimationFrame_get() {
          var _raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
          _this3.animation.requestAnimationFrame = _raf ? _raf.bind(window) : null;
        },
        lines_indexes: [[1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [2, 2, 2, 2, 2], [1, 1, 0, 1, 2], [1, 1, 2, 1, 0], [1, 0, 1, 2, 1], [1, 0, 1, 2, 2], [1, 0, 0, 1, 2], [1, 2, 1, 0, 1], [1, 2, 2, 1, 0], [1, 2, 1, 0, 0], [0, 1, 2, 1, 0], [0, 1, 1, 1, 2], [0, 0, 1, 2, 2], [0, 0, 1, 2, 1], [0, 0, 0, 1, 2], [2, 1, 0, 1, 2], [2, 1, 1, 1, 0], [2, 2, 1, 0, 0], [2, 2, 1, 0, 1]]
      };
      document.addEventListener('visibilitychange', this.visibilityCnage);
      if ('hidden' in document) {
        document.addEventListener('visibilitychange', this.changeWindowState);
      } else if ('mozHidden' in document) {
        document.addEventListener('mozvisibilitychange', this.changeWindowState);
      } else if ('webkitHidden' in document) {
        document.addEventListener('webkitvisibilitychange', this.changeWindowState);
      } else if ('msHidden' in document) {
        document.addEventListener('msvisibilitychange', this.changeWindowState);
      }
      var c = 0;
      var fin = function fin() {
        c--;
        if (c === 0) {
          _this3.ready = true;
          setTimeout(_this3.startAnimation, 10);
          window.game = _this3;
        }
      };
      var fnx = function fnx() {
        _this3.config.symbols.forEach(function (symFile) {
          c++;
          var sym = {
            source: null,
            speed_frames: [],
            animation: []
          };
          sym.source = new Image();
          sym.source.onload = function () {
            var i, x, y;
            var c, ctx;
            var animationFrame = 0;
            for (i = 0; i <= _this3.animation.speed_max / 1000 * 2; i++) {
              x = Math.round(Math.pow(i, 5) * 0.001);
              c = document.createElement('canvas');
              ctx = c.getContext('2d');
              c.width = 200;
              c.height = 200 + x;
              ctx.globalAlpha = 1 / (x + 1);
              for (y = 0; y < x + 1; ++y) {
                ctx.drawImage(sym.source, (200 - sym.source.width) / 2, y + (200 - sym.source.height) / 2);
              }
              sym.speed_frames[i] = c;
            }
            for (i = 0; i < _this3.animation.animation_time; i++) {
              var z = Math.cos(i * 4 * Math.PI / _this3.animation.animation_time) * 0.1 + 0.9;
              c = document.createElement('canvas');
              c.width = c.height = 200;
              ctx = c.getContext('2d');
              ctx.drawImage(_this3.animation.animation, _this3.animation.animation.height * animationFrame, 0, _this3.animation.animation.height, _this3.animation.animation.height, 0, 0, 200, 200);
              ctx.drawImage(sym.source, (200 - sym.source.width * z) / 2, (200 - sym.source.height * z) / 2, sym.source.width * z, sym.source.height * z);
              sym.animation[i] = c;
              animationFrame++;
              if (animationFrame >= _this3.animation.animation_frames) animationFrame = 0;
            }
            fin();
          };
          sym.source.src = symFile.image;
          _this3.animation.sym.push(sym);
        });
      };
      this.animation.animation = new Image();
      this.animation.animation.onload = fnx;
      this.animation.animation.src = (packages_slots_resources_images_animation_png__WEBPACK_IMPORTED_MODULE_11___default());
    },
    play: function play(bet) {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var endpoint, requestParams, _yield$axios$post, game;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this4.loading = true;
              _this4.playing = true;
              _this4.win = 0;
              _this4.message = null;
              clearTimeout(_this4.show_demo_t);
              _this4.show_demo_t = 0;
              _this4.animation.lines_show_demo = -1;
              _this4.animation.is_line_showig = false;
              _this4.animation.is_show_demo = false;
              _this4.animation.win_line_demo = 0;
              _this4.result = null;
              _this4.animation.spinStart();
              // update user balance
              _this4.updateUserAccountBalance(_this4.account.balance - bet * _this4.lines);
              _context.next = 15;
              return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_5__.sleep)(100);
            case 15:
              // API request params
              endpoint = _this4.getRoute('play');
              requestParams = {
                hash: _this4.provablyFairGame.hash,
                bet: bet,
                lines: _this4.lines,
                variation: _this4.variation
              }; // execute the action
              _context.next = 19;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post(endpoint, requestParams);
            case 19:
              _yield$axios$post = _context.sent;
              game = _yield$axios$post.data;
              _this4.loading = false;
              _this4.setProvablyFairGame({
                key: _this4.gamePackageId,
                game: game.pf_game
              });
              if (_this4.playing) {
                _this4.result = {
                  balance: game.account.balance,
                  reels: game.gameable.reels,
                  win_titles: game.gameable.win_titles,
                  wins: game.gameable.wins,
                  win_lines: game.gameable.win_lines,
                  win_scatters: game.gameable.win_scatters,
                  total_win: game.win
                };
              }
              _this4.$refs.controls.onGameCompleted(game);
            case 25:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    visibilityCnage: function visibilityCnage() {
      if (document.hidden !== undefined) {
        if (document.hidden) {
          this.animation.t_hide = Date.now();
        } else {
          var r = Date.now() - this.animation.t_hide;
          this.animation.t += r;
          this.animation.lines.forEach(function (el) {
            el.t += r;
          });
          this.animation.reels.forEach(function (el) {
            el.t += r;
          });
        }
      }
    },
    changeWindowState: function changeWindowState(e) {
      var _this5 = this;
      this.animation.requestAnimationFrame_get();
      this.animation.requestAnimationFrame(function () {
        _this5.animation.canvas.style.display = 'none';
        _this5.animation.requestAnimationFrame(function () {
          _this5.animation.canvas.style.display = 'block';
        });
      });
    },
    showResult: function showResult() {
      var _this6 = this;
      this.updateUserAccountBalance(this.result.balance);
      this.animation.lines.forEach(function (el) {
        return el.hide();
      });
      this.line_blink = [];
      this.win_loop = [];
      if (this.result.total_win > 0) {
        this.sound(this.config.sounds.win || packages_slots_resources_audio_win_wav__WEBPACK_IMPORTED_MODULE_6__["default"]);
        var k = 0;
        var titleKeys = Object.keys(this.result.win_titles);
        this.message = this.$t('You won') + ' ' + this.result.total_win;
        if (Object.keys(this.result.win_lines).length) {
          Object.keys(this.result.win_lines).forEach(function (winLineIdx) {
            var winLine = _this6.result.win_lines[winLineIdx];
            _this6.win_loop.push({
              type: 'line',
              idx: winLineIdx,
              text: titleKeys[k] + ' ' + _this6.$t('pays') + ' ' + _this6.result.win_titles[titleKeys[k]]
            });
            k++;
            _this6.line_blink.push(winLineIdx);
            winLine.forEach(function (symbolIdx, reelIdx) {
              if (symbolIdx !== null) _this6.animation.reels[reelIdx].win_add(symbolIdx);
            });
          });
        }
        if (this.result.win_scatters.length) {
          this.win_loop.unshift({
            type: 'scatter',
            text: titleKeys[k] + ' ' + this.$t('pay') + ' ' + this.result.win_titles[titleKeys[k]]
          });
          this.result.win_scatters.forEach(function (scatters, reelIdx) {
            return scatters.forEach(function (scatter) {
              return _this6.animation.reels[reelIdx].win_add(scatter);
            });
          });
        }
        this.win_lines = this.result.win_lines;
        this.win_scatters = this.result.win_scatters;
      } else {
        this.sound(this.config.sounds.lose || packages_slots_resources_audio_lose_wav__WEBPACK_IMPORTED_MODULE_7__["default"]);
      }
      window.result = this.result;
      this.result = null;
      this.playing = false;
      this.show_demo_t = setTimeout(this.showResultDemo, 2000);
    },
    showResultDemo: function showResultDemo() {
      this.show_demo_t = 0;
      this.animation.reels.forEach(function (el) {
        return el.win_clear();
      });
      this.animation.t_show_demo = -1;
      this.animation.is_show_demo = true;
    },
    linesShow: function linesShow() {
      this.animation.lines.forEach(function (el) {
        return el.hide();
      });
      this.animation.lines_show_demo = this.lines;
      this.animation.lines_show_c = 0;
      this.animation.lines_show_demo_t = 1;
    },
    lineShow: function lineShow(line) {
      this.animation.is_line_showig = line;
      this.animation.lines.forEach(function (line) {
        return line.hide();
      });
      if (this.animation.lines[line - 1]) this.animation.lines[line - 1].hide();
      if (this.animation.lines[line - 1]) this.animation.lines[line - 1].show();
    },
    lineHide: function lineHide(line) {
      this.animation.is_line_showig = false;
      if (this.animation.lines[line - 1] && this.animation.win_line_demo !== line) {
        this.animation.lines[line - 1].hide();
      }
      if (this.animation.win_line_demo && this.animation.win_line_demo !== line) {
        this.animation.lines[this.animation.win_line_demo - 1].show();
      }
    },
    render: function render() {
      var _this7 = this;
      if (this.playing && this.animation.is_spinned && this.result) this.animation.spinStop();
      this.animation.is_render_planned = false;
      if (this.animation.is_show_demo && this.win_loop.length > 0) {
        var _loop = function _loop() {
          var line = _this7.win_loop.shift();
          _this7.win_loop.push(line);
          _this7.animation.t_show_demo -= 2000;
          if (_this7.animation.t_show_demo < 0) _this7.animation.t_show_demo = 0;
          _this7.animation.reels.forEach(function (el) {
            return el.win_clear();
          });
          if (!_this7.animation.is_line_showig) {
            _this7.line_blink = [];
            _this7.animation.lines.forEach(function (el) {
              return el.hide();
            });
          }
          if (line.type === 'scatter') {
            _this7.animation.win_line_demo = 0;
            _this7.message = line.text;
            _this7.win_scatters.forEach(function (scatters, reelIdx) {
              scatters.forEach(function (scatter) {
                return _this7.animation.reels[reelIdx].win_add(scatter);
              });
            });
          } else {
            _this7.animation.win_line_demo = parseInt(line.idx) + 1;
            _this7.message = line.text;
            if (!_this7.animation.is_line_showig) {
              _this7.line_blink = [parseInt(line.idx) + 1];
              _this7.animation.lines[parseInt(line.idx)].show();
            }
            var winLine = _this7.win_lines[line.idx];
            _this7.animation.reels.forEach(function (el, x) {
              if (winLine[x] !== undefined && winLine[x] >= 0) {
                el.win_add(winLine[x]);
              }
            });
          }
        };
        while (this.animation.t_show_demo === -1 || this.animation.t_show_demo > 2000) {
          _loop();
        }
        this.animation.t_show_demo += Date.now() - this.animation.t;
      }
      if (this.animation.lines_show_demo !== -1) {
        if (this.animation.lines_show_demo_t > 0) {
          if (this.animation.lines_show_c !== 0) this.animation.lines[this.animation.lines_show_c - 1].hide();
          if (this.animation.lines_show_c === this.animation.lines_show_demo) {
            if (this.animation.is_line_showig) {
              this.animation.lines[this.animation.is_line_showig - 1].show();
            }
            this.animation.lines_show_demo = -1;
            this.animation.lines_show_c = 0;
          } else {
            this.animation.lines[this.animation.lines_show_c].show();
            this.animation.lines_show_c++;
            this.animation.lines_show_demo_t -= 50;
          }
        }
        this.animation.lines_show_demo_t += Date.now() - this.animation.t;
      }
      var ctx = this.animation.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.animation.canvas.width, this.animation.canvas.height);
      this.animation.t = Date.now();
      this.animation.reels.forEach(function (el) {
        return el.draw();
      });
      if (!this.animation.is_line_showig && this.animation.lines_show_demo === -1) this.animation.lines.forEach(function (el) {
        return el.draw();
      });
      this.animation.reels.forEach(function (el) {
        return el.drawWin();
      });
      if (this.animation.is_line_showig || this.animation.lines_show_demo !== -1) this.animation.lines.forEach(function (el) {
        return el.draw();
      });
      this.animation.lines.forEach(function (el) {
        return el.calculate();
      });
      this.animation.reels.forEach(function (el) {
        return el.calculate();
      });
    },
    startAnimation: function startAnimation() {
      var _this8 = this;
      this.animation.canvas = this.$refs.canvas;
      var GameSlotsLine = function GameSlotsLine(data, game, color) {
        var self = this;
        var mx = 245; // move x total
        var my = 100; // move y total
        var stx = 228; // step x
        var sty = 200; // step y
        if (color === undefined) color = 'white';
        this.self = this;
        this.data = data;
        this.game = game;
        this.color = color;
        this.alpha = 0;
        this.shown_p = 0;
        this.t = Date.now();
        this.display = false;
        this.show = function () {
          self.display = true;
        };
        this.hide = function () {
          self.display = false;
        };
        this.draw = function () {
          if (self.shown_p === 0) return;
          var ctx = self.game.canvas.getContext('2d');
          ctx.strokeStyle = self.color;
          ctx.lineWidth = 4;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          ctx.shadowColor = self.color;
          ctx.lineCap = 'round';
          ctx.globalAlpha = self.alpha;
          var la = [self.alpha * 5, self.alpha * 15, self.alpha * 30, self.alpha * 60, self.alpha * 100];
          for (var i in la) {
            ctx.shadowBlur = la[i];
            ctx.beginPath();
            ctx.moveTo(mx - 150, my + sty * self.data[0]);
            for (i in self.data) {
              ctx.lineTo(mx + stx * i, my + sty * self.data[i]);
            }
            ctx.lineTo(mx + stx * i + 150, my + sty * self.data[i]);
            ctx.stroke();
          }
          ctx.globalAlpha = 1;
          ctx.strokeStyle = self.color;
          ctx.lineWidth = 0;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          ctx.shadowBlur = 0;
          ctx.shadowColor = self.color;
          ctx.lineCap = 'round';
        };
        this.calculate = function () {
          if (self.display && self.shown_p < 1) {
            self.shown_p += (self.game.t - self.t) / 300;
            if (self.shown_p > 1) self.shown_p = 1;
            self.alpha = self.shown_p;
          }
          if (!self.display && self.shown_p > 0) {
            self.shown_p -= (self.game.t - self.t) / 100;
            if (self.shown_p < 0) self.shown_p = 0;
            self.alpha = self.shown_p;
          }
          if (!self.display && self.shown_p === 0 && self.alpha !== 0) {
            self.alpha = 1;
          }
          self.t = self.game.t;
        };
        return this;
      };
      var GameSlotsReel = function GameSlotsReel(idx, reelIds, game) {
        var self = this;
        var mx = 245; // move x total
        var my = 100; // move y total
        var stx = 228; // step x
        var sty = 200; // step y
        this.idx = idx;
        this.self = this;
        this.ids = reelIds;
        this.game = game;
        this.speed_frame = 0;
        this.animation_frame = 0;
        this.speed = 0;
        this.speed_max = game.speed_max;
        this.delta = 0;
        this.delta_stop = 0;
        this.stop_to = 0;
        this.position = 0;
        this.t = Date.now();
        this.is_spin = false;
        this.is_stopping = false;
        this.is_spinning = false;
        this.delta_pos_stop = 4;
        this.delta_stop_max = 200 * this.delta_pos_stop;
        this.syms_win = [];
        this.startSpin = function () {
          self.is_spin = true;
          self.is_stopping = false;
          self.is_spinning = true;
        };
        this.stopSpin = function (x) {
          if (typeof x === 'undefined') x = 0;
          self.stop_to = x;
          self.is_spin = false;
        };
        this.onspinned = null;
        this.onstopped = null;
        this.win = function (syms) {
          self.syms_win = syms;
        };
        this.win_add = function (sym) {
          self.syms_win.push(sym);
        };
        this.win_clear = function () {
          self.syms_win = [];
        };
        this.getReelPosition = function (pos) {
          if (pos < 0) {
            return self.getReelPosition(self.ids.length + pos);
          } else if (pos >= self.ids.length) {
            return self.getReelPosition(pos - self.ids.length);
          }
          return pos;
        };
        this.draw = function () {
          var ctx = self.game.canvas.getContext('2d');
          var dFrom = 0;
          var dTo = 0;
          var i;
          var frame = null;
          if (self.speed > 0) {
            while (my + sty * -dFrom + Math.round(self.game.sym[self.ids[self.getReelPosition(self.position - 1 - dFrom)]].speed_frames[self.speed_frame].height * 0.5) + self.delta > 0) dFrom++;
            while (my + sty * dTo - Math.round(self.game.sym[self.ids[self.getReelPosition(self.position - 1 - dFrom)]].speed_frames[self.speed_frame].height * 0.5) + self.delta < self.game.canvas.height) dTo++;
          }
          for (i = -dFrom; i < 3 + dTo; i++) {
            if (self.speed === 0 && self.syms_win.indexOf(self.getReelPosition(self.position + i)) !== -1) {
              frame = null;
            } else {
              frame = self.game.sym[self.ids[self.getReelPosition(self.position + i)]].speed_frames[self.speed_frame];
            }
            if (frame) {
              ctx.drawImage(frame, mx + stx * self.idx - Math.round(frame.width * 0.5), my + sty * i - Math.round(frame.height * 0.5) + self.delta);
            }
          }
          if (self.speed > 0) {
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 5;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 10;
            ctx.shadowColor = 'white';
            ctx.lineCap = 'round';
            var la = [5, 15, 30];
            var a = 1 - Math.abs((self.delta * 2 - sty) / sty);
            if (self.speed < self.speed_max / 2) {
              ctx.globalAlpha = a;
            } else {
              ctx.globalAlpha = (2 - a) / 2;
            }
            for (i in la) {
              ctx.shadowBlur = la[i];
              ctx.beginPath();
              ctx.moveTo(mx - 100 + stx * self.idx + (100 - 100 * a), -10);
              ctx.lineTo(mx - 100 + stx * self.idx + 200 - (100 - 100 * a), -10);
              ctx.stroke();
            }
            ctx.shadowOffsetY = -10;
            for (i in la) {
              ctx.shadowBlur = la[i];
              ctx.beginPath();
              ctx.moveTo(mx - 100 + stx * self.idx + (100 - 100 * a), self.game.canvas.height + 10);
              ctx.lineTo(mx - 100 + stx * self.idx + 200 - (100 - 100 * a), self.game.canvas.height + 10);
              ctx.stroke();
            }
            ctx.globalAlpha = 1;
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 0;
            ctx.shadowColor = 'white';
            ctx.lineCap = 'round';
          }
        };
        this.drawWin = function () {
          if (self.speed > 0) return;
          var ctx = self.game.canvas.getContext('2d');
          var frame = null;
          for (var i = 0; i < 3; i++) {
            if (self.speed === 0 && self.syms_win.indexOf(self.getReelPosition(self.position + i)) !== -1) {
              frame = self.game.sym[self.ids[self.getReelPosition(self.position + i)]].animation[Math.round(self.animation_frame)];
              if (frame) {
                ctx.drawImage(frame, mx + stx * self.idx - Math.round(frame.width * 0.5), my + sty * i - Math.round(frame.height * 0.5) + self.delta);
              }
            }
          }
        };
        this.calculate = function () {
          self.delta += Math.round((self.game.t - self.t) * self.speed * 0.0005);
          if (!self.is_spin) {
            self.delta_stop -= Math.round((self.game.t - self.t) * self.speed * 0.0005);
            if (self.delta_stop < 0) self.delta_stop = 0;
          }
          while (self.delta >= sty) {
            self.delta -= sty;
            self.position = self.getReelPosition(self.position - 1);
            if (!self.is_spin && !self.is_stopping && self.getReelPosition(self.position - self.delta_pos_stop) === self.stop_to) {
              self.is_stopping = true;
              self.delta_stop = self.delta_stop_max - self.delta;
            }
          }
          while (self.delta <= -sty) {
            self.delta += sty;
            self.position = self.getReelPosition(self.position + 1);
          }
          if (self.is_spin && self.speed < self.speed_max) {
            self.speed += Math.round((self.game.t - self.t) * 10000 * 0.0005);
            if (self.speed > self.speed_max) self.speed = self.speed_max;
            self.speed_frame = Math.round(self.speed / 1000 * 2);
            if (self.speed_frame < 0) self.speed_frame = 0;
            if (self.speed_frame > Math.round(self.speed_max / 1000 * 2)) self.speed_frame = Math.round(self.speed_max / 1000 * 2);
            if (!(self.speed < self.speed_max) && typeof self.onspinned === 'function') {
              self.onspinned(self);
            }
          }
          if (!self.is_spin && self.is_stopping && self.speed > 0) {
            var newSpeed = Math.round(Math.pow(self.delta_stop / self.delta_stop_max, 0.5) * self.speed_max);
            if (newSpeed < self.speed) {
              self.speed = newSpeed;
            }
            Math.round((self.game.t - self.t) * 5000 * 0.0005);
            if (self.speed < 0) self.speed = 0;
            if (self.speed === 0) {
              self.is_spinning = false;
              self.is_stopping = false;
              self.delta = 0;
              if (typeof self.onstopped === 'function') {
                self.onstopped(self);
              }
            }
            self.speed_frame = Math.round(self.speed / 1000 * 2);
            if (self.speed_frame < 0) self.speed_frame = 0;
            if (self.speed_frame > Math.round(self.speed_max / 1000 * 2)) self.speed_frame = Math.round(self.speed_max / 1000 * 2);
          }
          if (self.speed === 0 && self.syms_win.length > 0) {
            self.animation_frame += (self.game.t - self.t) * 0.03;
            while (Math.round(self.animation_frame) >= self.game.animation_time) self.animation_frame -= self.game.animation_time;
          }
          self.t = self.game.t;
        };
        return this;
      };
      this.animation.lines_indexes.forEach(function (el) {
        return _this8.animation.lines.push(new GameSlotsLine(el, _this8.animation, _this8.$vuetify.theme.isDark ? 'white' : getComputedStyle(document.body).getPropertyValue('--v-primary-lighten1').trim()));
      });
      this.config.reels.forEach(function (el, idx) {
        return _this8.animation.reels.push(new GameSlotsReel(idx, el, _this8.animation));
      });
      this.animation.t = Date.now();
      this.animation.spinStart = function () {
        _this8.animation.is_show_demo = false;
        _this8.animation.reels.forEach(function (el) {
          return el.win_clear();
        });
        _this8.animation.lines.forEach(function (el) {
          return el.hide();
        });
        var t = 0;
        _this8.animation.reels.forEach(function (el, idx) {
          setTimeout(function () {
            el.startSpin();
            _this8.sound(packages_slots_resources_audio_start_wav__WEBPACK_IMPORTED_MODULE_9__["default"]);
            if (idx === 4) _this8.soundLoop(packages_slots_resources_audio_spin_wav__WEBPACK_IMPORTED_MODULE_8__["default"]);
          }, t += 250);
        });
      };
      this.animation.spinStop = function () {
        _this8.animation.is_spinned = false;
        var t = 0;
        _this8.animation.reels.forEach(function (reel, idx) {
          setTimeout(function () {
            return reel.stopSpin(_this8.result.reels[idx]);
          }, t += 500);
        });
      };
      this.animation.gamestop = function () {
        _this8.sound(packages_slots_resources_audio_stop_wav__WEBPACK_IMPORTED_MODULE_10__["default"]);
        if (Object.values(_this8.animation.reels).reduce(function (acc, val) {
          return acc + val.speed;
        }, 0) === 0) {
          _this8.showResult();
          _this8.soundStop(packages_slots_resources_audio_spin_wav__WEBPACK_IMPORTED_MODULE_8__["default"]);
        }
      };
      this.animation.reels[4].onspinned = function () {
        _this8.animation.is_spinned = true;
      };
      this.animation.reels.forEach(function (el) {
        el.onstopped = _this8.animation.gamestop;
      });
      this.animation.requestAnimationFrame_get();
      this.i = setInterval(function () {
        if (!_this8.animation.is_render_planned) {
          _this8.animation.is_render_planned = true;
          _this8.animation.requestAnimationFrame(_this8.render);
        }
      }, 40);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    message: {
      required: true,
      validator: function validator(value) {
        return typeof value === 'string' || value === null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _mixins_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/mixins/Game */ "./resources/js/mixins/Game.vue");
/* harmony import */ var _mixins_Sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/mixins/Sound */ "./resources/js/mixins/Sound.vue");
/* harmony import */ var _audio_common_click_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/../audio/common/click.wav */ "./resources/audio/common/click.wav");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_Game__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_Sound__WEBPACK_IMPORTED_MODULE_3__["default"]],
  props: {
    betLabel: {
      type: String,
      required: false,
      "default": ''
    },
    playLabel: {
      type: String,
      required: false,
      "default": ''
    },
    loading: {
      type: Boolean,
      required: true
    },
    playing: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      "default": false
    },
    provable: {
      type: Boolean,
      required: false,
      "default": true
    }
  },
  data: function data() {
    return {
      bet: null,
      autoPlay: {
        baseBet: 0,
        onWin: {
          reset: true,
          amount: 0
        },
        onLoss: {
          reset: true,
          amount: 0
        },
        games: [],
        minBet: 0,
        maxBet: 0,
        betsCount: 0,
        maxBetsCount: 0,
        maxBalance: 0,
        minBalance: 0,
        winsCount: 0,
        lossesCount: 0
      },
      autoPlayInProgress: false,
      autoPlayEnabled: false,
      autoPlaySettingsDialog: false,
      autoPlayHistoryDialog: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapState)('auth', ['account'])), {}, {
    defaultBet: function defaultBet() {
      return parseInt(this.config.default_bet_amount, 10);
    },
    minBet: function minBet() {
      return parseInt(this.config.min_bet, 10);
    },
    maxBet: function maxBet() {
      return parseInt(this.config.max_bet, 10);
    },
    betStep: function betStep() {
      return parseInt(this.config.bet_change_amount, 10);
    },
    autoPlaySupport: function autoPlaySupport() {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_0__.get)(this.config, 'auto_play.enabled', false);
    },
    autoPlayInterval: function autoPlayInterval() {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_0__.get)(this.config, 'auto_play.interval');
    },
    isPlayDisabled: function isPlayDisabled() {
      return this.provable && !this.provablyFairGame.hash || this.playing || typeof this.account === 'undefined' || this.bet > this.account.balance;
    },
    autoPlayNetResult: function autoPlayNetResult() {
      return this.autoPlay.games.reduce(function (a, game) {
        return a + game.win - game.bet;
      }, 0);
    }
  }),
  watch: {
    bet: function bet(_bet, oldBet) {
      this.$emit('bet-change', (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_0__.isInteger)(_bet) ? _bet : 0);
    }
  },
  created: function created() {
    var _this = this;
    // it's important to wait until next tick to ensure config computed property is updated
    // after switching from one game page to another.
    this.$nextTick(function () {
      _this.bet = _this.defaultBet;
    });
  },
  methods: {
    play: function play() {
      this.sound(_audio_common_click_wav__WEBPACK_IMPORTED_MODULE_4__["default"]);
      if (this.autoPlaySupport && this.autoPlayEnabled && !this.autoPlayInProgress) {
        this.autoPlayInProgress = true;
        this.autoPlay.baseBet = this.bet;
        this.autoPlay.betsCount = 0;
        this.autoPlay.winsCount = 0;
        this.autoPlay.lossesCount = 0;
        this.autoPlay.games = [];
      }
      this.$emit('play', this.bet, this.autoPlayInProgress);
    },
    decreaseBet: function decreaseBet() {
      this.sound(_audio_common_click_wav__WEBPACK_IMPORTED_MODULE_4__["default"]);
      var bet = this.bet - this.betStep;
      this.bet = Math.max(this.minBet, bet);
    },
    increaseBet: function increaseBet() {
      this.sound(_audio_common_click_wav__WEBPACK_IMPORTED_MODULE_4__["default"]);
      var bet = this.bet + this.betStep;
      this.bet = Math.min(this.maxBet, bet);
    },
    onGameCompleted: function onGameCompleted(game) {
      var _this2 = this;
      if (this.autoPlayEnabled) {
        var isWin = game.win > game.bet;
        this.autoPlay.betsCount++;
        this.autoPlay.games.push({
          bet: game.bet,
          win: game.win
        });

        // win
        if (isWin) {
          this.autoPlay.winsCount++;
          if (this.autoPlay.onWin.reset) {
            this.setBet(this.autoPlay.baseBet);
          } else {
            this.setBet(this.bet + this.autoPlay.onWin.amount);
          }
          // loss
        } else {
          this.autoPlay.lossesCount++;
          if (this.autoPlay.onLoss.reset) {
            this.setBet(this.autoPlay.baseBet);
          } else {
            this.setBet(this.bet + this.autoPlay.onLoss.amount);
          }
        }
        if (this.bet > this.account.balance || this.autoPlay.minBalance > 0 && this.account.balance < this.autoPlay.minBalance || this.autoPlay.maxBalance > 0 && this.account.balance > this.autoPlay.maxBalance || this.autoPlay.maxBetsCount > 0 && this.autoPlay.betsCount >= this.autoPlay.maxBetsCount) {
          this.stopAutoPlay();
        }
        setTimeout(function () {
          if (_this2.autoPlayInProgress) {
            _this2.play();
          } else {
            _this2.stopAutoPlay();
          }
        }, parseInt(this.autoPlayInterval) * 1000);
      }
    },
    setBet: function setBet(value) {
      var minValues = this.autoPlay.maxBet > 0 ? [value, this.maxBet, this.autoPlay.maxBet] : [value, this.maxBet];
      var maxValues = this.autoPlay.minBet > 0 ? [this.minBet, this.autoPlay.minBet] : [this.minBet];
      this.bet = Math.max.apply(Math, [Math.min.apply(Math, minValues)].concat(maxValues));
    },
    stopAutoPlay: function stopAutoPlay() {
      this.autoPlayInProgress = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixins/Game.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixins/Game.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _plugins_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/plugins/route */ "./resources/js/plugins/route.js");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    gamePackageId: function gamePackageId() {
      return this.$route.params.game;
    },
    gameSlug: function gameSlug() {
      return this.$route.params.slug;
    },
    config: function config() {
      var _this = this;
      return this.gameSlug ? (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)(this.gamePackageId).variations.find(function (o) {
        return o.slug === _this.gameSlug;
      }) : (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)(this.gamePackageId);
    },
    provablyFairGame: function provablyFairGame() {
      return this.$store.getters['provably-fair/get'](this.gamePackageId) || {};
    }
  },
  methods: {
    getRoute: function getRoute(action) {
      return (0,_plugins_route__WEBPACK_IMPORTED_MODULE_1__.route)("games.".concat(this.gamePackageId, ".").concat(action));
    },
    loadCardDeck: function loadCardDeck() {
      return (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_2__.preloadImages)(window.assets.deck);
    }
  }
});

/***/ }),

/***/ "./packages/slots/resources/images/animation.png":
/*!*******************************************************!*\
  !*** ./packages/slots/resources/images/animation.png ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/animation.png?9c992e07c0d33de5e91fd9b7a96c2ba3";

/***/ }),

/***/ "./packages/slots/resources/audio/lose.wav":
/*!*************************************************!*\
  !*** ./packages/slots/resources/audio/lose.wav ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/slots/lose.wav");

/***/ }),

/***/ "./packages/slots/resources/audio/spin.wav":
/*!*************************************************!*\
  !*** ./packages/slots/resources/audio/spin.wav ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/slots/spin.wav");

/***/ }),

/***/ "./packages/slots/resources/audio/start.wav":
/*!**************************************************!*\
  !*** ./packages/slots/resources/audio/start.wav ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/slots/start.wav");

/***/ }),

/***/ "./packages/slots/resources/audio/stop.wav":
/*!*************************************************!*\
  !*** ./packages/slots/resources/audio/stop.wav ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/slots/stop.wav");

/***/ }),

/***/ "./packages/slots/resources/audio/win.wav":
/*!************************************************!*\
  !*** ./packages/slots/resources/audio/win.wav ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/slots/win.wav");

/***/ }),

/***/ "./resources/audio/common/click.wav":
/*!******************************************!*\
  !*** ./resources/audio/common/click.wav ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/common/click.wav");

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/game.vue?vue&type=style&index=0&id=4d1bb28b&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/game.vue?vue&type=style&index=0&id=4d1bb28b&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lines-input[data-v-4d1bb28b] {\n  max-width: 120px;\n}\n.total-bet-input[data-v-4d1bb28b] {\n  max-width: 100px;\n}\n.message-container[data-v-4d1bb28b] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10;\n}\n@media (min-aspect-ratio: 8/5) {\ncanvas[data-v-4d1bb28b] {\n    margin: 0;\n    height: calc(100vh - 300px);\n    width: auto;\n}\n.permanent-navbar canvas[data-v-4d1bb28b] {\n    height: calc(100vh - 400px);\n}\n}\n@media (max-height: 550px) {\ncanvas[data-v-4d1bb28b] {\n    margin: 0;\n    height: calc(100vh - 100px);\n    width: auto;\n}\n}\n@media (max-aspect-ratio: 8/5) {\ncanvas[data-v-4d1bb28b] {\n    margin: 0;\n    width: calc(100vw - 100px);\n    height: auto;\n}\n.permanent-navbar canvas[data-v-4d1bb28b] {\n    width: calc(100vw - 350px);\n}\n}\n@media (max-width: 960px) {\n.message-container[data-v-4d1bb28b] {\n    top: 12px;\n}\n}\n@media (max-width: 600px) {\n.line-btns button[data-v-4d1bb28b] {\n    min-width: 25px !important;\n    font-size: 0.5rem;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".loader[data-v-29e85514] {\n  width: 150px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".scale-enter[data-v-74957228], .scale-leave-to[data-v-74957228] {\n  transform: scale(0);\n  opacity: 1;\n}\n.scale-enter-active[data-v-74957228], .scale-leave-active[data-v-74957228] {\n  transition: all 0.3s;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".bet-input[data-v-921fb73a] {\n  max-width: 250px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/game.vue?vue&type=style&index=0&id=4d1bb28b&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/game.vue?vue&type=style&index=0&id=4d1bb28b&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_4d1bb28b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=style&index=0&id=4d1bb28b&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/game.vue?vue&type=style&index=0&id=4d1bb28b&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_4d1bb28b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_4d1bb28b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_style_index_0_id_29e85514_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_style_index_0_id_29e85514_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_style_index_0_id_29e85514_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_style_index_0_id_74957228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_style_index_0_id_74957228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_style_index_0_id_74957228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_style_index_0_id_921fb73a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_style_index_0_id_921fb73a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_style_index_0_id_921fb73a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./packages/slots/resources/js/pages/game.vue":
/*!****************************************************!*\
  !*** ./packages/slots/resources/js/pages/game.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_vue_vue_type_template_id_4d1bb28b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.vue?vue&type=template&id=4d1bb28b&scoped=true& */ "./packages/slots/resources/js/pages/game.vue?vue&type=template&id=4d1bb28b&scoped=true&");
/* harmony import */ var _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.vue?vue&type=script&lang=js& */ "./packages/slots/resources/js/pages/game.vue?vue&type=script&lang=js&");
/* harmony import */ var _game_vue_vue_type_style_index_0_id_4d1bb28b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.vue?vue&type=style&index=0&id=4d1bb28b&lang=scss&scoped=true& */ "./packages/slots/resources/js/pages/game.vue?vue&type=style&index=0&id=4d1bb28b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _game_vue_vue_type_template_id_4d1bb28b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _game_vue_vue_type_template_id_4d1bb28b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4d1bb28b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/slots/resources/js/pages/game.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/slots/resources/js/pages/game.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./packages/slots/resources/js/pages/game.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/game.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Games/GameMessage.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Games/GameMessage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GameMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Games/PlayControls.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Games/PlayControls.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PlayControls.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/mixins/Game.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/mixins/Game.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Game.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixins/Game.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/slots/resources/js/pages/game.vue?vue&type=style&index=0&id=4d1bb28b&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./packages/slots/resources/js/pages/game.vue?vue&type=style&index=0&id=4d1bb28b&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_4d1bb28b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=style&index=0&id=4d1bb28b&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/game.vue?vue&type=style&index=0&id=4d1bb28b&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_style_index_0_id_29e85514_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Games/GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_style_index_0_id_74957228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=style&index=0&id=74957228&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_style_index_0_id_921fb73a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/game.vue?vue&type=template&id=4d1bb28b&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/game.vue?vue&type=template&id=4d1bb28b&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");




var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex flex-column fill-height py-3 pt-md-3 pt-12"
  }, [_c("div", {
    staticClass: "message-container d-flex justify-center align-center"
  }, [_c("game-message", {
    attrs: {
      message: _vm.message
    }
  })], 1), _vm._v(" "), _vm.ready ? _c("div", {
    staticClass: "d-flex justify-center fill-height align-center"
  }, [_c("div", {
    staticClass: "d-flex flex-md-row justify-center align-stretch flex-column"
  }, [_c("div", {
    staticClass: "line-btns left d-flex flex-md-column align-center justify-space-between flex-row pa-5 pa-md-0"
  }, _vm._l(_vm.line_cols[0], function (i) {
    return _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_0__["default"], {
      key: "lines-1-" + i,
      staticClass: "pa-0",
      "class": {
        primary: _vm.line_blink.indexOf(i) != -1 && !_vm.animation.is_line_showig
      },
      attrs: {
        small: "",
        disabled: _vm.playing,
        type: "button"
      },
      on: {
        mouseover: function mouseover($event) {
          return _vm.lineShow(i);
        },
        mouseout: function mouseout($event) {
          return _vm.lineHide(i);
        },
        click: function click($event) {
          _vm.sound("click");
          _vm.lines = i;
          _vm.linesShow();
        }
      }
    }, [_vm._v("\n          " + _vm._s(i) + "\n        ")]);
  }), 1), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-center justify-center"
  }, [_c("canvas", {
    ref: "canvas",
    attrs: {
      width: "1400",
      height: "600"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "line-btns right d-flex flex-md-column align-stretch justify-space-between flex-row pa-5 pa-md-0"
  }, _vm._l(_vm.line_cols[1], function (i) {
    return _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_0__["default"], {
      key: "lines-2-" + i,
      staticClass: "pa-0",
      "class": {
        primary: _vm.line_blink.indexOf(i) != -1 && !_vm.animation.is_line_showig
      },
      attrs: {
        small: "",
        disabled: _vm.playing,
        type: "button"
      },
      on: {
        mouseover: function mouseover($event) {
          return _vm.lineShow(i);
        },
        mouseout: function mouseout($event) {
          return _vm.lineHide(i);
        },
        click: function click($event) {
          _vm.sound("click");
          _vm.lines = i;
          _vm.linesShow();
        }
      }
    }, [_vm._v("\n          " + _vm._s(i) + "\n        ")]);
  }), 1)])]) : _c("div", {
    staticClass: "d-flex justify-center fill-height align-center"
  }, [_c("block-preloader")], 1), _vm._v(" "), _c("play-controls", {
    ref: "controls",
    attrs: {
      loading: _vm.loading,
      disabled: !_vm.ready || _vm.account.balance < _vm.totalBetAmount || _vm.totalBetAmount === 0,
      playing: _vm.playing
    },
    on: {
      "bet-change": function betChange($event) {
        _vm.bet = $event;
      },
      play: _vm.play
    },
    scopedSlots: _vm._u([{
      key: "before-bet-input",
      fn: function fn() {
        return [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
          staticClass: "lines-input text-center mr-2",
          attrs: {
            label: _vm.$t("Lines"),
            dense: "",
            rules: [_vm.validationInteger, function (v) {
              return _vm.validationMin(v, 1);
            }, function (v) {
              return _vm.validationMax(v, 20);
            }],
            disabled: _vm.playing,
            outlined: "",
            "full-width": false
          },
          scopedSlots: _vm._u([{
            key: "prepend-inner",
            fn: function fn() {
              return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_0__["default"], {
                attrs: {
                  small: "",
                  text: "",
                  icon: "",
                  color: "primary"
                },
                on: {
                  click: function click($event) {
                    _vm.lines = Math.max(1, --_vm.lines);
                  }
                }
              }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                attrs: {
                  small: ""
                }
              }, [_vm._v("\n              mdi-minus\n            ")])], 1)];
            },
            proxy: true
          }, {
            key: "append",
            fn: function fn() {
              return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_0__["default"], {
                attrs: {
                  small: "",
                  text: "",
                  icon: "",
                  color: "primary"
                },
                on: {
                  click: function click($event) {
                    _vm.lines = Math.min(20, ++_vm.lines);
                  }
                }
              }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                attrs: {
                  small: ""
                }
              }, [_vm._v("\n              mdi-plus\n            ")])], 1)];
            },
            proxy: true
          }]),
          model: {
            value: _vm.lines,
            callback: function callback($$v) {
              _vm.lines = _vm._n($$v);
            },
            expression: "lines"
          }
        })];
      },
      proxy: true
    }, {
      key: "after-bet-input",
      fn: function fn() {
        return [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
          staticClass: "total-bet-input text-center ml-2",
          attrs: {
            label: _vm.$t("Total bet"),
            value: _vm.totalBetAmount,
            dense: "",
            readonly: !_vm.playing,
            disabled: _vm.playing || !_vm.ready,
            outlined: "",
            "full-width": false
          }
        })];
      },
      proxy: true
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js");


var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "loader"
  }, [_c("p", {
    staticClass: "text-center text--primary"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("Loading")) + "\n  ")]), _vm._v(" "), _c(vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      color: "primary",
      indeterminate: "",
      rounded: "",
      height: "5",
      width: "100"
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=template&id=74957228&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=template&id=74957228&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/VAlert.js");


var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("transition", {
    attrs: {
      name: "scale"
    }
  }, [_vm.message ? _c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      color: "primary"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.message) + "\n  ")]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=template&id=921fb73a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=template&id=921fb73a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VBtnToggle */ "./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/VDialog.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/VSimpleTable.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VSpacer.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");















var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_0__["default"], {
    ref: "form",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.play.apply(null, arguments);
      }
    },
    model: {
      value: _vm.formIsValid,
      callback: function callback($$v) {
        _vm.formIsValid = $$v;
      },
      expression: "formIsValid"
    }
  }, [_vm.autoPlaySupport ? _c("div", {
    staticClass: "d-flex justify-center"
  }, [_c(vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    staticClass: "align-self-center mb-3",
    attrs: {
      "active-class": "primary--text",
      mandatory: "",
      rounded: "",
      group: ""
    },
    model: {
      value: _vm.autoPlayEnabled,
      callback: function callback($$v) {
        _vm.autoPlayEnabled = $$v;
      },
      expression: "autoPlayEnabled"
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "mx-1",
    attrs: {
      disabled: _vm.playing || _vm.autoPlayInProgress,
      small: "",
      value: false
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Manual")) + "\n      ")]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "mx-1",
    attrs: {
      disabled: _vm.playing || _vm.autoPlayInProgress,
      small: "",
      value: true
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Auto")) + "\n      ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      persistent: "",
      "max-width": "600px"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref) {
        var on = _ref.on,
          attrs = _ref.attrs;
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], _vm._g(_vm._b({
          attrs: {
            icon: "",
            color: "primary",
            disabled: !_vm.autoPlayEnabled || _vm.playing || _vm.autoPlayInProgress
          }
        }, "v-btn", attrs, false), on), [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v("mdi-cog")])], 1)];
      }
    }], null, false, 3358863509),
    model: {
      value: _vm.autoPlaySettingsDialog,
      callback: function callback($$v) {
        _vm.autoPlaySettingsDialog = $$v;
      },
      expression: "autoPlaySettingsDialog"
    }
  }, [_vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
    staticClass: "headline my-5"
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Auto play settings")) + "\n        ")]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    staticClass: "text-center",
    attrs: {
      dense: "",
      outlined: "",
      label: _vm.$t("On loss"),
      rules: [_vm.validationInteger],
      readonly: _vm.autoPlay.onLoss.reset,
      suffix: _vm.$t("credits")
    },
    scopedSlots: _vm._u([{
      key: "prepend-inner",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
          staticClass: "align-self-center",
          attrs: {
            "active-class": "primary--text",
            mandatory: "",
            rounded: "",
            group: ""
          },
          model: {
            value: _vm.autoPlay.onLoss.reset,
            callback: function callback($$v) {
              _vm.$set(_vm.autoPlay.onLoss, "reset", $$v);
            },
            expression: "autoPlay.onLoss.reset"
          }
        }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            value: true,
            small: ""
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.$t("Reset to base")) + "\n                ")]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            value: false,
            small: ""
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.$t("Change by")) + "\n                ")])], 1)];
      },
      proxy: true
    }], null, false, 3331114620),
    model: {
      value: _vm.autoPlay.onLoss.amount,
      callback: function callback($$v) {
        _vm.$set(_vm.autoPlay.onLoss, "amount", _vm._n($$v));
      },
      expression: "autoPlay.onLoss.amount"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    staticClass: "text-center",
    attrs: {
      dense: "",
      outlined: "",
      label: _vm.$t("On win"),
      rules: [_vm.validationInteger],
      readonly: _vm.autoPlay.onWin.reset,
      suffix: _vm.$t("credits")
    },
    scopedSlots: _vm._u([{
      key: "prepend-inner",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
          staticClass: "align-self-center",
          attrs: {
            "active-class": "primary--text",
            mandatory: "",
            rounded: "",
            group: ""
          },
          model: {
            value: _vm.autoPlay.onWin.reset,
            callback: function callback($$v) {
              _vm.$set(_vm.autoPlay.onWin, "reset", $$v);
            },
            expression: "autoPlay.onWin.reset"
          }
        }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            value: true,
            small: ""
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.$t("Reset to base")) + "\n                ")]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            value: false,
            small: ""
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.$t("Change by")) + "\n                ")])], 1)];
      },
      proxy: true
    }], null, false, 2613860143),
    model: {
      value: _vm.autoPlay.onWin.amount,
      callback: function callback($$v) {
        _vm.$set(_vm.autoPlay.onWin, "amount", _vm._n($$v));
      },
      expression: "autoPlay.onWin.amount"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    staticClass: "text-center",
    attrs: {
      dense: "",
      outlined: "",
      label: _vm.$t("Number of games"),
      rules: [_vm.validationNonNegativeInteger]
    },
    model: {
      value: _vm.autoPlay.maxBetsCount,
      callback: function callback($$v) {
        _vm.$set(_vm.autoPlay, "maxBetsCount", _vm._n($$v));
      },
      expression: "autoPlay.maxBetsCount"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    staticClass: "text-center",
    attrs: {
      dense: "",
      outlined: "",
      label: _vm.$t("Min bet"),
      suffix: _vm.$t("credits"),
      rules: [_vm.validationNonNegativeInteger]
    },
    model: {
      value: _vm.autoPlay.minBet,
      callback: function callback($$v) {
        _vm.$set(_vm.autoPlay, "minBet", _vm._n($$v));
      },
      expression: "autoPlay.minBet"
    }
  })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    staticClass: "text-center",
    attrs: {
      dense: "",
      outlined: "",
      label: _vm.$t("Max bet"),
      suffix: _vm.$t("credits"),
      rules: [_vm.validationNonNegativeInteger]
    },
    model: {
      value: _vm.autoPlay.maxBet,
      callback: function callback($$v) {
        _vm.$set(_vm.autoPlay, "maxBet", _vm._n($$v));
      },
      expression: "autoPlay.maxBet"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["default"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    staticClass: "text-center",
    attrs: {
      dense: "",
      outlined: "",
      prefix: _vm.$t("less than"),
      label: _vm.$t("Stop if balance is"),
      rules: [_vm.validationNonNegativeInteger]
    },
    model: {
      value: _vm.autoPlay.minBalance,
      callback: function callback($$v) {
        _vm.$set(_vm.autoPlay, "minBalance", _vm._n($$v));
      },
      expression: "autoPlay.minBalance"
    }
  })], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    staticClass: "text-center",
    attrs: {
      dense: "",
      outlined: "",
      prefix: _vm.$t("greater than"),
      label: _vm.$t("Stop if balance is"),
      rules: [_vm.validationNonNegativeInteger]
    },
    model: {
      value: _vm.autoPlay.maxBalance,
      callback: function callback($$v) {
        _vm.$set(_vm.autoPlay, "maxBalance", _vm._n($$v));
      },
      expression: "autoPlay.maxBalance"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardActions, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.autoPlaySettingsDialog = false;
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Apply")) + "\n          ")])], 1)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      persistent: "",
      "max-width": "600px"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref2) {
        var on = _ref2.on,
          attrs = _ref2.attrs;
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], _vm._g(_vm._b({
          attrs: {
            icon: "",
            color: "primary",
            disabled: !_vm.autoPlayEnabled || _vm.playing || _vm.autoPlayInProgress
          }
        }, "v-btn", attrs, false), on), [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v("mdi-poll")])], 1)];
      }
    }], null, false, 2222554209),
    model: {
      value: _vm.autoPlayHistoryDialog,
      callback: function callback($$v) {
        _vm.autoPlayHistoryDialog = $$v;
      },
      expression: "autoPlayHistoryDialog"
    }
  }, [_vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
    staticClass: "headline my-5"
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Auto play history")) + "\n        ")]), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_vm.autoPlay.games.length ? _c(vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attrs: {
      dense: "",
      "fixed-header": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn() {
        return [_c("thead", [_c("tr", [_c("th", {
          staticClass: "text-left"
        }, [_vm._v("\n                    #\n                  ")]), _vm._v(" "), _c("th", {
          staticClass: "text-right"
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("Bet")) + "\n                  ")]), _vm._v(" "), _c("th", {
          staticClass: "text-right"
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("Win")) + "\n                  ")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.autoPlay.games, function (game, i) {
          return _c("tr", {
            key: i
          }, [_c("td", {
            staticClass: "text-left"
          }, [_vm._v("\n                    " + _vm._s(++i) + "\n                  ")]), _vm._v(" "), _c("td", {
            staticClass: "text-right"
          }, [_vm._v("\n                    " + _vm._s(game.bet) + "\n                  ")]), _vm._v(" "), _c("td", {
            staticClass: "text-right"
          }, [_vm._v("\n                    " + _vm._s(game.win) + "\n                  ")])]);
        }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_c("th", {
          staticClass: "text-right",
          attrs: {
            colspan: "2"
          }
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("Total net win")) + "\n                  ")]), _vm._v(" "), _c("th", {
          staticClass: "text-right",
          "class": _vm.autoPlayNetResult > 0 ? "green--text" : "error--text"
        }, [_vm._v("\n                    " + _vm._s(_vm.autoPlayNetResult.toFixed(2)) + "\n                  ")])])])];
      },
      proxy: true
    }], null, false, 4084813946)
  }) : _c("p", [_vm._v("\n            " + _vm._s(_vm.$t("No games played in the auto mode.")) + "\n          ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardActions, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.autoPlayHistoryDialog = false;
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Close")) + "\n          ")])], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-center flex-wrap mt-3"
  }, [_vm._t("before-bet-input"), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    staticClass: "bet-input text-center",
    attrs: {
      dense: "",
      outlined: "",
      "full-width": false,
      label: _vm.betLabel || _vm.$t("Bet"),
      disabled: _vm.playing,
      rules: [_vm.validationInteger, function (v) {
        return _vm.validationMin(v, _vm.minBet);
      }, function (v) {
        return typeof _vm.account !== "undefined" && _vm.validationMax(v, Math.min(Math.floor(_vm.account.balance), _vm.maxBet));
      }],
      "prepend-inner-icon": "mdi-minus",
      "append-icon": "mdi-plus"
    },
    on: {
      "click:prepend-inner": _vm.decreaseBet,
      "click:append": _vm.increaseBet
    },
    scopedSlots: _vm._u([{
      key: "prepend-inner",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            small: "",
            text: "",
            icon: "",
            color: "primary"
          },
          on: {
            click: function click($event) {
              _vm.bet = _vm.minBet;
            }
          }
        }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          attrs: {
            small: ""
          }
        }, [_vm._v("\n            mdi-arrow-down\n          ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            small: "",
            text: "",
            icon: "",
            color: "primary"
          },
          on: {
            click: _vm.decreaseBet
          }
        }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          attrs: {
            small: ""
          }
        }, [_vm._v("\n            mdi-minus\n          ")])], 1)];
      },
      proxy: true
    }, {
      key: "append",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            small: "",
            text: "",
            icon: "",
            color: "primary"
          },
          on: {
            click: _vm.increaseBet
          }
        }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          attrs: {
            small: ""
          }
        }, [_vm._v("\n            mdi-plus\n          ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            small: "",
            text: "",
            icon: "",
            color: "primary"
          },
          on: {
            click: function click($event) {
              _vm.bet = _vm.maxBet;
            }
          }
        }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          attrs: {
            small: ""
          }
        }, [_vm._v("\n            mdi-arrow-up\n          ")])], 1)];
      },
      proxy: true
    }]),
    model: {
      value: _vm.bet,
      callback: function callback($$v) {
        _vm.bet = _vm._n($$v);
      },
      expression: "bet"
    }
  }), _vm._v(" "), _vm._t("after-bet-input"), _vm._v(" "), _vm.autoPlayEnabled ? _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "ml-2",
    attrs: {
      color: "primary",
      disabled: !_vm.autoPlayInProgress,
      outlined: "",
      icon: "",
      tile: ""
    },
    on: {
      click: _vm.stopAutoPlay
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v("mdi-stop")])], 1) : _vm._e(), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "ml-2",
    attrs: {
      type: "submit",
      color: "primary",
      loading: _vm.loading,
      disabled: _vm.disabled || !_vm.formIsValid || _vm.isPlayDisabled || _vm.autoPlayInProgress
    }
  }, [_vm._v("\n      " + _vm._s(_vm.playLabel || _vm.$t("Play")) + "\n    ")]), _vm._v(" "), _vm._t("after-play-button")], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/slots/resources/js/pages/game.vue?vue&type=template&id=4d1bb28b&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./packages/slots/resources/js/pages/game.vue?vue&type=template&id=4d1bb28b&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_4d1bb28b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_4d1bb28b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_4d1bb28b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=template&id=4d1bb28b&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/game.vue?vue&type=template&id=4d1bb28b&scoped=true&");


/***/ }),

/***/ "./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_template_id_29e85514_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_template_id_29e85514_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_template_id_29e85514_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/GameMessage.vue?vue&type=template&id=74957228&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Games/GameMessage.vue?vue&type=template&id=74957228&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_template_id_74957228_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_template_id_74957228_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GameMessage_vue_vue_type_template_id_74957228_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GameMessage.vue?vue&type=template&id=74957228&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/GameMessage.vue?vue&type=template&id=74957228&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/PlayControls.vue?vue&type=template&id=921fb73a&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Games/PlayControls.vue?vue&type=template&id=921fb73a&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_template_id_921fb73a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_template_id_921fb73a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_template_id_921fb73a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PlayControls.vue?vue&type=template&id=921fb73a&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=template&id=921fb73a&scoped=true&");


/***/ })

}]);