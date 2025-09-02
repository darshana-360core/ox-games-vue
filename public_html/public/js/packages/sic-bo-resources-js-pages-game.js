"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/sic-bo-resources-js-pages-game"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  params: {
    num: Number,
    size: Number
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/pages/game.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/pages/game.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cannon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cannon */ "./node_modules/cannon/build/cannon.js");
/* harmony import */ var cannon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cannon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var packages_sic_bo_resources_js_components_dice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! packages/sic-bo/resources/js/components/dice.js */ "./packages/sic-bo/resources/js/components/dice.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var clone_deep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clone-deep */ "./node_modules/clone-deep/index.js");
/* harmony import */ var clone_deep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clone_deep__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fast_array_diff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fast-array-diff */ "./node_modules/fast-array-diff/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _mixins_Game__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/mixins/Game */ "./resources/js/mixins/Game.vue");
/* harmony import */ var _mixins_Sound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/mixins/Sound */ "./resources/js/mixins/Sound.vue");
/* harmony import */ var _components_Games_PlayControls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/components/Games/PlayControls */ "./resources/js/components/Games/PlayControls.vue");
/* harmony import */ var _audio_common_click_wav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/../audio/common/click.wav */ "./resources/audio/common/click.wav");
/* harmony import */ var packages_sic_bo_resources_audio_win_wav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! packages/sic-bo/resources/audio/win.wav */ "./packages/sic-bo/resources/audio/win.wav");
/* harmony import */ var packages_sic_bo_resources_audio_lose_wav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! packages/sic-bo/resources/audio/lose.wav */ "./packages/sic-bo/resources/audio/lose.wav");
/* harmony import */ var packages_sic_bo_resources_audio_roll1_wav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! packages/sic-bo/resources/audio/roll1.wav */ "./packages/sic-bo/resources/audio/roll1.wav");
/* harmony import */ var packages_sic_bo_resources_audio_roll2_wav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! packages/sic-bo/resources/audio/roll2.wav */ "./packages/sic-bo/resources/audio/roll2.wav");
/* harmony import */ var _components_dice_svg_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/dice-svg.vue */ "./packages/sic-bo/resources/js/components/dice-svg.vue");
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
  name: 'SicBo',
  components: {
    PlayControls: _components_Games_PlayControls__WEBPACK_IMPORTED_MODULE_9__["default"],
    diceSvg: _components_dice_svg_vue__WEBPACK_IMPORTED_MODULE_15__["default"]
  },
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_6__["default"], _mixins_Game__WEBPACK_IMPORTED_MODULE_7__["default"], _mixins_Sound__WEBPACK_IMPORTED_MODULE_8__["default"]],
  data: function data() {
    return {
      clickSound: _audio_common_click_wav__WEBPACK_IMPORTED_MODULE_10__["default"],
      showWin: false,
      message: null,
      roll: [0, 0, 0],
      formIsValid: true,
      ready: false,
      loading: false,
      playing: false,
      refNumber: null,
      payout: null,
      winChance: null,
      direction: -1,
      mutating: false,
      combo: [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [2, 3], [2, 4], [2, 5], [2, 6], [3, 4], [3, 5], [3, 6], [4, 5], [4, 6], [5, 6]],
      bet: 0,
      bets: [],
      bets_old: [],
      bets_win: [],
      animation: {}
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_16__.mapState)('auth', ['account'])), {}, {
    paytable: function paytable() {
      return this.config.paytable || {};
    },
    rollTotal: function rollTotal() {
      return this.roll.reduce(function (acc, val) {
        return acc + val;
      }, 0);
    },
    rollDuplicates: function rollDuplicates() {
      var d = {};
      this.roll.forEach(function (i) {
        if (!d[i]) {
          d[i] = 1;
        } else {
          d[i]++;
        }
      });
      return d;
    },
    landscape: function landscape() {
      return this.$vuetify.breakpoint.width > this.$vuetify.breakpoint.height;
    }
  }),
  watch: {
    landscape: function landscape() {
      var _this = this;
      this.$nextTick(function () {
        _this.init();
      });
    }
  },
  created: function created() {
    //
  },
  mounted: function mounted() {
    this.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.animation.destroy = true;
    if (typeof this.animation.resolve === 'function') {
      this.animation.resolve();
      this.animation.resolve = null;
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_16__.mapActions)({
    updateUserAccountBalance: 'auth/updateUserAccountBalance',
    setProvablyFairGame: 'provably-fair/set'
  })), {}, {
    init: function init() {
      var _this2 = this;
      if (this.ready) {
        if (!this.$refs.ThreeJS) return;
        // this.animation.renderer.domElement.remove()
        this.animation.container = this.$refs.ThreeJS;
        this.animation.container.appendChild(this.animation.renderer.domElement);
        return;
      }
      if (!this.$refs.ThreeJS) return;
      this.animation = {
        resolve: null,
        pos: null,
        velocity: null,
        container: null,
        scene: null,
        camera: null,
        renderer: null,
        world: null,
        floorWidth: 0,
        floorHeight: 0,
        width: this.$refs.ThreeJS.offsetWidth,
        height: this.$refs.ThreeJS.offsetHeight,
        aspect: this.$refs.ThreeJS.offsetWidth / this.$refs.ThreeJS.offsetHeight,
        camera_angle: 10,
        camera_position: 100,
        near: 0.01,
        far: 10000,
        diceValues: [],
        diceAnimationStep: 0,
        isThrought: false,
        dice: [],
        animate: function animate() {
          if (_this2.animation.destroy) return;
          var i;
          if (_this2.animation.isThrought) {
            for (i in _this2.animation.dice) {
              if (_this2.animation.diceValues[i].steps.length > _this2.animation.diceAnimationStep) _this2.animation.dice[i].setMeshFrom(_this2.animation.diceValues[i].steps[_this2.animation.diceAnimationStep]);
              if (_this2.animation.diceValues[i].sound.length > _this2.animation.diceAnimationStep && _this2.animation.diceValues[i].sound[_this2.animation.diceAnimationStep] && _this2.animation.diceValues[i].lastSound < _this2.animation.diceAnimationStep) {
                if (_this2.animation.diceValues[i].lastSound === 0) _this2.sound(packages_sic_bo_resources_audio_roll1_wav__WEBPACK_IMPORTED_MODULE_13__["default"]);else _this2.sound(packages_sic_bo_resources_audio_roll2_wav__WEBPACK_IMPORTED_MODULE_14__["default"]);
                _this2.animation.diceValues[i].lastSound = _this2.animation.diceAnimationStep + 5;
              }
            }
            _this2.animation.diceAnimationStep++;
          }
          _this2.animation.renderer.render(_this2.animation.scene, _this2.animation.camera);
          requestAnimationFrame(_this2.animation.animate);
          if (_this2.animation.isThrought) {
            var isFinished = true;
            for (i = 0; i < _this2.animation.dice.length; i++) isFinished = isFinished && !(_this2.animation.diceValues[i].steps.length > _this2.animation.diceAnimationStep);
            if (isFinished) {
              _this2.animation.isThrought = false;
              if (typeof _this2.animation.resolve === 'function') _this2.animation.resolve();
            }
          }
        }
      };
      this.animation.scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();
      this.animation.camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(this.animation.camera_angle, this.animation.aspect, this.animation.near, this.animation.far);
      this.animation.scene.add(this.animation.camera);
      this.animation.camera.position.set(0, this.animation.camera_position, 0);
      this.animation.camera.lookAt(0, 0, 0);
      this.animation.renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      this.animation.renderer.setClearColor(0x000000, 0);
      this.animation.renderer.setSize(this.animation.width * 2, this.animation.height * 2);
      this.animation.renderer.shadowMap.enabled = true;
      this.animation.renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_1__.PCFSoftShadowMap;
      this.animation.container = this.$refs.ThreeJS;
      this.animation.container.appendChild(this.animation.renderer.domElement);
      var ambient = new three__WEBPACK_IMPORTED_MODULE_1__.AmbientLight('#ffffff', 0.5);
      this.animation.scene.add(ambient);
      var directionalLight = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight('#ffffff', 0.2);
      directionalLight.position.x = -1000;
      directionalLight.position.y = 1000;
      directionalLight.position.z = 1000;
      this.animation.scene.add(directionalLight);
      var light = new three__WEBPACK_IMPORTED_MODULE_1__.SpotLight(0xefdfd5, 0.5);
      light.position.y = 200;
      light.target.position.set(0, 0, 0);
      light.castShadow = true;
      light.shadow.camera.near = 50;
      light.shadow.camera.far = 110;
      light.shadow.mapSize.width = 1024;
      light.shadow.mapSize.height = 1024;
      this.animation.scene.add(light);
      this.animation.floorHeight = 2 * Math.tan(this.animation.camera.fov * Math.PI / 180 / 2) * Math.abs(this.animation.camera.position.y);
      this.animation.floorWidth = this.animation.floorHeight * this.animation.camera.aspect;
      // var floorMaterial = new THREE.MeshPhongMaterial({ color: '#00aa00', side: THREE.DoubleSide })
      // var floorGeometry = new THREE.PlaneGeometry(floorWidth * 0.95, floorHeight * 0.95, 10, 10)
      // var floor = new THREE.Mesh(floorGeometry, floorMaterial)
      // floor.receiveShadow = true
      // floor.rotation.x = Math.PI / 2
      // scene.add(floor)
      this.animation.world = new cannon__WEBPACK_IMPORTED_MODULE_0__.World();
      this.animation.world.gravity.set(0, -9.82 * 10, 0);
      this.animation.world.broadphase = new cannon__WEBPACK_IMPORTED_MODULE_0__.NaiveBroadphase();
      this.animation.world.solver.iterations = 16;
      packages_sic_bo_resources_js_components_dice_js__WEBPACK_IMPORTED_MODULE_2__.DiceManager.setWorld(this.animation.world);
      // Floor
      var floorBody = new cannon__WEBPACK_IMPORTED_MODULE_0__.Body({
        mass: 0,
        shape: new cannon__WEBPACK_IMPORTED_MODULE_0__.Plane(),
        material: packages_sic_bo_resources_js_components_dice_js__WEBPACK_IMPORTED_MODULE_2__.DiceManager.floorBodyMaterial
      });
      floorBody.quaternion.setFromAxisAngle(new cannon__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, 0, 0), -Math.PI / 2);
      this.animation.world.add(floorBody);
      // floorBody.addEventListener("collide",() => {
      //   this.sound(this.clickSound)
      // })
      // Walls
      var barrier;
      var barrierCorner = 0.85;
      barrier = new cannon__WEBPACK_IMPORTED_MODULE_0__.Body({
        mass: 0,
        shape: new cannon__WEBPACK_IMPORTED_MODULE_0__.Plane(),
        material: packages_sic_bo_resources_js_components_dice_js__WEBPACK_IMPORTED_MODULE_2__.DiceManager.barrierBodyMaterial
      });
      barrier.quaternion.setFromAxisAngle(new cannon__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0), -Math.PI);
      barrier.position.set(0, 0, this.animation.floorHeight * barrierCorner / 2);
      this.animation.world.add(barrier);
      barrier = new cannon__WEBPACK_IMPORTED_MODULE_0__.Body({
        mass: 0,
        shape: new cannon__WEBPACK_IMPORTED_MODULE_0__.Plane(),
        material: packages_sic_bo_resources_js_components_dice_js__WEBPACK_IMPORTED_MODULE_2__.DiceManager.barrierBodyMaterial
      });
      barrier.quaternion.setFromAxisAngle(new cannon__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0), 0);
      barrier.position.set(0, 0, -(this.animation.floorHeight * barrierCorner / 2));
      this.animation.world.add(barrier);
      barrier = new cannon__WEBPACK_IMPORTED_MODULE_0__.Body({
        mass: 0,
        shape: new cannon__WEBPACK_IMPORTED_MODULE_0__.Plane(),
        material: packages_sic_bo_resources_js_components_dice_js__WEBPACK_IMPORTED_MODULE_2__.DiceManager.barrierBodyMaterial
      });
      barrier.quaternion.setFromAxisAngle(new cannon__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0), -Math.PI / 2);
      barrier.position.set(this.animation.floorWidth * barrierCorner / 2, 0, 0);
      this.animation.world.add(barrier);
      barrier = new cannon__WEBPACK_IMPORTED_MODULE_0__.Body({
        mass: 0,
        shape: new cannon__WEBPACK_IMPORTED_MODULE_0__.Plane(),
        material: packages_sic_bo_resources_js_components_dice_js__WEBPACK_IMPORTED_MODULE_2__.DiceManager.barrierBodyMaterial
      });
      barrier.quaternion.setFromAxisAngle(new cannon__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0), Math.PI / 2);
      barrier.position.set(-(this.animation.floorWidth * barrierCorner / 2), 0, 0);
      this.animation.world.add(barrier);
      // DICE COLORS
      var backColor = this.$vuetify.theme.currentTheme.primary;
      var fontColor = color__WEBPACK_IMPORTED_MODULE_17___default()(backColor).rgb().array().reduce(function (acc, val) {
        return acc + val;
      }, 0) / 3 > 127 ? '#333333' : '#eeeeee';
      var d;
      d = new packages_sic_bo_resources_js_components_dice_js__WEBPACK_IMPORTED_MODULE_2__.DiceD6({
        size: this.$vuetify.breakpoint.width < 900 ? 3.5 : 1.5,
        backColor: backColor,
        fontColor: fontColor
      });
      this.animation.scene.add(d.getObject());
      this.animation.dice.push(d);
      d = new packages_sic_bo_resources_js_components_dice_js__WEBPACK_IMPORTED_MODULE_2__.DiceD6({
        size: this.$vuetify.breakpoint.width < 900 ? 3.5 : 1.5,
        backColor: backColor,
        fontColor: fontColor
      });
      this.animation.scene.add(d.getObject());
      this.animation.dice.push(d);
      d = new packages_sic_bo_resources_js_components_dice_js__WEBPACK_IMPORTED_MODULE_2__.DiceD6({
        size: this.$vuetify.breakpoint.width < 900 ? 3.5 : 1.5,
        backColor: backColor,
        fontColor: fontColor
      });
      this.animation.scene.add(d.getObject());
      this.animation.dice.push(d);
      this.animation.diceThrow = function (roll) {
        return new Promise(function (resolve) {
          _this2.animation.resolve = resolve;
          var pos = {
            x: 0,
            y: 10,
            z: _this2.animation.floorHeight / 2 * -0.9
          };
          var velocity = {
            x: 20 - 40 * Math.random(),
            y: -0.01,
            z: 40 * Math.random() + 40
          };
          _this2.animation.isThrought = true;
          _this2.animation.diceAnimationStep = 0;
          _this2.animation.diceValues = [];
          var i;
          for (i = 0; i < _this2.animation.dice.length; i++) {
            _this2.animation.dice[i].getObject().position.x = pos.x - i % 3 * 1.5;
            _this2.animation.dice[i].getObject().position.y = pos.y + Math.floor(i / 3) * 1.5;
            _this2.animation.dice[i].getObject().position.z = pos.z + i % 3 * 1.5;
            _this2.animation.dice[i].updateBodyFromMesh();
            _this2.animation.dice[i].getObject().body.velocity.set(velocity.x, velocity.y, velocity.z);
            _this2.animation.dice[i].getObject().body.angularVelocity.set(10 * Math.random() - 10, 10 * Math.random() - 10, 10 * Math.random() - 10);
            _this2.animation.diceValues.push({
              dice: _this2.animation.dice[i],
              value: roll[i]
            });
          }
          packages_sic_bo_resources_js_components_dice_js__WEBPACK_IMPORTED_MODULE_2__.DiceManager.prepareValues(_this2.animation.diceValues, floorBody);
        });
      };
      this.animation.world.step(1.0 / 60.0);
      requestAnimationFrame(this.animation.animate);
      this.animation.start = function () {
        _this2.animation.diceValues = [];
        for (var i = 0; i < _this2.animation.dice.length; i++) {
          _this2.animation.dice[i].getObject().position.x = i % 3 * 1.7;
          _this2.animation.dice[i].getObject().position.y = 15 + Math.floor(i / 3) * 1.7;
          _this2.animation.dice[i].getObject().position.z = i % 3 * 1.7;
          _this2.animation.dice[i].getObject().quaternion.x = 0;
          _this2.animation.dice[i].getObject().quaternion.y = 0;
          _this2.animation.dice[i].getObject().quaternion.z = 0;
          _this2.animation.dice[i].updateBodyFromMesh();
          _this2.animation.dice[i].getObject().body.velocity.set(0, 10, 0);
          _this2.animation.dice[i].getObject().body.angularVelocity.set(0, 5, 0);
          _this2.animation.diceValues.push({
            dice: _this2.animation.dice[i],
            value: i + 1
          });
        }
        packages_sic_bo_resources_js_components_dice_js__WEBPACK_IMPORTED_MODULE_2__.DiceManager.prepareValues(_this2.animation.diceValues, floorBody);
        _this2.animation.dice.forEach(function (dice) {
          return dice.updateMeshFromBody();
        });
      };
      this.animation.start();
      this.ready = true;
    },
    rollCombo: function rollCombo(c) {
      return (0,fast_array_diff__WEBPACK_IMPORTED_MODULE_4__.same)(c, this.roll).length >= 2;
    },
    rebet: function rebet() {
      this.showWin = false;
      this.bets = clone_deep__WEBPACK_IMPORTED_MODULE_3___default()(this.bets_old);
    },
    placeBet: function placeBet(type, numbers) {
      this.showWin = false;
      if (numbers === undefined) numbers = [];
      var i;
      if (!(i = this.bets.find(function (bet) {
        return bet.type === type && (numbers === undefined || (0,fast_array_diff__WEBPACK_IMPORTED_MODULE_4__.same)(bet.numbers, numbers).length === numbers.length && numbers.length === bet.numbers.length);
      }))) {
        i = {
          type: type,
          numbers: numbers,
          amount: this.bet
        };
        this.bets.push(i);
      } else {
        i.amount += this.bet;
        if (i.amount > this.config.max_bet) i.amount = this.config.max_bet;
      }
    },
    getBetSize: function getBetSize(type, numbers) {
      var i;
      if (this.showWin) {
        if (i = this.bets_win.find(function (bet) {
          return bet.type === type && (numbers === undefined || (0,fast_array_diff__WEBPACK_IMPORTED_MODULE_4__.same)(bet.numbers, numbers).length === numbers.length && numbers.length === bet.numbers.length);
        })) {
          return i.win;
        } else {
          return null;
        }
      } else {
        if (i = this.bets.find(function (bet) {
          return bet.type === type && (numbers === undefined || (0,fast_array_diff__WEBPACK_IMPORTED_MODULE_4__.same)(bet.numbers, numbers).length === numbers.length && numbers.length === bet.numbers.length);
        })) {
          return i.amount;
        } else {
          return null;
        }
      }
    },
    play: function play(bet, autoPlayInProgress) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var endpoint, requestParams, _yield$axios$post, game;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this3.loading = true;
              _this3.playing = true;
              _this3.win = 0;
              _this3.message = null;

              // update user balance
              _this3.updateUserAccountBalance(_this3.account.balance - bet);
              if (autoPlayInProgress && !_this3.bets.length) {
                _this3.rebet();
              }

              // API request params
              endpoint = _this3.getRoute('play');
              requestParams = {
                hash: _this3.provablyFairGame.hash,
                bets: _this3.bets
              }; // execute the action
              _context.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post(endpoint, requestParams);
            case 10:
              _yield$axios$post = _context.sent;
              game = _yield$axios$post.data;
              _this3.loading = false;
              _context.next = 15;
              return _this3.animation.diceThrow(game.gameable.roll);
            case 15:
              if (!_this3.animation.destroy) {
                _context.next = 17;
                break;
              }
              return _context.abrupt("return");
            case 17:
              _this3.roll = game.gameable.roll.sort();
              _this3.bets_win = game.gameable.bets.filter(function (bet) {
                return bet.win > 0;
              });
              _this3.showWin = true;
              _this3.bets_old = _this3.bets;
              _this3.bets = [];
              _this3.setProvablyFairGame({
                key: _this3.gamePackageId,
                game: game.pf_game
              });
              _this3.playing = false;
              _this3.updateUserAccountBalance(game.account.balance);
              if (game.win > 0) {
                _this3.sound(_this3.config.sounds.win || packages_sic_bo_resources_audio_win_wav__WEBPACK_IMPORTED_MODULE_11__["default"]);
                _this3.message = _this3.$t('You won') + ' ' + game.win;
              } else {
                _this3.sound(_this3.config.sounds.lose || packages_sic_bo_resources_audio_lose_wav__WEBPACK_IMPORTED_MODULE_12__["default"]);
                _this3.message = _this3.$t('You lose');
              }
              _this3.$refs.controls.onGameCompleted(game);
            case 27:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./packages/sic-bo/resources/js/components/dice.js":
