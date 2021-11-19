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
        let navHeight = 0;
        // if (!isIOS) {
        //   navHeight = 0
        // } else {
        //   navHeight = 0
        // }
        // console.log('statusBarHeight: ' + res.statusBarHeight);
        // console.log('clientHeight: ' + clientHeight);
        // console.log('height: ' + height);

        this.setData({
          status: res.statusBarHeight,
          navHeight: navHeight,
          windowHeight: res.windowHeight,
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
