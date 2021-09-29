<script>

import wxRequest from '@/utils/wxRequest';
import Session from '@/utils/session';

export default {
  data() {
    return {};
  },

  globalData: {
    user: {}
  },

  onLaunch() {
    //this.getUser()
    this.checkVersionUpdate();
    this.uploadData();
  },

  mixins: [],
  components: {},
  props: {},
  methods: {
    async getUser() {
      const data = await wxRequest.Get('users');

      if (typeof data !== 'undefined') {
        this.globalData.user = data;
      }
    },

    checkVersionUpdate() {
      // wxRequest.WX('check_update', {}, (res) => {
      //   const data = res.data
      //   if (data === 0) return false
      if (wx.canIUse('getUpdateManager')) {
        const updateManager = wx.getUpdateManager();
        updateManager.onCheckForUpdate(function (res) {
          if (res.hasUpdate) {
            updateManager.onUpdateReady(function () {
              wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success: function (res) {
                  if (res.confirm) {
                    updateManager.applyUpdate();
                  }
                }
              });
            });
            updateManager.onUpdateFailed(function () {
              wx.showModal({
                title: '已经有新版本了哟~',
                content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
              });
            });
          }
        });
      } else {
        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        });
      } // })

    },

    uploadData() {
      // 记录请求错误的日志
      let errs = Session.getErrors();

      if (!!errs && errs.length > 0) {
        for (let index = 0, length = errs.length; index < length; ++index) {
          const err = errs[index];
          wxRequest.PostBasic(`error_upload`, {
            err: err 
          }, {}, () => {
            errs.splice(errs.indexOf(err), 1);
            Session.set(Session.key['errorKey'], errs);
          });
        }
      } // 同步本地数据到远程服务端


      let statements = Session.getStatements();

      if (!!statements && statements.length > 0) {
        for (let index = 0, length = statements.length; index < length; ++index) {
          const statement = statements[index];
          wxRequest.PostBasic(`statements`, statement, {}, () => {
            statements.splice(statements.indexOf(statement), 1);
            Session.set(Session.key['localStatementKey'], statements);
          });
        }
      }
    },

    constructor() {
      this.use('requestfix');
      this.use('promisify');
      this.intercept('request', {
        config(p) {
          return p;
        },

        success(p) {
          return p;
        }

      });
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="less">
  @import "@/static/styles/common.less";
</style>