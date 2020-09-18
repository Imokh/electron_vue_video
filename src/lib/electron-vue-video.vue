<template>
  <div class="electronVideo">
    <div
    
      class="videoBox"
      v-show="isVideo"
      id="video_box"
      :style="{width:option.videoWidth+'px',height:option.videoHeight+'px'}"
      :data-width="option.videoWidth"
      :data-height="option.videoHeight"
      data-state="0"
    >
      <!-- 返回按钮 -->
      <transition name="fade">
        <svg
          v-show="isControlBar && option.controls && option.backBtn"
          class="close icon"
          @click="close"
          t="1600308622358"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3292"
          width="80"
          height="80"
        >
          <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" p-id="3293" />
          <path
            d="M792.9 440.4l-5.2-6.4c-30.5-37.7-73.6-59.3-118.1-59.3H522.3c-10.9 0-19.8 10.3-19.8 23s8.9 23 19.8 23h147.2c33.7 0 66.2 16.3 89.4 44.8l5.2 6.4c22.5 27.8 34.3 64.1 33.3 102.2-1.1 38.1-14.8 73.5-38.8 99.6-22.8 24.9-52.6 38.6-83.9 38.6H206.8c-10.9 0-19.8 10.3-19.8 23s8.9 23 19.8 23h467.9c41.4 0 80.8-18.1 111-51 31.7-34.5 49.9-81.2 51.2-131.7 1.4-50.4-14.3-98.5-44-135.2z"
            :fill="option.iconColor"
            p-id="3294"
          />
          <path
            d="M585.9 589.4c5 0 10.2-2.3 14-6.7 7.7-9 7.7-23.6 0-32.5L468.5 397.6 599.8 245c7.7-9 7.7-23.6 0-32.5-7.7-9-20.2-9-27.9 0L412.6 397.6l159.2 185.1c3.9 4.4 8.9 6.7 14.1 6.7z"
            :fill="option.iconColor"
            p-id="3295"
          />
        </svg>
      </transition>
      <video
        :autoplay="option.autoplay"
        :loop="option.loop"
        data-icon="0"
        :src="option.videoUrl"
        data-state="a"
        id="videoBox"
        webkit-playsinline
        playsinline
      ></video>
      <!-- 控制栏 -->
      <transition name="fade">
        <div
          class="controlBar"
          id="controlBar"
          :style="{backgroundColor: option.controlBarBgColor}"
          v-show="isControlBar && option.controls"
        >
          <!-- 播放按钮 -->
          <div class="btnPlay m">
            <div id="playState" class="left" data-icon="0" v-show="videoIsPlay">
              <svg
                t="1600227055903"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2322"
                width="64"
                height="64"
                :fill="option.iconColor"
              >
                <path
                  d="M874.058005 149.941995a510.06838 510.06838 0 1 0 109.740156 162.738976 511.396369 511.396369 0 0 0-109.740156-162.738976z m66.278708 362.178731A428.336713 428.336713 0 1 1 512 83.663287a428.698892 428.698892 0 0 1 428.336713 428.336713z"
                  p-id="2323"
                />
                <path
                  d="M417.954256 281.533601a41.046923 41.046923 0 0 0-41.77128 40.201839v385.116718a41.892007 41.892007 0 0 0 83.663287 0v-385.116718a41.167649 41.167649 0 0 0-41.892007-40.201839zM606.045744 281.533601a41.046923 41.046923 0 0 0-41.77128 40.201839v385.116718a41.892007 41.892007 0 0 0 83.663287 0v-385.116718a41.167649 41.167649 0 0 0-41.892007-40.201839z"
                  p-id="2324"
                />
              </svg>
            </div>
            <div id="playState" class="left" data-icon="0" v-show="!videoIsPlay">
              <svg
                t="1600226744435"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6676"
                width="64"
                height="64"
                :fill="option.iconColor"
              >
                <path
                  d="M511.994276 45.348032a466.772179 466.772179 0 0 1 181.632548 896.633968 466.775614 466.775614 0 0 1-363.265096-859.975448 463.6696 463.6696 0 0 1 181.632548-36.65852m0-39.623716C232.384334 5.724316 5.724316 232.407231 5.724316 511.994276s226.660018 506.26996 506.26996 506.269959 506.26996-226.660018 506.269959-506.269959S791.604217 5.724316 511.994276 5.724316z"
                  p-id="6677"
                />
                <path
                  d="M511.994276 1023.988551A512.131659 512.131659 0 0 1 312.696488 40.230493a512.133949 512.133949 0 0 1 398.595575 943.527565 508.845902 508.845902 0 0 1-199.297787 40.230493z m0-1012.539919C235.990653 11.448632 11.448632 235.990653 11.448632 511.994276s224.542021 500.545644 500.545644 500.545643 500.545644-224.542021 500.545643-500.545643S787.997898 11.448632 511.994276 11.448632z m0 972.916204A470.756303 470.756303 0 1 1 695.847858 947.259819a469.531299 469.531299 0 0 1-183.853582 37.105017z m0-933.292488a459.284774 459.284774 0 1 0 179.400065 36.177677 458.05977 458.05977 0 0 0-179.400065-36.177677z"
                  p-id="6678"
                />
                <path
                  d="M386.059323 315.352571l340.63115 196.641705-340.63115 196.641704V315.352571m-28.28957-60.368637a11.334146 11.334146 0 0 0-11.334146 11.334146V757.670472a11.334146 11.334146 0 0 0 11.334146 11.334145 11.208211 11.208211 0 0 0 5.644175-1.534116l425.557104-245.676196a11.311249 11.311249 0 0 0 0-19.600058L363.448274 256.518051a11.208211 11.208211 0 0 0-5.644175-1.534117z"
                  p-id="6679"
                />
                <path
                  d="M357.804099 774.728934a17.081359 17.081359 0 0 1-17.058462-17.058462V266.31808a17.024116 17.024116 0 0 1 25.564795-14.757287l425.522758 245.664747a17.047013 17.047013 0 0 1 0 29.526022L366.310432 772.427758a17.058462 17.058462 0 0 1-8.506333 2.301176z m0-514.043581a5.621278 5.621278 0 0 0-5.60983 5.609829v491.37529a5.621278 5.621278 0 0 0 5.60983 5.609829 5.541138 5.541138 0 0 0 2.782017-0.767058l425.522758-245.676196a5.598381 5.598381 0 0 0 0-9.685543L360.586116 261.475308a5.541138 5.541138 0 0 0-2.782017-0.767058z m22.530908 457.865143V305.438056l357.804098 206.55622z m11.448632-393.28341v373.454379l323.458202-186.727189z"
                  p-id="6680"
                />
              </svg>
            </div>
          </div>
          <p class="progressTime left m" :style="{fontSize: '22px',color: option.iconColor}">0:00</p>
          <!-- 视频进度条 -->
          <div
            class="progressBox m"
            id="progressBox_special"
            :style="{backgroundColor: option.iconColor}"
          >
            <div class="progressBar" :style="{backgroundColor: option.iconColor}"></div>
            <div class="imgBox">
              <!-- <img id="progressImg" src="static/img/椭圆 6.png" alt /> -->
              <div
                id="progressImg"
                :style="{width: '20px', height: '20px', backgroundColor: option.iconColor, borderRadius: '50%'}"
              ></div>
            </div>
          </div>
          <p class="allTime right m" :style="{fontSize: '24px',color: option.iconColor}"></p>
          <!-- 音量icon -->
          <svg
            t="1600223046082"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2783"
            width="40"
            height="40"
            :fill="option.iconColor"
          >
            <path
              d="M284.16 724.48c-5.12 0-7.68 0-12.8-2.56l-30.72-17.92H135.68c-15.36 0-25.6-10.24-25.6-25.6v-253.44c0-15.36 10.24-25.6 25.6-25.6h104.96l30.72-17.92c12.8-7.68 28.16-2.56 35.84 10.24 7.68 12.8 2.56 28.16-10.24 35.84l-35.84 20.48c-5.12 2.56-7.68 2.56-12.8 2.56H161.28v202.24h84.48c5.12 0 7.68 0 12.8 2.56l35.84 20.48c12.8 7.68 15.36 23.04 10.24 35.84-5.12 7.68-12.8 12.8-20.48 12.8z"
              p-id="2784"
            />
            <path
              d="M496.64 847.36c-5.12 0-7.68 0-12.8-2.56l-235.52-135.68 25.6-43.52 197.12 112.64V322.56l-194.56 115.2-25.6-43.52 235.52-135.68c7.68-5.12 17.92-5.12 25.6 0s12.8 12.8 12.8 23.04v542.72c0 10.24-5.12 17.92-12.8 23.04-7.68-2.56-12.8 0-15.36 0zM801.28 834.56l-35.84-35.84 17.92-17.92c128-128 128-335.36 0-463.36l-17.92-17.92 35.84-35.84 17.92 17.92c148.48 148.48 148.48 386.56 0 535.04l-17.92 17.92z"
              p-id="2785"
            />
            <path
              d="M719.36 752.64L683.52 716.8l17.92-17.92c38.4-38.4 61.44-92.16 61.44-148.48 0-56.32-23.04-107.52-61.44-148.48l-17.92-17.92 35.84-35.84 17.92 17.92c48.64 48.64 76.8 115.2 76.8 184.32s-28.16 135.68-76.8 184.32l-17.92 17.92z"
              p-id="2786"
            />
            <path
              d="M634.88 668.16l-35.84-35.84 17.92-17.92c17.92-17.92 28.16-40.96 28.16-64s-10.24-48.64-28.16-64l-17.92-17.92 35.84-35.84 17.92 17.92c28.16 28.16 40.96 64 40.96 102.4s-15.36 74.24-40.96 102.4l-17.92 12.8z"
              p-id="2787"
            />
          </svg>
          <!-- 音量进度条 -->
          <div class="voice" style="width: 135px; height: 50px; position: relative;">
            <div class="wrapBox">
              <div class="boxs">
                <div class="tab-con">
                  <span class="box" id="box-lj-sgj" :style="{backgroundColor: option.iconColor}">
                    <i class="hd" :style="{backgroundColor: option.iconColor}"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- 全屏按钮 -->
          <div v-if="isFullScreen" class="biggerBtn m" @click="fullScreen">
            <!-- <img style="max-height: 50px;" class="right" src="static/img/max.jpg" alt /> -->
            <svg
              t="1600054916955"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1561"
              width="45"
              height="45"
              :fill="option.iconColor"
            >
              <path d="M0 0h256v51.2H0z" fill p-id="1562" />
              <path d="M51.2 0v256H0V0zM1024 0v256h-51.2V0z" fill p-id="1563" />
              <path d="M1024 51.2h-256V0h256zM1024 1024h-256v-51.2h256z" fill p-id="1564" />
              <path d="M972.8 1024v-256h51.2v256zM0 1024v-256h51.2v256z" fill p-id="1565" />
              <path d="M0 972.8h256v51.2H0z" fill p-id="1566" />
            </svg>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div
          class="currentVolume"
          :style="{fontSize: '30px',color: '#fff'}"
          v-if="volume"
        >当前音量: {{currentVolume}}</div>
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  name: "electronVideo",
  props: {
    option: {
      type: Object,
      required: false,
      default: function () {
        return {
          iconColor: "#7f7266",
          controlBarBgColor: "#fff4ef",
          videoWidth: 700,
          videoHeight: 700,
          videoUrl: "static/videos/1.mp4",
          //返回键按钮
          backBtn: true,
          //是否启用控制条,自动播放，循环播放
          controls: true,
          autoplay: false,
          loop: false,
        };
      },
    },
  },
  data() {
    return {
      //关闭视频（移除dom）
      isVideo: true,
      //是否启用全屏功能
      isFullScreen: true,
      //是否开启控制条
      openControlBar: true,
      //视频盒宽高
      videoBoxWidth: 700,
      videoBoxHeight: 700,
      //音量颜色
      volumeColor: "",
      //控制条背景颜色
      controlBarBgColor: "",
      //当前进度条背景颜色
      progressBarBgColor: "#7f7266",
      //进度条背景色
      progressBoxBgColor: "#7f7266",
      //视频路径
      videoUrl: "static/videos/1.mp4",

      isControlBar: true,
      currentVolume: "100%",
      volume: false,

      ControlBarState: true,
      timeId: null,

      //视频是否在播放
      videoIsPlay: false,
    };
  },
  computed: {},
  created() {},
  mounted() {
    let that = this;
    let volumeTimeId1;
    var video1 = document.getElementById("videoBox");
    this.initVideo();
    slider("box-lj-sgj");
    function slider(obj, num) {
      var box = document.getElementById(obj);
      var hd = box.children[0];
      var hdt = box.children[1];

      console.log(hd);
      //鼠标按下事件  只要鼠标按下时是在hd上触发就可以
      hd.addEventListener(
        "touchstart",
        (event) => {
          event.stopPropagation(); //阻止默认行为
          var event = event.changedTouches[0];

          hd.addEventListener("touchmove", (event) => {
            console.log(
              document.querySelector(".voice").getBoundingClientRect().left
            );
            let voice = document.querySelector(".voice").getBoundingClientRect()
              .left;
            event.stopPropagation(); //阻止默认行为
            var event = event.changedTouches[0];

            hd.style.left =
              event.clientX -
              document.querySelector(".tab-con").offsetLeft -
              voice +
              -110 +
              -25 +
              "px";
            console.log(hd.style.left);
            var far = parseInt(hd.style.left);
            let maxHeight = box.offsetWidth - hd.offsetWidth;

            //   //临界值判断
            if (far < 0) {
              hd.style.left = 0;
              far = 0;
            } else if (far > maxHeight) {
              hd.style.left = maxHeight + "px";
              far = maxHeight;
            }

            video1.volume = far / maxHeight;
            if (video1.volume >= 0.99) {
              video1.volume = 1;
              that.currentVolume = "100%";
            } else {
              video1.volume = video1.volume;
              that.currentVolume =
                parseInt(video1.volume.toFixed(2) * 100) + "%";
            }

            clearTimeout(volumeTimeId1);
            that.volume = true;
            volumeTimeId1 = setTimeout(() => {
              that.volume = false;
            }, 800);
          });
          //当鼠标弹起时清除滑动时运行的函数，因为滑动结束时鼠标可能不在hd上，所以用document监听弹起事件
          document.touchend = function () {
            document.touchmove = null;
          };
        },
        false
      );
    }
  },
  watch: {
    'videoIsPlay'(newData,oldData) {
      console.log(this.videoIsPlay);
      if(this.videoIsPlay) {
        if (this.ControlBarState) {
                this.timeId = setTimeout(() => {
                  this.isControlBar = !this.isControlBar;
                  this.ControlBarState = false;
                }, 2000);
              } else {
                this.ControlBarState = true;
                this.isControlBar = !this.isControlBar;
                this.timeId = setTimeout(() => {
                  this.isControlBar = !this.isControlBar;
                  this.ControlBarState = false;
                }, 2000);
              }
      }
    }
  },
  methods: {
    playCustomVideo() {
      this.isVideo = true;
      document.getElementById("videoBox").play();
    },
    fullScreen() {
      //视频盒子
      let v_b = document.getElementById("video_box");

      //点击全屏
      let max_h = document.documentElement.clientHeight;
      let max_w = document.documentElement.clientWidth;

      //原本设置的宽高
      let set_w = v_b.getAttribute("data-width");
      let set_h = v_b.getAttribute("data-height");

      //获取视频盒子的状态（全屏或设置的大小）
      let state = v_b.getAttribute("data-state");
      if (state == 0) {
        v_b.setAttribute("data-state", 1);
        v_b.style.width = max_w + "px";
        v_b.style.height = max_h + "px";
      } else {
        v_b.setAttribute("data-state", 0);
        v_b.style.width = set_w + "px";
        v_b.style.height = set_h + "px";
      }
    },
    close() {
      this.isVideo = false;
      document.getElementById("videoBox").load();
      document.querySelector(".progressBar").style.width = 0 + "%";
      document.querySelector(".imgBox").style.marginLeft = 0 + "%";
    },
    initVideo() {
      if (this.isVideo) {
        let that = this;
        //控制条定时器Id
        // let timeId = null;
        //控制条存在状态
        // let ControlBarState = true;
        //音量显示定时器Id
        let volumeTimeId = null;
        //记录视频盒子开始点击的位置
        let videoStartX, videoStartY;

        //记录每一次移动结束的位置,以及滑动方向开始位置
        let videoMPX, videoMPY, swipeX, swipeY;

        //监听视频盒子点击事件
        document.getElementById("video_box").addEventListener(
          "touchstart",
          function (e) {
            // console.log(e);
            //每次点击清空点击位置
            videoStartX = null;
            videoMPX = null;
            videoStartY = null;
            videoMPY = null;
            swipeX = true;
            swipeY = true;
            let x = e.changedTouches[0].pageX;
            let y = e.changedTouches[0].pageY;
            videoStartX = x;
            videoStartY = y;
            // console.log(x, y);
            clearTimeout(that.timeId);
            
            if (that.videoIsPlay) {
              if (that.ControlBarState) {
                that.timeId = setTimeout(() => {
                  that.isControlBar = !that.isControlBar;
                  that.ControlBarState = false;
                }, 2000);
              } else {
                that.ControlBarState = true;
                that.isControlBar = !that.isControlBar;
                that.timeId = setTimeout(() => {
                  that.isControlBar = !that.isControlBar;
                  that.ControlBarState = false;
                }, 2000);
              }
            }
          },
          true
        );

        var video = document.getElementById("videoBox");

        //监听视频盒子move事件
        document.getElementById("video_box").addEventListener(
          "touchmove",
          function (e) {
            let x = e.changedTouches[0].pageX;
            let y = e.changedTouches[0].pageY;

            if (
              swipeX &&
              Math.abs(x - videoStartX) - Math.abs(y - videoStartY) > 0
            ) {
              // 阻止事件冒泡
              // event.stopPropagation();
              // if (x - videoStartX > 10) {
              //   //右滑
              //   event.preventDefault();
              //   console.log('左滑');
              // }
              // if (videoStartX - x > 10) {
              //   //左滑
              //   event.preventDefault();
              //   console.log('右滑');
              // }

              if (videoMPX > x) {
                //右滑后又左滑了
                console.log("后撤");
                video.currentTime = video.currentTime - 0.3;
                //起点重新赋值
                videoStartX = x;
              }

              videoMPX = x;

              //右滑
              if (x > videoStartX) {
                console.log("快进");
                video.currentTime = video.currentTime + 0.3;
              }

              swipeY = false;
            }

            // 上下滑动
            if (
              swipeY &&
              Math.abs(x - videoStartX) - Math.abs(y - videoStartY) < 0
            ) {
              swipeX = false;
              if (videoMPY > y) {
                console.log("音量加");
                if (video.volume >= 0.99) {
                  video.volume = 1;
                  that.currentVolume = "100%";
                } else {
                  video.volume = video.volume + 0.01;
                  that.currentVolume =
                    parseInt(video.volume.toFixed(2) * 100) + "%";
                }

                //起点重新赋值
                videoStartY = y;
              }

              videoMPY = y;

              if (y > videoStartY) {
                console.log("音量减");
                if (video.volume <= 0.01) {
                  video.volume = 0;
                  that.currentVolume = "0%";
                } else {
                  video.volume = video.volume - 0.01;
                  that.currentVolume =
                    parseInt(video.volume.toFixed(2) * 100) + "%";
                }
              }

              var box = document.getElementById("box-lj-sgj");
              var hd = box.children[0];
              let maxHeight = box.offsetWidth - hd.offsetWidth;
              hd.style.left = video.volume * maxHeight + "px";

              clearTimeout(volumeTimeId);
              that.volume = true;
              volumeTimeId = setTimeout(() => {
                that.volume = false;
              }, 800);
            }
          },
          false
        );

        //分割时间函数
        function timeStamp(second_time) {
          let time1 = (parseInt(second_time) / 100).toString();
          let time2 = time1.split(".")[1]
            ? time1.split(".")[1].length == 1
              ? time1.split(".")[1] + "0"
              : time1.split(".")[1]
            : "00";
          let time = "00" + ":" + time2;
          if (parseInt(second_time) >= 60) {
            let second = ((parseInt(second_time) % 60) / 100).toString();
            let min = (parseInt(second_time / 60) / 100).toString();
            let time3 = second.split(".")[1]
              ? second.split(".")[1].length == 1
                ? second.split(".")[1] + "0"
                : second.split(".")[1]
              : "00";
            let time4 = min.split(".")[1]
              ? min.split(".")[1].length == 1
                ? min.split(".")[1] + "0"
                : min.split(".")[1]
              : "00";
            time = time4 + ":" + time3;
          }
          return time;
        }

        video.load(); //一开始进入页面video不是白屏
        //视频总时间
        video.addEventListener("loadedmetadata", function () {
          var time = video.duration;
          var allTime = timeStamp(time);
          document.querySelector(".allTime").innerHTML = allTime;
        });
        //视频进度时间
        video.addEventListener("timeupdate", function () {
          var time = video.currentTime,
            alltime = video.duration;
          var percentage = 100 * (time / alltime);
          document.querySelector(".progressTime").innerHTML = timeStamp(time);

          document.querySelector(".progressBar").style.width = percentage + "%";

          document.querySelector(".imgBox").style.marginLeft = percentage + "%";
        });

        //视频播放结束
        video.addEventListener(
          "ended",
          function (e) {
            clearTimeout(that.timeId);
            that.isControlBar = true;
            that.ControlBarState = true;

            that.$emit("ended", e);
          },
          false
        );
        let timeId5 = null;
        video.addEventListener("playing", function (e) {
          //播放中
          console.log("播放中");
          that.videoIsPlay = true;

          that.$emit("played", e);
        });
        video.addEventListener("pause", function (e) {
          //暂停开始执行的函数
          console.log("暂停播放");
          that.videoIsPlay = false;

          that.$emit("pauseed", e);
        });

        document
          .querySelector(".btnPlay")
          .addEventListener("click", function (e) {
            if (video.paused) {
              video.play();
            } else {
              video.pause();
              clearTimeout(that.timeId);
              that.isControlBar = true;
              that.ControlBarState = true;
            }
            return false;
          });

        //拖拉函数
        function changeBar(item) {
          var progress = document
            .querySelector(".progressBox")
            .getBoundingClientRect();
          var maxduration = video.duration; //视频总时间
          var barIcon = 0,
            position,
            percentage;
          if (barIcon == 0) {
            position = item - progress.left; //横屏模式
          } else {
            position = item - progress.top; //全屏竖屏模式
          }

          percentage = 100 * (position / progress.width);
          if (percentage > 100) {
            percentage = 100;
            return;
          }
          if (percentage < 0) {
            percentage = 0;
          }

          document.querySelector(".progressBar").style.width = percentage + "%";
          document.querySelector(".imgBox").style.marginLeft = percentage + "%";

          video.currentTime = maxduration * (percentage / 100); //视频进度时间传给当前时间
          // video.play();
        }
        //视频拖拉按钮事件
        var progressBox = document.getElementById("progressBox_special");
        progressBox.addEventListener("touchstart", progressBox_item, false);
        function progressBox_item(e) {
          var barIcon = 0;
          var point = fristPoint(e);
          if (barIcon == 0) {
            changeBar(point.pageX);
          } else {
            changeBar(point.pageY);
          }
        }
        //拖拉按钮
        var statePic = document.getElementById("progressImg");
        statePic.addEventListener("touchmove", itemMove, false); //发现h5的touchmove行为要通过addEventListener注册
        function itemMove(e) {
          clearTimeout(that.timeId);
          e.stopPropagation(); //阻止默认行为
          var barIcon = 0;
          var point = fristPoint(e);
          if (barIcon == 0) {
            changeBar(point.pageX); //横屏
          } else {
            changeBar(point.pageY); //全屏竖屏
          }
        }

        statePic.addEventListener(
          "touchend",
          function () {
            if(!that.videoIsPlay) return
            that.timeId = setTimeout(() => {
              that.isControlBar = !that.isControlBar;
              that.ControlBarState = false;
            }, 2000);
          },
          false
        );
        //第一个手指为准
        function fristPoint(e) {
          return e.touches ? e.touches[0] : e;
        }

        //监听控制条
        document
          .getElementById("controlBar")
          .addEventListener("touchmove", function (event) {
            event.stopPropagation(); //阻止默认行为
          });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.electronVideo {
  .triangle {
    width: 50px;
    height: 50px;
    border: 1px solid #7f7266;
    border-radius: 50%;
  }

  .videoBox {
    position: relative;
    background-color: black;
    .close {
      position: absolute;
      top: 40px;
      right: 30px;
      z-index: 100;
    }
    video {
      width: 100%;
      height: 100%;
    }
  }
  .controlBar {
    position: absolute;
    width: 100%;
    // height: 80px;
    bottom: 0;
    left: 0;
    background-color: #fff4ef;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    // transition: all 1.5s linear;
    .m {
      margin: 8px;
    }
    .progressBox {
      // width: 300px;
      flex: 1;
      position: relative;
      height: 8px;
      background-color: #7f7266;
      border-radius: 3px;
    }
    .progressBar {
      height: 8px;
      background-color: #7f7266;
      border-radius: 3px;
    }
    .imgBox {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -10px;
      height: 18px;
    }
  }

  .currentVolume {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: red;
    z-index: 1000;
    font-size: 30px;
  }

  * {
    margin: 0;
    padding: 0;
  }
  /* 去掉全屏时显示的自带控制条 */
  video::-webkit-media-controls {
    display: none !important;
  }

  .wrapBox {
    width: 135px;
    height: 25px;
    position: absolute;
    // top: 374px;
    // right: 139px;
    top: 50%;
    left: 0;
    transform: translateY(-57%);
    z-index: 1000000000000;
    overflow: hidden;
    animation: runhHight1 0.7s 0.5s linear forwards;
  }
  .boxs {
    position: absolute;
    top: 0;
    right: 0px;
  }

  .tab-con {
    position: absolute;
    top: 0px;
    right: 16px;
    z-index: 1000000;
    // transform: translateX(50%);
  }
  .tab-con .box,
  .tab-con .box .hd {
    display: inline-block;
    *display: inline;
    zoom: 1;
  }
  .tab-con .box {
    width: 110px;
    height: 4px;
    background-color: #7f7266;
    position: relative;
    vertical-align: middle;
    border-radius: 2px;
  }
  .tab-con .box .hd {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    // background: url("../../../static/images/index/滑块.png") no-repeat;
    background-color: #7f7266;
    position: absolute;
    left: 85px;
    top: 50%;
    transform: translateY(-50%);
    // margin-left: 2px;
  }
}
</style>
