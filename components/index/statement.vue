<template>

  <view class="statement" @tap="statement('id', ' + $1 + ')">
    <view class="information">
      <view class="icon">
        <image :src="statement.icon_path"></image>
      </view>
      <view class="st-title">
        <view class="title">{{ statement.category }}</view>
        <view class="description" v-if="statement.description">{{ statement.description }}</view>
        <view class="time">{{ statement.timeStr }} · {{ statement.asset }}</view>
      </view>
    </view>
    <view :class="'amount ' + statement.type">
      {{ statement.money }}
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
    statement: {
      type: Object,
      default: {}
    }
  },
  methods: {
    statement(key, id) {
      uni.navigateTo({
        url: `/pages/statements/detail?${key}=${id}`
      });
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" src="@/static/styles/components/statement.scss">

</style>