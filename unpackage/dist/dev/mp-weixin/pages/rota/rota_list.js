(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/rota/rota_list"],{

/***/ 67:
/*!***************************************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/main.js?{"page":"pages%2Frota%2Frota_list"} ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _rota_list = _interopRequireDefault(__webpack_require__(/*! ./pages/rota/rota_list.vue */ 68));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_rota_list.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 68:
/*!********************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/rota/rota_list.vue ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rota_list_vue_vue_type_template_id_556a9da7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rota_list.vue?vue&type=template&id=556a9da7& */ 69);
/* harmony import */ var _rota_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rota_list.vue?vue&type=script&lang=js& */ 71);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _rota_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _rota_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _rota_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rota_list.vue?vue&type=style&index=0&lang=css& */ 73);
/* harmony import */ var _static_styles_phonebook_scss_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/static/styles/phonebook.scss?vue&type=style&index=1&lang=scss& */ 75);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);

var renderjs






/* normalize component */

var component = Object(_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _rota_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _rota_list_vue_vue_type_template_id_556a9da7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _rota_list_vue_vue_type_template_id_556a9da7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _rota_list_vue_vue_type_template_id_556a9da7___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/rota/rota_list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 69:
/*!***************************************************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/rota/rota_list.vue?vue&type=template&id=556a9da7& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rota_list_vue_vue_type_template_id_556a9da7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./rota_list.vue?vue&type=template&id=556a9da7& */ 70);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rota_list_vue_vue_type_template_id_556a9da7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rota_list_vue_vue_type_template_id_556a9da7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rota_list_vue_vue_type_template_id_556a9da7___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rota_list_vue_vue_type_template_id_556a9da7___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 70:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/rota/rota_list.vue?vue&type=template&id=556a9da7& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 71:
/*!*********************************************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/rota/rota_list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rota_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./rota_list.vue?vue&type=script&lang=js& */ 72);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rota_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rota_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rota_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rota_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rota_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 72:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/rota/rota_list.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));










































var _wxRequest = _interopRequireDefault(__webpack_require__(/*! @/utils/wxRequest */ 12));

