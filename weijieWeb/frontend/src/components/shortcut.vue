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
export default {
  name: 'shortcut',
  props: ['disable',],
  component: {},
  data: ()=>({
    nameWeb: '添加链接',
    iconUrl: '../img/searchEngineIcon/add.svg',
  }),
  methods:{
    handleClick(disable){
      if(disable===false){
        console.log('something')
      }
    }
  }
}
</script>

<style>
</style>
