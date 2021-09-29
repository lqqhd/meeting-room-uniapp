<template>

  <view class="empty">
    <view class="iconfont icon-empty empty-no-more"></view>
    <view class="title fs14">{{ title }}</view>
  </view>

</template>

<script>

export default {
  data() {
    return {};
  },

  mixins: [],
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang="less">

.empty {
  text-align: center;
  .empty-no-more {
    font-size: 240rpx;
    color: #eee;
  }
  image {
    width:250rpx;
    height:250rpx;
  }
  .title {
    color: #999;
  }
}

</style>