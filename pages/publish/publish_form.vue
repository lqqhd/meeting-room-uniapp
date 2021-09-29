<template>

  <view class="container">
    <view class="grid">
      <input hidden name="id" :value="entry.id"></input>
      <view style="display:flex;justify-content: space-between;">
        <view style="padding: 30rpx 30rpx 10rpx 34rpx;">公告内容：</view>        
        <radio class="radio" value="1" :checked="notifyAll" @tap="notifyChange" style="padding: 30rpx 30rpx 10rpx 34rpx;">
            <text>给组织成员发送通知</text>
          </radio>
      </view>      
      <i-input id="content" :value="entry.content" type="textarea2" myStyle="height:500rpx;border: 1px solid #eee;padding: 10rpx;" title placeholder="请输入公告内容" maxlength="1500" @change="bindChange" :disabled="audit" :errorMessage="errMsgs.contentErrMsg"></i-input>
    </view>
    <view class="btn-box">
      <view class="biz-btn save" v-if="(isSuperAdmin || entry.user.id == userId) && entry.id != 0" @tap="del">删除</view>
      <view class="biz-btn save" :style="(entry.id == 0 || entry.id == undefined?'':'display:none')" @tap="submit">{{entry.id == 0 || entry.id == undefined?"发布":"发布"}}</view>
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
const {
  $Message
} = require('@/static/iview/base/index');

export default {
  data() {
    return {

        entry: {
          id: 0,
          content: ''
        },
        checkRules: {
          required: ["content"]
        },
        errMsgs: {},
        audit: false,
        //是否是审核状态
        isSuperAdmin: false,
        userId: 0,
        notifyAll: true

    };
  },

  onLoad(options) {
    if (options.id == undefined) {} else {
      let entry = Session.get("publish-for-modify");
      Session.clear("publish-for-modify");
      this.entry = entry;
    }

    let user = Session.get('user_load_cache');
    this.userId = user.id;

    if (user.roles.indexOf(2) > -1) {
      this.isSuperAdmin = true;
    }
  },

  mixins: [],
  components: {},
  props: {},
  methods: {
    bindChange(e) {
      this.entry[e.currentTarget.id] = e.detail.detail == undefined ? e.detail.value : e.detail.detail.value;
    },

    notifyChange(e) {
      this.notifyAll = !this.notifyAll;
    },

    goBack(e) {
      uni.navigateBack({
        delta: 1
      });
    },

    async del() {
      await tip.confirm('确认要删除此条数据吗?', {}, '提示');
      const data = await wxRequest.Get(`tweet/delete`, {
        id: this.entry.id
      });

      if (data != undefined && data.code >= 1) {
        if (data.message != undefined && data.message != '') {
          tip.error(data.message);
        }

        Session.set('refresh', true);
        uni.navigateBack({
          delta: 1
        });
      } else {
        tip.error(data.message);
      }
    },

    async submit() {
      //检查必填
      let checked = true;

      for (var i = 0; i < this.checkRules.required.length; i++) {
        let item = this.checkRules.required[i];

        if (this.entry[item] == '' || this.entry[item] == undefined) {
          this.errMsgs[item + 'ErrMsg'] = '本项为必填项';
          checked = false;
        }
      }

      if (!checked) {
        return;
      }

      let url = 'tweet/pubMessage';
      let data = await wxRequest.Get(url, {
        content: this.entry.content,
        type: 7,
        notifyAll: this.notifyAll
      });

      if (data != undefined && data.code >= 1) {
        if (data.message != undefined && data.message != '') {
          tip.error(data.message);
        }

        Session.set('refresh', true);
        uni.navigateBack({
          delta: 1
        });
      } else {
        tip.error(data.message);
      }
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" src="@/static/styles/common_form.scss">

</style>