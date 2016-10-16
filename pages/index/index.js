Page({
  data:{
      number:null
  },
  input:function(event){
      this.setData({number:event.detail.value})
  },
  getExpressInfo:function(number,callback){
      wx.request({
        url: 'http://v.juhe.cn/exp/index',
        data: {
            com:'zto',
            no: number,
            dtype:'json',
            key:'b866adbb9b27d00ac3da2b0bce4545d9'
        },
        success: function(res) {
            callback(res.data)
        }
    })
  },
  queryExpressInfo:function(){
      var thispage = this
      thispage.getExpressInfo(this.data.number,function(expressInfo){
          //console.log(expressInfo)
          thispage.setData({
              expressInfo:expressInfo.result
          })
      })
  }
})