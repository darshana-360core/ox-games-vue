"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["packages/raffle-resources-js-pages-raffles-completed"],{

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/raffle/resources/js/pages/raffles/completed.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/raffle/resources/js/pages/raffles/completed.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _components_UserProfileModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/UserProfileModal */ "./resources/js/components/UserProfileModal.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    UserProfileModal: _components_UserProfileModal__WEBPACK_IMPORTED_MODULE_1__["default"],
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  middleware: ['auth', 'verified', '2fa_passed'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Completed raffles')
    };
  },
  computed: {
    headers: function headers() {
      return [{
        text: this.$t('Title'),
        value: 'title'
      }, {
        text: this.$t('Winner'),
        value: 'winner',
        sortable: false
      }, {
        text: this.$t('Win'),
        value: 'win',
        align: 'right',
        format: 'integer'
      }, {
        text: this.$t('Ticket price'),
        value: 'ticket_price',
        align: 'right'
      }, {
        text: this.$t('Tickets sold'),
        value: 'tickets_sold',
        sortable: false
      }, {
        text: this.$t('Completed'),
        value: 'updated_ago',
        align: 'right'
      }];
    }
  },
  created: function created() {
    this.$store.dispatch('auth/fetchUser');
  }
});

/***/ }),

/***/ "./packages/raffle/resources/js/pages/raffles/completed.vue":
/*!******************************************************************!*\
  !*** ./packages/raffle/resources/js/pages/raffles/completed.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _completed_vue_vue_type_template_id_e21cff5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completed.vue?vue&type=template&id=e21cff5a& */ "./packages/raffle/resources/js/pages/raffles/completed.vue?vue&type=template&id=e21cff5a&");
/* harmony import */ var _completed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completed.vue?vue&type=script&lang=js& */ "./packages/raffle/resources/js/pages/raffles/completed.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _completed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _completed_vue_vue_type_template_id_e21cff5a___WEBPACK_IMPORTED_MODULE_0__.render,
  _completed_vue_vue_type_template_id_e21cff5a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/raffle/resources/js/pages/raffles/completed.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./packages/raffle/resources/js/pages/raffles/completed.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./packages/raffle/resources/js/pages/raffles/completed.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_completed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./completed.vue?vue&type=script&lang=js& */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/raffle/resources/js/pages/raffles/completed.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_completed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/raffle/resources/js/pages/raffles/completed.vue?vue&type=template&id=e21cff5a&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/raffle/resources/js/pages/raffles/completed.vue?vue&type=template&id=e21cff5a& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");




var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__["default"], [_c("data-table", {
    attrs: {
      api: "/api/raffles/completed",
      title: _vm.$t("Completed raffles"),
      headers: _vm.headers,
      "sort-by": "updated_at"
    },
    scopedSlots: _vm._u([{
      key: "item.winner",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [item.winning_ticket_id ? [_c(vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
          attrs: {
            size: "25"
          }
        }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            src: item.winning_ticket.account.user.avatar_url
          }
        })], 1), _vm._v(" "), _c("user-profile-modal", {
          attrs: {
            user: item.winning_ticket.account.user
          }
        })] : _c("span", [_vm._v("—")])];
      }
    }, {
      key: "item.tickets_sold",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_vm._v("\n      " + _vm._s(item.tickets_count) + " / " + _vm._s(item.total_tickets) + "\n    ")];
      }
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./packages/raffle/resources/js/pages/raffles/completed.vue?vue&type=template&id=e21cff5a&":
/*!*************************************************************************************************!*\
  !*** ./packages/raffle/resources/js/pages/raffles/completed.vue?vue&type=template&id=e21cff5a& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_completed_vue_vue_type_template_id_e21cff5a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_completed_vue_vue_type_template_id_e21cff5a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_completed_vue_vue_type_template_id_e21cff5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./completed.vue?vue&type=template&id=e21cff5a& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/raffle/resources/js/pages/raffles/completed.vue?vue&type=template&id=e21cff5a&");


/***/ })

}]);