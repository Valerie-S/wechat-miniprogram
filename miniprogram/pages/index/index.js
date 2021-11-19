//index.js
const app = getApp()
const { envList } = require('../../envList.js')
var plugin = requirePlugin("chatbot");

Page({
  data: {
    showUploadTip: false
  },
  onLoad: function () {
    wx.getSystemInfo({
      success: (res) => {
        // check if device is ios
        let isIOS = res.system.indexOf('iOS') > -1
        // 获取可使用窗口宽度
        let clientHeight = res.windowHeight;
        // 获取可使用窗口高度
        let clientWidth = res.windowWidth;
        // 算出比例
        let ratio = 750 / clientWidth;
        // 算出高度(单位rpx)
        let height = clientHeight * ratio;
        let navHeight = 0
        // if (!isIOS) {
        //   navHeight = 0
        // } else {
        //   navHeight = 0
        // }
        console.log('statusBarHeight: ' + res.statusBarHeight);
        console.log('clientHeight: ' + clientHeight);
        console.log('height: ' + height);

        this.setData({
          status: res.statusBarHeight,
          navHeight: navHeight,
          statusBarHeight: res.statusBarHeight + navHeight
        })
      }
    })
  },
  getQueryCallback: function (e) {
  
  },
  goBackHome: function () {
    // wx.navigateBack({
    //   delta: 1
    // })
  },
  back:function(e) {
    this.goBackHome()
  },
  onShareAppMessage:function(e) {
    console.log(e)
  }
})
