<template>
<div class='custome_area'>
  <div v-for="(obj,index) in scs" :key=index>
    <shortcut class="sc" :disable="$store.state.searchEngine.disableShorcut" :nameWeb="obj.name" :iconUrl="obj.link"></shortcut>
  </div>
</div>
</template>

<script>
import shortcut from './shortcut';
import { mapState, mapActions } from 'vuex'
export default {
  name: 'customeWeb',
  data:()=>({
    scs:[],
  }),
  computed: mapState({
    scs: state => state.searchEngine.scs
  }),
  components: {
    shortcut
  },
  watch:{
    scs(val){
      debugger
    }
  },
  created(){
    debugger
    let scs = localStorage.getItem('shortcuts');
    if (scs!=null && scs.length>0){
      this.$store.state.searchEngine.scs = scs
    }else{
    }
    this.scs
    debugger
  },
}
</script>
<style scoped>


</style>