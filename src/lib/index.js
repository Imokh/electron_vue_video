
import electronVueVideo from './electron-vue-video.vue';

/* istanbul ignore next */
electronVueVideo.install = function(Vue) {
  Vue.component(electronVueVideo.name, electronVueVideo);
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(electronVueVideo);
}



export default electronVueVideo;

