"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin-users"],{

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/UserLink.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/UserLink.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/plugins/config */ "./resources/js/plugins/config.js");
/* harmony import */ var _components_UserAvatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/UserAvatar */ "./resources/js/components/UserAvatar.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserLink',
  components: {
    UserAvatar: _components_UserAvatar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['user'],
  computed: {
    providers: function providers() {
      return (0,_plugins_config__WEBPACK_IMPORTED_MODULE_0__.config)('oauth');
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/UserMenu.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/UserMenu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['id', 'small']
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/users/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/users/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _components_Admin_UserLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/Admin/UserLink */ "./resources/js/components/Admin/UserLink.vue");
/* harmony import */ var _components_Admin_UserMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Admin/UserMenu */ "./resources/js/components/Admin/UserMenu.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserLink: _components_Admin_UserLink__WEBPACK_IMPORTED_MODULE_1__["default"],
    UserMenu: _components_Admin_UserMenu__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  middleware: ['auth', 'verified', '2fa_passed', 'admin'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Users')
    };
  },
  computed: {
    headers: function headers() {
      return [{
        text: this.$t('ID'),
        value: 'id'
      }, {
        text: this.$t('Name'),
        value: 'name'
      }, {
        text: this.$t('Email'),
        value: 'email'
      }, {
        text: this.$t('Deposit'),
        value: 'deposit'
      }, {
        text: this.$t('Withdraw'),
        value: 'withdraw'
      }, {
        text: this.$t('Balance'),
        value: 'balance'
      }, {
        text: this.$t('PT Balance'),
        value: 'pt_balance'
      }, {
        text: this.$t('Signed up'),
        value: 'created_ago',
        align: 'right'
      }, {
        text: this.$t('Last seen'),
        value: 'last_seen_ago',
        align: 'right'
      }, {
        value: 'actions',
        sortable: false,
        align: 'right'
      }];
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/admin/users/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/admin/users/index.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_4184f89c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4184f89c& */ "./resources/js/pages/admin/users/index.vue?vue&type=template&id=4184f89c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/users/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4184f89c___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_4184f89c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/users/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/UserLink.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Admin/UserLink.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserLink.vue?vue&type=script&lang=js& */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/UserLink.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/UserMenu.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Admin/UserMenu.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserMenu.vue?vue&type=script&lang=js& */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/UserMenu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/users/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/admin/users/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/users/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/UserLink.vue?vue&type=template&id=04ea7df0&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/UserLink.vue?vue&type=template&id=04ea7df0& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/VChip.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/VTooltip.js");




var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "text-no-wrap"
  }, [_c("user-avatar", {
    attrs: {
      user: _vm.user
    }
  }), _vm._v(" "), _c("router-link", {
    staticClass: "mr-1",
    attrs: {
      to: {
        name: "admin.users.show",
        params: {
          id: _vm.user.id
        }
      }
    }
  }, [_vm._v(_vm._s(_vm.user.name))]), _vm._v(" "), !_vm.user.is_active ? _c(vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      color: "error",
      small: "",
      label: ""
    }
  }, [_vm._v(_vm._s(_vm.$t("Blocked")))]) : _vm._e(), _vm._v(" "), _vm.user.is_admin ? _c(vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      color: "primary",
      small: "",
      outlined: "",
      label: ""
    }
  }, [_vm._v(_vm._s(_vm.$t("Admin")))]) : _vm.user.is_bot ? _c(vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      color: "warning",
      small: "",
      outlined: "",
      label: ""
    }
  }, [_vm._v(_vm._s(_vm.$t("Bot")))]) : _vm._e(), _vm._v(" "), _vm._l(_vm.user.profiles, function (profile) {
    return _c(vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: profile.id,
      attrs: {
        bottom: ""
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function fn(_ref) {
          var on = _ref.on;
          return [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _vm._g({
            attrs: {
              small: ""
            }
          }, on), [_vm._v("mdi-" + _vm._s(_vm.providers[profile.provider_name] ? _vm.providers[profile.provider_name].mdi || profile.provider_name : "wallet"))])];
        }
      }], null, true)
    }, [_vm._v(" "), _c("span", [_vm._v(_vm._s(profile.provider_name) + " " + _vm._s(_vm.$t("ID")) + " " + _vm._s(profile.provider_user_id))])]);
  }), _vm._v(" "), _vm.user.referrer ? _c(vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      bottom: ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref2) {
        var on = _ref2.on;
        return [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _vm._g({
          attrs: {
            small: ""
          }
        }, on), [_vm._v("mdi-account-arrow-left")])];
      }
    }], null, false, 2018221753)
  }, [_vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Referred by {0}", [_vm.user.referrer.name])))])]) : _vm._e(), _vm._v(" "), _vm.user.two_factor_auth_enabled ? _c(vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attrs: {
      bottom: ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref3) {
        var on = _ref3.on;
        return [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _vm._g({
          attrs: {
            small: ""
          }
        }, on), [_vm._v("mdi-two-factor-authentication")])];
      }
    }], null, false, 2737254619)
  }, [_vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Two-factor authentication enabled")))])]) : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/UserMenu.vue?vue&type=template&id=cc80ae56&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/UserMenu.vue?vue&type=template&id=cc80ae56& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VList.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItem.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItemIcon.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/VMenu.js");









