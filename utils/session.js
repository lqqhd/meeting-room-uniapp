const KEY = {
	category: {
		statementExpendList: "@category_statement_expend@",
		statementIncomeList: "@category_statement_income@",
		expendList: "@category_expend_list@",
		incomeList: "@category_income_list@"
	},
	asset: {
		statementAssets: "@asset_statement@",
		list: "@asset_list@"
	},
	alreadyLogin: "@alreadyLogin@",
	login: 'weapp_login_session',
	bgImageKey: '@user_index_bg@',
	errorKey: '@request_error@',
	localStatementKey: '@local_statement_cache@'
}

module.exports = {
	key: KEY,

	get: function (key) {
		return uni.getStorageSync(key) || null;
	},

	set: function (key, value) {
		uni.setStorageSync(key, value);
	},

	clear: function (key) {
		uni.removeStorageSync(key);
	},
	
	// 排查为何频繁拉取失败
	pushError: function(err) {
		let kV = uni.getStorageSync(KEY['errorKey']) || null
		if (kV === null) {
			kV = [err]
		} else {
			kV.push(err)
		}
		uni.setStorageSync(KEY['errorKey'], kV)
	},

	getErrors: function() {
		return uni.getStorageSync(KEY['errorKey']) || null;
	},

	// 由于网络原因导致账单提交失败的一律先存储到缓存,下次再重新提交
	pushFailStatement: function(statement) {
		let kV = uni.getStorageSync(KEY['localStatementKey']) || null
		if (kV === null) {
			kV = [statement]
		} else {
			kV.push(statement)
		}
		uni.setStorageSync(KEY['localStatementKey'], kV)
	},

	getStatements: function() {
		return uni.getStorageSync(KEY['localStatementKey']) || null;
	},

	clearByKey (item) {
		for(let obj in KEY) {
			if (obj == item) {
				for(let cacheKey in KEY[obj]) {
					uni.removeStorageSync(KEY[obj][cacheKey])
				}
				return false
			}
		}
	},
	
  clearAll: function() {
    uni.clearStorage()
  }
};