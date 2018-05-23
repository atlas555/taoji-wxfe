//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello 陶陶',
    displaytime: '2018-05-23',
    userInfo: {},
    accesstoken: '',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  eat: function (e) {
    console.log(e)
    success: res => {
      app.globalData.displaytime = res.displaytime
      this.setData({
        displaytime: "2018-05-24"
      })
    }
  },
  sleep: function (e) {
    console.log(e)
    wx.request({
      url: 'https://taoji.bfstack.com/record/generate',
      data: {
        dateType: 1,
        size: 0
      },
      header: {
        'content-type': 'application/json', // 默认值
        'authorization': "Bearer 4cab360adac9e0d09ba051e13d8c88bd9d04d5fbeaa5d727dc4dc8850a2b2adc9a7d548990e067ad6abb37fdb36fe5927aaf8f65c9e6e816"
      },
      success: function (res) {
        console.log(res)
      }
    })
  },
  play: function (e) {
    console.log(e)
 
  },
  wc: function (e) {
    console.log(e)

  }
})
