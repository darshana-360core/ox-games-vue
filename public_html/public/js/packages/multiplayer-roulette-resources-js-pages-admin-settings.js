"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/multiplayer-roulette-resources-js-pages-admin-settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _mixins_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/mixins/Form */ "./resources/js/mixins/Form.vue");
/* harmony import */ var _components_Admin_FileUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Admin/FileUpload */ "./resources/js/components/Admin/FileUpload.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
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
        GAME_MULTIPLAYER_ROULETTE_CATEGORIES: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".categories")),
        GAME_MULTIPLAYER_ROULETTE_BANNER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".banner")),
        GAME_MULTIPLAYER_ROULETTE_BACKGROUND: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".background")),
        GAME_MULTIPLAYER_ROULETTE_MIN_BET: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".min_bet")),
        GAME_MULTIPLAYER_ROULETTE_MAX_BET: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".max_bet")),
        GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".bet_change_amount")),
        GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".default_bet_amount")),
        GAME_MULTIPLAYER_ROULETTE_DURATION: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".duration")),
        GAME_MULTIPLAYER_ROULETTE_INTERVAL: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".interval")),
        GAME_MULTIPLAYER_ROULETTE_MODE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".mode")),
        GAME_MULTIPLAYER_ROULETTE_BOTS_ENABLED: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".bots_enabled")),
        GAME_MULTIPLAYER_ROULETTE_PAYTABLE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".paytable")),
        GAME_MULTIPLAYER_ROULETTE_SOUNDS_WIN: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".sounds.win")),
        GAME_MULTIPLAYER_ROULETTE_SOUNDS_LOSE: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".sounds.lose"))
      }
    };
  },
  computed: {
    pusherEnabled: function pusherEnabled() {
      return this.form.PUSHER_APP_ID && this.form.PUSHER_APP_KEY && this.form.PUSHER_APP_SECRET && this.form.PUSHER_APP_CLUSTER;
    }
  },
  created: function created() {
    this.$emit('input', this.variables);
  }
});

/***/ }),

/***/ "./packages/multiplayer-roulette/resources/js/pages/admin/settings.vue":
/*!*****************************************************************************!*\
  !*** ./packages/multiplayer-roulette/resources/js/pages/admin/settings.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_vue_vue_type_template_id_2b9829e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=2b9829e6& */ "./packages/multiplayer-roulette/resources/js/pages/admin/settings.vue?vue&type=template&id=2b9829e6&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./packages/multiplayer-roulette/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_2b9829e6___WEBPACK_IMPORTED_MODULE_0__.render,
  _settings_vue_vue_type_template_id_2b9829e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/multiplayer-roulette/resources/js/pages/admin/settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/multiplayer-roulette/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./packages/multiplayer-roulette/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/admin/settings.vue?vue&type=template&id=2b9829e6&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/admin/settings.vue?vue&type=template&id=2b9829e6& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/VAlert.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCombobox */ "./node_modules/vuetify/lib/components/VCombobox/VCombobox.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/VSelect.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/VSwitch.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");












