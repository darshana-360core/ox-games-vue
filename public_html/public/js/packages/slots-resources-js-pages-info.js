"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/slots-resources-js-pages-info"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/info.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/info.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      infoTab: 'tab-about'
    };
  },
  computed: {
    variations: function variations() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('slots.variations');
    },
    variation: function variation() {
      return this.variations[this.variationIndex];
    },
    variationIndex: function variationIndex() {
      var _this = this;
      return this.variations.findIndex(function (o) {
        return o.slug === _this.$route.params.slug;
      });
    }
  },
  methods: {
    symbolImagePath: function symbolImagePath(symbolIndex) {
      return this.variation.symbols[symbolIndex].image;
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/info.vue?vue&type=style&index=0&id=7dabe572&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/info.vue?vue&type=style&index=0&id=7dabe572&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".reel[data-v-7dabe572] {\n  max-height: 350px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/info.vue?vue&type=style&index=0&id=7dabe572&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/info.vue?vue&type=style&index=0&id=7dabe572&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_7dabe572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=style&index=0&id=7dabe572&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/info.vue?vue&type=style&index=0&id=7dabe572&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_7dabe572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_7dabe572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./packages/slots/resources/js/pages/info.vue":
/*!****************************************************!*\
  !*** ./packages/slots/resources/js/pages/info.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _info_vue_vue_type_template_id_7dabe572_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.vue?vue&type=template&id=7dabe572&scoped=true& */ "./packages/slots/resources/js/pages/info.vue?vue&type=template&id=7dabe572&scoped=true&");
/* harmony import */ var _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.vue?vue&type=script&lang=js& */ "./packages/slots/resources/js/pages/info.vue?vue&type=script&lang=js&");
/* harmony import */ var _info_vue_vue_type_style_index_0_id_7dabe572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info.vue?vue&type=style&index=0&id=7dabe572&lang=scss&scoped=true& */ "./packages/slots/resources/js/pages/info.vue?vue&type=style&index=0&id=7dabe572&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_vue_vue_type_template_id_7dabe572_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _info_vue_vue_type_template_id_7dabe572_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7dabe572",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/slots/resources/js/pages/info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/slots/resources/js/pages/info.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./packages/slots/resources/js/pages/info.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/info.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./packages/slots/resources/js/pages/info.vue?vue&type=style&index=0&id=7dabe572&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./packages/slots/resources/js/pages/info.vue?vue&type=style&index=0&id=7dabe572&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_7dabe572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=style&index=0&id=7dabe572&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/info.vue?vue&type=style&index=0&id=7dabe572&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/info.vue?vue&type=template&id=7dabe572&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/info.vue?vue&type=template&id=7dabe572&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/VChip.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VSpacer.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/VTab.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/VTabItem.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/VTabs.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/VTabsItems.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/VToolbar.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");
















