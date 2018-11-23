var app = getApp();
Page({
  data: {
    navbar: ['装备', '附魔', '宝石', "属性"],
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    equipArray: [
      //gongji 攻击  jisu 急速 zhushuxing 主属性  huixin 会心 zhuanzhu 命中 zhuanjing专精
      [{ name: '玄九90', gongji: 90, zhushuxing: 80, jisu: 70, huixin: 60, zhuanzhu: 50, zhuanjing: 40 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, zhuanzhu: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, zhuanzhu: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, zhuanzhu: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, zhuanzhu: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, zhuanzhu: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, zhuanzhu: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, zhuanzhu: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, zhuanzhu: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, zhuanzhu: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, zhuanzhu: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, zhuanzhu: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, zhuanzhu: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, zhuanzhu: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, zhuanzhu: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, zhuanzhu: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, zhuanzhu: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, zhuanzhu: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, zhuanzhu: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, zhuanzhu: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, zhuanzhu: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, zhuanzhu: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, zhuanzhu: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, zhuanzhu: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, zhuanzhu: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, zhuanzhu: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, zhuanzhu: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, zhuanzhu: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, zhuanzhu: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, zhuanzhu: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, zhuanzhu: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, zhuanzhu: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, zhuanzhu: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, zhuanzhu: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, zhuanzhu: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, zhuanzhu: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, zhuanzhu: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, zhuanzhu: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, zhuanzhu: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, zhuanzhu: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, zhuanzhu: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, zhuanzhu: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, zhuanzhu: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, zhuanzhu: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, zhuanzhu: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, zhuanzhu: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, zhuanzhu: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, zhuanzhu: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, zhuanzhu: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, zhuanzhu: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, zhuanzhu: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, zhuanzhu: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, zhuanzhu: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, zhuanzhu: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, zhuanzhu: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, zhuanzhu: 80, zhuanjing: 80 }], //1
      [{ name: '玄九90', gongji: 90, zhushuxing: 90, jisu: 90, huixin: 90, zhuanzhu: 90, zhuanjing: 90 },
        { name: '四大95', gongji: 95, zhushuxing: 95, jisu: 95, huixin: 95, zhuanzhu: 95, zhuanjing: 95 },
        { name: '承云令75', gongji: 75, zhushuxing: 75, jisu: 75, huixin: 75, zhuanzhu: 75, zhuanjing: 75 },
        { name: '手工80', gongji: 80, zhushuxing: 80, jisu: 80, huixin: 80, zhuanzhu: 80, zhuanjing: 80 }], //1
    ],

    equipIndexArray: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],


    enchantIndex: 0,
   
    enchantPlace: [
      { name: '武器', value: '武器', show: false },
      { name: '头', value: '头', show: false },
      { name: '衣服', value: '衣服', show: false },
      { name: '护腕', value: '护腕', show: false },
      { name: '裤', value: '裤', show: false },
      { name: '鞋', value: '鞋', show: false },
    ],


    enchantIndexArray: [
      0, 0, 0, 0, 0, 0,
    ],
    enchantArray: [
      //gongji 攻击  jisu 急速 zhushuxing 主属性  huixin 会心 zhuanzhu 命中 zhuanjing专精
      [{ name: '法术攻击10', gongji: 10 },
        { name: '法术攻击8', gongji: 8 }],
      [{ name: '专注24', zhuanzhu: 24 },
      { name: '专注36', zhuanzhu: 36 }],
      [{ name: '主属性8', zhushuxing: 8 },
      { name: '主属性12', zhuanzhu: 12 }],
      [{ name: '专注24', zhuanzhu: 24 },
      { name: '强度24', qiangdu: 24 },
      { name: '专精24', zhuanjing: 24 }],
      [{ name: '主属性8', zhushuxing: 8 },
      { name: '主属性12', zhuanzhu: 12 }],
      [{ name: '急速24', jisu: 24 },
      { name: '急速36', jisu: 36 }],
    ],




    equipIndex: 0,
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

  // 装备
  equipPickerChange: function (e) {
    var index = this.data.index
    const curindex = e.target.dataset.idx
    this.data.equipIndexArray[curindex] = e.detail.value
    this.updatePorperty()
    this.setData({
      equipIndexArray: this.data.equipIndexArray
    })
  },

//附魔
  enchantPickerChange: function (e) {
    var index = this.data.index
    const curindex = e.target.dataset.idx
    this.data.enchantIndexArray[curindex] = e.detail.value
    this.updatePorperty()
    this.setData({
      enchantIndexArray: this.data.enchantIndexArray
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
    this.updatePorperty()
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

  updatePorperty: function () {
    console.log("updatePorperty")
    for (var index in this.data.propertyList) {
      this.data.propertyList[index].value = 0
      for (var index2 in this.data.equipPlace) {
        if (this.data.propertyList[index].name == "术") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].zhushuxing != null)
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].zhushuxing
        }
        if (this.data.propertyList[index].name == "攻击") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].gongji != null)
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].gongji
        }
        if (this.data.propertyList[index].name == "会心") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].huixin != null)
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].huixin
        }
        if (this.data.propertyList[index].name == "专注") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].zhuanzhu != null)
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].zhuanzhu
        }
        if (this.data.propertyList[index].name == "急速") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].jisu != null)
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].jisu
        }
        if (this.data.propertyList[index].name == "强度") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].qiangdu != null)
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].qiangdu
        }
        if (this.data.propertyList[index].name == "专精") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].zhuanjing != null)
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].zhuanjing
        }
      }

      for (var index2 in this.data.enchantPlace) {
        if (this.data.propertyList[index].name == "术") {
          if (this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].zhushuxing != null)
            this.data.propertyList[index].value += this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].zhushuxing
        }
        if (this.data.propertyList[index].name == "攻击") {
          if (this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].gongji != null)
            this.data.propertyList[index].value += this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].gongji
        }
        if (this.data.propertyList[index].name == "会心") {
          if (this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].huixin != null)
            this.data.propertyList[index].value += this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].huixin
        }
        if (this.data.propertyList[index].name == "专注") {
          if (this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].zhuanzhu != null)
            this.data.propertyList[index].value += this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].zhuanzhu
        }
        if (this.data.propertyList[index].name == "急速") {
          if (this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].jisu != null)
            this.data.propertyList[index].value += this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].jisu
        }
        if (this.data.propertyList[index].name == "强度") {
          if (this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].qiangdu != null)
            this.data.propertyList[index].value += this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].qiangdu
        }
        if (this.data.propertyList[index].name == "专精") {
          if (this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].zhuanjing != null)
            this.data.propertyList[index].value += this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].zhuanjing
        }
      }
    }



    this.setData({
      propertyList: this.data.propertyList
    })
  },


  footerTap: app.footerTap 
})