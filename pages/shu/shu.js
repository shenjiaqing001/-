var app = getApp();
Page({
  data: {
    navbar: ['装备', '附魔/宝石', '星蕴', "属性"],
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    equipArray: [ ],

    equipIndexArray: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
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
//附魔-------------------------------------------------------------------------------------------------------------------------
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

   enchantArray: [ ],

//宝石-------------------------------------------------------------------------------------------------------------------------
    stoneIndex: 0,
    stonePlace: [
      { name: '信物左', value: '信物左', show: false },
      { name: '信物左', value: '信物左', show: false },
      { name: '信物中', value: '信物中', show: false },
      { name: '信物中', value: '信物中', show: false },
      { name: '信物右', value: '信物右', show: false },
      { name: '信物右', value: '信物右', show: false },
      { name: '项链', value: '项链', show: false },
      { name: '戒指', value: '戒指', show: false },
      { name: '戒指', value: '戒指', show: false },
    ],
    stoneIndexArray: [
      0, 0, 0, 0, 0, 0,0,0,0,
    ],
    stoneArray: [
      //gongji 攻击  jisu 急速 zhushuxing 主属性  huixin 会心 zhuanzhu 命中 zhuanjing专精
      [{ name: '会心25', huixin: 25 },
        { name: '会心31', huixin: 31 },
        { name: '专注25', zhuanzhu: 25 },
        { name: '专注31', zhuanzhu: 31 }],
      [{ name: '会心25', huixin: 25 },
      { name: '会心31', huixin: 31 },
      { name: '主属性9', zhushuxing: 9 },
      { name: '主属性11', zhushuxing: 11 }],
      [{ name: '会心25', huixin: 25 },
      { name: '会心31', huixin: 31 },
      { name: '专注25', zhuanzhu: 25 },
      { name: '专注31', zhuanzhu: 31 }],
      [{ name: '会心25', huixin: 25 },
      { name: '会心31', huixin: 31 },
      { name: '主属性9', zhushuxing: 9 },
      { name: '主属性11', zhushuxing: 11 }],
      [{ name: '会心25', huixin: 25 },
      { name: '会心31', huixin: 31 },
      { name: '主属性9', zhushuxing: 9 },
      { name: '主属性11', zhushuxing: 11 }],
      [{ name: '会心25', huixin: 25 },
      { name: '会心31', huixin: 31 },
      { name: '主属性9', zhushuxing: 9 },
      { name: '主属性11', zhushuxing: 11 }],
      [{ name: '急速25', jisu: 25 },
      { name: '急速31', jisu: 31 }],
      [{ name: '急速25', jisu: 25 },
      { name: '急速31', jisu: 31 }],
      [{ name: '急速25', jisu: 25 },
      { name: '急速31', jisu: 31 }],
    ],

    starArray:[
      { name: "主属性", value: 0 },
      { name: "攻击", value: 0 },
      { name: "会心", value: 0 },
      { name: "专注", value: 0 },
      { name: "急速", value: 0 },
      { name: "强度", value: 0 },
      { name: "专精", value: 0 },
    ],



    zhushuxing : -1,
    gongji : -1,
    huixin : -1,
    qiangdu : -1,

    propertyList:[
      { name: "主属性", value: 0 },
      { name: "攻击", value: 0 },
      { name: "会心", value: 0 },
      { name: "专注", value: 0 },
      { name: "急速", value: 0 },
      { name: "强度", value: 0 },
      { name: "专精", value: 0 },
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

  //宝石
 stonePickerChange: function (e) {
    var index = this.data.index
    const curindex = e.target.dataset.idx
    this.data.stoneIndexArray[curindex] = e.detail.value
    this.updatePorperty()
    this.setData({
      stoneIndexArray: this.data.stoneIndexArray
    })
  },

  starInputChange: function (e) {
    var index = this.data.index
    const curindex = e.target.dataset.idx
    this.data.starArray[curindex].value = parseInt(e.detail.value)
    console.log(this.data.starArray)
    this.updatePorperty()
    this.setData({
      starArray: this.data.starArray
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

//onload 
  onLoad: function () {
    var that = this;

    for (var index in this.data.propertyList) {
      if (this.data.propertyList[index].name == "主属性")
        this.data.zhushuxing = index
      if (this.data.propertyList[index].name == "攻击")
        this.data.gongji = index
      if (this.data.propertyList[index].name == "会心")
        this.data.huixin = index
      if (this.data.propertyList[index].name == "强度")
        this.data.qiangdu = index
    }

   
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

    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('enchant').where({
      _openid: this.data.openid
    }).get({
      success: res => {
        this.setData({
          //enchantArray: res.data[0],
          enchantArray : res.data[0].enchants,
          equipArray : res.data[1].equip,
          queryResult: JSON.stringify(res.data, null, 2)
        })
        console.log('[数据库] [查询记录] 成功: ', res.data[0].enchants) 
        console.log('[数据库] [查询记录] 成功: ', res.data[1].equip) 
      },
    })

    //this.updatePorperty()
  },

  updatePorperty: function () {
    for (var index in this.data.propertyList) {
      this.data.propertyList[index].value = 0
      for (var index2 in this.data.equipPlace) {
        if (this.data.propertyList[index].name == "主属性") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].zhushuxing != null && this.data.equipArray[index2][this.data.equipIndexArray[index2]].zhushuxing != "")
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].zhushuxing
        }
        if (this.data.propertyList[index].name == "攻击") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].gongji != null && this.data.equipArray[index2][this.data.equipIndexArray[index2]].gongji != "")
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].gongji
        }
        if (this.data.propertyList[index].name == "会心") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].huixin != null && this.data.equipArray[index2][this.data.equipIndexArray[index2]].huixin != "")
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].huixin
        }
        if (this.data.propertyList[index].name == "专注") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].zhuanzhu != null && this.data.equipArray[index2][this.data.equipIndexArray[index2]].zhuanzhu != "")
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].zhuanzhu
        }
        if (this.data.propertyList[index].name == "急速") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].jisu != null && this.data.equipArray[index2][this.data.equipIndexArray[index2]].jisu != "")
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].jisu
        }
        if (this.data.propertyList[index].name == "强度") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].qiangdu != null && this.data.equipArray[index2][this.data.equipIndexArray[index2]].qiangdu != "")
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].qiangdu
        }
        if (this.data.propertyList[index].name == "专精") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].zhuanjing != null && this.data.equipArray[index2][this.data.equipIndexArray[index2]].zhuanjing != "")
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].zhuanjing
        }
      }

      for (var index2 in this.data.enchantPlace) {
        if (this.data.propertyList[index].name == "主属性") {
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

      for (var index2 in this.data.stonePlace) {
        if (this.data.propertyList[index].name == "主属性") {
          if (this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].zhushuxing != null)
            this.data.propertyList[index].value += this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].zhushuxing
        }
        if (this.data.propertyList[index].name == "攻击") {
          if (this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].gongji != null)
            this.data.propertyList[index].value += this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].gongji
        }
        if (this.data.propertyList[index].name == "会心") {
          if (this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].huixin != null)
            this.data.propertyList[index].value += this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].huixin
        }
        if (this.data.propertyList[index].name == "专注") {
          if (this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].zhuanzhu != null)
            this.data.propertyList[index].value += this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].zhuanzhu
        }
        if (this.data.propertyList[index].name == "急速") {
          if (this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].jisu != null)
            this.data.propertyList[index].value += this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].jisu
        }
        if (this.data.propertyList[index].name == "强度") {
          if (this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].qiangdu != null)
            this.data.propertyList[index].value += this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].qiangdu
        }
        if (this.data.propertyList[index].name == "专精") {
          if (this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].zhuanjing != null)
            this.data.propertyList[index].value += this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].zhuanjing
        }
      } 

      for (var index2 in this.data.starArray)
        if (this.data.propertyList[index].name == this.data.starArray[index2].name){
          if (this.data.starArray[index2].value != null){
             if(!isNaN(this.data.starArray[index2].value))
              this.data.propertyList[index].value += this.data.starArray[index2].value
          }
        }      
    }

    this.data.propertyList[this.data.gongji].value += this.data.propertyList[this.data.zhushuxing].value * 0.3
    this.data.propertyList[this.data.huixin].value += this.data.propertyList[this.data.zhushuxing].value * 0.5
    this.data.propertyList[this.data.qiangdu].value += this.data.propertyList[this.data.zhushuxing].value * 0.7

    this.setData({
      propertyList: this.data.propertyList
    })
  },


  footerTap: app.footerTap 
})