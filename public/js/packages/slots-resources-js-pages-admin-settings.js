"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/slots-resources-js-pages-admin-settings"],{

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }






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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_9f694888_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_9f694888_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_9f694888_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/slots/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./packages/slots/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_9f694888_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=style&index=0&id=9f694888&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=template&id=9f694888&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=template&id=9f694888&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_9f694888_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_9f694888_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_9f694888_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=9f694888&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/admin/settings.vue?vue&type=template&id=9f694888&scoped=true&");


/***/ })

}]);