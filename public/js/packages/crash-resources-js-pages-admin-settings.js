"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/crash-resources-js-pages-admin-settings"],{

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/crash/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/crash/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
        GAME_CRASH_CATEGORIES: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".categories")),
        GAME_CRASH_BANNER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".banner")),
        GAME_CRASH_BACKGROUND: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".background")),
        GAME_CRASH_MIN_BET: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".min_bet")),
        GAME_CRASH_MAX_BET: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".max_bet")),
        GAME_CRASH_BET_CHANGE_AMOUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".bet_change_amount")),
        GAME_CRASH_DEFAULT_BET_AMOUNT: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".default_bet_amount")),
        GAME_CRASH_DURATION: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".duration")),
        GAME_CRASH_INTERVAL: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".interval")),
        GAME_CRASH_BASE_NUMBER: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".base_number")),
        GAME_CRASH_BOTS_ENABLED: '' + (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".bots_enabled")),
        GAME_CRASH_PAYOUT_INTERVALS: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".payout_intervals")),
        GAME_CRASH_ANIMATION: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".animation")),
        GAME_CRASH_SOUNDS_WIN: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".sounds.win")),
        GAME_CRASH_SOUNDS_CRASH: (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)("".concat(this.packageId, ".sounds.crash"))
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
  },
  methods: {
    addPayoutInterval: function addPayoutInterval() {
      var intervals = this.variables.GAME_CRASH_PAYOUT_INTERVALS;
      intervals.push(intervals[intervals.length - 1] + 1.00);
    },
    deletePayoutInterval: function deletePayoutInterval(index) {
      this.variables.GAME_CRASH_PAYOUT_INTERVALS.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./packages/crash/resources/js/pages/admin/settings.vue":
/*!**************************************************************!*\
  !*** ./packages/crash/resources/js/pages/admin/settings.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_vue_vue_type_template_id_44ae78a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=44ae78a4& */ "./packages/crash/resources/js/pages/admin/settings.vue?vue&type=template&id=44ae78a4&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./packages/crash/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_44ae78a4___WEBPACK_IMPORTED_MODULE_0__.render,
  _settings_vue_vue_type_template_id_44ae78a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/crash/resources/js/pages/admin/settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/crash/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./packages/crash/resources/js/pages/admin/settings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/crash/resources/js/pages/admin/settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/crash/resources/js/pages/admin/settings.vue?vue&type=template&id=44ae78a4&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/crash/resources/js/pages/admin/settings.vue?vue&type=template&id=44ae78a4& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/VAlert.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCombobox */ "./node_modules/vuetify/lib/components/VCombobox/VCombobox.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/VSwitch.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");












var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      flat: ""
    }
  }, [_vm.pusherEnabled ? _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardText, [_c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      dense: "",
      outlined: "",
      text: "",
      color: "warning"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t("Steps to take after saving the game settings")) + ":\n      "), _c("a", {
    attrs: {
      href: "/admin/help/crash#q05"
    }
  }, [_vm._v(_vm._s(_vm.$t("read more")))])]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_vm._v(_vm._s(_vm.$t("General")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_6__["default"], [_c(vuetify_lib_components_VCombobox__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      value: _vm.form.GAME_CRASH_CATEGORIES,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CRASH_CATEGORIES", $$v);
      },
      expression: "form.GAME_CRASH_CATEGORIES"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Banner"),
      name: "banner",
      folder: "games/".concat(_vm.packageId)
    },
    model: {
      value: _vm.form.GAME_CRASH_BANNER,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CRASH_BANNER", $$v);
      },
      expression: "form.GAME_CRASH_BANNER"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Background image"),
      name: "background",
      folder: "games/".concat(_vm.packageId),
      clearable: true
    },
    model: {
      value: _vm.form.GAME_CRASH_BACKGROUND,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CRASH_BACKGROUND", $$v);
      },
      expression: "form.GAME_CRASH_BACKGROUND"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      label: _vm.$t("Min bet"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_CRASH_MIN_BET"),
      "error-messages": _vm.form.errors.get("GAME_CRASH_MIN_BET"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CRASH_MIN_BET");
      }
    },
    model: {
      value: _vm.form.GAME_CRASH_MIN_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CRASH_MIN_BET", _vm._n($$v));
      },
      expression: "form.GAME_CRASH_MIN_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      label: _vm.$t("Max bet"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_CRASH_MAX_BET"),
      "error-messages": _vm.form.errors.get("GAME_CRASH_MAX_BET"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CRASH_MAX_BET");
      }
    },
    model: {
      value: _vm.form.GAME_CRASH_MAX_BET,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CRASH_MAX_BET", _vm._n($$v));
      },
      expression: "form.GAME_CRASH_MAX_BET"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      label: _vm.$t("Bet increment / decrement amount"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_CRASH_BET_CHANGE_AMOUNT"),
      "error-messages": _vm.form.errors.get("GAME_CRASH_BET_CHANGE_AMOUNT"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CRASH_BET_CHANGE_AMOUNT");
      }
    },
    model: {
      value: _vm.form.GAME_CRASH_BET_CHANGE_AMOUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CRASH_BET_CHANGE_AMOUNT", _vm._n($$v));
      },
      expression: "form.GAME_CRASH_BET_CHANGE_AMOUNT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      label: _vm.$t("Default bet amount"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_CRASH_DEFAULT_BET_AMOUNT"),
      "error-messages": _vm.form.errors.get("GAME_CRASH_DEFAULT_BET_AMOUNT"),
      outlined: "",
      suffix: _vm.$t("credits")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CRASH_DEFAULT_BET_AMOUNT");
      }
    },
    model: {
      value: _vm.form.GAME_CRASH_DEFAULT_BET_AMOUNT,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CRASH_DEFAULT_BET_AMOUNT", _vm._n($$v));
      },
      expression: "form.GAME_CRASH_DEFAULT_BET_AMOUNT"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      label: _vm.$t("Betting round duration"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_CRASH_DURATION"),
      "error-messages": _vm.form.errors.get("GAME_CRASH_DURATION"),
      outlined: "",
      suffix: _vm.$t("seconds")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CRASH_DURATION");
      }
    },
    model: {
      value: _vm.form.GAME_CRASH_DURATION,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CRASH_DURATION", _vm._n($$v));
      },
      expression: "form.GAME_CRASH_DURATION"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      label: _vm.$t("Delay before next game starts"),
      rules: [_vm.validationInteger, _vm.validationPositiveNumber],
      error: _vm.form.errors.has("GAME_CRASH_INTERVAL"),
      "error-messages": _vm.form.errors.get("GAME_CRASH_INTERVAL"),
      outlined: "",
      suffix: _vm.$t("seconds")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CRASH_INTERVAL");
      }
    },
    model: {
      value: _vm.form.GAME_CRASH_INTERVAL,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CRASH_INTERVAL", _vm._n($$v));
      },
      expression: "form.GAME_CRASH_INTERVAL"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      label: _vm.$t("Exponential function base number"),
      rules: [function (v) {
        return _vm.validationMin(v, 1);
      }, _vm.validationNumeric],
      error: _vm.form.errors.has("GAME_CRASH_BASE_NUMBER"),
      "error-messages": _vm.form.errors.get("GAME_CRASH_BASE_NUMBER"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CRASH_BASE_NUMBER");
      }
    },
    model: {
      value: _vm.form.GAME_CRASH_BASE_NUMBER,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CRASH_BASE_NUMBER", _vm._n($$v));
      },
      expression: "form.GAME_CRASH_BASE_NUMBER"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attrs: {
      label: _vm.$t("Enable bots"),
      color: "primary",
      "false-value": "false",
      "true-value": "true"
    },
    model: {
      value: _vm.form.GAME_CRASH_BOTS_ENABLED,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CRASH_BOTS_ENABLED", $$v);
      },
      expression: "form.GAME_CRASH_BOTS_ENABLED"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_vm._v(_vm._s(_vm.$t("Payout intervals")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_6__["default"], [_vm._l(_vm.form.GAME_CRASH_PAYOUT_INTERVALS, function (maxPayout, i) {
    return [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: i,
      attrs: {
        label: _vm.$t("Interval {0}", [i + 1]),
        rules: [_vm.validationPositiveNumber],
        error: _vm.form.errors.has("GAME_CRASH_PAYOUT_INTERVALS"),
        "error-messages": _vm.form.errors.get("GAME_CRASH_PAYOUT_INTERVALS"),
        outlined: "",
        prefix: (i > 0 ? (_vm.form.GAME_CRASH_PAYOUT_INTERVALS[i - 1] + 0.01).toFixed(2) : 1.01) + " - ",
        "append-outer-icon": "mdi-delete"
      },
      on: {
        keydown: function keydown($event) {
          return _vm.clearFormErrors($event, "GAME_CRASH_PAYOUT_INTERVALS");
        },
        "click:append-outer": function clickAppendOuter($event) {
          return _vm.deletePayoutInterval(i);
        }
      },
      model: {
        value: _vm.form.GAME_CRASH_PAYOUT_INTERVALS[i],
        callback: function callback($$v) {
          _vm.$set(_vm.form.GAME_CRASH_PAYOUT_INTERVALS, i, _vm._n($$v));
        },
        expression: "form.GAME_CRASH_PAYOUT_INTERVALS[i]"
      }
    })];
  }), _vm._v(" "), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_10__["default"], {
    attrs: {
      color: "primary"
    },
    on: {
      click: _vm.addPayoutInterval
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Add payout interval")) + "\n          ")])], 2)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_vm._v(_vm._s(_vm.$t("Animation")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_6__["default"], [_c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      label: _vm.$t("Max animation time"),
      rules: [_vm.validationPositiveInteger],
      error: _vm.form.errors.has("GAME_CRASH_ANIMATION.time_limit"),
      "error-messages": _vm.form.errors.get("GAME_CRASH_ANIMATION.time_limit"),
      outlined: "",
      suffix: _vm.$t("seconds")
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CRASH_ANIMATION.time_limit");
      }
    },
    model: {
      value: _vm.form.GAME_CRASH_ANIMATION.time_limit,
      callback: function callback($$v) {
        _vm.$set(_vm.form.GAME_CRASH_ANIMATION, "time_limit", _vm._n($$v));
      },
      expression: "form.GAME_CRASH_ANIMATION.time_limit"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      label: _vm.$t("Number of airplanes"),
      rules: [_vm.validationNonNegativeInteger],
      error: _vm.form.errors.has("GAME_CRASH_ANIMATION.airplanes_count"),
      "error-messages": _vm.form.errors.get("GAME_CRASH_ANIMATION.airplanes_count"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CRASH_ANIMATION.airplanes_count");
      }
    },
    model: {
      value: _vm.form.GAME_CRASH_ANIMATION.airplanes_count,
      callback: function callback($$v) {
        _vm.$set(_vm.form.GAME_CRASH_ANIMATION, "airplanes_count", _vm._n($$v));
      },
      expression: "form.GAME_CRASH_ANIMATION.airplanes_count"
    }
  }), _vm._v(" "), _c(vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attrs: {
      label: _vm.$t("Number of clouds"),
      rules: [_vm.validationNonNegativeInteger],
      error: _vm.form.errors.has("GAME_CRASH_ANIMATION.clouds_count"),
      "error-messages": _vm.form.errors.get("GAME_CRASH_ANIMATION.clouds_count"),
      outlined: ""
    },
    on: {
      keydown: function keydown($event) {
        return _vm.clearFormErrors($event, "GAME_CRASH_ANIMATION.clouds_count");
      }
    },
    model: {
      value: _vm.form.GAME_CRASH_ANIMATION.clouds_count,
      callback: function callback($$v) {
        _vm.$set(_vm.form.GAME_CRASH_ANIMATION, "clouds_count", _vm._n($$v));
      },
      expression: "form.GAME_CRASH_ANIMATION.clouds_count"
    }
  })], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__["default"], [_vm._v(_vm._s(_vm.$t("Sounds")))]), _vm._v(" "), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_6__["default"], [_c("file-upload", {
    attrs: {
      label: _vm.$t("Win"),
      name: "win",
      folder: "games/".concat(_vm.packageId),
      accept: ".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",
      clearable: true
    },
    model: {
      value: _vm.form.GAME_CRASH_SOUNDS_WIN,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CRASH_SOUNDS_WIN", $$v);
      },
      expression: "form.GAME_CRASH_SOUNDS_WIN"
    }
  }), _vm._v(" "), _c("file-upload", {
    attrs: {
      label: _vm.$t("Crash"),
      name: "lose",
      folder: "games/".concat(_vm.packageId),
      accept: ".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",
      clearable: true
    },
    model: {
      value: _vm.form.GAME_CRASH_SOUNDS_CRASH,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "GAME_CRASH_SOUNDS_CRASH", $$v);
      },
      expression: "form.GAME_CRASH_SOUNDS_CRASH"
    }
  })], 1)], 1)], 1)], 1) : _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__.VCardText, [_c(vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

/***/ "./packages/crash/resources/js/pages/admin/settings.vue?vue&type=template&id=44ae78a4&":
/*!*********************************************************************************************!*\
  !*** ./packages/crash/resources/js/pages/admin/settings.vue?vue&type=template&id=44ae78a4& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_44ae78a4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_44ae78a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_44ae78a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=44ae78a4& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/crash/resources/js/pages/admin/settings.vue?vue&type=template&id=44ae78a4&");


/***/ })

}]);