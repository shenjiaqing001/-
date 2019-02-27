Page({

  data: {
    height: 20,
    focus: false
  },

  bindButtonTap() {
    this.setData({
      focus: true
    })
  },

  bindTextAreaBlur(e) {
    console.log(e.detail.value)
  },

  bindFormSubmit(e) {
    const db = wx.cloud.database()
    if(e.detail.value.textarea == "")
      return;
    db.collection('message').add({
      data: {
        message: e.detail.value.textarea
      },
      success: res => {
        this.setData({
          messageId: res._id,
          message: e.detail.value.textarea
        })
        wx.showToast({
          title: '留言成功',
          success:res=>{
            setTimeout(function () {
              wx.redirectTo({
                url: '/pages/home/home'
              })
            }, 1500)
          }
        })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '留言失败'
        })
      }
    })
  }

  
})