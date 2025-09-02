"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/multiplayer-roulette-resources-js-pages-game"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _mixins_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/mixins/Game */ "./resources/js/mixins/Game.vue");
/* harmony import */ var _mixins_Sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/mixins/Sound */ "./resources/js/mixins/Sound.vue");
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/plugins/utils */ "./resources/js/plugins/utils.js");
/* harmony import */ var _audio_common_click_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/../audio/common/click.wav */ "./resources/audio/common/click.wav");
/* harmony import */ var packages_multiplayer_roulette_resources_audio_win_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! packages/multiplayer-roulette/resources/audio/win.wav */ "./packages/multiplayer-roulette/resources/audio/win.wav");
/* harmony import */ var packages_multiplayer_roulette_resources_audio_lose_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! packages/multiplayer-roulette/resources/audio/lose.wav */ "./packages/multiplayer-roulette/resources/audio/lose.wav");
/* harmony import */ var packages_multiplayer_roulette_resources_audio_bet_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! packages/multiplayer-roulette/resources/audio/bet.wav */ "./packages/multiplayer-roulette/resources/audio/bet.wav");
/* harmony import */ var packages_multiplayer_roulette_resources_audio_spin_wav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! packages/multiplayer-roulette/resources/audio/spin.wav */ "./packages/multiplayer-roulette/resources/audio/spin.wav");
/* harmony import */ var packages_multiplayer_roulette_resources_audio_start_wav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! packages/multiplayer-roulette/resources/audio/start.wav */ "./packages/multiplayer-roulette/resources/audio/start.wav");
/* harmony import */ var _components_MultiplayerGameEvent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/components/MultiplayerGameEvent */ "./resources/js/components/MultiplayerGameEvent.vue");
/* harmony import */ var _components_AnimatedNumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/components/AnimatedNumber */ "./resources/js/components/AnimatedNumber.vue");
/* harmony import */ var _components_BlockPreloader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/components/BlockPreloader */ "./resources/js/components/BlockPreloader.vue");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _components_UserAvatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/components/UserAvatar */ "./resources/js/components/UserAvatar.vue");
/* harmony import */ var _components_UserProfileModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/components/UserProfileModal */ "./resources/js/components/UserProfileModal.vue");
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
  name: 'MultiplayerRoulette',
  components: {
    MultiplayerGameEvent: _components_MultiplayerGameEvent__WEBPACK_IMPORTED_MODULE_11__["default"],
    AnimatedNumber: _components_AnimatedNumber__WEBPACK_IMPORTED_MODULE_12__["default"],
    BlockPreloader: _components_BlockPreloader__WEBPACK_IMPORTED_MODULE_13__["default"],
    UserProfileModal: _components_UserProfileModal__WEBPACK_IMPORTED_MODULE_16__["default"],
    UserAvatar: _components_UserAvatar__WEBPACK_IMPORTED_MODULE_15__["default"]
  },
  mixins: [_mixins_Form__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_Game__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_Sound__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data: function data() {
    return {
      balance: 0,
      ready: false,
      loading: false,
      isCompleteInProgress: false,
      bet: 1,
      gameable: {},
      multiplayerGame: {},
      mybet: {},
      player: {},
      // current player
      players: {},
      // all players including current
      bets_win: {},
      gameEndTime: null,
      progress: 100,
      timeLeft: 60,
      t: 0,
      rouletteNums: [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26],
      winColor: null,
      winLast: [],
      message: null,
      timeDiff: 0,
      animation: {
        mode: null,
        wheel_angle: 0,
        wheel_speed: 0,
        wheel_speed_max: 0.002,
        // 829 / 2 * Math.PI * Math.PI * 0.002 / (Math.PI * 2)
        wheel_speed_a: 0.00001,
        line_pos: 0,
        line_speed: 0,
        line_speed_max: 0.002 / (Math.PI * 2) * 829 / 2 * Math.PI * Math.PI,
        // 2
        line_speed_a: 0.00001 / (Math.PI * 2) * 829 / 2 * Math.PI * Math.PI,
        // 0.005,

        stop_min: 2,
        requestAnimationFrame: function requestAnimationFrame(e) {
          return setTimeout(e, 1);
        },
        t: 0,
        type: 0
      }
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_17__.mapState)('auth', ['account', 'user'])), (0,vuex__WEBPACK_IMPORTED_MODULE_17__.mapState)('online', ['users'])), {}, {
    bets: function bets() {
      var bets = (0,_plugins_utils__WEBPACK_IMPORTED_MODULE_4__.get)(this.multiplayerGame, 'gameable.bets');
      return bets ? _objectSpread({}, Object.keys(bets).reduce(function (a, userId) {
        return _objectSpread(_objectSpread({}, a), {}, _defineProperty({}, userId, bets[userId]));
      }, {})) : {};
    },
    timer: function timer() {
      return this.multiplayerGameId && !this.isCompleteInProgress && this.animation.t > this.multiplayerGame.start_time_unix ? this.timeLeft : 0.0;
    },
    showResult: function showResult() {
      return !(this.multiplayerGameId && !this.isCompleteInProgress && this.animation.t > this.multiplayerGame.start_time_unix ? this.timeLeft : 0.0);
    },
    canDecreaseBet: function canDecreaseBet() {
      return this.bet > this.minBet;
    },
    canIncreaseBet: function canIncreaseBet() {
      return this.bet < this.maxBet;
    },
    canMakeBet: function canMakeBet() {
      return this.balanceIsSufficient && this.multiplayerGameId && !this.isCompleteInProgress && this.animation.t > this.multiplayerGame.start_time_unix;
    },
    multiplayerGameId: function multiplayerGameId() {
      return this.multiplayerGame.id;
    },
    balanceIsSufficient: function balanceIsSufficient() {
      return this.account.balance >= this.bet;
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
    betsRed: function betsRed() {
      var bets = [];
      var gameBets = this.showResult ? this.bets_win : this.bets;
      for (var i in gameBets) {
        if (gameBets[i].red !== undefined && gameBets[i].red.bet > 0) {
          bets.push(_objectSpread(_objectSpread({}, this.players[i]), {
            bet: gameBets[i].red.win ? gameBets[i].red.win : gameBets[i].red.bet
          }));
        }
      }
      return bets;
    },
    betsZero: function betsZero() {
      var bets = [];
      var gameBets = this.showResult ? this.bets_win : this.bets;
      for (var i in gameBets) {
        if (gameBets[i].zero !== undefined && gameBets[i].zero.bet > 0) {
          bets.push(_objectSpread(_objectSpread({}, this.players[i]), {
            bet: gameBets[i].zero.win ? gameBets[i].zero.win : gameBets[i].zero.bet
          }));
        }
      }
      return bets;
    },
    betsBlack: function betsBlack() {
      var bets = [];
      var gameBets = this.showResult ? this.bets_win : this.bets;
      for (var i in gameBets) {
        if (gameBets[i].black !== undefined && gameBets[i].black.bet > 0) {
          bets.push(_objectSpread(_objectSpread({}, this.players[i]), {
            bet: gameBets[i].black.win ? gameBets[i].black.win : gameBets[i].black.bet
          }));
        }
      }
      return bets;
    }
  }),
  watch: {
    'animation.mode': function animationMode(currentValue, previousValue) {
      var _this = this;
      if (previousValue !== null) {
        this.$nextTick(function () {
          if (_this.$refs.wheel) _this.$refs.wheel.style.transform = "rotate(".concat(_this.animation.wheel_angle, "rad)");
          if (_this.$refs.line) _this.$refs.line.style.left = "calc(50% - 30px - ".concat(_this.animation.line_pos, "px)");
        });
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.soundStop(packages_multiplayer_roulette_resources_audio_spin_wav__WEBPACK_IMPORTED_MODULE_9__["default"]);
    clearInterval(this.t);
    this.t = 0;
    this.animation.destroy = true;
  },
  created: function created() {
    this.animation.mode = this.config.mode;
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_17__.mapActions)({
    updateUserAccountBalance: 'auth/updateUserAccountBalance'
  })), {}, {
    requestAnimationFrame_get: function requestAnimationFrame_get() {
      var _raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
      this.animation.requestAnimationFrame = _raf ? _raf.bind(window) : null;
    },
    beforeEnter: function beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function enter(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function () {
        (0,animejs__WEBPACK_IMPORTED_MODULE_14__["default"])({
          targets: el,
          easing: 'easeOutExpo',
          opacity: 1,
          height: el.children[0].getBoundingClientRect().height + 8 + 'px'
        }).finished.then(done);
      }, delay);
    },
    leave: function leave(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function () {
        (0,animejs__WEBPACK_IMPORTED_MODULE_14__["default"])({
          targets: el,
          easing: 'easeOutExpo',
          opacity: 0,
          height: 0
        }).finished.then(done);
      }, delay);
    },
    LWbeforeEnter: function LWbeforeEnter(el) {
      el.style.opacity = 0;
      el.style.width = 0;
      el.style.top = '6px';
    },
    LWenter: function LWenter(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function () {
        (0,animejs__WEBPACK_IMPORTED_MODULE_14__["default"])({
          targets: el,
          easing: 'easeOutExpo',
          opacity: 1,
          width: '32px',
          top: '0px'
        }).finished.then(done);
      }, delay);
    },
    LWleave: function LWleave(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function () {
        (0,animejs__WEBPACK_IMPORTED_MODULE_14__["default"])({
          targets: el,
          easing: 'easeOutExpo',
          opacity: 0,
          width: 0,
          top: '6px'
        }).finished.then(done);
      }, delay);
    },
    decreaseBet: function decreaseBet() {
      this.sound(_audio_common_click_wav__WEBPACK_IMPORTED_MODULE_5__["default"]);
      var bet = this.bet - this.betStep;
      this.bet = Math.max(this.minBet, bet);
    },
    increaseBet: function increaseBet() {
      this.sound(_audio_common_click_wav__WEBPACK_IMPORTED_MODULE_5__["default"]);
      var bet = this.bet + this.betStep;
      this.bet = Math.min(this.maxBet, bet);
    },
    makeBet: function makeBet(type) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$post, game;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this2.sound(packages_multiplayer_roulette_resources_audio_bet_wav__WEBPACK_IMPORTED_MODULE_8__["default"]);
              _this2.updateUserAccountBalance(_this2.account.balance - _this2.bet);
              if (_this2.mybet[type] === undefined) _this2.$set(_this2.mybet, type, 0);
              // this.$set(this.mybet, type, this.mybet[type] + this.bet)
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post(_this2.getRoute('bet').replace('{multiplayerGame}', "".concat(_this2.multiplayerGameId)), {
                type: type,
                bet: _this2.bet
              });
            case 5:
              _yield$axios$post = _context.sent;
              game = _yield$axios$post.data;
              _this2.updateUserAccountBalance(game.account.balance);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    complete: function complete() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$axios$post2, game;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this3.bets_win = _this3.bets;
              _this3.isCompleteInProgress = true;
              _this3.wheelStart();
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post(_this3.getRoute('complete').replace('{multiplayerGame}', "".concat(_this3.multiplayerGameId)));
            case 5:
              _yield$axios$post2 = _context2.sent;
              game = _yield$axios$post2.data;
              if (game) {
                _this3.balance = game.account.balance;
              }
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    doComplete: function doComplete(event) {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var i, win, j, k, _i;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(event.multiplayer_game.gameable.win_number !== null)) {
                _context3.next = 11;
                break;
              }
              _this4.soundStop(packages_multiplayer_roulette_resources_audio_spin_wav__WEBPACK_IMPORTED_MODULE_9__["default"]);
              _context3.next = 4;
              return _this4.wheelStop(event.multiplayer_game.gameable.win_number);
            case 4:
              i = _this4.rouletteNums.indexOf(event.multiplayer_game.gameable.win_number);
              if (i === 0) _this4.winColor = 'zero';else if (i % 2 === 0) _this4.winColor = 'black';else if (i % 2 !== 0) _this4.winColor = 'red';
              if (event.multiplayer_game.gameable.bets[_this4.user.id]) {
                win = 0;
                for (j in event.multiplayer_game.gameable.bets[_this4.user.id]) {
                  win += event.multiplayer_game.gameable.bets[_this4.user.id][j].win;
                }
                if (win > 0) {
                  _this4.sound(_this4.config.sounds.win || packages_multiplayer_roulette_resources_audio_win_wav__WEBPACK_IMPORTED_MODULE_6__["default"]);
                  _this4.message = _this4.$t('You won') + ' ' + win;
                } else {
                  _this4.sound(_this4.config.sounds.lose || packages_multiplayer_roulette_resources_audio_lose_wav__WEBPACK_IMPORTED_MODULE_7__["default"]);
                  _this4.message = _this4.$t('You lose');
                }
              }
              for (k in event.multiplayer_game.gameable.bets) {
                _this4.$set(_this4.bets_win, k, event.multiplayer_game.gameable.bets[k]);
              }
              _this4.winLast.push(i);
              _context3.next = 13;
              break;
            case 11:
              _i = Math.round(Math.random() * (_this4.rouletteNums.length - 1));
              _this4.wheelStop(_this4.rouletteNums[_i]);
            case 13:
              if (_this4.balance) {
                _this4.updateUserAccountBalance(_this4.balance);
                _this4.balance = 0;
              }
              _this4.mybet = {};
              _this4.multiplayerGame = event.multiplayer_game.next ? event.multiplayer_game.next : event.multiplayer_game;
              _this4.gameEndTime = _this4.multiplayerGame.end_time_unix;
              _this4.isCompleteInProgress = false;
            case 18:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    updateMyBets: function updateMyBets() {
      if (this.bets[this.user.id] !== undefined) {
        for (var i in this.bets[this.user.id]) {
          if (this.mybet[i] === undefined || this.mybet[i] < this.bets[this.user.id][i].bet) this.$set(this.mybet, i, this.bets[this.user.id][i].bet);
        }
      }
    },
    onGameInit: function onGameInit(event) {
      var _this5 = this;
      this.timeDiff = event.time - Date.now();
      this.multiplayerGame = event.multiplayer_game;
      this.gameEndTime = event.multiplayer_game.end_time_unix;
      this.players = _objectSpread({}, event.players);
      this.updateMyBets();
      if (this.t) {
        clearInterval(this.t);
      }
      if (!this.ready) {
        this.animation.line_pos = 68 * this.rouletteNums.length;
        this.t = setInterval(this.onTime, 10);
        this.ready = true;
        this.requestAnimationFrame_get();
        this.$nextTick(function () {
          _this5.render();
          _this5.bet = _this5.config.default_bet_amount;
        });
        window.$game = this;
      }
    },
    onEvent: function onEvent(event) {
      this.timeDiff = event.time - Date.now();
      this.players = _objectSpread(_objectSpread({}, this.players), event.players);
      if (event.action === 'complete' && event.multiplayer_game) {
        this.doComplete(event);
      } else {
        this.multiplayerGame = event.multiplayer_game.next ? event.multiplayer_game.next : event.multiplayer_game;
        this.updateMyBets();
      }
    },
    onTime: function onTime() {
      var left = parseFloat(((this.multiplayerGame.end_time_unix - this.getCurrentTime()) / 1000).toFixed(2));
      if (left >= 0 && left !== this.timeLeft) this.timeLeft = left;
      var t = Math.round(10000 - Math.round((this.getCurrentTime() - this.multiplayerGame.start_time_unix) / (this.multiplayerGame.end_time_unix - this.multiplayerGame.start_time_unix) * 10000)) / 100;
      if (t < 0) {
        t = 0;
        if (!this.isCompleteInProgress) {
          this.sound(packages_multiplayer_roulette_resources_audio_start_wav__WEBPACK_IMPORTED_MODULE_10__["default"]);
          this.soundLoop(packages_multiplayer_roulette_resources_audio_spin_wav__WEBPACK_IMPORTED_MODULE_9__["default"]);
          this.complete();
        }
      } else if (t > 100) {
        t = 100;
      }
      if (t !== this.progress) this.progress = t;
      if (this.timer !== 0 && this.winColor) {
        this.winColor = null;
        this.message = null;
      }
    },
    render: function render() {
      if (this.animation.destroy) return;
      var lt = this.getCurrentTime();
      /**
      *  Wheel animation
      */
      if (this.animation.type === 1 && this.animation.wheel_speed < this.animation.wheel_speed_max) {
        this.animation.wheel_speed += this.animation.wheel_speed_a * (lt - this.animation.t);
        if (this.animation.wheel_speed > this.animation.wheel_speed_max) this.animation.wheel_speed = this.animation.wheel_speed_max;
      } else if (this.animation.type === 2 && this.animation.wheel_speed > 0) {
        this.animation.wheel_speed += this.animation.wheel_break_a * (lt - this.animation.t);
        if (this.animation.wheel_speed < 0) this.animation.wheel_speed = 0;
      }
      if (this.animation.wheel_speed > 0) {
        this.animation.wheel_angle += this.animation.wheel_speed * (lt - this.animation.t);
        while (this.animation.wheel_angle > Math.PI * 2) this.animation.wheel_angle -= Math.PI * 2;
        if (this.$refs.wheel) this.$refs.wheel.style.transform = "rotate(".concat(this.animation.wheel_angle, "rad)");
      }
      /**
      *  Line animation
      */
      if (this.animation.type === 1 && this.animation.line_speed < this.animation.line_speed_max) {
        this.animation.line_speed += this.animation.line_speed_a * (lt - this.animation.t);
        if (this.animation.line_speed > this.animation.line_speed_max) this.animation.line_speed = this.animation.line_speed_max;
      } else if (this.animation.type === 2 && this.animation.line_speed > 0) {
        this.animation.line_speed += this.animation.line_break_a * (lt - this.animation.t);
        if (this.animation.line_speed < 0) this.animation.line_speed = 0;
      }
      if (this.animation.line_speed > 0) {
        this.animation.line_pos += this.animation.line_speed * (lt - this.animation.t);
        while (this.animation.line_pos > 3 * 68 * this.rouletteNums.length) this.animation.line_pos -= 68 * this.rouletteNums.length;
        if (this.$refs.line) this.$refs.line.style.left = "calc(50% - 30px - ".concat(this.animation.line_pos, "px)");
      }
      /**
      *  Stop callback
      */
      if (this.animation.wheel_break_done !== undefined && (this.animation.mode === 'wheel' && this.animation.wheel_speed === 0 || this.animation.mode === 'line' && this.animation.line_speed === 0)) {
        if (this.$refs.wheel) this.$refs.wheel.style.transform = "rotate(".concat(this.animation.wheel_angle, "rad)");
        if (this.$refs.line) this.$refs.line.style.left = "calc(50% - 30px - ".concat(this.animation.line_pos, "px)");
        this.soundStop(packages_multiplayer_roulette_resources_audio_spin_wav__WEBPACK_IMPORTED_MODULE_9__["default"]);
        this.animation.type = 0;
        this.animation.wheel_speed = 0;
        this.animation.line_speed = 0;
        this.animation.wheel_angle = this.animation.wheel_stop;
        this.animation.line_pos = this.animation.line_stop;
        while (this.animation.wheel_angle > Math.PI * 2) this.animation.wheel_angle -= Math.PI * 2;
        while (this.animation.line_pos > 3 * 68 * this.rouletteNums.length) this.animation.line_pos -= 68 * this.rouletteNums.length;
        this.animation.wheel_break_done();
        delete this.animation.wheel_break_done;
      }
      this.animation.t = lt;
      this.animation.requestAnimationFrame(this.render);
    },
    wheelStart: function wheelStart() {
      this.animation.type = 1;
      this.animation.t = this.getCurrentTime();
    },
    wheelStop: function wheelStop(num) {
      var _this6 = this;
      return new Promise(function (resolve) {
        var i = _this6.rouletteNums.indexOf(num);
        var s;
        s = Math.PI * 2 - i * Math.PI * 2 / _this6.rouletteNums.length;
        while (_this6.animation.wheel_angle > s) {
          s += Math.PI * 2;
        }
        while (s - _this6.animation.wheel_angle < Math.PI * _this6.animation.stop_min) {
          s += Math.PI * 2;
        }
        _this6.animation.wheel_stop = s;
        _this6.animation.wheel_break = s - _this6.animation.wheel_angle;
        _this6.animation.wheel_break_a = -0.5 * _this6.animation.wheel_speed * _this6.animation.wheel_speed / _this6.animation.wheel_break;

        // s = this.rouletteNums.length * 68 - i * this.rouletteNums.length * 68
        s = i * 68 + 30;
        while (_this6.animation.line_pos > s) {
          s += _this6.rouletteNums.length * 68;
        }
        while (s - _this6.animation.line_pos < _this6.rouletteNums.length * 68 * _this6.animation.stop_min) {
          s += _this6.rouletteNums.length * 68;
        }
        _this6.animation.line_stop = s;
        _this6.animation.line_break = s - _this6.animation.line_pos;
        _this6.animation.line_break_a = -0.5 * _this6.animation.line_speed * _this6.animation.line_speed / _this6.animation.line_break;
        _this6.animation.type = 2;
        _this6.animation.wheel_break_done = resolve;
      });
    },
    getCurrentTime: function getCurrentTime() {
      return Date.now() + this.timeDiff;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MultiplayerGameEvent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MultiplayerGameEvent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  data: function data() {
    return {
      channel: null
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)('auth', ['user'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)('broadcasting', ['echo'])), {}, {
    gamePackageId: function gamePackageId() {
      return this.$route.params.game;
    }
  }),
  created: function created() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // it's important to wait for next tick,
            // because the game component can be initialized from beforeRouteUpdate() hook,
            // when the route parameters are not yet updated
            _this.$nextTick(function () {
              // note that there is no access to this.$route in beforeDestroy() hook,
              // that's why channel is stored as data property and not computed property
              _this.channel = "multiplayer-game.".concat(_this.gamePackageId);
              _this.fetchGame();
              _this.subscribe();
            });
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    this.unsubscribe();
  },
  methods: {
    fetchGame: function fetchGame() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$axios$get, game;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/multiplayer-games/".concat(_this2.gamePackageId));
            case 2:
              _yield$axios$get = _context2.sent;
              game = _yield$axios$get.data;
              _this2.$emit('game-init', game);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    subscribe: function subscribe() {
      var _this3 = this;
      if (!this.echo) {
        return false;
      }
      this.echo.join(this.channel)
      // game event
      .listen('MultiplayerGameAction', function (event) {
        _this3.$emit('event', event);
      });
    },
    unsubscribe: function unsubscribe() {
      if (!this.echo) {
        return false;
      }
      this.echo.leave(this.channel);
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

/***/ "./packages/multiplayer-roulette/resources/audio/bet.wav":
/*!***************************************************************!*\
  !*** ./packages/multiplayer-roulette/resources/audio/bet.wav ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/multiplayer-roulette/bet.wav");

/***/ }),

/***/ "./packages/multiplayer-roulette/resources/audio/lose.wav":
/*!****************************************************************!*\
  !*** ./packages/multiplayer-roulette/resources/audio/lose.wav ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/multiplayer-roulette/lose.wav");

/***/ }),

/***/ "./packages/multiplayer-roulette/resources/audio/spin.wav":
/*!****************************************************************!*\
  !*** ./packages/multiplayer-roulette/resources/audio/spin.wav ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/multiplayer-roulette/spin.wav");

/***/ }),

/***/ "./packages/multiplayer-roulette/resources/audio/start.wav":
/*!*****************************************************************!*\
  !*** ./packages/multiplayer-roulette/resources/audio/start.wav ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/multiplayer-roulette/start.wav");

/***/ }),