var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], [_c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    scopedSlots: _vm._u([{
      key: "extension",
      fn: function fn() {
        return [_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            centered: "",
            "hide-slider": ""
          },
          model: {
            value: _vm.infoTab,
            callback: function callback($$v) {
              _vm.infoTab = $$v;
            },
            expression: "infoTab"
          }
        }, [_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attrs: {
            href: "#tab-about"
          }
        }, [_vm._v("\n          " + _vm._s(_vm.$t("How to play")) + "\n        ")]), _vm._v(" "), _c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attrs: {
            href: "#tab-paytable"
          }
        }, [_vm._v("\n          " + _vm._s(_vm.$t("Paytable")) + "\n        ")]), _vm._v(" "), _c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attrs: {
            href: "#tab-reels"
          }
        }, [_vm._v("\n          " + _vm._s(_vm.$t("Reels")) + "\n        ")])], 1)];
      },
      proxy: true
    }])
  }, [_c(vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_4__.VToolbarTitle, [_vm._v("\n      " + _vm._s(_vm.$t("Game information")) + "\n    ")]), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["default"]), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      icon: ""
    },
    on: {
      click: function click($event) {
        return _vm.$emit("close");
      }
    }
  }, [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["default"], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__["default"], {
    model: {
      value: _vm.infoTab,
      callback: function callback($$v) {
        _vm.infoTab = $$v;
      },
      expression: "infoTab"
    }
  }, [_c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      value: "tab-about"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      flat: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_10__.VCardText, {
    staticClass: "about-text"
  }, [_c("p", [_vm._v("\n            " + _vm._s(_vm.$t("The objective of the game is to get the symbols on the reels to fall in a perfect line behind one of the paylines.")) + "\n            " + _vm._s(_vm.$t("You can choose how many paylines to play in each round - from 1 to 20.")) + "\n            " + _vm._s(_vm.$t("Please note that your bet is multiplied by the number of paylines you play.")) + "\n          ")]), _vm._v(" "), _c("p", [_vm._v("\n            " + _vm._s(_vm.$t("Apart from regular symbols there can be magic symbols - wilds and scatters.")) + "\n            " + _vm._s(_vm.$t("Please check the Paytable tab to see if such symbols are enabled in this slot machine.")) + "\n          ")]), _vm._v(" "), _c("p", [_vm._v("\n            " + _vm._s(_vm.$t("The wild symbol has the power to substitute any symbol on the reel that it appears in to create a payline.")) + "\n            " + _vm._s(_vm.$t("The scatter symbols will pay out no matter where on the reels they appear, they do not need to land on a payline to win.")) + "\n          ")])])], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      value: "tab-paytable"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      flat: ""
    }
  }, [_vm.variation ? _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_10__.VCardText, _vm._l(_vm.variation.symbols, function (symbol, symbolIndex) {
    return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: symbolIndex
    }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_12__["default"], {
      staticClass: "text-center",
      attrs: {
        "align-self": "center"
      }
    }, [_c(vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
      attrs: {
        size: "64",
        tile: ""
      }
    }, [_c("img", {
      attrs: {
        src: _vm.symbolImagePath(symbolIndex),
        alt: _vm.symbolImagePath(symbolIndex)
      }
    })]), _vm._v(" "), symbol.wild ? _c("div", {
      staticClass: "mt-2"
    }, [_c(vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_14__["default"], {
      attrs: {
        color: "primary",
        outlined: ""
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.$t("Wild")) + "\n                ")])], 1) : _vm._e(), _vm._v(" "), symbol.scatter ? _c("div", {
      staticClass: "mt-2"
    }, [_c(vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_14__["default"], {
      attrs: {
        color: "primary",
        outlined: ""
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.$t("Scatter")) + "\n                ")])], 1) : _vm._e()], 1), _vm._v(" "), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_12__["default"], {
      attrs: {
        "align-self": "center"
      }
    }, [_vm._l(symbol.payouts, function (payout, payoutIndex) {
      return [payout > 0 ? _c("div", {
        key: payoutIndex
      }, [_vm._v("\n                  x" + _vm._s(payoutIndex + 1) + " " + _vm._s(_vm.$t("pays")) + " " + _vm._s(_vm.$t("bet")) + " " + _vm._s(symbol.scatter ? " x " + _vm.$t("lines") : "") + " x " + _vm._s(payout) + "\n                ")]) : _vm._e()];
    })], 2)], 1);
  }), 1) : _vm._e()], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      value: "tab-reels"
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      flat: ""
    }
  }, [_vm.variation ? _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_10__.VCardText, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["default"], _vm._l([0, 1, 2, 3, 4], function (reelIndex) {
    return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: reelIndex,
      staticClass: "reel overflow-y-auto text-center"
    }, _vm._l(_vm.variation.reels[reelIndex], function (symbolIndex, index) {
      return _c(vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        key: index,
        staticClass: "mb-3",
        attrs: {
          size: "64",
          tile: ""
        }
      }, [_c("img", {
        attrs: {
          src: _vm.symbolImagePath(symbolIndex),
          alt: _vm.symbolImagePath(symbolIndex)
        }
      })]);
    }), 1);
  }), 1)], 1) : _vm._e()], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/slots/resources/js/pages/info.vue?vue&type=template&id=7dabe572&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./packages/slots/resources/js/pages/info.vue?vue&type=template&id=7dabe572&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_7dabe572_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_7dabe572_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_7dabe572_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=template&id=7dabe572&scoped=true& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/slots/resources/js/pages/info.vue?vue&type=template&id=7dabe572&scoped=true&");


/***/ })

}]);