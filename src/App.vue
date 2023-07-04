<script >
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons'
import { store } from './data/store.js'
import axios from 'axios';
import AppMain from './components/AppMain.vue'
export default {
  data() {
    return {}
  },
  components: { AppMain },
  created() {
    axios.get(endpoint).then((res) => {
      store.pokemons = res.data.docs;

    })

  }
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
