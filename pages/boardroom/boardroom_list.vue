<template>

  <view class="container">
    <view class="header" hidden>
      <view :class="( current == 0 ? 'active' : '' )" @tap="switchTab('all')">所有记录</view>
      <view :class="( current == 1 ? 'active' : '' )" @tap="switchTab('my')">我的记录</view>
    </view>
    <view v-if=" showEmpty " style="padding-top: 200rpx;">
      <empty :title.sync="emptyTitle"></empty>
    </view>
    <view class="content" v-if=" result.length > 0 " style="padding-top:0px">
      <view class="item" v-for="(item, index) in result" :key="index">
      <view class="content-list" @tap="goDetail(item)">
          <view class="information">
            <!--<view class="icon"> 
                <image src="{{ item.user.avatar }}"></image>
              </view> -->
            <view class="st-title">
              <view class="title">会议室名称-{{ item.name }}</view>
              <view class="description">顺序号：{{ item.xh }}</view>
              <view class="description">是否需要审核：{{ item.isNeedAudit==1?'需审核':'不需审核' }}</view>
            </view>
          </view>
          <view class="status" :style="'color:' + ( item.isActive==1?'green':'red' )">
            {{ item.isActive==1?'激活':'暂停' }}
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

      uni.navigateTo({
        url: `/pages/boardroom/boardroom_form`
      });
    },

    goDetail(item) {
      Session.set('boardroom-for-modify', item);
      uni.navigateTo({
        url: `/pages/boardroom/boardroom_form?id=${item.id}`
      });
    },

    onPageScroll(res) {
      let top = res.scrollTop;
      this.showBackTopBtn = top > 380 ? true : false;
    },

    async getData() {
      this.bottomLoading = true;
      this.searchNone = false;
      let url = 'daguanjia/listAllBoardroom';

      if (this.current == 1) {
        url = 'daguanjia/listAllBoardroom';
      }

      const data = await wxRequest.Get(url, {
        pageNo: this.page
      });

      if (this.page == 1) {
        this.result = [];
      }

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