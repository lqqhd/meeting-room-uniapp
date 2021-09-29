<template>

  <view class="container">
    <navigator url="/pages/friends/search">
      <view class="search">
        <input placeholder="添加好友一起记账" disabled="true"></input>
      </view>
    </navigator>
    <view class="title">
      我的好友(2)
    </view>
    <view class="friends">
      <view class="column"> 
        <view class="left-side">
          <view class="user-avatar"><image src="@/static/images/hand.png"></image></view>
          <view class="user-info">
            <view class="username">youngiii</view>
            <view class="remark">家人</view>
          </view>
        </view>
        <view class="iconfont jz-icon-arrow-right-copy"></view>
      </view>

      <view class="column"> 
        <view class="left-side">
          <view class="user-avatar"><image src="@/static/images/hand.png"></image></view>
          <view class="user-info">
            <view class="username">jie</view>
            <view class="remark">家人</view>
          </view>
        </view>
        <view class="iconfont jz-icon-arrow-right-copy"></view>
      </view>
    </view>
  </view>

</template>

<script>

export default {
  data() {
    return {

    };
  },

  onLoad() {},

  mixins: [],
  components: {},
  props: {},
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang="scss" src="@/static/styles/friends/index.scss">

</style>