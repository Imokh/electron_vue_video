# electron-vue-video

> 适用于electron-vue桌面开发Video组件,支持一件换肤。

## 安装

``` bash
# install dependencies
npm install electron-vue-video
或
yarn add electron-vue-video
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

#### 具体使用

```
 <electronVideo @ended="videoEnd" @played="videoPlay" @pauseed="videoPause" :option="options" class="video" ref="electronVideo"></electronVideo>
```

```
 import electronVideo from "electron-vue-video";  //导入组件
 export default {
  name: "electronVideo",
  components: {
    electronVideo,
  },
  data() {
    return {
      options: { 
        iconColor: "blue",                                //控制栏所有内容颜色
        controlBarBgColor: "#fff4ef",                     //控制栏背景色
        videoWidth: 700,                                  //视频宽度
        videoHeight: 700,                                 //视频高度
        videoUrl: "static/videos/1.mp4",                  //视频路径
        //返回键按钮
        backBtn: true,                                   //是否启用返回按钮
        //是否启用控制条,自动播放，循环播放
        controls: true,
        autoplay: false,
        loop: false,
      },
    };
  },
  methods: {
    videoEnd(e) {
      console.log(e); //视频播放结束触发
    },
    videoPlay(e) {
      console.log(e); //视频播放触发
    },
    videoPause(e) {
      console.log(e); //视频暂停触发
    }
  },
};
```

