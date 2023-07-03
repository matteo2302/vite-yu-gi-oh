<script>
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons'
import axios from 'axios';
export default {
  data() {
    return {
      pokemons: [],
    }
  },
  created() {
    axios.get(endpoint).then((res) => {
      this.pokemons = res.data.docs;
      console.log(pokemons)
    })

  }
};


</script>

<template>
  <ul class="d-flex">
    <li v-for="pokemon in   pokemons  " :key="pokemon._id">
      <img :src="pokemon.imageUrl" :alt="pokemon.name">
      <div>{{ pokemon.number }}</div>
      <div>{{ pokemon.name }}</div>
      <div>{{ pokemon.type1 }}</div>
    </li>
  </ul>
</template>

<style scoped></style>
