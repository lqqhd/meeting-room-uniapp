(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/publish/publish_list"],{

/***/ 218:
/*!*********************************************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/main.js?{"page":"pages%2Fpublish%2Fpublish_list"} ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _publish_list = _interopRequireDefault(__webpack_require__(/*! ./pages/publish/publish_list.vue */ 219));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_publish_list.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 219:
/*!**************************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/publish/publish_list.vue ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _publish_list_vue_vue_type_template_id_46b3a072___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publish_list.vue?vue&type=template&id=46b3a072& */ 220);
/* harmony import */ var _publish_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publish_list.vue?vue&type=script&lang=js& */ 222);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _publish_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _publish_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _static_styles_audit_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/static/styles/audit.scss?vue&type=style&index=0&lang=scss& */ 83);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _publish_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _publish_list_vue_vue_type_template_id_46b3a072___WEBPACK_IMPORTED_MODULE_0__["render"],
  _publish_list_vue_vue_type_template_id_46b3a072___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _publish_list_vue_vue_type_template_id_46b3a072___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/publish/publish_list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 220:
/*!*********************************************************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/publish/publish_list.vue?vue&type=template&id=46b3a072& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_publish_list_vue_vue_type_template_id_46b3a072___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./publish_list.vue?vue&type=template&id=46b3a072& */ 221);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_publish_list_vue_vue_type_template_id_46b3a072___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_publish_list_vue_vue_type_template_id_46b3a072___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_publish_list_vue_vue_type_template_id_46b3a072___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_publish_list_vue_vue_type_template_id_46b3a072___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 221:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/publish/publish_list.vue?vue&type=template&id=46b3a072& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 222:
/*!***************************************************************************************************************************!*\
  !*** D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/publish/publish_list.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_publish_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX-alpha/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./publish_list.vue?vue&type=script&lang=js& */ 223);
/* harmony import */ var _HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_publish_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_publish_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_publish_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_publish_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_publish_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 223:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/git-projects/daguanjia/daguanjia-uniapp/daguanjia-uniapp/pages/publish/publish_list.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));






















































var _wxRequest = _interopRequireDefault(__webpack_require__(/*! @/utils/wxRequest */ 12));

var _tip = _interopRequireDefault(__webpack_require__(/*! @/utils/tip */ 25));
var _session = _interopRequireDefault(__webpack_require__(/*! @/utils/session */ 15));
var _util = _interopRequireDefault(__webpack_require__(/*! @/utils/util.js */ 26));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var Empty = function Empty() {__webpack_require__.e(/*! require.ensure | components/empty */ "components/empty").then((function () {return resolve(__webpack_require__(/*! @/components/empty */ 336));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =

{
  data: function data() {
    return {

      emptyTitle: '暂未查询到相关数据',
      showEmpty: false,
      scrollTop: 0,
      current: 'all',
      page: 1,
      result: [],
      tweetList: [],
      bottomLoading: false,
      searchNone: false,
      user: '',
      userRole: 6,
      showBackTopBtn: false // 显示置顶
    };


  },

  onReachBottom: function onReachBottom() {
    this.page += 1;
    this.getData();
  },

  onLoad: function onLoad() {
    // 这是为了返回时初始化数据
    this.result = [];
    this.page = 1;
    this.getData();
    this.userRole = _session.default.get("userRole");
  },

  onShow: function onShow() {
    var refresh = _session.default.get('refresh');

    if (refresh) {
      _session.default.set('refresh', false);
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
      this.current = type;
      this.onLoad();
    },

    add: function add() {
      if (_session.default.get('user_load_cache').isMemberExpiry) {
        _tip.default.confirm('服务已过期，现只有查看权限，请联系您组织内负责此业务的管理员续费后再进行此操作，谢谢！', {}, '服务过期提示', false);
        return;
      }

      uni.navigateTo({
        url: "/pages/publish/publish_form" });

    },

    goDetail: function goDetail(idx, item) {
      _session.default.set('publish-for-modify', item);

      if (this.current == "my") {
        uni.navigateTo({
          url: "/pages/publish/publish_form?id=".concat(item.id) });

      } else {
        uni.navigateTo({
          url: "/pages/publish/publish_detail?id=".concat(item.id, "&isRead=").concat(this.tweetList[idx].isRead) });

      }

      this.tweetList[idx].isRead = 0;
    },

    onPageScroll: function onPageScroll(res) {
      var top = res.scrollTop;
      this.showBackTopBtn = top > 380 ? true : false;
    },

    getData: function getData() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var params, userId, data, count, i, tweet;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                _this.bottomLoading = true;
                _this.searchNone = false; //判断为刷新，清除缓存数据

                if (_this.page == 1) {
                  _this.tweetList = [];
                }

                params = {
                  type: '7',
                  pageNo: _this.page };


                if (_this.current == "my") {
                  userId = _session.default.get('user_load_cache').id;
                  params = {
                    type: '7',
                    userId: userId,
                    pageNo: _this.page };

                }_context.next = 7;return (

                  _wxRequest.default.Get('tweet/list', params));case 7:data = _context.sent;if (!(

                data === undefined)) {_context.next = 10;break;}return _context.abrupt("return",
                false);case 10:


                if (data.status != 404 && data.result !== undefined && data.result.items !== undefined) {
                  _this.showEmpty = false;

                  if (data.result.items.length < data.result.pageSize) {
                    _this.searchNone = true;
                  }

                  _this.tweetList = [];
                  count = data.result == undefined || data.result.items == undefined ? 0 : data.result.items.length;

                  for (i = 0; i < count; i++) {
                    tweet = data.result.items[i];
                    tweet.pubDate = _util.default.getDateDiff(tweet.pubDate);
                    tweet.content = tweet.content.length > 200 ? tweet.content.substring(0, 200) + ' ...' : tweet.content;
                    _this.tweetList.push(tweet);
                  }
                } else {
                  _this.searchNone = true;

                  if (_this.page == 1) {
                    _this.showEmpty = true;
                  }
                }

                _this.bottomLoading = false;case 12:case "end":return _context.stop();}}}, _callee);}))();
    } },


  computed: {},
  watch: {} };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[218,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/publish/publish_list.js.map