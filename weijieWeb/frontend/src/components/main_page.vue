<template>
<div class="background" :style=" backgroundImageRandom" v-cloak>
  <input-normal></input-normal>
  <custome-web :style="hoverStyle" @click="showCustomeWeb" @mouseenter="showCustomeWeb" @mouseleave="this.hoverStyle = 'opacity:0'"></custome-web>
  <dialogue v-if="this.$store.state.searchEngine.showDialogue"></dialogue>
</div>
</template>

<script>
import inputNormal from './input_normal';
import customeWeb from './custome_web';
import dialogue from './dialogue';
const bgcUrlPc = "url(" +
  require("../assets/img/background_PC/" + Math.floor(Math.random() * 30 + 1) + ".jpg") +
  ")";
const bgcUrlMb = "url(" +
  require("../assets/img/background_MB/" + Math.floor(Math.random() * 30 + 1) + ".jpg") +
  ")";
export default {
  name: "main_page",
  data: () => ({
    backgroundImageRandom: {
      backgroundImage: bgcUrlPc,
    },
    hover: true,
    hoverStyle: 'opacity:0',
  }),
  components: {
    inputNormal,
    customeWeb,
    dialogue,
  },
  created() {
    let clientEq = this.checkClientEq();
    if (clientEq.isPc == false) {
      this.backgroundImageRandom = {
        backgroundImage: bgcUrlMb
      }
    }
  },
  methods: {
    showCustomeWeb(){
      this.hoverStyle = 'opacity:1'
      this.$store.state.searchEngine.disableShorcut = false
    },
    checkClientEq() {
      let ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet =
        /(?:iPad|PlayBook)/.test(ua) ||
        (isAndroid && !/(?:Mobile)/.test(ua)) ||
        (isFireFox && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
      return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
      };
    }
  }
};
</script>
