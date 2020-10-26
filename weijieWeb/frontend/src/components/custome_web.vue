<template>
<div class='custome_area'>
  <div v-for="(obj,index) in scs" :key=index>
    <shortcut class="sc" :disable="$store.state.searchEngine.disableShorcut" :nameWeb="obj.nameSC" :iconUrl="obj.iconUrlSC"></shortcut>
  </div>
</div>
</template>

<script>
import shortcut from './shortcut';
export default {
  name: 'customeWeb',
  data:()=>({
    scs:[],
  }),
  computed:{
    disable(){
    }
  },
  components: {
    shortcut
  },
  created(){
    let scs = localStorage.getItem('shortcuts');
    if (scs!=null && scs.length>0){
      this.scs = scs
      debugger
    }else{
      this.scs = this.$store.state.searchEngine.scs
    }
    debugger
  },
}
</script>
<style scoped>


</style>