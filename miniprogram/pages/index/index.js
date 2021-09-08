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
        let isIOS = res.system.indexOf('iOS') > -1
        let navHeight = 0
        if (!isIOS) {
          navHeight = 48
        } else {
          navHeight = 44
        }
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
