<template>
<div class="border_web_icon">
  <div class='web_icon' @click="handleClick(ifDefaultIcon,disable)">
    <div class="addShortcytIcon" v-if="ifDefaultIcon">
    </div>
    <img v-if="!ifDefaultIcon" class="product_image" :src="iconUrl">
    <p class="not-select">{{nameWeb}}</p>
  </div>
</div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'
import {
  defaultIconUrl
} from '../api/searchEngineApi'
export default {
  name: 'shortcut',
  props: ['disable', 'nameWeb', 'iconUrl'],
  component: {},
  data: () => ({}),
  computed: {
    ifDefaultIcon() {
      if (this.iconUrl != defaultIconUrl) {
        return false
      } else {
        return true
      }
    },
    ...mapState({}),
  },
  created() {

  },
  mounted() {},
  methods: {
    handleClick(ifDefaultIcon, disable) {
      if (ifDefaultIcon && disable === false) {
        this.$store.state.searchEngine.showDialogue = true;
      } else {
        window.open(this.iconUrl.split('favicon.ico')[0], '_blank');
      }
    },
    changeIcon() {
      iconStyle = "-webkit-mask-image: url('" + this.$store.state.searchEngine.defaultIconUrl + "')"
    },
    changeName() {
      iconStyle = "-webkit-mask-image: url('" + this.$store.state.searchEngine.defaultIconUrl + "')"
    }
  }
}
</script>

<style>
.product_image {
  height: 3em;
  width: 3em;
  margin: 0.2em;
}
</style>
