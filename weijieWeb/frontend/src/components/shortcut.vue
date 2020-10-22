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
export default {
  name: 'shortcut',
  props: ['disable',],
  component: {},
  data: ()=>({
    nameWeb: defaultNameWeb,
    iconUrl: defaultIconUrl,
  }),
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
