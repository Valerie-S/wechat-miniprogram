var plugin = requirePlugin("chatbot");

App({
  onLaunch:function(){
      if (!wx.cloud) {
        console.error('请使用 2.2.3 或以上的基础库以使用云能力')
      } else {
        wx.cloud.init({
          // env 参数说明：
          //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
          //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
          //   如不填则使用默认环境（第一个创建的环境）
          env: 'cloud1-8gz0jm224c831148',
          traceUser: true,
        })
      }
  
      this.globalData = {}

      plugin.init({
      // appid: "NMjVY8A5AXYrPAi2IQNXmkSeEvPqEt",
      appid: "P5Ot9PHJDechCYqDFAW1AiK6OtG3Ja",
      openid: "oB6jg6ENstneouhXefbujwJl7v2n", // 小程序的openid，必填项
      guideList: [
        "今天吃啥",
        "陪我聊聊"
      ],
      robotHeader: "https://static.wikia.nocookie.net/supersmashbrosfanon/images/9/9f/Claptrap.png",
      userHeader: "", // 用户头像
      userName: "", // 用户昵称
      welcome: "Hello my friend",
      anonymous: false, // 是否允许匿名用户登录，版本1.2.9后生效, 默认为false，设为ture时，未传递userName、userHeader两个字段时将弹出登录框
      success: () => {},
      fail: (error) => {},
      });   

      plugin.send({
        query: "你好",
        success: res => {
          console.log(res);
        },
        fail: error => {}
      });
    },
  
    onLoad:function(){
      this.globalData = {}
    }
  
});