var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attrs: {
      "offset-y": true,
      transition: "scroll-y-transition",
      bottom: "",
      left: ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref) {
        var on = _ref.on;
        return [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__["default"], _vm._g({
          attrs: {
            icon: ""
          }
        }, on), [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attrs: {
            small: _vm.small
          }
        }, [_vm._v("mdi-dots-vertical")])], 1)];
      }
    }])
  }, [_vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_3__["default"], [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attrs: {
      to: {
        name: "users.show",
        params: {
          id: _vm.id
        }
      },
      exact: ""
    }
  }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      small: _vm.small
    }
  }, [_vm._v("mdi-account")])], 1), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__.VListItemContent, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__.VListItemTitle, [_vm._v(_vm._s(_vm.$t("Profile")))])], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attrs: {
      to: {
        name: "admin.users.show",
        params: {
          id: _vm.id
        }
      },
      exact: ""
    }
  }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      small: _vm.small
    }
  }, [_vm._v("mdi-eye")])], 1), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__.VListItemContent, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__.VListItemTitle, [_vm._v(_vm._s(_vm.$t("View")))])], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attrs: {
      to: {
        name: "admin.users.edit",
        params: {
          id: _vm.id
        }
      },
      exact: ""
    }
  }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      small: _vm.small
    }
  }, [_vm._v("mdi-pencil")])], 1), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__.VListItemContent, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__.VListItemTitle, [_vm._v(_vm._s(_vm.$t("Edit")))])], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attrs: {
      to: {
        name: "admin.users.delete",
        params: {
          id: _vm.id
        }
      },
      exact: ""
    }
  }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      small: _vm.small
    }
  }, [_vm._v("mdi-delete")])], 1), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__.VListItemContent, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__.VListItemTitle, [_vm._v(_vm._s(_vm.$t("Delete")))])], 1)], 1), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attrs: {
      to: {
        name: "admin.users.mail",
        params: {
          id: _vm.id
        }
      },
      exact: ""
    }
  }, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_5__["default"], [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attrs: {
      small: _vm.small
    }
  }, [_vm._v("mdi-email-outline")])], 1), _vm._v(" "), _c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__.VListItemContent, [_c(vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__.VListItemTitle, [_vm._v(_vm._s(_vm.$t("E-mail")))])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/users/index.vue?vue&type=template&id=4184f89c&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/users/index.vue?vue&type=template&id=4184f89c& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/VTooltip.js");




var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__["default"], [_c("data-table", {
    attrs: {
      title: _vm.$t("Users"),
      api: "/api/admin/users",
      headers: _vm.headers,
      filters: ["period", "user-role", "user-status"],
      search: true,
      "search-placeholder": _vm.$t("ID, name or email")
    },
    scopedSlots: _vm._u([{
      key: "item.name",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("user-link", {
          attrs: {
            user: item
          }
        })];
      }
    }, {
      key: "item.email",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_c("a", {
          attrs: {
            href: "mailto:" + item.email
          }
        }, [_vm._v(_vm._s(item.email))]), _vm._v(" "), item.email_verified_at ? _c(vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
          attrs: {
            bottom: ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(_ref3) {
              var on = _ref3.on;
              return [_c(vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _vm._g({
                attrs: {
                  color: "success",
                  small: ""
                }
              }, on), [_vm._v("\n            mdi-check\n          ")])];
            }
          }], null, true)
        }, [_vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Email verified")))])]) : _vm._e()];
      }
    }, {
      key: "item.actions",
      fn: function fn(_ref4) {
        var item = _ref4.item;
        return [_c("user-menu", {
          attrs: {
            id: item.id,
            small: ""
          }
        })];
      }
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Admin/UserLink.vue?vue&type=template&id=04ea7df0&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Admin/UserLink.vue?vue&type=template&id=04ea7df0& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLink_vue_vue_type_template_id_04ea7df0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLink_vue_vue_type_template_id_04ea7df0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLink_vue_vue_type_template_id_04ea7df0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserLink.vue?vue&type=template&id=04ea7df0& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/UserLink.vue?vue&type=template&id=04ea7df0&");


/***/ }),

/***/ "./resources/js/components/Admin/UserMenu.vue?vue&type=template&id=cc80ae56&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Admin/UserMenu.vue?vue&type=template&id=cc80ae56& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMenu_vue_vue_type_template_id_cc80ae56___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMenu_vue_vue_type_template_id_cc80ae56___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMenu_vue_vue_type_template_id_cc80ae56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserMenu.vue?vue&type=template&id=cc80ae56& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/UserMenu.vue?vue&type=template&id=cc80ae56&");


/***/ }),

/***/ "./resources/js/pages/admin/users/index.vue?vue&type=template&id=4184f89c&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/admin/users/index.vue?vue&type=template&id=4184f89c& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4184f89c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4184f89c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4184f89c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=4184f89c& */ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/users/index.vue?vue&type=template&id=4184f89c&");


/***/ })

}]);