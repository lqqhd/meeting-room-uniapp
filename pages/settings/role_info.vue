<template>

  <view class="container">
    <view class="statement" style="background: #eee;margin: 0rpx;padding: 24rpx 32rpx;">
          <view class="title" style="flex:1;color:#555">功能列表</view>
          <view class="title" style="flex:1;color:#555;text-align: center;">普通员工</view>
          <view class="title" style="flex:1;color:#555;text-align: center;">部门管理员</view>
          <view class="title" style="flex:1;color:#555;text-align: center;">系统管理员</view>
        </view>
    <view class="statement-list" v-if=" result.length > 0 ">
      <view class="item" v-for="(item, index) in result" :key="index">
        <view class="statement">
          <view class="title" style="flex:1;font-size: 28rpx;">{{ item.functionName }}</view>
          <view class="title" style="flex:1;color:red;text-align: center;">{{ item.commonUser == '1'?'✔':''}}</view>
          <view class="title" style="flex:1;color:red;text-align: center;">{{ item.deptUser== '1'?'✔':'' }}</view>
          <view class="title" style="flex:1;color:red;text-align: center;">{{ item.sysUser== '1'?'✔':'' }}</view>
        </view>
      </view>
      <view class="loading-icon" v-if=" bottomLoading ">
        <i-spin></i-spin>
      </view>
      <i-load-more v-if=" searchNone " loading="false"></i-load-more>
    </view>
  </view>

</template>

<script>
import wxRequest from '@/utils/wxRequest';
import Empty from '@/components/empty';
import tip from '@/utils/tip';

export default {
  data() {
    return {

        emptyTitle: '暂未查询到相关数据',
        scrollTop: 0,
        page: 1,
        result: [],
        bottomLoading: false,
        searchNone: false

    };
  },

  onShow() {
    // 这是为了返回时初始化数据
    this.result = [];
    this.page = 1;
    this.getDate();
  },

  mixins: [],
  components: {
    empty: Empty
  },
  props: {},
  methods: {
    async getDate() {
      const data = await wxRequest.Get('sys/listRoleInfo', {
        py: this.keyword,
        pageNo: this.page
      });

      if (data.status != 404 && typeof data.result !== 'undefined' && data.result.items !== undefined) {
        if (data.result.items.length == 0) {
          this.searchNone = true;
        }

        this.department = [];
        this.result = [];
        let deptId = 0;
        data.result.items.forEach((user, index) => {
          if (user.deptId != deptId) {
            user.deptType = true;
            deptId = user.deptId;
          }

          if (user.mobile != null && user.mobile != '' && user.mobile != undefined && user.mobile.substring(0, 3) == '100') {
            user.mobile = '';
          }

          this.result.push(user);
        });
      } else {
        this.result = [];
      }

      this.bottomLoading = false;
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" src="@/static/styles/phonebook.scss">



</style>