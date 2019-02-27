// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notice:"123123123",
    showCanvas : true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
// redirect.js navigator.js

  onLoad: function (options) {
    this.setData({

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('notice').where({
      _openid: this.data.openid
    }).get({
      success: res => {
        console.log(res.data[0].notice)
        this.setData({          
          showCanvas:false,
          notice: res.data[0].notice,
        })
      },
    })
  },

  ok: function (e) {
    this.setData({
      showCanvas: true,
    })
  },

  NavigatorToSSLZ:function(){
    wx.navigateTo({
      url: '/pages/mf/sslz/sslz'　　
    })
  },
  NavigatorToHLZ: function () {
    wx.navigateTo({
      url: '/pages/sm/hlz/hlz'
    })
  },
  NavigatorToSHJ: function () {
    wx.navigateTo({
      url: '/pages/yj/shj/shj'
    })
  },
  NavigatorToLCFJ: function () {
    wx.navigateTo({
      url: '/pages/tg/lcfj/lcfj'
    })
  },
  NavigatorToFXP: function () {
    wx.navigateTo({
      url: '/pages/yj/fxp/fxp'
    })
  },
  NavigatorToQMGZ: function () {
    wx.navigateTo({
      url: '/pages/zy/qmgz/qmgz'
    })
  },
  NavigatorToDJJW: function () {
    wx.navigateTo({
      url: '/pages/zf/djjw/djjw'
    })
  },
  NavigatorToDYS: function () {
    wx.navigateTo({
      url: '/pages/mf/dys/dys'
    })
  },
  NavigatorToWSZYZ: function () {
    wx.navigateTo({
      url: '/pages/sm/wszyz/wszyz'
    })
  },
  NavigatorToSYXJ: function () {
    wx.navigateTo({
      url: '/pages/zy/syxj/syxj'
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }



})