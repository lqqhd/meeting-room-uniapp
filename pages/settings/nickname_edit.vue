<template>

  <view>
    <form @submit="formSubmit">
      <i-cell title="昵称">
        <input slot="footer" :value="nickname" name="nickname" type="text" placeholder="请输入昵称"></input>
      </i-cell>

      <view class="zan-btns" style="margin: 12px;">
        <button class="ljt-btn" formType="submit">保存</button>
      </view>
    </form>
  </view>

</template>

<script>
import wxRequest from '@/utils/wxRequest';
import tip from '@/utils/tip';

export default {
  data() {
    return {

        nickname: ''

    };
  },

  onLoad() {
    this.getUser();
  },

  mixins: [],
  components: {},
  props: {},
  methods: {
    async formSubmit(e) {
      const nickname = e.detail.value.nickname;

      if (nickname === '') {
        tip.error('随便输点东西也行呀~');
        return false;
      }

      await wxRequest.Put('users/update_user', {
        user: {
          nickName: nickname
        }
      });
      uni.navigateBack({
        delta: 1
      });
    },

    async getUser() {
      const data = await wxRequest.Get('users');
      this.nickname = data.nickname;
    }

  },
  computed: {},
  watch: {}
};
</script>
<style >

  page {
    background:#f4f4f4;
  }

</style>