<template>
<div>
  <div class="octus">
    <div class="cntr">
      <div class="cntr-innr">
        <label class="search" for="inpt_search" :style=searchStyle>
          <input id="inpt_search" ref="inpt_search" type="text" v-model="inputVal" @keyup.enter.native="handleSearch" :style="inputStyle" />
        </label>
      </div>
    </div>
  </div>
  <div style="display:flex;justify-content:space-around">
    <drop-down style="float: left;"></drop-down>
    <div class="button" @click="clearSearchHistory">清空记录</div>
    <div class="button" @click="clearSearchInput">清除内容</div>
  </div>
</div>
</template>

<script>
import dropDown from './drop_down.vue';
export default {
  name: "wjInput",
  data: () => ({
    inputVal: '',
    searchStyle: '',
    inputStyle: '',
  }),
  components: {
    dropDown
  },
  watch: {
    inputVal(val) {
      if (val != '') {
        this.searchStyle = "width:200px"
      }
    }
  },
  created() {},
  mounted() {
    this.$refs.inpt_search.focus();
  },
  methods: {
    handleSearch() {
      if (this.$store.state.searchEngine.currentSearchEngine == 'baidu') {
        window.open('https://www.baidu.com/s?wd=' + this.inputVal, '_blank');
      } else if (this.$store.state.searchEngine.currentSearchEngine == "bing") {
        window.open('https://cn.bing.com/search?q=' + this.inputVal, '_blank');
      } else if (this.$store.state.searchEngine.currentSearchEngine == "google") {
        window.open('https://www.google.com/search?q=' + this.inputVal, '_blank');
      }
    },
    clearSearchHistory() {
      this.$refs.inpt_search.autocomplete = "off"
    },
    clearSearchInput() {
      this.inputVal = ''
    }
  }
}
</script>

<style>

</style>
