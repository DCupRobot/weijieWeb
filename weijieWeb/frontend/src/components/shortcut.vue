<template>
<div class="border_web_icon">
  <div class='web_icon' @click="handleClick(disable)" >
    <div class="addShortcytIcon">
    </div>
    <p class="not-select">{{nameWeb}}</p>
  </div>
</div>
</template>

<script>
let defaultNameWeb = '添加链接'
let defaultIconUrl = '../img/searchEngineIcon/add.svg'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'shortcut',
  props: ['disable',],
  component: {},
  data: ()=>({
    iconUrl: defaultIconUrl,
  }),
  computed: mapState({
    nameWeb: state => state.searchEngine.defaultNameWeb
  }),

  mounted(){
    this.iconUrl = this.$store.state.searchEngine.defaultIconUrl
  },
  methods:{
    handleClick(disable){
      if(disable===false){
        console.log('something')
        this.$store.state.searchEngine.showDialogue=true;
      }
    }
  }
}
</script>

<style>
</style>
