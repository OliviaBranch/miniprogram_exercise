// pages/1/1.js
var song

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagesrc:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180604%2F6e5588edac7a46a0b4fd210fed01fd67.png&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614729842&t=210f353e3247b6a492539c3af6994100",
    songsrc:"http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_4395125&response=res&type=convert_url&",
    isplay:false
  },


  play:function(){
    song.play();
    this.setData({
      isplay:true
    })
  },

  pause:function(){
    song.pause();
    this.setData({
      isplay:false
    })
  },

  seek30:function(){
    song.seek(30);
    this.setData({
      isplay:true
    })
  },

  seek0:function(){
    song.seek(0);    
    this.setData({
    isplay:true
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    song=wx.createInnerAudioContext(),
    song.src=this.data.songsrc
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