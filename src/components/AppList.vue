<script>
import { store } from '../data/store.js'
export default {
  data() {
    return {
      store
    }
  },

};


</script>

<template>
  <ul class="d-flex row row-col-2 flex-shrink-1">
    <li v-for="pokemon in   store.pokemons  " :key="pokemon._id" class="col">
      <img :src="pokemon.imageUrl" :alt="pokemon.name">
      <div>{{ pokemon.number }}</div>
      <div>{{ pokemon.name }}</div>
      <div>{{ pokemon.type1 }}</div>
    </li>
  </ul>
</template>

<style scoped>
li {
  margin-bottom: 100px;
  border: 1px solid black;
  height: 250px;
  padding: 10px;
}

img {
  height: 70%;
}
</style>
