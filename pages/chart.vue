<template>

<view class="container">
	<view class="calendar">
		<calendar show-more-days="false" lunar="false" weeks-type="cn" cell-size="30" calendar-style="calendar-main" header-style="calendar-header" board-style="calendar-board" :days-color="daySelect" @prevMonth="monthChange" @nextMonth="monthChange" @dayClick="dayClick"></calendar>
	</view>

	<view class="ljt-tab fs16">
		<view class="time">{{ monthAndDay }}</view>
		<view :class="( tabActive == 'single' ? 'active' : '' )" @tap="changeTab('single')">单笔明细</view>
		<view :class="( tabActive == 'category' ? 'active' : '' )" @tap="changeTab('category')">分类明细</view>
	</view>

  <view class="assets">
    <view :hidden="tabActive == 'category' || singleList.length == 0">
			<view class="left-amount">
				<text class="income income-border">收入: {{ singleData.surplus.income }}</text>
				<text class="expend expend-border">支出: {{ singleData.surplus.expend }}</text>
				<text class="surplus surplus-border">结余: {{ singleData.surplus.surplus }}</text>
			</view>

			<view class="tiaomu" v-for="(item, index) in singleData.list" :key="index" @tap="'showStatement(' + $1 + ')'">
				<view class="information">
					<image :src="item.category_icon"></image>
					<view class="title">
						<view class="fs14">{{ item.category }}</view>
						<view class="fs12 description" v-if=" item.description != null ">{{ item.description }}</view>
						<view class="col999 fs12">{{ item.created_at }} · {{ item.wallet }}</view>
					</view>
				</view>

				<view :class="'money ' + item.type">{{ item.amount }}</view>
			</view>
    </view>

		<view class="mutiple" :hidden="tabActive == 'single' || mutipleData.length == 0">
			<view v-for="(item, index) in mutipleData" :key="index" @tap="getCategoryList(item.id, index )">
				<view class="parent-node">
					<view class="title">{{ item.name }}</view>
					<view class="iconfont jz-icon-arrow-down-copy" v-if=" item.hidden "></view>
					<view class="iconfont jz-icon-arrow-up" v-else></view>
				</view>
        <view class="item" v-for="(st, index2) in result" :key="index2" v-if=" !item.hidden ">
          <statement :statement.sync="st"></statement>
        </view>
			</view>
		</view>

		<empty title="这天还没有记账呢~" :hidden="singleList.length > 0"></empty>
  </view>
</view>

</template>

<script>
import wxRequest from '@/utils/wxRequest';
import tip from '@/utils/tip';
import Empty from '@/components/empty';
import singleColumn from '@/components/chart_column';
import IndexStatement from '@/components/index/statement';
const NowDate = new Date();

export default {
  data() {
    return {

        today: NowDate.getDate(),
        tabActive: 'single',
        startColor: '#FF7F00',
        endColor: '#8B8B83',
        days: [],
        mutipleData: [],
        singleData: [],
        singleList: [],
        daySelect: []

    };
  },

  onLoad() {
    this.daySelect.push(this.daySelectObject(NowDate.getFullYear(), NowDate.getMonth() + 1, this.today, '#2196F3'));
    this.getChart();
  },

  mixins: [],
  components: {
    empty: Empty,
    singleColumn: singleColumn,
    statement: IndexStatement
  },
  props: {},
  methods: {
    dayClick: function (event) {
      let detail = event.detail;
      let dataLen = this.daySelect.length;
      let curObj = this.daySelectObject(detail.year, detail.month, detail.day, '');

      if (dataLen == 1) {
        // 插入起始日期
        curObj.background = this.startColor;
        this.daySelect.push(curObj);
      } else if (dataLen == 2) {
        // 插入结束日期
        let start = this.daySelect[1];
        let startDate = new Date(`${start.year}-${start.mon}-${start.day}`);
        let choseDate = new Date(`${detail.year}-${detail.month}-${detail.day}`);

        if (startDate < choseDate) {
          curObj.background = this.endColor;
          this.daySelect.push(curObj);
        } else {
          this.daySelect[1].background = this.endColor;
          curObj.background = this.startColor;
          this.daySelect.splice(1, 0, curObj);
        }
      } else {
        // 起始日期和结束日期存在的情况下插入..
        let start = this.daySelect[1];
        let end = this.daySelect[2];
        let startDate = new Date(`${start.year}-${start.mon}-${start.day}`);
        let endDate = new Date(`${end.year}-${end.mon}-${end.day}`);
        let curDate = new Date(`${detail.year}-${detail.month}-${detail.day}`);

        if (curDate > endDate) {
          curObj.background = this.endColor;
          this.daySelect[2] = curObj;
        } else if (curDate.getTime() == endDate.getTime()) {
          this.daySelect.splice(1, 1);
        } else if (curDate.getTime() == startDate.getTime()) {
          this.daySelect.splice(2, 1);
        } else {
          curObj.background = this.startColor;
          this.daySelect[1] = curObj;
        }
      }

      this.getChart();
    },

    changeTab(item) {
      this.tabActive = item;
    },

    monthChange(event) {
      let detail = event.detail;

      for (let i = 0, len = this.daySelect.length; i < len; ++i) {
        if (this.daySelect[i].mon == detail.currentMonth) {
          this.daySelect[i].month = 'current';
        } else {
          this.daySelect[i].month = null;
        }
      }
    },

    showStatement(id) {
      uni.navigateTo({
        url: `/pages/statements/detail?id=${id}`
      });
    },

    async getCategoryList(id, index) {
      let query = this.timeParams();
      query.id = id;
      const data = await wxRequest.Get('chart/spread', query);
      let value = !this.mutipleData[index].hidden;
      this.mutipleData[index]['hidden'] = value;
      this.mutipleData[index].childs = data;
    },

    async getChart() {
      const res = await wxRequest.Get('chart', this.timeParams());
      this.singleData = res.single;
      this.singleList = this.singleData.list;
      this.mutipleData = res.categories;
    },

    timeParams() {
      let query = {};
      let length = this.daySelect.length;

      if (length == 0) {
        return query;
      }

      if (length <= 2) {
        let start = this.daySelect[length - 1];
        query.start_time = `${start.year}-${start.mon}-${start.day}`;
      } else {
        let start = this.daySelect[1];
        let end = this.daySelect[2];
        query.start_time = `${start.year}-${start.mon}-${start.day}`;
        query.end_time = `${end.year}-${end.mon}-${end.day}`;
      }

      return query;
    },

    daySelectObject(year, month, day, bgColor) {
      return {
        year: year,
        mon: month,
        day: day,
        background: bgColor,
        month: 'current',
        color: 'white'
      };
    }

  },
  computed: {
    monthAndDay() {
      let str = '';
      let query = this.timeParams();

      if (typeof query.start_time != 'undefined') {
        let startArray = query.start_time.split('-');
        str = startArray[1] + '-' + startArray[2];
      }

      if (typeof query.end_time != 'undefined') {
        let endArray = query.end_time.split('-');
        str += ' ~ ';
        str += endArray[1] + '-' + endArray[2];
      }

      return str;
    }

  },
  watch: {}
};
</script>
<style lang="scss" src="@/static/styles/chart.scss">

</style>