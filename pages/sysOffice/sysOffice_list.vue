<template>

  <view class="container">
    <view class="header" style="z-index: 2;">
      <view :class="( current == 0 ? 'active' : '' )" @tap="switchTab('all')">部门管理</view>
      <view :class="( current == 1 ? 'active' : '' )" @tap="switchTab('my')">员工管理</view>
    </view>
    <view class="content" v-if=" result.length > 0 ">
      <view class="item" v-for="(item, index) in result" :key="index">
        <view v-if=" current == 0" class="content-list" @click.stop="goDetail(item)">
          <view class="information">
            <!--<view class="icon">
                  <image src="{{ item.user.avatar }}"></image>
                </view> -->
            <view class="st-title">
              <view class="title">名称：{{ item.name }}</view>
              <view class="description">排序：{{ item.sort }}</view>
              <view class="description">电话：{{ item.phone }}</view>
              <view class="description">部门邀请码：<text style="font-weight: 700;">{{ item.inviteCode }}</text></view>
              
            </view>
          </view>
          <view class="status" style="flex-direction: column;justify-content: space-between;display: flex;">
            <view class="status" :style="'color:' + ( item.useable=='1'?'green':'red' ) + ';text-align: right;'">
            {{ item.useable==1?'启用':'未启用' }}
          </view>
            <button id="member" type="primary" @click.stop="invite(item)" style="font-size: 28rpx;height: 80rpx;line-height: 80rpx;background:#f80"><view style="display:flex;justify-content: center;">
                <view class="iconfont icon-jiaru" style="color: #fff;font-size:40rpx;;padding-left: 10rpx;"></view><text style="padding-left:10rpx">邀请本部门员工</text></view>
              </button>
          </view>
          
        </view>
        <view v-if=" current == 1" class="content-list" @tap="'goDetail(' + $1 + ')'">
          <view class="information">
            <!--<view class="icon">
                  <image src="{{ item.user.avatar }}"></image>
                </view> -->
            <view class="st-title">
              <view class="title">姓名-{{ item.name }}</view>
              <view class="description">序号：{{ item.sort }}</view>
              <view class="description">所属部门：{{ item.deptName }}</view>
              <view class="description">手机号：{{ item.mobile }}</view>
              <view class="description">拥有的角色：{{ item.roleNames }}</view>
              <!-- <view class="description">邮箱：{{ '无' }}</view> -->
            </view>
          </view>
          <view class="status" :style="'color:' + ( item.status=='AGREE'?'green':'red' )">
            {{ item.status=='AGREE'?'通过':'待审核' }}
          </view>
        </view>
      </view>
      <view class="scrollBox img-center" style="bottom: 8%;right:12%;" @tap="add">
        <image src="../../static/images/add.png" mode="aspectFit" style="width: 34rpx;height: 34rpx;"></image>
      </view>
      <view class="scrollBox img-center" v-if="showBackTopBtn" style="bottom: 18%;right:12%;" @tap="backTop">
        <image src="../../static/images/stick.png" mode="aspectFit" style="width: 34rpx;height: 34rpx;"></image>
        <!-- <view style="margin-top: -22rpx;font-size: 24rpx;">置顶</view> -->
      </view>
      <i-load-more v-if=" bottomLoading "></i-load-more>
      <i-load-more v-if=" searchNone " tip="没有更多数据" loading="false"></i-load-more>
    </view>
  </view>

</template>

<script>
import wxRequest from '@/utils/wxRequest';
import Empty from '@/components/empty';
import tip from '@/utils/tip';
import Session from '@/utils/session';

export default {
  data() {
    return {

        scrollTop: 0,
        current: 0,
        page: 1,
        result: [],
        bottomLoading: false,
        searchNone: false,
        user: '',
        showBackTopBtn: false // 显示置顶      


    };
  },

  onReachBottom() {
    this.page += 1;
    this.getData();
  },

  onLoad() {
    // 这是为了返回时初始化数据
    this.result = [];
    this.page = 1;
    this.getData();
  },

  onShow() {
    let refresh = Session.get('refresh');
    let refreshOffice = Session.get('refresh_office');

    if (refresh || refreshOffice) {
      Session.set('refresh', false);
      Session.set('refresh_office', false);
      this.onLoad();
    }
  },

  onPullDownRefresh() {
    this.onLoad();
  },

  mixins: [],
  components: {
    empty: Empty
  },
  props: {},
  methods: {
    backTop() {
      this.showBackTopBtn = false;
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 400
      });
    },

    switchTab(type) {
      this.current = type === 'all' ? 0 : 1;
      this.onLoad();
    },

    add() {
      if (Session.get('user_load_cache').isMemberExpiry) {
        tip.confirm('服务已过期，现只有查看权限，请联系您组织内负责此业务的管理员续费后再进行此操作，谢谢！', {}, '服务过期提示', false);
        return;
      }

      let url = `/pages/sysOffice/sysOffice_form`;

      if (this.current == 1) {
        url = `/pages/employee/employee_form`;
      }

      uni.navigateTo({
        url: url
      });
    },

    goDetail(item) {
      Session.set('sysOffice-for-modify', item);
      let url = `/pages/sysOffice/sysOffice_form?id=${item.id}`;

      if (this.current == 1) {
        Session.set('employee-for-modify', item);
        url = `/pages/employee/employee_form?id=${item.id}`;
      }

      uni.navigateTo({
        url: url
      });
    },

    invite(item) {
      Session.set('sysOffice-for-modify', item);
      let url = `/pages/user/invite_user?id=${item.id}`;
      uni.navigateTo({
        url: url
      });
    },

    onPageScroll(res) {
      let top = res.scrollTop;
      this.showBackTopBtn = top > 380 ? true : false;
    },

    async getData() {
      this.bottomLoading = true;
      this.searchNone = false;
      let url = 'sys/listAllDepartment';

      if (this.current == 1) {
        url = 'sys/listAllEmployee';
      }

      const data = await wxRequest.Get(url, {
        pageNo: this.page
      });

      if (this.page == 1) {
        this.result = [];
      }

      if (data.status != 404 && data.result !== undefined && data.result.items !== undefined) {
        if (data.result.items.length < data.result.pageSize) {
          this.searchNone = true;
        }

        let deptId = 0;
        data.result.items.forEach((entry, index) => {
          //在此可以对数据进行二次处理
          if (this.current == 1) {
            let roles = entry.roles;
            let roleNames = "";

            if (roles != undefined && roles != "") {
              let rolesArray = roles.split(",");
              rolesArray.forEach(element => {
                roleNames = roleNames + (element == "2" ? "公司管理员" : element == "4" ? "部门管理员" : element == "6" ? "普通员工" : "") + " ";
              });
              entry["roleNames"] = roleNames;
            }
          }

          this.result.push(entry);
        }); //this.result = [...this.result, ...data.result.items];
      } else {
        this.searchNone = true;
      }

      this.bottomLoading = false;
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" src="@/static/styles/audit.scss">



</style>