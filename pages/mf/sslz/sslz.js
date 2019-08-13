var app = getApp();
Page({
    data: {
        navbar: ['装备', '附魔/宝石', '星蕴', '附加属性', "属性"],
        winHeight: "",//窗口高度
        currentTab: 0, //预设当前项的值
        shareImgUrl: [],

        equipList: [],
        levelList: [],
        equipMutliArray: [],
        equipMutilIndexArray: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        equipDetail: [],

        equipPlace: [
            { name: '武器' },
            { name: '信物左' },
            { name: '信物中' },
            { name: '信物右' },
            { name: '头' },
            { name: '衣服' },
            { name: '护腕' },
            { name: '腰带' },
            { name: '裤' },
            { name: '鞋' },
            { name: '项链' },
            { name: '配1' },
            { name: '配2' },
            { name: '戒指1' },
            { name: '戒指2' },
        ],

        equipEnhance: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //附魔-------------------------------------------------------------------------------------------------------------------------
        enchantPlace: [
            { name: '武器' },
            { name: '头' },
            { name: '衣服' },
            { name: '护腕' },
            { name: '腰带' },
            { name: '裤' },
            { name: '鞋' },
        ],
        enchantIndexArray: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
        ],
        enchantArray: [],   //显示数组
        enchantList:[],     //全部数组
        
        //宝石-------------------------------------------------------------------------------------------------------------------------
        stoneIndex: 0,
        stonePlace: [
            { name: '信物左' },
            { name: '信物左' },
            { name: '信物中' },
            { name: '信物中' },
            { name: '信物右' },
            { name: '信物右' },
            { name: '项链' },
            { name: '项链' },
            { name: '戒指' },
            { name: '戒指' },
        ],
        stoneIndexArray: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
        ],
        stoneArray: [],         //显示数组
        stoneList: [],          //全部数组
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
        //星蕴和其他---------------------------------------------------------------------------------------------------------------------

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

        zuizhong: 0,

        nameStr: [
            "", "识凰", "闻雁", "秋松", "烟月"
        ],
        nameWeapon: [
            "", "棋盒", "丹鼎", "曲谱", "冠", "袍", "腕", "带", "裤", "履", "链", "佩", "佩", "戒", "戒"
        ],
        nameGiven1: "·琴章",
        nameGiven2: "·法战",

        showCanvas: true
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
                var list = []
                var tempEnchantList = res.data[1].enchant_DPS

                for (var index in tempEnchantList) {
                    var name = []
                    for (var index2 in tempEnchantList[index])
                        name.push(tempEnchantList[index][index2].name)
                    list.push([name, tempEnchantList[index][0].value.split(";")])
                }

                this.setData({
                    enchantList:tempEnchantList,
                    enchantArray: list,
                })
            },
        })

        db.collection('stone').where({
            _openid: this.data.openid
        }).get({
            success: res => {
                var list = []
                var tempStoneList = res.data[1].stone_DPS

                for (var index in tempStoneList) {
                    var name = []
                    for (var index2 in tempStoneList[index])
                        name.push(tempStoneList[index][index2].name)
                    list.push([name, tempStoneList[index][0].value.split(";")])
                }

                this.setData({
                    stoneList: tempStoneList,
                    stoneArray: list,
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

        db.collection('equipment').where({
            _openid: this.data.openid
        }).get({
            success: res => {
                var list = []
                var tempEquipList = res.data[1].equipListD

                var data = {
                    nameStr: this.data.nameStr,
                    nameWeapon: this.data.nameWeapon,
                    nameGiven1: this.data.nameGiven1,
                    nameGiven2: this.data.nameGiven2,
                };

                for (var i = 0; i < 4; ++i) {
                    for (var j in tempEquipList[i]) {
                        var num = parseInt(tempEquipList[i][j].name)
                        tempEquipList[i][j].name = data.nameStr[num] + data.nameWeapon[i] + data.nameGiven1
                    }
                }

                for (var i = 4; i < 15; ++i) {
                    for (var j in tempEquipList[i]) {
                        var num = parseInt(tempEquipList[i][j].name)
                        if (parseInt(num / 1000) == 1) {
                            tempEquipList[i][j].name = data.nameStr[num % 1000] + data.nameWeapon[i]
                        }
                        else if (parseInt(num / 1000) == 2) {
                            tempEquipList[i][j].name = data.nameStr[num % 1000] + data.nameWeapon[i] + data.nameGiven2
                        }
                    }
                }

                for (var index in tempEquipList) {
                    var name = []
                    for (var index2 in tempEquipList[index])
                        name.push(tempEquipList[index][index2].name)
                    list.push([name, tempEquipList[index][0].level.split(";")])
                }

                this.setData({
                    equipList: tempEquipList,
                    levelList: res.data[1].level,
                    equipMutliArray: list,
                })
            },
        })
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

    //食品------------------------------------------------------------------------------------------------------------------------------------------------
    foodPickerChange: function (e) {
        var index = this.data.index
        const curindex = e.target.dataset.idx
        this.data.foodIndexArray[curindex] = e.detail.value
        this.setData({
            foodIndexArray: this.data.foodIndexArray
        })
        this.updatePorperty()
    },

    //强化------------------------------------------------------------------------------------------------------------------------------------------------
    equipEnhancePlus: function (e) {
        if (e.target.dataset.index >= 10)
            return
        var data = {
            equipEnhance: this.data.equipEnhance,
        };
        data.equipEnhance[e.target.dataset.index] += 1
        if (data.equipEnhance[e.target.dataset.index] > 5)
            data.equipEnhance[e.target.dataset.index] = 5
        this.setData(data)
        this.updatePorperty()
    },

    equipEnhanceMinus: function (e) {
        if (e.target.dataset.index >= 10)
            return
        var data = {
            equipEnhance: this.data.equipEnhance,
        };
        data.equipEnhance[e.target.dataset.index] -= 1
        if (data.equipEnhance[e.target.dataset.index] < 0)
            data.equipEnhance[e.target.dataset.index] = 0
        this.setData(data)
        this.updatePorperty()
    },

    equipEnhanceMax: function (e) {
        if (e.target.dataset.index >= 10)
            return
        var data = {
            equipEnhance: this.data.equipEnhance,
        };
        data.equipEnhance[e.target.dataset.index] = 5
        this.setData(data)
        this.updatePorperty()
    },

    //星蕴------------------------------------------------------------------------------------------------------------------------------------------------
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

    kanglongSlider: function (e) {
        this.setData({
            kanglong: e.detail.value
        })
        this.updatePorperty()
    },

    //装备------------------------------------------------------------------------------------------------------------------------------------------------
    equipMultiChange: function (e) {
        const curindex = e.target.dataset.idx
        var data = {
            equipMutilIndexArray: this.data.equipMutilIndexArray,
        };
        if (e.detail.value[0] == null)
            e.detail.value[0] = 0
        if (e.detail.value[1] == null)
            e.detail.value[1] = 0
        data.equipMutilIndexArray[curindex] = e.detail.value
        this.setData(data);
        this.updatePorperty()
    },

    equipMultiColumnChanger: function (e) {
        const curindex = e.target.dataset.idx
        var data = {
            equipMutliArray: this.data.equipMutliArray,
        };
        switch (e.detail.column) {
            case 0:
                {
                    var levels = this.data.equipList[curindex][e.detail.value].level;
                    data.equipMutliArray[curindex][1] = levels.split(";");
                }
                break;
        }
        this.setData(data);
    },

    //附魔------------------------------------------------------------------------------------------------------------------------------------------------
    enchantMultiChange: function (e) {
        const curindex = e.target.dataset.idx
        var data = {
            enchantIndexArray: this.data.enchantIndexArray,
        };
        if (e.detail.value[0] == null)
            e.detail.value[0] = 0
        if (e.detail.value[1] == null)
            e.detail.value[1] = 0;
            
        data.enchantIndexArray[curindex] = e.detail.value
        this.setData(data);
        this.updatePorperty()
    },

    enchantMultiColumnChanger: function (e) {
        const curindex = e.target.dataset.idx
        var data = {
            enchantArray: this.data.enchantArray
        };

        switch (e.detail.column) {
            case 0:
                {
                    var values = this.data.enchantList[curindex][e.detail.value].value;
                    data.enchantArray[curindex][1] =  values.split(";");
                }
                break;
        }
        this.setData(data)
    },
    
    //宝石------------------------------------------------------------------------------------------------------------------------------------------------
    stoneMultiChange: function (e) {
        const curindex = e.target.dataset.idx
        var data = {
            stoneIndexArray: this.data.stoneIndexArray,
        };
        if (e.detail.value[0] == null)
            e.detail.value[0] = 0
        if (e.detail.value[1] == null)
            e.detail.value[1] = 0;
            
        data.stoneIndexArray[curindex] = e.detail.value
        this.setData(data);
        this.updatePorperty()
    },

    stoneMultiColumnChanger: function (e) {
        const curindex = e.target.dataset.idx
        var data = {
            stoneArray: this.data.stoneArray
        };

        switch (e.detail.column) {
            case 0:
                {
                    var values = this.data.stoneList[curindex][e.detail.value].value;
                    data.stoneArray[curindex][1] =  values.split(";");
                }
                break;
        }
        this.setData(data)
    },

    //等级------------------------------------------------------------------------------------------------------------------------------------------------
    getLevelDetail: function (index, level) {
        var data = {
            levelList: this.data.levelList
        }
        switch (level) {
            case "150":
                return data.levelList[index].level150;
            case "165":
                return data.levelList[index].level165;
            case "180":
                return data.levelList[index].level180;
            case "195":
                return data.levelList[index].level195;
                break;
        }
    },

    getDecimal: function (num) {
        return Math.round(num * 100) / 100
    },

    getStoneName : function(str){
        switch(str){
            case "强度":
                return "赫炎钰";
            case "会心":
                return "震金钰";
            case "专注":
                return "琼霜钰";
            case "专精":
                return "飞砂钰";
            case "急速":
                return "碧桐钰";
            case "治疗":
                return "碧桐钰";
            case "属性":
                return "震金钰";
            default:
                return "";
        }
    },

    updatePorperty: function () {
        var data = {
            propertyList: this.data.propertyList,
            zuizhong: this.data.zuizhong,
            equipMutilIndexArray: this.data.equipMutilIndexArray,
            equipList: this.data.equipList,
            enchantArray: this.data.enchantArray,
            enchantIndexArray: this.data.enchantIndexArray,
            stoneArray: this.data.stoneArray,
            stoneIndexArray: this.data.stoneIndexArray,
            foodArray: this.data.foodArray,
            foodIndexArray: this.data.foodIndexArray,
            starArray: this.data.starArray,
            equipEnhance: this.data.equipEnhance,
        };
        for (var i = 0; i < data.propertyList.length; ++i) {
            data.propertyList[i].value = 0;
        }

        console.log("stoneList:")
        console.log(this.data.stoneList)
        console.log("stoneArray")
        console.log(data.stoneArray)

        console.log("enchantList:")
        console.log(this.data.enchantList)
        console.log("enchantArray")
        console.log(this.data.enchantArray)


        for (var i = 0; i < data.equipMutilIndexArray.length; ++i) {
            var equipDetail = data.equipList[i][data.equipMutilIndexArray[i][0]].detail.split(';')
            var level = data.equipList[i][data.equipMutilIndexArray[i][0]].level.split(';')[data.equipMutilIndexArray[i][1]]
            var levelDetail = this.getLevelDetail(i, level).split(';')
            var num = data.equipEnhance[i]

            for (var j = 0; j < equipDetail.length; ++j) {
                if (equipDetail[j] == "攻击")
                    data.propertyList[this.data.攻击].value += parseFloat(levelDetail[j]) * (1 + num * 0.03)
                if (equipDetail[j] == "属性")
                    data.propertyList[this.data.属性].value += parseFloat(levelDetail[j]) * (1 + num * 0.03)
                if (equipDetail[j] == "专注")
                    data.propertyList[this.data.专注].value += parseFloat(levelDetail[j]) * (1 + num * 0.03)
                if (equipDetail[j] == "专精")
                    data.propertyList[this.data.专精].value += parseFloat(levelDetail[j]) * (1 + num * 0.03)
                if (equipDetail[j] == "急速")
                    data.propertyList[this.data.急速].value += parseFloat(levelDetail[j]) * (1 + num * 0.03)
                if (equipDetail[j] == "会心")
                    data.propertyList[this.data.会心].value += parseFloat(levelDetail[j]) * (1 + num * 0.03)
                if (equipDetail[j] == "强度")
                    data.propertyList[this.data.强度].value += parseFloat(levelDetail[j]) * (1 + num * 0.03)
            }
        }

        for (var i = 0; i < data.enchantArray.length; ++i) {
            if (data.enchantArray[i][0][data.enchantIndexArray[i][0]] == "属性")
                data.propertyList[this.data.属性].value += parseInt(data.enchantArray[i][1][data.enchantIndexArray[i][1]])
            if (data.enchantArray[i][0][data.enchantIndexArray[i][0]] == "攻击")
                data.propertyList[this.data.攻击].value += parseInt(data.enchantArray[i][1][data.enchantIndexArray[i][1]])
            if (data.enchantArray[i][0][data.enchantIndexArray[i][0]] == "会心")
                data.propertyList[this.data.会心].value += parseInt(data.enchantArray[i][1][data.enchantIndexArray[i][1]])
            if (data.enchantArray[i][0][data.enchantIndexArray[i][0]] == "专注")
                data.propertyList[this.data.专注].value += parseInt(data.enchantArray[i][1][data.enchantIndexArray[i][1]])
            if (data.enchantArray[i][0][data.enchantIndexArray[i][0]] == "急速")
                data.propertyList[this.data.急速].value += parseInt(data.enchantArray[i][1][data.enchantIndexArray[i][1]])
            if (data.enchantArray[i][0][data.enchantIndexArray[i][0]] == "专精")
                data.propertyList[this.data.专精].value += parseInt(data.enchantArray[i][1][data.enchantIndexArray[i][1]])
            if (data.enchantArray[i][0][data.enchantIndexArray[i][0]] == "强度")
                data.propertyList[this.data.强度].value += parseInt(data.enchantArray[i][1][data.enchantIndexArray[i][1]])
        }

        for (var i = 0; i < data.stoneArray.length; ++i) {
            if (data.stoneArray[i][0][data.stoneIndexArray[i][0]] == "属性")
                data.propertyList[this.data.属性].value += parseInt(data.stoneArray[i][1][data.stoneIndexArray[i][1]])
            if (data.stoneArray[i][0][data.stoneIndexArray[i][0]] == "攻击")
                data.propertyList[this.data.攻击].value += parseInt(data.stoneArray[i][1][data.stoneIndexArray[i][1]])
            if (data.stoneArray[i][0][data.stoneIndexArray[i][0]] == "会心")
                data.propertyList[this.data.会心].value += parseInt(data.stoneArray[i][1][data.stoneIndexArray[i][1]])
            if (data.stoneArray[i][0][data.stoneIndexArray[i][0]] == "专注")
                data.propertyList[this.data.专注].value += parseInt(data.stoneArray[i][1][data.stoneIndexArray[i][1]])
            if (data.stoneArray[i][0][data.stoneIndexArray[i][0]] == "急速")
                data.propertyList[this.data.急速].value += parseInt(data.stoneArray[i][1][data.stoneIndexArray[i][1]])
            if (data.stoneArray[i][0][data.stoneIndexArray[i][0]] == "专精")
                data.propertyList[this.data.专精].value += parseInt(data.stoneArray[i][1][data.stoneIndexArray[i][1]])
            if (data.stoneArray[i][0][data.stoneIndexArray[i][0]] == "强度")
                data.propertyList[this.data.强度].value += parseInt(data.stoneArray[i][1][data.stoneIndexArray[i][1]])
        }

        for (var i = 0; i < data.foodArray.length; ++i) {
            if (data.foodArray[i][data.foodIndexArray[i]].属性 != null)
                data.propertyList[this.data.属性].value += data.foodArray[i][data.foodIndexArray[i]].属性
            if (data.foodArray[i][data.foodIndexArray[i]].攻击 != null)
                data.propertyList[this.data.攻击].value += data.foodArray[i][data.foodIndexArray[i]].攻击
            if (data.foodArray[i][data.foodIndexArray[i]].会心 != null)
                data.propertyList[this.data.会心].value += data.foodArray[i][data.foodIndexArray[i]].会心
            if (data.foodArray[i][data.foodIndexArray[i]].专注 != null)
                data.propertyList[this.data.专注].value += data.foodArray[i][data.foodIndexArray[i]].专注
            if (data.foodArray[i][data.foodIndexArray[i]].急速 != null)
                data.propertyList[this.data.急速].value += data.foodArray[i][data.foodIndexArray[i]].急速
            if (data.foodArray[i][data.foodIndexArray[i]].强度 != null)
                data.propertyList[this.data.强度].value += data.foodArray[i][data.foodIndexArray[i]].强度
            if (data.foodArray[i][data.foodIndexArray[i]].专精 != null)
                data.propertyList[this.data.专精].value += data.foodArray[i][data.foodIndexArray[i]].专精
        }        

        for (var i = 0; i < data.starArray.length; ++i) {
            if (data.starArray[i].name == "属性")
                data.propertyList[this.data.属性].value += data.starArray[i].value
            if (data.starArray[i].name == "攻击")
                data.propertyList[this.data.攻击].value += data.starArray[i].value
            if (data.starArray[i].name == "会心")
                data.propertyList[this.data.会心].value += data.starArray[i].value
            if (data.starArray[i].name == "专注")
                data.propertyList[this.data.专注].value += data.starArray[i].value
            if (data.starArray[i].name == "急速")
                data.propertyList[this.data.急速].value += data.starArray[i].value
            if (data.starArray[i].name == "强度")
                data.propertyList[this.data.强度].value += data.starArray[i].value
            if (data.starArray[i].name == "专精")
                data.propertyList[this.data.专精].value += data.starArray[i].value
        }


        data.propertyList[this.data.攻击].value += data.propertyList[this.data.属性].value * 0.4
        data.propertyList[this.data.会心].value += data.propertyList[this.data.属性].value * 0.3
        data.propertyList[this.data.强度].value += data.propertyList[this.data.属性].value * 0.6
        data.propertyList[this.data.属性].value += 76
        data.propertyList[this.data.专注].value += 20

        //计算百分比
        data.propertyList[this.data.属性].percent = data.propertyList[this.data.属性].value
        data.propertyList[this.data.攻击].percent = data.propertyList[this.data.攻击].value
        data.propertyList[this.data.专精].percent = data.propertyList[this.data.专精].value
        data.propertyList[this.data.会心].percent = data.propertyList[this.data.会心].value / 21 + this.data.kanglong
        data.propertyList[this.data.专注].percent = data.propertyList[this.data.专注].value / 27.5 + 80 + this.data.huben
        data.propertyList[this.data.强度].percent = data.propertyList[this.data.强度].value / 17
        data.propertyList[this.data.急速].percent = data.propertyList[this.data.急速].value / 18.75

        //血露薇
        if (this.data.xlwBuff == 0) data.propertyList[this.data.会心].percent += 1
        else if (this.data.xlwBuff == 1) data.propertyList[this.data.专注].percent += 1
        else if (this.data.xlwBuff == 2) data.propertyList[this.data.强度].percent += 1
        else if (this.data.xlwBuff == 3) data.propertyList[this.data.急速].percent += 1
        //挚友
        if (this.data.zhiyouList.indexOf("0") != -1) {
            data.propertyList[this.data.会心].percent += 1
        }
        if (this.data.zhiyouList.indexOf("1") != -1) {
            data.propertyList[this.data.专精].percent += 10
        }
        if (this.data.zhiyouList.indexOf("2") != -1) {
            data.propertyList[this.data.强度].percent += 1
        }

        for (var index in this.data.propertyList) {
            data.propertyList[index].value = this.getDecimal(data.propertyList[index].value)
            data.propertyList[index].percent = this.getDecimal(data.propertyList[index].percent)
        }

        data.zuizhong = this.getDecimal(data.propertyList[this.data.攻击].value * (1 + data.propertyList[this.data.强度].percent / 100))

        this.setData(data);
    },

    drawCanvas: function () {
        let promise1 = new Promise(function (resolve, reject) {
            /* 获得要在画布上绘制的图片 */
            wx.getImageInfo({
                src: '../../../image/mf_bg_new.jpg',
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
            /* 创建 canvas 画布 */
            const ctx = wx.createCanvasContext('shareImg')
            ctx.setFillStyle('white')
            ctx.fillRect(0, 0, 863, 485)

            /* 绘制图像到画布  图片的位置你自己计算好就行 参数的含义看文档 */
            /* ps: 网络图片的话 就不用加../../路径了 反正我这里路径得加 */
            ctx.setGlobalAlpha(0.5)
            ctx.drawImage('../../../' + res[0].path, 0, 0, 863, 485)
            ctx.setGlobalAlpha(1)

            /* 绘制文字 位置自己计算 参数自己看文档 */
            ctx.setTextAlign('left')                        //  位置
            ctx.setFillStyle('black')                       //  颜色
            ctx.setFontSize(30)                             //  字号
            ctx.fillText('古剑奇谭网络版配装器', 250, 40)     //  内容  不会自己换行 需手动换行

            ctx.setFontSize(24)
            ctx.fillText('门派：妙法    专精：三十六章', 450, 80)

            //装备
            ctx.setFontSize(18)
            for (var i = 0; i < this.data.equipList.length; i++) {
                ctx.fillText(this.data.equipList[i][this.data.equipMutilIndexArray[i][0]].name, 40, 27 * i + 80)
            }
            ctx.setFontSize(8)
            ctx.setFillStyle('#666666')
            for (var i = 0; i < this.data.equipList.length; i++) {
                ctx.fillText(this.data.equipList[i][this.data.equipMutilIndexArray[i][0]].description, 40, 27 * i + 90)
            }
            ctx.setFontSize(12)
            for (var i = 0; i < this.data.equipList.length; i++) {
                ctx.fillText(this.data.equipList[i][this.data.equipMutilIndexArray[i][0]].from, 200, 27 * i + 88)
            }
            for (var i = 0; i < this.data.levelList.length; i++) {
                ctx.fillText(this.data.equipList[i][this.data.equipMutilIndexArray[i][0]].level.split(';')[this.data.equipMutilIndexArray[i][1]], 280, 27 * i + 88)
            }
            //附魔宝石
            ctx.setFontSize(12)
            var stoneLevelList = ["捌","柒","陆","伍","肆","叁","贰","壹" ,"","",""]
            ctx.fillText(this.getStoneName(this.data.stoneArray[0][0][this.data.stoneIndexArray[0][0]]) + "·" + stoneLevelList[this.data.stoneIndexArray[0][1]], 200, 27 * 1 + 76)
            ctx.fillText(this.getStoneName(this.data.stoneArray[1][0][this.data.stoneIndexArray[1][0]]) + "·" + stoneLevelList[this.data.stoneIndexArray[1][1]], 280, 27 * 1 + 76)
            ctx.fillText(this.getStoneName(this.data.stoneArray[2][0][this.data.stoneIndexArray[2][0]]) + "·" + stoneLevelList[this.data.stoneIndexArray[2][1]], 200, 27 * 2 + 76)
            ctx.fillText(this.getStoneName(this.data.stoneArray[3][0][this.data.stoneIndexArray[3][0]]) + "·" + stoneLevelList[this.data.stoneIndexArray[3][1]], 280, 27 * 2 + 76)
            ctx.fillText(this.getStoneName(this.data.stoneArray[4][0][this.data.stoneIndexArray[4][0]]) + "·" + stoneLevelList[this.data.stoneIndexArray[4][1]], 200, 27 * 3 + 76)
            ctx.fillText(this.getStoneName(this.data.stoneArray[5][0][this.data.stoneIndexArray[5][0]]) + "·" + stoneLevelList[this.data.stoneIndexArray[5][1]], 280, 27 * 3 + 76)
            ctx.fillText(this.getStoneName(this.data.stoneArray[6][0][this.data.stoneIndexArray[6][0]]) + "·" + stoneLevelList[this.data.stoneIndexArray[6][1]], 200, 27 * 10 + 76)
            ctx.fillText(this.getStoneName(this.data.stoneArray[7][0][this.data.stoneIndexArray[7][0]]) + "·" + stoneLevelList[this.data.stoneIndexArray[7][1]], 280, 27 * 10 + 76)
            ctx.fillText(this.getStoneName(this.data.stoneArray[8][0][this.data.stoneIndexArray[8][0]]) + "·" + stoneLevelList[this.data.stoneIndexArray[8][1]], 200, 27 * 13 + 76)
            ctx.fillText(this.getStoneName(this.data.stoneArray[9][0][this.data.stoneIndexArray[9][0]]) + "·" + stoneLevelList[this.data.stoneIndexArray[9][1]], 200, 27 * 14 + 76)

            
            ctx.fillText(this.data.enchantArray[0][0][this.data.enchantIndexArray[0][0]] +""+ this.data.enchantArray[0][1][this.data.enchantIndexArray[0][1]], 200, 27 * 0 + 76)
            ctx.fillText(this.data.enchantArray[1][0][this.data.enchantIndexArray[1][0]] +""+ this.data.enchantArray[1][1][this.data.enchantIndexArray[1][1]], 200, 27 * 4 + 76)
            ctx.fillText(this.data.enchantArray[2][0][this.data.enchantIndexArray[2][0]] +""+ this.data.enchantArray[2][1][this.data.enchantIndexArray[2][1]], 200, 27 * 5 + 76)
            ctx.fillText(this.data.enchantArray[3][0][this.data.enchantIndexArray[3][0]] +""+ this.data.enchantArray[3][1][this.data.enchantIndexArray[3][1]], 200, 27 * 6 + 76)
            ctx.fillText(this.data.enchantArray[4][0][this.data.enchantIndexArray[4][0]] +""+ this.data.enchantArray[4][1][this.data.enchantIndexArray[4][1]], 200, 27 * 7 + 76)
            ctx.fillText(this.data.enchantArray[5][0][this.data.enchantIndexArray[5][0]] +""+ this.data.enchantArray[5][1][this.data.enchantIndexArray[5][1]], 200, 27 * 8 + 76)
            ctx.fillText(this.data.enchantArray[6][0][this.data.enchantIndexArray[6][0]] +""+ this.data.enchantArray[6][1][this.data.enchantIndexArray[6][1]], 200, 27 * 9 + 76)

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