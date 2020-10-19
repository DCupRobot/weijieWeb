<template>
<div class="dropdown">
  <div class="dropbtn">
    <img class="icon-normal" ref="currentImage" :src=currentImageUrl>
  </div>
  <div class="dropdown-content">
    <div class="options" @click="clickOption('baidu')">
      <img class="icon-normal" :src=baiduIcon>
    </div>
    <div class="options" @click="clickOption('bing')">
      <img class="icon-normal" :src=bingIcon>
    </div>
    <div class="options" @click="clickOption('google')">
      <img class="icon-normal" :src=googleIcon>
    </div>
  </div>
</div>
</template>

<script>
import baiduIcon from "../assets/img/searchEngineIcon/baidu.png"
import bingIcon from "../assets/img/searchEngineIcon/bing.png"
import googleIcon from "../assets/img/searchEngineIcon/google.png"
export default {
  name: "drop_down",
  data: () => ({
    currentSearchEngine: 'baidu',
    currentImageUrl: baiduIcon,
    baiduIcon: baiduIcon,
    bingIcon: bingIcon,
    googleIcon: googleIcon,
  }),
  created() {

  },
  methods: {
    clickOption(searchEngine) {
      this.currentSearchEngine = searchEngine
      this.$store.state.searchEngine.currentSearchEngine = searchEngine
      let url = ''
      if (searchEngine == "baidu") {
        url = baiduIcon
      } else if (searchEngine == "bing") {
        url = bingIcon
      } else if (searchEngine == "google") {
        url = googleIcon
      }
      this.currentImageUrl = url
    }
  }
}
</script>

<style scoped>
.dropbtn {
  opacity: 0.8;
  cursor: pointer;
  display: block;
  height: 1.5em;
}

.dropdown {
  display: flex;
  background-color: #fff;
  opacity: 0.8;
  border: 1px solid grey;
  border-top-left-radius: 5em;
  border-bottom-left-radius: 5em;
  justify-content: center;
  align-items: center;
}

.dropdown-content {
  display: none;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content .options {
  cursor: pointer;
  border: 1px solid black;
}

.dropdown:hover .dropdown-content {
  display: flex;
}

.icon-normal {
  height: 1.5em;
  width: 1.5em;
}
</style>
