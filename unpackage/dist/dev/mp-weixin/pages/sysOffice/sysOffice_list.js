(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/sysOffice/sysOffice_list"],{

/***/ 136:
/*!*************************************************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/main.js?{"page":"pages%2FsysOffice%2FsysOffice_list"} ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _sysOffice_list = _interopRequireDefault(__webpack_require__(/*! ./pages/sysOffice/sysOffice_list.vue */ 137));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_sysOffice_list.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 137:
/*!******************************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/sysOffice/sysOffice_list.vue ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sysOffice_list_vue_vue_type_template_id_3662bc93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sysOffice_list.vue?vue&type=template&id=3662bc93& */ 138);
/* harmony import */ var _sysOffice_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sysOffice_list.vue?vue&type=script&lang=js& */ 140);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sysOffice_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sysOffice_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _static_styles_audit_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/static/styles/audit.scss?vue&type=style&index=0&lang=scss& */ 83);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _sysOffice_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sysOffice_list_vue_vue_type_template_id_3662bc93___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sysOffice_list_vue_vue_type_template_id_3662bc93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _sysOffice_list_vue_vue_type_template_id_3662bc93___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/sysOffice/sysOffice_list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 138:
/*!*************************************************************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/sysOffice/sysOffice_list.vue?vue&type=template&id=3662bc93& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sysOffice_list_vue_vue_type_template_id_3662bc93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./sysOffice_list.vue?vue&type=template&id=3662bc93& */ 139);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sysOffice_list_vue_vue_type_template_id_3662bc93___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sysOffice_list_vue_vue_type_template_id_3662bc93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sysOffice_list_vue_vue_type_template_id_3662bc93___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sysOffice_list_vue_vue_type_template_id_3662bc93___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 139:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/sysOffice/sysOffice_list.vue?vue&type=template&id=3662bc93& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      "goDetail(" + _vm.$1 + ")"
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 140:
/*!*******************************************************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/sysOffice/sysOffice_list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sysOffice_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./sysOffice_list.vue?vue&type=script&lang=js& */ 141);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sysOffice_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sysOffice_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sysOffice_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sysOffice_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sysOffice_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 141:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/sysOffice/sysOffice_list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));

































































var _wxRequest = _interopRequireDefault(__webpack_require__(/*! @/utils/wxRequest */ 12));

var _tip = _interopRequireDefault(__webpack_require__(/*! @/utils/tip */ 25));
var _session = _interopRequireDefault(__webpack_require__(/*! @/utils/session */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var Empty = function Empty() {__webpack_require__.e(/*! require.ensure | components/empty */ "components/empty").then((function () {return resolve(__webpack_require__(/*! @/components/empty */ 336));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =

{
  data: function data() {
    return {

      scrollTop: 0,
      current: 0,
      page: 1,
      result: [],
      bottomLoading: false,
      searchNone: false,
      user: '',
      showBackTopBtn: false // ????????????      
    };


  },

  onReachBottom: function onReachBottom() {
    this.page += 1;
    this.getData();
  },

  onLoad: function onLoad() {
    // ????????????????????????????????????
    this.result = [];
    this.page = 1;
    this.getData();
  },

  onShow: function onShow() {
    var refresh = _session.default.get('refresh');
    var refreshOffice = _session.default.get('refresh_office');

    if (refresh || refreshOffice) {
      _session.default.set('refresh', false);
      _session.default.set('refresh_office', false);
      this.onLoad();
    }
  },

  onPullDownRefresh: function onPullDownRefresh() {
    this.onLoad();
  },

  mixins: [],
  components: {
    empty: Empty },

  props: {},
  methods: {
    backTop: function backTop() {
      this.showBackTopBtn = false;
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 400 });

    },

    switchTab: function switchTab(type) {
      this.current = type === 'all' ? 0 : 1;
      this.onLoad();
    },

    add: function add() {
      if (_session.default.get('user_load_cache').isMemberExpiry) {
        _tip.default.confirm('?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????', {}, '??????????????????', false);
        return;
      }

      var url = "/pages/sysOffice/sysOffice_form";

      if (this.current == 1) {
        url = "/pages/employee/employee_form";
      }

      uni.navigateTo({
        url: url });

    },

    goDetail: function goDetail(item) {
      _session.default.set('sysOffice-for-modify', item);
      var url = "/pages/sysOffice/sysOffice_form?id=".concat(item.id);

      if (this.current == 1) {
        _session.default.set('employee-for-modify', item);
        url = "/pages/employee/employee_form?id=".concat(item.id);
      }

      uni.navigateTo({
        url: url });

    },

    invite: function invite(item) {
      _session.default.set('sysOffice-for-modify', item);
      var url = "/pages/user/invite_user?id=".concat(item.id);
      uni.navigateTo({
        url: url });

    },

    onPageScroll: function onPageScroll(res) {
      var top = res.scrollTop;
      this.showBackTopBtn = top > 380 ? true : false;
    },

    getData: function getData() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var url, data, deptId;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                _this.bottomLoading = true;
                _this.searchNone = false;
                url = 'sys/listAllDepartment';

                if (_this.current == 1) {
                  url = 'sys/listAllEmployee';
                }_context.next = 6;return (

                  _wxRequest.default.Get(url, {
                    pageNo: _this.page }));case 6:data = _context.sent;


                if (_this.page == 1) {
                  _this.result = [];
                }

                if (data.status != 404 && data.result !== undefined && data.result.items !== undefined) {
                  if (data.result.items.length < data.result.pageSize) {
                    _this.searchNone = true;
                  }

                  deptId = 0;
                  data.result.items.forEach(function (entry, index) {
                    //???????????????????????????????????????
                    if (_this.current == 1) {
                      var roles = entry.roles;
                      var roleNames = "";

                      if (roles != undefined && roles != "") {
                        var rolesArray = roles.split(",");
                        rolesArray.forEach(function (element) {
                          roleNames = roleNames + (element == "2" ? "???????????????" : element == "4" ? "???????????????" : element == "6" ? "????????????" : "") + " ";
                        });
                        entry["roleNames"] = roleNames;
                      }
                    }

                    _this.result.push(entry);
                  }); //this.result = [...this.result, ...data.result.items];
                } else {
                  _this.searchNone = true;
                }

                _this.bottomLoading = false;case 10:case "end":return _context.stop();}}}, _callee);}))();
    } },


  computed: {},
  watch: {} };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[136,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/sysOffice/sysOffice_list.js.map