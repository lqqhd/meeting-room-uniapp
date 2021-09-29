<template>

  <view class="container">
    <view style="padding: 40rpx 0;text-align: center;font-size: 42rpx;">
    </view>
    <view>
      <i-input id="mobile" :value="entry.mobile" title="手机号" placeholder="填写手机号，便于生成组织通讯录" maxlength="20" @change="bindChange" :errorMessage="errMsgs.mobileErrMsg"></i-input>
      <view style="display:flex">
        <i-input id="valicode" style="width: 64%;" :value="entry.valicode" title="验证码" placeholder="请填写手机验证码" maxlength="200" @change="bindChange" :errorMessage="errMsgs.passwordErrMsg"></i-input>
        <view @tap="getCode" style="height: 100rpx;line-height: 100rpx;width: 30%;">{{vbTime}}{{suffix}}</view>
      </view>
    </view>
    <view style="padding:100rpx 0 0 0">
      <button type="primary" @tap="submit" style="width: 92%;font-size: 28rpx;height: 86rpx;line-height: 86rpx;"><view style="display:flex;justify-content: center;">
                      <text>保存</text></view>
                    </button>
    </view>
    <i-message id="message"></i-message>
  </view>

</template>

<script>
import wxRequest from '@/utils/wxRequest';
import tip from '@/utils/tip';
import dateUtil from '@/utils/date-util';
import Session from '@/utils/session';
import dateTimePicker from '@/utils/datepicker.js';
import util from '@/utils/util.js';
const {
  $Message
} = require('@/static/iview/base/index');

export default {
  data() {
    return {

        entry: {},
        errMsgs: {},
        vbTime: "获取验证码",
        //valicode button 内容
        vbDisabled: false,
        //valicode button 是否禁止点击
        currentTime: 61,
        suffix: ''

    };
  },

  onLoad(options) {},

  mixins: [],
  components: {},
  props: {},
  methods: {
    bindChange(e) {
      this.entry[e.currentTarget.id] = e.detail.detail == undefined ? e.detail.value : e.detail.detail.value;
    },

    async submit(e) {
      //检查
      if (this.entry.mobile == '' || this.entry.mobile == undefined || this.entry.mobile == null) {
        tip.error("手机号不能未空！");
        return;
      }

      if (this.entry.valicode == '' || this.entry.valicode == undefined || this.entry.valicode == null) {
        tip.error("手机号验证码不能未空！");
        return;
      }

      let bean = {};

      for (let key in this.entry) {
        bean[key] = this.entry[key];
      }

      let url = 'sys/modifyMobile';
      let data = await wxRequest.Get(url, bean);

      if (data != undefined && data.code >= 1) {
        Session.set('refresh', true);
        uni.navigateBack({
          delta: 1
        });
      } else {
        tip.confirm(data.message, {}, '错误提示', false);
      }
    },

    async getCode() {
      let _this = this;

      let mobile = _this.entry.mobile;

      if (util.isMobile(mobile)) {
        let url = 'sys/sendMobileCode';
        let data = await wxRequest.Get(url, {
          mobile: mobile
        });

        if (data != undefined && data.code >= 1) {
          if (data.message != undefined && data.message != '') {
            tip.error(data.message);
          }

          _this.vbDisabled = true; // 设置发送验证码按钮样式

          let interval = null;
          interval = setInterval(function () {
            _this.currentTime--;
            _this.vbTime = _this.currentTime;
            _this.suffix = '秒后可重新获取';

            if (_this.currentTime <= 0) {
              clearInterval(interval);
              _this.vbTime = '重新发送';
              _this.suffix = '';
              _this.currentTime = 61;
              _this.vbDisabled = false;
            }

            _;
          }, 1000);
        } else {
          tip.error(data.message);
          _this.vbDisabled = false;
        }
      } else {
        tip.error('请输入正确的手机号码！');
      }
    }

  },
  computed: {},
  watch: {}
};
</script>
<style >

  .invite-title {
    color: #f50;
    font-weight: 700;
    font-size: 38rpx;
  }

</style>
<style lang="scss" src="@/static/styles/common_form.scss">

</style>