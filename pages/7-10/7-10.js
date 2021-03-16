// pages/7-10/7-10.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songjson:{}
  },

  toplay:function(e){
    console.log(e)
    wx.navigateTo({
      url: '../7-10-2/7-10-2?songmid='+e.currentTarget.dataset.songmid+'&albumid='+e.currentTarget.dataset.albumid+'&songname='+e.currentTarget.dataset.songname,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.request({
      url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923',
      success:function(res){
        that.setData({
          songjson:res.data
        })
        console.log(res.data)
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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