/***/ "./packages/multiplayer-roulette/resources/audio/win.wav":
/*!***************************************************************!*\
  !*** ./packages/multiplayer-roulette/resources/audio/win.wav ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/multiplayer-roulette/win.wav");

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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=style&index=0&id=46fb6596&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=style&index=0&id=46fb6596&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".blink-text[data-v-46fb6596] {\n  position: relative;\n  font-family: sans-serif;\n  text-transform: uppercase;\n  font-size: 2em;\n  letter-spacing: 4px;\n  overflow: hidden;\n  background: linear-gradient(90deg, #000, #fff, #000);\n  background-repeat: no-repeat;\n  background-size: 80%;\n  animation: blink-animate-46fb6596 3s linear infinite;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: rgba(255, 255, 255, 0);\n}\n.blink-text.light[data-v-46fb6596] {\n  background: linear-gradient(90deg, #fff, #000, #fff);\n  background-repeat: no-repeat;\n  background-size: 80%;\n  animation: blink-animate-46fb6596 3s linear infinite;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: rgba(255, 255, 255, 0);\n}\n@keyframes blink-animate-46fb6596 {\n0% {\n    background-position: -500%;\n}\n100% {\n    background-position: 500%;\n}\n}\n.message-text[data-v-46fb6596] {\n  position: relative;\n  font-family: sans-serif;\n  text-transform: uppercase;\n  font-size: 2em;\n  letter-spacing: 4px;\n  color: var(--v-primary-base);\n}\n.roulette-container[data-v-46fb6596] {\n  overflow: hidden;\n  height: 200px;\n  width: 600px;\n}\n@media (max-width: 650px) {\n.roulette-container[data-v-46fb6596] {\n    width: 100%;\n}\n}\n@media (max-width: 450px) {\n.roulette-container[data-v-46fb6596] {\n    width: 100%;\n    height: 150px;\n}\n}\n@media (max-width: 350px) {\n.roulette-container[data-v-46fb6596] {\n    width: 100%;\n    height: 100px;\n}\n}\n.roulette[data-v-46fb6596] {\n  width: 600px;\n  height: auto;\n  position: relative;\n  margin-right: 26px;\n}\n@media (max-width: 650px) {\n.roulette[data-v-46fb6596] {\n    width: 100%;\n}\n}\n.roulette canvas[data-v-46fb6596] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 99%;\n  z-index: 4;\n}\n.roulette .roulette-source[data-v-46fb6596] {\n  width: calc( 406*99%/480 );\n  height: calc( 406*99%/480 );\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  display: block;\n  z-index: 1;\n  transform: translate(-50%, -50%);\n}\n.roulette .roulette-source svg g .cross-arm-1[data-v-46fb6596] {\n  fill: var(--v-primary-darken2);\n}\n.roulette .roulette-source svg g .cross-arm-2[data-v-46fb6596] {\n  fill: var(--v-primary-darken2);\n}\n.roulette .roulette-source svg g .cross-arm-3[data-v-46fb6596] {\n  fill: var(--v-primary-darken2);\n}\n.roulette .roulette-source svg g .cross-arm-4[data-v-46fb6596] {\n  fill: var(--v-primary-darken2);\n}\n.roulette .roulette-source svg g .cross-circle-1[data-v-46fb6596] {\n  fill: var(--v-primary-darken2);\n}\n.roulette .roulette-source svg g .cross-circle-2[data-v-46fb6596] {\n  fill: var(--v-primary-darken2);\n}\n.roulette .roulette-source svg g .cross-circle-3[data-v-46fb6596] {\n  fill: var(--v-primary-darken2);\n}\n.roulette .roulette-source svg g .cross-circle-4[data-v-46fb6596] {\n  fill: var(--v-primary-darken2);\n}\n.roulette .roulette-source svg g .cross-circle-inner-1[data-v-46fb6596] {\n  fill: var(--v-primary-darken1);\n}\n.roulette .roulette-source svg g .cross-circle-inner-2[data-v-46fb6596] {\n  fill: var(--v-primary-darken1);\n}\n.roulette .roulette-source svg g .cross-circle-inner-3[data-v-46fb6596] {\n  fill: var(--v-primary-darken1);\n}\n.roulette .roulette-source svg g .cross-circle-inner-4[data-v-46fb6596] {\n  fill: var(--v-primary-darken1);\n}\n.roulette .roulette-source svg g .circle-center-outer[data-v-46fb6596] {\n  fill: var(--v-primary-base);\n}\n.roulette .roulette-source svg g .circle-center[data-v-46fb6596] {\n  fill: var(--v-primary-darken2);\n}\n.roulette .roulette-source svg g .circle-center-inner[data-v-46fb6596] {\n  fill: var(--v-primary-base);\n}\n.roulette .roulette-source svg g .st58[data-v-46fb6596], .roulette .roulette-source svg g .st59[data-v-46fb6596], .roulette .roulette-source svg g .st61[data-v-46fb6596], .roulette .roulette-source svg g .st62[data-v-46fb6596],\n.roulette .roulette-source svg g .st0[data-v-46fb6596], .roulette .roulette-source svg g .st1[data-v-46fb6596], .roulette .roulette-source svg g .st2[data-v-46fb6596], .roulette .roulette-source svg g .st3[data-v-46fb6596], .roulette .roulette-source svg g .st4[data-v-46fb6596], .roulette .roulette-source svg g .st5[data-v-46fb6596], .roulette .roulette-source svg g .st6[data-v-46fb6596], .roulette .roulette-source svg g .st7[data-v-46fb6596], .roulette .roulette-source svg g .st8[data-v-46fb6596], .roulette .roulette-source svg g .st9[data-v-46fb6596], .roulette .roulette-source svg g .st10[data-v-46fb6596], .roulette .roulette-source svg g .st11[data-v-46fb6596], .roulette .roulette-source svg g .st12[data-v-46fb6596], .roulette .roulette-source svg g .st13[data-v-46fb6596], .roulette .roulette-source svg g .st14[data-v-46fb6596], .roulette .roulette-source svg g .st15[data-v-46fb6596], .roulette .roulette-source svg g .st16[data-v-46fb6596], .roulette .roulette-source svg g .st17[data-v-46fb6596],\n.roulette .roulette-source svg g .st18[data-v-46fb6596], .roulette .roulette-source svg g .st19[data-v-46fb6596], .roulette .roulette-source svg g .st20[data-v-46fb6596],\n.roulette .roulette-source svg g .st21[data-v-46fb6596], .roulette .roulette-source svg g .st22[data-v-46fb6596], .roulette .roulette-source svg g .st23[data-v-46fb6596], .roulette .roulette-source svg g .st24[data-v-46fb6596], .roulette .roulette-source svg g .st25[data-v-46fb6596], .roulette .roulette-source svg g .st26[data-v-46fb6596], .roulette .roulette-source svg g .st27[data-v-46fb6596], .roulette .roulette-source svg g .st28[data-v-46fb6596], .roulette .roulette-source svg g .st29[data-v-46fb6596], .roulette .roulette-source svg g .st30[data-v-46fb6596], .roulette .roulette-source svg g .st31[data-v-46fb6596], .roulette .roulette-source svg g .st32[data-v-46fb6596], .roulette .roulette-source svg g .st33[data-v-46fb6596], .roulette .roulette-source svg g .st34[data-v-46fb6596], .roulette .roulette-source svg g .st35[data-v-46fb6596], .roulette .roulette-source svg g .st36[data-v-46fb6596], .roulette .roulette-source svg g .st37[data-v-46fb6596], .roulette .roulette-source svg g .st38[data-v-46fb6596], .roulette .roulette-source svg g .st39[data-v-46fb6596], .roulette .roulette-source svg g .st40[data-v-46fb6596], .roulette .roulette-source svg g .st41[data-v-46fb6596], .roulette .roulette-source svg g .st42[data-v-46fb6596], .roulette .roulette-source svg g .st43[data-v-46fb6596], .roulette .roulette-source svg g .st44[data-v-46fb6596], .roulette .roulette-source svg g .st45[data-v-46fb6596], .roulette .roulette-source svg g .st46[data-v-46fb6596], .roulette .roulette-source svg g .st47[data-v-46fb6596], .roulette .roulette-source svg g .st48[data-v-46fb6596], .roulette .roulette-source svg g .st49[data-v-46fb6596], .roulette .roulette-source svg g .st50[data-v-46fb6596], .roulette .roulette-source svg g .st51[data-v-46fb6596], .roulette .roulette-source svg g .st52[data-v-46fb6596], .roulette .roulette-source svg g .st53[data-v-46fb6596], .roulette .roulette-source svg g .st54[data-v-46fb6596], .roulette .roulette-source svg g .st55[data-v-46fb6596], .roulette .roulette-source svg g .st56[data-v-46fb6596], .roulette .roulette-source svg g .st57[data-v-46fb6596] {\n  stroke: var(--v-primary-base);\n}\n.roulette .roulette-source svg g .st59[data-v-46fb6596] {\n  fill: transparent;\n}\n.roulette .roulette-source svg g .circle-inner-gradient.g1[data-v-46fb6596] {\n  stop-color: var(--v-primary-base);\n  stop-opacity: 0;\n}\n.roulette .roulette-source svg g .circle-inner-gradient.g2[data-v-46fb6596] {\n  stop-color: var(--v-primary-base);\n  stop-opacity: 0;\n}\n.roulette .roulette-source svg g .circle-inner-gradient.g3[data-v-46fb6596] {\n  stop-color: var(--v-primary-base);\n  stop-opacity: 0.1;\n}\n.roulette .roulette-source svg g .circle-inner-gradient.g4[data-v-46fb6596] {\n  stop-color: var(--v-primary-base);\n  stop-opacity: 0.25;\n}\n.roulette .roulette-source svg g .circle-inner-gradient.g5[data-v-46fb6596] {\n  stop-color: var(--v-primary-base);\n}\n.roulette .roulette-source svg g .st0[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 5.0968;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st1[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 5.1037;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st2[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 5.0481;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st3[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st4[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 5.0674;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st5[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 5.0476;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st6[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 5.0202;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st7[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 5.0375;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st8[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 5.0253;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st9[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 5.0573;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st10[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 5.0642;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st11[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 5.0415;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st12[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 5.0593;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st13[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 4.6425;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st14[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 5.0599;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st15[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 5.0581;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st16[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 5.0754;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st17[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 5.0757;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st18[data-v-46fb6596] {\n  fill: #000;\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n  transition: fill 0.4s ease;\n}\n.roulette .roulette-source svg g .st18.light[data-v-46fb6596] {\n  fill: #9c9c9c;\n}\n.roulette .roulette-source svg g .st19[data-v-46fb6596] {\n  fill: #004d00;\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n  transition: fill 0.4s ease;\n}\n.roulette .roulette-source svg g .st19.light[data-v-46fb6596] {\n  fill: #00b300;\n}\n.roulette .roulette-source svg g .st20[data-v-46fb6596] {\n  fill: #F44336;\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n  transition: fill 0.4s ease;\n}\n.roulette .roulette-source svg g .st20.light[data-v-46fb6596] {\n  fill: #f99d97;\n}\n.roulette .roulette-source svg g .st21[data-v-46fb6596] {\n  fill: url(#SVGID_1_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st22[data-v-46fb6596] {\n  fill: url(#SVGID_2_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st23[data-v-46fb6596] {\n  fill: url(#SVGID_3_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st24[data-v-46fb6596] {\n  fill: url(#SVGID_4_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st25[data-v-46fb6596] {\n  fill: url(#SVGID_5_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st26[data-v-46fb6596] {\n  fill: url(#SVGID_6_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st27[data-v-46fb6596] {\n  fill: url(#SVGID_7_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st28[data-v-46fb6596] {\n  fill: url(#SVGID_8_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st29[data-v-46fb6596] {\n  fill: url(#SVGID_9_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st30[data-v-46fb6596] {\n  fill: url(#SVGID_10_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st31[data-v-46fb6596] {\n  fill: url(#SVGID_11_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st32[data-v-46fb6596] {\n  fill: url(#SVGID_12_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st33[data-v-46fb6596] {\n  fill: url(#SVGID_13_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st34[data-v-46fb6596] {\n  fill: url(#SVGID_14_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st35[data-v-46fb6596] {\n  fill: url(#SVGID_15_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st36[data-v-46fb6596] {\n  fill: url(#SVGID_16_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st37[data-v-46fb6596] {\n  fill: url(#SVGID_17_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st38[data-v-46fb6596] {\n  fill: url(#SVGID_18_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st39[data-v-46fb6596] {\n  fill: url(#SVGID_19_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st40[data-v-46fb6596] {\n  fill: url(#SVGID_20_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st41[data-v-46fb6596] {\n  fill: url(#SVGID_21_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st42[data-v-46fb6596] {\n  fill: url(#SVGID_22_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st43[data-v-46fb6596] {\n  fill: url(#SVGID_23_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st44[data-v-46fb6596] {\n  fill: url(#SVGID_24_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st45[data-v-46fb6596] {\n  fill: url(#SVGID_25_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st46[data-v-46fb6596] {\n  fill: url(#SVGID_26_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st47[data-v-46fb6596] {\n  fill: url(#SVGID_27_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st48[data-v-46fb6596] {\n  fill: url(#SVGID_28_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st49[data-v-46fb6596] {\n  fill: url(#SVGID_29_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st50[data-v-46fb6596] {\n  fill: url(#SVGID_30_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st51[data-v-46fb6596] {\n  fill: url(#SVGID_31_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st52[data-v-46fb6596] {\n  fill: url(#SVGID_32_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st53[data-v-46fb6596] {\n  fill: url(#SVGID_33_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st54[data-v-46fb6596] {\n  fill: url(#SVGID_34_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st55[data-v-46fb6596] {\n  fill: url(#SVGID_35_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st56[data-v-46fb6596] {\n  fill: url(#SVGID_36_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st57[data-v-46fb6596] {\n  fill: url(#SVGID_37_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st58[data-v-46fb6596] {\n  fill: url(#SVGID_38_);\n  stroke-width: 5;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st59[data-v-46fb6596] {\n  stroke-width: 7.959;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st60[data-v-46fb6596] {\n  fill: #ffffff;\n}\n.roulette .roulette-source svg g .st61[data-v-46fb6596] {\n  fill: url(#SVGID_39_);\n  stroke-width: 6;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .st62[data-v-46fb6596] {\n  fill: none;\n  stroke-width: 17;\n  stroke-miterlimit: 10;\n}\n.roulette .roulette-source svg g .whell-ic-cell-red.s5[data-v-46fb6596] {\n  stop-color: #f9948d;\n}\n.roulette .roulette-source svg g .whell-ic-cell-red.s4[data-v-46fb6596] {\n  stop-color: #f8827a;\n}\n.roulette .roulette-source svg g .whell-ic-cell-red.s3[data-v-46fb6596] {\n  stop-color: #f66358;\n}\n.roulette .roulette-source svg g .whell-ic-cell-red.s2[data-v-46fb6596] {\n  stop-color: #f54e42;\n}\n.roulette .roulette-source svg g .whell-ic-cell-red.s1[data-v-46fb6596] {\n  stop-color: #F44336;\n}\n.roulette .outside[data-v-46fb6596] {\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: relative;\n}\n.roulette .outside .gradient.g1[data-v-46fb6596] {\n  stop-color: var(--v-primary-base);\n  stop-opacity: 0;\n}\n.roulette .outside .gradient.g2[data-v-46fb6596] {\n  stop-color: var(--v-primary-base);\n  stop-opacity: 0;\n}\n.roulette .outside .gradient.g3[data-v-46fb6596] {\n  stop-color: var(--v-primary-base);\n  stop-opacity: 0.1;\n}\n.roulette .outside .gradient.g4[data-v-46fb6596] {\n  stop-color: var(--v-primary-base);\n  stop-opacity: 0.25;\n}\n.roulette .outside .gradient.g5[data-v-46fb6596] {\n  stop-color: var(--v-primary-base);\n}\n.roulette .outside .st0[data-v-46fb6596] {\n  stroke: var(--v-primary-base);\n}\n.roulette .arrow-body[data-v-46fb6596] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n}\n.roulette .arrow-body .arrow[data-v-46fb6596] {\n  fill: var(--v-accent-darken3);\n  transform: translate(213.5px, 4px) scale(0.75);\n  stroke-width: 4px;\n  stroke: var(--v-primary-lighten2);\n  stroke-linecap: round;\n}\n.bet-input[data-v-46fb6596] {\n  max-width: 200px;\n}\n.bet-badge[data-v-46fb6596] .v-badge__badge {\n  color: black;\n}\n.progress-body[data-v-46fb6596] {\n  width: 600px;\n}\n@media (max-width: 650px) {\n.progress-body[data-v-46fb6596] {\n    width: 100%;\n}\n}\n.progress-body .progress[data-v-46fb6596] {\n  width: 100%;\n  height: 5px;\n  background: var(--v-primary-darken3);\n  text-align: left;\n}\n.progress-body .progress.light[data-v-46fb6596] {\n  background: var(--v-primary-lighten3);\n}\n.progress-body .progress .body[data-v-46fb6596] {\n  background: var(--v-primary-base);\n  width: 100%;\n  height: 5px;\n}\n.bet-list[data-v-46fb6596] {\n  width: 600px;\n}\n.bet-list > div[data-v-46fb6596] {\n  width: 33.3333%;\n}\n@media (max-width: 650px) {\n.bet-list[data-v-46fb6596] {\n    width: 100%;\n}\n.bet-list > div[data-v-46fb6596] {\n    width: auto;\n}\n}\n.last-win[data-v-46fb6596] {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n}\n@media (max-width: 1204px) {\n.last-win[data-v-46fb6596] {\n    position: relative;\n    top: 0;\n    left: 0;\n    margin-top: 8px;\n    margin-bottom: 8px;\n}\n}\n.last-win .win-number[data-v-46fb6596] {\n  position: relative;\n  width: 32px;\n  height: 32px;\n  margin-right: 8px;\n  top: 0;\n}\n.last-win .win-number span[data-v-46fb6596] {\n  width: 32px;\n  height: 32px;\n  border-radius: 16px;\n  position: relative;\n  left: 0;\n  top: 0;\n}\n.game-mode[data-v-46fb6596] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n@media (max-width: 1024px) {\n.game-mode[data-v-46fb6596] {\n    position: relative;\n    top: 0;\n    right: 0;\n    margin-top: 8px;\n    margin-bottom: 8px;\n}\n}\n.game-container[data-v-46fb6596] {\n  position: relative;\n}\n.line-container[data-v-46fb6596] {\n  width: 100%;\n  height: 120px;\n  position: relative;\n}\n.line-container .line[data-v-46fb6596] {\n  width: 100%;\n  height: 60px;\n  position: relative;\n  overflow: hidden;\n  top: 30px;\n}\n.line-container .line .line-body[data-v-46fb6596] {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.line-container .line .line-body .line-item[data-v-46fb6596] {\n  width: 60px;\n  height: 60px;\n  position: absolute;\n  top: 0;\n  border-radius: 8px;\n}\n.line-container .arrow-body[data-v-46fb6596] {\n  position: absolute;\n  top: 0px;\n  left: calc(50% - 12.5px);\n  width: 25px;\n  height: 25px;\n  z-index: 2;\n}\n.line-container .arrow-body.arrow-2[data-v-46fb6596] {\n  top: auto;\n  bottom: 0px;\n  transform: rotate(180deg) translateX(5.5px);\n}\n.line-container .arrow-body .arrow[data-v-46fb6596] {\n  fill: var(--v-accent-darken3);\n  stroke-width: 4px;\n  stroke: var(--v-primary-lighten2);\n  stroke-linecap: round;\n}\n.bet-panels .win .bet-size[data-v-46fb6596] {\n  font-weight: 600;\n  color: var(--v-primary-base);\n}\n.bet-panels .transparent[data-v-46fb6596] {\n  opacity: 0.5;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=style&index=0&id=46fb6596&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=style&index=0&id=46fb6596&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_46fb6596_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=style&index=0&id=46fb6596&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=style&index=0&id=46fb6596&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_46fb6596_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_46fb6596_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./packages/multiplayer-roulette/resources/js/pages/game.vue":
/*!*******************************************************************!*\
  !*** ./packages/multiplayer-roulette/resources/js/pages/game.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_vue_vue_type_template_id_46fb6596_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.vue?vue&type=template&id=46fb6596&scoped=true& */ "./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=template&id=46fb6596&scoped=true&");
/* harmony import */ var _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.vue?vue&type=script&lang=js& */ "./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=script&lang=js&");
/* harmony import */ var _game_vue_vue_type_style_index_0_id_46fb6596_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.vue?vue&type=style&index=0&id=46fb6596&lang=scss&scoped=true& */ "./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=style&index=0&id=46fb6596&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _game_vue_vue_type_template_id_46fb6596_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _game_vue_vue_type_template_id_46fb6596_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "46fb6596",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/multiplayer-roulette/resources/js/pages/game.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MultiplayerGameEvent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/MultiplayerGameEvent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiplayerGameEvent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MultiplayerGameEvent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MultiplayerGameEvent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiplayerGameEvent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=style&index=0&id=46fb6596&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=style&index=0&id=46fb6596&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_style_index_0_id_46fb6596_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=style&index=0&id=46fb6596&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=style&index=0&id=46fb6596&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_style_index_0_id_29e85514_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=style&index=0&id=29e85514&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=template&id=46fb6596&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=template&id=46fb6596&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBadge */ "./node_modules/vuetify/lib/components/VBadge/VBadge.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VBtnToggle */ "./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VSpacer.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");










