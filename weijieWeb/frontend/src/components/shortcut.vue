<template>
<div class="border_web_icon">
  <div class='web_icon'>
    <div class="addShortcytIcon">
    </div>
    <p class="not-select">{{nameWeb}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'shortcut',
  component: {},
  data: ()=>({
    nameWeb: '添加链接',
    iconUrl: '../img/searchEngineIcon/add.svg',
  }),
}
</script>

<style>
</style>
