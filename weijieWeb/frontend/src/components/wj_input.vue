<template>
<div>
  <drop-down style="float: left;"></drop-down>
  <div class="octus">
    <div class="cntr">
      <div class="cntr-innr">
        <label class="search" for="inpt_search" :style=searchStyle>
          <input id="inpt_search" type="text" v-model="inputVal" @keyup.enter.native="handleSearch" />
        </label>
      </div>
    </div>
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
  created() {

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
  }
}
</script>

<style>

</style>
