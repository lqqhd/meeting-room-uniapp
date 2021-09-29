(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/employee/employee_form"],{

/***/ 142:
/*!***********************************************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/main.js?{"page":"pages%2Femployee%2Femployee_form"} ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _employee_form = _interopRequireDefault(__webpack_require__(/*! ./pages/employee/employee_form.vue */ 143));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_employee_form.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 143:
/*!****************************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/employee/employee_form.vue ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employee_form_vue_vue_type_template_id_8f32b866___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee_form.vue?vue&type=template&id=8f32b866& */ 144);
/* harmony import */ var _employee_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee_form.vue?vue&type=script&lang=js& */ 146);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _employee_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _employee_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _employee_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee_form.vue?vue&type=style&index=0&lang=css& */ 148);
/* harmony import */ var _static_styles_common_form_scss_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/static/styles/common_form.scss?vue&type=style&index=1&lang=scss& */ 150);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);

var renderjs






/* normalize component */

var component = Object(_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _employee_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _employee_form_vue_vue_type_template_id_8f32b866___WEBPACK_IMPORTED_MODULE_0__["render"],
  _employee_form_vue_vue_type_template_id_8f32b866___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _employee_form_vue_vue_type_template_id_8f32b866___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/employee/employee_form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 144:
/*!***********************************************************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/employee/employee_form.vue?vue&type=template&id=8f32b866& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_employee_form_vue_vue_type_template_id_8f32b866___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./employee_form.vue?vue&type=template&id=8f32b866& */ 145);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_employee_form_vue_vue_type_template_id_8f32b866___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_employee_form_vue_vue_type_template_id_8f32b866___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_employee_form_vue_vue_type_template_id_8f32b866___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_employee_form_vue_vue_type_template_id_8f32b866___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 145:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/employee/employee_form.vue?vue&type=template&id=8f32b866& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 146:
/*!*****************************************************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/employee/employee_form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_employee_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./employee_form.vue?vue&type=script&lang=js& */ 147);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_employee_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_employee_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_employee_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_employee_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_employee_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 147:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/employee/employee_form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));







































var _wxRequest = _interopRequireDefault(__webpack_require__(/*! @/utils/wxRequest */ 12));
var _tip = _interopRequireDefault(__webpack_require__(/*! @/utils/tip */ 25));
var _dateUtil = _interopRequireDefault(__webpack_require__(/*! @/utils/date-util */ 62));
var _session = _interopRequireDefault(__webpack_require__(/*! @/utils/session */ 15));
var _datepicker = _interopRequireDefault(__webpack_require__(/*! @/utils/datepicker.js */ 99));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _require =


__webpack_require__(/*! @/static/iview/base/index */ 27),$Message = _require.$Message;var _default =

