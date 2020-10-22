<template>
<div class='custome_area'>
  <shortcut class="sc" :disable="$store.state.searchEngine.disableShorcut"></shortcut>
  <shortcut class="sc"></shortcut>
  <shortcut class="sc"></shortcut>
  <shortcut class="sc"></shortcut>
  <shortcut class="sc"></shortcut>
  <shortcut class="sc"></shortcut>
  <shortcut class="sc"></shortcut>
  <shortcut class="sc"></shortcut>
  <shortcut class="sc"></shortcut>
  <shortcut class="sc"></shortcut>
  <shortcut class="sc"></shortcut>
</div>
</template>

<script>
import shortcut from './shortcut';
export default {
  name: 'customeWeb',
  data:()=>({
    
  }),
  computed:{
    disable(){
    }
  },
  components: {
    shortcut
  }
}
</script>
<style scoped>


</style>