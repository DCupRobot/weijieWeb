<template>
<div class="dropdown flex-center">
  <div class="dropbtn flex-center">
    <img class="icon-normal" ref="currentImage" :src=currentImageUrl>
  </div>
  <div class="dropdown-content">
    <div class="options flex-center" @click="clickOption('baidu')">
      <img class="icon-normal" :src=baiduIcon>
    </div>
    <div class="options flex-center" @click="clickOption('bing')">
      <img class="icon-normal" :src=bingIcon>
    </div>
    <div class="options flex-center" @click="clickOption('google')">
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

<style>
.dropbtn {
  cursor: pointer;
  display: block;
}

.dropdown {
  background-color: #fff;
  opacity: 0.8;
  border: 1px solid grey;
  border-top-left-radius: 5em;
  border-bottom-left-radius: 5em;
  width:1.5em;
  height:1.5em;
  bottom: 0;
}

.dropdown-content {
  display: none;
}

.dropdown-content .options {
  cursor: pointer;
  background-color: #f9f9f9;
  opacity: 0.8;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding:2px;
  border: 1px solid black;
}
.dropdown:hover{
  display:block;
  width:1.5em;
  height:1.5em;
}
.dropdown:hover .dropbtn {
  cursor:default;
}

.dropdown:hover .dropdown-content {
  position: relative;
  top:10px;
  display: block;
  height:1em;
}
</style>