{
  data: function data() {
    return {

      entry: {
        statusSwitch: false },

      checkRules: {
        required: ["name", "roles", "mobile"] },

      errMsgs: {},
      audit: false,
      //是否是审核状态
      dict: {
        rolesList: [{
          value: '2',
          selected: false,
          title: '公司管理员' },
        {
          value: '4',
          selected: false,
          title: '部门管理员' },
        {
          value: '6',
          selected: false,
          title: '普通员工' },
        {
          value: '9',
          selected: false,
          title: '驾驶员' },
        {
          value: '10',
          selected: false,
          title: '门卫' }] },


      dictTypes: {
        deptId: 'department' },

      passwordHint: '' };


  },

  onLoad: function onLoad(options) {
    if (options.id == undefined) {
      this.passwordHint = '请填写密码';
      this.checkRules.required.push("password");
      this.dict["rolesList"][2].selected = true;
      this.entry.roles = '6,';
    } else {
      this.passwordHint = '不填写表示不修改密码';
      var index = this.checkRules.required.indexOf('password');

      if (index > -1) {
        this.checkRules.required.splice(index, 1);
      }

      var entry = _session.default.get("employee-for-modify");
      _session.default.clear("employee-for-modify");
      this.entry = entry;

      var _this = this;

      this.dict.rolesList.forEach(function (item, index, array) {
        entry.roles.split(",").forEach(function (v) {
          if (v == item.value) {
            _this.dict["rolesList"][index].selected = true;
          }
        });
      });

      if (this.entry.status == 'NEW') {
        this.entry.statusSwitch = false;
      } else {
        this.entry.statusSwitch = true;
      }
    } //装载数据字典


    this.getDict();
  },

  mixins: [],
  components: {},
  props: {},
  methods: {
    bindChange: function bindChange(e) {
      this.entry[e.currentTarget.id] = e.detail.detail == undefined ? e.detail.value : e.detail.detail.value;
    },

    bindSelectChange: function bindSelectChange(e) {
      var idx = e.detail.detail == undefined ? e.detail.value : e.detail.detail.value;
      this.dict[e.currentTarget.id + 'Index'] = idx;
      this.entry[e.currentTarget.id] = this.dict[e.currentTarget.id + 'Array'][idx].value;
    },

    bindSwitchChange: function bindSwitchChange(e) {
      this.entry[e.currentTarget.id] = e.detail.detail == undefined ? e.detail.value ? 1 : 0 : e.detail.detail.value ? 1 : 0;
    },

    bindDateChange: function bindDateChange(e) {
      var dt = 'dt' + e.currentTarget.id.substring(0, 1).toUpperCase() + e.currentTarget.id.substring(1);
      this[dt] = e.detail.value;
      this.entry[e.currentTarget.id] = _datepicker.default.getDateStr(e.detail.value, this[dt + 'Array']);
    },

    checkboxChange: function checkboxChange(e) {
      this.dict["rolesList"][e.target.dataset.index].selected = !this.dict.rolesList[e.target.dataset.index].selected;
      var rolesArray = this.dict.rolesList.filter(function (it) {return it.selected;}).map(function (it) {return it.value;});
      this.entry.roles = rolesArray.join(',');
    },

    goBack: function goBack(e) {
      uni.navigateBack({
        delta: 1 });

    },

    del: function del() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var data;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  _tip.default.confirm('确认要删除此条数据吗?', {}, '提示'));case 2:_context.next = 4;return (
                  _wxRequest.default.Get("sys/removeEmployee", {
                    employeeId: _this2.entry.id }));case 4:data = _context.sent;


                if (data != undefined && data.code >= 1) {
                  if (data.message != undefined && data.message != '') {
                    _tip.default.error(data.message);
                  }

                  _session.default.set('refresh', true);
                  uni.navigateBack({
                    delta: 1 });

                } else {
                  _tip.default.error(data.message);
                }case 6:case "end":return _context.stop();}}}, _callee);}))();
    },

    agree: function agree() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var data;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                  _tip.default.confirm('确认要审核通过本员工吗?', {}, '提示'));case 2:_context2.next = 4;return (
                  _wxRequest.default.Get("sys/agreeEmployee", {
                    employeeId: _this3.entry.id }));case 4:data = _context2.sent;


                if (data != undefined && data.code >= 1) {
                  if (data.message != undefined && data.message != '') {
                    _tip.default.error(data.message);
                  }

                  _session.default.set('refresh', true);
                  uni.navigateBack({
                    delta: 1 });

                } else {
                  _tip.default.error(data.message);
                }case 6:case "end":return _context2.stop();}}}, _callee2);}))();
    },

    submit: function submit() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var checked, i, item, bean, key, url, data;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                //检查必填
                checked = true;

                for (i = 0; i < _this4.checkRules.required.length; i++) {
                  item = _this4.checkRules.required[i];

                  if (_this4.entry[item] == '' || _this4.entry[item] == undefined) {
                    _this4.errMsgs[item + 'ErrMsg'] = '本项为必填项';
                    checked = false;
                  }
                }if (

                checked) {_context3.next = 4;break;}return _context3.abrupt("return");case 4:



                bean = {};

                for (key in _this4.entry) {
                  bean[key] = _this4.entry[key];
                }

                bean.employeeId = _this4.entry.id;

                if (_this4.entry.statusSwitch) {
                  bean.status = "AGREE";
                } else {
                  bean.status = "REJECT";
                }

                delete bean.user;
                url = 'sys/modifyEmployee';

                if (_this4.entry.id == 0 || _this4.entry.id == undefined) {
                  url = 'sys/addEmployee';
                }_context3.next = 13;return (

                  _wxRequest.default.Get(url, bean));case 13:data = _context3.sent;

                if (data != undefined && data.code >= 1) {
                  if (data.message != undefined && data.message != '') {
                    _tip.default.error(data.message);
                  }

                  _session.default.set('refresh', true);
                  uni.navigateBack({
                    delta: 1 });

                } else {
                  _tip.default.error(data.message);
                }case 15:case "end":return _context3.stop();}}}, _callee3);}))();
    },

    getDict: function getDict() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var fieldId, dictType, dictValue, url, data;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.t0 = _regenerator.default.keys(
                _this5.dictTypes);case 1:if ((_context4.t1 = _context4.t0()).done) {_context4.next = 13;break;}fieldId = _context4.t1.value;
                dictType = _this5.dictTypes[fieldId]; // let dictValue = Session.get("dict-for-" + dictType)

                dictValue = null;
                url = "sys/dict/listByType";

                if (dictType == "department") {
                  url = "sys/listDepts"; // dictValue = null
                } //先从缓存中获取
                // this.initDictIdx(dictValue, fieldId)        
                _context4.next = 9;return (

                  _wxRequest.default.Get(url, {
                    type: dictType }));case 9:data = _context4.sent;


                if (data != undefined && data.code >= 1) {
                  if (dictValue == undefined) {
                    dictValue = data.result;
                    _this5.initDictIdx(dictValue, fieldId); // Session.set("dict-for-" + dictType, dictValue)
                  } else {
                    if (dictValue.toString() !== data.result.toString()) {
                      // Session.set("dict-for-" + dictType, dictValue)
                      _this5.initDictIdx(dictValue, fieldId);
                    }
                  }
                }_context4.next = 1;break;case 13:


                if (_this5.entry.id == 0 || _this5.entry.id == undefined) {
                  _this5.dict['deptIdIndex'] = 0;
                  _this5.entry['deptId'] = _this5.dict['deptIdArray'][0].value;
                }case 14:case "end":return _context4.stop();}}}, _callee4);}))();
    },

    initDictIdx: function initDictIdx(dictValue, fieldId) {
      if (dictValue != null) {
        this.dict[fieldId + "Array"] = dictValue;

        if (this.entry[fieldId] != undefined) {
          for (var j = 0; j < dictValue.length; j++) {
            if (this.entry[fieldId] == dictValue[j].value) {
              this.dict[fieldId + "Index"] = j;
              break;
            }
          }
        }
      }
    } },


  computed: {},
  watch: {} };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 148:
/*!*************************************************************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/employee/employee_form.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_employee_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./employee_form.vue?vue&type=style&index=0&lang=css& */ 149);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_employee_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_employee_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_employee_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_employee_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_employee_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 149:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/employee/employee_form.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[142,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/employee/employee_form.js.map