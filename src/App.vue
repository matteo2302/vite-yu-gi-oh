<script >
import { registerRuntimeCompiler } from 'vue';
import AppMain from './components/AppMain.vue'
export default {
  data() {
    return {}
  },
  components: { AppMain },
};
</script>

<template>
  <div class="container">
    <AppMain />
  </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>
