<template>
<div class="border_web_icon">
  <div class='web_icon' @click="handleClick(disable)" >
    <div class="addShortcytIcon" :style=style>
    </div>
    <p class="not-select">{{nameWeb}}</p>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'shortcut',
  props: ['disable','nameWeb','iconUrl'],
  component: {},
  data: ()=>({
    style:'',
  }),
  computed: mapState({
  }),

  mounted(){
    debugger
    if (this.iconUrl.indexOf('www')){
      this.style = {'-webkit-mask-image':this.iconUrl}
    }else{
      this.style = {'-webkit-mask-image':'require(\''+this.iconUrl+'\')'}
    }
  },
  methods:{
    handleClick(disable){
      if(disable===false){
        this.$store.state.searchEngine.showDialogue=true;
      }
    },
    changeIcon(){
      iconStyle = "-webkit-mask-image: url('"+ this.$store.state.searchEngine.defaultIconUrl +"')"
    },
    changeName(){
      iconStyle = "-webkit-mask-image: url('"+ this.$store.state.searchEngine.defaultIconUrl +"')"
    }
  }
}
</script>

<style>
</style>