var _tip = _interopRequireDefault(__webpack_require__(/*! @/utils/tip */ 25));
var _dateUtil = _interopRequireDefault(__webpack_require__(/*! @/utils/date-util */ 62));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var Empty = function Empty() {__webpack_require__.e(/*! require.ensure | components/empty */ "components/empty").then((function () {return resolve(__webpack_require__(/*! @/components/empty */ 336));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =

{
  data: function data() {
    return {

      emptyTitle: '暂未查询到相关数据',
      showEmpty: false,
      scrollTop: 0,
      keyword: '',
      result: [],
      bottomLoading: false,
      searchNone: false,
      department: [],
      deptUsers: {},
      queryMonth: '',
      sViewHeight: 1000,
      day_y: 0,
      actions1: [{
        name: '选项1' },
      {
        name: '选项2' },
      {
        name: '去分享',
        icon: 'share',
        openType: 'share' }],

      visible1: false,
      user: '',
      currentDay: 0,
      todayIdx: 0 };


  },

  onReachBottom: function onReachBottom() {},

  onShow: function onShow() {// 这是为了返回时初始化数据
    // this.initDate()
    // this.listRota()
  },

  onReady: function onReady() {
    //计算ScrollView高度
    var _this = this;

    wx.createSelectorQuery().selectAll('#title-view').boundingClientRect(function (rect) {
      var calendarHeight = rect[0].height;
      var windowHeight = wx.getSystemInfoSync().windowHeight; // 屏幕的高度

      var windowWidth = wx.getSystemInfoSync().windowWidth; // 屏幕的宽度

      _this.sViewHeight = windowHeight * 750 / windowWidth - calendarHeight * 750 / windowWidth;
      console.log("Scrollview的高度是：" + _this.sViewHeight);

      _this.initDate();
    }).exec();
  },

  mixins: [],
  components: {
    empty: Empty },

  props: {},
  methods: {
    statement: function statement(key, id) {
      uni.navigateTo({
        url: "/pages/statements/detail?".concat(key, "=").concat(id) });

    },

    contactUser: function contactUser(user) {
      this.user = user;
      this.getUser(user.userId);
      this.actions1 = [{
        name: '联系【' + user.userName + "】" },
      {
        name: '拨打手机',
        icon: 'mobilephone_fill',
        size: 16 },
      {
        name: '拨打座机',
        icon: 'mobilephone_fill',
        size: 16 }];

      this.visible1 = true;
    },

    handleCancel1: function handleCancel1() {
      this.visible1 = false;
    },

    monthChange: function monthChange(e) {
      this.queryMonth = e.detail;
      this.listRota();
    },

    dayClick: function dayClick(event) {
      this.queryMonth = event.detail.substring(0, 7);
      this.listRota();
    },

    //内容区域滑动
    dataScroll: function dataScroll(e) {
      var moveY = e.detail.scrollTop; //获取内容区域纵向滑动距离

      if (this.day_y != moveY) {
        //监听srcoll滑动事件，判断下面红色部分与左边的距离和蓝色部分与左边的距离是否相等，相等的话就是纵向滑动，否则就是横向滑动，只有横向滑动的时候才改变蓝色部分滑动的距离
        this.day_y = moveY; //这里需要实时渲染
      }
    },

    handleClickItem1: function handleClickItem1(_ref)

    {var detail = _ref.detail;
      if (detail.index == 1) {
        //拨打手机
        if (this.user.mobile != null && this.user.mobile != '' && this.user.mobile != undefined && this.user.mobile.substring(0, 3) == '100') {
          _tip.default.error("用户的手机号是空，无法拨打！");
          return;
        }

        wx.makePhoneCall({
          phoneNumber: this.user.mobile });

      } else if (detail.index == 2) {
        //拨打座机
        if (this.user.deptPhone != null && this.user.deptPhone != '' && this.user.deptPhone != undefined) {
          _tip.default.error("用户的座机号是空，无法拨打！");
          return;
        }

        wx.makePhoneCall({
          phoneNumber: this.user.deptPhone });

      }
    },

    onPageScroll: function onPageScroll(e) {},

    initDate: function initDate() {
      var now = new Date();
      var month = _dateUtil.default.addZero(now.getMonth() + 1);
      var day = _dateUtil.default.addZero(now.getDate());
      this.queryMonth = now.getFullYear() + '-' + month;
      this.currentDay = now.getFullYear() + '-' + month + '-' + day;
    },

    isBlank: function isBlank(data) {
      if (data == null || data == undefined || data == '') {
        return true;
      }

      return false;
    },

    getUser: function getUser(userId) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var data;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  _wxRequest.default.Get('getUserInfo', {
                    userId: userId }));case 2:data = _context.sent;

                _this2.user.mobile = data.result.user.mobile;
                _this2.user.deptPhone = data.result.user.deptPhone;case 5:case "end":return _context.stop();}}}, _callee);}))();
    },

    listRota: function listRota() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var now, month, day, data, deptId, _this, top, self;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                if (_this3.currentDay == 0) {
                  now = new Date();
                  month = _dateUtil.default.addZero(now.getMonth() + 1);
                  day = _dateUtil.default.addZero(now.getDate());
                  _this3.currentDay = now.getFullYear() + '-' + month + '-' + day;
                }_context2.next = 3;return (

                  _wxRequest.default.Get('daguanjia/listAllRota', {
                    queryMonth: _this3.queryMonth }));case 3:data = _context2.sent;


                if (data.status != 404 && typeof data.result !== 'undefined' && data.result.items !== undefined) {
                  _this3.showEmpty = false;

                  if (data.result.items.length == 0) {
                    _this3.searchNone = true;
                  }

                  _this3.result = [];
                  deptId = 0;

                  _this = _this3;

                  _this3.todayIdx = -3;
                  data.result.items.forEach(function (rota, index) {
                    var leaders = [];

                    if (!_this.isBlank(rota.leaderId)) {
                      var idArray = rota.leaderId.split(",");
                      var nameArray = rota.leaderName.split(",");
                      idArray.forEach(function (leaderId, index) {
                        if (leaderId !== null && leaderId !== undefined && leaderId !== "") {
                          var leaderName = nameArray[index];
                          leaders.push({
                            userId: leaderId,
                            userName: leaderName });

                        }
                      });
                    }

                    var dutys = [];

                    if (!_this.isBlank(rota.dutyManIds)) {
                      var _idArray = rota.dutyManIds.split(",");
                      var _nameArray = rota.dutyManNames.split(",");
                      _idArray.forEach(function (dutyId, index) {
                        if (dutyId !== null && dutyId !== undefined && dutyId !== "") {
                          var dutyName = _nameArray[index];
                          dutys.push({
                            userId: dutyId,
                            userName: dutyName });

                        }
                      });
                    }

                    var newRota = {
                      rotaId: rota.id,
                      rotaDate: rota.rotaDate.substring(0, 10),
                      week: "日一二三四五六".charAt(new Date(rota.rotaDate).getDay()),
                      simpleData: rota.rotaDate.substring(8, 10),
                      leaders: leaders,
                      dutys: dutys };


                    if (leaders.length > 0 || dutys.length > 0) {
                      _this.result.push(newRota); //计算今日的索引，用户滚动到今日，便于用户查看值班人员


                      var rotaDate = new Date(rota.rotaDate.replace(/-/g, '/'));

                      if (new Date() > rotaDate) {
                        var lens = leaders.length > dutys.length ? leaders.length : dutys.length;

                        if (lens > 0) {
                          _this.todayIdx = _this.todayIdx + Math.ceil(lens / 3);
                        }
                      }
                    }
                  }); //如果是当前月份，混动到当天记录

                  if (_dateUtil.default.formatDate(new Date(), '-').substring(0, 7) == _this.queryMonth) {
                    top = _this.todayIdx * 48;
                    self = _this;
                    setTimeout(function () {
                      self.day_y = top;
                      self.$apply();
                    }, 200); //延迟时间 这里是1秒
                  }
                } else {
                  _this3.result = [];
                  _this3.showEmpty = true;
                }case 5:case "end":return _context2.stop();}}}, _callee2);}))();
    } },


  computed: {},
  watch: {} };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 73:
/*!*****************************************************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/rota/rota_list.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rota_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./rota_list.vue?vue&type=style&index=0&lang=css& */ 74);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rota_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rota_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rota_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rota_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rota_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 74:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/rota/rota_list.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[67,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/rota/rota_list.js.map