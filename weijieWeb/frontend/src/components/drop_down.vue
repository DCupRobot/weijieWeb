<template>
<div class="dropdown">
  <div class="dropbtn">
    <img ref="currentImage" :src=currentImageUrl>
  </div>
  <div class="dropdown-content">
    <div class="options" @click="clickOption('baidu')">
      <img :src=baiduIcon>
    </div>
    <div class="options" @click="clickOption('bing')">
      <img :src=bingIcon>
    </div>
    <div class="options" @click="clickOption('google')">
      <img :src=googleIcon>
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
  color: white;
  border: none;
  cursor: pointer;
  display: inline-block;
}

.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 25px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content .options {
  cursor: pointer;
  border: 1px solid black;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
