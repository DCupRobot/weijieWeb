<template>
<div class="background" :style=" backgroundImageRandom">
  <wj-input></wj-input>
  <custome-web></custome-web>
</div>
</template>

<script>
import wjInput from './wj_input';
import customeWeb from './custome_web';
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
    }
  }),
  components: {
    wjInput,
    customeWeb,
  },
  created() {
    let clientEq = this.checkClientEq();
    if (clientEq.isPc == false) {
      this.backgroundImageRandom = {
        backgroundImage: bgcUrlMb
      }
    }
    this.$store.commit('increment')
    console.log(this.$store.state.count) // -> 1
  },
  methods: {
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
      console.log({
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
      });
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