/*!*********************************************************!*\
  !*** ./packages/sic-bo/resources/js/components/dice.js ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiceD10": () => (/* binding */ DiceD10),
/* harmony export */   "DiceD12": () => (/* binding */ DiceD12),
/* harmony export */   "DiceD20": () => (/* binding */ DiceD20),
/* harmony export */   "DiceD4": () => (/* binding */ DiceD4),
/* harmony export */   "DiceD6": () => (/* binding */ DiceD6),
/* harmony export */   "DiceD8": () => (/* binding */ DiceD8),
/* harmony export */   "DiceManager": () => (/* binding */ DiceManager)
/* harmony export */ });
/* harmony import */ var cannon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cannon */ "./node_modules/cannon/build/cannon.js");
/* harmony import */ var cannon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cannon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* module decorator */ module = __webpack_require__.hmd(module);
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var DiceManagerClass = /*#__PURE__*/function () {
  function DiceManagerClass() {
    _classCallCheck(this, DiceManagerClass);
    this.world = null;
  }
  _createClass(DiceManagerClass, [{
    key: "setWorld",
    value: function setWorld(world) {
      this.world = world;
      this.diceBodyMaterial = new cannon__WEBPACK_IMPORTED_MODULE_0__.Material();
      this.floorBodyMaterial = new cannon__WEBPACK_IMPORTED_MODULE_0__.Material();
      this.barrierBodyMaterial = new cannon__WEBPACK_IMPORTED_MODULE_0__.Material();
      world.addContactMaterial(new cannon__WEBPACK_IMPORTED_MODULE_0__.ContactMaterial(this.floorBodyMaterial, this.diceBodyMaterial, {
        friction: 0.01,
        restitution: 0.5
      }));
      world.addContactMaterial(new cannon__WEBPACK_IMPORTED_MODULE_0__.ContactMaterial(this.barrierBodyMaterial, this.diceBodyMaterial, {
        friction: 0,
        restitution: 1.0
      }));
      world.addContactMaterial(new cannon__WEBPACK_IMPORTED_MODULE_0__.ContactMaterial(this.diceBodyMaterial, this.diceBodyMaterial, {
        friction: 0,
        restitution: 0.5
      }));
    }

    /**
       *
       * @param {array} diceValues
       * @param {DiceObject} [diceValues.dice]
       * @param {number} [diceValues.value]
       *
       */
  }, {
    key: "prepareValues",
    value: function prepareValues(diceValues, floorBody) {
      var _this = this;
      if (this.throwRunning) throw new Error('Cannot start another throw. Please wait, till the current throw is finished.');
      for (var i = 0; i < diceValues.length; i++) {
        if (diceValues[i].value < 1 || diceValues[i].dice.values < diceValues[i].value) {
          throw new Error('Cannot throw die to value ' + diceValues[i].value + ', because it has only ' + diceValues[i].dice.values + ' sides.');
        }
      }
      this.throwRunning = true;
      for (var _i = 0; _i < diceValues.length; _i++) {
        diceValues[_i].dice.simulationRunning = true;
        // diceValues[i].vectors = diceValues[i].dice.getCurrentVectors();
        diceValues[_i].stableCount = 0;
        diceValues[_i].steps = [];
        diceValues[_i].sound = [];
        diceValues[_i].lastSound = 0;
        diceValues[_i].steps.push(diceValues[_i].dice.getVisibleVectors());
      }
      var isContacts = false;
      var collide = function collide() {
        isContacts = true;
      };
      floorBody.addEventListener('collide', collide);
      var check = function check() {
        var allStable = true;
        for (var _i2 = 0; _i2 < diceValues.length; _i2++) {
          if (diceValues[_i2].dice.isFinished()) {
            diceValues[_i2].stableCount++;
          } else {
            diceValues[_i2].stableCount = 0;
          }
          if (diceValues[_i2].stableCount < 50) {
            allStable = false;
          }
          diceValues[_i2].steps.push(diceValues[_i2].dice.getVisibleVectors());
          diceValues[_i2].sound.push(isContacts);
        }
        isContacts = false;
        _this.simulateStep++;
        if (allStable) {
          // console.log("all stable",this.simulateStep);
          DiceManager.world.removeEventListener('postStep', check);
          floorBody.removeEventListener('collide', collide);
          for (var _i3 = 0; _i3 < diceValues.length; _i3++) {
            // console.log('Dice ',i,diceValues[i].value,diceValues[i].dice.getUpsideValue())
            diceValues[_i3].dice.shiftUpperValue(diceValues[_i3].value);
            // diceValues[i].dice.setVectors(diceValues[i].vectors);
            diceValues[_i3].dice.simulationRunning = false;
          }
          _this.throwRunning = false;
        } else {
          DiceManager.world.step(1.00 / 60.00);
        }
      };
      this.world.addEventListener('postStep', check);
      DiceManager.world.step(1.00 / 60.00);
    }
  }]);
  return DiceManagerClass;
}();
var DiceObject = /*#__PURE__*/function () {
  /**
     * @constructor
     * @param {object} options
     * @param {Number} [options.size = 100]
     * @param {Number} [options.fontColor = '#000000']
     * @param {Number} [options.backColor = '#ffffff']
     */
  function DiceObject(options) {
    _classCallCheck(this, DiceObject);
    options = this.setDefaults(options, {
      size: 100,
      fontColor: '#000000',
      backColor: '#ffffff'
    });
    this.object = null;
    this.size = options.size;
    this.invertUpside = false;
    this.materialOptions = {
      specular: 0x172022,
      color: 0xf0f0f0,
      shininess: 40,
      flatShading: true
    };
    this.labelColor = options.fontColor;
    this.diceColor = options.backColor;
  }
  _createClass(DiceObject, [{
    key: "setDefaults",
    value: function setDefaults(options, defaults) {
      options = options || {};
      for (var key in defaults) {
        if (!defaults.hasOwnProperty(key)) continue;
        if (!(key in options)) {
          options[key] = defaults[key];
        }
      }
      return options;
    }
  }, {
    key: "emulateThrow",
    value: function emulateThrow(callback) {
      var _this2 = this;
      var stableCount = 0;
      var check = function check() {
        if (_this2.isFinished()) {
          stableCount++;
          if (stableCount === 50) {
            DiceManager.world.removeEventListener('postStep', check);
            callback(_this2.getUpsideValue());
          }
        } else {
          stableCount = 0;
        }
        DiceManager.world.step(DiceManager.world.dt);
      };
      DiceManager.world.addEventListener('postStep', check);
    }
  }, {
    key: "isFinished",
    value: function isFinished() {
      var threshold = 1;
      var angularVelocity = this.object.body.angularVelocity;
      var velocity = this.object.body.velocity;
      return Math.abs(angularVelocity.x) < threshold && Math.abs(angularVelocity.y) < threshold && Math.abs(angularVelocity.z) < threshold && Math.abs(velocity.x) < threshold && Math.abs(velocity.y) < threshold && Math.abs(velocity.z) < threshold;
    }
  }, {
    key: "getUpsideValue",
    value: function getUpsideValue() {
      var vector = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, this.invertUpside ? -1 : 1);
      var closestFace;
      var closestAngle = Math.PI * 2;
      for (var i = 0; i < this.object.geometry.faces.length; ++i) {
        var face = this.object.geometry.faces[i];
        if (face.materialIndex === 0) continue;
        var angle = face.normal.clone().applyQuaternion(this.object.body.quaternion).angleTo(vector);
        if (angle < closestAngle) {
          closestAngle = angle;
          closestFace = face;
        }
      }
      return closestFace.materialIndex - 1;
    }
  }, {
    key: "getVisibleVectors",
    value: function getVisibleVectors() {
      return {
        position: this.object.body.position.clone(),
        quaternion: this.object.body.quaternion.clone()
      };
    }
  }, {
    key: "getCurrentVectors",
    value: function getCurrentVectors() {
      return {
        position: this.object.body.position.clone(),
        quaternion: this.object.body.quaternion.clone(),
        velocity: this.object.body.velocity.clone(),
        angularVelocity: this.object.body.angularVelocity.clone()
      };
    }
  }, {
    key: "setVectors",
    value: function setVectors(vectors) {
      this.object.body.position = vectors.position;
      this.object.body.quaternion = vectors.quaternion;
      this.object.body.velocity = vectors.velocity;
      this.object.body.angularVelocity = vectors.angularVelocity;
    }
  }, {
    key: "shiftUpperValue",
    value: function shiftUpperValue(toValue) {
      var geometry = this.shiftUpperValueCustom(toValue);
      if (!geometry) {
        geometry = this.object.geometry.clone();
        var fromValue = this.getUpsideValue();
        for (var i = 0, l = geometry.faces.length; i < l; ++i) {
          var materialIndex = geometry.faces[i].materialIndex;
          if (materialIndex === 0) continue;
          materialIndex += toValue - fromValue - 1;
          while (materialIndex > this.values) materialIndex -= this.values;
          while (materialIndex < 1) materialIndex += this.values;
          geometry.faces[i].materialIndex = materialIndex + 1;
        }
      }
      this.object.geometry = geometry;
    }
  }, {
    key: "getChamferGeometry",
    value: function getChamferGeometry(vectors, faces, chamfer) {
      var chamferVectors = [];
      var chamferFaces = [];
      var cornerFaces = new Array(vectors.length);
      for (var i = 0; i < vectors.length; ++i) cornerFaces[i] = [];
      for (var _i4 = 0; _i4 < faces.length; ++_i4) {
        var ii = faces[_i4];
        var fl = ii.length - 1;
        var centerPoint = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
        var face = new Array(fl);
        for (var j = 0; j < fl; ++j) {
          var vv = vectors[ii[j]].clone();
          centerPoint.add(vv);
          cornerFaces[ii[j]].push(face[j] = chamferVectors.push(vv) - 1);
        }
        centerPoint.divideScalar(fl);
        for (var _j = 0; _j < fl; ++_j) {
          var _vv = chamferVectors[face[_j]];
          _vv.subVectors(_vv, centerPoint).multiplyScalar(chamfer).addVectors(_vv, centerPoint);
        }
        face.push(ii[fl]);
        chamferFaces.push(face);
      }
      for (var _i5 = 0; _i5 < faces.length - 1; ++_i5) {
        for (var _j2 = _i5 + 1; _j2 < faces.length; ++_j2) {
          var pairs = [];
          var lastm = -1;
          for (var m = 0; m < faces[_i5].length - 1; ++m) {
            var n = faces[_j2].indexOf(faces[_i5][m]);
            if (n >= 0 && n < faces[_j2].length - 1) {
              if (lastm >= 0 && m !== lastm + 1) pairs.unshift([_i5, m], [_j2, n]);else pairs.push([_i5, m], [_j2, n]);
              lastm = m;
            }
          }
          if (pairs.length !== 4) continue;
          chamferFaces.push([chamferFaces[pairs[0][0]][pairs[0][1]], chamferFaces[pairs[1][0]][pairs[1][1]], chamferFaces[pairs[3][0]][pairs[3][1]], chamferFaces[pairs[2][0]][pairs[2][1]], -1]);
        }
      }
      for (var _i6 = 0; _i6 < cornerFaces.length; ++_i6) {
        var cf = cornerFaces[_i6];
        var _face = [cf[0]];
        var count = cf.length - 1;
        while (count) {
          for (var _m = faces.length; _m < chamferFaces.length; ++_m) {
            var index = chamferFaces[_m].indexOf(_face[_face.length - 1]);
            if (index >= 0 && index < 4) {
              if (--index === -1) index = 3;
              var nextVertex = chamferFaces[_m][index];
              if (cf.indexOf(nextVertex) >= 0) {
                _face.push(nextVertex);
                break;
              }
            }
          }
          --count;
        }
        _face.push(-1);
        chamferFaces.push(_face);
      }
      return {
        vectors: chamferVectors,
        faces: chamferFaces
      };
    }
  }, {
    key: "makeGeometry",
    value: function makeGeometry(vertices, faces, radius, tab, af) {
      var geom = new three__WEBPACK_IMPORTED_MODULE_1__.Geometry();
      for (var i = 0; i < vertices.length; ++i) {
        var vertex = vertices[i].multiplyScalar(radius);
        vertex.index = geom.vertices.push(vertex) - 1;
      }
      for (var _i7 = 0; _i7 < faces.length; ++_i7) {
        var ii = faces[_i7];
        var fl = ii.length - 1;
        var aa = Math.PI * 2 / fl;
        for (var j = 0; j < fl - 2; ++j) {
          geom.faces.push(new three__WEBPACK_IMPORTED_MODULE_1__.Face3(ii[0], ii[j + 1], ii[j + 2], [geom.vertices[ii[0]], geom.vertices[ii[j + 1]], geom.vertices[ii[j + 2]]], 0, ii[fl] + 1));
          geom.faceVertexUvs[0].push([new three__WEBPACK_IMPORTED_MODULE_1__.Vector2((Math.cos(af) + 1 + tab) / 2 / (1 + tab), (Math.sin(af) + 1 + tab) / 2 / (1 + tab)), new three__WEBPACK_IMPORTED_MODULE_1__.Vector2((Math.cos(aa * (j + 1) + af) + 1 + tab) / 2 / (1 + tab), (Math.sin(aa * (j + 1) + af) + 1 + tab) / 2 / (1 + tab)), new three__WEBPACK_IMPORTED_MODULE_1__.Vector2((Math.cos(aa * (j + 2) + af) + 1 + tab) / 2 / (1 + tab), (Math.sin(aa * (j + 2) + af) + 1 + tab) / 2 / (1 + tab))]);
        }
      }
      geom.computeFaceNormals();
      geom.boundingSphere = new three__WEBPACK_IMPORTED_MODULE_1__.Sphere(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(), radius);
      return geom;
    }
  }, {
    key: "createShape",
    value: function createShape(vertices, faces, radius) {
      var cv = new Array(vertices.length);
      var cf = new Array(faces.length);
      for (var i = 0; i < vertices.length; ++i) {
        var v = vertices[i];
        cv[i] = new cannon__WEBPACK_IMPORTED_MODULE_0__.Vec3(v.x * radius, v.y * radius, v.z * radius);
      }
      for (var _i8 = 0; _i8 < faces.length; ++_i8) {
        cf[_i8] = faces[_i8].slice(0, faces[_i8].length - 1);
      }
      return new cannon__WEBPACK_IMPORTED_MODULE_0__.ConvexPolyhedron(cv, cf);
    }
  }, {
    key: "getGeometry",
    value: function getGeometry() {
      var radius = this.size * this.scaleFactor;
      var vectors = new Array(this.vertices.length);
      for (var i = 0; i < this.vertices.length; ++i) {
        vectors[i] = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3().fromArray(this.vertices[i]).normalize();
      }
      var chamferGeometry = this.getChamferGeometry(vectors, this.faces, this.chamfer);
      var geometry = this.makeGeometry(chamferGeometry.vectors, chamferGeometry.faces, radius, this.tab, this.af);
      geometry.cannon_shape = this.createShape(vectors, this.faces, radius);
      return geometry;
    }
  }, {
    key: "calculateTextureSize",
    value: function calculateTextureSize(approx) {
      return Math.max(128, Math.pow(2, Math.floor(Math.log(approx) / Math.log(2))));
    }
  }, {
    key: "createTextTexture",
    value: function createTextTexture(text, color, backColor) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var ts = this.calculateTextureSize(this.size / 2 + this.size * this.textMargin) * 2;
      canvas.width = canvas.height = ts;
      context.font = ts / (1 + 2 * this.textMargin) + 'pt Arial';
      context.fillStyle = backColor;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = color;
      context.fillText(text, canvas.width / 2, canvas.height / 2);
      var texture = new three__WEBPACK_IMPORTED_MODULE_1__.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    }
  }, {
    key: "getMaterials",
    value: function getMaterials() {
      var materials = [];
      for (var i = 0; i < this.faceTexts.length; ++i) {
        var texture = null;
        if (this.customTextTextureFunction) {
          texture = this.customTextTextureFunction(this.faceTexts[i], this.labelColor, this.diceColor);
        } else {
          texture = this.createTextTexture(this.faceTexts[i], this.labelColor, this.diceColor);
        }
        materials.push(new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial(Object.assign({}, this.materialOptions, {
          map: texture
        })));
      }
      return materials;
    }
  }, {
    key: "getObject",
    value: function getObject() {
      return this.object;
    }
  }, {
    key: "create",
    value: function create() {
      if (!DiceManager.world) throw new Error('You must call DiceManager.setWorld(world) first.');
      this.object = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(this.getGeometry(), this.getMaterials());
      this.object.reveiceShadow = true;
      this.object.castShadow = true;
      this.object.diceObject = this;
      this.object.body = new cannon__WEBPACK_IMPORTED_MODULE_0__.Body({
        mass: this.mass,
        shape: this.object.geometry.cannon_shape,
        material: DiceManager.diceBodyMaterial
      });
      this.object.body.linearDamping = 0.1;
      this.object.body.angularDamping = 0.1;
      DiceManager.world.add(this.object.body);
      return this.object;
    }
  }, {
    key: "updateMeshFromBody",
    value: function updateMeshFromBody() {
      if (!this.simulationRunning) {
        this.object.position.copy(this.object.body.position);
        this.object.quaternion.copy(this.object.body.quaternion);
      }
    }
  }, {
    key: "updateBodyFromMesh",
    value: function updateBodyFromMesh() {
      this.object.body.position.copy(this.object.position);
      this.object.body.quaternion.copy(this.object.quaternion);
    }
  }, {
    key: "setMeshFrom",
    value: function setMeshFrom(object) {
      this.object.position.copy(object.position);
      this.object.quaternion.copy(object.quaternion);
    }
  }, {
    key: "shiftUpperValueCustom",
    value: function shiftUpperValueCustom(diceValue) {
      return null;
    }
  }]);
  return DiceObject;
}();
var DiceD4 = /*#__PURE__*/function (_DiceObject) {
  _inherits(DiceD4, _DiceObject);
  var _super = _createSuper(DiceD4);
  function DiceD4(options) {
    var _this3;
    _classCallCheck(this, DiceD4);
    _this3 = _super.call(this, options);
    _this3.tab = -0.1;
    _this3.af = Math.PI * 7 / 6;
    _this3.chamfer = 0.96;
    _this3.vertices = [[1, 1, 1], [-1, -1, 1], [-1, 1, -1], [1, -1, -1]];
    _this3.faces = [[1, 0, 2, 1], [0, 1, 3, 2], [0, 3, 2, 3], [1, 2, 3, 4]];
    _this3.faceTexts = [[], [0, 0, 0], [2, 4, 3], [1, 3, 4], [2, 1, 4], [1, 2, 3]];
    _this3.scaleFactor = 1.2;
    _this3.values = 4;
    // [[], [0, 0, 0], [2, 4, 3], [1, 3, 4], [2, 1, 4], [1, 2, 3]]  original
    _this3.d4FaceTexts = [[[[], [0, 0, 0], [2, 4, 3], [1, 3, 4], [2, 1, 4], [1, 2, 3]],
    // 1 - 1
    [[], [0, 0, 0], [1, 4, 3], [2, 3, 4], [1, 2, 4], [2, 1, 3]],
    // 1 - 2
    [[], [0, 0, 0], [2, 4, 1], [3, 1, 4], [2, 3, 4], [3, 2, 1]],
    // 1 - 3
    [[], [0, 0, 0], [2, 1, 3], [4, 3, 1], [2, 4, 1], [4, 2, 3]] // 1 - 4
    ], [[[], [0, 0, 0], [1, 4, 3], [2, 3, 4], [1, 2, 4], [2, 1, 3]],
    // 2 - 1
    [[], [0, 0, 0], [2, 4, 3], [1, 3, 4], [2, 1, 4], [1, 2, 3]],
    // 2 - 2
    [[], [0, 0, 0], [3, 4, 2], [1, 2, 4], [3, 1, 4], [1, 3, 2]],
    // 2 - 3
    [[], [0, 0, 0], [4, 2, 3], [1, 3, 2], [4, 1, 2], [1, 4, 3]] // 2 - 4
    ], [[[], [0, 0, 0], [2, 4, 1], [3, 1, 4], [2, 3, 4], [3, 2, 1]],
    // 3 - 1
    [[], [0, 0, 0], [3, 4, 2], [1, 2, 4], [3, 1, 4], [1, 3, 2]],
    // 3 - 2
    [[], [0, 0, 0], [2, 4, 3], [1, 3, 4], [2, 1, 4], [1, 2, 3]],
    // 3 - 3
    [[], [0, 0, 0], [2, 3, 4], [1, 4, 3], [2, 1, 3], [1, 2, 4]] // 3 - 4
    ], [[[], [0, 0, 0], [2, 1, 3], [4, 3, 1], [2, 4, 1], [4, 2, 3]],
    // 4 - 1
    [[], [0, 0, 0], [4, 2, 3], [1, 3, 2], [4, 1, 2], [1, 4, 3]],
    // 4 - 2
    [[], [0, 0, 0], [2, 3, 4], [1, 4, 3], [2, 1, 3], [1, 2, 4]],
    // 4 - 3
    [[], [0, 0, 0], [2, 4, 3], [1, 3, 4], [2, 1, 4], [1, 2, 3]] // 4 - 4
    ]];
    // this.faceTexts = this.d4FaceTexts[0];
    // this.updateMaterialsForValue = (diceValue) => {
    //     if (diceValue < 0) diceValue += 4;
    //     this.faceTexts = this.d4FaceTexts[diceValue];
    //     this.object.material = this.getMaterials();
    // };

    _this3.shiftUpperValueCustom = function (diceValueNew) {
      // let geometry = this.object.geometry.clone()
      var geometry = _this3.object.geometry;
      var fromValue = _this3.getUpsideValue();
      _this3.faceTexts = _this3.d4FaceTexts[fromValue - 1][diceValueNew - 1];
      _this3.object.material = _this3.getMaterials();
      // this.updateMaterialsForValue(diceValueNew - fromValue);
      return geometry;
    };
    _this3.customTextTextureFunction = function (text, color, backColor) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var ts = this.calculateTextureSize(this.size / 2 + this.size * 2) * 2;
      canvas.width = canvas.height = ts;
      context.font = ts / 5 + 'pt Arial';
      context.fillStyle = backColor;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = color;
      for (var i in text) {
        context.fillText(text[i], canvas.width / 2, canvas.height / 2 - ts * 0.3);
        context.translate(canvas.width / 2, canvas.height / 2);
        context.rotate(Math.PI * 2 / 3);
        context.translate(-canvas.width / 2, -canvas.height / 2);
      }
      var texture = new three__WEBPACK_IMPORTED_MODULE_1__.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    };
    _this3.mass = 300;
    _this3.inertia = 5;
    _this3.invertUpside = true;
    _this3.create();
    return _this3;
  }
  return _createClass(DiceD4);
}(DiceObject);
var DiceD6 = /*#__PURE__*/function (_DiceObject2) {
  _inherits(DiceD6, _DiceObject2);
  var _super2 = _createSuper(DiceD6);
  function DiceD6(options) {
    var _this4;
    _classCallCheck(this, DiceD6);
    _this4 = _super2.call(this, options);
    _this4.tab = 0.1;
    _this4.af = Math.PI / 4;
    _this4.chamfer = 0.96;
    _this4.vertices = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]];
    _this4.faces = [[0, 3, 2, 1, 1], [1, 2, 6, 5, 2], [0, 1, 5, 4, 3], [3, 7, 6, 2, 4], [0, 4, 7, 3, 5], [4, 5, 6, 7, 6]];
    _this4.scaleFactor = 0.9;
    _this4.values = 6;
    _this4.faceTexts = [' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    _this4.textMargin = 1.0;
    _this4.mass = 300;
    _this4.inertia = 13;
    _this4.create();
    return _this4;
  }
  return _createClass(DiceD6);
}(DiceObject);
var DiceD8 = /*#__PURE__*/function (_DiceObject3) {
  _inherits(DiceD8, _DiceObject3);
  var _super3 = _createSuper(DiceD8);
  function DiceD8(options) {
    var _this5;
    _classCallCheck(this, DiceD8);
    _this5 = _super3.call(this, options);
    _this5.tab = 0;
    _this5.af = -Math.PI / 4 / 2;
    _this5.chamfer = 0.965;
    _this5.vertices = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
    _this5.faces = [[0, 2, 4, 1], [0, 4, 3, 2], [0, 3, 5, 3], [0, 5, 2, 4], [1, 3, 4, 5], [1, 4, 2, 6], [1, 2, 5, 7], [1, 5, 3, 8]];
    _this5.scaleFactor = 1;
    _this5.values = 8;
    _this5.faceTexts = [' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    _this5.textMargin = 1.2;
    _this5.mass = 340;
    _this5.inertia = 10;
    _this5.create();
    return _this5;
  }
  return _createClass(DiceD8);
}(DiceObject);
var DiceD10 = /*#__PURE__*/function (_DiceObject4) {
  _inherits(DiceD10, _DiceObject4);
  var _super4 = _createSuper(DiceD10);
  function DiceD10(options) {
    var _this6;
    _classCallCheck(this, DiceD10);
    _this6 = _super4.call(this, options);
    _this6.tab = 0;
    _this6.af = Math.PI * 6 / 5;
    _this6.chamfer = 0.945;
    _this6.vertices = [];
    _this6.faces = [[5, 7, 11, 0], [4, 2, 10, 1], [1, 3, 11, 2], [0, 8, 10, 3], [7, 9, 11, 4], [8, 6, 10, 5], [9, 1, 11, 6], [2, 0, 10, 7], [3, 5, 11, 8], [6, 4, 10, 9], [1, 0, 2, -1], [1, 2, 3, -1], [3, 2, 4, -1], [3, 4, 5, -1], [5, 4, 6, -1], [5, 6, 7, -1], [7, 6, 8, -1], [7, 8, 9, -1], [9, 8, 0, -1], [9, 0, 1, -1]];
    for (var i = 0, b = 0; i < 10; ++i, b += Math.PI * 2 / 10) {
      _this6.vertices.push([Math.cos(b), Math.sin(b), 0.105 * (i % 2 ? 1 : -1)]);
    }
    _this6.vertices.push([0, 0, -1]);
    _this6.vertices.push([0, 0, 1]);
    _this6.scaleFactor = 0.9;
    _this6.values = 10;
    _this6.faceTexts = [' ', '0', '1', '2', '3', '4', '5', ' 6.', '7', '8', ' 9.', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    _this6.textMargin = 1.0;
    _this6.mass = 350;
    _this6.inertia = 9;
    _this6.create();
    return _this6;
  }
  return _createClass(DiceD10);
}(DiceObject);
var DiceD12 = /*#__PURE__*/function (_DiceObject5) {
  _inherits(DiceD12, _DiceObject5);
  var _super5 = _createSuper(DiceD12);
  function DiceD12(options) {
    var _this7;
    _classCallCheck(this, DiceD12);
    _this7 = _super5.call(this, options);
    var p = (1 + Math.sqrt(5)) / 2;
    var q = 1 / p;
    _this7.tab = 0.2;
    _this7.af = -Math.PI / 4 / 2;
    _this7.chamfer = 0.968;
    _this7.vertices = [[0, q, p], [0, q, -p], [0, -q, p], [0, -q, -p], [p, 0, q], [p, 0, -q], [-p, 0, q], [-p, 0, -q], [q, p, 0], [q, -p, 0], [-q, p, 0], [-q, -p, 0], [1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1], [-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1]];
    _this7.faces = [[2, 14, 4, 12, 0, 1], [15, 9, 11, 19, 3, 2], [16, 10, 17, 7, 6, 3], [6, 7, 19, 11, 18, 4], [6, 18, 2, 0, 16, 5], [18, 11, 9, 14, 2, 6], [1, 17, 10, 8, 13, 7], [1, 13, 5, 15, 3, 8], [13, 8, 12, 4, 5, 9], [5, 4, 14, 9, 15, 10], [0, 12, 8, 10, 16, 11], [3, 19, 7, 17, 1, 12]];
    _this7.scaleFactor = 0.9;
    _this7.values = 12;
    _this7.faceTexts = [' ', '0', '1', '2', '3', '4', '5', ' 6.', '7', '8', ' 9.', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    _this7.textMargin = 1.0;
    _this7.mass = 350;
    _this7.inertia = 8;
    _this7.create();
    return _this7;
  }
  return _createClass(DiceD12);
}(DiceObject);
var DiceD20 = /*#__PURE__*/function (_DiceObject6) {
  _inherits(DiceD20, _DiceObject6);
  var _super6 = _createSuper(DiceD20);
  function DiceD20(options) {
    var _this8;
    _classCallCheck(this, DiceD20);
    _this8 = _super6.call(this, options);
    var t = (1 + Math.sqrt(5)) / 2;
    _this8.tab = -0.2;
    _this8.af = -Math.PI / 4 / 2;
    _this8.chamfer = 0.955;
    _this8.vertices = [[-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0], [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t], [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]];
    _this8.faces = [[0, 11, 5, 1], [0, 5, 1, 2], [0, 1, 7, 3], [0, 7, 10, 4], [0, 10, 11, 5], [1, 5, 9, 6], [5, 11, 4, 7], [11, 10, 2, 8], [10, 7, 6, 9], [7, 1, 8, 10], [3, 9, 4, 11], [3, 4, 2, 12], [3, 2, 6, 13], [3, 6, 8, 14], [3, 8, 9, 15], [4, 9, 5, 16], [2, 4, 11, 17], [6, 2, 10, 18], [8, 6, 7, 19], [9, 8, 1, 20]];
    _this8.scaleFactor = 1;
    _this8.values = 20;
    _this8.faceTexts = [' ', '0', '1', '2', '3', '4', '5', ' 6.', '7', '8', ' 9.', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    _this8.textMargin = 1.0;
    _this8.mass = 400;
    _this8.inertia = 6;
    _this8.create();
    return _this8;
  }
  return _createClass(DiceD20);
}(DiceObject);

// ---------------------------------------------//

var DiceManager = new DiceManagerClass();
if (typeof define === 'function' && __webpack_require__.amdO) {
  define(function () {
    return {
      DiceManager: DiceManager,
      DiceD4: DiceD4,
      DiceD6: DiceD6,
      DiceD8: DiceD8,
      DiceD10: DiceD10,
      DiceD12: DiceD12,
      DiceD20: DiceD20
    };
  });
} else if ( true && typeof module.exports !== 'undefined') {
  module.exports = {
    DiceManager: DiceManager,
    DiceD4: DiceD4,
    DiceD6: DiceD6,
    DiceD8: DiceD8,
    DiceD10: DiceD10,
    DiceD12: DiceD12,
    DiceD20: DiceD20
  };
} else {
  window.Dice = {
    DiceManager: DiceManager,
    DiceD4: DiceD4,
    DiceD6: DiceD6,
    DiceD8: DiceD8,
    DiceD10: DiceD10,
    DiceD12: DiceD12,
    DiceD20: DiceD20
  };
}

/***/ }),

/***/ "./packages/sic-bo/resources/audio/lose.wav":
/*!**************************************************!*\
  !*** ./packages/sic-bo/resources/audio/lose.wav ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/sic-bo/lose.wav");

/***/ }),

