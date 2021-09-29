<template>

  <view class="container">
    <view class="grid">
      <view class="row">
        <view style="text-align: center;font-size: 40rpx;padding: 15rpx 0 30rpx 0;">公告详情</view>
        <view class="user-info">
          <view class="icon">
            <image :src="entry.user.avatar"></image>
          </view>
          <view class="title">{{entry.user.name}}</view>
        </view>
        <view class="information">
          <view class="st-title">
            <textarea id="content" :value="entry.content" disabled auto-height style="padding-left: 0px;"></textarea>
          </view>
        </view>
        <view class="information">
          <view class="st-bottom">
            <view class="description">
              <i-icon type="time" size="18" color="#80848f"></i-icon>
              <view style="margin-top:3rpx;">{{ entry.pubDate }}</view>
            </view>
            <view class="description" style="display:none">
              <i-icon type="message" size="18" color="#80848f"></i-icon>
              <view style="margin-top:3rpx;">{{ entry.commentCount }}</view>
            </view>
          </view>
        </view>
      </view>
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

        entry: {},
        checkRules: {
          required: ["name"]
        },
        errMsgs: {},
        audit: false //是否是审核状态


    };
  },

  onShow(options) {//if (options.id !== undefined){
    //tip.confirm('onshow-id='+options.id, {}, '提示',false)
    // }       
  },

  onLoad(options) {
    if (options.id == undefined) {} else {
      this.getDetail(options.id);
      Session.set('refresh', true);
    }
  },

  mixins: [],
  components: {},
  props: {},
  methods: {
    goBack(e) {
      uni.navigateBack({
        delta: 1
      });
    },

    async getDetail(id) {
      const data = await wxRequest.Get(`tweet/detail`, {
        id: id
      });

      if (data != undefined && data.code >= 1) {
        if (data.message != undefined && data.message != '') {
          tip.error(data.message);
        }

        this.entry = data.result;
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