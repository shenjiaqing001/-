var app = getApp();
Page({
  data: {
    navbar: ['装备', '附魔', '宝石', "年度维保"],
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    equipArray: [
      //gongji 攻击  jisu 急速 zhushuxing 主属性  huixin 会心 mingzhong 命中 zhuanjing专精
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, mingzhong: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, mingzhong: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, mingzhong: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, mingzhong: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, mingzhong: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, mingzhong: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, mingzhong: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, mingzhong: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, mingzhong: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, mingzhong: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, mingzhong: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, mingzhong: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, mingzhong: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, mingzhong: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, mingzhong: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, mingzhong: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, mingzhong: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, mingzhong: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, mingzhong: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, mingzhong: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, mingzhong: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, mingzhong: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, mingzhong: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, mingzhong: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, mingzhong: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, mingzhong: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, mingzhong: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, mingzhong: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, mingzhong: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, mingzhong: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, mingzhong: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, mingzhong: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, mingzhong: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, mingzhong: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, mingzhong: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, mingzhong: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, mingzhong: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, mingzhong: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, mingzhong: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, mingzhong: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, mingzhong: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, mingzhong: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, mingzhong: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, mingzhong: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, mingzhong: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, mingzhong: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, mingzhong: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, mingzhong: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, mingzhong: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, mingzhong: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, mingzhong: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, mingzhong: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, mingzhong: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, mingzhong: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, mingzhong: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, mingzhong: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, mingzhong: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, mingzhong: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, mingzhong: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, mingzhong: 80, zhuanjing: 80 }], //1
    ],

    equipIndexArray:[
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    ],

    equipIndex:0,
    equipPlace: [
      { name: '武器', value: '武器' },
      { name: '信物左', value: '信物左' },
      { name: '信物中', value: '信物中' },
      { name: '信物右', value: '信物右' },
      { name: '头', value: '头' },
      { name: '衣服', value: '衣服' },
      { name: '护腕', value: '护腕' },
      { name: '腰带', value: '腰带' },
      { name: '裤', value: '裤' },
      { name: '鞋', value: '鞋' },
      { name: '项链', value: '项链' },
      { name: '配1', value: '配1' },
      { name: '配2', value: '配2' },
      { name: '戒指1', value: '戒指1' },
      { name: '戒指2', value: '戒指2' },
    ],

    propertyList:[
      { name: "术", value: 0 },
      { name: "攻击", value: 0 },
      { name: "会心", value: 0 },
      { name: "专注", value: 0 },
      { name: "急速", value: 0 },
      { name: "强度", value: 0 },
      { name: "专精", value: 0 },
      { name: "等级", value: 0 },


    ],


  },


  // 滚动切换标签样式
  bindPickerChange: function (e) {
    var index = this.data.index
    const curindex = e.target.dataset.idx
    this.data.equipIndexArray[curindex] = e.detail.value
    this.setData({
      equipIndexArray: this.data.equipIndexArray
    })
  },
  //响应点击导航栏
  navbarTap: function (e) {
    var that = this;
    that.setData({
      currentTab: e.currentTarget.dataset.idx,
      TypeItem: that.data.navbar[that.data.currentTab]
    })
  },

  onLoad: function () {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },

  updatePorperty:function(){
    

  },

  footerTap: app.footerTap
})