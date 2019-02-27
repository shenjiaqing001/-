var app = getApp();
Page({
  data: {
    navbar: ['装备', '附魔/宝石', '星蕴/特技', '附加属性', "属性"],
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    equipArray: [],
    showCanvas: true,
    shareImgUrl: [],
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
      { name: '腰带', value: '腰带', show: false },
      { name: '裤', value: '裤', show: false },
      { name: '鞋', value: '鞋', show: false },
    ],
    enchantIndexArray: [
      0, 0, 0, 0, 0, 0, 0,
    ],

    enchantArray: [],


    //食品-----------------------------------------------------------------------------------------------------------------------
    foodIndex: 0,
    foodPlace: [
      { name: '攻击食品', value: '攻击食品', show: false },
      { name: '防御食品', value: '防御食品', show: false },
      { name: '辅助食品', value: '辅助食品', show: false },
    ],
    foodIndexArray: [
      0, 0, 0, 0, 0, 0,
    ],

    foodArray: [],
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
      0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    stoneArray: [
    ],

    starArray: [
      { name: "属性", value: 0 },
      { name: "攻击", value: 0 },
      { name: "强度", value: 0 },
      { name: "专精", value: 0 },
      { name: "会心", value: 0 },
      { name: "专注", value: 0 },
      { name: "急速", value: 0 },
    ],

    zhiyouArray: [
      { name: "1%会心", value: 0, checked: false },
      { name: "1%专精", value: 1, checked: false },
      { name: "1%强度", value: 2, checked: false }
    ],
    zhiyouList: [],

    xlwArray: [
      { name: "1%会心", value: 0, checked: true },
      { name: "1%专注", value: 1, checked: false },
      { name: "1%强度", value: 2, checked: false },
      { name: "1%急速", value: 3, checked: false }
    ],
    xlwBuff: 0,

    属性: -1,
    攻击: -1,
    会心: -1,
    强度: -1,
    专注: -1,
    专精: -1,
    急速: -1,

    propertyList: [
      { name: "属性", value: 0, percent: 0 },
      { name: "攻击", value: 0, percent: 0 },
      { name: "强度", value: 0, percent: 0 },
      { name: "专精", value: 0, percent: 0 },
      { name: "会心", value: 0, percent: 0 },
      { name: "专注", value: 0, percent: 0 },
      { name: "急速", value: 0, percent: 0 },
    ],

    huben: 0,
    kanglong: 0,
    tianqiang: 0,
    bossMingzhong: 100,
    zjPercent: 0,

    dpsWithoutZJ: 0,
    dpsWithZJ: 0,
    zuizhong: 0,
  },

  //挚友
  mutiCheckBox: function (e) {
    this.setData({
      zhiyouList: e.detail.value
    })
    this.updatePorperty()
  },

  //血露薇
  singleCheckBox: function (e) {
    this.setData({
      xlwBuff: e.detail.value
    })
    this.updatePorperty()
  },


  // 装备
  equipPickerChange: function (e) {
    var index = this.data.index
    const curindex = e.target.dataset.idx
    this.data.equipIndexArray[curindex] = e.detail.value
    this.setData({
      equipIndexArray: this.data.equipIndexArray
    })
    this.updatePorperty()
  },

  //附魔
  enchantPickerChange: function (e) {
    var index = this.data.index
    const curindex = e.target.dataset.idx
    this.data.enchantIndexArray[curindex] = e.detail.value
    this.setData({
      enchantIndexArray: this.data.enchantIndexArray
    })
    this.updatePorperty()
  },

  //宝石
  stonePickerChange: function (e) {
    var index = this.data.index
    const curindex = e.target.dataset.idx
    this.data.stoneIndexArray[curindex] = e.detail.value
    this.setData({
      stoneIndexArray: this.data.stoneIndexArray
    })
    this.updatePorperty()
  },

  //食品
  foodPickerChange: function (e) {
    var index = this.data.index
    const curindex = e.target.dataset.idx
    this.data.foodIndexArray[curindex] = e.detail.value
    this.setData({
      foodIndexArray: this.data.foodIndexArray
    })
    this.updatePorperty()
  },


  starInputChange: function (e) {
    var index = this.data.index
    const curindex = e.target.dataset.idx
    this.data.starArray[curindex].value = parseInt(e.detail.value)
    this.setData({
      starArray: this.data.starArray
    })
    this.updatePorperty()
  },


  //响应点击导航栏
  navbarTap: function (e) {
    var that = this;
    that.setData({
      currentTab: e.currentTarget.dataset.idx,
      TypeItem: that.data.navbar[that.data.currentTab]
    })
  },

  hubenSlider: function (e) {
    var num = 0
    if (e.detail.value == 1) num = 1
    if (e.detail.value == 2) num = 2
    if (e.detail.value == 3) num = 4.5
    if (e.detail.value == 4) num = 7
    if (e.detail.value == 5) num = 10
    this.setData({
      huben: num
    })
    this.updatePorperty()
  },

  tianqiangSlider: function (e) {
    var num = 0
    if (e.detail.value == 1) num = 3
    if (e.detail.value == 2) num = 5
    if (e.detail.value == 3) num = 8
    this.setData({
      tianqiang: num
    })
    this.updatePorperty()
  },

  kanglongSlider: function (e) {
    this.setData({
      kanglong: e.detail.value
    })
    this.updatePorperty()
  },

  bossSlider: function (e) {
    this.setData({
      bossMingzhong: e.detail.value
    })
    this.updatePorperty()
  },
  zhuanjingSlider: function (e) {
    this.setData({
      zjPercent: e.detail.value
    })
    this.updatePorperty()
  },

  //onload 
  onLoad: function () {
    var that = this;

    for (var index in this.data.propertyList) {
      if (this.data.propertyList[index].name == "属性")
        this.data.属性 = index
      if (this.data.propertyList[index].name == "攻击")
        this.data.攻击 = index
      if (this.data.propertyList[index].name == "会心")
        this.data.会心 = index
      if (this.data.propertyList[index].name == "强度")
        this.data.强度 = index
      if (this.data.propertyList[index].name == "专注")
        this.data.专注 = index
      if (this.data.propertyList[index].name == "专精")
        this.data.专精 = index
      if (this.data.propertyList[index].name == "急速")
        this.data.急速 = index
    }

    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
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
          enchantArray: res.data[0].enchant_DPS,
        })
      },
    })

    db.collection('stone').where({
      _openid: this.data.openid
    }).get({
      success: res => {
        this.setData({
          stoneArray: res.data[0].stone_DPS,
        })
      },
    })

    db.collection('food').where({
      _openid: this.data.openid
    }).get({
      success: res => {
        this.setData({
          foodArray: res.data[0].food,
        })
      },
    })

    db.collection('equipM').where({
      _openid: this.data.openid
    }).get({
      success: res => {
        this.setData({
          equipArray: res.data[0].equipFXDPS,
        })
      },
    })
  },

  getDecimal: function (num) {
    return Math.round(num * 100) / 100
  },

  updatePorperty: function () {
    for (var index in this.data.propertyList) {
      this.data.propertyList[index].value = 0
      for (var index2 in this.data.equipPlace) {
        if (this.data.propertyList[index].name == "属性") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].属性 != null && this.data.equipArray[index2][this.data.equipIndexArray[index2]].属性 != "")
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].属性
        }
        if (this.data.propertyList[index].name == "攻击") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].攻击 != null && this.data.equipArray[index2][this.data.equipIndexArray[index2]].攻击 != "")
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].攻击
        }
        if (this.data.propertyList[index].name == "会心") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].会心 != null && this.data.equipArray[index2][this.data.equipIndexArray[index2]].会心 != "")
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].会心
        }
        if (this.data.propertyList[index].name == "专注") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].专注 != null && this.data.equipArray[index2][this.data.equipIndexArray[index2]].专注 != "")
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].专注
        }
        if (this.data.propertyList[index].name == "急速") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].急速 != null && this.data.equipArray[index2][this.data.equipIndexArray[index2]].急速 != "")
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].急速
        }
        if (this.data.propertyList[index].name == "强度") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].强度 != null && this.data.equipArray[index2][this.data.equipIndexArray[index2]].强度 != "")
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].强度
        }
        if (this.data.propertyList[index].name == "专精") {
          if (this.data.equipArray[index2][this.data.equipIndexArray[index2]].专精 != null && this.data.equipArray[index2][this.data.equipIndexArray[index2]].专精 != "")
            this.data.propertyList[index].value += this.data.equipArray[index2][this.data.equipIndexArray[index2]].专精
        }
      }

      for (var index2 in this.data.enchantPlace) {
        if (this.data.propertyList[index].name == "属性") {
          if (this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].属性 != null)
            this.data.propertyList[index].value += this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].属性
        }
        if (this.data.propertyList[index].name == "攻击") {
          if (this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].攻击 != null)
            this.data.propertyList[index].value += this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].攻击
        }
        if (this.data.propertyList[index].name == "会心") {
          if (this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].会心 != null)
            this.data.propertyList[index].value += this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].会心
        }
        if (this.data.propertyList[index].name == "专注") {
          if (this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].专注 != null)
            this.data.propertyList[index].value += this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].专注
        }
        if (this.data.propertyList[index].name == "急速") {
          if (this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].急速 != null)
            this.data.propertyList[index].value += this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].急速
        }
        if (this.data.propertyList[index].name == "强度") {
          if (this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].强度 != null)
            this.data.propertyList[index].value += this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].强度
        }
        if (this.data.propertyList[index].name == "专精") {
          if (this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].专精 != null)
            this.data.propertyList[index].value += this.data.enchantArray[index2][this.data.enchantIndexArray[index2]].专精
        }
      }

      for (var index2 in this.data.stonePlace) {
        if (this.data.propertyList[index].name == "属性") {
          if (this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].属性 != null)
            this.data.propertyList[index].value += this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].属性
        }
        if (this.data.propertyList[index].name == "攻击") {
          if (this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].攻击 != null)
            this.data.propertyList[index].value += this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].攻击
        }
        if (this.data.propertyList[index].name == "会心") {
          if (this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].会心 != null)
            this.data.propertyList[index].value += this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].会心
        }
        if (this.data.propertyList[index].name == "专注") {
          if (this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].专注 != null)
            this.data.propertyList[index].value += this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].专注
        }
        if (this.data.propertyList[index].name == "急速") {
          if (this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].急速 != null)
            this.data.propertyList[index].value += this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].急速
        }
        if (this.data.propertyList[index].name == "强度") {
          if (this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].强度 != null)
            this.data.propertyList[index].value += this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].强度
        }
        if (this.data.propertyList[index].name == "专精") {
          if (this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].专精 != null)
            this.data.propertyList[index].value += this.data.stoneArray[index2][this.data.stoneIndexArray[index2]].专精
        }
      }

      for (var index2 in this.data.foodPlace) {
        if (this.data.propertyList[index].name == "属性") {
          if (this.data.foodArray[index2][this.data.foodIndexArray[index2]].属性 != null)
            this.data.propertyList[index].value += this.data.foodArray[index2][this.data.foodIndexArray[index2]].属性
        }
        if (this.data.propertyList[index].name == "攻击") {
          if (this.data.foodArray[index2][this.data.foodIndexArray[index2]].攻击 != null)
            this.data.propertyList[index].value += this.data.foodArray[index2][this.data.foodIndexArray[index2]].攻击
        }
        if (this.data.propertyList[index].name == "会心") {
          if (this.data.foodArray[index2][this.data.foodIndexArray[index2]].会心 != null)
            this.data.propertyList[index].value += this.data.foodArray[index2][this.data.foodIndexArray[index2]].会心
        }
        if (this.data.propertyList[index].name == "专注") {
          if (this.data.foodArray[index2][this.data.foodIndexArray[index2]].专注 != null)
            this.data.propertyList[index].value += this.data.foodArray[index2][this.data.foodIndexArray[index2]].专注
        }
        if (this.data.propertyList[index].name == "急速") {
          if (this.data.foodArray[index2][this.data.foodIndexArray[index2]].急速 != null)
            this.data.propertyList[index].value += this.data.foodArray[index2][this.data.foodIndexArray[index2]].急速
        }
        if (this.data.propertyList[index].name == "强度") {
          if (this.data.foodArray[index2][this.data.foodIndexArray[index2]].强度 != null)
            this.data.propertyList[index].value += this.data.foodArray[index2][this.data.foodIndexArray[index2]].强度
        }
        if (this.data.propertyList[index].name == "专精") {
          if (this.data.foodArray[index2][this.data.foodIndexArray[index2]].专精 != null)
            this.data.propertyList[index].value += this.data.foodArray[index2][this.data.foodIndexArray[index2]].专精
        }
      }

      for (var index2 in this.data.starArray)
        if (this.data.propertyList[index].name == this.data.starArray[index2].name) {
          if (this.data.starArray[index2].value != null) {
            if (!isNaN(this.data.starArray[index2].value))
              this.data.propertyList[index].value += this.data.starArray[index2].value
          }
        }
    }

    this.data.propertyList[this.data.攻击].value += this.data.propertyList[this.data.属性].value * 0.3
    this.data.propertyList[this.data.会心].value += this.data.propertyList[this.data.属性].value * 0.7
    this.data.propertyList[this.data.强度].value += this.data.propertyList[this.data.属性].value * 0.5
    this.data.propertyList[this.data.强度].value += 28
    this.data.propertyList[this.data.会心].value += 20
    this.data.propertyList[this.data.攻击].value = this.data.propertyList[this.data.攻击].value * 1.2

    //加面板属性
    this.data.propertyList[this.data.属性].value += 40
    this.data.propertyList[this.data.攻击].value += 32
    this.data.propertyList[this.data.专注].value += 14

    //计算百分比
    this.data.propertyList[this.data.属性].percent = this.data.propertyList[this.data.属性].value
    this.data.propertyList[this.data.攻击].percent = this.data.propertyList[this.data.攻击].value
    this.data.propertyList[this.data.专精].percent = this.data.propertyList[this.data.专精].value
    this.data.propertyList[this.data.会心].percent = this.data.propertyList[this.data.会心].value * 0.075 + this.data.kanglong
    this.data.propertyList[this.data.专注].percent = this.data.propertyList[this.data.专注].value * 0.06 + 80 + this.data.huben
    this.data.propertyList[this.data.强度].percent = this.data.propertyList[this.data.强度].value
    this.data.propertyList[this.data.急速].percent = this.data.propertyList[this.data.急速].value / 12

    //血露薇
    if (this.data.xlwBuff == 0) this.data.propertyList[this.data.会心].percent += 1
    else if (this.data.xlwBuff == 1) this.data.propertyList[this.data.专注].percent += 1
    else if (this.data.xlwBuff == 2) this.data.propertyList[this.data.强度].percent += 10
    else if (this.data.xlwBuff == 3) this.data.propertyList[this.data.急速].percent += 1

    //挚友
    if (this.data.zhiyouList.indexOf("0") != -1) {
      this.data.propertyList[this.data.会心].percent += 1
    }
    if (this.data.zhiyouList.indexOf("1") != -1) {
      this.data.propertyList[this.data.专精].percent += 10
    }
    if (this.data.zhiyouList.indexOf("2") != -1) {
      this.data.propertyList[this.data.强度].percent += 10
    }

    for (var index in this.data.propertyList) {
      this.data.propertyList[index].value = this.getDecimal(this.data.propertyList[index].value)
      this.data.propertyList[index].percent = this.getDecimal(this.data.propertyList[index].percent)
    }

    this.data.zuizhong = this.getDecimal(this.data.propertyList[this.data.攻击].value * (1 + this.data.propertyList[this.data.强度].percent / 1000))
    var hitRate = this.data.propertyList[this.data.专注].percent
    var criRate = this.data.propertyList[this.data.会心].percent
    var zjRate = this.data.propertyList[this.data.专精].percent
    var criEffectRate = 0.6 + this.data.tianqiang / 100;
    var bossMiss = this.data.bossMingzhong
    var missRate = this.data.bossMingzhong - hitRate
    if (missRate < 0)
      missRate = 0
    this.data.dpsWithoutZJ = this.getDecimal(this.data.zuizhong * (missRate / 100 * 0.3 + (100 - missRate) / 100 * (criRate / 100 * criEffectRate + 1)))
    this.data.dpsWithZJ = this.getDecimal(this.data.dpsWithoutZJ * (1 + this.data.zjPercent / 100 * zjRate / 1000))

    this.setData({
      propertyList: this.data.propertyList,
      zuizhong: this.data.zuizhong,
      dpsWithoutZJ: this.data.dpsWithoutZJ,
      dpsWithZJ: this.data.dpsWithZJ,
    })
  },

  drawCanvas: function () {
    let promise1 = new Promise(function (resolve, reject) {
      /* 获得要在画布上绘制的图片 */
      wx.getImageInfo({
        src: '../../../image/yj_bg_middle.jpg',
        success: function (res) {
          resolve(res);
        }
      })
    });
    let promise2 = new Promise(function (resolve, reject) {
      wx.getImageInfo({
        src: '../../../image/code.jpg',
        success: function (res) {
          resolve(res);
        }
      })
    });

    /* 图片获取成功才执行后续代码 */
    Promise.all(
      [promise1, promise2]
    ).then(res => {
      console.log(res)
      /* 创建 canvas 画布 */
      const ctx = wx.createCanvasContext('shareImg')
      ctx.setFillStyle('white')
      ctx.fillRect(0, 0, 863, 485)

      /* 绘制图像到画布  图片的位置你自己计算好就行 参数的含义看文档 */
      /* ps: 网络图片的话 就不用加../../路径了 反正我这里路径得加 */
      ctx.setGlobalAlpha(0.3)
      ctx.drawImage('../../../' + res[0].path, 0, 0, 863, 485)
      ctx.setGlobalAlpha(1)

      /* 绘制文字 位置自己计算 参数自己看文档 */
      ctx.setTextAlign('left')                        //  位置
      ctx.setFillStyle('black')                       //  颜色
      ctx.setFontSize(30)                             //  字号
      ctx.fillText('古剑奇谭网络版配装器', 250, 40)     //  内容  不会自己换行 需手动换行

      ctx.setFontSize(24)
      ctx.fillText('门派：御剑    专精：飞星篇', 450, 80)

      //装备
      ctx.setFontSize(18)
      for (var i = 0; i < this.data.equipArray.length; i++) {
        ctx.fillText(this.data.equipArray[i][this.data.equipIndexArray[i]].nameShort, 40, 27 * i + 80)
      }
      ctx.setFontSize(8)
      ctx.setFillStyle('#666666')
      for (var i = 0; i < this.data.equipArray.length; i++) {
        ctx.fillText(this.data.equipArray[i][this.data.equipIndexArray[i]].nameLong, 40, 27 * i + 90)
      }
      //附魔宝石
      ctx.setFontSize(12)
      ctx.fillText(this.data.stoneArray[0][this.data.stoneIndexArray[0]].nameShort, 200, 27 * 1 + 80)
      ctx.fillText(this.data.stoneArray[1][this.data.stoneIndexArray[1]].nameShort, 280, 27 * 1 + 80)
      ctx.fillText(this.data.stoneArray[2][this.data.stoneIndexArray[2]].nameShort, 200, 27 * 2 + 80)
      ctx.fillText(this.data.stoneArray[3][this.data.stoneIndexArray[3]].nameShort, 280, 27 * 2 + 80)
      ctx.fillText(this.data.stoneArray[4][this.data.stoneIndexArray[4]].nameShort, 200, 27 * 3 + 80)
      ctx.fillText(this.data.stoneArray[5][this.data.stoneIndexArray[5]].nameShort, 280, 27 * 3 + 80)
      ctx.fillText(this.data.stoneArray[6][this.data.stoneIndexArray[6]].nameShort, 200, 27 * 10 + 80)
      ctx.fillText(this.data.stoneArray[7][this.data.stoneIndexArray[7]].nameShort, 200, 27 * 13 + 80)
      ctx.fillText(this.data.stoneArray[8][this.data.stoneIndexArray[8]].nameShort, 200, 27 * 14 + 80)

      ctx.fillText(this.data.enchantArray[0][this.data.enchantIndexArray[0]].name, 200, 27 * 0 + 80)
      ctx.fillText(this.data.enchantArray[1][this.data.enchantIndexArray[1]].name, 200, 27 * 4 + 80)
      ctx.fillText(this.data.enchantArray[2][this.data.enchantIndexArray[2]].name, 200, 27 * 5 + 80)
      ctx.fillText(this.data.enchantArray[3][this.data.enchantIndexArray[3]].name, 200, 27 * 6 + 80)
      ctx.fillText(this.data.enchantArray[4][this.data.enchantIndexArray[4]].name, 200, 27 * 7 + 80)
      ctx.fillText(this.data.enchantArray[5][this.data.enchantIndexArray[5]].name, 200, 27 * 8 + 80)
      ctx.fillText(this.data.enchantArray[6][this.data.enchantIndexArray[6]].name, 200, 27 * 9 + 80)

      //星蕴
      ctx.setFontSize(24)
      ctx.setFillStyle('black')
      ctx.fillText('星蕴', 450, 130)
      ctx.setFontSize(18)
      for (var i = 0; i < this.data.starArray.length; i++)
        ctx.fillText(this.data.starArray[i].name, 450 + (i % 2) * 100, 25 * (i - i % 2) / 2 + 155)

      ctx.setTextAlign('right')
      ctx.setFillStyle('#666666')
      for (var i = 0; i < this.data.starArray.length; i++)
        ctx.fillText(this.data.starArray[i].value, 530 + (i % 2) * 100, 25 * (i - i % 2) / 2 + 155)
      ctx.setTextAlign('left')

      //增益
      ctx.setFontSize(24)
      ctx.setFillStyle('black')
      ctx.fillText('附加属性', 450, 265)
      ctx.setFontSize(18)
      var strList = new Array();
      for (var i = 0; i < this.data.foodArray.length; i++) {
        if (this.data.foodIndexArray[i] != 0)
          strList.push(this.data.foodArray[i][this.data.foodIndexArray[i]].nameShort);
      }
      if (this.data.huben != 0)
        strList.push("虎贲" + this.data.huben + '%命中')
      if (this.data.kanglong != 0)
        strList.push("亢行" + this.data.kanglong + '%会心')
      if (this.data.xlwBuff == 0) strList.push('血露薇1%会心')
      else if (this.data.xlwBuff == 1) strList.push('血露薇1%专注')
      else if (this.data.xlwBuff == 2) strList.push('血露薇1%强度')
      else if (this.data.xlwBuff == 3) strList.push('血露薇1%急速')
      if (this.data.zhiyouList.indexOf("0") != -1) {
        strList.push('挚友1%会心')
      }
      if (this.data.zhiyouList.indexOf("1") != -1) {
        strList.push('挚友1%专精')
      }
      if (this.data.zhiyouList.indexOf("2") != -1) {
        strList.push('挚友1%强度')
      }

      for (var i = 0; i < strList.length; i++) {
        ctx.fillText(strList[i], 450, 23 * i + 290)
      }

      ctx.setFontSize(24)
      ctx.setFillStyle('black')
      ctx.fillText('面板', 700, 130)
      ctx.setFontSize(18)
      for (var i = 0; i < this.data.propertyList.length; i++) {
        ctx.setFillStyle('black')
        ctx.fillText(this.data.propertyList[i].name, 700, 25 * i + 155)
        ctx.setFillStyle('#666666')
        ctx.setTextAlign('right')
        ctx.fillText(this.data.propertyList[i].percent, 800, 25 * i + 155)
        ctx.setTextAlign('left')
      }
      ctx.setFillStyle('black')
      ctx.fillText('最终', 700, 25 * 7 + 155)
      ctx.setFillStyle('#666666')
      ctx.setTextAlign('right')
      ctx.fillText(this.data.zuizhong, 800, 25 * 7 + 155)
      ctx.setTextAlign('left')


      ctx.drawImage('../../../' + res[1].path, 713, 335, 150, 150)

      /* 绘制 */
      ctx.stroke()
      ctx.draw(false, this.showCanvas)
    })
  },

  showCanvas: function () {
    var that = this
    wx.canvasToTempFilePath({
      canvasId: 'shareImg',
      success(res) {
        var strList = [];
        strList.push(res.tempFilePath)
        that.setData({
          shareImgUrl: strList,
          showCanvas: false,
        })
      }
    }, this)
  },

  save: function () {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.shareImgUrl[0],
    })
    wx.showToast({
      title: '保存成功',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
    this.setData({
      showCanvas: true
    })
  },

  previewImage: function () {
    wx.previewImage({
      urls: this.data.shareImgUrl
    });
  },

  closeCanvas: function () {
    this.setData({
      showCanvas: true
    })
  },

  footerTap: app.footerTap
})