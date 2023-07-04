<script >
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons'
const typeEndpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1'
import { store } from './data/store.js'
import axios from 'axios';
import AppMain from './components/AppMain.vue'
import AppSelect from './components/AppSelect.vue';
export default {
  data() {
    return {
      type: 'select a type'

    }
  },

  components: { AppMain, AppSelect },
  created() {
    axios.get(endpoint).then((res) => {
      store.pokemons = res.data.docs;

    })
    axios.get(typeEndpoint).then((res) => {
      store.type1 = res.data;

    })

  }
};
</script>

<template>
  <div class="container">
    <AppSelect :type="type" @click="tipo" />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>