/***/ "./packages/sic-bo/resources/audio/roll1.wav":
/*!***************************************************!*\
  !*** ./packages/sic-bo/resources/audio/roll1.wav ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/sic-bo/roll1.wav");

/***/ }),

/***/ "./packages/sic-bo/resources/audio/roll2.wav":
/*!***************************************************!*\
  !*** ./packages/sic-bo/resources/audio/roll2.wav ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/sic-bo/roll2.wav");

/***/ }),

/***/ "./packages/sic-bo/resources/audio/win.wav":
/*!*************************************************!*\
  !*** ./packages/sic-bo/resources/audio/win.wav ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/sic-bo/win.wav");

/***/ }),

/***/ "./resources/audio/common/click.wav":
/*!******************************************!*\
  !*** ./resources/audio/common/click.wav ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/common/click.wav");

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=style&index=0&id=6d42fee9&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=style&index=0&id=6d42fee9&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div[data-v-6d42fee9] {\n  display: inline-block;\n  position: relative;\n}\ndiv svg[data-v-6d42fee9] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/pages/game.vue?vue&type=style&index=0&id=f597770a&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/pages/game.vue?vue&type=style&index=0&id=f597770a&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dice-animation[data-v-f597770a] {\n  width: 100%;\n  height: 100%;\n  z-index: 3;\n  position: relative;\n}\n.dice-animation .message[data-v-f597770a] {\n  position: relative;\n  z-index: 4;\n}\n@media (max-width: 1024px) {\n.dice-animation .message[data-v-f597770a] {\n    position: absolute !important;\n    left: 4px;\n    top: 50%;\n    transform: translateY(-50%);\n}\n}\n.dice-animation .message[data-v-f597770a]:after {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--v-primary-base);\n  opacity: 0.2;\n  border-radius: inherit;\n}\n.dice-animation[data-v-f597770a] canvas {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 3;\n  width: 100% !important;\n  height: 100% !important;\n}\n.game-board button[data-v-f597770a] {\n  outline: none;\n  position: relative;\n}\n.game-board button[data-v-f597770a]:after {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--v-primary-base);\n  opacity: 0;\n  border-radius: inherit;\n  transition: 0.1s;\n}\n.game-board button[data-v-f597770a]:hover:after {\n  opacity: 0.2;\n}\n.game-board button[data-v-f597770a]:active:after {\n  opacity: 0.3;\n}\n.game-board button[data-v-f597770a]:before {\n  content: attr(data-betsize);\n  position: absolute;\n  height: 20px;\n  min-width: 20px;\n  border-radius: 10px;\n  font-size: 12px;\n  background-color: #FFFFFF;\n  padding: 4px 6px;\n  color: black;\n  text-align: center;\n  bottom: 1px;\n  transform: scale(0);\n  transform-origin: center;\n  transition: 0.3s;\n  letter-spacing: 0;\n  line-height: 1;\n  opacity: 0;\n  top: 2px;\n  right: 2px;\n  z-index: 10;\n}\n@media screen and (max-width: 992px) {\n.game-board button[data-v-f597770a]:before {\n    font-size: 8px;\n    height: 16px;\n    min-width: 16px;\n}\n}\n.game-board button[data-betsize][data-v-f597770a]:before {\n  transform: scale(1);\n  opacity: 1;\n}\n.game-board button.btn-big[data-v-f597770a]:before, .game-board button.btn-mid[data-v-f597770a]:before {\n  top: 50%;\n  right: 20px;\n  transform: scale(0) translate(0, -50%);\n}\n.game-board button.btn-big[data-betsize][data-v-f597770a]:before, .game-board button.btn-mid[data-betsize][data-v-f597770a]:before {\n  transform: scale(1) translate(0, -50%);\n}\n.game-board button.btn-single[data-v-f597770a]:before {\n  top: 5px;\n  left: calc(50% + 30px);\n  right: auto;\n}\n.game-board button.win[data-v-f597770a] {\n  color: var(--v-success-base);\n}\n.game-board .btn-big[data-v-f597770a] {\n  background: var(--v-primary-darken3);\n}\n.game-board .btn-big + div[data-v-f597770a] {\n  background: var(--v-primary-darken2);\n}\n.game-board .btn-total[data-v-f597770a] {\n  background: var(--v-primary-darken3);\n  border-right: 1px solid var(--v-primary-darken2);\n}\n.game-board .btn-total[data-v-f597770a]:last-child {\n  border-right: none;\n}\n.game-board .btn-single[data-v-f597770a] {\n  background: var(--v-primary-darken3);\n  border-right: 1px solid var(--v-primary-darken2);\n}\n.game-board .btn-single[data-v-f597770a]:last-child {\n  border-right: none;\n}\n.game-board .btn-combination[data-v-f597770a] {\n  border-right: 1px solid var(--v-primary-darken1);\n}\n.game-board .btn-combination[data-v-f597770a]:last-child {\n  border-right: none;\n}\n.game-board .btn-double[data-v-f597770a], .game-board .btn-triple[data-v-f597770a] {\n  border-right: 1px solid var(--v-primary-darken1);\n}\n.game-board .btn-double[data-v-f597770a]:last-child, .game-board .btn-triple[data-v-f597770a]:last-child {\n  border-right: none;\n}\n.game-board .board-row-3[data-v-f597770a] {\n  background: var(--v-primary-darken2);\n}\n.game-board .board-row-4[data-v-f597770a] {\n  background: var(--v-primary-darken2);\n}\n.game-board .board-row-1[data-v-f597770a] {\n  max-height: 300px;\n}\n.game-board .board-row-1 > div:first-child > button[data-v-f597770a]:first-child, .game-board .board-row-1 > div:last-child > button[data-v-f597770a]:first-child {\n  border: 3px solid var(--v-primary-darken1);\n  border-radius: 10px 10px 0 0;\n  border-bottom: none;\n}\n.game-board .board-row-1 > div:first-child > div[data-v-f597770a]:nth-child(2), .game-board .board-row-1 > div:last-child > div[data-v-f597770a]:nth-child(2) {\n  border: 3px solid var(--v-primary-darken1);\n  border-top-width: 2px;\n  border-bottom: none;\n}\n.game-board .board-row-1 > div:first-child > div:nth-child(2) > div[data-v-f597770a]:first-child, .game-board .board-row-1 > div:last-child > div:nth-child(2) > div[data-v-f597770a]:first-child {\n  border-right: 2px solid var(--v-primary-darken1);\n}\n.game-board .board-row-1 > div:nth-child(2) > div[data-v-f597770a]:first-child {\n  border-bottom: 3px solid var(--v-primary-darken1);\n}\n.game-board .board-row-1 > div:nth-child(2) > div[data-v-f597770a]:last-child {\n  background: var(--v-primary-darken2);\n  margin: 0 -3px;\n  position: relative;\n}\n.game-board .board-row-1 > div:nth-child(2) > div[data-v-f597770a]:last-child:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  left: 0.5px;\n  right: 0.5px;\n  top: 0;\n  bottom: 0;\n  border-left: 2px solid var(--v-primary-darken1);\n  border-right: 2px solid var(--v-primary-darken1);\n}\n.game-board .board-row-1 > div:nth-child(2) > div:last-child .btn-mid[data-v-f597770a] {\n  position: relative;\n  z-index: 4;\n}\n.game-board .board-row-2[data-v-f597770a] {\n  max-height: 300px;\n  border: 3px solid var(--v-primary-darken1);\n  border-top-width: 2px;\n  border-bottom: none;\n}\n.game-board .board-row-3[data-v-f597770a] {\n  border: 3px solid var(--v-primary-darken1);\n  border-top-width: 2px;\n  border-bottom: none;\n}\n.game-board .board-row-4[data-v-f597770a] {\n  border: 3px solid var(--v-primary-darken1);\n  border-top-width: 2px;\n  border-radius: 0 0 10px 10px;\n}\n.game-board .btn-combination-caption[data-v-f597770a] {\n  display: none !important;\n  border-right: 1px solid var(--v-primary-darken1);\n}\n.theme-light .game-board button[data-v-f597770a]:after {\n  background: var(--v-primary-base);\n}\n.theme-light .game-board button[data-v-f597770a]:before {\n  background-color: #FFFFFF;\n  color: black;\n}\n.theme-light .game-board button.win[data-v-f597770a] {\n  color: var(--v-success-base);\n}\n.theme-light .game-board .btn-big[data-v-f597770a] {\n  background: var(--v-primary-lighten4);\n}\n.theme-light .game-board .btn-big + div[data-v-f597770a] {\n  background: var(--v-primary-lighten5);\n}\n.theme-light .game-board .btn-total[data-v-f597770a] {\n  background: var(--v-primary-lighten4);\n  border-right: 1px solid var(--v-primary-lighten3);\n}\n.theme-light .game-board .btn-total[data-v-f597770a]:last-child {\n  border-right: none;\n}\n.theme-light .game-board .btn-single[data-v-f597770a] {\n  background: var(--v-primary-lighten4);\n  border-right: 1px solid var(--v-primary-lighten3);\n}\n@media (min-width: 1024px) {\n.theme-light .game-board .btn-single[data-v-f597770a] {\n    border-bottom: 1px solid var(--v-primary-lighten3);\n}\n}\n.theme-light .game-board .btn-single[data-v-f597770a]:last-child {\n  border-right: none;\n}\n.theme-light .game-board .btn-combination[data-v-f597770a] {\n  border-right: 1px solid var(--v-primary-lighten4);\n}\n.theme-light .game-board .btn-combination[data-v-f597770a]:last-child {\n  border-right: none;\n}\n.theme-light .game-board .btn-double[data-v-f597770a], .theme-light .game-board .btn-triple[data-v-f597770a] {\n  border-right: 1px solid var(--v-primary-lighten3);\n}\n.theme-light .game-board .btn-double[data-v-f597770a]:last-child, .theme-light .game-board .btn-triple[data-v-f597770a]:last-child {\n  border-right: none;\n}\n.theme-light .game-board .board-row-3[data-v-f597770a] {\n  background: var(--v-primary-lighten5);\n}\n.theme-light .game-board .board-row-4[data-v-f597770a] {\n  background: var(--v-primary-lighten4);\n}\n.theme-light .game-board .board-row-4 > div[data-v-f597770a]:last-child {\n  background: var(--v-primary-lighten5);\n}\n.theme-light .game-board .board-row-1 > div:first-child > button[data-v-f597770a]:first-child, .theme-light .game-board .board-row-1 > div:last-child > button[data-v-f597770a]:first-child {\n  border: 3px solid var(--v-primary-lighten2);\n}\n.theme-light .game-board .board-row-1 > div:first-child > div[data-v-f597770a]:nth-child(2), .theme-light .game-board .board-row-1 > div:last-child > div[data-v-f597770a]:nth-child(2) {\n  border: 3px solid var(--v-primary-lighten2);\n}\n.theme-light .game-board .board-row-1 > div:first-child > div:nth-child(2) > div[data-v-f597770a]:first-child, .theme-light .game-board .board-row-1 > div:last-child > div:nth-child(2) > div[data-v-f597770a]:first-child {\n  border-right: 2px solid var(--v-primary-lighten4);\n}\n.theme-light .game-board .board-row-1 > div:nth-child(2) > div[data-v-f597770a]:first-child {\n  border-bottom: 3px solid var(--v-primary-lighten2);\n}\n.theme-light .game-board .board-row-1 > div:nth-child(2) > div[data-v-f597770a]:last-child {\n  background: var(--v-primary-lighten5);\n}\n.theme-light .game-board .board-row-1 > div:nth-child(2) > div[data-v-f597770a]:last-child:after {\n  border-left: 2px solid var(--v-primary-lighten4);\n  border-right: 2px solid var(--v-primary-lighten4);\n}\n.theme-light .game-board .board-row-2[data-v-f597770a] {\n  border: 3px solid var(--v-primary-lighten2);\n  background: var(--v-primary-lighten4);\n}\n.theme-light .game-board .board-row-3[data-v-f597770a] {\n  border: 3px solid var(--v-primary-lighten2);\n}\n.theme-light .game-board .board-row-4[data-v-f597770a] {\n  border: 3px solid var(--v-primary-lighten2);\n}\n.theme-light .game-board .btn-combination-caption[data-v-f597770a] {\n  border-right: 1px solid var(--v-primary-darken1);\n}\n@media (max-width: 1200px) {\n.game-board[data-v-f597770a] {\n    padding-left: 4px;\n    padding-right: 4px;\n    width: 100%;\n}\n.game-board .text-h4[data-v-f597770a] {\n    font-size: 18px !important;\n    line-height: 24px !important;\n}\n.game-board .caption[data-v-f597770a] {\n    font-size: 0.5rem !important;\n    line-height: 0.65rem !important;\n}\n.game-board .btn-triple > div[data-v-f597770a] {\n    width: 12px !important;\n    height: 12px !important;\n}\n.game-board .btn-double > div[data-v-f597770a] {\n    width: 18px !important;\n    height: 18px !important;\n}\n.game-board .btn-mid > div > div > div[data-v-f597770a] {\n    width: 12px !important;\n    height: 12px !important;\n}\n.game-board .btn-big .pt-2[data-v-f597770a] {\n    padding-top: 4px !important;\n}\n.game-board .btn-total[data-v-f597770a] {\n    padding: 4px !important;\n}\n.game-board .btn-total .text-h4[data-v-f597770a] {\n    line-height: 26px;\n}\n.game-board .btn-total .pt-2[data-v-f597770a] {\n    padding-top: 4px !important;\n}\n.game-board .btn-triple[data-v-f597770a],\n.game-board .btn-double[data-v-f597770a] {\n    margin-right: 8px;\n}\n.game-board .btn-mid > div > div[data-v-f597770a] {\n    flex-wrap: wrap;\n    justify-content: center;\n}\n.game-board .btn-mid > div > div > div[data-v-f597770a]:first-child {\n    margin-left: 8px !important;\n    margin-right: 8px !important;\n    margin-bottom: 4px;\n}\n.game-board .btn-combination-caption[data-v-f597770a] {\n    display: flex !important;\n}\n.game-board .btn-combination span[data-v-f597770a] {\n    display: none;\n}\n.game-board .btn-combination > div[data-v-f597770a] {\n    flex-direction: column;\n}\n.game-board .btn-combination > div > div[data-v-f597770a] {\n    width: 16px !important;\n    height: 16px !important;\n}\n.game-board .btn-combination > div > div[data-v-f597770a]:first-child {\n    margin-bottom: 4px;\n}\n.game-board .btn-single > div[data-v-f597770a] {\n    width: 16px !important;\n    height: 16px !important;\n}\n.game-board .board-row-4[data-v-f597770a] {\n    flex-direction: row-reverse !important;\n}\n.game-board .board-row-4 > div[data-v-f597770a]:first-child {\n    flex-grow: 1;\n}\n.game-board .board-row-4 > div[data-v-f597770a]:last-child {\n    padding: 4px;\n    flex-direction: column;\n    align-content: flex-start !important;\n    text-align: left !important;\n}\n.game-board .board-row-4 > div:last-child .pa-2[data-v-f597770a] {\n    padding: 1px 0 !important;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=style&index=0&id=6d42fee9&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=style&index=0&id=6d42fee9&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dice_svg_vue_vue_type_style_index_0_id_6d42fee9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dice-svg.vue?vue&type=style&index=0&id=6d42fee9&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=style&index=0&id=6d42fee9&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dice_svg_vue_vue_type_style_index_0_id_6d42fee9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dice_svg_vue_vue_type_style_index_0_id_6d42fee9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/pages/game.vue?vue&type=style&index=0&id=f597770a&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/pages/game.vue?vue&type=style&index=0&id=f597770a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_f597770a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=style&index=0&id=f597770a&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/pages/game.vue?vue&type=style&index=0&id=f597770a&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_f597770a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_f597770a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./packages/sic-bo/resources/js/pages/game.vue":
/*!*****************************************************!*\
  !*** ./packages/sic-bo/resources/js/pages/game.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_vue_vue_type_template_id_f597770a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.vue?vue&type=template&id=f597770a&scoped=true& */ "./packages/sic-bo/resources/js/pages/game.vue?vue&type=template&id=f597770a&scoped=true&");
