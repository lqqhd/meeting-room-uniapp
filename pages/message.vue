<template>

  <view class="container">
    <view class="header">
      <view :class="( current == 0 ? 'active' : '' )" @tap="switchTab('system')">系统消息</view>
      <view :class="( current == 1 ? 'active' : '' )" @tap="switchTab('friend')">好友消息</view>
    </view>

    <view class="content">
      <swiper :indicator-dots="indicatorDots" :current="current" :duration="duration" :style="'height: ' + swiperHeight + 'px;'" @change="swiperChange">
        <swiper-item v-if=" systemList.length > 0 ">
          <view class="item" v-for="(item, index) in systemList" :key="index" @tap="'toPage(' + $1 + ')'">
            <view class="message-info">
              <view :class="( item.already_read == 1 ? 'grey-text' : '' )">{{ item.title }}</view>
              <view :class="'desc ' + ( item.already_read == 1 ? 'grey-text' : '' )" v-if=" item.sub_title && item.sub_title != '' ">{{ item.sub_title }}</view>
              <view class="time">{{ item.time }}</view>
            </view>
            <image :src="item.image_url"></image>
          </view>
        </swiper-item>

        <swiper-item v-else>
          <empty :title.sync="friendsEmptyTitle"></empty>
        </swiper-item>
        
        <swiper-item>
          <empty :title.sync="friendsEmptyTitle"></empty>
        </swiper-item>
      </swiper>
    </view>
  </view>

</template>

<script>
import Empty from '@/components/empty';
import wxRequest from '@/utils/wxRequest';

export default {
  data() {
    return {

        indicatorDots: false,
        autoplay: false,
        duration: 300,
        swiperHeight: 400,
        current: 0,
        activeItem: 'system',
        user: {},
        friendsEmptyTitle: '好友功能开发中，敬请期待',
        systemEmptyTitle: '暂无系统消息',
        systemList: []

    };
  },

  onLoad() {
    wx.getSystemInfo({
      success: res => {
        this.swiperHeight = res.windowHeight - 40;
      }
    });
  },

  onShow() {
    this.getData();
  },

  mixins: [],
  components: {
    empty: Empty
  },
  props: {},
  methods: {
    switchTab(type) {
      this.current = type === 'system' ? 0 : 1;
    },

    swiperChange(e) {
      this.current = e.detail.current;
    },

    toPage(url) {
      uni.navigateTo({
        url: url
      });
    },

    async getData() {
      const data = await wxRequest.Get('message');
      this.systemList = data;
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" src="@/static/styles/message.scss">

</style>