var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      flat: ""
    }
  }, [_vm.pusherEnabled ? _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardText, [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("General")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      value: _vm.form.GAME_MULTIPLAYER_ROULETTE_CATEGORIES,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_ROULETTE_CATEGORIES", $$v);
      },
      expression: "form.GAME_MULTIPLAYER_ROULETTE_CATEGORIES"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Banner"),
      name: "banner",
      folder: "games/".concat(_vm.packageId)
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_ROULETTE_BANNER,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_ROULETTE_BANNER", $$v);
      },
      expression: "form.GAME_MULTIPLAYER_ROULETTE_BANNER"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Background image"),
      name: "background",
      folder: "games/".concat(_vm.packageId),
      clearable: true
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_ROULETTE_BACKGROUND,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_ROULETTE_BACKGROUND", $$v);
      },
      expression: "form.GAME_MULTIPLAYER_ROULETTE_BACKGROUND"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Min bet"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_MULTIPLAYER_ROULETTE_MIN_BET"),
      "error-messages": _vm.form.errors.get("GAME_MULTIPLAYER_ROULETTE_MIN_BET"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_MULTIPLAYER_ROULETTE_MIN_BET");
      }
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_ROULETTE_MIN_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_ROULETTE_MIN_BET", _vm._n($$v));
      },
      expression: "form.GAME_MULTIPLAYER_ROULETTE_MIN_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Max bet"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_MULTIPLAYER_ROULETTE_MAX_BET"),
      "error-messages": _vm.form.errors.get("GAME_MULTIPLAYER_ROULETTE_MAX_BET"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_MULTIPLAYER_ROULETTE_MAX_BET");
      }
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_ROULETTE_MAX_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_ROULETTE_MAX_BET", _vm._n($$v));
      },
      expression: "form.GAME_MULTIPLAYER_ROULETTE_MAX_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Bet increment / decrement amount"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT"),
      "error-messages": _vm.form.errors.get("GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT");
      }
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT", _vm._n($$v));
      },
      expression: "form.GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Default bet amount"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT"),
      "error-messages": _vm.form.errors.get("GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT");
      }
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT", _vm._n($$v));
      },
      expression: "form.GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Betting round duration"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_MULTIPLAYER_ROULETTE_DURATION"),
      "error-messages": _vm.form.errors.get("GAME_MULTIPLAYER_ROULETTE_DURATION"),
      outlined: "",
      suffix: _vm.$t("seconds")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_MULTIPLAYER_ROULETTE_DURATION");
      }
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_ROULETTE_DURATION,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_ROULETTE_DURATION", _vm._n($$v));
      },
      expression: "form.GAME_MULTIPLAYER_ROULETTE_DURATION"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Delay before next game starts"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_MULTIPLAYER_ROULETTE_INTERVAL"),
      "error-messages": _vm.form.errors.get("GAME_MULTIPLAYER_ROULETTE_INTERVAL"),
      outlined: "",
      suffix: _vm.$t("seconds")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_MULTIPLAYER_ROULETTE_INTERVAL");
      }
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_ROULETTE_INTERVAL,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_ROULETTE_INTERVAL", _vm._n($$v));
      },
      expression: "form.GAME_MULTIPLAYER_ROULETTE_INTERVAL"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      items: [{
        value: "wheel",
        text: _vm.$t("Wheel")
      }, {
        value: "line",
        text: _vm.$t("Line")
      }],
      label: _vm.$t("Default mode"),
      error: _vm.form.errors.has("GAME_MULTIPLAYER_ROULETTE_MODE"),
      "error-messages": _vm.form.errors.get("GAME_MULTIPLAYER_ROULETTE_MODE"),
      "persistent-hint": "",
      outlined: ""
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_ROULETTE_MODE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_ROULETTE_MODE", $$v);
      },
      expression: "form.GAME_MULTIPLAYER_ROULETTE_MODE"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Enable bots"),
      color: "primary",
      "false-value": "false",
      "true-value": "true"
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_ROULETTE_BOTS_ENABLED,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_ROULETTE_BOTS_ENABLED", $$v);
      },
      expression: "form.GAME_MULTIPLAYER_ROULETTE_BOTS_ENABLED"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Paytable")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Red"),
      rules: [_vm.validationPositiveNumber],
      outlined: "",
      prefix: _vm.$t("Bet") + " x "
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.red");
      }
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.red,
      callback: function callback($$v) {
        _vm.$set(_vm.form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE, "red", _vm._n($$v));
      },
      expression: "form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.red"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Black"),
      rules: [_vm.validationPositiveNumber],
      outlined: "",
      prefix: _vm.$t("Bet") + " x "
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.black");
      }
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.black,
      callback: function callback($$v) {
        _vm.$set(_vm.form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE, "black", _vm._n($$v));
      },
      expression: "form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.black"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attrs: {
      label: _vm.$t("Zero"),
      rules: [_vm.validationPositiveNumber],
      outlined: "",
      prefix: _vm.$t("Bet") + " x "
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.zero");
      }
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.zero,
      callback: function callback($$v) {
        _vm.$set(_vm.form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE, "zero", _vm._n($$v));
      },
      expression: "form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.zero"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_vm._v(_vm._s(_vm.$t("Sounds")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_c("file-upload", {
    attrs: {
      label: _vm.$t("Win"),
      name: "win",
      folder: "games/".concat(_vm.packageId),
      accept: ".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",
      clearable: true
    },
    model: {
      value: _vm.form.GAME_MULTIPLAYER_ROULETTE_SOUNDS_WIN,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_ROULETTE_SOUNDS_WIN", $$v);
      },
      expression: "form.GAME_MULTIPLAYER_ROULETTE_SOUNDS_WIN"
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
      value: _vm.form.GAME_MULTIPLAYER_ROULETTE_SOUNDS_LOSE,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_MULTIPLAYER_ROULETTE_SOUNDS_LOSE", $$v);
      },
      expression: "form.GAME_MULTIPLAYER_ROULETTE_SOUNDS_LOSE"
    }
  })], 1)], 1)], 1)], 1) : _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardText, [_c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_10__["default"], {
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      color: "error"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t("This game requires Pusher.")) + "\n      "), _c("a", {
    attrs: {
      href: "/admin/help/app#q28"
    }
  }, [_vm._v(_vm._s(_vm.$t("How to integrate Pusher?")))])])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/multiplayer-roulette/resources/js/pages/admin/settings.vue?vue&type=template&id=2b9829e6&":
/*!************************************************************************************************************!*\
  !*** ./packages/multiplayer-roulette/resources/js/pages/admin/settings.vue?vue&type=template&id=2b9829e6& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_2b9829e6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_2b9829e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_2b9829e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=2b9829e6& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/multiplayer-roulette/resources/js/pages/admin/settings.vue?vue&type=template&id=2b9829e6&");


/***/ })

}]);