/* harmony import */ var _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.vue?vue&type=script&lang=js& */ "./packages/sic-bo/resources/js/pages/game.vue?vue&type=script&lang=js&");
/* harmony import */ var _game_vue_vue_type_style_index_0_id_f597770a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.vue?vue&type=style&index=0&id=f597770a&lang=scss&scoped=true& */ "./packages/sic-bo/resources/js/pages/game.vue?vue&type=style&index=0&id=f597770a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _game_vue_vue_type_template_id_f597770a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _game_vue_vue_type_template_id_f597770a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f597770a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/sic-bo/resources/js/pages/game.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dice_svg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dice-svg.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dice_svg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/sic-bo/resources/js/pages/game.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./packages/sic-bo/resources/js/pages/game.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/pages/game.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Games/PlayControls.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Games/PlayControls.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Game.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixins/Game.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=style&index=0&id=6d42fee9&scoped=true&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=style&index=0&id=6d42fee9&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dice_svg_vue_vue_type_style_index_0_id_6d42fee9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dice-svg.vue?vue&type=style&index=0&id=6d42fee9&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=style&index=0&id=6d42fee9&scoped=true&lang=scss&");


/***/ }),

/***/ "./packages/sic-bo/resources/js/pages/game.vue?vue&type=style&index=0&id=f597770a&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./packages/sic-bo/resources/js/pages/game.vue?vue&type=style&index=0&id=f597770a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_f597770a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=style&index=0&id=f597770a&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/pages/game.vue?vue&type=style&index=0&id=f597770a&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_style_index_0_id_921fb73a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=style&index=0&id=921fb73a&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=template&id=6d42fee9&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=template&id=6d42fee9&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    style: {
      width: "".concat(_vm.$attrs.size ? _vm.$attrs.size : 24, "px"),
      height: "".concat(_vm.$attrs.size ? _vm.$attrs.size : 24, "px")
    }
  }, [_c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 23 23"
    }
  }, [_c("path", {
    attrs: {
      fill: "currentColor",
      d: "M19.6 0H3.4A3.4 3.4 0 000 3.4v16.2c0 2 1.5 3.4 3.4 3.4h16.2c1.9 0 3.4-1.5 3.4-3.4V3.4C23 1.6 21.5 0 19.6 0zM21 19.6c0 .8-.6 1.4-1.4 1.4H3.4c-.8 0-1.4-.6-1.4-1.4V3.4C2 2.7 2.6 2 3.4 2h16.2c.8 0 1.4.7 1.4 1.4z"
    }
  }), _vm._v(" "), _vm.$attrs.num == 1 ? _c("g", {
    attrs: {
      id: "p1"
    }
  }, [_c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "11.5",
      cy: "11.5",
      r: "2"
    }
  })]) : _vm._e(), _vm._v(" "), _vm.$attrs.num == 2 ? _c("g", {
    attrs: {
      id: "p2"
    }
  }, [_c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "17",
      cy: "6",
      r: "2"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "6",
      cy: "17",
      r: "2"
    }
  })]) : _vm._e(), _vm._v(" "), _vm.$attrs.num == 3 ? _c("g", {
    attrs: {
      id: "p3"
    }
  }, [_c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "17",
      cy: "6",
      r: "2"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "11.5",
      cy: "11.5",
      r: "2"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "6",
      cy: "17",
      r: "2"
    }
  })]) : _vm._e(), _vm._v(" "), _vm.$attrs.num == 4 ? _c("g", {
    attrs: {
      id: "p4"
    }
  }, [_c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "6",
      cy: "6",
      r: "2"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "17",
      cy: "6",
      r: "2"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "6",
      cy: "17",
      r: "2"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "17",
      cy: "17",
      r: "2"
    }
  })]) : _vm._e(), _vm._v(" "), _vm.$attrs.num == 5 ? _c("g", {
    attrs: {
      id: "p5"
    }
  }, [_c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "6",
      cy: "6",
      r: "2"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "17",
      cy: "6",
      r: "2"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "6",
      cy: "17",
      r: "2"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "17",
      cy: "17",
      r: "2"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "11.5",
      cy: "11.5",
      r: "2"
    }
  })]) : _vm._e(), _vm._v(" "), _vm.$attrs.num == 6 ? _c("g", {
    attrs: {
      id: "p6"
    }
  }, [_c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "6",
      cy: "6",
      r: "2"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "17",
      cy: "6",
      r: "2"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "6",
      cy: "17",
      r: "2"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "17",
      cy: "17",
      r: "2"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "6",
      cy: "11.5",
      r: "2"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      fill: "currentColor",
      cx: "17",
      cy: "11.5",
      r: "2"
    }
  })]) : _vm._e()])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/pages/game.vue?vue&type=template&id=f597770a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/pages/game.vue?vue&type=template&id=f597770a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/VAlert.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");



