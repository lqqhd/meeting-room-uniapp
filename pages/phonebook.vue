<template>

  <view class="container">
    <view class="input-box" style="position: fixed;width: 100%;">
      <input style="margin:24rpx;" confirm-type="搜索" :value="keyword" placeholder-class="input-placeholder" placeholder="输入姓名首字母、姓名拼音、姓名进行搜索" @input="handleSearch"></input> 
    </view> 
    <view class="statement-list" v-if=" result.length > 0 " style="padding-top: 110rpx;">    
      <view class="result-tip" v-if=" keyword !== '' ">共查询到 {{ result.length }} 位人员</view>
      <view class="item" v-for="(user, index) in result" :key="index">
       <view class="dept-title" v-if=" user.deptType " style="display: flex;">
          {{user.deptName}} <view :hidden="user.deptPhone == '' || user.deptPhone == undefined" style="margin-left: 10rpx;">( {{user.deptPhone}} )</view>
        </view>
        <view class="statement" @tap="'handleOpen1(' + $1 + ')'">
          <view class="information">
            <view class="icon">
              <image :src="user.avatarUrl"></image>
            </view>
            <view class="st-title">
              <view class="title">{{ user.userName }}</view>
              <view class="title">{{ user.extPhone }}</view>
              <view class="title">{{ user.mobile }}</view>
            </view>
          </view>
        </view>
      </view>
      <i-action-sheet :visible="visible1" :actions="actions1" show-cancel @cancel="handleCancel1" @click="handleClickItem1"></i-action-sheet>        
      <view class="loading-icon" v-if=" bottomLoading ">
        <i-spin></i-spin>
      </view>
      <i-load-more v-if=" searchNone " loading="false"></i-load-more>
    </view>
    <!-- <view wx:if="{{ result.length == 0 }}" style="padding-top: 200rpx;">
      <empty :title.sync="emptyTitle"></empty>
    </view> -->
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
        keyword: '',
        page: 1,
        result: [],
        bottomLoading: false,
        searchNone: false,
        department: [],
        deptUsers: {},
        actions1: [{
          name: '选项1'
        }, {
          name: '选项2'
        }, {
          name: '去分享',
          icon: 'share',
          openType: 'share'
        }],
        visible1: false,
        user: ''

    };
  },

  onReachBottom() {// this.bottomLoading = true
    // this.page += 1
    // this.doSearch()
  },

  onShow() {
    // 这是为了返回时初始化数据
    this.result = [];
    this.page = 1;
    this.doSearch();
  },

  mixins: [],
  components: {
    empty: Empty
  },
  props: {},
  methods: {
    handleSearch(e) {
      this.result = [];
      this.keyword = e.detail.value;
      this.bottomLoading = false;
      this.searchNone = false;
      this.page = 1;
      this.doSearch();
    },

    statement(key, id) {
      uni.navigateTo({
        url: `/pages/statements/detail?${key}=${id}`
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

    onPageScroll(e) {// this.scrollTop = e.scrollTop;
      // if (this.opacity !== 0.3 && e.scrollTop) {
      //   this.opacity = 0.3;
      //   
      // }
    },

    async doSearch() {
      const data = await wxRequest.Get('daguanjia/listCompPhoneBook', {
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
        }); //this.result = [...this.result, ...data.result.items];
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