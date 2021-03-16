// pages/7-11/7-11.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key:"",
    songlist:[]
  },


  input:function(e){
    //console.log(e.detail.value)
    this.setData({
      key:e.detail.value
    })
  },

  search:function(e){
    var that=this
    wx.request({
      url: 'https://c.y.qq.com/soso/fcgi-bin/client_search_cp?g_tk=5381&p=5&n=20&w='+that.data.key+'&format=json&loginUin=0&hostUin=0&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&remoteplace=txt.yqq.song&t=0&aggr=1&cr=1&catZhida=1&flag_qc=0',
      success:function(res){
        console.log(res.data.data.song.list)
        that.setData({
          songlist:res.data.data.song.list
      })
      }
    })
  },

  toplay:function(e){
    console.log(e)
    wx.navigateTo({
      url: '../7-11-2/7-11-2?songmid='+e.currentTarget.dataset.songmid+'&albumid='+e.currentTarget.dataset.albumid+'&songname='+e.currentTarget.dataset.songname,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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