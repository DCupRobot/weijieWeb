<template>
  <div class="background" :style="backgroundImageRandom">
  </div>
</template>

<script>
export default {
  
  name: 'main_page',
  data: () => ({
    backgroundImageRandom: {
      backgroundImage: 'url(' + require('../assets/img/background/' + Math.floor(Math.random() * 30 + 1) + '.jpg') + ')',
    },
  }),
  methods: {
    toggleModalState() {
      this.modalOpen = !this.modalOpen;
    },
  },
};
</script>
<style scoped>

</style>
