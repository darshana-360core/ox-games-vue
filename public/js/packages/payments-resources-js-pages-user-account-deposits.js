"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/payments-resources-js-pages-user-account-deposits"],{

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/components/DataTable */ "./resources/js/components/DataTable.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      if (to.query.status) {
        if (to.query.status === 'complete') {
          vm.$store.dispatch('message/success', {
            text: vm.$t('Deposit is successfully completed')
          });
        } else if (to.query.status === 'pending') {
          vm.$store.dispatch('message/warning', {
            text: vm.$t('Deposit is pending payment')
          });
        } else if (to.query.status === 'cancel') {
          vm.$store.dispatch('message/success', {
            text: vm.$t('Deposit is cancelled')
          });
        } else if (to.query.status === 'error') {
          vm.$store.dispatch('message/error', {
            text: vm.$t('There was an error while processing the deposit.')
          });
        }
        vm.$router.replace({
          name: 'user.account.deposits.index'
        });
      }
    });
  },
  middleware: ['auth', 'verified', '2fa_passed'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Deposits')
    };
  },
  computed: {
    headers: function headers() {
      return [{
        text: this.$t('ID'),
        value: 'id'
      }, {
        text: this.$t('Method'),
        value: 'method.name',
        sortable: false
      }, {
        text: this.$t('Amount'),
        value: 'payment_amount',
        align: 'left',
        format: 'float'
      }, {
        text: this.$t('Currency'),
        value: 'payment_currency',
        align: 'left'
      }, {
        text: this.$t('Credits'),
        value: 'amount',
        format: 'integer',
        align: 'left'
      }, {
        text: this.$t('Status'),
        value: 'status_title',
        align: 'left',
        sortable: false
      }, {
        text: this.$t('Transaction Hash'),
        value: 'external_id',
        align: 'left',
        sortable: false
      },
      // New column
      {
        text: this.$t('Created at'),
        value: 'created_at',
        align: 'right'
      }];
    }
  },
  created: function created() {
    this.$store.dispatch('auth/fetchUser');
  }
});

/***/ }),

/***/ "./packages/payments/resources/js/pages/user/account/deposits/index.vue":
/*!******************************************************************************!*\
  !*** ./packages/payments/resources/js/pages/user/account/deposits/index.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_4d3efd36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4d3efd36& */ "./packages/payments/resources/js/pages/user/account/deposits/index.vue?vue&type=template&id=4d3efd36&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./packages/payments/resources/js/pages/user/account/deposits/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4d3efd36___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_4d3efd36___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/payments/resources/js/pages/user/account/deposits/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/payments/resources/js/pages/user/account/deposits/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./packages/payments/resources/js/pages/user/account/deposits/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/index.vue?vue&type=template&id=4d3efd36&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/index.vue?vue&type=template&id=4d3efd36& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");



var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__["default"], [_c("data-table", {
    attrs: {
      title: _vm.$t("Deposits"),
      api: "/api/deposits",
      headers: _vm.headers,
      filters: ["period", "deposit-withdrawal-status"]
    },
    scopedSlots: _vm._u([{
      key: "table-prepend",
      fn: function fn() {
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
          staticClass: "mb-5",
          attrs: {
            color: "primary",
            to: {
              name: "user.account.deposits.create"
            }
          }
        }, [_vm._v("\n        " + _vm._s(_vm.$t("Make a deposit")) + "\n      ")])];
      },
      proxy: true
    }, {
      key: "item.status_title",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("span", {
          "class": {
            "green--text": item.is_completed,
            "error--text": item.is_cancelled
          }
        }, [_vm._v("\n        " + _vm._s(item.status_title === "Created" ? "Processing" : item.status_title) + "\n      ")])];
      }
    }, {
      key: "item.external_id",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_c("a", {
          attrs: {
            href: "https://polygonscan.com/tx/".concat(item.external_id),
            target: "_blank"
          }
        }, [_vm._v("\n        " + _vm._s(item.external_id && item.external_id.includes("DEPOSIT IN GAMES WITH TXN") ? "Deposited from Network" : "View Txn Hash") + "\n      ")])];
      }
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/payments/resources/js/pages/user/account/deposits/index.vue?vue&type=template&id=4d3efd36&":
/*!*************************************************************************************************************!*\
  !*** ./packages/payments/resources/js/pages/user/account/deposits/index.vue?vue&type=template&id=4d3efd36& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4d3efd36___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4d3efd36___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4d3efd36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=4d3efd36& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/payments/resources/js/pages/user/account/deposits/index.vue?vue&type=template&id=4d3efd36&");


/***/ })

}]);