<template>
<div>
  <div class="input-normal">
    <slot>
      <dropDown></dropDown>
    </slot>
    <input class="input-search" ref="inpt_search" type="text" v-model="inputVal" @keyup.enter.native="handleSearch" :style="inputStyle" style="border: 0;outline: 0;" />
    <span class="clearable">X</span>
    <slot>
      <span class="not-select search-icon" @click="handleSearch">🔍</span>
    </slot>

  </div>
</div>
</template>

<script>
import dropDown from './drop_down.vue';
export default {
  name: "inputNormal",
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
  }
}
</script>

<style lang="scss">
.clearable {
  border: 0;
  outline: 0;
  background-color: white;
  cursor: pointer;
  transform: rotate(360deg);
}

.input-normal {
  display: flex;
  justify-content: center;
}

.search-icon {
  background-color: #fff;
  opacity: 0.8;
  border: 1px solid grey;
  border-top-right-radius: 5em;
  border-bottom-right-radius: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.input-search {
  font-size: xx-large;
  border-top: 1px solid black;
  box-sizing: border-box;
}

.input-search:focus {
  box-shadow: 0 0 15px 5px #b0e0ee;
  border: 2px solid #bebede;
}
</style>
