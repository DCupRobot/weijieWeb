<template>
<div>
  <div class="input-normal">
    <slot>
      <drop-down></drop-down>
    </slot>
    <input class="input-search" ref="inpt_search" type="text" v-model="inputVal" @keyup.enter.native="handleSearch" :style="clearableStyle" />
    <span class="clearable">
      <span class="cross not-select" @click="clearSearchInput" :style="crossStyle"> x </span>
    </span>
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
    clearableStyle:'',
    crossStyle:'',
  }),
  components: {
    dropDown
  },
  watch: {
    inputVal(val) {
      if (val != '') {
        this.crossStyle = "display:inline-block;"
      }else{
        this.crossStyle = "display:none;"
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
    clearSearchInput() {
      this.inputVal = ''
    },
  }
}
</script>

<style lang="scss">
.clearable {
  color:#bebede;
  padding-right:5px;
  border: 1px solid grey;
  border-left:0;
  outline: 0;
  background-color: white;
  cursor: pointer;
}
.cross{
/* Firefox */
  display:none;
	-moz-transition: all 1s ease;
	/* WebKit */
	-webkit-transition: all 1s ease;
	/* Opera */
	-o-transition: all 1s ease;
	/* Standard */
  transition: all 1s ease;
  
}
.cross:hover{
  color:#bebede8f;
  transform: rotate(360deg);
}

.input-normal {
  display: flex;
  justify-content: center;
  animation: 3s slidein;
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
.search-icon:hover{
  font-size: 20px;
}

.input-search {
  font-size: xx-large;
  -webkit-appearance: none;
  border-radius: 0;
  border:1px solid grey;
  border-right:0;
}

@media screen and(max-width:600px){
  .input-search{
    width:260px;
    padding:4px;
  }  
}
.input-search:focus,
.input-search:focus~.clearable
{
  box-shadow: 15px 0 15px 5px #b0e0ee;
  border: 2px solid #bebede;
  outline:none;
}
.input-search:focus{
  border-right:0;
}
.input-search:focus~.clearable{
  border-left:0;
}
@keyframes slidein {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
</style>