var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fill-height"
  }, [_c("multiplayer-game-event", {
    on: {
      "game-init": function gameInit($event) {
        return _vm.onGameInit($event);
      },
      event: function event($event) {
        return _vm.onEvent($event);
      }
    }
  }), _vm._v(" "), !_vm.ready ? _c("div", {
    staticClass: "d-flex flex-column fill-height py-3 align-center justify-center"
  }, [_c("block-preloader")], 1) : _c("div", {
    staticClass: "d-flex flex-column align-center fill-height px-4 px-sm-0 game-container"
  }, [_c("div", {
    staticClass: "last-win"
  }, [_c("transition-group", {
    staticClass: "pa-0 d-flex flex-row-reverse",
    attrs: {
      name: "staggered-fade",
      tag: "ul",
      css: false
    },
    on: {
      "before-enter": _vm.LWbeforeEnter,
      enter: _vm.LWenter,
      leave: _vm.LWleave
    }
  }, _vm._l(_vm.winLast.slice(-10), function (n, i) {
    return _c("div", {
      key: "lw-".concat(n, "-").concat(i),
      staticClass: "win-number"
    }, [_c("span", {
      staticClass: "d-flex align-center justify-center white--text",
      "class": {
        green: n === 0,
        red: n !== 0 && n % 2 !== 0,
        black: n % 2 === 0
      }
    }, [_vm._v(_vm._s(_vm.rouletteNums[n]))])]);
  }), 0)], 1), _vm._v(" "), _c("div", {
    staticClass: "game-mode"
  }, [_c(vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      tile: "",
      color: "primary",
      group: ""
    },
    model: {
      value: _vm.animation.mode,
      callback: function callback($$v) {
        _vm.$set(_vm.animation, "mode", $$v);
      },
      expression: "animation.mode"
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      value: "wheel"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Wheel")) + "\n        ")]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      value: "line"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Line")) + "\n        ")])], 1)], 1), _vm._v(" "), _vm.message ? _c("div", {
    staticClass: "text-center message-text my-3"
  }, [_vm._v("\n      " + _vm._s(_vm.message) + "\n    ")]) : !_vm.showResult ? _c("div", {
    staticClass: "text-center blink-text my-3",
    "class": {
      light: !_vm.$vuetify.theme.dark
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t("Place your bets")) + "\n    ")]) : _vm.animation.type != 0 ? _c("div", {
    staticClass: "text-center blink-text my-3",
    "class": {
      light: !_vm.$vuetify.theme.dark
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t("Rolling")) + "...\n    ")]) : _c("div", {
    staticClass: "text-center blink-text my-3",
    "class": {
      light: !_vm.$vuetify.theme.dark
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t("Waiting next game")) + "\n    ")]), _vm._v(" "), _vm.animation.mode == "wheel" ? _c("div", {
    staticClass: "roulette-container"
  }, [_c("div", {
    staticClass: "roulette"
  }, [_c("object", {
    staticClass: "roulette-source"
  }, [_c("svg", {
    attrs: {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 829.1 829.3"
    }
  }, [_c("g", {
    ref: "wheel",
    staticStyle: {
      "transform-origin": "center",
      transform: "rotate(0rad)"
    }
  }, [_c("line", {
    staticClass: "st0",
    attrs: {
      x1: "450.6",
      y1: "3.8",
      x2: "450.5",
      y2: "5.3"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st1",
    attrs: {
      x1: "380.8",
      y1: "5.2",
      x2: "380.6",
      y2: "3.8"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st2",
    attrs: {
      x1: "311.9",
      y1: "16.8",
      x2: "311.6",
      y2: "15.8"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st3",
    attrs: {
      x1: "245.2",
      y1: "40.4",
      x2: "245.1",
      y2: "40.3"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st3",
    attrs: {
      x1: "184.8",
      y1: "74.2",
      x2: "184.1",
      y2: "73.3"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st3",
    attrs: {
      x1: "130.2",
      y1: "118.3",
      x2: "130.1",
      y2: "118.3"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st3",
    attrs: {
      x1: "84.8",
      y1: "169.8",
      x2: "84.1",
      y2: "169.3"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st4",
    attrs: {
      x1: "48.3",
      y1: "228.6",
      x2: "46.6",
      y2: "227.8"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st5",
    attrs: {
      x1: "519.6",
      y1: "15.8",
      x2: "519.3",
      y2: "17.1"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st3",
    attrs: {
      x1: "585.1",
      y1: "40.3",
      x2: "585.1",
      y2: "40.4"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st6",
    attrs: {
      x1: "645.6",
      y1: "73.8",
      x2: "645.4",
      y2: "74.1"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st3",
    attrs: {
      x1: "699.1",
      y1: "117.3",
      x2: "699",
      y2: "117.4"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st3",
    attrs: {
      x1: "745.1",
      y1: "169.3",
      x2: "745.1",
      y2: "169.3"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st7",
    attrs: {
      x1: "783.6",
      y1: "228.8",
      x2: "782.4",
      y2: "229.4"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st3",
    attrs: {
      x1: "808.1",
      y1: "292.3",
      x2: "808",
      y2: "292.3"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st3",
    attrs: {
      x1: "818.1",
      y1: "501.3",
      x2: "817.6",
      y2: "501.2"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st8",
    attrs: {
      x1: "797.6",
      y1: "567.8",
      x2: "797.5",
      y2: "567.7"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st3",
    attrs: {
      x1: "766.1",
      y1: "630.3",
      x2: "766.1",
      y2: "630.2"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st9",
    attrs: {
      x1: "725.6",
      y1: "687.8",
      x2: "724.4",
      y2: "686.7"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st3",
    attrs: {
      x1: "674.1",
      y1: "735.3",
      x2: "674",
      y2: "735.1"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st10",
    attrs: {
      x1: "617.6",
      y1: "775.8",
      x2: "616.7",
      y2: "774.1"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st11",
    attrs: {
      x1: "552.6",
      y1: "804.8",
      x2: "552.2",
      y2: "803.4"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st12",
    attrs: {
      x1: "486.6",
      y1: "821.8",
      x2: "486.4",
      y2: "820.6"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st13",
    attrs: {
      x1: "415.1",
      y1: "828.8",
      x2: "415.1",
      y2: "826.8"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st14",
    attrs: {
      x1: "344.8",
      y1: "820.8",
      x2: "344.6",
      y2: "821.8"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st3",
    attrs: {
      x1: "277.2",
      y1: "803.1",
      x2: "277.1",
      y2: "803.3"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st10",
    attrs: {
      x1: "212.4",
      y1: "773.4",
      x2: "211.6",
      y2: "774.8"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st15",
    attrs: {
      x1: "155.6",
      y1: "734.6",
      x2: "154.6",
      y2: "735.8"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st16",
    attrs: {
      x1: "104.5",
      y1: "685.2",
      x2: "102.6",
      y2: "686.8"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st3",
    attrs: {
      x1: "64.2",
      y1: "630.2",
      x2: "64.1",
      y2: "630.3"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st17",
    attrs: {
      x1: "33.4",
      y1: "569.1",
      x2: "31.6",
      y2: "569.8"
    }
  }), _vm._v(" "), _c("line", {
    staticClass: "st3",
    attrs: {
      x1: "22.3",
      y1: "292.3",
      x2: "22.1",
      y2: "292.3"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell0",
    staticClass: "st19",
    attrs: {
      d: "M450.5,5.3l-9.6,106.9l-0.1,0.6c0,0-0.1,0-0.2,0c-8.4-0.7-16.9-1.1-25.5-1.1c-8.5,0-17,0.4-25.3,1 c0,0-0.1,0-0.2,0l0-0.6l-8.8-107c11.3-0.9,22.8-1.4,34.4-1.4C427,3.8,438.8,4.3,450.5,5.3z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell1",
    staticClass: "st20",
    attrs: {
      d: "M519.3,17.1l-27.2,103.9l-0.2,0.6c0,0,0,0,0,0c-16.5-4.3-33.6-7.3-51.1-8.7l0.1-0.6l9.6-106.9 C474.1,7.3,497,11.3,519.3,17.1z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell2",
    staticClass: "st18",
    attrs: {
      d: "M585.1,40.4l-44.7,98.4c-15.5-7-31.7-12.8-48.5-17.2l0.2-0.6l27.2-103.9C542,23,564,30.8,585.1,40.4z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell3",
    staticClass: "st20",
    attrs: {
      d: "M645.4,74.1l-60.3,89.3l-0.2,0.2c0,0,0,0,0,0c-14-9.5-28.9-17.8-44.5-24.9l44.7-98.3 C606.2,50,626.3,61.3,645.4,74.1z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell4",
    staticClass: "st18",
    attrs: {
      d: "M699,117.4l-74.5,78.2c-12.3-11.7-25.5-22.4-39.6-31.9l0.2-0.2l60.3-89.3C664.5,87.1,682.4,101.5,699,117.4z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell5",
    staticClass: "st20",
    attrs: {
      d: "M745.1,169.3l-86.7,64.4c-10.2-13.6-21.5-26.4-33.8-38.1l74.5-78.2C715.8,133.3,731.2,150.7,745.1,169.3z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell6",
    staticClass: "st18",
    attrs: {
      d: "M782.4,229.4l-95.9,48.2l-0.6,0.3c0,0,0-0.1,0-0.1c-7.9-15.5-17.1-30.3-27.5-44.1l86.7-64.4 C759.2,188.2,771.7,208.3,782.4,229.4z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell7",
    staticClass: "st20",
    attrs: {
      d: "M808,292.3l-103.2,32c-5-16.1-11.4-31.6-18.9-46.4l0.6-0.3l95.9-48.2C792.6,249.5,801.1,270.5,808,292.3z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell8",
    staticClass: "st18",
    attrs: {
      d: "M823.1,361.3L716,375.2c-2.3-17.5-6.1-34.5-11.2-50.8l103.2-32C814.9,314.5,820,337.6,823.1,361.3z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell9",
    staticClass: "st20",
    attrs: {
      d: "M826.6,415.3c0,5.5-0.1,11-0.3,16.4L719.1,427l-0.6,0c0-0.1,0-0.1,0-0.2c0.1-3.8,0.2-7.7,0.2-11.5 c0-13.6-0.9-27-2.6-40.1l107.1-13.9C825.4,378.9,826.6,397,826.6,415.3z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell10",
    staticClass: "st18",
    attrs: {
      d: "M826.3,431.7c-0.9,23.7-3.9,46.9-8.7,69.5l-105.6-22.8c3.5-16.7,5.7-33.8,6.4-51.4l0.6,0L826.3,431.7z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell11",
    staticClass: "st20",
    attrs: {
      d: "M817.6,501.2c-4.9,22.9-11.7,45.2-20.2,66.5l-100-40.2l-0.3-0.1c0,0,0-0.1,0-0.1 c6.2-15.7,11.2-32.1,14.8-48.9L817.6,501.2z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell12",
    staticClass: "st18",
    attrs: {
      d: "M797.5,567.7c-8.7,21.8-19.2,42.7-31.4,62.5l-92-56.6c9-14.6,16.7-30.1,23.2-46.2l0.3,0.1L797.5,567.7z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell13",
    staticClass: "st20",
    attrs: {
      d: "M766.1,630.2c-12.3,20-26.2,38.9-41.7,56.5l-80.3-70.8l-0.7-0.6c0,0,0,0,0,0c11.3-12.9,21.6-26.9,30.7-41.6 L766.1,630.2z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell14",
    staticClass: "st18",
    attrs: {
      d: "M724.4,686.7c-15.4,17.5-32.3,33.7-50.4,48.4l-67.8-84.1c13.4-10.9,25.8-22.8,37.2-35.8l0.7,0.6L724.4,686.7z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell15",
    staticClass: "st20",
    attrs: {
      d: "M674,735.1c-17.9,14.5-37.1,27.6-57.3,39l-52.5-93.4l-0.4-0.8c15-8.4,29.2-18.1,42.5-28.9L674,735.1z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell16",
    staticClass: "st18",
    attrs: {
      d: "M616.7,774.1c-20.5,11.5-42.1,21.4-64.5,29.3l-35.7-101.3l-0.2-0.6h0c16.5-5.8,32.2-13,47.3-21.4 c0.1,0,0.1-0.1,0.2-0.1l0.4,0.8L616.7,774.1z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell17",
    staticClass: "st20",
    attrs: {
      d: "M552.2,803.4c-21.2,7.5-43.1,13.3-65.7,17.2l-18.7-105.7l-0.1-0.7c16.7-2.9,33-7.2,48.6-12.7l0.2,0.6 L552.2,803.4z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell18",
    staticClass: "st18",
    attrs: {
      d: "M486.4,820.6c-23.2,4.1-47,6.2-71.3,6.2v-108c17.9,0,35.4-1.6,52.4-4.5c0,0,0.1,0,0.1,0l0.1,0.7L486.4,820.6z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell19",
    staticClass: "st20",
    attrs: {
      d: "M415.1,718.8v108c-24,0-47.5-2.1-70.3-6L363.2,715l0.1-0.7c0,0,0.1,0,0.1,0 C380.2,717.3,397.5,718.8,415.1,718.8z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell20",
    staticClass: "st18",
    attrs: {
      d: "M363.3,714.4l-0.1,0.7l-18.4,105.8c-23.3-4-45.9-10-67.6-17.7l36.2-101.8C329.5,707,346.2,711.4,363.3,714.4z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell21",
    staticClass: "st20",
    attrs: {
      d: "M313.4,701.3l-36.2,101.8c-22.6-8-44.2-18-64.8-29.6l52.9-93.2l0.4-0.8c0.1,0,0.1,0.1,0.2,0.1 C281,688.2,296.9,695.4,313.4,701.3z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell22",
    staticClass: "st18",
    attrs: {
      d: "M265.8,679.5l-0.4,0.8l-52.9,93.2c-20-11.4-39-24.4-56.8-38.8l67.6-83.1l0.6-0.7c0,0,0,0,0.1,0.1 C236.9,661.6,251,671.1,265.8,679.5z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell23",
    staticClass: "st20",
    attrs: {
      d: "M223.8,650.8l-0.6,0.7l-67.6,83.1c-18.4-15-35.5-31.5-51.1-49.5l80.7-69.9l0.9-0.8c0,0.1,0.1,0.1,0.1,0.2 C197.7,627.7,210.3,639.8,223.8,650.8z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell24",
    staticClass: "st18",
    attrs: {
      d: "M186.1,614.4l-0.9,0.8l-80.7,69.9c-14.9-17.1-28.4-35.5-40.3-54.9l92.1-56.4 C165.1,588.2,175.1,601.8,186.1,614.4z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell25",
    staticClass: "st20",
    attrs: {
      d: "M156.3,573.8l-92.1,56.4c-11.9-19.4-22.2-39.8-30.8-61.2l99.3-40.5l0.8-0.3 C139.7,544.1,147.4,559.4,156.3,573.8z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell26",
    staticClass: "st18",
    attrs: {
      d: "M133.4,528.2l-0.8,0.3l-99.3,40.5c-8.8-21.8-15.8-44.5-20.7-67.9l105.6-22.8c3.6,17.1,8.7,33.7,15,49.5 C133.3,528,133.3,528.1,133.4,528.2z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell27",
    staticClass: "st20",
    attrs: {
      d: "M118.2,478.4L12.6,501.2c-4.9-23.2-7.9-47-8.7-71.5l107.3-3.8l0.6,0c0,0.1,0,0.2,0,0.2 C112.5,443.9,114.6,461.4,118.2,478.4z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell28",
    staticClass: "st18",
    attrs: {
      d: "M111.6,415.3c0,3.5,0.1,7.1,0.2,10.6l-0.6,0L3.9,429.7c-0.2-4.8-0.3-9.6-0.3-14.5c0-18.3,1.2-36.3,3.5-54 l107.1,13.9C112.5,388.3,111.6,401.7,111.6,415.3z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell29",
    staticClass: "st20",
    attrs: {
      d: "M125.5,324.3c-5.1,16.4-8.9,33.4-11.2,50.8L7.2,361.3c3.1-23.7,8.2-46.7,15.2-68.9L125.5,324.3z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell30",
    staticClass: "st18",
    attrs: {
      d: "M144.5,277.8c0,0.1-0.1,0.2-0.1,0.2c-7.5,14.8-13.8,30.3-18.9,46.3l-103.2-32c6.9-22.1,15.6-43.4,26-63.7 l95.4,48.8L144.5,277.8z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell31",
    staticClass: "st20",
    attrs: {
      d: "M171.4,234.3c-10.1,13.6-19.2,28.2-26.9,43.5l-0.8-0.4l-95.4-48.8c10.5-20.7,22.8-40.4,36.5-58.8L171.4,234.3z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell32",
    staticClass: "st18",
    attrs: {
      d: "M205,196.3c-12.2,11.7-23.4,24.4-33.6,38l-86.6-64.6c13.7-18.4,28.9-35.6,45.4-51.4L205,196.3z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell33",
    staticClass: "st20",
    attrs: {
      d: "M245.4,163.7c-14.4,9.7-27.9,20.6-40.4,32.6l-74.8-77.9c16.9-16.2,35.1-31,54.6-44.1L245.4,163.7z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell34",
    staticClass: "st18",
    attrs: {
      d: "M289.7,138.8c-15.5,7.1-30.3,15.4-44.3,24.8l-60.6-89.4c19-12.9,39.3-24.3,60.4-33.9L289.7,138.8z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell35",
    staticClass: "st20",
    attrs: {
      d: "M338.9,121.4c-17,4.4-33.5,10.3-49.2,17.4l-44.5-98.4c21.3-9.7,43.6-17.6,66.7-23.6l26.8,104L338.9,121.4z"
    }
  }), _vm._v(" "), _c("path", {
    ref: "rouletteCell36",
    staticClass: "st18",
    attrs: {
      d: "M389.7,112.8c-17.4,1.4-34.3,4.4-50.8,8.6c0,0,0,0,0,0l-0.2-0.6l-26.8-104c22.3-5.8,45.3-9.7,68.8-11.6 l8.8,107L389.7,112.8z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_1_",
      cx: "345.105",
      cy: "158.11",
      r: "38.018",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4464"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st21",
    attrs: {
      d: "M376.8,637.1l-13.5,77.3c-17.2-2.9-33.9-7.3-49.9-13.1l26.3-73.8C351.6,631.7,364,634.9,376.8,637.1z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_2_",
      cx: "389.2401",
      cy: "151.1",
      r: "34.1899",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st22",
    attrs: {
      d: "M415.1,640.3v78.5c-17.6,0-34.9-1.5-51.7-4.4c0,0-0.1,0-0.1,0l13.5-77.3c12.3,2.1,24.9,3.2,37.8,3.2 L415.1,640.3L415.1,640.3z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_3_",
      cx: "441.3951",
      cy: "151.2299",
      r: "34.4024",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4464"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st23",
    attrs: {
      d: "M467.7,714.2C467.6,714.2,467.6,714.2,467.7,714.2c-17.1,3-34.6,4.5-52.5,4.5v-78.5c13.3,0,26.2-1.2,38.8-3.4 L467.7,714.2z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_4_",
      cx: "485.135",
      cy: "158.27",
      r: "37.8114",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st24",
    attrs: {
      d: "M516.3,701.5c-15.7,5.5-31.9,9.8-48.6,12.7L454,636.8c12.4-2.2,24.5-5.4,36.2-9.5L516.3,701.5z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_5_",
      cx: "526.965",
      cy: "172.61",
      r: "41.1411",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4464"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st25",
    attrs: {
      d: "M563.8,679.9c-0.1,0-0.1,0.1-0.2,0.1c-15,8.4-30.8,15.6-47.3,21.4h0l-26.1-74.2c12.2-4.3,23.9-9.7,35-15.9 L563.8,679.9z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_6_",
      cx: "565.695",
      cy: "194.15",
      r: "42.8478",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st26",
    attrs: {
      d: "M606.2,651.1c-13.3,10.8-27.5,20.4-42.5,28.9l-38.6-68.6c11.2-6.3,21.7-13.5,31.6-21.5L606.2,651.1z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_7_",
      cx: "600.1",
      cy: "221.885",
      r: "43.6186",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4464"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st27",
    attrs: {
      d: "M643.4,615.3c-11.4,13-23.8,24.9-37.2,35.8l-49.4-61.3c9.9-8.1,19.2-17,27.6-26.6L643.4,615.3z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_8_",
      cx: "629.235",
      cy: "255.21",
      r: "43.1912",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st28",
    attrs: {
      d: "M674.1,573.6c-9,14.8-19.3,28.7-30.7,41.6c0,0,0,0,0,0l-59-52c8.4-9.6,16-19.9,22.7-30.8L674.1,573.6z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_9_",
      cx: "652.165",
      cy: "293.21",
      r: "41.6077",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4464"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st29",
    attrs: {
      d: "M697.3,527.4c-6.4,16.1-14.2,31.6-23.2,46.2l-67-41.3c6.7-10.9,12.4-22.4,17.2-34.4L697.3,527.4z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_10_",
      cx: "668.165",
      cy: "334.455",
      r: "38.7488",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st30",
    attrs: {
      d: "M712.1,478.4c-3.5,16.9-8.5,33.2-14.8,48.9c0,0,0,0.1,0,0.1l-73-29.4c4.6-11.6,8.3-23.8,11-36.3L712.1,478.4z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_11_",
      cx: "676.825",
      cy: "378.07",
      r: "35.2201",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4464"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st31",
    attrs: {
      d: "M718.4,427c-0.7,17.5-2.8,34.7-6.4,51.4l-76.8-16.6c2.6-12.4,4.2-25.2,4.7-38.2L718.4,427z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_12_",
      cx: "678.435",
      cy: "427.95",
      r: "33.8175",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st32",
    attrs: {
      d: "M718.6,415.3c0,3.9-0.1,7.7-0.2,11.5c0,0.1,0,0.1,0,0.2l-78.5-3.4c0.1-2.9,0.2-5.8,0.2-8.8 c0-10-0.7-19.8-1.9-29.5l77.8-10.1C717.8,388.3,718.6,401.7,718.6,415.3z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_13_",
      cx: "672.985",
      cy: "474.22",
      r: "37.2798",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4464"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st33",
    attrs: {
      d: "M716,375.2l-77.8,10.1c-1.7-13-4.5-25.5-8.3-37.7l74.8-23.2C709.9,340.7,713.7,357.7,716,375.2z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_14_",
      cx: "660.365",
      cy: "516.29",
      r: "39.9169",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st34",
    attrs: {
      d: "M704.8,324.3L630,347.6c-3.7-12-8.4-23.5-14-34.5l69.9-35.1C693.4,292.7,699.7,308.3,704.8,324.3z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_15_",
      cx: "640.745",
      cy: "555.665",
      r: "42.4768",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4464"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st35",
    attrs: {
      d: "M685.8,277.9L615.9,313c-5.8-11.5-12.6-22.5-20.3-32.8l62.7-46.6C668.7,247.5,677.9,262.3,685.8,277.9\n                    C685.8,277.9,685.8,277.9,685.8,277.9z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_16_",
      cx: "614.54",
      cy: "591.13",
      r: "43.0913",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st36",
    attrs: {
      d: "M658.4,233.7l-62.7,46.6c-7.5-10.1-15.8-19.5-24.9-28.2l53.8-56.5C636.8,207.3,648.2,220.1,658.4,233.7z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_17_",
      cx: "582.925",
      cy: "621.2",
      r: "42.9118",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4464"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st37",
    attrs: {
      d: "M624.5,195.6L570.7,252c-9.1-8.7-18.9-16.7-29.4-23.8l43.6-64.5C599,173.2,612.3,183.9,624.5,195.6z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_18_",
      cx: "546.56",
      cy: "645.575",
      r: "41.6642",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st38",
    attrs: {
      d: "M584.9,163.7l-43.6,64.5c-10.5-7.1-21.5-13.4-33.1-18.6l32.2-70.8C556,145.8,570.8,154.1,584.9,163.7\n                    C584.9,163.6,584.9,163.6,584.9,163.7z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_19_",
      cx: "506.315",
      cy: "663.485",
      r: "39.3389",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "4.020000e-02"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4686"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st39",
    attrs: {
      d: "M540.4,138.7l-32.2,70.8c-11.5-5.3-23.5-9.6-36-12.8l19.7-75.1C508.7,125.9,524.9,131.7,540.4,138.7z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_20_",
      cx: "462.9",
      cy: "674.27",
      r: "36.0615",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st40",
    attrs: {
      d: "M491.9,121.6l-19.7,75.1c-12.4-3.3-25.2-5.5-38.4-6.6l7-77.2C458.3,114.3,475.4,117.3,491.9,121.6\n                    C491.9,121.6,491.9,121.6,491.9,121.6z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_21_",
      cx: "415.24",
      cy: "678.115",
      r: "33.0715",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#4C8841"
    },
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#337C2E"
    },
    attrs: {
      offset: "0.3139"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#006406"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st41",
    attrs: {
      d: "M440.8,112.8l-7,77.2c-6.3-0.5-12.8-0.8-19.2-0.8c-6.3,0-12.5,0.3-18.6,0.8l-6.4-77.2c0,0,0.1,0,0.2,0\n                    c8.3-0.7,16.8-1,25.3-1c8.6,0,17.1,0.4,25.5,1.1C440.7,112.8,440.8,112.8,440.8,112.8z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_22_",
      cx: "367.455",
      cy: "674.43",
      r: "35.8056",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "4.020000e-02"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4686"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st42",
    attrs: {
      d: "M396,190c-13,1-25.6,3.2-37.9,6.4l-19.3-75c0,0,0,0,0,0c16.4-4.3,33.4-7.1,50.8-8.6L396,190z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_23_",
      cx: "323.92",
      cy: "663.66",
      r: "39.3953",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st43",
    attrs: {
      d: "M358.2,196.4c-12.7,3.3-24.9,7.6-36.6,12.9l-31.8-70.5c15.7-7.1,32.2-13,49.2-17.4L358.2,196.4z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_24_",
      cx: "283.4401",
      cy: "645.725",
      r: "41.4058",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "4.020000e-02"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4686"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st44",
    attrs: {
      d: "M321.5,209.3c-11.5,5.2-22.6,11.4-33,18.5l-43.2-64.1c14-9.5,28.8-17.8,44.3-24.8L321.5,209.3z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_25_",
      cx: "246.77",
      cy: "621.17",
      r: "43.0022",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st45",
    attrs: {
      d: "M288.5,227.8c-10.7,7.2-20.7,15.4-30,24.3L205,196.3c12.5-12,26-22.9,40.4-32.6L288.5,227.8z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_26_",
      cx: "214.975",
      cy: "590.68",
      r: "42.8088",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "4.020000e-02"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4686"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st46",
    attrs: {
      d: "M258.5,252.1c-9.1,8.7-17.5,18.2-25,28.4l-62.1-46.1c10.1-13.6,21.4-26.3,33.6-38L258.5,252.1z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_27_",
      cx: "189.005",
      cy: "555.37",
      r: "41.9973",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st47",
    attrs: {
      d: "M233.5,280.4c-7.6,10.2-14.4,21.1-20.1,32.6l-68.9-35.2c7.8-15.3,16.8-29.8,26.9-43.5L233.5,280.4z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_28_",
      cx: "169.425",
      cy: "516.49",
      r: "39.6096",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "4.020000e-02"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4686"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st48",
    attrs: {
      d: "M213.4,313c-5.5,11-10.2,22.4-14,34.3l-73.9-23c5-16,11.4-31.5,18.9-46.3c0-0.1,0.1-0.2,0.1-0.2L213.4,313z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_29_",
      cx: "156.84",
      cy: "474.285",
      r: "36.991",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st49",
    attrs: {
      d: "M199.4,347.3c-3.8,12.2-6.6,24.9-8.3,37.9l-76.8-10c2.3-17.5,6.1-34.5,11.2-50.8L199.4,347.3z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_30_",
      cx: "151.355",
      cy: "428.5201",
      r: "33.3083",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "4.020000e-02"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4686"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st50",
    attrs: {
      d: "M189.1,414.8c0,2.8,0,5.5,0.2,8.3l-77.5,2.8c-0.1-3.5-0.2-7-0.2-10.6c0-13.6,0.9-27,2.6-40.1l76.8,10\n                    C189.8,394.8,189.1,404.7,189.1,414.8z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_31_",
      cx: "152.955",
      cy: "378.325",
      r: "35.0492",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st51",
    attrs: {
      d: "M194.1,462l-75.9,16.4c-3.6-17-5.8-34.4-6.4-52.3c0-0.1,0-0.2,0-0.2l77.5-2.8\n                    C189.8,436.4,191.4,449.4,194.1,462z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_32_",
      cx: "161.78",
      cy: "333.925",
      r: "38.6959",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4464"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st52",
    attrs: {
      d: "M205.3,498.9l-72,29.4c0-0.1-0.1-0.2-0.1-0.3c-6.4-15.9-11.4-32.5-15-49.6l75.9-16.4\n                    C196.8,474.7,200.6,487,205.3,498.9z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_33_",
      cx: "178.025",
      cy: "292.705",
      r: "41.2262",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st53",
    attrs: {
      d: "M222.7,533.2l-66.4,40.7c-8.9-14.4-16.6-29.7-22.9-45.6l72-29.4C210.2,510.8,216,522.3,222.7,533.2z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_34_",
      cx: "200.68",
      cy: "255.24",
      r: "42.5511",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4464"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st54",
    attrs: {
      d: "M245.1,563.4l-58.9,51c-11-12.7-21-26.2-29.8-40.6l66.4-40.7C229.3,543.9,236.8,554,245.1,563.4z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_35_",
      cx: "229.595",
      cy: "221.925",
      r: "43.5852",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st55",
    attrs: {
      d: "M273,590.3l-49.3,60.5c-13.5-11-26.1-23.1-37.5-36.2c0,0-0.1-0.1-0.1-0.2l58.9-51\n                    C253.6,573.1,263,582.1,273,590.3z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_36_",
      cx: "264.08",
      cy: "194.14",
      r: "42.5244",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#333333"
    },
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#1A1A1A"
    },
    attrs: {
      offset: "0.4464"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st56",
    attrs: {
      d: "M304.4,611.5l-38.6,68c-14.8-8.4-28.8-18-41.9-28.6c0,0,0,0-0.1-0.1l49.3-60.5\n                    C282.9,598.2,293.3,605.3,304.4,611.5z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_37_",
      cx: "302.71",
      cy: "172.625",
      r: "41.1094",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "whell-ic-cell-red s5",
    attrs: {
      offset: "0"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s4",
    attrs: {
      offset: "0.2342"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s3",
    attrs: {
      offset: "0.5295"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s2",
    attrs: {
      offset: "0.7941"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "whell-ic-cell-red s1",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st57",
    attrs: {
      d: "M339.7,627.5l-26.3,73.8c-16.5-5.9-32.4-13.1-47.4-21.7c-0.1,0-0.1-0.1-0.2-0.1l38.6-68\n                    C315.6,617.8,327.4,623.2,339.7,627.5z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_38_",
      cx: "414.64",
      cy: "414.27",
      r: "225.5",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "circle-inner-gradient g1",
    attrs: {
      offset: "0.8945"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "circle-inner-gradient g2",
    attrs: {
      offset: "0.901"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "circle-inner-gradient g3",
    attrs: {
      offset: "0.9166"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "circle-inner-gradient g4",
    attrs: {
      offset: "0.9387"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "circle-inner-gradient g5",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st58",
    attrs: {
      d: "M638.2,385.3c-1.7-13-4.5-25.5-8.3-37.7c-3.7-12-8.4-23.5-14-34.5c-5.8-11.5-12.6-22.5-20.3-32.8\n                    c-7.5-10.1-15.8-19.5-24.9-28.2c-9.1-8.7-18.9-16.7-29.4-23.8c-10.5-7.1-21.5-13.4-33.1-18.6c-11.5-5.3-23.5-9.6-36-12.8\n                    c-12.4-3.3-25.2-5.5-38.4-6.6c-6.3-0.5-12.8-0.8-19.2-0.8c-6.3,0-12.5,0.3-18.6,0.8c-13,1-25.6,3.2-37.9,6.4\n                    c-12.7,3.3-24.9,7.6-36.6,12.9c-11.5,5.2-22.6,11.4-33,18.5c-10.7,7.2-20.7,15.4-30,24.3c-9.1,8.7-17.5,18.2-25,28.4\n                    c-7.6,10.2-14.4,21.1-20.1,32.6c-5.5,11-10.2,22.4-14,34.3c-3.8,12.2-6.6,24.9-8.3,37.9c-1.3,9.7-1.9,19.6-1.9,29.6\n                    c0,2.8,0,5.5,0.2,8.3c0.5,13.3,2.1,26.3,4.8,38.9c2.7,12.7,6.5,25,11.3,36.9c4.8,12,10.6,23.4,17.3,34.3\n                    c6.6,10.7,14.1,20.8,22.4,30.2c8.5,9.7,17.9,18.7,28,26.9c9.8,7.9,20.3,15,31.3,21.3c11.2,6.3,23,11.7,35.3,16\n                    c12,4.2,24.4,7.5,37.1,9.6c12.3,2.1,24.9,3.2,37.8,3.2h0.5c13.3,0,26.2-1.2,38.8-3.4c12.4-2.2,24.5-5.4,36.2-9.5\n                    c12.2-4.3,23.9-9.7,35-16c11.2-6.3,21.7-13.5,31.6-21.5c9.9-8.1,19.2-17,27.6-26.6c8.4-9.6,16-19.9,22.7-30.8\n                    c6.7-10.9,12.4-22.4,17.2-34.3c4.6-11.6,8.3-23.8,11-36.3c2.6-12.4,4.2-25.2,4.7-38.2c0.1-2.9,0.2-5.8,0.2-8.8\n                    C640.1,404.8,639.5,394.9,638.2,385.3z M414.6,511.8c-53.6,0-97-43.4-97-97s43.4-97,97-97s97,43.4,97,97S468.2,511.8,414.6,511.8z"
    }
  }), _vm._v(" "), _c("circle", {
    staticClass: "st59",
    attrs: {
      cx: "414.6",
      cy: "414.8",
      r: "97"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M408.6,42v-1.5c0-1.3,0.2-2.3,0.6-3c0.4-0.8,1-1.4,1.8-1.9c0.3-0.2,0.6-0.3,0.9-0.4c0.3-0.1,0.7-0.2,1.1-0.3\n                    s0.9-0.1,1.5-0.1c0.6,0,1.2,0,2,0c1,0,1.8,0,2.5,0.1c0.7,0,1.2,0.1,1.7,0.2c0.5,0.1,0.9,0.3,1.2,0.5c0.3,0.2,0.7,0.4,1,0.7\n                    c0.8,0.8,1.3,1.8,1.4,3.1c0,0.3,0.1,0.6,0.1,0.9c0,0.2,0,0.8,0,1.7l0,25c0,0.7,0,1.2,0,1.6s0,0.8-0.1,1.1c0,0.3-0.1,0.5-0.1,0.7\n                    c-0.1,0.2-0.1,0.4-0.2,0.6c-0.3,0.7-0.7,1.2-1.3,1.7c-0.6,0.5-1.2,0.8-2,1c-0.4,0.1-1,0.2-1.6,0.3c-0.6,0.1-1.5,0.1-2.6,0.1\n                    c-0.8,0-1.5,0-2,0c-0.6,0-1.1-0.1-1.5-0.1c-0.4-0.1-0.8-0.2-1.1-0.3c-0.3-0.1-0.6-0.2-0.9-0.4c-0.8-0.5-1.4-1.1-1.8-1.9\n                    c-0.4-0.8-0.6-1.8-0.5-3V67L408.6,42z M417.6,43v-0.8c0-0.7-0.1-1.3-0.3-1.6c-0.2-0.3-0.5-0.4-0.9-0.4c-0.6,0-0.9,0.3-1.1,1\n                    c0,0.2-0.1,0.4-0.1,0.6c0,0.3,0,0.7,0,1.2l0,23.1c0,0.7,0,1.1,0,1.4c0,0.2,0,0.4,0.1,0.6c0.2,0.6,0.5,0.9,1.1,0.9\n                    c0.8,0,1.2-0.7,1.2-2.1v-0.8L417.6,43z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M463.2,60.9l-1.2,8.8l0,0.3c-0.2,1.3,0.1,2,0.9,2.1s1.3-0.5,1.4-1.8l0-0.2l1.2-8.8l0.1-0.4\n                    c0.2-1.2-0.3-1.8-1.5-1.9l-0.3-0.1l-1.7-0.2l0.7-5.2l1.4,0.2c1,0.1,1.7,0.1,2-0.1c0.3-0.2,0.5-0.8,0.6-1.8l0.1-0.5l0.7-5.2l0.1-0.6\n                    c0.2-1.2-0.2-1.8-0.9-1.9c-0.8-0.1-1.3,0.5-1.4,1.8l-0.1,0.5l-0.8,5.8l-6.6-0.9l0.8-6.2l0.1-1c0.2-1.4,0.4-2.5,0.8-3.2\n                    s0.9-1.3,1.7-1.8c0.8-0.5,2-0.7,3.3-0.6c0.2,0,0.6,0,1,0.1c0.5,0.1,1,0.1,1.8,0.2c0.9,0.1,1.7,0.3,2.4,0.4c0.7,0.1,1.2,0.3,1.7,0.4\n                    c0.5,0.2,0.8,0.4,1.1,0.6s0.6,0.5,0.9,0.8c0.5,0.6,0.8,1.3,0.9,2c0.1,0.7,0.1,1.7-0.1,3.1l-0.1,0.8l-0.7,5.2l-0.1,0.6\n                    c-0.2,1.4-0.5,2.5-1,3.1c-0.5,0.7-1.3,1.2-2.5,1.6c1,0.7,1.7,1.5,2,2.3s0.3,2,0.1,3.6l-1.1,8.3l-0.1,0.9c-0.3,1.6-0.6,2.7-1,3.5\n                    s-1.1,1.3-2.1,1.7c-0.3,0.1-0.6,0.2-0.9,0.3c-0.3,0.1-0.7,0.1-1.1,0.1c-0.4,0-0.9,0-1.5-0.1c-0.6-0.1-1.3-0.1-2.1-0.3\n                    c-1.7-0.2-2.9-0.5-3.7-0.8c-0.8-0.3-1.5-0.7-2-1.2c-0.6-0.6-1-1.3-1.1-2.1c-0.2-0.7-0.2-1.7,0-2.9l0.1-0.6l1.3-9.8L463.2,60.9z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M473.7,72.7l11.7-15.9c0.5-0.6,0.7-1,0.8-1.2l0.2-1.1l1-5.3l0.1-0.4c0.2-1.1-0.1-1.8-0.8-1.9\n                    c-0.8-0.1-1.3,0.3-1.5,1.3l-0.1,0.4l-1.2,6.2l-6.5-1.3l1.3-6.9l0.2-1c0.2-1.2,0.7-2.2,1.2-2.9c0.6-0.7,1.4-1.1,2.5-1.4\n                    c0.5-0.1,1.2-0.2,1.8-0.1c0.7,0.1,1.6,0.2,2.9,0.4c0.9,0.2,1.7,0.3,2.4,0.5c0.7,0.1,1.2,0.3,1.6,0.5c0.4,0.2,0.8,0.4,1.1,0.6\n                    c0.3,0.2,0.5,0.4,0.8,0.7c0.6,0.7,1,1.4,1.1,2.3s0,2-0.2,3.4l-1,5.3c-0.3,1.5-0.6,2.6-1,3.4c-0.4,0.8-0.9,1.8-1.6,2.8l-10.2,13.8\n                    l8.7,1.7l-1,5.2l-15.3-2.9L473.7,72.7z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M527.9,62.8l-3.6-1.2l1.6-5c1.6,0.3,2.9,0.2,3.8-0.4c1-0.6,1.9-1.6,2.6-3.1l5,1.6l-12.1,37.2L519,90\n                    L527.9,62.8z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M540.2,80.1l-3.1,8.2c-0.3,0.8-0.4,1.4-0.4,1.7s0.3,0.7,0.7,0.8c0.4,0.1,0.7,0.1,1-0.1s0.5-0.7,0.8-1.4\n                    l0.1-0.2l4.9-13c0.3-0.7,0.3-1.1,0.3-1.5s-0.3-0.6-0.7-0.7c-0.7-0.3-1.3,0-1.5,0.8l-0.2,0.5l-0.5,1.3l-6.2-2.3l6.7-17.8l14.6,5.5\n                    l-1.9,4.9l-8.4-3.2l-2.4,6.5c1.4-0.7,2.8-0.8,4.2-0.3c1.5,0.6,2.5,1.6,2.9,3c0.4,1.4,0.3,3.1-0.5,5.1l-0.2,0.6l-5.1,13.7l-0.3,0.9\n                    c-0.8,2.2-2,3.4-3.5,3.7c-0.7,0.2-1.5,0.2-2.3,0.1s-1.9-0.5-3.4-1.1c-0.7-0.3-1.4-0.5-1.9-0.7c-0.5-0.2-1-0.4-1.3-0.6\n                    c-0.4-0.2-0.7-0.4-1-0.6c-0.3-0.2-0.5-0.4-0.7-0.7c-1.2-1.4-1.5-3.1-0.7-5.3l0.3-0.9l3.5-9.3L540.2,80.1z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M585.5,86.8l-3.3-1.8l2.5-4.7c1.5,0.6,2.8,0.7,3.8,0.3c1.1-0.4,2.1-1.2,3.1-2.6l4.7,2.5L578,115.1l-5.9-3.1\n                    L585.5,86.8z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M593.6,108.2l-2.9,4.9l-0.2,0.3c-0.5,0.8-0.7,1.4-0.8,1.8c0,0.4,0.2,0.7,0.5,0.9s0.7,0.2,1,0s0.7-0.7,1.1-1.4\n                    l0.2-0.4l4.6-7.8c-1,0.2-1.7,0.3-2.3,0.2c-0.5-0.1-1.1-0.3-1.7-0.6c-1.5-0.9-2.3-2.1-2.6-3.7c-0.1-0.7,0-1.4,0.1-2.1\n                    c0.2-0.7,0.5-1.5,1.1-2.4l0.3-0.6l5.2-8.9c0.7-1.3,1.3-2.1,1.8-2.6c0.5-0.5,1.2-0.8,1.9-1c0.4-0.1,0.8-0.2,1.3-0.2\n                    c0.4,0,0.8,0.1,1.3,0.2c0.5,0.1,1,0.4,1.6,0.7c0.6,0.3,1.3,0.7,2.2,1.2c1.4,0.8,2.4,1.5,3,1.9c0.6,0.5,1,1,1.3,1.6\n                    c0.4,0.9,0.6,1.7,0.5,2.6s-0.5,1.8-1.2,3l-0.4,0.7l-13,22.2l-0.3,0.5c-0.6,1.1-1.2,1.9-1.8,2.4c-0.5,0.5-1.2,0.8-1.9,0.9\n                    c-0.9,0.2-1.7,0.1-2.5-0.1s-1.9-0.7-3.2-1.5c-1-0.6-1.7-1-2.3-1.4c-0.6-0.4-1.1-0.8-1.5-1.1s-0.7-0.7-0.9-1\n                    c-0.2-0.3-0.4-0.7-0.5-1.1c-0.2-0.8-0.3-1.5-0.1-2.2c0.1-0.7,0.5-1.5,1-2.5l0.2-0.4l3.8-6.4L593.6,108.2z M598.2,100.3l-0.1,0.1\n                    c-0.7,1.2-0.7,2,0,2.4c0.4,0.2,0.7,0.2,1,0.1c0.3-0.2,0.7-0.6,1.1-1.3l4.5-7.7c0.4-0.7,0.6-1.2,0.6-1.6c0-0.4-0.2-0.6-0.5-0.9\n                    c-0.7-0.4-1.4,0-2,1.2l-0.1,0.1L598.2,100.3z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "m 632.89933,141.20953 -6.7,-5.2 3.1,-3.9 20,-17.1 7.4,5.8 -15.7,20.1 1.6,1.2 -3.3,4.2 -1.6,-1.2 -5.2,6.6 -4.9,-3.8 z m 3.3,-4.1 9.4,-12.1 -11.3,10.6 z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M664.3,172.8l18.8-6c0.8-0.2,1.2-0.4,1.3-0.5l0.8-0.8l4-3.7l0.3-0.3c0.8-0.8,1-1.5,0.5-2\n                    c-0.5-0.6-1.2-0.5-2,0.2l-0.3,0.3l-4.6,4.3l-4.5-4.9l5.2-4.8l0.8-0.7c0.9-0.9,1.8-1.4,2.7-1.6c0.9-0.2,1.8-0.1,2.8,0.3\n                    c0.5,0.2,1,0.5,1.5,1c0.5,0.4,1.2,1.1,2.1,2.1c0.6,0.7,1.2,1.3,1.6,1.8s0.8,0.9,1,1.3c0.2,0.4,0.4,0.8,0.5,1.1\n                    c0.1,0.3,0.2,0.7,0.2,1.1c0.1,0.9,0,1.7-0.4,2.5c-0.4,0.7-1.1,1.6-2.2,2.6l-4,3.7c-1.1,1-2,1.8-2.8,2.2c-0.8,0.5-1.8,0.9-2.9,1.3\n                    l-16.4,5.1l6,6.4l-3.9,3.6L659.9,177L664.3,172.8z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M695.5,173.6l-2.4-2.9l4-3.4c1.2,1.1,2.3,1.7,3.5,1.7c1.1,0,2.4-0.4,3.9-1.3l3.4,4L678,197.2l-4.3-5\n                    L695.5,173.6z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M706.7,225.8l19.6-2.2c0.8-0.1,1.3-0.2,1.4-0.3l1-0.6l4.6-2.8l0.3-0.2c1-0.6,1.2-1.2,0.8-1.9\n                    c-0.4-0.7-1.1-0.7-2-0.2l-0.3,0.2l-5.3,3.3l-3.5-5.6l6-3.7l0.9-0.6c1.1-0.7,2-1,3-1s1.8,0.3,2.7,0.9c0.5,0.3,0.9,0.7,1.3,1.3\n                    c0.4,0.5,1,1.3,1.6,2.4c0.5,0.8,0.9,1.5,1.2,2.1c0.3,0.6,0.6,1.1,0.7,1.5c0.2,0.4,0.3,0.8,0.3,1.2s0,0.7,0,1.1\n                    c-0.1,0.9-0.4,1.7-0.9,2.4c-0.5,0.6-1.4,1.4-2.7,2.1l-4.6,2.8c-1.3,0.8-2.3,1.3-3.2,1.6s-1.9,0.5-3.1,0.7l-17,1.8l4.6,7.5l-4.5,2.8\n                    l-8.2-13.3L706.7,225.8z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M729.4,266.3l19.7,0.5c0.8,0,1.3,0,1.5-0.1l1-0.5l4.9-2.2l0.4-0.2c1-0.5,1.4-1,1.1-1.8\n                    c-0.3-0.7-1-0.9-1.9-0.4l-0.4,0.2l-5.7,2.6l-2.7-6.1l6.4-2.9l1-0.4c1.1-0.5,2.2-0.7,3.1-0.6s1.7,0.5,2.5,1.2\n                    c0.4,0.4,0.8,0.8,1.2,1.4c0.3,0.6,0.8,1.5,1.3,2.6c0.4,0.9,0.7,1.6,1,2.2s0.4,1.1,0.5,1.6s0.1,0.9,0.1,1.2s0,0.7-0.1,1.1\n                    c-0.2,0.9-0.6,1.6-1.2,2.2c-0.6,0.6-1.6,1.2-2.9,1.8l-4.9,2.2c-1.4,0.6-2.5,1-3.4,1.2s-2,0.3-3.2,0.3l-17.1-0.5l3.6,8l-4.8,2.1\n                    l-6.4-14.3L729.4,266.3z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M748.8,285.9l-8.2,3.1c-0.8,0.3-1.3,0.6-1.5,0.9c-0.3,0.3-0.3,0.6-0.2,1s0.4,0.6,0.8,0.7\n                    c0.3,0,0.9-0.1,1.6-0.3l0.2-0.1l13-5c0.7-0.3,1.1-0.5,1.3-0.8c0.2-0.3,0.2-0.6,0.1-1c-0.3-0.7-0.8-0.9-1.6-0.6l-0.5,0.2l-1.3,0.5\n                    l-2.4-6.2l17.8-6.8l5.6,14.6l-4.9,1.9l-3.2-8.4l-6.5,2.5c1.5,0.6,2.4,1.6,3,3c0.6,1.5,0.5,2.9-0.3,4.2c-0.8,1.3-2.2,2.3-4.2,3\n                    l-0.6,0.2l-13.7,5.2l-0.9,0.4c-2.2,0.8-3.9,0.8-5.1-0.2c-0.6-0.4-1.1-1-1.5-1.6c-0.4-0.7-0.9-1.8-1.5-3.2c-0.3-0.7-0.5-1.4-0.7-1.9\n                    s-0.3-1-0.4-1.4c-0.1-0.4-0.2-0.8-0.2-1.1c0-0.4,0-0.7,0-1c0.2-1.8,1.4-3.2,3.5-4l0.9-0.4l9.3-3.5L748.8,285.9z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M773.8,324.2l-0.9-3.6l5.1-1.3c0.6,1.5,1.3,2.5,2.3,3.1c1,0.5,2.3,0.8,4,0.6l1.3,5.1l-38,9.3l-1.6-6.4\n                    L773.8,324.2z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M783.1,341.3l-1.5-7.6l5.2-1l2.8,14l-6.6,1.3l-33.4-1.6l-1.3-6.6L783.1,341.3z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M771.8,389.3l-8.8,0.6l-0.3,0c-1.3,0.1-1.9,0.5-1.8,1.3c0,0.8,0.7,1.1,2.1,1l0.2,0l8.8-0.6l0.4,0\n                    c1.2-0.1,1.7-0.7,1.6-1.8l0-0.4l-0.1-1.7l5.3-0.4l0.1,1.4c0.1,1.1,0.2,1.7,0.5,1.9c0.3,0.2,0.9,0.3,1.8,0.3l0.5,0l5.2-0.4l0.6,0\n                    c1.2-0.1,1.7-0.5,1.7-1.3s-0.7-1.1-2-1l-0.5,0l-5.9,0.4l-0.5-6.6l6.2-0.4l1-0.1c1.4-0.1,2.5-0.1,3.3,0.1s1.4,0.7,2.1,1.3\n                    c0.6,0.7,1.1,1.8,1.3,3.1c0,0.2,0.1,0.6,0.1,1s0.1,1,0.1,1.8c0.1,0.9,0.1,1.7,0.1,2.4c0,0.7,0,1.2-0.1,1.7\n                    c-0.1,0.5-0.2,0.9-0.4,1.2c-0.2,0.4-0.4,0.7-0.6,1c-0.5,0.6-1.1,1.1-1.7,1.3c-0.7,0.2-1.7,0.4-3.1,0.6l-0.8,0l-5.3,0.4l-0.6,0\n                    c-1.4,0.1-2.5,0-3.3-0.4s-1.4-1.1-2.1-2.1c-0.5,1.2-1.1,2-1.8,2.4s-1.9,0.7-3.5,0.8l-8.3,0.6l-0.9,0.1c-1.6,0.1-2.8,0-3.6-0.3\n                    s-1.5-0.9-2.1-1.7c-0.2-0.3-0.3-0.5-0.5-0.8c-0.1-0.3-0.3-0.6-0.3-1c-0.1-0.4-0.2-0.9-0.2-1.5c-0.1-0.6-0.1-1.3-0.2-2.1\n                    c-0.1-1.7-0.1-2.9,0-3.8c0.1-0.8,0.4-1.6,0.8-2.2c0.5-0.7,1.1-1.2,1.8-1.5c0.7-0.3,1.6-0.5,2.8-0.6l0.6,0l9.9-0.7L771.8,389.3z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M764.8,409.4l-0.1-8.5l5-0.1l25.9,4.9l0.2,9.4l-25.5,0.4l0,2l-5.3,0.1l0-2l-8.4,0.1l-0.1-6.2L764.8,409.4z\n                    M770.1,409.3l15.3-0.3l-15.4-2.1L770.1,409.3z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "m 778.26032,461.49259 6.4,0.8 c 1.2,0.1 1.8,-0.2 1.9,-1 0.1,-0.8 -0.4,-1.2 -1.4,-1.3 h -0.4 l -9.5,-1.1 c 0.5,0.8 0.8,1.4 0.9,2 0.2,0.6 0.2,1.2 0.1,1.9 -0.2,1.6 -0.9,2.8 -2.2,3.6 -1.3,0.8 -3,1 -5.1,0.8 l -0.5,-0.1 -10.1,-1.2 -1,-0.1 c -2.6,-0.3 -4.1,-1.5 -4.7,-3.6 -0.1,-0.3 -0.1,-0.6 -0.2,-0.8 0,-0.3 0,-0.6 0,-0.9 0,-0.4 0,-0.8 0.1,-1.3 0,-0.5 0.1,-1.2 0.2,-1.9 0.1,-0.9 0.2,-1.6 0.3,-2.2 0.1,-0.6 0.2,-1.1 0.3,-1.5 0.1,-0.4 0.3,-0.8 0.5,-1.1 0.2,-0.3 0.4,-0.6 0.7,-0.8 0.7,-0.7 1.4,-1.1 2.1,-1.3 0.7,-0.2 1.8,-0.2 3.1,0 l 0.8,0.1 24.6,2.9 1.2,0.1 c 1.8,0.2 3,0.6 3.8,1.1 0.8,0.5 1.4,1.4 1.7,2.6 0.1,0.3 0.2,0.5 0.2,0.8 0,0.3 0,0.6 0,0.9 0,0.3 0,0.8 -0.1,1.3 0,0.5 -0.1,1.1 -0.2,1.9 -0.2,1.6 -0.4,2.8 -0.6,3.5 -0.2,0.7 -0.5,1.4 -0.9,1.9 -0.6,0.7 -1.3,1.2 -2.2,1.5 -0.9,0.3 -1.9,0.3 -3.2,0.2 l -0.5,-0.1 -7,-0.8 z m -9,-1 c 0.8,0.1 1.3,0.1 1.6,-0.1 0.3,-0.2 0.5,-0.4 0.5,-0.8 0,-0.4 -0.1,-0.8 -0.3,-1 -0.2,-0.2 -0.8,-0.4 -1.6,-0.5 l -8.9,-1 c -0.9,-0.1 -1.6,-0.1 -2,0 -0.4,0.1 -0.6,0.4 -0.6,0.8 0,0.5 0.1,0.8 0.4,1 0.3,0.2 0.9,0.3 1.8,0.5 h 0.4 z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "m 750.81612,500.34922 15.2,12.6 c 0.6,0.5 1,0.8 1.2,0.8 l 1.1,0.3 5.2,1.3 0.4,0.1 c 1.1,0.3 1.8,0 1.9,-0.7 0.2,-0.8 -0.2,-1.3 -1.2,-1.5 l -0.4,-0.1 -6.1,-1.6 1.7,-6.4 6.8,1.8 1,0.3 c 1.2,0.3 2.1,0.8 2.8,1.4 0.7,0.6 1.1,1.5 1.2,2.5 0.1,0.5 0.1,1.2 0,1.8 -0.1,0.7 -0.3,1.6 -0.6,2.9 -0.2,0.9 -0.4,1.7 -0.6,2.3 -0.2,0.6 -0.4,1.2 -0.6,1.6 -0.2,0.4 -0.4,0.8 -0.6,1 -0.2,0.2 -0.5,0.5 -0.8,0.8 -0.7,0.6 -1.5,0.9 -2.3,1 -0.8,0.1 -2,-0.1 -3.4,-0.5 l -5.2,-1.3 c -1.4,-0.4 -2.6,-0.8 -3.4,-1.2 -0.8,-0.4 -1.7,-1 -2.7,-1.8 l -13.1,-11.1 -2.2,8.5 -5.1,-1.3 3.9,-15.1 z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "m 770.31612,533.94922 2.3,-7.4 5,1.6 -4.3,13.6 -6.4,-2 -28.5,-17.5 2,-6.4 z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M751.4,567.6l1.5-3.4l4.8,2.2c-0.5,1.5-0.5,2.8-0.1,3.9c0.4,1,1.4,2,2.8,3l-2.2,4.8l-35.7-16.1l2.7-6\n                    L751.4,567.6z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M732.8,578l-7.9-4l-0.3-0.1c-1.2-0.6-1.9-0.5-2.3,0.2c-0.3,0.7,0.1,1.3,1.3,2l0.2,0.1l7.9,4l0.4,0.2\n                    c1,0.5,1.8,0.3,2.3-0.8l0.2-0.3l0.8-1.5l4.7,2.4l-0.6,1.3c-0.5,0.9-0.7,1.6-0.6,1.9c0.1,0.3,0.6,0.7,1.5,1.2l0.5,0.2l4.7,2.4\n                    l0.5,0.3c1,0.5,1.8,0.4,2.1-0.3c0.3-0.7,0-1.3-1.2-1.9l-0.4-0.2l-5.2-2.7l3-5.9l5.5,2.8l0.9,0.5c1.3,0.6,2.2,1.2,2.8,1.8\n                    c0.5,0.6,0.9,1.3,1.1,2.2c0.2,1,0,2.1-0.5,3.3c-0.1,0.2-0.2,0.6-0.4,1c-0.2,0.4-0.5,0.9-0.8,1.6c-0.4,0.8-0.8,1.5-1.1,2.1\n                    c-0.3,0.6-0.7,1-1,1.4s-0.6,0.7-0.9,0.9c-0.3,0.2-0.7,0.4-1.1,0.6c-0.8,0.3-1.5,0.3-2.2,0.2c-0.7-0.1-1.7-0.5-2.9-1.1l-0.7-0.3\n                    l-4.7-2.4l-0.5-0.3c-1.3-0.7-2.2-1.3-2.6-2c-0.5-0.7-0.7-1.7-0.7-2.9c-1,0.8-2,1.1-2.8,1.1s-2-0.3-3.4-1.1l-7.4-3.8l-0.8-0.4\n                    c-1.4-0.8-2.4-1.5-2.9-2.1s-0.9-1.5-0.9-2.5c0-0.3,0-0.6,0-1c0-0.3,0.1-0.7,0.2-1.1s0.3-0.9,0.6-1.4c0.3-0.5,0.6-1.2,0.9-1.9\n                    c0.8-1.5,1.4-2.6,1.9-3.2c0.5-0.7,1.1-1.1,1.8-1.5c0.8-0.3,1.6-0.5,2.3-0.4c0.8,0.1,1.7,0.4,2.7,0.9l0.5,0.3l8.8,4.5L732.8,578z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M710.5,616.2l-7.3-5L703,611c-1.1-0.7-1.8-0.8-2.3-0.1c-0.4,0.6-0.1,1.3,1,2.1l0.2,0.1l7.3,5l0.3,0.2\n                    c1,0.7,1.8,0.5,2.4-0.4l0.2-0.3l1-1.4l4.3,3l-0.8,1.2c-0.6,0.9-0.9,1.5-0.8,1.8c0,0.3,0.5,0.8,1.3,1.3l0.4,0.3l4.3,3l0.5,0.3\n                    c1,0.7,1.7,0.7,2.1,0c0.4-0.7,0.1-1.3-0.9-2.1l-0.4-0.3l-4.8-3.3l3.8-5.5l5.1,3.5l0.8,0.6c1.2,0.8,2,1.5,2.5,2.1s0.7,1.4,0.8,2.3\n                    c0,1-0.3,2.1-0.9,3.2c-0.1,0.2-0.3,0.5-0.5,0.9s-0.6,0.9-1,1.4c-0.5,0.8-1,1.4-1.4,2s-0.8,0.9-1.1,1.3s-0.7,0.6-1,0.7\n                    c-0.3,0.2-0.7,0.3-1.1,0.4c-0.8,0.2-1.5,0.2-2.2-0.1c-0.7-0.2-1.6-0.7-2.8-1.5l-0.6-0.4l-4.3-3l-0.5-0.3c-1.2-0.8-2-1.6-2.3-2.3\n                    c-0.4-0.7-0.5-1.7-0.3-3c-1.1,0.6-2.1,0.8-2.9,0.8s-1.9-0.6-3.2-1.5l-6.9-4.7l-0.8-0.5c-1.3-0.9-2.2-1.8-2.6-2.5\n                    c-0.5-0.7-0.7-1.6-0.6-2.7c0-0.3,0.1-0.6,0.1-0.9c0.1-0.3,0.2-0.7,0.4-1s0.4-0.8,0.8-1.3c0.3-0.5,0.7-1.1,1.2-1.8\n                    c1-1.4,1.7-2.4,2.3-2.9c0.6-0.6,1.3-1,2-1.2c0.8-0.2,1.6-0.3,2.3-0.1c0.7,0.2,1.6,0.6,2.5,1.3l0.5,0.3l8.2,5.6L710.5,616.2z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M705.2,639.3l5.1,3.9c1,0.7,1.7,0.8,2.2,0.2s0.3-1.2-0.5-1.9l-0.3-0.3l-7.5-5.8c0,0.9-0.1,1.6-0.3,2.2\n                    c-0.2,0.6-0.5,1.2-0.9,1.7c-1,1.3-2.3,1.9-3.8,1.9s-3.1-0.7-4.8-1.9l-0.4-0.3l-8-6.2l-0.8-0.7c-2-1.6-2.7-3.4-2.1-5.5\n                    c0.1-0.3,0.2-0.6,0.3-0.8c0.1-0.2,0.3-0.5,0.4-0.8c0.2-0.3,0.4-0.7,0.7-1.1c0.3-0.4,0.7-0.9,1.1-1.5c0.5-0.7,1-1.3,1.4-1.8\n                    c0.4-0.5,0.8-0.8,1.1-1.1c0.3-0.3,0.7-0.5,1-0.7s0.7-0.3,1-0.3c0.9-0.2,1.7-0.2,2.5,0s1.6,0.8,2.7,1.6l0.6,0.5l19.6,15.1l0.9,0.7\n                    c1.4,1.1,2.3,2.1,2.7,2.9c0.4,0.9,0.5,1.9,0.1,3.1c0,0.3-0.1,0.5-0.2,0.7s-0.3,0.5-0.5,0.8c-0.2,0.3-0.5,0.6-0.7,1.1\n                    c-0.3,0.4-0.7,0.9-1.1,1.5c-1,1.3-1.8,2.2-2.3,2.7s-1.1,0.9-1.8,1.2c-0.9,0.3-1.8,0.4-2.6,0.2s-1.8-0.7-2.8-1.5l-0.4-0.3l-5.6-4.3\n                    L705.2,639.3z M698,633.8c0.6,0.5,1.1,0.7,1.4,0.8s0.6-0.1,0.9-0.5c0.3-0.3,0.3-0.7,0.2-1c-0.1-0.3-0.5-0.7-1.1-1.2l-7.1-5.5\n                    c-0.7-0.6-1.3-0.9-1.7-1c-0.4-0.1-0.7,0.1-1,0.4c-0.3,0.4-0.3,0.7-0.2,1.1c0.2,0.3,0.6,0.8,1.3,1.3l0.3,0.3L698,633.8z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M679.5,673.3l2.7-2.7l3.8,3.7c-1,1.3-1.5,2.5-1.4,3.6c0,1.1,0.6,2.4,1.6,3.8l-3.7,3.8l-27.8-27.6l4.7-4.7\n                    L679.5,673.3z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M670.2,682.4l2.7-2.6l3.6,3.8c-1,1.2-1.5,2.4-1.5,3.5s0.5,2.4,1.4,3.8l-3.8,3.6l-26.8-28.5l4.8-4.5\n                    L670.2,682.4z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M626.7,702.8l-5.2-7.2l-0.2-0.2c-0.8-1-1.5-1.3-2.1-0.9c-0.6,0.5-0.6,1.2,0.2,2.3l0.1,0.2l5.2,7.2l0.2,0.3\n                    c0.7,0.9,1.5,1.1,2.4,0.4l0.3-0.2l1.4-1l3.1,4.3l-1.1,0.8c-0.8,0.6-1.3,1.1-1.4,1.4c-0.1,0.3,0.2,0.9,0.8,1.7l0.3,0.4l3.1,4.2\n                    l0.3,0.5c0.7,1,1.3,1.2,2,0.7c0.6-0.5,0.6-1.2-0.2-2.3l-0.3-0.4l-3.5-4.7l5.4-3.9l3.7,5l0.6,0.8c0.9,1.2,1.4,2.1,1.6,2.8\n                    c0.2,0.7,0.2,1.6,0,2.4c-0.3,0.9-0.9,1.8-1.9,2.7c-0.2,0.2-0.4,0.4-0.8,0.7s-0.8,0.6-1.4,1c-0.8,0.6-1.4,1-2,1.4s-1.1,0.6-1.5,0.8\n                    c-0.4,0.2-0.8,0.3-1.2,0.3c-0.4,0-0.8,0-1.2,0c-0.8-0.1-1.5-0.4-2-0.8c-0.5-0.4-1.3-1.2-2.1-2.3l-0.5-0.6l-3.1-4.3l-0.3-0.5\n                    c-0.8-1.2-1.3-2.2-1.4-3c-0.1-0.8,0.1-1.8,0.7-2.9c-1.3,0.2-2.3,0.1-3-0.3c-0.8-0.4-1.6-1.2-2.5-2.5l-4.9-6.7l-0.5-0.8\n                    c-0.9-1.3-1.5-2.4-1.7-3.2s-0.1-1.7,0.3-2.7c0.1-0.3,0.3-0.6,0.5-0.8c0.2-0.3,0.4-0.5,0.7-0.8s0.7-0.6,1.1-1c0.5-0.4,1-0.8,1.7-1.3\n                    c1.4-1,2.4-1.7,3.2-2c0.8-0.3,1.5-0.5,2.2-0.5c0.9,0,1.6,0.3,2.3,0.7c0.6,0.4,1.3,1.1,2,2l0.3,0.5l5.8,8L626.7,702.8z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M625,723.4l0.8,1.2c0.7,1.1,1.1,2,1.2,2.8c0.1,0.8-0.1,1.7-0.5,2.5c-0.1,0.3-0.3,0.5-0.5,0.8\n                    c-0.2,0.3-0.5,0.5-0.8,0.8s-0.7,0.6-1.2,0.9c-0.5,0.3-1,0.7-1.7,1.1c-0.8,0.5-1.5,1-2.1,1.3c-0.6,0.3-1.1,0.6-1.5,0.7\n                    c-0.5,0.2-0.9,0.3-1.3,0.3c-0.4,0-0.8,0-1.2,0c-1.1-0.2-2-0.8-2.9-1.8c-0.2-0.2-0.4-0.5-0.5-0.7c-0.1-0.2-0.4-0.7-0.9-1.4l-13.6-21\n                    c-0.4-0.6-0.7-1-0.9-1.4s-0.4-0.7-0.5-0.9c-0.1-0.3-0.2-0.5-0.3-0.7c-0.1-0.2-0.1-0.4-0.2-0.6c-0.1-0.7-0.1-1.4,0.1-2.1\n                    c0.2-0.7,0.6-1.4,1.1-1.9c0.3-0.3,0.7-0.7,1.2-1.1c0.5-0.4,1.2-0.9,2.2-1.5c0.7-0.4,1.2-0.8,1.7-1.1c0.5-0.3,0.9-0.5,1.3-0.7\n                    c0.4-0.2,0.7-0.3,1-0.4c0.3-0.1,0.6-0.1,1-0.1c1,0,1.8,0.1,2.5,0.6c0.7,0.4,1.4,1.2,2.1,2.2l0.8,1.2L625,723.4z M616.9,727.5\n                    l0.5,0.7c0.4,0.6,0.8,1,1.1,1.2s0.6,0.1,1-0.1c0.5-0.3,0.6-0.8,0.3-1.4c0-0.2-0.1-0.3-0.3-0.6c-0.1-0.2-0.3-0.6-0.6-1l-12.5-19.3\n                    c-0.4-0.6-0.6-0.9-0.8-1.1c-0.1-0.2-0.3-0.3-0.4-0.4c-0.5-0.4-1-0.5-1.4-0.2c-0.7,0.4-0.6,1.2,0.1,2.4l0.5,0.7L616.9,727.5z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M568.4,743.2c0.6,0,1.2,0.1,1.6,0.2c0.5,0.1,0.9,0.3,1.2,0.6c0.3,0.3,0.7,0.6,1,1.1c0.3,0.4,0.6,1,0.9,1.7\n                    l0.2,0.5l2.2,5.1l0.5,1.1c0.5,1.3,0.8,2.3,0.7,3.2c-0.1,0.9-0.4,1.8-1.1,2.6c-0.4,0.5-0.8,0.9-1.5,1.2c-0.6,0.4-1.7,0.9-3.2,1.5\n                    c-1.5,0.7-2.7,1.1-3.5,1.3c-0.8,0.2-1.5,0.2-2.2,0c-0.9-0.2-1.6-0.6-2.1-1.2c-0.6-0.6-1.1-1.5-1.7-2.8l-0.2-0.4l-2.4-5.4l-0.2-0.5\n                    c-0.5-1.2-0.7-2.2-0.6-3.1c0.1-0.9,0.5-1.8,1.2-2.7c-1.3-0.1-2.2-0.4-2.9-0.9c-0.7-0.5-1.3-1.4-1.9-2.8l-0.3-0.8l-3.3-7.5l-0.3-0.8\n                    c-0.5-1.2-0.8-2.1-0.7-2.9c0-0.8,0.3-1.6,0.8-2.4c0.2-0.3,0.4-0.6,0.6-0.8s0.5-0.5,0.9-0.7s0.8-0.5,1.4-0.8c0.6-0.3,1.3-0.6,2.1-1\n                    c1.7-0.7,3-1.2,3.8-1.3s1.8,0,2.6,0.3c0.7,0.3,1.3,0.7,1.7,1.2c0.4,0.6,0.9,1.5,1.5,2.9l3.1,7l0.5,1.1c0.3,0.7,0.5,1.3,0.7,1.9\n                    c0.2,0.5,0.2,1,0.2,1.5c0,0.5-0.2,0.9-0.4,1.3C569.1,742.2,568.8,742.6,568.4,743.2z M560.8,741l0.1,0.3c0.5,1.3,1.2,1.7,1.9,1.4\n                    c0.7-0.3,0.8-1.1,0.3-2.3l-0.1-0.3l-3.4-7.7l-0.1-0.3c-0.6-1.2-1.2-1.7-1.9-1.4c-0.7,0.3-0.8,1.1-0.3,2.3l0.1,0.2L560.8,741z\n                    M567.2,755.7l0.1,0.3c0.4,1,1,1.3,1.7,1c0.7-0.3,0.8-1,0.4-2l-0.1-0.3l-2.5-5.8l-0.1-0.3c-0.5-1-1.1-1.4-1.8-1.1\n                    c-0.8,0.3-0.9,1-0.4,2l0.1,0.3L567.2,755.7z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M518.5,746.2l-3.3,19.5c-0.2,0.8-0.2,1.3-0.1,1.4l0.3,1.1l1.5,5.2l0.1,0.4c0.3,1.1,0.8,1.5,1.6,1.3\n                    c0.8-0.2,1-0.8,0.7-1.8l-0.1-0.4l-1.7-6l6.4-1.8l1.9,6.8l0.3,1c0.3,1.2,0.4,2.2,0.2,3.1c-0.2,0.9-0.7,1.7-1.6,2.3\n                    c-0.4,0.4-1,0.7-1.6,0.9c-0.6,0.3-1.5,0.6-2.8,0.9c-0.9,0.3-1.7,0.5-2.3,0.6c-0.6,0.2-1.2,0.3-1.7,0.3c-0.5,0-0.9,0-1.2,0\n                    c-0.3,0-0.7-0.1-1.1-0.3c-0.9-0.3-1.5-0.8-2-1.5c-0.5-0.7-0.9-1.7-1.3-3.2l-1.5-5.2c-0.4-1.4-0.6-2.6-0.7-3.5s0-2,0.2-3.2l3-16.9\n                    l-8.5,2.4l-1.5-5.1l15-4.3L518.5,746.2z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M496.4,762.6l-2-8.6l-0.1-0.3c-0.3-1.3-0.8-1.8-1.6-1.6c-0.8,0.2-1,0.9-0.7,2.2l0,0.2l2,8.6l0.1,0.4\n                    c0.3,1.1,0.9,1.6,2,1.3l0.3-0.1l1.7-0.4l1.2,5.2l-1.4,0.3c-1,0.2-1.6,0.5-1.8,0.8s-0.2,0.9,0,1.9l0.1,0.5l1.2,5.1l0.1,0.6\n                    c0.3,1.2,0.8,1.6,1.5,1.5c0.8-0.2,1-0.9,0.7-2.2l-0.1-0.5l-1.3-5.7l6.5-1.5l1.4,6.1l0.2,1c0.4,1.4,0.5,2.5,0.4,3.3\n                    c-0.1,0.8-0.4,1.5-1,2.2c-0.6,0.8-1.6,1.3-2.9,1.7c-0.2,0.1-0.6,0.2-1,0.3c-0.5,0.1-1,0.2-1.7,0.4c-0.9,0.2-1.7,0.4-2.4,0.5\n                    s-1.2,0.2-1.7,0.2c-0.5,0-0.9,0-1.3-0.2c-0.4-0.1-0.7-0.3-1.1-0.5c-0.7-0.4-1.2-0.9-1.5-1.5c-0.3-0.6-0.7-1.6-1-3l-0.2-0.7\n                    l-1.2-5.2l-0.1-0.6c-0.3-1.4-0.4-2.5-0.2-3.3c0.2-0.8,0.8-1.6,1.8-2.4c-1.2-0.3-2.1-0.8-2.7-1.4c-0.5-0.6-1-1.7-1.3-3.3l-1.8-8.1\n                    l-0.2-0.9c-0.3-1.6-0.4-2.8-0.3-3.6c0.2-0.8,0.6-1.6,1.4-2.4c0.2-0.2,0.5-0.4,0.7-0.6c0.3-0.2,0.6-0.3,1-0.5\n                    c0.4-0.2,0.9-0.3,1.4-0.4c0.6-0.2,1.3-0.3,2-0.5c1.6-0.4,2.9-0.6,3.7-0.6c0.8,0,1.6,0.1,2.3,0.4c0.8,0.4,1.4,0.9,1.8,1.5\n                    s0.8,1.5,1,2.7l0.1,0.6l2.2,9.7L496.4,762.6z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M457,783l3.7-0.4l0.5,5.3c-1.6,0.3-2.7,1-3.4,1.9c-0.7,0.9-1.1,2.2-1.2,3.9l-5.3,0.5l-3.9-39l6.6-0.7L457,783\n                    z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M446,787.5l0.1,1.5c0.1,1.3-0.1,2.3-0.4,3c-0.3,0.8-0.9,1.4-1.7,1.9c-0.3,0.2-0.5,0.3-0.9,0.5\n                    s-0.7,0.2-1.1,0.3c-0.4,0.1-0.9,0.2-1.5,0.2c-0.6,0.1-1.2,0.1-2,0.1c-1,0.1-1.8,0.1-2.5,0.1c-0.7,0-1.2-0.1-1.7-0.1\n                    c-0.5-0.1-0.9-0.2-1.3-0.4c-0.4-0.2-0.7-0.4-1-0.7c-0.8-0.7-1.3-1.8-1.6-3c0-0.3-0.1-0.6-0.1-0.9c0-0.2,0-0.8-0.1-1.7l-1.4-25\n                    c0-0.7-0.1-1.2-0.1-1.6c0-0.4,0-0.8,0-1.1c0-0.3,0-0.5,0.1-0.7c0-0.2,0.1-0.4,0.2-0.6c0.2-0.7,0.6-1.3,1.2-1.8s1.2-0.9,1.9-1.1\n                    c0.4-0.1,1-0.3,1.6-0.3s1.5-0.2,2.6-0.2c0.8,0,1.5-0.1,2-0.1c0.6,0,1.1,0,1.5,0.1c0.4,0.1,0.8,0.1,1.1,0.2c0.3,0.1,0.6,0.2,0.9,0.4\n                    c0.8,0.4,1.5,1,1.9,1.8c0.4,0.7,0.7,1.7,0.7,3l0.1,1.4L446,787.5z M437,787.1l0,0.8c0,0.7,0.2,1.3,0.3,1.5c0.2,0.3,0.5,0.4,0.9,0.4\n                    c0.6,0,0.9-0.4,1-1c0-0.2,0-0.4,0-0.6c0-0.3,0-0.7,0-1.2l-1.3-23c0-0.7-0.1-1.1-0.1-1.3c0-0.2-0.1-0.4-0.1-0.6\n                    c-0.2-0.6-0.6-0.9-1.1-0.9c-0.8,0-1.1,0.8-1.1,2.1l0,0.8L437,787.1z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M384,771.9l0.9-8.8c0.1-0.8,0.1-1.4-0.1-1.8s-0.4-0.6-0.8-0.6c-0.4-0.1-0.8,0.1-1,0.4\n                    c-0.2,0.3-0.3,0.8-0.4,1.6l0,0.2l-1.5,13.8c-0.1,0.7,0,1.2,0.1,1.5c0.1,0.3,0.4,0.5,0.9,0.5c0.8,0.1,1.2-0.3,1.3-1.2l0.1-0.5\n                    l0.1-1.3l6.6,0.7l-2,18.9l-15.5-1.6l0.6-5.3l8.9,0.9l0.7-6.9c-1.2,1-2.5,1.4-4,1.3c-1.6-0.2-2.8-0.9-3.6-2.2c-0.8-1.3-1-3-0.8-5.1\n                    l0.1-0.6l1.5-14.5l0.1-1c0.2-2.3,1.1-3.8,2.5-4.5c0.7-0.4,1.4-0.6,2.2-0.6c0.8-0.1,2,0,3.5,0.2c0.8,0.1,1.5,0.2,2,0.2\n                    c0.6,0.1,1,0.2,1.5,0.3c0.4,0.1,0.8,0.2,1.1,0.3s0.6,0.3,0.9,0.5c1.5,1,2.2,2.7,2,4.9l-0.1,1l-1,9.9L384,771.9z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M341.8,754.5l-12.5,15.3c-0.5,0.6-0.8,1-0.8,1.2l-0.3,1.1l-1.3,5.3l-0.1,0.4c-0.3,1.1,0,1.8,0.7,1.9\n                    c0.8,0.2,1.3-0.2,1.5-1.3l0.1-0.4l1.5-6.1l6.4,1.6l-1.7,6.8l-0.3,1c-0.3,1.2-0.8,2.2-1.4,2.8c-0.6,0.7-1.5,1.1-2.5,1.3\n                    c-0.5,0.1-1.2,0.1-1.8,0c-0.7-0.1-1.6-0.3-2.9-0.6c-0.9-0.2-1.7-0.4-2.3-0.6c-0.6-0.2-1.2-0.4-1.6-0.6c-0.4-0.2-0.8-0.4-1-0.6\n                    c-0.3-0.2-0.5-0.5-0.8-0.8c-0.6-0.7-0.9-1.5-1-2.3c-0.1-0.8,0.1-2,0.4-3.4l1.3-5.3c0.3-1.4,0.7-2.6,1.1-3.4c0.4-0.8,1-1.7,1.8-2.7\n                    l10.9-13.2l-8.5-2.1l1.3-5.1l15.2,3.7L341.8,754.5z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M315.8,750l8.1,2.4l-1.4,4.8l-12.5,23.2l-9-2.7l7.3-24.4l-1.9-0.6l1.5-5.1l1.9,0.6l2.4-8l6,1.8L315.8,750z\n                    M314.3,755.1l-4.4,14.7l6.7-14L314.3,755.1z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M271.9,755.5l3.4,1.5l-2.1,4.8c-1.5-0.5-2.8-0.5-3.8,0c-1,0.4-2,1.4-2.9,2.8l-4.8-2.1l15.7-35.5l6,2.7\n                    L271.9,755.5z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M254.8,744.4l-2.9,5.8c-0.5,1.1-0.5,1.8,0.2,2.2c0.7,0.3,1.3,0.1,1.7-0.8l0.2-0.4l4.2-8.5\n                    c-0.9,0.2-1.6,0.2-2.2,0.2c-0.6-0.1-1.2-0.3-1.8-0.6c-1.5-0.7-2.4-1.8-2.6-3.3c-0.3-1.5,0-3.2,1-5.1l0.2-0.5l4.5-9.1l0.5-1\n                    c1.2-2.3,2.8-3.3,5-3.2c0.3,0,0.6,0,0.8,0.1c0.3,0.1,0.5,0.2,0.9,0.3s0.7,0.3,1.2,0.5c0.5,0.2,1.1,0.5,1.7,0.8\n                    c0.8,0.4,1.5,0.8,2,1.1c0.5,0.3,1,0.6,1.3,0.8c0.4,0.3,0.6,0.5,0.8,0.8c0.2,0.3,0.4,0.6,0.5,0.9c0.4,0.9,0.6,1.7,0.5,2.4\n                    c-0.1,0.7-0.4,1.7-1,3l-0.3,0.7l-11,22.2l-0.5,1.1c-0.8,1.6-1.6,2.7-2.4,3.2s-1.8,0.8-3,0.7c-0.3,0-0.5,0-0.8-0.1\n                    c-0.3-0.1-0.5-0.2-0.9-0.3s-0.7-0.3-1.2-0.5c-0.5-0.2-1-0.5-1.7-0.8c-1.5-0.7-2.5-1.3-3.1-1.8c-0.6-0.4-1.1-0.9-1.5-1.5\n                    c-0.5-0.8-0.7-1.7-0.6-2.5c0-0.9,0.4-1.9,0.9-3l0.2-0.5l3.1-6.3L254.8,744.4z M258.9,736.3c-0.4,0.7-0.5,1.2-0.5,1.6\n                    c0,0.3,0.2,0.6,0.6,0.8c0.4,0.2,0.7,0.2,1,0c0.3-0.2,0.6-0.6,1-1.3l4-8c0.4-0.8,0.6-1.5,0.6-1.8s-0.2-0.7-0.6-0.9\n                    c-0.4-0.2-0.8-0.2-1.1,0.1c-0.3,0.3-0.6,0.8-1,1.6l-0.2,0.4L258.9,736.3z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M221.5,713.9l5-7.3l0.2-0.2c0.7-1.1,0.8-1.8,0.1-2.3c-0.6-0.4-1.3-0.1-2.1,1l-0.1,0.2l-5,7.3l-0.2,0.3\n                    c-0.7,1-0.5,1.8,0.5,2.4l0.3,0.2l1.4,1l-3,4.4l-1.2-0.8c-0.9-0.6-1.5-0.9-1.8-0.8c-0.3,0.1-0.8,0.5-1.3,1.3l-0.3,0.4l-2.9,4.3\n                    l-0.3,0.5c-0.7,1-0.7,1.7,0,2.1c0.6,0.4,1.3,0.1,2.1-1l0.3-0.4l3.3-4.9l5.5,3.7l-3.5,5.2l-0.6,0.8c-0.8,1.2-1.5,2-2.1,2.5\n                    c-0.6,0.4-1.4,0.7-2.3,0.8c-1,0.1-2-0.3-3.2-0.9c-0.2-0.1-0.5-0.3-0.9-0.5s-0.9-0.6-1.5-1c-0.8-0.5-1.4-1-2-1.4\n                    c-0.5-0.4-1-0.8-1.3-1.1c-0.3-0.3-0.6-0.7-0.8-1c-0.2-0.3-0.3-0.7-0.4-1.1c-0.2-0.8-0.2-1.5,0-2.2c0.2-0.7,0.7-1.6,1.5-2.8l0.4-0.6\n                    l3-4.4l0.3-0.5c0.8-1.2,1.6-2,2.3-2.4c0.7-0.4,1.7-0.5,3-0.3c-0.6-1.1-0.9-2.1-0.8-2.9c0.1-0.8,0.6-1.9,1.5-3.2l4.7-6.9l0.5-0.8\n                    c0.9-1.3,1.8-2.2,2.5-2.7c0.7-0.5,1.6-0.7,2.6-0.6c0.3,0,0.6,0.1,0.9,0.1c0.3,0.1,0.6,0.2,1,0.4c0.4,0.2,0.8,0.4,1.3,0.7\n                    c0.5,0.3,1.1,0.7,1.8,1.2c1.4,0.9,2.4,1.7,3,2.3c0.6,0.6,1,1.3,1.2,1.9c0.2,0.8,0.3,1.6,0.1,2.3s-0.6,1.6-1.2,2.6l-0.3,0.5\n                    l-5.6,8.2L221.5,713.9z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M206,702.8l5.4-7.1l0.2-0.2c0.8-1,0.9-1.8,0.2-2.3s-1.3-0.2-2.1,0.9l-0.1,0.2l-5.4,7.1l-0.3,0.3\n                    c-0.7,0.9-0.6,1.7,0.3,2.4l0.3,0.2l1.4,1l-3.2,4.2l-1.1-0.8c-0.8-0.6-1.4-0.9-1.8-0.9c-0.3,0-0.8,0.4-1.4,1.2l-0.3,0.4l-3.2,4.2\n                    l-0.4,0.5c-0.7,0.9-0.8,1.6-0.1,2.1s1.3,0.2,2.1-0.8l0.3-0.4l3.5-4.7l5.3,4l-3.8,5l-0.6,0.8c-0.8,1.2-1.6,2-2.3,2.4\n                    c-0.7,0.4-1.4,0.6-2.4,0.7c-1,0-2-0.4-3.2-1.1c-0.2-0.1-0.5-0.3-0.9-0.6c-0.4-0.3-0.8-0.6-1.4-1.1c-0.8-0.6-1.4-1.1-1.9-1.5\n                    c-0.5-0.4-0.9-0.8-1.2-1.2s-0.5-0.7-0.7-1.1c-0.1-0.4-0.3-0.7-0.4-1.2c-0.1-0.8-0.1-1.5,0.2-2.2s0.8-1.5,1.6-2.7l0.5-0.6l3.2-4.2\n                    l0.4-0.5c0.9-1.2,1.7-1.9,2.4-2.2s1.7-0.4,3-0.1c-0.5-1.2-0.8-2.2-0.6-3c0.1-0.8,0.7-1.9,1.7-3.2l5-6.6l0.6-0.8\n                    c1-1.3,1.9-2.1,2.6-2.5c0.7-0.4,1.6-0.6,2.7-0.5c0.3,0,0.6,0.1,0.9,0.2c0.3,0.1,0.6,0.2,1,0.4c0.4,0.2,0.8,0.5,1.3,0.8\n                    c0.5,0.3,1,0.8,1.7,1.3c1.3,1,2.3,1.8,2.8,2.5c0.5,0.6,0.9,1.3,1.1,2c0.2,0.8,0.2,1.6,0,2.3c-0.2,0.7-0.7,1.6-1.4,2.5l-0.4,0.5\n                    l-6,7.9L206,702.8z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M158.4,682.6l2.6,2.7l-3.8,3.7c-1.3-1-2.5-1.5-3.6-1.5s-2.4,0.5-3.8,1.5l-3.7-3.8l28.1-27.3l4.6,4.8\n                    L158.4,682.6z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M145.4,633.6l-19.3,4c-0.8,0.1-1.2,0.3-1.4,0.4l-0.9,0.7l-4.3,3.3l-0.3,0.3c-0.9,0.7-1.1,1.3-0.6,2\n                    c0.5,0.6,1.1,0.6,2,0l0.3-0.3l5-3.8l4,5.3l-5.6,4.2l-0.8,0.6c-1,0.8-2,1.2-2.8,1.3c-0.9,0.1-1.8-0.1-2.7-0.6\n                    c-0.5-0.3-1-0.6-1.4-1.1c-0.5-0.5-1.1-1.2-1.9-2.3c-0.6-0.8-1-1.4-1.4-1.9c-0.4-0.5-0.7-1-0.9-1.4c-0.2-0.4-0.3-0.8-0.4-1.1\n                    c-0.1-0.3-0.1-0.7-0.1-1.1c0-0.9,0.2-1.7,0.7-2.4c0.5-0.7,1.3-1.5,2.5-2.4l4.3-3.3c1.2-0.9,2.2-1.5,3-1.9c0.8-0.4,1.8-0.7,3-1\n                    l16.8-3.3l-5.3-7l4.2-3.2l9.4,12.5L145.4,633.6z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M112.7,633.1l-1.2,0.8c-1,0.7-2,1.1-2.8,1.2s-1.7,0-2.5-0.5c-0.3-0.1-0.6-0.3-0.8-0.5\n                    c-0.3-0.2-0.5-0.4-0.8-0.8c-0.3-0.3-0.6-0.7-0.9-1.2c-0.3-0.5-0.7-1-1.1-1.7c-0.5-0.8-1-1.5-1.3-2.1c-0.3-0.6-0.6-1.1-0.8-1.5\n                    c-0.2-0.5-0.3-0.9-0.3-1.3c0-0.4,0-0.8,0-1.2c0.2-1.1,0.8-2.1,1.8-2.9c0.2-0.2,0.5-0.4,0.7-0.5c0.2-0.1,0.7-0.5,1.4-1l20.8-14\n                    c0.5-0.4,1-0.7,1.4-0.9s0.7-0.4,0.9-0.6c0.3-0.2,0.5-0.3,0.7-0.3c0.2-0.1,0.4-0.1,0.6-0.2c0.7-0.1,1.4-0.1,2.1,0.1\n                    c0.7,0.2,1.4,0.5,2,1.1c0.3,0.3,0.7,0.7,1.1,1.2c0.4,0.5,0.9,1.2,1.5,2.1c0.4,0.7,0.8,1.2,1.1,1.7s0.5,0.9,0.7,1.3\n                    c0.2,0.4,0.3,0.7,0.4,1c0.1,0.3,0.1,0.6,0.1,1c0.1,0.9-0.1,1.8-0.5,2.5s-1.2,1.5-2.2,2.2l-1.2,0.8L112.7,633.1z M108.4,625.1\n                    l-0.7,0.5c-0.6,0.4-1,0.8-1.1,1.1c-0.1,0.3-0.1,0.6,0.1,1c0.3,0.5,0.8,0.6,1.4,0.3c0.1,0,0.3-0.1,0.6-0.3s0.6-0.3,1-0.7l19.1-12.9\n                    c0.5-0.4,0.9-0.6,1.1-0.8s0.3-0.3,0.4-0.4c0.4-0.5,0.5-1,0.2-1.4c-0.4-0.7-1.2-0.6-2.4,0.2l-0.7,0.5L108.4,625.1z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M91.5,591.6l1.8,3.3l-4.6,2.5c-0.9-1.3-1.9-2.1-3-2.4c-1.1-0.3-2.4-0.2-4,0.4l-2.5-4.7l34.5-18.5l3.1,5.8\n                    L91.5,591.6z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M101.2,566.3l3.7,7.6l-4.5,2.2l-25.5,6.4l-4.1-8.5L93.8,563l-0.9-1.8l4.8-2.3l0.9,1.8l7.6-3.7l2.7,5.6\n                    L101.2,566.3z M96.5,568.6l-13.8,6.7l14.8-4.6L96.5,568.6z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M76.9,527.2l8.4-2.8l0.3-0.1c1.2-0.4,1.7-1,1.5-1.7c-0.2-0.7-1-0.9-2.3-0.5l-0.2,0.1l-8.4,2.8l-0.4,0.1\n                    c-1.1,0.4-1.5,1.1-1.1,2.2l0.1,0.3l0.5,1.6l-5,1.6l-0.4-1.3c-0.3-1-0.6-1.6-1-1.8c-0.3-0.2-0.9-0.1-1.9,0.2l-0.5,0.2l-5,1.6\n                    l-0.6,0.2c-1.1,0.4-1.5,0.9-1.3,1.7s1,0.9,2.2,0.5l0.5-0.2l5.6-1.8l2.1,6.3l-5.9,1.9l-1,0.3c-1.4,0.5-2.4,0.7-3.2,0.7\n                    c-0.8,0-1.5-0.3-2.3-0.8c-0.8-0.6-1.5-1.5-2-2.7c-0.1-0.2-0.2-0.5-0.4-1c-0.1-0.4-0.3-1-0.5-1.7c-0.3-0.9-0.5-1.7-0.7-2.3\n                    c-0.2-0.6-0.3-1.2-0.3-1.7c0-0.5,0-0.9,0-1.3c0.1-0.4,0.2-0.8,0.4-1.1c0.3-0.7,0.8-1.3,1.4-1.7c0.6-0.4,1.5-0.8,2.9-1.3l0.7-0.2\n                    l5-1.6l0.6-0.2c1.4-0.4,2.5-0.6,3.3-0.5c0.8,0.2,1.6,0.7,2.5,1.6c0.2-1.3,0.6-2.2,1.2-2.8c0.6-0.6,1.6-1.2,3.2-1.7l7.9-2.6l0.9-0.3\n                    c1.5-0.5,2.7-0.7,3.6-0.6c0.9,0.1,1.7,0.5,2.5,1.1c0.2,0.2,0.5,0.4,0.6,0.7c0.2,0.2,0.4,0.5,0.6,0.9s0.4,0.8,0.6,1.4\n                    c0.2,0.6,0.4,1.2,0.7,2c0.5,1.6,0.8,2.8,0.9,3.7c0.1,0.8,0,1.6-0.2,2.3c-0.3,0.8-0.8,1.4-1.4,1.9s-1.4,0.9-2.5,1.3l-0.6,0.2\n                    l-9.4,3.1L76.9,527.2z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M60.8,516.6l1,3.6l-5.1,1.4c-0.6-1.5-1.4-2.5-2.4-3c-1-0.5-2.3-0.7-4-0.5l-1.4-5.1l37.7-10.5l1.8,6.4\n                    L60.8,516.6z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M64.2,458.7l5.6-0.7l0.4,0c0.9-0.1,1.6-0.3,1.9-0.5c0.3-0.2,0.5-0.5,0.4-1s-0.3-0.7-0.6-0.8s-1-0.2-1.8,0\n                    l-0.5,0.1l-9,1.1c0.8,0.7,1.3,1.2,1.5,1.7c0.3,0.5,0.4,1,0.5,1.7c0.2,1.7-0.3,3.1-1.4,4.3c-0.5,0.5-1.1,0.9-1.7,1.2\n                    c-0.7,0.3-1.5,0.5-2.6,0.6l-0.6,0.1L46,467.5c-1.4,0.2-2.5,0.2-3.2,0.1s-1.3-0.4-2-1c-0.4-0.3-0.6-0.6-0.9-0.9s-0.4-0.7-0.6-1.2\n                    s-0.3-1-0.4-1.7c-0.1-0.7-0.2-1.5-0.4-2.5c-0.2-1.6-0.3-2.8-0.3-3.5c0-0.8,0.2-1.5,0.5-2c0.5-0.9,1-1.5,1.8-2s1.8-0.7,3.1-0.9\n                    l0.8-0.1l25.6-3.1l0.5-0.1c1.2-0.2,2.2-0.2,3,0c0.7,0.1,1.4,0.4,1.9,0.9c0.7,0.6,1.1,1.3,1.5,2c0.3,0.8,0.6,1.9,0.8,3.5\n                    c0.1,1.1,0.2,2,0.3,2.8c0,0.7,0,1.4,0,1.9s-0.1,1-0.3,1.3s-0.3,0.7-0.6,1c-0.5,0.7-1,1.1-1.7,1.4s-1.5,0.5-2.6,0.7l-0.5,0.1\n                    l-7.4,0.9L64.2,458.7z M55,459.8l0.2,0c1.4-0.2,2-0.6,1.9-1.4c0-0.4-0.2-0.7-0.6-0.8c-0.3-0.1-0.9-0.2-1.7-0.1l-8.9,1.1\n                    c-0.8,0.1-1.4,0.3-1.7,0.5c-0.3,0.2-0.4,0.5-0.4,1c0.1,0.8,0.8,1.1,2.2,0.9l0.2,0L55,459.8z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M69,413.5l-17.5-9.1c-0.7-0.4-1.1-0.6-1.3-0.6l-1.1,0l-5.4-0.2l-0.4,0c-1.1,0-1.7,0.3-1.8,1.1\n                    c0,0.8,0.5,1.2,1.5,1.2l0.4,0l6.3,0.3l-0.3,6.6l-7-0.3l-1.1,0c-1.3,0-2.3-0.3-3-0.8c-0.8-0.5-1.3-1.2-1.7-2.2\n                    c-0.2-0.5-0.4-1.1-0.4-1.8s0-1.6,0-2.9c0-0.9,0.1-1.7,0.1-2.4c0-0.7,0.1-1.2,0.2-1.7c0.1-0.4,0.3-0.8,0.4-1.1s0.4-0.6,0.6-0.9\n                    c0.6-0.7,1.3-1.2,2-1.5c0.8-0.2,1.9-0.3,3.4-0.3l5.4,0.2c1.5,0.1,2.7,0.2,3.5,0.4c0.9,0.2,1.9,0.6,3,1.2l15.1,8.1l0.4-8.8l5.3,0.2\n                    l-0.6,15.6L69,413.5z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M69.8,394.9l-17-10.1c-0.7-0.4-1.1-0.6-1.3-0.6l-1.1-0.1l-5.4-0.5l-0.4,0c-1.1-0.1-1.7,0.2-1.8,1\n                    c-0.1,0.8,0.4,1.2,1.5,1.3l0.4,0l6.3,0.6l-0.6,6.6l-7-0.6l-1-0.1c-1.3-0.1-2.2-0.4-3-1c-0.7-0.5-1.3-1.3-1.6-2.3\n                    c-0.2-0.5-0.3-1.1-0.3-1.8c0-0.7,0-1.6,0.2-2.9c0.1-0.9,0.2-1.7,0.3-2.4s0.2-1.2,0.3-1.6c0.1-0.4,0.3-0.8,0.5-1.1\n                    c0.2-0.3,0.4-0.6,0.6-0.9c0.6-0.7,1.3-1.1,2.1-1.3c0.8-0.2,2-0.2,3.4-0.1l5.4,0.5c1.5,0.1,2.6,0.4,3.5,0.6c0.9,0.3,1.8,0.7,2.9,1.3\n                    l14.7,8.9l0.8-8.8l5.3,0.5l-1.5,15.5L69.8,394.9z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M52.8,346.6l-0.7,3.7l-5.2-1c0.1-1.6-0.2-2.9-0.8-3.8s-1.8-1.6-3.4-2.2l1-5.2l38.4,7.5l-1.3,6.5L52.8,346.6z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M63,334.6c-0.4,0.5-0.8,0.9-1.1,1.1s-0.8,0.5-1.2,0.6c-0.4,0.1-0.9,0.2-1.5,0.1c-0.5,0-1.2-0.1-1.9-0.3\n                    l-0.5-0.1l-5.4-1.3l-1.2-0.3c-1.3-0.3-2.3-0.8-3-1.4c-0.7-0.6-1.1-1.4-1.4-2.5c-0.1-0.6-0.2-1.2-0.1-1.9s0.3-1.9,0.7-3.4\n                    c0.4-1.6,0.8-2.8,1.1-3.5c0.3-0.7,0.8-1.3,1.3-1.8c0.7-0.6,1.5-0.9,2.3-1c0.8-0.1,1.9,0,3.2,0.4l0.5,0.1l5.8,1.4l0.5,0.1\n                    c1.3,0.3,2.2,0.8,2.8,1.4c0.6,0.6,1.1,1.5,1.4,2.6c0.8-1,1.7-1.5,2.5-1.8c0.8-0.2,1.9-0.1,3.3,0.2l0.9,0.2l7.9,1.9l0.9,0.2\n                    c1.2,0.3,2.1,0.7,2.8,1.2c0.6,0.5,1.1,1.2,1.4,2.1c0.1,0.3,0.2,0.6,0.3,1c0,0.3,0,0.7,0,1.2c0,0.5-0.1,1-0.2,1.6s-0.3,1.4-0.5,2.2\n                    c-0.4,1.8-0.9,3.1-1.3,3.9c-0.4,0.8-1,1.4-1.8,1.9c-0.7,0.4-1.3,0.6-2,0.6c-0.7,0-1.8-0.2-3.2-0.5l-7.5-1.8l-1.2-0.3\n                    c-0.8-0.2-1.4-0.4-1.9-0.6c-0.5-0.2-1-0.5-1.3-0.8c-0.4-0.3-0.6-0.7-0.8-1.1S63.2,335.3,63,334.6z M53.8,326.1l-0.3-0.1\n                    c-1.1-0.3-1.7,0-1.9,0.8s0.3,1.3,1.4,1.5l0.3,0.1l6.2,1.5l0.3,0.1c1.1,0.2,1.8-0.1,1.9-0.7c0.2-0.8-0.3-1.4-1.4-1.5l-0.3-0.1\n                    L53.8,326.1z M69.4,329.9l-0.3-0.1c-1.3-0.3-2.1-0.1-2.3,0.7s0.4,1.3,1.7,1.6l0.3,0.1l8.2,2l0.3,0.1c1.3,0.3,2,0,2.2-0.7\n                    c0.2-0.8-0.4-1.3-1.7-1.6l-0.2,0L69.4,329.9z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M87.7,301.9l-13.9-14c-0.5-0.6-0.9-0.9-1.1-1l-1-0.4l-5.1-1.8l-0.4-0.1c-1.1-0.4-1.7-0.2-2,0.5\n                    c-0.3,0.7,0.1,1.3,1.1,1.6l0.4,0.1l5.9,2.1l-2.3,6.2l-6.6-2.4l-1-0.4c-1.2-0.4-2.1-1-2.6-1.7c-0.6-0.7-0.9-1.6-1-2.6\n                    c0-0.6,0-1.2,0.1-1.8c0.1-0.6,0.5-1.6,0.9-2.8c0.3-0.9,0.6-1.6,0.8-2.3s0.5-1.1,0.7-1.5c0.2-0.4,0.5-0.7,0.7-1s0.5-0.5,0.8-0.7\n                    c0.8-0.5,1.6-0.8,2.4-0.8c0.8,0,1.9,0.3,3.3,0.8L73,280c1.4,0.5,2.5,1,3.2,1.5c0.8,0.5,1.6,1.2,2.5,2l12,12.2l3-8.3l5,1.8\n                    l-5.3,14.7L87.7,301.9z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M89.7,275.2l5.3,2.2l0.3,0.1c0.9,0.4,1.5,0.5,1.9,0.5c0.4,0,0.7-0.2,0.8-0.6c0.2-0.4,0.1-0.7-0.1-1\n                    s-0.8-0.6-1.5-0.9l-0.4-0.2l-8.3-3.5c0.3,0.9,0.5,1.7,0.5,2.2c0,0.5-0.2,1.1-0.4,1.7c-0.6,1.5-1.8,2.6-3.3,3\n                    c-0.7,0.2-1.4,0.2-2.1,0.1c-0.7-0.1-1.6-0.3-2.6-0.8l-0.6-0.3l-9.5-4c-1.3-0.6-2.3-1.1-2.8-1.5s-0.9-1-1.2-1.8\n                    c-0.2-0.4-0.3-0.8-0.3-1.2s0-0.8,0.1-1.3s0.3-1,0.5-1.6s0.5-1.4,0.9-2.4c0.6-1.5,1.1-2.5,1.5-3.2c0.4-0.7,0.9-1.2,1.4-1.5\n                    c0.8-0.5,1.6-0.8,2.5-0.8c0.8,0,1.9,0.3,3.1,0.8l0.7,0.3l23.7,10l0.5,0.2c1.1,0.5,2,1,2.6,1.4c0.6,0.5,1,1,1.2,1.7\n                    c0.3,0.8,0.4,1.7,0.3,2.5c-0.1,0.8-0.5,2-1.1,3.4c-0.4,1-0.8,1.9-1.1,2.5c-0.3,0.7-0.6,1.2-1,1.6s-0.6,0.8-0.9,1\n                    c-0.3,0.3-0.6,0.5-1,0.6c-0.7,0.3-1.5,0.5-2.2,0.4c-0.7,0-1.6-0.3-2.6-0.7l-0.4-0.2l-6.9-2.9L89.7,275.2z M81.3,271.6l0.2,0.1\n                    c1.3,0.5,2,0.4,2.4-0.3c0.2-0.4,0.1-0.7-0.1-1s-0.7-0.6-1.5-0.9L74,266c-0.8-0.3-1.3-0.5-1.7-0.4c-0.4,0-0.6,0.3-0.8,0.7\n                    c-0.3,0.7,0.2,1.4,1.4,1.9l0.2,0.1L81.3,271.6z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M98.4,215.9l-4.1,6.6l-4.5-2.8l7.6-12.1l5.7,3.5l23.2,24.2l-3.5,5.7L98.4,215.9z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M143.1,200.4l-8.4-17.9c-0.3-0.7-0.5-1.1-0.7-1.3l-0.9-0.7l-4.2-3.4l-0.3-0.3c-0.9-0.7-1.6-0.8-2.1-0.2\n                    s-0.3,1.2,0.5,1.9l0.3,0.3l4.9,4L128,188l-5.4-4.5l-0.8-0.7c-1-0.8-1.6-1.6-1.9-2.5s-0.3-1.8,0-2.8c0.1-0.5,0.4-1.1,0.8-1.7\n                    c0.4-0.6,1-1.3,1.8-2.3c0.6-0.7,1.1-1.3,1.5-1.8s0.8-0.9,1.2-1.2c0.4-0.3,0.7-0.5,1-0.7c0.3-0.1,0.6-0.3,1-0.4\n                    c0.9-0.2,1.7-0.2,2.5,0.1c0.8,0.3,1.7,0.9,2.9,1.9l4.2,3.4c1.1,1,2,1.8,2.5,2.5c0.5,0.7,1.1,1.6,1.7,2.7l7.2,15.6l5.6-6.8l4.1,3.4\n                    l-9.9,12L143.1,200.4z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M146.1,173.8c-0.6,0.2-1.1,0.4-1.6,0.4c-0.5,0.1-0.9,0.1-1.4,0s-0.9-0.3-1.3-0.6c-0.5-0.3-1-0.7-1.5-1.2\n                    l-0.4-0.4l-4.1-3.7l-0.9-0.8c-1-0.9-1.7-1.8-2-2.7s-0.3-1.8,0-2.8c0.1-0.6,0.4-1.1,0.9-1.7s1.2-1.5,2.3-2.6c1.1-1.2,2-2.1,2.7-2.6\n                    c0.6-0.5,1.3-0.8,2-0.9c0.9-0.1,1.7-0.1,2.4,0.3s1.6,0.9,2.6,1.9l0.4,0.3l4.4,4l0.4,0.4c1,0.9,1.5,1.7,1.8,2.6c0.3,0.9,0.2,1.8,0,3\n                    c1.2-0.4,2.2-0.5,3-0.3c0.8,0.2,1.8,0.8,2.8,1.8l0.6,0.6l6,5.5l0.6,0.6c0.9,0.9,1.5,1.6,1.9,2.4c0.3,0.8,0.4,1.6,0.3,2.5\n                    c0,0.3-0.1,0.7-0.3,1c-0.1,0.3-0.3,0.7-0.6,1c-0.3,0.4-0.6,0.8-1,1.3c-0.4,0.5-0.9,1.1-1.5,1.7c-1.2,1.4-2.2,2.3-3,2.7\n                    c-0.8,0.5-1.6,0.7-2.5,0.7c-0.8,0-1.5-0.1-2-0.5c-0.6-0.3-1.4-1-2.5-2l-5.7-5.2l-0.9-0.8c-0.6-0.5-1-1-1.4-1.4s-0.6-0.9-0.8-1.3\n                    s-0.2-0.9-0.2-1.4C145.9,175,146,174.4,146.1,173.8z M142.2,161.9l-0.3-0.2c-0.8-0.7-1.5-0.8-2-0.3c-0.5,0.6-0.4,1.3,0.5,2l0.2,0.2\n                    l4.7,4.3l0.2,0.2c0.9,0.7,1.6,0.8,2,0.3c0.6-0.6,0.4-1.3-0.5-2l-0.2-0.2L142.2,161.9z M154,172.7l-0.3-0.2c-1-0.9-1.8-1.1-2.3-0.5\n                    c-0.5,0.6-0.3,1.3,0.7,2.2l0.3,0.2l6.2,5.7l0.3,0.2c1,0.9,1.8,1,2.3,0.5c0.5-0.6,0.3-1.3-0.7-2.3l-0.1-0.1L154,172.7z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M175.3,134.5l-2.9,2.4l-3.4-4c1.1-1.2,1.7-2.3,1.7-3.5c0-1.1-0.4-2.4-1.2-3.9l4-3.4l25.3,29.9l-5.1,4.3\n                    L175.3,134.5z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M197.5,145.2l-4.2-19.3c-0.1-0.8-0.3-1.2-0.4-1.4l-0.7-0.9l-3.3-4.3l-0.3-0.3c-0.7-0.9-1.4-1.1-2-0.6\n                    s-0.6,1.1,0,2l0.3,0.3l3.9,5l-5.2,4.1l-4.3-5.6l-0.6-0.8c-0.8-1-1.2-1.9-1.3-2.8c-0.1-0.9,0.1-1.8,0.6-2.8c0.3-0.5,0.6-1,1.1-1.4\n                    c0.5-0.5,1.2-1.1,2.3-1.9c0.7-0.6,1.4-1.1,1.9-1.4s1-0.7,1.4-0.9c0.4-0.2,0.8-0.3,1.1-0.4s0.7-0.1,1.1-0.1c0.9,0,1.7,0.2,2.4,0.6\n                    c0.7,0.4,1.5,1.3,2.4,2.4l3.3,4.3c0.9,1.2,1.6,2.2,1.9,3s0.7,1.8,1,3l3.6,16.8l7-5.4l3.2,4.2l-12.4,9.6L197.5,145.2z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M233.1,106.3l4.4,7.7l0.1,0.3c0.6,1.1,1.3,1.5,2,1.1s0.7-1.2,0-2.3l-0.1-0.2l-4.4-7.7l-0.2-0.4\n                    c-0.6-1-1.4-1.2-2.3-0.6l-0.3,0.2l-1.5,0.9l-2.6-4.6l1.2-0.7c0.9-0.5,1.4-1,1.5-1.3c0.1-0.3-0.1-0.9-0.6-1.8l-0.3-0.5l-2.6-4.5\n                    l-0.3-0.5c-0.6-1-1.2-1.3-1.9-0.9s-0.7,1.1,0,2.3l0.2,0.4l2.9,5.1l-5.7,3.3l-3.1-5.4l-0.5-0.9c-0.8-1.2-1.2-2.2-1.3-3\n                    c-0.1-0.8,0-1.6,0.3-2.4c0.4-0.9,1.1-1.7,2.2-2.5c0.2-0.1,0.5-0.3,0.9-0.6s0.9-0.5,1.5-0.9c0.8-0.5,1.5-0.9,2.1-1.2\n                    c0.6-0.3,1.1-0.5,1.6-0.7s0.9-0.2,1.3-0.2c0.4,0,0.8,0.1,1.2,0.1c0.8,0.2,1.4,0.5,1.9,1c0.5,0.5,1.1,1.3,1.9,2.5L233,88l2.6,4.6\n                    l0.3,0.5c0.7,1.3,1.1,2.3,1.1,3.1s-0.3,1.8-1,2.8c1.3-0.1,2.3,0.1,3,0.6c0.7,0.4,1.5,1.4,2.3,2.8l4.2,7.2l0.5,0.8\n                    c0.8,1.4,1.2,2.5,1.3,3.4c0.1,0.8-0.1,1.7-0.6,2.6c-0.2,0.3-0.3,0.5-0.5,0.8c-0.2,0.3-0.5,0.5-0.8,0.8c-0.3,0.3-0.7,0.5-1.2,0.9\n                    c-0.5,0.3-1.1,0.7-1.8,1.1c-1.5,0.8-2.6,1.4-3.4,1.6c-0.8,0.3-1.6,0.4-2.3,0.3c-0.9-0.1-1.6-0.4-2.2-0.9s-1.2-1.2-1.8-2.2l-0.3-0.5\n                    l-5-8.6L233.1,106.3z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M249.9,97.1l4,7.9c0.4,0.7,0.7,1.2,1,1.4c0.3,0.2,0.7,0.3,1,0.1c0.4-0.2,0.6-0.5,0.6-0.8\n                    c0-0.4-0.2-0.9-0.5-1.6l-0.1-0.2l-6.3-12.4c-0.3-0.6-0.6-1-0.9-1.2c-0.3-0.2-0.6-0.1-1,0.1c-0.7,0.4-0.9,0.9-0.5,1.7l0.2,0.5\n                    l0.6,1.2l-5.9,3l-8.6-16.9l13.9-7.1l2.4,4.7l-8,4.1l3.1,6.2c0.5-1.5,1.3-2.6,2.6-3.3c1.5-0.8,2.9-0.8,4.2-0.1\n                    c1.3,0.7,2.5,1.9,3.5,3.8l0.3,0.6l6.6,13l0.5,0.9c1,2.1,1.2,3.8,0.4,5.1c-0.4,0.7-0.9,1.2-1.5,1.7c-0.6,0.5-1.6,1.1-3.1,1.8\n                    c-0.7,0.4-1.3,0.6-1.8,0.9c-0.5,0.2-1,0.4-1.4,0.6c-0.4,0.1-0.8,0.2-1.1,0.3c-0.3,0.1-0.7,0.1-1,0.1c-1.9,0-3.3-1-4.3-3.1l-0.5-0.9\n                    l-4.5-8.8L249.9,97.1z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M296.8,78.2l2.9,8.4l0.1,0.3c0.4,1.2,1,1.7,1.8,1.4s0.9-1,0.5-2.3l-0.1-0.2l-2.9-8.4l-0.1-0.4\n                    c-0.4-1.1-1.1-1.5-2.2-1.1l-0.3,0.1l-1.6,0.6l-1.7-5l1.3-0.5c1-0.4,1.6-0.7,1.7-1c0.2-0.3,0.1-0.9-0.2-1.8l-0.2-0.5l-1.7-4.9\n                    l-0.2-0.6c-0.4-1.1-1-1.5-1.7-1.3c-0.7,0.3-0.9,1-0.5,2.2l0.2,0.4l1.9,5.5l-6.3,2.2l-2-5.9l-0.3-0.9c-0.5-1.4-0.8-2.4-0.7-3.2\n                    c0-0.8,0.3-1.6,0.7-2.3c0.5-0.8,1.4-1.5,2.6-2c0.2-0.1,0.5-0.3,1-0.4c0.4-0.1,1-0.4,1.7-0.6c0.9-0.3,1.7-0.6,2.3-0.7\n                    c0.6-0.2,1.2-0.3,1.7-0.4c0.5-0.1,0.9-0.1,1.3,0s0.8,0.2,1.2,0.3c0.7,0.3,1.3,0.8,1.7,1.3c0.4,0.6,0.9,1.5,1.4,2.8l0.3,0.7l1.7,5\n                    l0.2,0.6c0.5,1.4,0.7,2.5,0.5,3.3s-0.6,1.7-1.5,2.6c1.3,0.2,2.2,0.6,2.8,1.1s1.2,1.6,1.7,3.1l2.8,7.9l0.3,0.9\n                    c0.5,1.5,0.7,2.7,0.7,3.6c-0.1,0.9-0.4,1.7-1.1,2.5c-0.2,0.2-0.4,0.5-0.7,0.7c-0.2,0.2-0.5,0.4-0.9,0.6s-0.8,0.4-1.4,0.6\n                    c-0.5,0.2-1.2,0.4-2,0.7c-1.6,0.6-2.8,0.9-3.6,1c-0.8,0.1-1.6,0.1-2.3-0.2c-0.8-0.3-1.5-0.7-2-1.3c-0.5-0.6-0.9-1.4-1.3-2.5\n                    l-0.2-0.6l-3.3-9.4L296.8,78.2z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M338.3,76.6l4.7-19.2c0.2-0.8,0.3-1.2,0.3-1.4l-0.2-1.1l-1.1-5.3l-0.1-0.4c-0.2-1.1-0.7-1.6-1.5-1.4\n                    s-1,0.8-0.8,1.8l0.1,0.4l1.3,6.1l-6.5,1.3l-1.4-6.9l-0.2-1c-0.3-1.2-0.2-2.3,0-3.1c0.3-0.9,0.9-1.6,1.7-2.2c0.5-0.3,1-0.6,1.6-0.8\n                    c0.6-0.2,1.6-0.4,2.8-0.7c0.9-0.2,1.7-0.3,2.4-0.4c0.7-0.1,1.2-0.2,1.7-0.2c0.5,0,0.9,0.1,1.2,0.1c0.3,0.1,0.7,0.2,1,0.4\n                    c0.8,0.4,1.5,0.9,1.9,1.6c0.4,0.7,0.8,1.8,1.1,3.3l1.1,5.3c0.3,1.5,0.4,2.6,0.4,3.5s-0.2,2-0.4,3.2l-4.2,16.6l8.6-1.8l1.1,5.2\n                    l-15.3,3.1L338.3,76.6z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st60",
    attrs: {
      d: "M362.7,52.3l-1-6.4c-0.2-1.2-0.7-1.7-1.4-1.6c-0.8,0.1-1.1,0.7-0.9,1.7l0.1,0.4l1.4,9.4\n                    c0.6-0.6,1.2-1.1,1.7-1.4c0.5-0.3,1.1-0.5,1.8-0.6c1.6-0.2,3,0.2,4.1,1.2c1.1,1.1,1.8,2.6,2.1,4.7l0.1,0.5l1.5,10l0.2,1.1\n                    c0.3,2.6-0.4,4.4-2.3,5.4c-0.3,0.2-0.5,0.3-0.8,0.4c-0.2,0.1-0.5,0.2-0.9,0.3s-0.8,0.2-1.3,0.3c-0.5,0.1-1.2,0.2-1.9,0.3\n                    c-0.9,0.1-1.6,0.2-2.2,0.3c-0.6,0.1-1.1,0.1-1.6,0.1c-0.4,0-0.8-0.1-1.2-0.2c-0.3-0.1-0.7-0.3-1-0.4c-0.8-0.5-1.4-1-1.8-1.7\n                    c-0.4-0.7-0.6-1.7-0.8-3l-0.1-0.8L353,47.7l-0.2-1.2c-0.3-1.7-0.2-3.1,0.1-4s1-1.7,2.1-2.3c0.2-0.1,0.4-0.3,0.7-0.4\n                    c0.2-0.1,0.5-0.2,0.9-0.3c0.3-0.1,0.8-0.1,1.3-0.3c0.5-0.1,1.1-0.2,1.8-0.3c1.6-0.2,2.8-0.4,3.6-0.4c0.8,0,1.5,0.1,2.1,0.4\n                    c0.8,0.4,1.5,0.9,2,1.7c0.5,0.7,0.8,1.8,1,3l0.1,0.5l1,7L362.7,52.3z M364.1,61.3c-0.1-0.8-0.3-1.3-0.5-1.6c-0.2-0.3-0.5-0.4-1-0.3\n                    c-0.4,0.1-0.7,0.3-0.8,0.6s-0.1,0.9,0,1.6l1.3,8.8c0.1,0.9,0.3,1.6,0.5,1.9c0.2,0.3,0.5,0.4,1,0.4c0.5-0.1,0.8-0.3,0.8-0.7\n                    c0.1-0.4,0.1-1,0-1.9l-0.1-0.4L364.1,61.3z"
    }
  }), _vm._v(" "), _c("radialGradient", {
    attrs: {
      id: "SVGID_39_",
      cx: "414.5",
      cy: "414.54",
      r: "411.5",
      gradientTransform: "matrix(1 0 0 -1 0 829.04)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticStyle: {
      "stop-color": "#130831",
      "stop-opacity": "0"
    },
    attrs: {
      offset: "0.9397"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#0A0419",
      "stop-opacity": "0.3146"
    },
    attrs: {
      offset: "0.9668"
    }
  }), _vm._v(" "), _c("stop", {
    staticStyle: {
      "stop-color": "#000000",
      "stop-opacity": "0.7"
    },
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st61",
    attrs: {
      d: "M822.5,360.5c-3.1-23.7-8.2-46.7-15.2-68.9c-14-44.8-35.4-86.3-62.9-123c-13.9-18.6-29.3-36-46-51.9\n                    c-33.2-31.6-71.7-57.8-114-77C532.6,16.1,475.1,3,414.5,3S296.4,16.1,244.6,39.6c-42.7,19.4-81.6,45.9-115,78\n                    c-49.4,47.4-87,107-107.9,174c-6.9,22.2-12.1,45.3-15.2,68.9c-2.3,17.7-3.5,35.7-3.5,54c0,29.5,3.1,58.2,9,85.9\n                    c9.8,46.4,27.5,89.9,51.6,129.1c48.8,79.5,123.8,141.1,213,172.8c43.1,15.3,89.5,23.7,137.9,23.7c98.1,0,188.2-34.3,258.9-91.6\n                    c36.3-29.4,67.5-64.9,92-104.9c24-39.2,41.7-82.7,51.6-129.1c5.9-27.7,9-56.4,9-85.9C826,396.2,824.8,378.2,822.5,360.5z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st62",
    attrs: {
      d: "M716.8,375.3c-2.3-17.5-6.1-34.5-11.2-50.8c-5.1-16.1-11.4-31.7-19-46.5c-7.9-15.5-17.1-30.3-27.5-44.1\n                    c-10.2-13.6-21.5-26.4-33.8-38.1c-12.3-11.7-25.5-22.4-39.7-31.9c-14-9.5-28.9-17.8-44.5-24.9c-15.5-7-31.7-12.8-48.5-17.2\n                    c-16.6-4.3-33.7-7.3-51.2-8.7c-8.4-0.7-16.9-1.1-25.5-1.1c-8.5,0-17,0.4-25.3,1c-17.4,1.4-34.5,4.4-50.9,8.6\n                    c-17,4.4-33.5,10.3-49.2,17.4c-15.5,7.1-30.3,15.4-44.3,24.8c-14.4,9.7-27.9,20.6-40.4,32.6c-12.2,11.7-23.4,24.4-33.6,38\n                    c-10.2,13.7-19.3,28.3-27.1,43.7c-7.5,14.8-13.8,30.3-18.9,46.3c-5.1,16.4-8.9,33.4-11.2,50.8c-1.7,13.1-2.6,26.5-2.6,40.1\n                    c0,3.6,0.1,7.2,0.2,10.8c0.6,17.9,2.8,35.3,6.4,52.3c3.6,17.1,8.7,33.6,15,49.6c6.4,16,14.1,31.4,23.1,45.9\n                    c8.9,14.4,18.9,28.1,30,40.8c11.4,13.1,24,25.3,37.5,36.3c13.2,10.7,27.3,20.3,42.1,28.8c15.1,8.5,30.9,15.8,47.4,21.7\n                    c16.1,5.7,32.8,10.1,50,13.1c16.8,2.9,34.1,4.4,51.7,4.4c17.9,0,35.4-1.5,52.4-4.5c16.8-2.9,33-7.2,48.8-12.8\n                    c16.5-5.8,32.2-13,47.3-21.4c15.1-8.5,29.3-18.2,42.7-29c13.4-10.9,25.9-22.9,37.2-35.8c11.3-12.9,21.6-26.9,30.7-41.6\n                    c9-14.7,16.8-30.2,23.2-46.3c6.2-15.7,11.2-32,14.8-48.9c3.5-16.7,5.7-34,6.4-51.6c0.1-3.8,0.2-7.7,0.2-11.5\n                    C719.4,401.8,718.5,388.4,716.8,375.3z"
    }
  })], 1)])]), _vm._v(" "), _c("object", {
    staticClass: "outside"
  }, [_c("svg", {
    attrs: {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 456 456"
    }
  }, [_c("radialGradient", {
    attrs: {
      id: "roulette_svg_outside",
      cx: "228",
      cy: "227.76",
      r: "225.5",
      gradientTransform: "matrix(1 0 0 -1 0 455.7599)",
      gradientUnits: "userSpaceOnUse"
    }
  }, [_c("stop", {
    staticClass: "gradient g1",
    attrs: {
      offset: "0.8945"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "gradient g2",
    attrs: {
      offset: "0.901"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "gradient g3",
    attrs: {
      offset: "0.9166"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "gradient g4",
    attrs: {
      offset: "0.9387"
    }
  }), _vm._v(" "), _c("stop", {
    staticClass: "gradient g5",
    attrs: {
      offset: "1"
    }
  })], 1), _vm._v(" "), _c("path", {
    staticClass: "st0",
    style: "fill:" + (_vm.$vuetify.theme.isDark ? "#303030" : "white"),
    attrs: {
      d: "M451.6,198.5c-1.7-13-4.5-25.5-8.3-37.7c-3.7-12-8.4-23.5-14-34.5c-5.8-11.5-12.6-22.5-20.3-32.8\n                c-7.5-10.1-15.8-19.5-24.9-28.2c-9.1-8.7-18.9-16.7-29.4-23.8c-10.5-7.1-21.5-13.4-33.1-18.6c-11.5-5.3-23.5-9.6-36-12.8\n                c-12.4-3.3-25.2-5.5-38.4-6.6c-6.3-0.5-12.8-0.8-19.2-0.8c-6.3,0-12.5,0.3-18.6,0.8c-13,1-25.6,3.2-37.9,6.4\n                c-12.7,3.3-24.9,7.6-36.6,12.9c-11.5,5.2-22.6,11.4-33,18.5c-10.7,7.2-20.7,15.4-30,24.3c-9.1,8.7-17.5,18.2-25,28.4\n                c-7.6,10.2-14.4,21.1-20.1,32.6c-5.5,11-10.2,22.4-14,34.3c-3.8,12.2-6.6,24.9-8.3,37.9C3.2,208.1,2.5,218,2.5,228\n                c0,2.8,0,5.5,0.2,8.3c0.5,13.3,2.1,26.3,4.8,38.9c2.7,12.7,6.5,25,11.3,36.9c4.8,12,10.6,23.5,17.3,34.3\n                c6.6,10.7,14.1,20.8,22.4,30.2c8.5,9.7,17.9,18.7,28,26.9c9.8,7.9,20.3,15,31.3,21.3c11.2,6.3,23,11.7,35.3,16\n                c12,4.2,24.4,7.5,37.1,9.6c12.3,2.1,24.9,3.2,37.8,3.2h0.5c13.3,0,26.2-1.2,38.8-3.4c12.4-2.2,24.5-5.4,36.2-9.5\n                c12.2-4.3,23.9-9.7,35-16c11.2-6.3,21.7-13.5,31.6-21.5c9.9-8.1,19.2-17,27.6-26.6c8.4-9.6,16-19.9,22.7-30.8\n                c6.7-10.9,12.4-22.4,17.2-34.3c4.6-11.6,8.3-23.8,11-36.3c2.6-12.4,4.2-25.2,4.7-38.2c0.1-2.9,0.2-5.8,0.2-8.8\n                C453.5,218,452.9,208.2,451.6,198.5z"
    }
  }), _vm._v(" "), _c("path", {
    staticClass: "st0",
    staticStyle: {
      fill: "url(#roulette_svg_outside)",
      "stroke-width": "5",
      "stroke-miterlimit": "10"
    },
    attrs: {
      d: "M451.6,198.5c-1.7-13-4.5-25.5-8.3-37.7c-3.7-12-8.4-23.5-14-34.5c-5.8-11.5-12.6-22.5-20.3-32.8\n                c-7.5-10.1-15.8-19.5-24.9-28.2c-9.1-8.7-18.9-16.7-29.4-23.8c-10.5-7.1-21.5-13.4-33.1-18.6c-11.5-5.3-23.5-9.6-36-12.8\n                c-12.4-3.3-25.2-5.5-38.4-6.6c-6.3-0.5-12.8-0.8-19.2-0.8c-6.3,0-12.5,0.3-18.6,0.8c-13,1-25.6,3.2-37.9,6.4\n                c-12.7,3.3-24.9,7.6-36.6,12.9c-11.5,5.2-22.6,11.4-33,18.5c-10.7,7.2-20.7,15.4-30,24.3c-9.1,8.7-17.5,18.2-25,28.4\n                c-7.6,10.2-14.4,21.1-20.1,32.6c-5.5,11-10.2,22.4-14,34.3c-3.8,12.2-6.6,24.9-8.3,37.9C3.2,208.1,2.5,218,2.5,228\n                c0,2.8,0,5.5,0.2,8.3c0.5,13.3,2.1,26.3,4.8,38.9c2.7,12.7,6.5,25,11.3,36.9c4.8,12,10.6,23.5,17.3,34.3\n                c6.6,10.7,14.1,20.8,22.4,30.2c8.5,9.7,17.9,18.7,28,26.9c9.8,7.9,20.3,15,31.3,21.3c11.2,6.3,23,11.7,35.3,16\n                c12,4.2,24.4,7.5,37.1,9.6c12.3,2.1,24.9,3.2,37.8,3.2h0.5c13.3,0,26.2-1.2,38.8-3.4c12.4-2.2,24.5-5.4,36.2-9.5\n                c12.2-4.3,23.9-9.7,35-16c11.2-6.3,21.7-13.5,31.6-21.5c9.9-8.1,19.2-17,27.6-26.6c8.4-9.6,16-19.9,22.7-30.8\n                c6.7-10.9,12.4-22.4,17.2-34.3c4.6-11.6,8.3-23.8,11-36.3c2.6-12.4,4.2-25.2,4.7-38.2c0.1-2.9,0.2-5.8,0.2-8.8\n                C453.5,218,452.9,208.2,451.6,198.5z"
    }
  })], 1)]), _vm._v(" "), _c("object", {
    staticClass: "arrow-body"
  }, [_c("svg", {
    attrs: {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 456 456"
    }
  }, [_c("path", {
    staticClass: "arrow",
    attrs: {
      d: "M 0,0 C 0,0 13.210946,4.9302783 19.951092,4.9342378 26.723411,4.9382235 40,0 40,0 L 19.951092,45 Z"
    }
  })])])])]) : _c("div", {
    staticClass: "line-container"
  }, [_c("div", {
    staticClass: "line"
  }, [_c("div", {
    ref: "line",
    staticClass: "line-body"
  }, [_vm._l(4, function (x) {
    return _vm._l(_vm.rouletteNums, function (n, i) {
      return _c("div", {
        key: "ln-rect-".concat(x, "-").concat(i),
        staticClass: "line-item white--text text-h5 d-flex align-center justify-center pa-0",
        "class": {
          green: i === 0,
          red: i !== 0 && i % 2 !== 0,
          black: i !== 0 && i % 2 === 0
        },
        style: "left: ".concat(((x - 1) * _vm.rouletteNums.length + i) * 68, "px")
      }, [_vm._v("\n              " + _vm._s(n) + "\n            ")]);
    });
  })], 2)]), _vm._v(" "), _c("object", {
    staticClass: "arrow-body arrow-1"
  }, [_c("svg", {
    attrs: {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 50 50"
    }
  }, [_c("path", {
    staticClass: "arrow",
    attrs: {
      d: "M 0,0 C 0,0 13.210946,4.9302783 19.951092,4.9342378 26.723411,4.9382235 40,0 40,0 L 19.951092,45 Z"
    }
  })])]), _vm._v(" "), _c("object", {
    staticClass: "arrow-body arrow-2"
  }, [_c("svg", {
    attrs: {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 50 50"
    }
  }, [_c("path", {
    staticClass: "arrow",
    attrs: {
      d: "M 0,0 C 0,0 13.210946,4.9302783 19.951092,4.9342378 26.723411,4.9382235 40,0 40,0 L 19.951092,45 Z"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-center align-center my-6 flex-wrap"
  }, [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    staticClass: "bet-input text-center mr-4",
    attrs: {
      dense: "",
      outlined: "",
      "full-width": false,
      label: _vm.$t("Bet"),
      rules: [_vm.validationInteger, function (v) {
        return _vm.validationMin(v, _vm.minBet);
      }, function (v) {
        return _vm.validationMax(v, Math.min(Math.floor(_vm.account.balance), _vm.maxBet));
      }],
      "prepend-inner-icon": "mdi-minus",
      "append-icon": "mdi-plus",
      "hide-details": ""
    },
    on: {
      "click:prepend-inner": _vm.decreaseBet,
      "click:append": _vm.increaseBet
    },
    scopedSlots: _vm._u([{
      key: "prepend-inner",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
          attrs: {
            small: "",
            text: "",
            icon: "",
            color: "primary",
            disalbed: _vm.bet == _vm.minBet
          },
          on: {
            click: function click($event) {
              _vm.bet = _vm.minBet;
            }
          }
        }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attrs: {
            small: ""
          }
        }, [_vm._v("mdi-arrow-down")])], 1), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
          attrs: {
            small: "",
            text: "",
            icon: "",
            color: "primary",
            disalbed: !_vm.canDecreaseBet
          },
          on: {
            click: _vm.decreaseBet
          }
        }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attrs: {
            small: ""
          }
        }, [_vm._v("mdi-minus")])], 1)];
      },
      proxy: true
    }, {
      key: "append",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
          attrs: {
            small: "",
            text: "",
            icon: "",
            color: "primary",
            disabled: !_vm.canIncreaseBet
          },
          on: {
            click: _vm.increaseBet
          }
        }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attrs: {
            small: ""
          }
        }, [_vm._v("mdi-plus")])], 1), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
          attrs: {
            small: "",
            text: "",
            icon: "",
            color: "primary",
            disabled: _vm.bet == _vm.maxBet
          },
          on: {
            click: function click($event) {
              _vm.bet = _vm.maxBet;
            }
          }
        }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attrs: {
            small: ""
          }
        }, [_vm._v("mdi-arrow-up")])], 1)];
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
  }), _vm._v(" "), _c("div", {
    staticClass: "mt-4 mt-sm-0 d-flex"
  }, [_c(vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_4__["default"], {
    staticClass: "bet-badge mr-4",
    attrs: {
      color: _vm.$vuetify.theme.dark ? "white" : "red",
      overlap: "",
      value: _vm.mybet["red"] !== undefined && _vm.mybet["red"] > 0,
      content: _vm.mybet["red"]
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      disabled: !_vm.canMakeBet,
      color: _vm.winColor == "red" ? "primary" : "red",
      outlined: _vm.winColor !== "red"
    },
    on: {
      click: function click($event) {
        return _vm.makeBet("red");
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Bet red")) + "\n          ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_4__["default"], {
    staticClass: "bet-badge mr-4",
    attrs: {
      color: _vm.$vuetify.theme.dark ? "white" : "green",
      overlap: "",
      value: _vm.mybet["zero"] !== undefined && _vm.mybet["zero"] > 0,
      content: _vm.mybet["zero"]
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      disabled: !_vm.canMakeBet,
      color: _vm.winColor == "zero" ? "primary" : "green",
      outlined: _vm.winColor !== "zero"
    },
    on: {
      click: function click($event) {
        return _vm.makeBet("zero");
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Bet zero")) + "\n          ")])], 1), _vm._v(" "), _c(vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_4__["default"], {
    staticClass: "bet-badge",
    attrs: {
      color: _vm.$vuetify.theme.dark ? "white" : "grey",
      overlap: "",
      value: _vm.mybet["black"] !== undefined && _vm.mybet["black"] > 0,
      content: _vm.mybet["black"]
    }
  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      disabled: !_vm.canMakeBet,
      color: _vm.winColor == "black" ? "primary" : "grey",
      outlined: _vm.winColor !== "black"
    },
    on: {
      click: function click($event) {
        return _vm.makeBet("black");
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Bet Black")) + "\n          ")])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "progress-body d-flex flex-column align-center"
  }, [_c("div", {
    staticClass: "progress mb-2",
    "class": {
      light: !_vm.$vuetify.theme.dark
    }
  }, [_c("div", {
    staticClass: "body",
    style: "width: ".concat(_vm.timer != 0 ? _vm.progress : 0, "%;")
  })]), _vm._v(" "), _c("div", [_c("animated-number", {
    attrs: {
      number: _vm.timer
    }
  }), _vm._v("\n        " + _vm._s(_vm.$t("s")) + "\n      ")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "d-flex bet-list mt-6 flex-column flex-sm-row bet-panels"
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    staticClass: "bet-red mr-sm-2 flex-grow-1 mb-4 mb-sm-0",
    "class": {
      transparent: _vm.winColor && _vm.winColor != "red",
      win: _vm.winColor == "red"
    },
    attrs: {
      outlined: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
    staticClass: "pb-1"
  }, [_c("span", {
    staticClass: "red--text text-uppercase"
  }, [_vm._v(_vm._s(_vm.$t("Red")))]), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"]), _vm._v(" "), _c("span", {
    staticClass: "text-uppercase mr-1"
  }, [_vm._v(_vm._s(_vm.$t("Win")))]), _vm._v("x" + _vm._s(_vm.config.paytable.red) + "\n        ")], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_c("div", {
    staticClass: "justify-center d-flex mb-2"
  }, [_c("div", {
    staticClass: "mr-1"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Total")) + "\n            ")]), _vm._v(" "), _c("animated-number", {
    attrs: {
      number: _vm.betsRed.reduce(function (acc, item) {
        return acc + item.bet;
      }, 0)
    }
  })], 1), _vm._v(" "), _c("transition-group", {
    staticClass: "pa-0",
    attrs: {
      name: "staggered-fade",
      tag: "ul",
      css: false
    },
    on: {
      "before-enter": _vm.beforeEnter,
      enter: _vm.enter,
      leave: _vm.leave
    }
  }, _vm._l(_vm.betsRed, function (item, index) {
    return _c("li", {
      key: "red-".concat(item.id),
      staticClass: "d-flex align-center pb-2 overflow-hidden",
      attrs: {
        "data-index": index
      }
    }, [_c("div", {
      staticClass: "d-flex align-center flex-grow-1"
    }, [_c("user-avatar", {
      staticClass: "mr-2",
      attrs: {
        user: item,
        size: 24
      }
    }), _vm._v(" "), _c("user-profile-modal", {
      attrs: {
        user: item
      }
    }), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"]), _vm._v(" "), _c("div", {
      staticClass: "accent--text bet-size"
    }, [_c("animated-number", {
      attrs: {
        number: item.bet
      }
    })], 1)], 1)]);
  }), 0)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    staticClass: "bet-zero mr-sm-2 flex-grow-1 mb-4 mb-sm-0",
    "class": {
      transparent: _vm.winColor && _vm.winColor != "zero",
      win: _vm.winColor == "zero"
    },
    attrs: {
      outlined: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
    staticClass: "pb-1"
  }, [_c("span", {
    staticClass: "green--text text-uppercase"
  }, [_vm._v(_vm._s(_vm.$t("Zero")))]), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"]), _vm._v(" "), _c("span", {
    staticClass: "text-uppercase mr-1"
  }, [_vm._v(_vm._s(_vm.$t("Win")))]), _vm._v("x" + _vm._s(_vm.config.paytable.zero) + "\n        ")], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_c("div", {
    staticClass: "justify-center d-flex mb-2"
  }, [_c("div", {
    staticClass: "mr-1"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Total")) + "\n            ")]), _vm._v(" "), _c("animated-number", {
    attrs: {
      number: _vm.betsZero.reduce(function (acc, item) {
        return acc + item.bet;
      }, 0)
    }
  })], 1), _vm._v(" "), _c("transition-group", {
    staticClass: "pa-0",
    attrs: {
      name: "staggered-fade",
      tag: "ul",
      css: false
    },
    on: {
      "before-enter": _vm.beforeEnter,
      enter: _vm.enter,
      leave: _vm.leave
    }
  }, _vm._l(_vm.betsZero, function (item, index) {
    return _c("li", {
      key: "zero-".concat(item.id),
      staticClass: "d-flex pb-2 align-center overflow-hidden",
      attrs: {
        "data-index": index
      }
    }, [_c("div", {
      staticClass: "d-flex align-center flex-grow-1"
    }, [_c("user-avatar", {
      staticClass: "mr-2",
      attrs: {
        user: item,
        size: 24
      }
    }), _vm._v(" "), _c("user-profile-modal", {
      attrs: {
        user: item
      }
    }), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"]), _vm._v(" "), _c("div", {
      staticClass: "accent--text"
    }, [_c("animated-number", {
      attrs: {
        number: item.bet
      }
    })], 1)], 1)]);
  }), 0)], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    staticClass: "bet-black flex-grow-1 mb-4 mb-sm-0",
    "class": {
      transparent: _vm.winColor && _vm.winColor != "black",
      win: _vm.winColor == "black"
    },
    attrs: {
      outlined: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle, {
    staticClass: "pb-1"
  }, [_c("span", {
    staticClass: "grey--text text-uppercase"
  }, [_vm._v(_vm._s(_vm.$t("Black")))]), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"]), _vm._v(" "), _c("span", {
    staticClass: "text-uppercase mr-1"
  }, [_vm._v(_vm._s(_vm.$t("Win")))]), _vm._v("x" + _vm._s(_vm.config.paytable.black) + "\n        ")], 1), _vm._v(" "), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText, [_c("div", {
    staticClass: "justify-center d-flex mb-2"
  }, [_c("div", {
    staticClass: "mr-1"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Total")) + "\n            ")]), _vm._v(" "), _c("animated-number", {
    attrs: {
      number: _vm.betsBlack.reduce(function (acc, item) {
        return acc + item.bet;
      }, 0)
    }
  })], 1), _vm._v(" "), _c("transition-group", {
    staticClass: "pa-0",
    attrs: {
      name: "staggered-fade",
      tag: "ul",
      css: false
    },
    on: {
      "before-enter": _vm.beforeEnter,
      enter: _vm.enter,
      leave: _vm.leave
    }
  }, _vm._l(_vm.betsBlack, function (item, index) {
    return _c("li", {
      key: "black-".concat(item.id),
      staticClass: "d-flex pb-2 align-center overflow-hidden",
      attrs: {
        "data-index": index
      }
    }, [_c("div", {
      staticClass: "d-flex align-center flex-grow-1"
    }, [_c("user-avatar", {
      staticClass: "mr-2",
      attrs: {
        user: item,
        size: 24
      }
    }), _vm._v(" "), _c("user-profile-modal", {
      attrs: {
        user: item
      }
    }), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"]), _vm._v(" "), _c("div", {
      staticClass: "accent--text"
    }, [_c("animated-number", {
      attrs: {
        number: item.bet
      }
    })], 1)], 1)]);
  }), 0)], 1)], 1)], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MultiplayerGameEvent.vue?vue&type=template&id=d7b4090e&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MultiplayerGameEvent.vue?vue&type=template&id=d7b4090e& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div");
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=template&id=46fb6596&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=template&id=46fb6596&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_46fb6596_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_46fb6596_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_46fb6596_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./game.vue?vue&type=template&id=46fb6596&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/game.vue?vue&type=template&id=46fb6596&scoped=true&");


/***/ }),

/***/ "./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_template_id_29e85514_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_template_id_29e85514_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockPreloader_vue_vue_type_template_id_29e85514_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BlockPreloader.vue?vue&type=template&id=29e85514&scoped=true&");


/***/ }),

/***/ "./resources/js/components/MultiplayerGameEvent.vue?vue&type=template&id=d7b4090e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/MultiplayerGameEvent.vue?vue&type=template&id=d7b4090e& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiplayerGameEvent_vue_vue_type_template_id_d7b4090e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiplayerGameEvent_vue_vue_type_template_id_d7b4090e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiplayerGameEvent_vue_vue_type_template_id_d7b4090e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MultiplayerGameEvent.vue?vue&type=template&id=d7b4090e& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MultiplayerGameEvent.vue?vue&type=template&id=d7b4090e&");


/***/ })

}]);