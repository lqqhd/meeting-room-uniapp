<template>

  <view class="container">
    <view class="header" style="display:none">
      <view :class="( current == 0 ? 'active' : '' )" @tap="switchTab('boardroom')">会议室</view>
      <view :class="( current == 1 ? 'active' : '' )" @tap="switchTab('car')">车辆</view>
    </view>
    <view v-if=" showEmpty " style="padding-top: 200rpx;">
      <empty :title.sync="emptyTitle"></empty>
    </view>
    <view class="content" v-if=" result.length > 0 " style="padding-top: 0rpx;">
      <view class="item" v-for="(item, index) in result" :key="index">
        <view class="content-list" :hidden="current != 0" @tap="goDetail(item)">
          <view class="information">
            <view class="icon">
              <image :src="item.user.avatar"></image>
            </view>
            <view class="st-title">
              <view class="title">{{ item.boardroomName }}</view>
              <view class="description">会议主题：{{ item.title }}</view>
              <view class="time">开始时间：{{ item.startTime }}</view>
              <view class="time">结束时间：{{ item.endTime }}</view>
              <view class="description"><text space="ensp">申 请 人：</text>{{ item.deptName }}-{{item.user.name}}</view>
            </view>
          </view>
          <view :class="'status ' + item.status">
            {{ item.status == 'NEW'?'待审批': item.status == 'AGREE'?'通过':'驳回'}}
          </view>
        </view>
        <view class="content-list" :hidden="current != 1" @tap="'goDetail(' + $1 + ')'">
          <view class="information">
            <view class="icon">
              <image :src="item.user.avatar"></image>
            </view>
            <view class="st-title">
              <view class="title">目的地-{{ item.destination }}</view>
              <view class="description">申请事由：{{ item.resion }}</view>
              <view class="time">乘车人数：{{ item.members }}</view>
              <view class="time"><text space="ensp">乘 车 人：</text>{{ item.memberNames }}</view>
              <view class="time">开始时间：{{ item.startTime }}</view>
              <view class="time">结束时间：{{ item.endTime }}</view>
              <view class="description"><text space="ensp">申 请 人：</text>{{ item.deptName }}-{{item.user.name}}</view>
            </view>
          </view>
          <view :class="'status ' + item.status" :hidden="item.carNum == undefined">
            <view class="car-num">{{ item.carNum }}</view>
          </view>
          <view :class="'status ' + item.status" :hidden="item.carNum != undefined">
            {{ item.status == 'NEW'?'待审批': item.status == 'AGREE'?'通过':'驳回'}}
          </view>
        </view>
      </view>
      <view class="scrollBox" v-if="showBackTopBtn" @click.stop="backTop">
        <image src="../../static/images/stick.png" mode="aspectFit" style="width: 40rpx;height: 40rpx;margin-top:25rpx;"></image>
        <!-- <view style="margin-top: -22rpx;font-size: 24rpx;">置顶</view> -->
      </view>
      <i-action-sheet :visible="visible1" :actions="actions1" show-cancel @cancel="handleCancel1" @click="handleClickItem1"></i-action-sheet>
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

        emptyTitle: '暂未查询到相关数据',
        showEmpty: false,
        scrollTop: 0,
        current: 0,
        page: 1,
        result: [],
        bottomLoading: false,
        searchNone: false,
        actions1: [],
        visible1: false,
        user: '',
        showBackTopBtn: false // 显示置顶


    };
  },

  onReachBottom() {
    this.page += 1;
    this.getData();
  },

  onLoad(options) {
    if (options != undefined && options.current != undefined) {
      this.current = options.current;
    } // 这是为了返回时初始化数据


    this.result = [];
    this.page = 1;
    this.getData();
  },

  onShow() {
    let refresh = Session.get('refresh');

    if (refresh) {
      Session.set('refresh', false);
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
    onLoad() {
      this.result = [];
      this.page = 1;
      this.getData();
    },
    backTop() {
      this.showBackTopBtn = false;
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 400
      });
    },

    switchTab(type) {
      this.current = type === 'boardroom' ? 0 : 1;
      this.onLoad();
    },

    goDetail(book) {
      Session.set('book-for-modify', book);
      let url = `/pages/boardbook/boardbook_form?id=${book.id}&audit=true`;

      if (this.current == 1) {
        url = `/pages/carbook/carbook_form?id=${book.id}&op=audit`;
      }

      uni.navigateTo({
        url: url
      });
    },

    handleOpen1(user) {
      this.user = user;
      this.actions1 = [{
        name: '联系【' + user.userName + "】"
      }, {
        name: '拨打手机',
        icon: 'mobilephone_fill',
        size: 16
      }, {
        name: '拨打座机',
        icon: 'mobilephone_fill',
        size: 16
      }];
      this.visible1 = true;
    },

    handleCancel1() {
      this.visible1 = false;
    },

    handleClickItem1({
      detail
    }) {
      if (detail.index == 1) {
        //拨打手机         
        wx.makePhoneCall({
          phoneNumber: this.user.mobile
        });
      } else if (detail.index == 2) {
        //拨打座机
        wx.makePhoneCall({
          phoneNumber: this.user.deptPhone
        });
      }
    },

    onPageScroll(res) {
      let top = res.scrollTop;
      this.showBackTopBtn = top > 380 ? true : false;
      console.log(top);
    },

    async getData() {
      this.bottomLoading = true;
      this.searchNone = false;
      let url = 'daguanjia/listAllBoardroomBook';

      if (this.current == 1) {
        url = 'daguanjia/listAllCarBook';
      }

      const data = await wxRequest.Get(url, {
        pageNo: this.page
      });

      if (data.status != 404 && data.result !== undefined && data.result.items !== undefined) {
        this.showEmpty = false;

        if (data.result.items.length < data.result.pageSize) {
          this.searchNone = true;
        }

        let deptId = 0;
        data.result.items.forEach((entry, index) => {
          //在此可以对数据进行二次处理
          this.result.push(entry);
        }); //this.result = [...this.result, ...data.result.items];
      } else {
        this.searchNone = true;

        if (this.page == 1) {
          this.showEmpty = true;
        }
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