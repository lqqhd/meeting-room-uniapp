<template>

  <view class="container">
    <view class="header">
      <view :class="( current == 0 ? 'active' : '' )" @tap="switchTab('all')">所有预约</view>
      <view :class="( current == 1 ? 'active' : '' )" @tap="switchTab('my')">我的预约</view>
    </view>
    <view v-if=" showEmpty " style="padding-top: 200rpx;">
      <empty :title.sync="emptyTitle"></empty>
    </view>
    <view class="content" v-if=" result.length > 0 ">
      <view class="item" v-for="(item, index) in result" :key="index">
       <view class="content-list" @tap="goDetail(item)">
          <view class="information">
            <view class="icon">
              <image :src="item.user.avatar"></image>
            </view>
            <view class="st-title">
              <view class="title">目的地-{{ item.destination }}</view>
              <view class="description">申请事由：{{ item.resion }}</view>
              <view class="time">乘车人数：{{ item.members }}人</view>
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
      
      <i-load-more v-if=" bottomLoading "></i-load-more>
      <i-load-more v-if=" searchNone " tip="没有更多数据" loading="false"></i-load-more>
    </view>   
    <view class="scrollBox img-center" style="bottom: 8%;right:12%;" @tap="add">
        <image src="../../static/images/add.png" mode="aspectFit" style="width: 34rpx;height: 34rpx;"></image>
      </view>
      <view class="scrollBox img-center" v-if="showBackTopBtn" style="bottom: 18%;right:12%;" @tap="backTop">
        <image src="../../static/images/stick.png" mode="aspectFit" style="width: 34rpx;height: 34rpx;"></image>
        <!-- <view style="margin-top: -22rpx;font-size: 24rpx;">置顶</view> -->
      </view> 
  </view>

</template>

<script>
import wxRequest from '@/utils/wxRequest/index.js';
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

    if (refresh) {
      Session.set('refresh', false);
      this.initGetData();
    } //如果重新登录或公司切换成功，则需要刷新此页面


    if (Session.get('page-2') == true) {
      this.initGetData();
      Session.set('page-2', false);
    }
  },

  onPullDownRefresh() {
    this.initGetData();
  },

  mixins: [],
  components: {
    empty: Empty
  },
  props: {},
  methods: {
    initGetData(){
      // 这是为了返回时初始化数据
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
      this.current = type === 'all' ? 0 : 1;
      this.initGetData();
    },

    add() {
      if (Session.get('user_load_cache').companyId == 1) {
        tip.confirm('请先加入或创建组织后再进行此操作，谢谢！', {}, '提示', false);
        return;
      }

      if (Session.get('user_load_cache').isMemberExpiry) {
        tip.confirm('服务已过期，现只有查看权限，请联系您组织内负责此业务的管理员续费后再进行此操作，谢谢！', {}, '服务过期提示', false);
        return;
      }

      uni.navigateTo({
        url: `/pages/carbook/carbook_form?op=modify`
      });
    },

    goDetail(book) {
      Session.set('book-for-modify', book);
      uni.navigateTo({
        url: `/pages/carbook/carbook_form?id=${book.id}&op=modify`
      });
    },

    onPageScroll(res) {
      let top = res.scrollTop;
      this.showBackTopBtn = top > 380 ? true : false;
    },

    async getData() {
      this.bottomLoading = true;
      this.searchNone = false;
      let url = 'daguanjia/listAllCarBook';

      if (this.current == 1) {
        url = 'daguanjia/listMyCarBook';
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