<template>
<div class="background flex-center" :style=" backgroundImageRandom" v-cloak>
  <input-normal class="search-bar"></input-normal>
  <custome-web :style="hoverStyle" @click="showCustomeWeb" @mouseenter="showCustomeWeb" @mouseleave="this.hoverStyle = 'opacity:1'"></custome-web>
  <dialogue v-if="this.$store.state.searchEngine.showDialogue" style="z-index:100">
    <!--<template v-slot:buttons>
      <button class="button-glow button-border button-rounded button-primary" @click="handleConfirm">确认</button>
      <button class="button-glow button-border button-rounded button-primary" @click="handleCancel">取消</button>
    </template>-->
  </dialogue>
  
  <div class="version">
    <div class="version_info">
      <a class="version_href">@2020 weijie</a>
      <a class="version_href" @click="this.$router.push('./certificate')">工信部备案号： 沪ICP备 20023138号-1</a>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import inputNormal from './input_normal';
import customeWeb from './custome_web';
import dialogue from './dialogue';
import { bgcUrlPc, bgcUrlMb } from '../api/searchEngineApi';

export default {
  name: "main_page",
  data: () => ({
    backgroundImageRandom: {
      backgroundImage: bgcUrlPc,
    },
    hover: true,
    hoverStyle: 'opacity:0',
  }),
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },

  components: {
    inputNormal,
    customeWeb,
    dialogue
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
    // handleConfirm(){
    //   this.$store.dispatch('searchEngine/changeNameSC', this.name)
    //   this.$store.dispatch('searchEngine/changeIconUrl', iconUrl)
    //   this.$store.state.searchEngine.showDialogue=false
    // },
    // handleCancel(){
    //   this.$store.state.searchEngine.showDialogue=false
    // },

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
<style scoped>
.version_href{
  cursor: pointer;
  user-select: none;
  margin-left:20px;
}
.record_number{
}
.version_info{
  position: absolute;
  right:0;
}
.version{
  position: fixed;
  right:0;
  height: 20px;
  width:100%;
  background-color: #CCCCCC;
  bottom: 0;  
  color: grey;
  display:flex;
  justify-items:right;
  align-items: center;
}
</style>