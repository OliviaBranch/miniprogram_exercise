// pages/7-8/7-8.js
var song

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagesrc:"",
    val:0,
    max:0,
    isplay:true,
    start:"00:00",
    end:"00:00" 
  },

  play:function(e){
    if(this.data.isplay){
      song.pause()
      this.setData({
        isplay:false
    })
    }else{
      song.play();
      this.setData({
        isplay:true
    })
    }
    },

    change:function(e){
      song.seek(e.detail.value)
      //console.log(song.currentTime)
      /*var curTime=song.currentTime
      var m1=Math.floor(curTime/60)
      if(m1<10){
        m1="0"+m1
      }
      var s1=Math.floor(curTime%60)
      if(s1<10){
        s1="0"+s1
      }
      this.setData({
        start:m1+":"+s1
      })*/
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var songMid="003jqNTL41sDBf"
    wx.request({
      url: 'https://u.y.qq.com/cgi-bin/musicu.fcg?format=json&data=%7B%22req_0%22%3A%7B%22module%22%3A%22vkey.GetVkeyServer%22%2C%22method%22%3A%22CgiGetVkey%22%2C%22param%22%3A%7B%22guid%22%3A%22358840384%22%2C%22songmid%22%3A%5B%22'+songMid+'%22%5D%2C%22songtype%22%3A%5B0%5D%2C%22uin%22%3A%221443481947%22%2C%22loginflag%22%3A1%2C%22platform%22%3A%2220%22%7D%7D%2C%22comm%22%3A%7B%22uin%22%3A%2218585073516%22%2C%22format%22%3A%22json%22%2C%22ct%22%3A24%2C%22cv%22%3A0%7D%7D',

      success:function(res){
        song=wx.createInnerAudioContext()
        song.src="http://ws.stream.qqmusic.qq.com/"+res.data.req_0.data.midurlinfo[0].purl
        song.autoplay=true
        song.onPlay(()=>{})
        song.onTimeUpdate(()=>{
          //console.log(song.currentTime)
          var curTime=song.currentTime
          var m1=Math.floor(curTime/60)
          if(m1<10){
            m1="0"+m1
          }
          var s1=Math.floor(curTime%60)
          if(s1<10){
            s1="0"+s1
          }
          var dur=song.duration
          var m2=Math.floor(dur/60)
          if(m2<10){
            m2="0"+m2
          }
          var s2=Math.floor(dur%60)
          if(s2<10){
            s2="0"+s2
          }
          that.setData({
            start:m1+":"+s1,
            end:m2+":"+s2,
            val:song.currentTime,
            max:song.duration
          })

        })
      },
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