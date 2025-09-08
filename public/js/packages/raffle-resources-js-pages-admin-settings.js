"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/raffle-resources-js-pages-admin-settings"],{

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/raffle/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/raffle/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
        RAFFLE_DISPLAY_COUNT_HOME_PAGE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".display_count_home_page")),
        RAFFLE_DISPLAY_COUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".display_count")),
        RAFFLE_LOAD_COUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".load_count")),
        RAFFLE_BOTS_FREQUENCY: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".bots.frequency")),
        RAFFLE_BOTS_MIN_COUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".bots.min_count")),
        RAFFLE_BOTS_MAX_COUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".bots.max_count")),
        RAFFLE_BOTS_MIN_TICKETS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".bots.min_tickets")),
        RAFFLE_BOTS_MAX_TICKETS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".bots.max_tickets"))
      }
    };
  },
  computed: {
    frequencies: function frequencies() {
      return [{
        value: 'everyMinute',
        text: this.$t('Every minute')
      }, {
        value: 'everyFiveMinutes',
        text: this.$t('Every five minutes')
      }, {
        value: 'everyTenMinutes',
        text: this.$t('Every ten minutes')
      }, {
        value: 'everyFifteenMinutes',
        text: this.$t('Every fifteen minutes')
      }, {
        value: 'everyThirtyMinutes',
        text: this.$t('Every thirty minutes')
      }, {
        value: 'hourly',
        text: this.$t('Every hour')
      }];
    }
  },
  created: function created() {
    this.$emit('input', this.variables);
  }
});

/***/ }),

/***/ "./packages/raffle/resources/js/pages/admin/settings.vue":
/*!***************************************************************!*\
  !*** ./packages/raffle/resources/js/pages/admin/settings.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_vue_vue_type_template_id_5fe555f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=5fe555f2& */ "./packages/raffle/resources/js/pages/admin/settings.vue?vue&type=template&id=5fe555f2&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./packages/raffle/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_5fe555f2___WEBPACK_IMPORTED_MODULE_0__.render,
  _settings_vue_vue_type_template_id_5fe555f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/raffle/resources/js/pages/admin/settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/raffle/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./packages/raffle/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/raffle/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/raffle/resources/js/pages/admin/settings.vue?vue&type=template&id=5fe555f2&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/raffle/resources/js/pages/admin/settings.vue?vue&type=template&id=5fe555f2& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/VSelect.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");









