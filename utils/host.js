// 0 开发环境 1 测试环境 2 生产环境
const env = 2

let host = ''
if (env === 0) {
  host = 'http://127.0.0.1:8081/oa'
} else if (env == 1) {
  host = 'https://http://127.0.0.1:8081/oa'
} else {
  host = 'https://daguanjia.jikebang.com'
}

module.exports = {
  host: host,
  url: host + '/rest',
  login: host + '/rest/login',
  check_openid: host + '/rest/check_openid',
  env: env,
  mapKey: '',
  appid: 'wx752ee0153918ce79'
}