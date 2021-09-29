<template>
<view>

  <view class="tiaomu" v-for="(item, index) in obj.list" :key="index" @tap="'showStatement(' + $1 + ')'">
    <view class="pull-left col999 date-time">
      <view class="fs14">{{ item.day }}</view>
      <view class="fs12">{{ item.detail_day }}</view>
    </view>
    <view :class="'pull-right fs16 money ' + item.type">{{ item.amount }}</view>
    <view class="information">
      <view class="pull-left icon"><image :src="item.category_icon"></image></view>
      <view class="pull-left title">
        <view class="fs14">{{ item.category }}</view>
        <view class="fs12 description" v-if=" item.description != null ">{{ item.description }}</view>
        <view class="col999 fs12">{{ item.time }} · {{ item.wallet }}</view>
      </view>
    </view>
  </view>

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
    obj: {
      type: Array,
      default: []
    },
    hide: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showStatement(id) {
      uni.navigateTo({
        url: `/pages/statements/detail?id=${id}`
      });
    }

  },
  computed: {},
  watch: {}
};
</script>
