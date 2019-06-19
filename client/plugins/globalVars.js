import Vue from "vue";

const hours = new Date().getHours(),
  isDayTime = hours > 6 && hours < 20;

Vue.prototype.$darkmode = isDayTime;
Vue.prototype.$isMobile = /Mobi/.test(navigator.userAgent);