var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.landscape ? _c("div", {
    staticClass: "d-flex flex-column fill-height py-3 align-center"
  }, [_c("div", {
    staticClass: "align-stretch d-flex flex-column flex-grow-1 game-board justify-center"
  }, [_c("div", {
    staticClass: "board-row-1 d-flex flex-grow-1 align-stretch justify-stretch"
  }, [_c("div", {
    staticClass: "d-flex flex-column align-stretch justify-stretch"
  }, [_c("button", {
    staticClass: "align-center btn btn-big d-flex flex-column flex-grow-1 justify-center pa-2",
    "class": {
      betted: _vm.getBetSize("small"),
      win: _vm.showWin && 4 <= _vm.rollTotal && _vm.rollTotal <= 10
    },
    attrs: {
      "data-betsize": _vm.getBetSize("small"),
      disabled: _vm.playing
    },
    on: {
      click: function click($event) {
        return _vm.placeBet("small");
      }
    }
  }, [_c("span", {
    staticClass: "big text-h4"
  }, [_vm._v(_vm._s(_vm.$t("SMALL")))]), _vm._v(" "), _c("span", {
    staticClass: "accent--text caption pt-2 text-uppercase"
  }, [_vm._v("4-10")]), _vm._v(" "), _c("span", {
    staticClass: "accent--text caption pt-2 text-uppercase"
  }, [_vm._v("1 " + _vm._s(_vm.$t("wins")) + " " + _vm._s((_vm.paytable ? _vm.paytable.small : 1) - 1))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-stretch justify-stretch"
  }, [_c("div", {
    staticClass: "align-stretch d-flex flex-column justify-stretch pa-2"
  }, [_c("div", {
    staticClass: "accent--text caption pb-2 text-center text-uppercase"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Each double 1 wins")) + " " + _vm._s((_vm.paytable ? _vm.paytable["double"] : 1) - 1) + "\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-stretch flex-grow-1 align-stretch"
  }, [_c("button", {
    staticClass: "btn-double align-center justify-center btn d-flex flex-column flex-grow-1",
    "class": {
      betted: _vm.getBetSize("double", [1]),
      win: _vm.showWin && _vm.rollDuplicates[1] == 2
    },
    attrs: {
      "data-betsize": _vm.getBetSize("double", [1]),
      disabled: _vm.playing
    },
    on: {
      click: function click($event) {
        return _vm.placeBet("double", [1]);
      }
    }
  }, [_c("dice-svg", {
    staticClass: "mb-2",
    attrs: {
      num: "1"
    }
  }), _vm._v(" "), _c("dice-svg", {
    attrs: {
      num: "1"
    }
  })], 1), _vm._v(" "), _c("button", {
    staticClass: "btn-double align-center justify-center btn d-flex flex-column flex-grow-1",
    "class": {
      betted: _vm.getBetSize("double", [2]),
      win: _vm.showWin && _vm.rollDuplicates[2] == 2
    },
    attrs: {
      "data-betsize": _vm.getBetSize("double", [2]),
      disabled: _vm.playing
    },
    on: {
      click: function click($event) {
        return _vm.placeBet("double", [2]);
      }
    }
  }, [_c("dice-svg", {
    staticClass: "mb-2",
    attrs: {
      num: "2"
    }
  }), _vm._v(" "), _c("dice-svg", {
    attrs: {
      num: "2"
    }
  })], 1), _vm._v(" "), _c("button", {
    staticClass: "btn-double align-center justify-center btn d-flex flex-column flex-grow-1",
    "class": {
      betted: _vm.getBetSize("double", [3]),
      win: _vm.showWin && _vm.rollDuplicates[3] == 2
    },
    attrs: {
      "data-betsize": _vm.getBetSize("double", [3]),
      disabled: _vm.playing
    },
    on: {
      click: function click($event) {
        return _vm.placeBet("double", [3]);
      }
    }
  }, [_c("dice-svg", {
    staticClass: "mb-2",
    attrs: {
      num: "3"
    }
  }), _vm._v(" "), _c("dice-svg", {
    attrs: {
      num: "3"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "pa-2"
  }, [_c("div", {
    staticClass: "accent--text caption pb-2 text-center text-uppercase"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Each triple 1 wins")) + " " + _vm._s((_vm.paytable ? _vm.paytable.triple : 1) - 1) + "\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "align-center d-flex justify-stretch triple"
  }, [_c("button", {
    staticClass: "btn-triple btn d-flex flex-column flex-grow-1 align-center py-1",
    "class": {
      betted: _vm.getBetSize("triple", [1]),
      win: _vm.showWin && _vm.rollDuplicates[1] > 2
    },
    attrs: {
      "data-betsize": _vm.getBetSize("triple", [1]),
      disabled: _vm.playing
    },
    on: {
      click: function click($event) {
        return _vm.placeBet("triple", [1]);
      }
    }
  }, [_c("dice-svg", {
    staticClass: "mb-1",
    attrs: {
      num: "1"
    }
  }), _vm._v(" "), _c("dice-svg", {
    staticClass: "mb-1",
    attrs: {
      num: "1"
    }
  }), _vm._v(" "), _c("dice-svg", {
    attrs: {
      num: "1"
    }
  })], 1), _vm._v(" "), _c("button", {
    staticClass: "btn-triple btn d-flex flex-column flex-grow-1 align-center py-1",
    "class": {
      betted: _vm.getBetSize("triple", [2]),
      win: _vm.showWin && _vm.rollDuplicates[2] > 2
    },
    attrs: {
      "data-betsize": _vm.getBetSize("triple", [2]),
      disabled: _vm.playing
    },
    on: {
      click: function click($event) {
        return _vm.placeBet("triple", [2]);
      }
    }
  }, [_c("dice-svg", {
    staticClass: "mb-1",
    attrs: {
      num: "2"
    }
  }), _vm._v(" "), _c("dice-svg", {
    staticClass: "mb-1",
    attrs: {
      num: "2"
    }
  }), _vm._v(" "), _c("dice-svg", {
    attrs: {
      num: "2"
    }
  })], 1), _vm._v(" "), _c("button", {
    staticClass: "btn-triple btn d-flex flex-column flex-grow-1 align-center py-1",
    "class": {
      betted: _vm.getBetSize("triple", [3]),
      win: _vm.showWin && _vm.rollDuplicates[3] > 2
    },
    attrs: {
      "data-betsize": _vm.getBetSize("triple", [3]),
      disabled: _vm.playing
    },
    on: {
      click: function click($event) {
        return _vm.placeBet("triple", [3]);
      }
    }
  }, [_c("dice-svg", {
    staticClass: "mb-1",
    attrs: {
      num: "3"
    }
  }), _vm._v(" "), _c("dice-svg", {
    staticClass: "mb-1",
    attrs: {
      num: "3"
    }
  }), _vm._v(" "), _c("dice-svg", {
    attrs: {
      num: "3"
    }
  })], 1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "align-stretch d-flex flex-column flex-grow-1 justify-stretch middle-cell"
  }, [_c("div", {
    staticClass: "align-start animation d-flex flex-grow-1 justify-center"
  }, [_c("div", {
    ref: "ThreeJS",
    staticClass: "align-center d-flex dice-animation flex-column justify-start"
  }, [_vm.message ? _c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_0__["default"], {
    staticClass: "text-center message",
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      color: "primary"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.message) + "\n            ")]) : _vm._e()], 1)]), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn pa-2 btn-mid",
    "class": {
      betted: _vm.getBetSize("any_triple"),
      win: _vm.showWin && Object.values(_vm.rollDuplicates).reduce(function (acc, n) {
        return n > acc ? n : acc;
      }, 0) === 3
    },
    attrs: {
      "data-betsize": _vm.getBetSize("any_triple"),
      disabled: _vm.playing
    },
    on: {
      click: function click($event) {
        return _vm.placeBet("any_triple");
      }
    }
  }, [_c("div", {
    staticClass: "text-uppercase accent--text caption pb-2"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("1 wins")) + " " + _vm._s((_vm.paytable ? _vm.paytable["double"] : 1) - 1) + " " + _vm._s(_vm.$t("any triple")) + "\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-center text-center"
  }, _vm._l(6, function (i) {
    return _c("div", {
      key: i,
      staticClass: "px-2 d-flex"
    }, [_c("dice-svg", {
      staticClass: "mr-1",
      attrs: {
        num: i
      }
    }), _vm._v(" "), _c("dice-svg", {
      staticClass: "mr-1",
      attrs: {
        num: i
      }
    }), _vm._v(" "), _c("dice-svg", {
      attrs: {
        num: i
      }
    })], 1);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-column align-stretch justify-stretch"
  }, [_c("button", {
    staticClass: "align-center btn btn-big d-flex flex-column flex-grow-1 justify-center pa-2",
    "class": {
      betted: _vm.getBetSize("big"),
      win: _vm.showWin && 11 <= _vm.rollTotal && _vm.rollTotal <= 17
    },
    attrs: {
      "data-betsize": _vm.getBetSize("big"),
      disabled: _vm.playing
    },
    on: {
      click: function click($event) {
        return _vm.placeBet("big");
      }
    }
  }, [_c("span", {
    staticClass: "big text-h4"
  }, [_vm._v(_vm._s(_vm.$t("BIG")))]), _vm._v(" "), _c("span", {
    staticClass: "accent--text caption pt-2 text-uppercase"
  }, [_vm._v("11-17")]), _vm._v(" "), _c("span", {
    staticClass: "accent--text caption pt-2 text-uppercase"
  }, [_vm._v("1 " + _vm._s(_vm.$t("wins")) + " " + _vm._s((_vm.paytable ? _vm.paytable.big : 1) - 1))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-stretch justify-stretch"
  }, [_c("div", {
    staticClass: "pa-2"
  }, [_c("div", {
    staticClass: "accent--text caption pb-2 text-center text-uppercase"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Each triple 1 wins")) + " " + _vm._s((_vm.paytable ? _vm.paytable.triple : 1) - 1) + "\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "align-center d-flex justify-stretch triple"
  }, [_c("button", {
    staticClass: "btn-triple btn d-flex flex-column flex-grow-1 align-center py-1",
    "class": {
      betted: _vm.getBetSize("triple", [4]),
      win: _vm.showWin && _vm.rollDuplicates[4] > 2
    },
    attrs: {
      "data-betsize": _vm.getBetSize("triple", [4]),
      disabled: _vm.playing
    },
    on: {
      click: function click($event) {
        return _vm.placeBet("triple", [4]);
      }
    }
  }, [_c("dice-svg", {
    staticClass: "mb-1",
    attrs: {
      num: "4"
    }
  }), _vm._v(" "), _c("dice-svg", {
    staticClass: "mb-1",
    attrs: {
      num: "4"
    }
  }), _vm._v(" "), _c("dice-svg", {
    attrs: {
      num: "4"
    }
  })], 1), _vm._v(" "), _c("button", {
    staticClass: "btn-triple btn d-flex flex-column flex-grow-1 align-center py-1",
    "class": {
      betted: _vm.getBetSize("triple", [5]),
      win: _vm.showWin && _vm.rollDuplicates[5] > 2
    },
    attrs: {
      "data-betsize": _vm.getBetSize("triple", [5]),
      disabled: _vm.playing
    },
    on: {
      click: function click($event) {
        return _vm.placeBet("triple", [5]);
      }
    }
  }, [_c("dice-svg", {
    staticClass: "mb-1",
    attrs: {
      num: "5"
    }
  }), _vm._v(" "), _c("dice-svg", {
    staticClass: "mb-1",
    attrs: {
      num: "5"
    }
  }), _vm._v(" "), _c("dice-svg", {
    attrs: {
      num: "5"
    }
  })], 1), _vm._v(" "), _c("button", {
    staticClass: "btn-triple btn d-flex flex-column flex-grow-1 align-center py-1",
    "class": {
      betted: _vm.getBetSize("triple", [6]),
      win: _vm.showWin && _vm.rollDuplicates[6] > 2
    },
    attrs: {
      "data-betsize": _vm.getBetSize("triple", [6]),
      disabled: _vm.playing
    },
    on: {
      click: function click($event) {
        return _vm.placeBet("triple", [6]);
      }
    }
  }, [_c("dice-svg", {
    staticClass: "mb-1",
    attrs: {
      num: "6"
    }
  }), _vm._v(" "), _c("dice-svg", {
    staticClass: "mb-1",
    attrs: {
      num: "6"
    }
  }), _vm._v(" "), _c("dice-svg", {
    attrs: {
      num: "6"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "align-stretch d-flex flex-column justify-stretch pa-2"
  }, [_c("div", {
    staticClass: "accent--text caption pb-2 text-center text-uppercase"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Each double 1 wins")) + " " + _vm._s((_vm.paytable ? _vm.paytable["double"] : 1) - 1) + "\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-stretch flex-grow-1 align-stretch"
  }, [_c("button", {
    staticClass: "btn-double align-center justify-center btn d-flex flex-column flex-grow-1",
    "class": {
      betted: _vm.getBetSize("double", [4]),
      win: _vm.showWin && _vm.rollDuplicates[4] == 2
    },
    attrs: {
      "data-betsize": _vm.getBetSize("double", [4]),
      disabled: _vm.playing
    },
    on: {
      click: function click($event) {
        return _vm.placeBet("double", [4]);
      }
    }
  }, [_c("dice-svg", {
    staticClass: "mb-2",
    attrs: {
      num: "4"
    }
  }), _vm._v(" "), _c("dice-svg", {
    attrs: {
      num: "4"
    }
  })], 1), _vm._v(" "), _c("button", {
    staticClass: "btn-double align-center justify-center btn d-flex flex-column flex-grow-1",
    "class": {
      betted: _vm.getBetSize("double", [5]),
      win: _vm.showWin && _vm.rollDuplicates[5] == 2
    },
    attrs: {
      "data-betsize": _vm.getBetSize("double", [5]),
      disabled: _vm.playing
    },
    on: {
      click: function click($event) {
        return _vm.placeBet("double", [5]);
      }
    }
  }, [_c("dice-svg", {
    staticClass: "mb-2",
    attrs: {
      num: "5"
    }
  }), _vm._v(" "), _c("dice-svg", {
    attrs: {
      num: "5"
    }
  })], 1), _vm._v(" "), _c("button", {
    staticClass: "btn-double align-center justify-center btn d-flex flex-column flex-grow-1",
    "class": {
      betted: _vm.getBetSize("double", [6]),
      win: _vm.showWin && _vm.rollDuplicates[6] == 2
    },
    attrs: {
      "data-betsize": _vm.getBetSize("double", [6]),
      disabled: _vm.playing
    },
    on: {
      click: function click($event) {
        return _vm.placeBet("double", [6]);
      }
    }
  }, [_c("dice-svg", {
    staticClass: "mb-2",
    attrs: {
      num: "6"
    }
  }), _vm._v(" "), _c("dice-svg", {
    attrs: {
      num: "6"
    }
  })], 1)])])])])]), _vm._v(" "), _c("div", {
    staticClass: "board-row-2 d-flex justify-stretch"
  }, _vm._l(function () {
    var r = [];
    for (_vm.i = 4; _vm.i <= 17; _vm.i++) r.push(_vm.i);
    return r;
  }(), function (n, i) {
    return _c("button", {
      key: i,
      staticClass: "align-center btn btn-total d-flex flex-column pa-2 flex-grow-1",
      "class": {
        betted: _vm.getBetSize("total", [n]),
        win: _vm.showWin && _vm.rollTotal == n
      },
      attrs: {
        "data-betsize": _vm.getBetSize("total", [n]),
        disabled: _vm.playing
      },
      on: {
        click: function click($event) {
          return _vm.placeBet("total", [n]);
        }
      }
    }, [_c("span", {
      staticClass: "text-h4 total-number"
    }, [_vm._v(_vm._s(n))]), _vm._v(" "), _c("span", {
      staticClass: "accent--text caption pt-2 text-uppercase"
    }, [_vm._v("\n          1 " + _vm._s(_vm.$t("wins")) + " " + _vm._s(_vm.paytable && _vm.paytable.total ? _vm.paytable.total[Math.abs(i - (i > 6 ? 7 : 6))] - 1 : 1) + "\n        ")])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "board-row-3 d-flex justify-stretch"
  }, [_c("div", {
    staticClass: "btn-combination-caption accent--text caption pa-1 d-flex flex-column align-center justify-center text-uppercase text-center"
  }, [_vm._v("\n        1"), _c("br"), _vm._v("\n        " + _vm._s(_vm.$t("wins"))), _c("br"), _vm._v("\n        " + _vm._s((_vm.paytable ? _vm.paytable.combination : 1) - 1) + "\n      ")]), _vm._v(" "), _vm._l(_vm.combo, function (c, i) {
    return _c("button", {
      key: i,
      staticClass: "btn-combination btn d-flex flex-column align-center flex-grow-1 pa-2",
      "class": {
        betted: _vm.getBetSize("combination", c),
        win: _vm.showWin && _vm.rollCombo(c)
      },
      attrs: {
        "data-betsize": _vm.getBetSize("combination", c),
        disabled: _vm.playing
      },
      on: {
        click: function click($event) {
          return _vm.placeBet("combination", c);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex justify-center pb-1 pl-1"
    }, _vm._l(c, function (n, k) {
      return _c("dice-svg", {
        key: k,
        staticClass: "mr-1",
        attrs: {
          num: n
        }
      });
    }), 1), _vm._v(" "), _c("span", {
      staticClass: "accent--text caption pt-1 text-uppercase"
    }, [_vm._v("1 " + _vm._s(_vm.$t("wins")) + " " + _vm._s((_vm.paytable ? _vm.paytable.combination : 1) - 1))])]);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "board-row-4 d-flex justify-stretch flex-column align-stretch"
  }, [_c("div", {
    staticClass: "d-flex justify-stretch"
  }, _vm._l(6, function (n, i) {
    return _c("button", {
      key: i,
      staticClass: "btn btn-single d-flex flex-column align-center justify-center flex-grow-1 pa-2",
      "class": {
        betted: _vm.getBetSize("single", [n]),
        win: _vm.showWin && _vm.roll.indexOf(n) != -1
      },
      attrs: {
        "data-betsize": _vm.getBetSize("single", [n]),
        disabled: _vm.playing
      },
      on: {
        click: function click($event) {
          return _vm.placeBet("single", [n]);
        }
      }
    }, [_c("dice-svg", {
      attrs: {
        num: n
      }
    })], 1);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-stretch accent--text caption text-uppercase text-center"
  }, [_c("div", {
    staticClass: "flex-grow-1 pa-2"
  }, [_vm._v("\n          " + _vm._s((_vm.paytable.single ? _vm.paytable.single[0] : 1) - 1) + " " + _vm._s(_vm.$t(":1 on one dice")) + "\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "flex-grow-1 pa-2"
  }, [_vm._v("\n          " + _vm._s((_vm.paytable.single ? _vm.paytable.single[1] : 1) - 1) + " " + _vm._s(_vm.$t(":1 on two dice")) + "\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "flex-grow-1 pa-2"
  }, [_vm._v("\n          " + _vm._s((_vm.paytable.single ? _vm.paytable.single[2] : 1) - 1) + " " + _vm._s(_vm.$t(":1 on three dice")) + "\n        ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex mt-5"
  }, [_c("play-controls", {
    ref: "controls",
    attrs: {
      loading: _vm.loading,
      disabled: !_vm.bets.length,
      playing: _vm.playing
    },
    on: {
      play: _vm.play,
      "bet-change": function betChange(b) {
        return _vm.bet = b;
      }
    },
    scopedSlots: _vm._u([{
      key: "before-bet-input",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
          staticClass: "mr-2",
          attrs: {
            outlined: "",
            color: "primary",
            disabled: _vm.playing || !_vm.bets.length
          },
          on: {
            click: function click($event) {
              _vm.bets = [];
            }
          }
        }, [_vm._v("\n          " + _vm._s(_vm.$t("Reset")) + "\n        ")]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
          staticClass: "mr-2",
          attrs: {
            outlined: "",
            color: "primary",
            disabled: _vm.playing || !_vm.bets_old.length
          },
          on: {
            click: _vm.rebet
          }
        }, [_vm._v("\n          " + _vm._s(_vm.$t("Rebet")) + "\n        ")])];
      },
      proxy: true
    }], null, false, 606482650)
  })], 1)]) : _c("div", {
    staticClass: "d-flex fill-height align-center justify-center"
  }, [_c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_0__["default"], {
    staticClass: "text-center",
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      color: "primary"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.$t("Please use landscape (horizontal) orientation.")) + "\n  ")])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=template&id=921fb73a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=template&id=921fb73a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=template&id=6d42fee9&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=template&id=6d42fee9&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dice_svg_vue_vue_type_template_id_6d42fee9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dice_svg_vue_vue_type_template_id_6d42fee9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dice_svg_vue_vue_type_template_id_6d42fee9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dice-svg.vue?vue&type=template&id=6d42fee9&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/components/dice-svg.vue?vue&type=template&id=6d42fee9&scoped=true&");


/***/ }),

/***/ "./packages/sic-bo/resources/js/pages/game.vue?vue&type=template&id=f597770a&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./packages/sic-bo/resources/js/pages/game.vue?vue&type=template&id=f597770a&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_f597770a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_f597770a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_f597770a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=template&id=f597770a&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/sic-bo/resources/js/pages/game.vue?vue&type=template&id=f597770a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Games/PlayControls.vue?vue&type=template&id=921fb73a&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Games/PlayControls.vue?vue&type=template&id=921fb73a&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_template_id_921fb73a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_template_id_921fb73a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayControls_vue_vue_type_template_id_921fb73a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PlayControls.vue?vue&type=template&id=921fb73a&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Games/PlayControls.vue?vue&type=template&id=921fb73a&scoped=true&");


/***/ })

}]);