var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      flat: ""
    }
  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardText, [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("General")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Max number of raffles on home page"),
      rules: [_vm.validationPositiveInteger],
      error: _vm.form.errors.has("RAFFLE_DISPLAY_COUNT_HOME_PAGE"),
      "error-messages": _vm.form.errors.get("RAFFLE_DISPLAY_COUNT_HOME_PAGE"),
      outlined: "",
      "persistent-hint": ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "RAFFLE_DISPLAY_COUNT_HOME_PAGE");
      }
    },
    model: {
      value: _vm.form.RAFFLE_DISPLAY_COUNT_HOME_PAGE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "RAFFLE_DISPLAY_COUNT_HOME_PAGE", _vm._n($$v));
      },
      expression: "form.RAFFLE_DISPLAY_COUNT_HOME_PAGE"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Display count"),
      hint: _vm.$t("How many raffles are preloaded on the Current raffles page."),
      "persistent-hint": true,
      rules: [_vm.validationPositiveInteger],
      error: _vm.form.errors.has("RAFFLE_DISPLAY_COUNT"),
      "error-messages": _vm.form.errors.get("RAFFLE_DISPLAY_COUNT"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "RAFFLE_DISPLAY_COUNT");
      }
    },
    model: {
      value: _vm.form.RAFFLE_DISPLAY_COUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "RAFFLE_DISPLAY_COUNT", _vm._n($$v));
      },
      expression: "form.RAFFLE_DISPLAY_COUNT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Load count"),
      hint: _vm.$t("How many raffles are loaded when 'Load more' button is clicked."),
      "persistent-hint": true,
      rules: [_vm.validationPositiveInteger],
      error: _vm.form.errors.has("RAFFLE_LOAD_COUNT"),
      "error-messages": _vm.form.errors.get("RAFFLE_LOAD_COUNT"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "RAFFLE_LOAD_COUNT");
      }
    },
    model: {
      value: _vm.form.RAFFLE_LOAD_COUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "RAFFLE_LOAD_COUNT", _vm._n($$v));
      },
      expression: "form.RAFFLE_LOAD_COUNT"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Bots")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      items: _vm.frequencies,
      label: _vm.$t("Frequency"),
      error: _vm.form.errors.has("RAFFLE_BOTS_FREQUENCY"),
      "error-messages": _vm.form.errors.get("RAFFLE_BOTS_FREQUENCY"),
      hint: _vm.$t("How often bots will awake."),
      "persistent-hint": "",
      outlined: ""
    },
    model: {
      value: _vm.form.RAFFLE_BOTS_FREQUENCY,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "RAFFLE_BOTS_FREQUENCY", $$v);
      },
      expression: "form.RAFFLE_BOTS_FREQUENCY"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Min bots"),
      rules: [function (v) {
        return _vm.validationNonNegativeInteger(parseInt(v, 10));
      }],
      error: _vm.form.errors.has("RAFFLE_BOTS_MIN_COUNT"),
      "error-messages": _vm.form.errors.get("RAFFLE_BOTS_MIN_COUNT"),
      outlined: "",
      hint: _vm.$t("Minimum number of bots to buy a raffle ticket during each cycle."),
      "persistent-hint": ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "RAFFLE_BOTS_MIN_COUNT");
      }
    },
    model: {
      value: _vm.form.RAFFLE_BOTS_MIN_COUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "RAFFLE_BOTS_MIN_COUNT", _vm._n($$v));
      },
      expression: "form.RAFFLE_BOTS_MIN_COUNT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Max bots"),
      rules: [function (v) {
        return _vm.validationNonNegativeInteger(parseInt(v, 10));
      }],
      error: _vm.form.errors.has("RAFFLE_BOTS_MAX_COUNT"),
      "error-messages": _vm.form.errors.get("RAFFLE_BOTS_MAX_COUNT"),
      outlined: "",
      hint: _vm.$t("Maximum number of bots to buy a raffle ticket during each cycle."),
      "persistent-hint": ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "RAFFLE_BOTS_MAX_COUNT");
      }
    },
    model: {
      value: _vm.form.RAFFLE_BOTS_MAX_COUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "RAFFLE_BOTS_MAX_COUNT", _vm._n($$v));
      },
      expression: "form.RAFFLE_BOTS_MAX_COUNT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Min tickets"),
      error: _vm.form.errors.has("RAFFLE_BOTS_MIN_TICKETS"),
      "error-messages": _vm.form.errors.get("RAFFLE_BOTS_MIN_TICKETS"),
      outlined: "",
      hint: _vm.$t("Minimum number of tickets to buy."),
      "persistent-hint": ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "RAFFLE_BOTS_MIN_TICKETS");
      }
    },
    model: {
      value: _vm.form.RAFFLE_BOTS_MIN_TICKETS,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "RAFFLE_BOTS_MIN_TICKETS", _vm._n($$v));
      },
      expression: "form.RAFFLE_BOTS_MIN_TICKETS"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attrs: {
      label: _vm.$t("Max tickets"),
      error: _vm.form.errors.has("RAFFLE_BOTS_MAX_TICKETS"),
      "error-messages": _vm.form.errors.get("RAFFLE_BOTS_MAX_TICKETS"),
      outlined: "",
      hint: _vm.$t("Maximum number of tickets to buy."),
      "persistent-hint": ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "RAFFLE_BOTS_MAX_TICKETS");
      }
    },
    model: {
      value: _vm.form.RAFFLE_BOTS_MAX_TICKETS,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "RAFFLE_BOTS_MAX_TICKETS", _vm._n($$v));
      },
      expression: "form.RAFFLE_BOTS_MAX_TICKETS"
    }
  })], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/raffle/resources/js/pages/admin/settings.vue?vue&type=template&id=5fe555f2&":
/*!**********************************************************************************************!*\
  !*** ./packages/raffle/resources/js/pages/admin/settings.vue?vue&type=template&id=5fe555f2& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_5fe555f2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_5fe555f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_5fe555f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=5fe555f2& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/raffle/resources/js/pages/admin/settings.vue?vue&type=template&id=5fe555f2&");


/***/ })

}]);