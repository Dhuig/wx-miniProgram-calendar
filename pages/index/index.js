//index.js
//获取应用实例
var util = require("../../calendar/utils.js")
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
  },
  getUserInfo: function(e) {
  }
})
