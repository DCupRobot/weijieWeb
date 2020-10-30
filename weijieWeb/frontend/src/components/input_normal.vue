<template>
<div>
  <div class="input-normal flex-center">
    <div class="left  flex-center">
      <slot name="left">
        <dropDown>
        </dropDown>
      </slot>
    </div>
    <div class="middle  flex-center col-3">
      <slot name="middle">
          <input class="input-search effect-2" type="text" autocomplete="false" v-model.trim="inputVal" @keyup.enter="handleSearch"/>
          <span class="focus-border"></span>
          <span class="clearable">
            <span class="cross not-select" @click="clearSearchInput" :style="crossStyle"> x </span>
          </span>
      </slot>
    </div>
    <div class="right  flex-center">
      <slot name="right">
        <div class="flex-center search" @click="handleSearch">
          <img class="icon-normal" src="../assets/img/searchEngineIcon/search.png">
        </div>
      </slot>
    </div>



<!--
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
-->
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
    //this.$refs.inpt_search.focus();
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

<style lang="scss" scoped>
.input-normal {
  font-size: 32px;
  padding:6px;  //animation: 3s slidein;
}
.left,.middle,.right{
  height: 1.5em;
}
.left,.right{
  width:10%;  
}
.middle{
  width:80%;
}
.left{
  background-color: #FFCCCC;
  border-top-left-radius: 5em;
  border-bottom-left-radius: 5em;
}
.middle{
  background-color: #CCCCFF;
}
.right{
  background-color: #CCFFCC;
  border-bottom-right-radius: 5em;
  border-top-right-radius: 5em;
}

.search{
  cursor:pointer;
}

.input-search{
  height:100%;
  width:100%;
  outline:none;
  border:0;
  margin:0;
  padding:0;
}
:focus{outline: none;}

.col-3{
  position: relative;
} /* necessary to give position: relative to parent. */

.effect-2 ~ .focus-border{
  position: absolute; 
  bottom: 0; 
  left: 50%; 
  width: 0; 
  height: 2px; 
  background-color: #3399FF; 
  transition: 0.4s;
}
.effect-2:focus ~ .focus-border{
  width: 100%; 
  transition: 0.4s; 
  left: 0;
}


.clearable {
  color:black;
  height:100%;
  border: 1px solid grey;
  border-left:0;
  outline: 0;
  background-color: rgba(255,255,255,.25);
}
.cross{
  display:none;
	-moz-transition: all 1s ease;
	-webkit-transition: all 1s ease;
	-o-transition: all 1s ease;
  transition: all 1s ease;
  cursor:pointer;
}
.cross:hover{
  color:#bebede11;
  transform: rotate(360deg);
}

.input-search {
  font-size: xx-large;
  -webkit-appearance: none;
  border-radius: 0;
  border:1px solid grey;
  border-right:0;
  text-align:center;
  margin:0;
  background-color: rgba(255,255,255,.25);
}
.input-search:focus,
.input-search:focus~.clearable
{
  box-shadow: 0 0 15px 5px #b0e0ee;
  border: 2px solid #bebede;
  outline:none;
}
.input-search:focus{
  border-right:0;
  background-color: rgba(255,255,255,.6);
}
.input-search:focus~.clearable{
  border-left:0;
  background: opacity($color: #000000);
  background-color: rgba(255,255,255,.6);
}
@keyframes slidein {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

</style>
