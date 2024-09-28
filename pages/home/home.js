// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 一般来说，数据都是从服务器获取来的
    swiperList:[],
    currentIndex:0,
  },
  change(e){
    // console.log(e.detail.current);
    this.setData({
      currentIndex:e.detail.current
    })
  },
  //渲染完成
  // onReady(){
    // 加载完成
  onload(){
    var _this = this;
    // 在当前页面渲染完成后自动执行
    // 在这里可以直接发请求
    wx.request({
      // 后端开发人员会写一个数据接口，然后以文档形式发送过来
      url: 'url',
      success(res){
        // console.log(res);
        _this.setData({
          swiperList:res.data
        })
      },
      fail(err){
        console.log(err);
      }
    })
  }
})

// 内容：

// 1.首页：故事+新品
// 要求：
// a.数据要动态
// b.把所有图片都放在服务器，小程序目录下只能有icon

// 2.菜单（除了滚动效果不用做，其他都要）
// 要求：
// a.数据动态化
// b.

// 3.新品（除了购买和购物车之外，其他要先完成）

// 4.小二（全完成）
